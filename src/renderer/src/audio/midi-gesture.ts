import { PLANE_Z_NORM } from '../model/space'
import type { GestureOutput } from './gesture'
import {
  acquireChannel,
  bendTo,
  holdChannel,
  noteOff,
  strike,
} from './midi-port'
import { hzToNoteAndOffset } from './mpe-math'

/**
 * One member channel for a computer-keyboard hold.
 * A new key on the same hold pitch-bends that note. A leap past the
 * ±48 semitone window starts a new note on the same channel.
 */
export function createMidiGesture(): GestureOutput {
  let channel = 0
  let baseNote = -1
  let z = PLANE_Z_NORM
  let velocity = 0.75
  let lastHz = 0

  const now = () => performance.now() / 1000

  const release = () => {
    if (!channel) return
    noteOff(channel)
    holdChannel(channel, now())
    channel = 0
    baseNote = -1
  }

  return {
    context: {
      get state() {
        return 'running' as const
      },
      get currentTime() {
        return now()
      },
    },
    async ensureRunning() {},
    beginGesture(freq, nextZ, nextVelocity) {
      release()
      z = nextZ
      velocity = nextVelocity
      lastHz = freq
      channel = acquireChannel(now())
      baseNote = strike(channel, { y: freq, z, velocity })
      holdChannel(channel, Number.POSITIVE_INFINITY)
    },
    glideGesture(freq, curve) {
      if (!channel || baseNote < 0) return
      void curve
      lastHz = freq
      const { note, offsetSemitones } = hzToNoteAndOffset(freq)
      const span = Math.abs(note - baseNote + offsetSemitones)
      if (span > 48) {
        noteOff(channel)
        baseNote = strike(channel, { y: freq, z, velocity })
        holdChannel(channel, Number.POSITIVE_INFINITY)
        return
      }
      bendTo(channel, baseNote, freq, z, velocity)
    },
    setGestureBrightness(next: number) {
      z = next
      if (!channel || baseNote < 0) return
      bendTo(channel, baseNote, lastHz, z, velocity)
    },
    releaseGesture: release,
    gestureLive() {
      return channel !== 0
    },
  }
}
