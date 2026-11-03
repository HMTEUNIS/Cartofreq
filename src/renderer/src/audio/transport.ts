/** How far the web audio scheduler writes ahead of the audio clock. */
export const SCHEDULE_AHEAD_S = 0.1

/** Clock the playhead, the keyboard, and both schedulers share. */
export interface Transport {
  readonly isPlaying: boolean
  playhead(): number
  highlights(now?: number): Map<string, number>
  play(): Promise<void>
  pause(): void
  stop(): void
  /** Move the stopped playhead. Ignored while playing. */
  seek(norm: number): void
  setBpm(bpm: number): void
  suppressUntilNextLoop(pointId: string): void
}
