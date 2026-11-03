import { FREQ_MAX, FREQ_MIN } from '../model/space'
import type { KeyboardPiano } from '../ui/keyboard'

const BEND_CENTER = 8192

/** Channel 1 is a keyboard wheel. Member channels follow this app's MPE range. */
export function bendRangeSemitones(channel: number): number {
  return channel <= 1 ? 2 : 48
}

export function midiNoteToHz(note: number): number {
  return 440 * 2 ** ((note - 69) / 12)
}

/** Map a 14-bit pitch bend onto the note, then keep it inside the score. */
export function applyPitchBend(note: number, bendRaw: number, channel: number): number {
  const signed = bendRaw - BEND_CENTER
  const semis = (signed / 8192) * bendRangeSemitones(channel)
  const hz = midiNoteToHz(note) * 2 ** (semis / 12)
  return Math.min(FREQ_MAX, Math.max(FREQ_MIN, hz))
}

interface ChannelNote {
  note: number
  id: string
}

/**
 * Note-on / note-off follow the computer keyboard: a new note while one is
 * held extends the bend, and the last note-off finishes it.
 * Pitch bend and CC74 stay on the channel that owns the note.
 */
export function createMidiPerformance(piano: KeyboardPiano): (bytes: number[]) => void {
  const bend = new Map<number, number>()
  const active = new Map<number, ChannelNote>()

  return (bytes: number[]) => {
    if (bytes.length < 2) return
    const status = bytes[0] ?? 0
    if (status >= 0xf0) return
    const type = status & 0xf0
    const channel = (status & 0x0f) + 1
    const data1 = bytes[1] ?? 0
    const data2 = bytes[2] ?? 0

    if (type === 0x90 && data2 > 0) {
      const id = `${channel}:${data1}`
      active.set(channel, { note: data1, id })
      piano.press(id, applyPitchBend(data1, bend.get(channel) ?? BEND_CENTER, channel))
      return
    }

    if (type === 0x80 || (type === 0x90 && data2 === 0)) {
      const id = `${channel}:${data1}`
      const current = active.get(channel)
      if (current?.note === data1) active.delete(channel)
      piano.release(id)
      return
    }

    if (type === 0xe0 && bytes.length >= 3) {
      const raw = ((data2 & 0x7f) << 7) | (data1 & 0x7f)
      bend.set(channel, raw)
      const current = active.get(channel)
      if (!current) return
      piano.retune(current.id, applyPitchBend(current.note, raw, channel))
      return
    }

    if (type === 0xb0 && data1 === 74) {
      const current = active.get(channel)
      if (!current) return
      piano.brighten(current.id, data2 / 127)
    }
  }
}

export interface WebMidiPorts {
  request(): Promise<Array<{ id: string; name: string }>>
  select(id: string | null): void
}

/** Browser MIDI input. Nothing is selected until the user picks a port. */
export function createWebMidiPorts(onMessage: (bytes: number[]) => void): WebMidiPorts {
  let access: MIDIAccess | null = null
  let current: MIDIInput | null = null

  const handle = (event: MIDIMessageEvent) => {
    if (!event.data) return
    onMessage(Array.from(event.data))
  }

  return {
    async request() {
      if (!navigator.requestMIDIAccess) return []
      access = await navigator.requestMIDIAccess({ sysex: false })
      const devices: Array<{ id: string; name: string }> = []
      for (const input of access.inputs.values()) {
        devices.push({ id: input.id, name: input.name || 'MIDI input' })
      }
      return devices
    },
    select(id: string | null) {
      if (current) current.onmidimessage = null
      current = null
      if (!access || !id) return
      const next = access.inputs.get(id)
      if (!next) return
      current = next
      current.onmidimessage = handle
    },
  }
}
