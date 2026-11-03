import type { CurveType } from '../model/types'
import type { OutputRoute } from '../model/types'
import type { AudioEngine } from './synth'
import type { GestureOutput } from './gesture'
import type { Transport } from './transport'

/**
 * One playhead for the desktop build.
 * Audio Out drives the sampler scheduler. MIDI Out drives the MPE scheduler.
 * Both run together from the same stopped position.
 */
export function createOutputTransport(options: {
  audio: Transport
  midi: Transport
  route: () => OutputRoute
}): Transport {
  let playing = false
  let pausedAt = 0
  const useAudio = () => options.route() !== 'midi'
  const useMidi = () => options.route() !== 'audio'

  function headFromClock(): number {
    if (useAudio() && options.audio.isPlaying) return options.audio.playhead()
    if (useMidi() && options.midi.isPlaying) return options.midi.playhead()
    return pausedAt
  }

  return {
    get isPlaying() {
      return playing
    },

    playhead() {
      if (!playing) return pausedAt
      return headFromClock()
    },

    highlights(now?: number) {
      const levels = new Map<string, number>()
      const fold = (source: Map<string, number>) => {
        for (const [id, level] of source) levels.set(id, Math.max(levels.get(id) ?? 0, level))
      }
      if (useAudio()) fold(options.audio.highlights(useMidi() ? undefined : now))
      if (useMidi()) fold(options.midi.highlights(useAudio() ? undefined : now))
      return levels
    },

    async play() {
      if (playing) return
      const head = pausedAt
      if (useAudio()) {
        options.audio.seek(head)
        await options.audio.play()
      }
      if (useMidi()) {
        options.midi.seek(head)
        await options.midi.play()
      }
      playing = options.audio.isPlaying || options.midi.isPlaying
    },

    pause() {
      if (!playing) return
      pausedAt = headFromClock()
      if (options.audio.isPlaying) options.audio.pause()
      if (options.midi.isPlaying) options.midi.pause()
      playing = false
    },

    stop() {
      playing = false
      pausedAt = 0
      options.audio.stop()
      options.midi.stop()
    },

    seek(norm: number) {
      if (playing) return
      pausedAt = norm < 0 ? 0 : norm > 1 ? 1 : norm
    },

    setBpm(bpm: number) {
      const audioWas = options.audio.isPlaying
      const midiWas = options.midi.isPlaying
      if (audioWas) options.audio.setBpm(bpm)
      else options.midi.setBpm(bpm)
      if (!(audioWas && midiWas)) return
      const head = options.audio.playhead()
      options.midi.pause()
      options.midi.seek(head)
      void options.midi.play()
    },

    suppressUntilNextLoop(pointId: string) {
      options.audio.suppressUntilNextLoop(pointId)
      options.midi.suppressUntilNextLoop(pointId)
    },
  }
}

/** Live keyboard and MIDI input. Each output hears the gesture only while it is routed on. */
export function createRoutedGesture(
  engine: AudioEngine,
  midi: GestureOutput,
  route: () => OutputRoute,
): GestureOutput & { setVolume(value: number): void } {
  const useAudio = () => route() !== 'midi'
  const useMidi = () => route() !== 'audio'
  return {
    context: {
      get state() {
        return useAudio() ? engine.context.state : midi.context.state
      },
      get currentTime() {
        return useAudio() ? engine.context.currentTime : midi.context.currentTime
      },
    },
    async ensureRunning() {
      if (useAudio()) await engine.ensureRunning()
    },
    beginGesture(freq, z, velocity) {
      if (useAudio()) engine.beginGesture(freq, z, velocity)
      if (useMidi()) midi.beginGesture(freq, z, velocity)
    },
    glideGesture(freq: number, curve: CurveType) {
      if (useAudio()) engine.glideGesture(freq, curve)
      if (useMidi()) midi.glideGesture(freq, curve)
    },
    setGestureBrightness(z: number) {
      if (useAudio()) engine.setGestureBrightness?.(z)
      if (useMidi()) midi.setGestureBrightness?.(z)
    },
    releaseGesture() {
      if (useAudio()) engine.releaseGesture()
      if (useMidi()) midi.releaseGesture()
    },
    gestureLive() {
      return (useAudio() && engine.gestureLive()) || (useMidi() && midi.gestureLive())
    },
    setVolume(value: number) {
      engine.setVolume(value)
    },
  }
}
