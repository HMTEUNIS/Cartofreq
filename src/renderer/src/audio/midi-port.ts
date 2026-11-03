import { clamp } from '../model/space'
import type { NotePoint } from '../model/types'
import { hzToMidiFloat, hzToNoteAndOffset, offsetToBend, zToCC74 } from './mpe-math'

const CHANNEL_LO = 2
const CHANNEL_HI = 16

const releaseAt = Array.from({ length: 17 }, () => 0)
const activeNote = Array.from({ length: 17 }, () => -1)

export function sendMidi(bytes: number[]): void {
  window.cartofreq?.sendMidi(bytes)
}

function status(kind: number, channel: number): number {
  return kind | (channel - 1)
}

export function pitchBend(channel: number, bend: number): void {
  const raw = Math.max(0, Math.min(16383, Math.round(8192 + bend * 8191)))
  sendMidi([status(0xe0, channel), raw & 0x7f, (raw >> 7) & 0x7f])
}

export function controlChange(channel: number, controller: number, value: number): void {
  sendMidi([status(0xb0, channel), controller & 0x7f, clamp(Math.round(value), 0, 127)])
}

export function expressionByte(velocity: number): number {
  return clamp(Math.round(clamp(velocity, 0, 1) * 127), 0, 127)
}

function noteOnByte(velocity: number): number {
  return clamp(Math.round(clamp(velocity, 0, 1) * 127), 1, 127)
}

export function noteOn(channel: number, note: number, velocity: number): void {
  const sounded = note & 0x7f
  activeNote[channel] = sounded
  sendMidi([status(0x90, channel), sounded, noteOnByte(velocity)])
}

/** Note-off for `note`. A queued off for a stolen voice must not silence the note that replaced it. */
export function noteOff(channel: number, note = activeNote[channel] ?? -1): void {
  if (note < 0) return
  if (activeNote[channel] === note) activeNote[channel] = -1
  sendMidi([status(0x80, channel), note & 0x7f, 0])
}

/** First free member channel, otherwise the one that ends soonest. */
export function acquireChannel(now: number): number {
  let soonest = CHANNEL_LO
  let soonestAt = Infinity
  for (let channel = CHANNEL_LO; channel <= CHANNEL_HI; channel++) {
    if (releaseAt[channel] <= now) {
      noteOff(channel)
      return channel
    }
    if (releaseAt[channel] < soonestAt) {
      soonestAt = releaseAt[channel]
      soonest = channel
    }
  }
  noteOff(soonest)
  return soonest
}

export function holdChannel(channel: number, until: number): void {
  releaseAt[channel] = until
}

/** Pitch bend, brightness, and expression, then note on. Returns the MIDI note. */
export function strike(channel: number, point: Pick<NotePoint, 'y' | 'z' | 'velocity'>): number {
  const { note } = hzToNoteAndOffset(point.y)
  strikeNote(channel, note, point.y, point.z, point.velocity)
  return note
}

/** Note-on for a fixed base note, bent toward `hz`. Used for a whole glide. */
export function strikeNote(
  channel: number,
  note: number,
  hz: number,
  z: number,
  velocity: number,
): void {
  pitchBend(channel, offsetToBend(hzToMidiFloat(hz) - note))
  controlChange(channel, 74, zToCC74(z))
  controlChange(channel, 11, expressionByte(velocity))
  noteOn(channel, note, velocity)
}

/** Bend toward `hz` while staying on `baseNote`, the note the glide started on. */
export function bendTo(channel: number, baseNote: number, hz: number, z: number, velocity: number): void {
  pitchBend(channel, offsetToBend(hzToMidiFloat(hz) - baseNote))
  controlChange(channel, 74, zToCC74(z))
  controlChange(channel, 11, expressionByte(velocity))
}

export function silenceMidi(): void {
  for (let channel = CHANNEL_LO; channel <= CHANNEL_HI; channel++) {
    noteOff(channel)
    controlChange(channel, 123, 0)
    releaseAt[channel] = 0
  }
}
