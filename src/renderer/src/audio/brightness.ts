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
