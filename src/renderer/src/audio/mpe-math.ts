import { clamp } from '../model/space'
import type { CurveType } from '../model/types'

/** Member-channel pitch bend range. ±48 semitones is the MPE default. */
export const MPE_MEMBER_BEND_RANGE_SEMITONES = 48

export function hzToMidiFloat(hz: number): number {
  const safe = hz > 0 ? hz : 1e-6
  return 69 + 12 * Math.log2(safe / 440)
}

/** Nearest MIDI note, plus the semitone offset at the attack (−0.5..+0.5 when in range). */
export function hzToNoteAndOffset(hz: number): { note: number; offsetSemitones: number } {
  const midiFloat = hzToMidiFloat(hz)
  const rounded = Math.round(midiFloat)
  const note = clamp(rounded, 0, 127)
  return { note, offsetSemitones: midiFloat - note }
}

/** Pitch bend −1..1 across the ±48 semitone member range. */
export function offsetToBend(offsetSemitones: number): number {
  return clamp(offsetSemitones / MPE_MEMBER_BEND_RANGE_SEMITONES, -1, 1)
}

export function zToCC74(z: number): number {
  return Math.round(clamp(z, 0, 1) * 127)
}

/** Exponential in the value itself when both ends are positive; otherwise linear. */
export function glideScalar(from: number, to: number, t: number, curve: CurveType): number {
  const u = clamp(t, 0, 1)
  if (curve === 'exponential' && from > 0 && to > 0) return from * (to / from) ** u
  return from + (to - from) * u
}
