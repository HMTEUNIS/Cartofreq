import { SCHEDULE_AHEAD_S, type Scheduler } from '../audio/scheduler'
import type { AudioEngine } from '../audio/synth'
import { FREQ_MAX, FREQ_MIN, PLANE_Z_NORM, forwardDelta, totalDuration } from '../model/space'
import type { Store } from '../model/store'
import { DEFAULT_VELOCITY } from '../model/types'

/**
 * Ableton computer-keyboard layout. Home note is C4 on A.
 * Z / X shift the octave. White keys A S D F G H J K L are
 * C D E F G A B C D. Black keys W E T Y U O P are
 * C# D# F# G# A# C# D#.
 */
const HOME_OCTAVE = 4

const NOTE_KEYS: Readonly<Record<string, number>> = {
  KeyA: 0,
  KeyW: 1,
  KeyS: 2,
  KeyE: 3,
  KeyD: 4,
  KeyF: 5,
  KeyT: 6,
  KeyG: 7,
  KeyY: 8,
  KeyH: 9,
  KeyU: 10,
  KeyJ: 11,
  KeyK: 12,
  KeyO: 13,
  KeyL: 14,
  KeyP: 15,
}

const WHITE_SEMIS = [0, 2, 4, 5, 7, 9, 11, 12, 14] as const

/** A tap this short stays a single point. */
const MIN_HOLD_S = 0.04

/** Scheduler lookahead plus the live release, so the next pass is not doubled. */
const RELEASE_BEFORE_REPLAY_S = SCHEDULE_AHEAD_S + 0.18

interface Gesture {
  keys: Set<string>
  tailId: string
  tailX: number
  tailFreq: number
  startX: number
  /** True once this pass is on the way back to the first point. */
  primed: boolean
}

export interface KeyboardPiano {
  readonly enabled: boolean
  /** Home note, e.g. "C4". */
  readonly octaveLabel: string
  setEnabled(on: boolean): void
  /** Consumes note and octave keys. False lets the event through. */
  keyDown(event: KeyboardEvent): boolean
  keyUp(event: KeyboardEvent): void
  /** Release the live voice before the recorded phrase reaches the playhead again. */
  tick(): void
  /** Keep the hold as a bend, then release the live voice. */
  finish(): void
  /** Drop a gesture without writing a trailing point. */
  cancel(): void
}

function semitoneFreq(octave: number, semi: number): number {
  const midi = (octave + 1) * 12 + semi
  return 440 * 2 ** ((midi - 69) / 12)
}

function whitesFit(octave: number): boolean {
  return WHITE_SEMIS.every((semi) => {
    const freq = semitoneFreq(octave, semi)
    return freq >= FREQ_MIN && freq <= FREQ_MAX
  })
}

function octaveLimits(): { min: number; max: number } {
  let min = HOME_OCTAVE
  let max = HOME_OCTAVE
  for (let octave = HOME_OCTAVE; octave >= -2; octave -= 1) {
    if (!whitesFit(octave)) break
    min = octave
  }
  for (let octave = HOME_OCTAVE; octave <= 9; octave += 1) {
    if (!whitesFit(octave)) break
    max = octave
  }
  return { min, max }
}

export function createKeyboardPiano(options: {
  store: Store
  audio: AudioEngine
  scheduler: Scheduler
}): KeyboardPiano {
  const { store, audio, scheduler } = options
  const limits = octaveLimits()
  let enabled = false
  let octave = HOME_OCTAVE
  let gesture: Gesture | null = null
  let arming: Promise<void> | null = null
  const down = new Set<string>()

  function shiftOctave(direction: 1 | -1): void {
    octave = Math.min(limits.max, Math.max(limits.min, octave + direction))
  }

  function freqOf(code: string): number | null {
    const semi = NOTE_KEYS[code]
    if (semi === undefined) return null
    const freq = semitoneFreq(octave, semi)
    if (freq < FREQ_MIN - 0.05 || freq > FREQ_MAX + 0.05) return null
    return freq
  }

  function place(freq: number, fromId: string | null): { id: string; x: number } {
    let id = ''
    const x = scheduler.playhead()
    store.batch(() => {
      id = store.addPoint({
        x,
        y: freq,
        z: PLANE_Z_NORM,
        velocity: DEFAULT_VELOCITY,
        waveType: store.waveType,
      })
      if (fromId && store.points.has(fromId)) store.addBend(fromId, id)
    })
    scheduler.suppressUntilNextLoop(id)
    return { id, x: store.points.get(id)?.x ?? x }
  }

  function begin(code: string, freq: number): void {
    audio.beginGesture(freq, PLANE_Z_NORM, DEFAULT_VELOCITY)
    const placed = place(freq, null)
    gesture = {
      keys: new Set([code]),
      tailId: placed.id,
      tailX: placed.x,
      tailFreq: freq,
      startX: placed.x,
      primed: false,
    }
  }

  function extend(code: string, freq: number): void {
    const current = gesture
    if (!current) return
    current.keys.add(code)
    if (audio.gestureLive()) audio.glideGesture(freq, store.bendCurve)
    else audio.beginGesture(freq, PLANE_Z_NORM, DEFAULT_VELOCITY)
    const fromId = store.points.has(current.tailId) ? current.tailId : null
    const placed = place(freq, fromId)
    current.tailId = placed.id
    current.tailX = placed.x
    current.tailFreq = freq
  }

  function heldLong(fromX: number, toX: number): boolean {
    return forwardDelta(fromX, toX) * totalDuration(store.bpm) >= MIN_HOLD_S
  }

  function finish(): void {
    const current = gesture
    gesture = null
    if (!current) return
    const head = scheduler.playhead()
    if (store.points.has(current.tailId) && heldLong(current.tailX, head)) {
      place(current.tailFreq, current.tailId)
    }
    audio.releaseGesture()
  }

  function cancel(): void {
    gesture = null
    down.clear()
    audio.releaseGesture()
  }

  function secondsUntilReplay(startX: number): number {
    const head = scheduler.playhead()
    let ahead = startX - head
    if (ahead <= 1e-4) ahead += 1
    return ahead * totalDuration(store.bpm)
  }

  function tick(): void {
    const current = gesture
    if (!current || !scheduler.isPlaying) return
    const duration = totalDuration(store.bpm)
    const remaining = secondsUntilReplay(current.startX)
    if (remaining <= RELEASE_BEFORE_REPLAY_S) {
      finish()
      return
    }
    if (current.primed && remaining > duration * 0.75) {
      finish()
      return
    }
    if (remaining < duration * 0.5) current.primed = true
  }

  function armTransport(): Promise<void> {
    if (scheduler.isPlaying && audio.context.state === 'running') return Promise.resolve()
    if (!arming) {
      arming = (async () => {
        await audio.ensureRunning()
        if (!enabled) return
        if (!scheduler.isPlaying) await scheduler.play()
      })().finally(() => {
        arming = null
      })
    }
    return arming
  }

  async function pressNote(code: string, freq: number): Promise<void> {
    if (!(scheduler.isPlaying && audio.context.state === 'running')) {
      try {
        await armTransport()
      } catch (error) {
        console.warn(error)
        down.delete(code)
        return
      }
      if (!enabled) return
      if (!down.has(code)) {
        if (gesture) return
        begin(code, freq)
        finish()
        return
      }
    }
    if (!enabled || !down.has(code)) return
    if (gesture) extend(code, freq)
    else begin(code, freq)
  }

  function keyDown(event: KeyboardEvent): boolean {
    if (!enabled || event.repeat) return false
    if (event.ctrlKey || event.metaKey || event.altKey) return false
    const code = event.code
    if (code === 'KeyZ' || code === 'KeyX') {
      shiftOctave(code === 'KeyX' ? 1 : -1)
      return true
    }
    if (!(code in NOTE_KEYS)) return false
    const freq = freqOf(code)
    if (freq === null) return true
    if (down.has(code)) return true
    down.add(code)
    void pressNote(code, freq)
    return true
  }

  function keyUp(event: KeyboardEvent): void {
    const code = event.code
    down.delete(code)
    const current = gesture
    if (!current?.keys.has(code)) return
    current.keys.delete(code)
    if (current.keys.size === 0) finish()
  }

  const dropHeld = (): void => {
    down.clear()
    finish()
  }
  window.addEventListener('blur', dropHeld)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') dropHeld()
  })

  return {
    get enabled() {
      return enabled
    },
    get octaveLabel() {
      return `C${octave}`
    },
    setEnabled(on: boolean) {
      if (enabled === on) return
      enabled = on
      if (!on) {
        down.clear()
        finish()
      }
    },
    keyDown,
    keyUp,
    tick,
    finish,
    cancel,
  }
}
