import { DEFAULT_VELOCITY, type CurveType, type NotePoint } from '../model/types'
import { VoicePool, zToCutoff, zToGain, zToQ, type Voice } from './voice'

export interface AudioEngine {
  readonly context: AudioContext
  readonly streamDestination: MediaStreamAudioDestinationNode | null
  ensureRunning(): Promise<void>
  setVolume(value: number): void
  triggerHit(point: NotePoint, time: number): void
  triggerBend(
    from: NotePoint,
    to: NotePoint,
    curve: CurveType,
    time: number,
    duration: number,
  ): void
  /** One sustained voice for a computer-keyboard gesture. */
  beginGesture(freq: number, z: number, velocity: number): void
  glideGesture(freq: number, curve: CurveType): void
  releaseGesture(): void
  gestureLive(): boolean
  silence(): void
}

/** Velocity 1. Full peak, then the existing decay. */
const ATTACK_HIT = 0.005
/** Velocity 0. Fade from silence up to the hold. No decay bump. */
const ATTACK_SMOOTH = 0.16
const DECAY = 0.05
const SUSTAIN = 0.6
const RELEASE = 0.15
const HIT_DURATION = 0.25
const MIN_BEND = 0.05
/** Legato slide when the keyboard gesture adds another pitch. */
const GESTURE_GLIDE = 0.06
/** Exponential ramps cannot target 0. */
const SILENT = 0.001

/**
 * Voice-pool synth. Pitch and cutoff glides follow the bend curve.
 * Exponential targets stay above 0; equal or non-positive frequencies fall back to linear.
 */
export function createAudioEngine(): AudioEngine {
  const context = new AudioContext({ latencyHint: 'interactive' })
  const pool = new VoicePool(context, 16)
  // Pool constructs masterGain at 0.8. The volume slider defaults to 0.5 and owns this node.
  pool.masterGain.gain.value = 0.5
  pool.masterGain.connect(context.destination)

  let streamDestination: MediaStreamAudioDestinationNode | null = null
  /** Pinned pool voice for the computer-keyboard gesture. Not a scheduler blip. */
  let gesture: Voice | null = null
  try {
    streamDestination = context.createMediaStreamDestination()
    pool.masterGain.connect(streamDestination)
  } catch (error) {
    console.warn('MediaStream destination is unavailable', error)
  }

  function at(time: number): number {
    return Math.max(time, context.currentTime)
  }

  function cancelVoice(voice: Voice, time: number): void {
    voice.osc.frequency.cancelScheduledValues(time)
    voice.filter.frequency.cancelScheduledValues(time)
    voice.filter.Q.cancelScheduledValues(time)
    voice.gain.gain.cancelScheduledValues(time)
  }

  function waveOf(point: NotePoint): OscillatorType {
    return point.waveType === 'custom' ? 'sine' : point.waveType
  }

  function effectivelyEqual(a: number, b: number): boolean {
    const span = Math.max(Math.abs(a), Math.abs(b), 1e-3)
    return Math.abs(a - b) / span < 1e-4
  }

  function rampBetween(
    param: AudioParam,
    from: number,
    to: number,
    start: number,
    end: number,
    curve: CurveType,
  ): void {
    param.setValueAtTime(from, start)
    if (end <= start || effectivelyEqual(from, to)) return
    if (curve === 'exponential' && from > 0 && to > 0) {
      param.exponentialRampToValueAtTime(to, end)
      return
    }
    param.linearRampToValueAtTime(to, end)
  }

  function unitVelocity(velocity: number): number {
    if (!Number.isFinite(velocity)) return DEFAULT_VELOCITY
    return Math.min(1, Math.max(0, velocity))
  }

  /**
   * Velocity shapes only the onset. Sustain brightness stays with Z.
   * Attack time lerps from {@link ATTACK_SMOOTH} at 0 to {@link ATTACK_HIT} at 1.
   * The level above the hold lerps the same way: 0 fades up to the hold and
   * skips the decay; 1 strikes the full peak, then decays as before.
   * Hits hold `peak * SUSTAIN`. Bends hold that same level (the glide's sustain).
   * Gate length is `gate` seconds; release is additional. Returns when the voice is quiet.
   */
  function scheduleEnvelope(
    param: AudioParam,
    start: number,
    gate: number,
    peak: number,
    velocity: number,
  ): number {
    const v = unitVelocity(velocity)
    const level = Math.max(peak, SILENT)
    const sustain = Math.max(level * SUSTAIN, SILENT)
    const attack = ATTACK_SMOOTH + (ATTACK_HIT - ATTACK_SMOOTH) * v
    const onset = sustain + (level - sustain) * v
    const gateEnd = Math.max(start + gate, start + ATTACK_HIT)
    const attackEnd = Math.min(start + attack, gateEnd)
    const decayEnd = v > 0 ? Math.min(attackEnd + DECAY, gateEnd) : attackEnd

    param.setValueAtTime(0, start)
    param.linearRampToValueAtTime(onset, attackEnd)
    if (decayEnd > attackEnd) param.linearRampToValueAtTime(sustain, decayEnd)
    const held = decayEnd > attackEnd ? sustain : onset
    if (gateEnd > decayEnd) param.setValueAtTime(held, gateEnd)
    const releaseEnd = gateEnd + RELEASE
    param.exponentialRampToValueAtTime(SILENT, releaseEnd)
    return releaseEnd
  }

  /**
   * Open one gate and leave it open.
   * Level is zToGain. Attack time follows velocity: 0 fades in slowly, 1 strikes.
   */
  function openGestureGate(param: AudioParam, start: number, peak: number, velocity: number): void {
    const v = unitVelocity(velocity)
    const level = Math.max(peak, SILENT)
    const attack = ATTACK_SMOOTH + (ATTACK_HIT - ATTACK_SMOOTH) * v
    param.setValueAtTime(0, start)
    param.linearRampToValueAtTime(level, start + attack)
  }

  function releaseGestureVoice(now: number): void {
    const voice = gesture
    if (!voice) return
    gesture = null
    voice.pinned = false
    const gain = voice.gain.gain
    gain.cancelScheduledValues(now)
    const level = gain.value > 0 ? gain.value : SILENT
    gain.setValueAtTime(level, now)
    const releaseEnd = now + RELEASE
    if (level > SILENT) gain.exponentialRampToValueAtTime(SILENT, releaseEnd)
    pool.markRelease(voice, releaseEnd)
  }

  function triggerPoint(point: NotePoint, time: number, duration = HIT_DURATION): void {
    const start = at(time)
    const voice = pool.acquire(start)
    cancelVoice(voice, start)
    voice.osc.type = waveOf(point)
    voice.osc.frequency.setValueAtTime(point.y, start)
    voice.filter.frequency.setValueAtTime(zToCutoff(point.z), start)
    voice.filter.Q.setValueAtTime(zToQ(point.z), start)
    const releaseEnd = scheduleEnvelope(voice.gain.gain, start, duration, zToGain(point.z), point.velocity)
    pool.markRelease(voice, releaseEnd)
  }

  return {
    context,
    streamDestination,

    async ensureRunning() {
      if (context.state !== 'running') await context.resume()
    },

    setVolume(value: number) {
      pool.masterGain.gain.value = Math.min(1, Math.max(0, value))
    },

    triggerHit(point, time) {
      triggerPoint(point, time)
    },

    triggerBend(from, to, curve, time, duration) {
      const start = at(time)
      const glide = Math.max(MIN_BEND, duration)
      const end = start + glide
      const voice = pool.acquire(start)
      cancelVoice(voice, start)
      voice.osc.type = waveOf(from)
      rampBetween(voice.osc.frequency, from.y, to.y, start, end, curve)
      rampBetween(voice.filter.frequency, zToCutoff(from.z), zToCutoff(to.z), start, end, curve)
      const fromQ = zToQ(from.z)
      const toQ = zToQ(to.z)
      voice.filter.Q.setValueAtTime(fromQ, start)
      voice.filter.Q.linearRampToValueAtTime(toQ, end)
      const peak = Math.max(zToGain(from.z), zToGain(to.z))
      const releaseEnd = scheduleEnvelope(voice.gain.gain, start, glide, peak, from.velocity)
      pool.markRelease(voice, releaseEnd)
    },

    beginGesture(freq, z, velocity) {
      const start = context.currentTime
      if (gesture) releaseGestureVoice(start)
      const voice = pool.acquire(start)
      gesture = voice
      voice.pinned = true
      cancelVoice(voice, start)
      voice.osc.type = 'sine'
      voice.osc.frequency.setValueAtTime(Math.max(freq, SILENT), start)
      voice.filter.frequency.setValueAtTime(zToCutoff(z), start)
      voice.filter.Q.setValueAtTime(zToQ(z), start)
      openGestureGate(voice.gain.gain, start, zToGain(z), velocity)
      voice.releaseTime = Number.POSITIVE_INFINITY
    },

    glideGesture(freq, curve) {
      if (!gesture) return
      const now = context.currentTime
      const param = gesture.osc.frequency
      param.cancelScheduledValues(now)
      const target = Math.max(freq, SILENT)
      const from = param.value > 0 ? param.value : target
      rampBetween(param, from, target, now, now + GESTURE_GLIDE, curve)
    },

    releaseGesture() {
      releaseGestureVoice(context.currentTime)
    },

    gestureLive() {
      return gesture !== null
    },

    silence() {
      gesture = null
      pool.silence(context.currentTime)
    },
  }
}
