import { BARS, clamp, forwardDelta } from './space'
import type { BendConnection, CurveType, NotePoint } from './types'

/** One column is one bar: the span of four beats. */
export const COLUMN_COUNT = BARS
export const COLUMN_SPAN = 1 / BARS

export interface ColumnPoint {
  /** Time offset from the start of the bar, in normalized 0–1. */
  dx: number
  y: number
  z: number
  velocity: number
  waveType: NotePoint['waveType']
}

export interface ColumnBend {
  from: number
  to: number
  curveType: CurveType
}

export interface ColumnClip {
  points: ColumnPoint[]
  bends: ColumnBend[]
}

export type PasteMode = 'overwrite' | 'addition'

/** Column index for a normalized time. The loop point belongs to bar 1. */
export function columnOf(x: number): number {
  if (!(x < 1)) return 0
  const index = Math.floor(clamp(x, 0, 1) * COLUMN_COUNT)
  return index >= COLUMN_COUNT ? COLUMN_COUNT - 1 : index
}

export function columnStart(index: number): number {
  return index / COLUMN_COUNT
}

/** Normalized time at the middle of the bar. */
export function columnCenterNorm(index: number): number {
  return (index + 0.5) / COLUMN_COUNT
}

export function describeColumn(index: number): string {
  return `bar ${index + 1}`
}

/**
 * Points that sit in the column, minus arrivals of bends that started outside it.
 * A bend is kept only when both ends are kept and the glide is at most one column long.
 * A longer glide leaves its start as a lone point and drops an outside arrival entirely.
 */
export function clipColumn(
  points: Iterable<NotePoint>,
  bends: readonly BendConnection[],
  index: number,
): ColumnClip {
  const list = [...points]
  const byId = new Map(list.map((point) => [point.id, point]))
  const outsideArrival = new Set<string>()
  for (const bend of bends) {
    const from = byId.get(bend.fromPointId)
    const to = byId.get(bend.toPointId)
    if (!from || !to) continue
    if (columnOf(to.x) === index && columnOf(from.x) !== index) outsideArrival.add(to.id)
  }

  const kept = list.filter((point) => columnOf(point.x) === index && !outsideArrival.has(point.id))
  const start = columnStart(index)
  const order = new Map(kept.map((point, i) => [point.id, i]))
  const clipPoints: ColumnPoint[] = kept.map((point) => ({
    dx: clamp(point.x >= 1 ? 0 : point.x - start, 0, COLUMN_SPAN - 1e-6),
    y: point.y,
    z: point.z,
    velocity: point.velocity,
    waveType: point.waveType,
  }))

  const clipBends: ColumnBend[] = []
  for (const bend of bends) {
    const fromIndex = order.get(bend.fromPointId)
    const toIndex = order.get(bend.toPointId)
    if (fromIndex === undefined || toIndex === undefined) continue
    const from = kept[fromIndex]
    const to = kept[toIndex]
    if (!from || !to) continue
    if (forwardDelta(from.x, to.x) > COLUMN_SPAN + 1e-6) continue
    clipBends.push({ from: fromIndex, to: toIndex, curveType: bend.curveType })
  }

  return { points: clipPoints, bends: clipBends }
}
