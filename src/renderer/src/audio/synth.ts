import type { SoundMode } from '../model/types'
import { DEFAULT_VELOCITY, type CurveType, type NotePoint } from '../model/types'
import { ensureSoundTouch, samplerLead, SoundTouchSamplerSource, type SamplePlayback } from './sampler'
import { OscillatorSource, VoicePool, rampParam, zToCutoff, zToGain, zToQ, type Voice } from './voice'
import type { GestureOutput } from './gesture'

export interface AudioEngine extends GestureOutput {
  readonly context: AudioContext
  readonly streamDestination: MediaStreamAudioDestinationNode | null
  readonly workletError: string | null
  setVolume(value: number): void
  triggerHit(point: NotePoint, time: number): void
  triggerBend(
    from: NotePoint,
    to: NotePoint,
    curve: CurveType,
    time: number,
    duration: number,
  ): void
  /**
   * A point inserted on a slide. Sampler mode keeps the clip running and
   * bends on from here. Oscillator mode starts a new voice, as before.
   */
  continueBend(
    from: NotePoint,
    to: NotePoint,
    curve: CurveType,
    time: number,
    duration: number,
  ): void
  silence(): void
  applySoundMode(mode: SoundMode): Promise<void>
  loadSample(buffer: AudioBuffer): void
  hasSample(): boolean
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

export interface AudioEngineConfig {
  initialMode: SoundMode
  baseHz: () => number
  loop: () => boolean
}

/**
 * Voice-pool synth. Pitch and cutoff glides follow the bend curve.
 * Sampler mode pitch-shifts one clip through SoundTouch and keeps its length.
 */
export async function createAudioEngine(config: AudioEngineConfig): Promise<AudioEngine> {
  const context = new AudioContext({ latencyHint: 'interactive' })
  let mode: SoundMode = config.initialMode
  /** True once sampler voices exist. Desktop defers this until the context is running. */
  let workletOk = false
  let workletProblem: string | null = null
  let sample: AudioBuffer | null = null

  const playback: SamplePlayback = {
    buffer: () => sample,
    baseHz: () => config.baseHz(),
    loop: () => config.loop(),
  }

  function build(next: SoundMode): VoicePool {
    if (next === 'sampler') {
      return new VoicePool(context, 8, () => new SoundTouchSamplerSource(context, playback), false)
    }
    return new VoicePool(context, 16, () => new OscillatorSource(context), true)
  }

  // Sampler voices are created after the context is running. Until then the
  // placeholder pool is never triggered, so the desktop build stays silent.
  let pool = build('oscillator')
  pool.masterGain.gain.value = 0.5

  let streamDestination: MediaStreamAudioDestinationNode | null = null
  /** Pinned pool voice for the computer-keyboard gesture. Not a scheduler blip. */
  let gesture: Voice | null = null
  /** Sampler voice already gliding toward a point. The next node on that slide reuses it. */
  const slides = new Map<string, { voice: Voice; generation: number; arrive: number }>()
  try {
    streamDestination = context.createMediaStreamDestination()
  } catch (error) {
    console.warn('MediaStream destination is unavailable', error)
  }

  function connectMaster(): void {
    pool.masterGain.connect(context.destination)
    if (streamDestination) pool.masterGain.connect(streamDestination)
  }
  connectMaster()

  function samplerAudible(): boolean {
    return mode === 'sampler' && workletOk && sample !== null
  }

  function at(time: number): number {
    return Math.max(time, context.currentTime)
  }

  function cancelVoice(voice: Voice, time: number): void {
    voice.source.cancel(time)
    voice.filter.frequency.cancelScheduledValues(time)
    voice.filter.Q.cancelScheduledValues(time)
    voice.gain.gain.cancelScheduledValues(time)
  }

  function waveOf(point: NotePoint): OscillatorType {
    return point.waveType === 'custom' ? 'sine' : point.waveType
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
    const lead = mode === 'sampler' ? samplerLead(voice.source.currentHz(), config.baseHz()) : 0
    const when = now + lead
    const gain = voice.gain.gain
    gain.cancelScheduledValues(now)
    const level = gain.value > SILENT ? gain.value : lead > 0 ? 0.7 : SILENT
    gain.setValueAtTime(Math.max(level, SILENT), when)
    const releaseEnd = when + RELEASE
    if (level > SILENT) gain.exponentialRampToValueAtTime(SILENT, releaseEnd)
    pool.markRelease(voice, releaseEnd)
    voice.source.stop(releaseEnd)
  }

  /**
   * Sampler pitch comes out later than it goes in. Start the clip early when
   * the clock allows, and open the gate when the sound will actually arrive.
   */
  function samplerWindow(hz: number, musicalStart: number): { sourceAt: number; heardAt: number } {
    if (mode !== 'sampler') return { sourceAt: musicalStart, heardAt: musicalStart }
    const lead = samplerLead(hz, config.baseHz())
    const sourceAt = Math.max(context.currentTime, musicalStart - lead)
    return { sourceAt, heardAt: sourceAt + lead }
  }

  function triggerPoint(point: NotePoint, time: number, duration = HIT_DURATION): void {
    if (mode === 'sampler' && !samplerAudible()) return
    const start = at(time)
    const timing = samplerWindow(point.y, start)
    const voice = pool.acquire(timing.sourceAt)
    cancelVoice(voice, timing.sourceAt)
    voice.source.setWave?.(waveOf(point))
    voice.source.start(timing.sourceAt)
    voice.source.setPitch(point.y, timing.sourceAt)
    voice.filter.frequency.setValueAtTime(zToCutoff(point.z), timing.heardAt)
    voice.filter.Q.setValueAtTime(zToQ(point.z), timing.heardAt)
    const releaseEnd = scheduleEnvelope(voice.gain.gain, timing.heardAt, duration, zToGain(point.z), point.velocity)
    pool.markRelease(voice, releaseEnd)
    if (mode === 'sampler') voice.source.stop(releaseEnd)
  }

  function silence(): void {
    gesture = null
    slides.clear()
    pool.silence(context.currentTime)
  }

  function rememberSlide(pointId: string, voice: Voice, arrive: number): void {
    slides.set(pointId, { voice, generation: voice.generation, arrive })
  }

  /** The voice gliding into `pointId`, if it will arrive with this event. */
  function takeSlide(pointId: string, arrive: number): Voice | null {
    const slide = slides.get(pointId)
    if (!slide) return null
    slides.delete(pointId)
    if (slide.generation !== slide.voice.generation) return null
    if (Math.abs(slide.arrive - arrive) > 0.03) return null
    return slide.voice
  }

  /** Keep the open gate through the next leg, then release. No new attack. */
  function extendGate(voice: Voice, start: number, end: number, peak: number): number {
    const sustain = Math.max(peak * SUSTAIN, SILENT)
    const gain = voice.gain.gain
    gain.setValueAtTime(sustain, start)
    gain.setValueAtTime(sustain, end)
    const releaseEnd = end + RELEASE
    gain.exponentialRampToValueAtTime(SILENT, releaseEnd)
    pool.markRelease(voice, releaseEnd)
    return releaseEnd
  }

  function glideVoice(
    voice: Voice,
    from: NotePoint,
    to: NotePoint,
    curve: CurveType,
    start: number,
    end: number,
  ): void {
    voice.source.rampPitch(from.y, to.y, start, end, curve)
    rampParam(voice.filter.frequency, zToCutoff(from.z), zToCutoff(to.z), start, end, curve)
    voice.filter.Q.setValueAtTime(zToQ(from.z), start)
    voice.filter.Q.linearRampToValueAtTime(zToQ(to.z), end)
  }

  /** Start a clip (or oscillator) for the first leg of a slide. */
  function startBend(
    from: NotePoint,
    to: NotePoint,
    curve: CurveType,
    time: number,
    duration: number,
  ): void {
    if (mode === 'sampler' && !samplerAudible()) return
    const start = at(time)
    const glide = Math.max(MIN_BEND, duration)
    const timing = samplerWindow(from.y, start)
    const end = timing.sourceAt + glide
    const voice = pool.acquire(timing.sourceAt)
    cancelVoice(voice, timing.sourceAt)
    voice.source.setWave?.(waveOf(from))
    voice.source.start(timing.sourceAt)
    voice.source.rampPitch(from.y, to.y, timing.sourceAt, end, curve)
    const heardEnd = timing.heardAt + glide
    rampParam(voice.filter.frequency, zToCutoff(from.z), zToCutoff(to.z), timing.heardAt, heardEnd, curve)
    voice.filter.Q.setValueAtTime(zToQ(from.z), timing.heardAt)
    voice.filter.Q.linearRampToValueAtTime(zToQ(to.z), heardEnd)
    const peak = Math.max(zToGain(from.z), zToGain(to.z))
    const releaseEnd = scheduleEnvelope(voice.gain.gain, timing.heardAt, glide, peak, from.velocity)
    pool.markRelease(voice, releaseEnd)
    if (mode !== 'sampler') return
    // The clip keeps running past this node. aimEnd can be pushed later if the slide continues.
    voice.source.aimEnd?.(releaseEnd)
    rememberSlide(to.id, voice, start + glide)
  }

  /** Swap in SoundTouch voices. The new pool is built before the old one is dropped. */
  async function installSampler(): Promise<void> {
    if (workletOk) return
    if (context.state !== 'running') await context.resume()
    await ensureSoundTouch(context)
    const nextPool = build('sampler')
    const volume = pool.masterGain.gain.value
    pool.dispose(context.currentTime)
    pool = nextPool
    pool.masterGain.gain.value = volume
    connectMaster()
    workletOk = true
    workletProblem = null
  }

  return {
    context,
    streamDestination,
    get workletError() {
      return workletProblem
    },

    async ensureRunning() {
      if (context.state !== 'running') await context.resume()
      if (mode !== 'sampler' || workletOk) return
      try {
        await installSampler()
      } catch (error) {
        workletProblem = error instanceof Error ? error.message : String(error)
        throw error
      }
    },

    setVolume(value: number) {
      pool.masterGain.gain.value = Math.min(1, Math.max(0, value))
    },

    triggerHit(point, time) {
      triggerPoint(point, time)
    },

    triggerBend(from, to, curve, time, duration) {
      startBend(from, to, curve, time, duration)
    },

    continueBend(from, to, curve, time, duration) {
      if (mode === 'sampler' && samplerAudible()) {
        const start = at(time)
        const voice = takeSlide(from.id, start)
        if (voice) {
          const glide = Math.max(MIN_BEND, duration)
          const end = start + glide
          cancelVoice(voice, start)
          glideVoice(voice, from, to, curve, start, end)
          const peak = Math.max(zToGain(from.z), zToGain(to.z))
          const releaseEnd = extendGate(voice, start, end, peak)
          voice.source.aimEnd?.(releaseEnd)
          rememberSlide(to.id, voice, end)
          return
        }
      }
      startBend(from, to, curve, time, duration)
    },

    beginGesture(freq, z, velocity) {
      const start = context.currentTime
      if (gesture) releaseGestureVoice(start)
      if (mode === 'sampler' && !samplerAudible()) return
      const timing = samplerWindow(Math.max(freq, SILENT), start)
      const voice = pool.acquire(timing.sourceAt)
      gesture = voice
      voice.pinned = true
      cancelVoice(voice, timing.sourceAt)
      voice.source.setWave?.('sine')
      voice.source.start(timing.sourceAt)
      voice.source.setPitch(Math.max(freq, SILENT), timing.sourceAt)
      voice.filter.frequency.setValueAtTime(zToCutoff(z), timing.heardAt)
      voice.filter.Q.setValueAtTime(zToQ(z), timing.heardAt)
      openGestureGate(voice.gain.gain, timing.heardAt, zToGain(z), velocity)
      voice.releaseTime = Number.POSITIVE_INFINITY
    },

    glideGesture(freq, curve) {
      if (!gesture) return
      const now = context.currentTime
      gesture.source.cancel(now)
      const target = Math.max(freq, SILENT)
      const from = gesture.source.currentHz()
      gesture.source.rampPitch(from > 0 ? from : target, target, now, now + GESTURE_GLIDE, curve)
    },

    setGestureBrightness(z: number) {
      if (!gesture) return
      const now = context.currentTime
      gesture.filter.frequency.setValueAtTime(zToCutoff(z), now)
      gesture.filter.Q.setValueAtTime(zToQ(z), now)
    },

    releaseGesture() {
      releaseGestureVoice(context.currentTime)
    },

    gestureLive() {
      return gesture !== null
    },

    silence,

    async applySoundMode(next: SoundMode) {
      if (next === mode) {
        if (next === 'sampler' && !workletOk) await installSampler()
        return
      }
      silence()
      if (next === 'oscillator') {
        const volume = pool.masterGain.gain.value
        const nextPool = build('oscillator')
        pool.dispose(context.currentTime)
        pool = nextPool
        mode = 'oscillator'
        pool.masterGain.gain.value = volume
        connectMaster()
        return
      }
      try {
        if (context.state !== 'running') await context.resume()
        await ensureSoundTouch(context)
        const nextPool = build('sampler')
        const volume = pool.masterGain.gain.value
        pool.dispose(context.currentTime)
        pool = nextPool
        mode = 'sampler'
        workletOk = true
        workletProblem = null
        pool.masterGain.gain.value = volume
        connectMaster()
      } catch (error) {
        workletProblem = error instanceof Error ? error.message : String(error)
        throw error
      }
    },

    loadSample(buffer: AudioBuffer) {
      sample = buffer
    },

    hasSample() {
      return sample !== null
    },
  }
}
