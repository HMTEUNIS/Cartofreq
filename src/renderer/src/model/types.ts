export type CurveType = 'linear' | 'exponential'

/** Web can switch. The desktop build is sampler only. */
export type SoundMode = 'oscillator' | 'sampler'

/** Desktop output. Web always plays through the browser. */
export type OutputRoute = 'audio' | 'midi' | 'both'

/** Reject longer clips so a handful of voices stay predictable. */
export const SAMPLE_MAX_SECONDS = 10

/** Short clips loop so a bend can outlast the recording. */
export const SAMPLE_LOOP_UNDER_SECONDS = 5

export const DEFAULT_SAMPLE_BASE_HZ = 440
export const SAMPLE_BASE_MIN = 20
export const SAMPLE_BASE_MAX = 5000

/**
 * Onset strength, separate from `z`.
 * 0 is a smooth fade into the hold; 1 is a clear attack.
 * Missing values use this so existing phrases stay near the previous hit.
 */
export const DEFAULT_VELOCITY = 0.75

/** A free-pitched event. `x` is normalized time, `y` is Hz, `z` is intensity, `velocity` is onset. */
export interface NotePoint {
  id: string
  x: number
  y: number
  z: number
  /** 0 smooth, 1 hit. Does not change filter brightness. */
  velocity: number
  waveType: OscillatorType
}

/** Frequency glide from one point to another across musical time. */
export interface BendConnection {
  id: string
  fromPointId: string
  toPointId: string
  curveType: CurveType
}
