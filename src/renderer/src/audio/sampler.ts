import processorUrl from '@soundtouchjs/audio-worklet/processor?url'
import { SoundTouchNode } from '@soundtouchjs/audio-worklet'
import type { CurveType } from '../model/types'
import { rampParam, type VoiceSource } from './voice'

/** SoundTouch's pitch AudioParam domain. */
const PITCH_MIN = 0.1
const PITCH_MAX = 8

/**
 * Register the processor. The context has to be running first: Chrome can
 * resolve addModule on a suspended context and then refuse to construct the node.
 */
export async function ensureSoundTouch(context: AudioContext): Promise<void> {
  if (context.state !== 'running') await context.resume()
  await SoundTouchNode.register(context, processorUrl)
}

/** Pitch multiplier for a note at `hz` against the clip's base frequency. */
export function pitchRatio(hz: number, baseHz: number): number {
  const base = baseHz > 0 ? baseHz : 440
  const raw = (hz > 0 ? hz : base) / base
  return Math.min(PITCH_MAX, Math.max(PITCH_MIN, raw))
}

/**
 * How early the clip has to start so pitched audio is coming out at the note.
 * Pitching down makes SoundTouch read several times faster than it writes,
 * so a low note needs more of the clip in the pipe before anything is heard.
 */
export function samplerLead(hz: number, baseHz: number): number {
  const tempo = 1 / pitchRatio(hz, baseHz)
  return Math.min(0.3, tempo * 0.024 + 0.05)
}

export interface SamplePlayback {
  buffer(): AudioBuffer | null
  baseHz(): number
  loop(): boolean
}

/**
 * One SoundTouch worklet for the life of the voice.
 * Each note starts a fresh AudioBufferSourceNode into that worklet.
 * Playback rate stays at 1 so the clip keeps its length and only pitch moves.
 *
 * AudioBufferSourceNode → SoundTouchNode → (filter, owned by the voice)
 */
export class SoundTouchSamplerSource implements VoiceSource {
  private readonly node: SoundTouchNode
  private current: AudioBufferSourceNode | null = null
  private lastHz = 440
  /** Timer that commits `stop` shortly before the note ends, so a slide can still extend it. */
  private endTimer = 0

  constructor(
    private readonly context: AudioContext,
    private readonly sample: SamplePlayback,
  ) {
    this.node = new SoundTouchNode({ context })
    this.node.playbackRate.value = 1
    // The automatic window is about 110ms and the first sound comes out later
    // than that. A short hit would already be silent by then.
    this.node.setStretchParameters({ sequenceMs: 32, seekWindowMs: 12, overlapMs: 8 })
  }

  /** A time already behind the audio clock makes setValueAtTime throw and drops the note. */
  private at(time: number): number {
    return Math.max(time, this.context.currentTime)
  }

  setPitch(hz: number, time: number): void {
    this.lastHz = hz
    this.node.pitch.setValueAtTime(pitchRatio(hz, this.sample.baseHz()), this.at(time))
  }

  rampPitch(fromHz: number, toHz: number, start: number, end: number, curve: CurveType): void {
    this.lastHz = toHz
    const base = this.sample.baseHz()
    const begin = this.at(start)
    rampParam(this.node.pitch, pitchRatio(fromHz, base), pitchRatio(toHz, base), begin, Math.max(end, begin), curve)
  }

  currentHz(): number {
    const base = this.sample.baseHz()
    const ratio = this.node.pitch.value
    if (ratio > 0 && base > 0) return ratio * base
    return this.lastHz
  }

  cancel(time: number): void {
    this.node.pitch.cancelScheduledValues(time)
  }

  start(time: number): void {
    this.halt(time)
    const buffer = this.sample.buffer()
    if (!buffer) return
    const source = this.context.createBufferSource()
    source.buffer = buffer
    source.loop = this.sample.loop()
    const when = this.at(time)
    source.playbackRate.setValueAtTime(1, when)
    this.node.playbackRate.setValueAtTime(1, when)
    source.connect(this.node)
    source.start(when)
    this.current = source
  }

  /**
   * Plan to end the clip at `time`. Safe to call again with a later time until
   * the stop is committed, which is how a slide survives an inserted node.
   */
  aimEnd(time: number): void {
    this.clearEndTimer()
    const waitMs = (time - this.context.currentTime) * 1000 - 40
    const fire = () => {
      this.endTimer = 0
      this.stop(time)
    }
    if (waitMs <= 0) fire()
    else this.endTimer = window.setTimeout(fire, waitMs)
  }

  /**
   * Schedule the clip to end. A future time stays connected so the note can
   * finish; stopping at the current time disconnects immediately.
   */
  stop(time: number): void {
    this.clearEndTimer()
    const current = this.current
    if (!current) return
    const when = this.at(time)
    try {
      current.stop(when)
    } catch {
      /* already stopped, or stop precedes the scheduled start */
    }
    if (when > this.context.currentTime + 0.001) return
    this.current = null
    try {
      current.disconnect()
    } catch {
      /* already disconnected */
    }
  }

  connect(destination: AudioNode): void {
    this.node.connect(destination)
  }

  dispose(): void {
    this.halt(0)
    try {
      this.node.disconnect()
    } catch {
      /* already disconnected */
    }
  }

  private clearEndTimer(): void {
    if (this.endTimer === 0) return
    window.clearTimeout(this.endTimer)
    this.endTimer = 0
  }

  /** End the playing clip at `time` so the next note can take the worklet. */
  private halt(time: number): void {
    this.clearEndTimer()
    const previous = this.current
    this.current = null
    if (!previous) return
    try {
      previous.stop(this.at(time))
    } catch {
      /* already stopped */
    }
    const detach = () => {
      try {
        previous.disconnect()
      } catch {
        /* already disconnected */
      }
    }
    if (time <= this.context.currentTime + 0.001) detach()
    else previous.addEventListener('ended', detach, { once: true })
  }
}
