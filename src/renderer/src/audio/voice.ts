export const CUTOFF_MIN = 200
export const CUTOFF_MAX = 8000

/** Log-spaced lowpass cutoff. z = 0 is 200 Hz, z = 1 is 8 kHz. */
export function zToCutoff(z: number): number {
  return CUTOFF_MIN * (CUTOFF_MAX / CUTOFF_MIN) ** z
}

/** Mild resonance lift. 0.5 at z = 0, 3 at z = 1. */
export function zToQ(z: number): number {
  return 0.5 + z * 2.5
}

/** Mild level lift. 0.4 at z = 0, 1 at z = 1. */
export function zToGain(z: number): number {
  return 0.4 + z * 0.6
}

export interface Voice {
  osc: OscillatorNode
  filter: BiquadFilterNode
  gain: GainNode
  panner: StereoPannerNode
  busy: boolean
  releaseTime: number
  /** Held by the live keyboard gesture so lookahead notes cannot steal it. */
  pinned: boolean
}

/**
 * Fixed pool of always-running oscillators. Gain stays at 0 until a note
 * opens it, so idle voices are silent. Graph per voice:
 * osc → lowpass → gain → panner → masterGain.
 */
export class VoicePool {
  readonly masterGain: GainNode
  readonly voices: Voice[]

  constructor(context: AudioContext, size = 16) {
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
    return voice
  }

  markRelease(voice: Voice, releaseTime: number): void {
    voice.releaseTime = releaseTime
  }

  /** Drop scheduled automation and close every gate. Oscillators keep running. */
  silence(now: number): void {
    for (const voice of this.voices) {
      voice.osc.frequency.cancelScheduledValues(now)
      voice.filter.frequency.cancelScheduledValues(now)
      voice.filter.Q.cancelScheduledValues(now)
      voice.gain.gain.cancelScheduledValues(now)
      voice.gain.gain.setValueAtTime(0, now)
      voice.busy = false
      voice.pinned = false
      voice.releaseTime = now
    }
  }

  private earliestRelease(source: Voice[]): Voice {
    let chosen = source[0]
    for (const candidate of source) {
      if (candidate.releaseTime < chosen.releaseTime) chosen = candidate
    }
    return chosen
  }

  private createVoice(context: AudioContext): Voice {
    const osc = context.createOscillator()
    const filter = context.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = CUTOFF_MIN
    filter.Q.value = zToQ(0)
    const gain = context.createGain()
    gain.gain.value = 0
    const panner = context.createStereoPanner()
    panner.pan.value = 0

    osc.connect(filter)
    filter.connect(gain)
    gain.connect(panner)
    panner.connect(this.masterGain)
    osc.start()

    return {
      osc,
      filter,
      gain,
      panner,
      busy: false,
      releaseTime: 0,
      pinned: false,
    }
  }
}
