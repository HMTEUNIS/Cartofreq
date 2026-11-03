export { CUTOFF_MAX, CUTOFF_MIN, zToCutoff, zToGain, zToQ } from './brightness'
import { CUTOFF_MIN, zToQ } from './brightness'
import type { CurveType } from '../model/types'

export interface VoiceSource {
  setPitch(hz: number, time: number): void
  rampPitch(fromHz: number, toHz: number, start: number, end: number, curve: CurveType): void
  currentHz(): number
  cancel(time: number): void
  start(time: number): void
  stop(time: number): void
  /** Push the clip's end later. A slide calls this again instead of restarting. */
  aimEnd?(time: number): void
  connect(destination: AudioNode): void
  dispose(): void
  setWave?(type: OscillatorType): void
}

export interface Voice {
  source: VoiceSource
  filter: BiquadFilterNode
  gain: GainNode
  panner: StereoPannerNode
  busy: boolean
  releaseTime: number
  /** Held by the live keyboard gesture so lookahead notes cannot steal it. */
  pinned: boolean
  /** Bumped when the voice is reused, so a slide cannot keep a stolen voice. */
  generation: number
}

/**
 * Fixed pool. Gain stays at 0 until a note opens it, so idle voices are silent.
 * Graph per voice: source → lowpass → gain → panner → masterGain.
 * Oscillator sources keep running. Sampler sources start a buffer on each note.
 */
export class VoicePool {
  readonly masterGain: GainNode
  readonly voices: Voice[]

  constructor(
    context: AudioContext,
    size: number,
    private readonly createSource: () => VoiceSource,
    private readonly warmStart: boolean,
  ) {
    this.masterGain = context.createGain()
    this.masterGain.gain.value = 0.8
    const count = Math.max(1, Math.floor(size))
    this.voices = Array.from({ length: count }, () => this.createVoice(context))
  }

  /**
   * Prefer an unused voice, then one whose release has finished,
   * otherwise steal the voice that frees soonest.
   * `busy` stays true after {@link markRelease} so a voice still inside
   * its release is not treated as idle and grabbed ahead of untouched voices.
   */
  acquire(now: number): Voice {
    const open = this.voices.filter((candidate) => !candidate.pinned)
    const source = open.length > 0 ? open : this.voices
    const voice =
      source.find((candidate) => !candidate.busy)
      ?? source.find((candidate) => candidate.releaseTime <= now)
      ?? this.earliestRelease(source)
    voice.busy = true
    voice.releaseTime = Number.POSITIVE_INFINITY
    voice.generation += 1
    return voice
  }

  markRelease(voice: Voice, releaseTime: number): void {
    voice.releaseTime = releaseTime
  }

  /** Drop scheduled automation and close every gate. */
  silence(now: number): void {
    for (const voice of this.voices) {
      voice.source.cancel(now)
      voice.source.stop(now)
      voice.filter.frequency.cancelScheduledValues(now)
      voice.filter.Q.cancelScheduledValues(now)
      voice.gain.gain.cancelScheduledValues(now)
      voice.gain.gain.setValueAtTime(0, now)
      voice.busy = false
      voice.pinned = false
      voice.releaseTime = now
    }
  }

  dispose(now: number): void {
    this.silence(now)
    for (const voice of this.voices) {
      voice.source.dispose()
      voice.filter.disconnect()
      voice.gain.disconnect()
      voice.panner.disconnect()
    }
    this.masterGain.disconnect()
  }

  private earliestRelease(source: Voice[]): Voice {
    let chosen = source[0]
    for (const candidate of source) {
      if (candidate.releaseTime < chosen.releaseTime) chosen = candidate
    }
    return chosen
  }

  private createVoice(context: AudioContext): Voice {
    const source = this.createSource()
    const filter = context.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = CUTOFF_MIN
    filter.Q.value = zToQ(0)
    const gain = context.createGain()
    gain.gain.value = 0
    const panner = context.createStereoPanner()
    panner.pan.value = 0

    source.connect(filter)
    filter.connect(gain)
    gain.connect(panner)
    panner.connect(this.masterGain)
    if (this.warmStart) source.start(context.currentTime)

    return {
      source,
      filter,
      gain,
      panner,
      busy: false,
      releaseTime: 0,
      pinned: false,
      generation: 0,
    }
  }
}

/** Shared AudioParam glide. Exponential targets stay above 0. */
export function rampParam(
  param: AudioParam,
  from: number,
  to: number,
  start: number,
  end: number,
  curve: CurveType,
): void {
  param.setValueAtTime(from, start)
  if (end <= start) return
  const span = Math.max(Math.abs(from), Math.abs(to), 1e-3)
  if (Math.abs(from - to) / span < 1e-4) return
  if (curve === 'exponential' && from > 0 && to > 0) {
    param.exponentialRampToValueAtTime(to, end)
    return
  }
  param.linearRampToValueAtTime(to, end)
}

/** Always-running oscillator. `stop` leaves it running; gain closes the note. */
export class OscillatorSource implements VoiceSource {
  private readonly osc: OscillatorNode
  private started = false

  constructor(context: AudioContext) {
    this.osc = context.createOscillator()
  }

  setWave(type: OscillatorType): void {
    const next = type === 'custom' ? 'sine' : type
    if (this.osc.type !== next) this.osc.type = next
  }

  setPitch(hz: number, time: number): void {
    this.osc.frequency.setValueAtTime(Math.max(hz, 0.001), time)
  }

  rampPitch(fromHz: number, toHz: number, start: number, end: number, curve: CurveType): void {
    rampParam(this.osc.frequency, Math.max(fromHz, 0.001), Math.max(toHz, 0.001), start, end, curve)
  }

  currentHz(): number {
    return this.osc.frequency.value
  }

  cancel(time: number): void {
    this.osc.frequency.cancelScheduledValues(time)
  }

  start(time: number): void {
    if (this.started) return
    this.started = true
    this.osc.start(time)
  }

  stop(_time: number): void {}

  connect(destination: AudioNode): void {
    this.osc.connect(destination)
  }

  dispose(): void {
    try {
      if (this.started) this.osc.stop()
    } catch {
      /* already stopped */
    }
    try {
      this.osc.disconnect()
    } catch {
      /* already disconnected */
    }
  }
}
