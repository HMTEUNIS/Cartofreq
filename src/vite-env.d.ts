/// <reference types="vite/client" />

interface Window {
  /** Live read-only copy of the current score. */
  __cartofreqScore: () => {
    bpm: number
    bendCurve: 'linear' | 'exponential'
    waveType: OscillatorType
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
