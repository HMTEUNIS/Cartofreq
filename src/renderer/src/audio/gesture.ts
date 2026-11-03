import type { CurveType } from '../model/types'

/** Live hold from the computer keyboard. The web synth and the MIDI port both satisfy this. */
export interface GestureOutput {
  readonly context: { readonly state: AudioContextState; readonly currentTime: number }
  ensureRunning(): Promise<void>
  beginGesture(freq: number, z: number, velocity: number): void
  glideGesture(freq: number, curve: CurveType): void
  /** Move the live note's brightness. CC74 uses this. */
  setGestureBrightness?(z: number): void
  releaseGesture(): void
  gestureLive(): boolean
}
