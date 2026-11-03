import MidiWriter from 'midi-writer-js'
import {
  glideScalar,
  hzToMidiFloat,
  hzToNoteAndOffset,
  offsetToBend,
  zToCC74,
} from '../audio/mpe-math'
import { clamp, forwardDelta, totalDuration } from '../model/space'
import { DEFAULT_VELOCITY, type BendConnection, type CurveType, type NotePoint } from '../model/types'

export { MPE_MEMBER_BEND_RANGE_SEMITONES } from '../audio/mpe-math'
export { hzToMidiFloat, hzToNoteAndOffset, offsetToBend, zToCC74 }

export const TICKS_PER_QUARTER = 480

const MEMBER_CHANNEL_LO = 2
const MEMBER_CHANNEL_HI = 16
/** Pitch-bend automation density, in steps per second of musical time. */
const PITCH_STEPS_PER_SECOND = 50
/** CC74 is a coarse ramp, not a 50 Hz curve. */
const CC_STEPS_PER_SECOND = 4
const CC_MAX_INTERVALS = 8
/** Brightness. Not used for velocity. */
const BRIGHTNESS_CC = 74
/**
 * Velocity after the strike. midi-writer-js has no channel-pressure or
 * polyphonic-aftertouch event, so the ramp is expression on the member channel.
 */
const EXPRESSION_CC = 11
/**
 * midi-writer-js `convertVelocity` treats 100 as 127.
 * Note-off stays full. Note-on uses the source point (MIDI 1..127, never 0).
 */
const NOTE_OFF_VELOCITY = 100

function unitVelocity(velocity: number | undefined): number {
  const unit = typeof velocity === 'number' && Number.isFinite(velocity)
    ? velocity
    : DEFAULT_VELOCITY
  return clamp(unit, 0, 1)
}

/** Writer-scale velocity. `convertVelocity` maps this back to a MIDI byte. */
function noteOnVelocity(velocity: number | undefined): number {
  const midi = clamp(Math.round(unitVelocity(velocity) * 127), 1, 127)
  return (midi * 100) / 127
}

/** CC11 byte. 0 is allowed here; only note-on is kept off 0. */
function velocityToExpression(unit: number): number {
  return clamp(Math.round(clamp(unit, 0, 1) * 127), 0, 127)
}

export interface MpeExportInput {
  bpm: number
  points: ReadonlyMap<string, NotePoint>
  bends: readonly BendConnection[]
}

/**
 * Normalized 0..1 across the 16-beat loop, as absolute ticks.
 * Tempo cancels out: tick position is quarters × PPQ, and the tempo meta event
 * carries BPM. `bpm` is still applied so a bad tempo cannot produce NaN.
 */
export function xToTicks(x: number, bpm: number): number {
  const tempo = tempoOf(bpm)
  const seconds = clamp(x, 0, 1) * totalDuration(tempo)
  const ticksPerSecond = TICKS_PER_QUARTER * (tempo / 60)
  return Math.round(seconds * ticksPerSecond)
}

/**
 * Build a format-1 MIDI file. Channel 1 is the manager and never carries notes.
 * Member channels are 2–16, one track each.
 *
 * Timing uses the real midi-writer-js API, which has no absolute `startTick`
 * for pitch bend or CC. `NoteEvent.tick` (also accepted as `startTick`) is
 * note-only, and a second `buildData` pass appends a duplicate end-of-track.
 * `PitchBendEvent` / `ControllerChangeEvent` bake `delta` into `data` at
 * construction and do not advance the track clock. Events are therefore sorted
 * by absolute tick and written as sequential gaps: Note On uses `wait: 'T<gap>'`,
 * and pitch bend, CC74, CC11, and Note Off use `delta`.
 *
 * Channel numbering in this library is not uniform. Note On, Note Off, and
 * ControllerChangeEvent are 1-based. PitchBendEvent is 0-based (`status | channel`).
 *
 * Wraparound glides keep `forwardDelta` (never a negative `target.x - source.x`).
 * If that span runs past the 16-quarter loop, the file is extended so the glide
 * finishes. It is not clipped at the loop point, and it is not folded back to
 * the start.
 */
export function exportMpe(input: MpeExportInput): Uint8Array {
  const tempo = tempoOf(input.bpm)
  const notes = assignChannels(collectNotes(input.points, input.bends, tempo))
  const byChannel = new Map<number, Scheduled[]>()
  let seq = 0
  const push = (channel: number, event: Scheduled) => {
    const list = byChannel.get(channel) ?? []
    list.push(event)
    byChannel.set(channel, list)
  }

  for (const note of notes) {
    const base = hzToNoteAndOffset(note.source.y).note
    for (const sample of pitchSamples(note, tempo)) {
      push(note.channel, { tick: sample.tick, seq: seq++, kind: 'bend', bend: sample.bend })
    }
    for (const sample of ccSamples(note, tempo)) {
      push(note.channel, { tick: sample.tick, seq: seq++, kind: 'cc', controller: BRIGHTNESS_CC, value: sample.value })
    }
    for (const sample of expressionSamples(note, tempo)) {
      push(note.channel, { tick: sample.tick, seq: seq++, kind: 'cc', controller: EXPRESSION_CC, value: sample.value })
    }
    push(note.channel, {
      tick: note.startTick,
      seq: seq++,
      kind: 'on',
      note: base,
      velocity: noteOnVelocity(note.source.velocity),
    })
    push(note.channel, { tick: note.endTick, seq: seq++, kind: 'off', note: base })
  }

  const tracks = [...byChannel.keys()]
    .sort((a, b) => a - b)
    .map((channel) => buildMemberTrack(tempo, channel, byChannel.get(channel) ?? []))

  if (tracks.length === 0) {
    const empty = new MidiWriter.Track()
    empty.setTempo(tempo, 0)
    tracks.push(empty)
  }

  return encodeFormat1(tracks)
}

interface ExportNote {
  source: NotePoint
  target: NotePoint | null
  curve: CurveType
  startTick: number
  endTick: number
  channel: number
}

type Scheduled = {
  tick: number
  seq: number
} & (
  | { kind: 'bend'; bend: number }
  | { kind: 'cc'; controller: number; value: number }
  | { kind: 'on'; note: number; velocity: number }
  | { kind: 'off'; note: number }
)

function tempoOf(bpm: number): number {
  const rounded = Math.round(Number.isFinite(bpm) ? bpm : 120)
  return Math.max(1, rounded)
}

function collectNotes(
  points: ReadonlyMap<string, NotePoint>,
  bends: readonly BendConnection[],
  tempo: number,
): ExportNote[] {
  const targetIds = new Set(bends.map((bend) => bend.toPointId))
  const ordered = [...points.values()].sort((a, b) => a.x - b.x || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0))
  const notes: ExportNote[] = []

  for (const source of ordered) {
    const outgoing = bends.filter((bend) => bend.fromPointId === source.id)
    if (outgoing.length > 0) {
      for (const bend of outgoing) {
        const target = points.get(bend.toPointId)
        if (!target || target.id === source.id) continue
        const startTick = xToTicks(source.x, tempo)
        notes.push({
          source,
          target,
          curve: bend.curveType,
          startTick,
          endTick: startTick + glideSpanTicks(source.x, target.x, tempo),
          channel: 0,
        })
      }
      continue
    }
    if (targetIds.has(source.id)) continue
    const startTick = xToTicks(source.x, tempo)
    notes.push({
      source,
      target: null,
      curve: 'linear',
      startTick,
      endTick: startTick + TICKS_PER_QUARTER,
      channel: 0,
    })
  }

  return notes
}

/**
 * Forward span in ticks. A target earlier in the loop wraps via `forwardDelta`.
 * The returned length is not clamped to the remaining ticks in the 16-quarter
 * file; `start + span` may land past 16 quarters so the glide is complete.
 */
function glideSpanTicks(fromX: number, toX: number, bpm: number): number {
  const delta = forwardDelta(fromX, toX)
  if (delta <= 0) return 0
  return Math.max(1, xToTicks(delta, bpm))
}

function assignChannels(notes: ExportNote[]): ExportNote[] {
  const release = new Array<number>(MEMBER_CHANNEL_HI + 1).fill(0)
  return notes.map((note) => {
    const channel = allocateChannel(release, note.startTick)
    release[channel] = Math.max(release[channel], note.endTick)
    return { ...note, channel }
  })
}

function allocateChannel(release: number[], startTick: number): number {
  for (let channel = MEMBER_CHANNEL_LO; channel <= MEMBER_CHANNEL_HI; channel++) {
    if (release[channel] <= startTick) return channel
  }
  let soonest = MEMBER_CHANNEL_LO
  for (let channel = MEMBER_CHANNEL_LO + 1; channel <= MEMBER_CHANNEL_HI; channel++) {
    if (release[channel] < release[soonest]) soonest = channel
  }
  return soonest
}

function pitchSamples(note: ExportNote, bpm: number): Array<{ tick: number; bend: number }> {
  const base = hzToNoteAndOffset(note.source.y).note
  return sampleTicks(note.startTick, note.endTick, pitchIntervals(note, bpm)).map((tick) => ({
    tick,
    bend: offsetToBend(hzToMidiFloat(freqAt(note, tick)) - base),
  }))
}

function ccSamples(note: ExportNote, bpm: number): Array<{ tick: number; value: number }> {
  const from = zToCC74(note.source.z)
  const to = note.target ? zToCC74(note.target.z) : from
  return sampleTicks(note.startTick, note.endTick, ccIntervals(note, bpm)).map((tick) => {
    const t = amount(note, tick)
    return { tick, value: clamp(Math.round(from + (to - from) * t), 0, 127) }
  })
}

/**
 * Velocity expression on the pitch-bend clock (~50/sec), not the coarse CC74 clock.
 * `curveType` interpolates the normalized 0..1 velocity (linear, or exponential
 * when both ends are positive). A note with no bend is one value at the strike.
 */
function expressionSamples(note: ExportNote, bpm: number): Array<{ tick: number; value: number }> {
  const from = unitVelocity(note.source.velocity)
  const to = note.target ? unitVelocity(note.target.velocity) : from
  const intervals = note.target ? pitchIntervals(note, bpm) : 0
  return sampleTicks(note.startTick, note.endTick, intervals).map((tick) => ({
    tick,
    value: velocityToExpression(glideScalar(from, to, amount(note, tick), note.curve)),
  }))
}

function pitchIntervals(note: ExportNote, bpm: number): number {
  if (!note.target) return 0
  const seconds = secondsFromTicks(note.endTick - note.startTick, bpm)
  return Math.max(1, Math.round(seconds * PITCH_STEPS_PER_SECOND))
}

function ccIntervals(note: ExportNote, bpm: number): number {
  if (!note.target) return 0
  const seconds = secondsFromTicks(note.endTick - note.startTick, bpm)
  return Math.min(CC_MAX_INTERVALS, Math.max(1, Math.round(seconds * CC_STEPS_PER_SECOND)))
}

function secondsFromTicks(ticks: number, bpm: number): number {
  return ticks / (TICKS_PER_QUARTER * (bpm / 60))
}

function freqAt(note: ExportNote, tick: number): number {
  if (!note.target) return note.source.y
  return glideScalar(note.source.y, note.target.y, amount(note, tick), note.curve)
}

function amount(note: ExportNote, tick: number): number {
  const span = note.endTick - note.startTick
  if (span <= 0) return 0
  return clamp((tick - note.startTick) / span, 0, 1)
}

function sampleTicks(start: number, end: number, intervals: number): number[] {
  if (intervals <= 0 || end <= start) return [start]
  const ticks: number[] = []
  const seen = new Set<number>()
  for (let i = 0; i <= intervals; i++) {
    const tick = start + Math.round((end - start) * (i / intervals))
    if (seen.has(tick)) continue
    seen.add(tick)
    ticks.push(tick)
  }
  return ticks
}

function buildMemberTrack(tempo: number, channel: number, events: Scheduled[]) {
  const track = new MidiWriter.Track()
  track.setTempo(tempo, 0)
  const ordered = [...events].sort((a, b) => a.tick - b.tick || a.seq - b.seq)
  let last = 0
  for (const event of ordered) {
    const gap = event.tick - last
    if (event.kind === 'bend') {
      // PitchBendEvent ORs the channel into 0xE0, so MIDI channel 2 is passed as 1.
      track.addEvent(new MidiWriter.PitchBendEvent({
        bend: event.bend,
        channel: channel - 1,
        delta: gap,
      }))
    } else if (event.kind === 'cc') {
      // ControllerChangeEvent, NoteOn, and NoteOff subtract 1 themselves (1-based).
      track.addEvent(new MidiWriter.ControllerChangeEvent({
        controllerNumber: event.controller,
        controllerValue: event.value,
        channel,
        delta: gap,
      }))
    } else if (event.kind === 'on') {
      track.addEvent(new MidiWriter.NoteOnEvent({
        pitch: event.note,
        channel,
        velocity: event.velocity,
        wait: `T${gap}`,
      }))
    } else {
      track.addEvent(new MidiWriter.NoteOffEvent({
        pitch: event.note,
        channel,
        velocity: NOTE_OFF_VELOCITY,
        duration: `T${gap}`,
        delta: gap,
      }))
    }
    last = event.tick
  }
  return track
}

function encodeFormat1(tracks: Array<InstanceType<typeof MidiWriter.Track>>): Uint8Array {
  // Writer emits format 0 when given a single track. One member channel is the
  // common case, and the file should still be format 1 with one track per channel.
  const built = tracks.map((track) => track.buildData({ ticksPerBeat: TICKS_PER_QUARTER }))
  const parts: number[][] = [[
    0x4d, 0x54, 0x68, 0x64,
    0x00, 0x00, 0x00, 0x06,
    0x00, 0x01,
    (built.length >> 8) & 0xff,
    built.length & 0xff,
    (TICKS_PER_QUARTER >> 8) & 0xff,
    TICKS_PER_QUARTER & 0xff,
  ]]
  for (const track of built) parts.push(track.type, track.size, track.data)
  const length = parts.reduce((sum, part) => sum + part.length, 0)
  const bytes = new Uint8Array(length)
  let offset = 0
  for (const part of parts) {
    bytes.set(part, offset)
    offset += part.length
  }
  return bytes
}
