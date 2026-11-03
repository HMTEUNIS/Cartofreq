/// <reference types="vite/client" />

interface MidiPortStatus {
  ok: boolean
  ports: string[]
  error?: string
}

interface AudioOutStatus {
  ok: boolean
  sink: string
  source: string
  detail: string
}

interface CartofreqBridge {
  platform: 'electron'
  sendMidi: (bytes: number[]) => void
  midiStatus: () => Promise<{ ok: boolean; port: string; error?: string }>
  onMidiInput: (cb: (msg: number[]) => void) => void
  midiInputs: () => Promise<MidiPortStatus>
  refreshMidiInputs: () => Promise<MidiPortStatus>
  audioStatus: () => Promise<AudioOutStatus>
}

interface Window {
  cartofreq?: CartofreqBridge
  /** Live read-only copy of the current score. */
  __cartofreqScore: () => {
    bpm: number
    bendCurve: 'linear' | 'exponential'
    waveType: OscillatorType
    soundMode: 'oscillator' | 'sampler'
    sampleBaseHz: number
    points: Array<{
      id: string
      x: number
      y: number
      z: number
      velocity: number
      waveType: OscillatorType
    }>
    bends: Array<{
      id: string
      fromPointId: string
      toPointId: string
      curveType: 'linear' | 'exponential'
    }>
  }
}
