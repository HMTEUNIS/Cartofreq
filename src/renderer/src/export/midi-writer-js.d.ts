// midi-writer-js publishes types, but its package.json "exports" map hides them
// from TypeScript's bundler resolution. This shim matches the constructors we call.
declare module 'midi-writer-js' {
  class Track {
    events: Array<{ name?: string; channel?: number; tick?: number | null; delta?: number }>
    type: number[]
    size: number[]
    data: number[]
    addEvent(event: object | object[]): this
    setTempo(bpm: number, tick?: number): this
    buildData(options?: { ticksPerBeat?: number; middleC?: string }): this
  }

  class PitchBendEvent {
    constructor(fields: { bend: number; channel?: number; delta?: number })
  }

  class ControllerChangeEvent {
    constructor(fields: {
      controllerNumber: number
      controllerValue: number
      channel?: number
      delta?: number
    })
  }

  class NoteOnEvent {
    constructor(fields: {
      pitch?: number | string
      channel?: number
      velocity?: number
      wait?: string | number
      delta?: number
    })
  }

  class NoteOffEvent {
    constructor(fields: {
      pitch: number | string
      channel: number
      velocity: number
      duration: string | number
      delta?: number
    })
  }

  class Writer {
    constructor(tracks: Track | Track[], options?: { ticksPerBeat?: number })
    buildFile(): Uint8Array
  }

  const MidiWriter: {
    Track: typeof Track
    Writer: typeof Writer
    PitchBendEvent: typeof PitchBendEvent
    ControllerChangeEvent: typeof ControllerChangeEvent
    NoteOnEvent: typeof NoteOnEvent
    NoteOffEvent: typeof NoteOffEvent
  }

  export default MidiWriter
}
