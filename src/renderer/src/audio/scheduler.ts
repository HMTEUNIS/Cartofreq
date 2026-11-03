import {
  bendProgress,
  glideSeconds,
  interpolateFreq,
  totalDuration,
} from '../model/space'
import type { Store } from '../model/store'
import type { NotePoint } from '../model/types'
import type { AudioEngine } from './synth'
import { SCHEDULE_AHEAD_S } from './transport'

/** How often the scheduler wakes. This is not the audio clock. */
const LOOKAHEAD_MS = 25
const WINDOW_S = 0.025

interface Flash {
  id: string
  start: number
  end: number
}

/**
 * Lookahead scheduler. setTimeout only wakes the loop.
 * Every note is placed with AudioContext.currentTime so main-thread jitter
 * does not move the attack.
 */
export class Scheduler {
  private timer = 0
  private playing = false
  /** Audio time at which normalized playhead position 0 occurs. */
  private origin = 0
  private pausedAt = 0
  /** Exclusive start of the next scheduling window. */
  private nextWindow = 0
  private keys = new Set<string>()
  private flashes: Flash[] = []
  /**
   * Points just performed live. Values are the audio time of the next loop
   * start; events before that belong to this pass and must not double the live voice.
   */
  private skipUntil = new Map<string, number>()

  constructor(
    private readonly audio: AudioEngine,
    private readonly store: Store,
  ) {}

  get isPlaying(): boolean {
    return this.playing
  }

  playhead(): number {
    if (!this.playing) return this.pausedAt
    const duration = totalDuration(this.store.bpm)
    const elapsed = this.audio.context.currentTime - this.origin
    return ((elapsed % duration) + duration) % duration / duration
  }

  async play(): Promise<void> {
    if (this.playing) return
    await this.audio.ensureRunning()
    const now = this.audio.context.currentTime
    const duration = totalDuration(this.store.bpm)
    this.origin = now - this.pausedAt * duration
    this.nextWindow = now - 0.001
    this.playing = true
    this.keys.clear()
    this.retargetSkips(now)
    this.resumeBendsInProgress(now)
    this.tick()
  }

  pause(): void {
    if (!this.playing) return
    this.pausedAt = this.playhead()
    this.playing = false
    window.clearTimeout(this.timer)
    this.keys.clear()
    this.flashes = []
    this.audio.silence()
  }

  stop(): void {
    this.playing = false
    this.pausedAt = 0
    window.clearTimeout(this.timer)
    this.keys.clear()
    this.skipUntil.clear()
    this.flashes = []
    this.audio.silence()
  }

  seek(norm: number): void {
    if (this.playing) return
    this.pausedAt = norm < 0 ? 0 : norm > 1 ? 1 : norm
  }

  toggle(): void {
    if (this.playing) this.pause()
    else void this.play()
  }

  /**
   * Keep the playhead visually still when tempo changes, and drop the
   * lookahead so the next wake reschedules against the new duration.
   */
  setBpm(bpm: number): void {
    const head = this.playhead()
    const now = this.audio.context.currentTime
    this.store.setBpm(bpm)
    if (!this.playing) return
    this.origin = now - head * totalDuration(this.store.bpm)
    this.nextWindow = now
    this.keys.clear()
    this.retargetSkips(now)
  }

  /**
   * The point was just heard live. Skip it until the playhead reaches the
   * next loop, then let the scheduler play it like any other note.
   */
  suppressUntilNextLoop(pointId: string): void {
    const now = this.audio.context.currentTime
    const duration = totalDuration(this.store.bpm)
    if (!this.playing) {
      this.skipUntil.set(pointId, now + duration)
      return
    }
    const loop = Math.floor((now - this.origin) / duration)
    this.skipUntil.set(pointId, this.origin + (loop + 1) * duration)
  }

  /** Keep "skip the rest of this pass" aligned when the loop clock moves. */
  private retargetSkips(now: number): void {
    if (this.skipUntil.size === 0) return
    const duration = totalDuration(this.store.bpm)
    const head = this.playing ? this.playhead() : this.pausedAt
    let remaining = 1 - head
    if (remaining <= 1e-6) remaining = 1
    const until = now + remaining * duration
    for (const id of this.skipUntil.keys()) this.skipUntil.set(id, until)
  }

  highlights(now = this.audio.context.currentTime): Map<string, number> {
    const levels = new Map<string, number>()
    this.flashes = this.flashes.filter((flash) => flash.end > now)
    for (const flash of this.flashes) {
      if (now < flash.start || now > flash.end) continue
      const level = 1 - (now - flash.start) / (flash.end - flash.start)
      levels.set(flash.id, Math.max(levels.get(flash.id) ?? 0, level))
    }
    return levels
  }

  private tick = (): void => {
    if (!this.playing) return
    const horizon = this.audio.context.currentTime + SCHEDULE_AHEAD_S
    while (this.nextWindow < horizon) {
      const from = this.nextWindow
      const to = Math.min(horizon, from + WINDOW_S)
      this.scheduleWindow(from, to)
      this.nextWindow = to
    }
    this.timer = window.setTimeout(this.tick, LOOKAHEAD_MS)
  }

  private scheduleWindow(from: number, to: number): void {
    const duration = totalDuration(this.store.bpm)
    const now = this.audio.context.currentTime
    const firstLoop = Math.floor((from - this.origin) / duration) - 1
    const lastLoop = Math.floor((to - this.origin) / duration) + 1
    const points = [...this.store.points.values()]

    for (let loop = firstLoop; loop <= lastLoop; loop++) {
      for (const point of points) {
        const time = this.origin + (loop + point.x) * duration
        if (time <= from || time > to) continue
        if (time < now - 0.03) continue
        const replayAfter = this.skipUntil.get(point.id)
        if (replayAfter !== undefined && time < replayAfter) continue
        if (replayAfter !== undefined) this.skipUntil.delete(point.id)
        const key = `${point.id}:${loop}`
        if (this.keys.has(key)) continue
        this.keys.add(key)
        this.fire(point, time)
      }
    }

    if (this.keys.size > 2000) {
      const currentLoop = Math.floor((now - this.origin) / duration)
      for (const key of this.keys) {
        const loop = Number(key.slice(key.lastIndexOf(':') + 1))
        if (loop < currentLoop - 2) this.keys.delete(key)
      }
    }
  }

  private fire(point: NotePoint, time: number): void {
    try {
      this.dispatch(point, time)
    } catch (error) {
      console.warn(error)
    }
  }

  private dispatch(point: NotePoint, time: number): void {
    const outgoing = this.store.outgoing(point.id)
    if (outgoing.length > 0) {
      for (const bend of outgoing) {
        const target = this.store.points.get(bend.toPointId)
        if (!target) continue
        // forwardDelta inside glideSeconds wraps when the target is earlier in the loop.
        const seconds = glideSeconds(point.x, target.x, this.store.bpm)
        // A node dropped onto a slide is the end of one leg and the start of the next.
        // Sampler mode keeps that clip playing. The head of the slide still starts it.
        if (this.isBendTarget(point.id)) {
          this.audio.continueBend(point, target, bend.curveType, time, seconds)
        } else {
          this.audio.triggerBend(point, target, bend.curveType, time, seconds)
        }
      }
    } else if (!this.isBendTarget(point.id)) {
      this.audio.triggerHit(point, time)
    }
    this.flashes.push({ id: point.id, start: time, end: time + 0.18 })
  }

  /** Bend targets are already the end of a glide, so they must not also play a hit. */
  private isBendTarget(pointId: string): boolean {
    return this.store.bends.some((bend) => bend.toPointId === pointId)
  }

  /**
   * If play resumes mid-glide, continue that voice from the interpolated pitch
   * and Z. triggerBend ramps cutoff and Q from that Z, not only frequency.
   */
  private resumeBendsInProgress(now: number): void {
    const head = this.pausedAt
    for (const bend of this.store.bends) {
      const from = this.store.points.get(bend.fromPointId)
      const to = this.store.points.get(bend.toPointId)
      if (!from || !to) continue
      const progress = bendProgress(from.x, to.x, head)
      if (progress == null) continue
      const freq = interpolateFreq(from.y, to.y, progress, bend.curveType)
      const z = from.z + (to.z - from.z) * progress
      const remaining = (1 - progress) * glideSeconds(from.x, to.x, this.store.bpm)
      this.audio.triggerBend(
        { ...from, y: freq, z },
        to,
        bend.curveType,
        now,
        remaining,
      )
    }
  }
}
