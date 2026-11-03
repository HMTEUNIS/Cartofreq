export type CurveType = 'linear' | 'exponential'

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
