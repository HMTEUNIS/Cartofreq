import { bendProgress, glideSeconds, totalDuration } from '../model/space'
import type { Store } from '../model/store'
import type { CurveType, NotePoint } from '../model/types'
import {
  acquireChannel,
  bendTo,
  holdChannel,
  noteOff,
  silenceMidi,
  strike,
  strikeNote,
} from './midi-port'
import { glideScalar, hzToNoteAndOffset } from './mpe-math'
import type { Transport } from './transport'

/** How often the scheduler wakes. This is not a sample clock. */
const LOOKAHEAD_MS = 25
const WINDOW_S = 0.025
/** Messages are sent when they are due. MIDI bytes have no future timestamp. */
const DUE_S = 0.02
/** Real-time bend density. The file export stays at its own rate. */
const BEND_HZ = 40
const HIT_HOLD_S = 0.25
const RELEASE_S = 0.15

interface Flash {
  id: string
  start: number
  end: number
}

interface Due {
  time: number
  run: () => void
}

/**
 * Lookahead clock for the desktop port. setTimeout only wakes the loop.
 * Bytes go out when their musical time arrives, so a bend is a stream of
 * pitch bend, CC74, and CC11 rather than one burst.
 */
export class MidiScheduler implements Transport {
  private timer = 0
  private playing = false
  private origin = 0
  private pausedAt = 0
  private nextWindow = 0
  private keys = new Set<string>()
  private flashes: Flash[] = []
  private skipUntil = new Map<string, number>()
  private queue: Due[] = []

  constructor(private readonly store: Store) {}

  get isPlaying(): boolean {
    return this.playing
  }

  private now(): number {
    return performance.now() / 1000
  }

  playhead(): number {
    if (!this.playing) return this.pausedAt
    const duration = totalDuration(this.store.bpm)
    const elapsed = this.now() - this.origin
    return ((elapsed % duration) + duration) % duration / duration
  }

  async play(): Promise<void> {
    if (this.playing) return
    const now = this.now()
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
    this.queue = []
    silenceMidi()
  }

  stop(): void {
    this.playing = false
    this.pausedAt = 0
    window.clearTimeout(this.timer)
    this.keys.clear()
    this.skipUntil.clear()
    this.flashes = []
    this.queue = []
    silenceMidi()
  }

  seek(norm: number): void {
    if (this.playing) return
    this.pausedAt = norm < 0 ? 0 : norm > 1 ? 1 : norm
  }

  setBpm(bpm: number): void {
    const head = this.playhead()
    const now = this.now()
    this.store.setBpm(bpm)
    if (!this.playing) return
    this.origin = now - head * totalDuration(this.store.bpm)
    this.queue = []
    silenceMidi()
    this.nextWindow = now
    this.keys.clear()
    this.retargetSkips(now)
    this.resumeBendsInProgress(now)
  }

  suppressUntilNextLoop(pointId: string): void {
    const now = this.now()
    const duration = totalDuration(this.store.bpm)
    if (!this.playing) {
      this.skipUntil.set(pointId, now + duration)
      return
    }
    const loop = Math.floor((now - this.origin) / duration)
    this.skipUntil.set(pointId, this.origin + (loop + 1) * duration)
  }

  private retargetSkips(now: number): void {
    if (this.skipUntil.size === 0) return
    const duration = totalDuration(this.store.bpm)
    const head = this.playing ? this.playhead() : this.pausedAt
    let remaining = 1 - head
    if (remaining <= 1e-6) remaining = 1
    const until = now + remaining * duration
    for (const id of this.skipUntil.keys()) this.skipUntil.set(id, until)
  }

  highlights(now = this.now()): Map<string, number> {
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
    const now = this.now()
    const horizon = now + DUE_S
    while (this.nextWindow < horizon) {
      const from = this.nextWindow
      const to = Math.min(horizon, from + WINDOW_S)
      this.scheduleWindow(from, to)
      this.nextWindow = to
    }
    this.flush(now)
    this.timer = window.setTimeout(this.tick, LOOKAHEAD_MS)
  }

  private flush(now: number): void {
    if (this.queue.length === 0) return
    const due: Due[] = []
    const later: Due[] = []
    for (const item of this.queue) {
      if (item.time <= now + 0.004) due.push(item)
      else later.push(item)
    }
    due.sort((a, b) => a.time - b.time)
    for (const item of due) item.run()
    this.queue = later
  }

  private enqueue(time: number, run: () => void): void {
    this.queue.push({ time, run })
  }

  private scheduleWindow(from: number, to: number): void {
    const duration = totalDuration(this.store.bpm)
    const now = this.now()
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
    const outgoing = this.store.outgoing(point.id)
    if (outgoing.length > 0) {
      for (const bend of outgoing) {
        const target = this.store.points.get(bend.toPointId)
        if (!target) continue
        const seconds = glideSeconds(point.x, target.x, this.store.bpm)
        this.queueBend(point, target, bend.curveType, time, seconds)
      }
    } else if (!this.isBendTarget(point.id)) {
      this.queueHit(point, time)
    }
    this.flashes.push({ id: point.id, start: time, end: time + 0.18 })
  }

  private isBendTarget(pointId: string): boolean {
    return this.store.bends.some((bend) => bend.toPointId === pointId)
  }

  private queueHit(point: NotePoint, time: number): void {
    const channel = acquireChannel(time)
    const midiNote = hzToNoteAndOffset(point.y).note
    const offAt = time + HIT_HOLD_S + RELEASE_S
    holdChannel(channel, offAt)
    this.enqueue(time, () => {
      strike(channel, point)
    })
    this.enqueue(offAt, () => {
      noteOff(channel, midiNote)
      holdChannel(channel, offAt)
    })
  }

  private queueBend(
    from: NotePoint,
    to: NotePoint,
    curve: CurveType,
    time: number,
    duration: number,
    baseNote = hzToNoteAndOffset(from.y).note,
  ): void {
    const glide = Math.max(0.05, duration)
    const channel = acquireChannel(time)
    const steps = Math.max(2, Math.floor(glide * BEND_HZ))
    const offAt = time + glide + RELEASE_S
    holdChannel(channel, offAt)
    this.enqueue(time, () => {
      strikeNote(channel, baseNote, from.y, from.z, from.velocity)
    })
    for (let step = 1; step <= steps; step++) {
      const t = step / steps
      const at = time + glide * t
      const hz = glideScalar(from.y, to.y, t, curve)
      const bright = from.z + (to.z - from.z) * t
      const velocity = glideScalar(from.velocity, to.velocity, t, curve)
      this.enqueue(at, () => {
        bendTo(channel, baseNote, hz, bright, velocity)
      })
    }
    this.enqueue(offAt, () => {
      noteOff(channel, baseNote)
      holdChannel(channel, offAt)
    })
  }

  private resumeBendsInProgress(now: number): void {
    const head = this.pausedAt
    for (const bend of this.store.bends) {
      const from = this.store.points.get(bend.fromPointId)
      const to = this.store.points.get(bend.toPointId)
      if (!from || !to) continue
      const progress = bendProgress(from.x, to.x, head)
      if (progress == null) continue
      const hz = glideScalar(from.y, to.y, progress, bend.curveType)
      const z = glideScalar(from.z, to.z, progress, 'linear')
      const velocity = glideScalar(from.velocity, to.velocity, progress, bend.curveType)
      const remaining = (1 - progress) * glideSeconds(from.x, to.x, this.store.bpm)
      this.queueBend(
        { ...from, y: hz, z, velocity },
        to,
        bend.curveType,
        now,
        remaining,
        hzToNoteAndOffset(from.y).note,
      )
    }
  }
}
