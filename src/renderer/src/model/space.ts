import type { CurveType } from './types'

/** A1. Bottom of the pitch axis. */
export const FREQ_MIN = 55
/** A6. Top of the pitch axis. */
export const FREQ_MAX = 1760
/** log2(1760/55) = 5 octaves, evenly spaced on the visual Y axis. */
export const OCTAVE_SPAN = Math.log2(FREQ_MAX / FREQ_MIN)

export const WORLD_X = 16
export const WORLD_Y = 15
export const WORLD_Z = 5

/** New clicks land on this intensity, and the pitch grid is drawn here. */
export const PLANE_Z_NORM = 0.72
export const PLANE_Z = WORLD_Z * PLANE_Z_NORM

export const BARS = 4
export const BEATS_PER_BAR = 4
export const TOTAL_BEATS = BARS * BEATS_PER_BAR

export const BPM_MIN = 40
export const BPM_MAX = 240

const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'] as const

export interface PitchMark {
  freq: number
  y: number
  label: string
  natural: boolean
  octaveAnchor: boolean
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

export function totalDuration(bpm: number): number {
  return TOTAL_BEATS * (60 / bpm)
}

/** Visual height for a Hz value. Octaves are evenly spaced. */
export function freqToY(freq: number): number {
  const safe = Math.max(freq, 1e-6)
  const octaves = Math.log2(safe / FREQ_MIN)
  return (octaves / OCTAVE_SPAN) * WORLD_Y
}

/** Inverse of {@link freqToY}. */
export function yToFreq(y: number): number {
  const octaves = (y / WORLD_Y) * OCTAVE_SPAN
  return FREQ_MIN * 2 ** octaves
}

export function noteFreq(name: string): number {
  const match = /^([A-G]#?)(-?\d+)$/.exec(name)
  if (!match) throw new Error(`Unknown note ${name}`)
  const semi = NOTE_NAMES.indexOf(match[1] as (typeof NOTE_NAMES)[number])
  if (semi < 0) throw new Error(`Unknown note ${name}`)
  const octave = Number(match[2])
  const midi = (octave + 1) * 12 + semi
  return 440 * 2 ** ((midi - 69) / 12)
}

export function pitchMarks(): PitchMark[] {
  const marks: PitchMark[] = []
  // A1 (midi 33) through A6 (midi 93).
  for (let midi = 33; midi <= 93; midi++) {
    const freq = 440 * 2 ** ((midi - 69) / 12)
    const name = NOTE_NAMES[midi % 12]
    const octave = Math.floor(midi / 12) - 1
    marks.push({
      freq,
      y: freqToY(freq),
      label: `${name}${octave}`,
      natural: !name.includes('#'),
      octaveAnchor: name === 'A',
    })
  }
  return marks
}

/** Nearest 12-tone name plus cents, so free pitches stay readable. */
export function describePitch(freq: number): string {
  if (!Number.isFinite(freq) || freq <= 0) return '—'
  const midiFloat = 69 + 12 * Math.log2(freq / 440)
  const midi = Math.round(midiFloat)
  const cents = Math.round((midiFloat - midi) * 100)
  const name = NOTE_NAMES[((midi % 12) + 12) % 12]
  const octave = Math.floor(midi / 12) - 1
  const note = `${name}${octave}`
  if (cents === 0) return note
  return `${note} ${cents > 0 ? `+${cents}` : cents}¢`
}

export function formatHz(freq: number): string {
  return `${freq.toFixed(2)} Hz`
}

/**
 * Snap normalized time to the nearest quarter-beat.
 * The loop point (the far end of the 16 beats) lands on the downbeat.
 */
export function quantizeToQuarterBeat(x: number): number {
  const steps = TOTAL_BEATS * 4
  let index = Math.round(clamp(x, 0, 1) * steps)
  if (index >= steps) index = 0
  return index / steps
}

/** `norm` is 0–1 across 4 bars of 4/4. */
export function describeTime(norm: number): string {
  const beats = clamp(norm, 0, 0.999999) * TOTAL_BEATS
  const bar = Math.floor(beats / BEATS_PER_BAR) + 1
  const beat = (beats % BEATS_PER_BAR) + 1
  return `bar ${bar} · beat ${beat.toFixed(2)}`
}

export function worldFromNote(point: { x: number; y: number; z: number }): {
  x: number
  y: number
  z: number
} {
  return {
    x: point.x * WORLD_X,
    y: freqToY(point.y),
    z: point.z * WORLD_Z,
  }
}

export function noteFromWorld(world: { x: number; y: number; z: number }): {
  x: number
  y: number
  z: number
} {
  const y = clamp(world.y, 0, WORLD_Y)
  return {
    x: clamp(world.x / WORLD_X, 0, 1),
    y: clamp(yToFreq(y), FREQ_MIN, FREQ_MAX),
    z: clamp(world.z / WORLD_Z, 0, 1),
  }
}

/** Forward musical distance in normalized time. Wraps when the target is earlier. */
export function forwardDelta(fromX: number, toX: number): number {
  if (toX < fromX) return toX + 1 - fromX
  return toX - fromX
}

export function glideSeconds(fromX: number, toX: number, bpm: number): number {
  return Math.max(0.05, forwardDelta(fromX, toX) * totalDuration(bpm))
}

/**
 * Where `head` sits inside a bend, 0 at the source and 1 at the target.
 * Null when the playhead is outside the forward span.
 */
export function bendProgress(fromX: number, toX: number, head: number): number | null {
  const wraps = toX < fromX
  const dx = forwardDelta(fromX, toX)
  if (dx <= 1e-6) return null
  let rel = head - fromX
  if (wraps && rel < 0) rel += 1
  if (rel <= 1e-4 || rel >= dx - 1e-3) return null
  return rel / dx
}

export function interpolateFreq(fromHz: number, toHz: number, t: number, curve: CurveType): number {
  const u = clamp(t, 0, 1)
  if (curve === 'linear') return fromHz + (toHz - fromHz) * u
  const a = Math.max(fromHz, 1e-4)
  const b = Math.max(toHz, 1e-4)
  return a * (b / a) ** u
}

/**
 * Backward jump in world x that splits a wrapped glide into two drawn segments.
 * Forward samples only increase in x; crossing the loop point drops from the
 * right edge back to the left.
 */
export const BEND_WRAP_BREAK = 0.05

/** World-space samples. X wraps visually when the bend crosses the loop point. */
export function sampleBendWorld(
  from: { x: number; y: number; z: number },
  to: { x: number; y: number; z: number },
  curve: CurveType,
  segments = 64,
): Array<{ x: number; y: number; z: number }> {
  const dx = forwardDelta(from.x, to.x)
  const samples: Array<{ x: number; y: number; z: number }> = []
  for (let i = 0; i <= segments; i++) {
    const t = i / segments
    let xNorm = from.x + dx * t
    if (xNorm > 1) xNorm -= 1
    const freq = interpolateFreq(from.y, to.y, t, curve)
    const z = from.z + (to.z - from.z) * t
    samples.push({
      x: xNorm * WORLD_X,
      y: freqToY(freq),
      z: z * WORLD_Z,
    })
  }
  return samples
}
