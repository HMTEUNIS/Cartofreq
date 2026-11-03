import type { GestureOutput } from '../audio/gesture'
import { createMidiPerformance, createWebMidiPorts, type WebMidiPorts } from '../audio/midi-in'
import type { AudioEngine } from '../audio/synth'
import type { Transport } from '../audio/transport'
import { BPM_MAX, BPM_MIN, describeTime } from '../model/space'
import type { Store } from '../model/store'
import {
  SAMPLE_LOOP_UNDER_SECONDS,
  SAMPLE_MAX_SECONDS,
  type CurveType,
  type OutputRoute,
  type SoundMode,
} from '../model/types'
import type { RecorderHandle } from '../recording'
import { createKeyboardPiano } from './keyboard'
import { openMpeExport } from './mpeExport'

interface ControlOptions {
  store: Store
  audio: GestureOutput & { setVolume?(value: number): void }
  engine: AudioEngine
  scheduler: Transport
  recorder: RecorderHandle | null
  platform: 'web' | 'electron'
}

/** Blank pitch, Hz, bar, beat, and intensity — same fields as a live readout. */
export const HOVER_IDLE = '— · — Hz · bar — · beat — · intensity —'

/** Widest live line, so the chip is already that size before a pointer hits the plane. */
const HOVER_SIZER = 'G#6 +50¢ · 1670.42 Hz · bar 4 · beat 4.00 · intensity 100'

export interface ControlHandles {
  tick(): void
  setHover(text: string): void
  setStatus(text: string): void
}

export function createControls(options: ControlOptions): ControlHandles {
  const { store, audio, engine, scheduler, recorder, platform } = options
  const desktop = platform === 'electron'

  const info = document.createElement('section')
  info.className = 'panel info'
  info.innerHTML = `
    <header class="brand">
      <h1>cartofreq</h1>
      <svg class="wave" viewBox="0 0 118 12" width="118" height="12" aria-hidden="true" focusable="false">
        <path d="M3 6 Q6.5 1 10 6 T17 6 T24 6 T31 6 T38 6 T45 6 T52 6 T59 6 T66 6 T73 6 T80 6 T87 6 T94 6 T101 6 T108 6 T115 6" fill="none" stroke="currentColor" stroke-width="1"/>
        <circle cx="3" cy="6" r="1.5" fill="currentColor"/>
        <circle cx="115" cy="6" r="1.5" fill="currentColor"/>
      </svg>
      <span class="coord">x time · y pitch · z brightness</span>
    </header>
    <p class="tagline">Four bars in free pitch</p>
    <div class="meta"><span data-counts></span></div>
    <details class="instructions">
      <summary></summary>
      <ul class="help">
        <li>Click plane to place a note. Drag empty space to orbit.</li>
        <li>Drag a note: time, pitch, intensity. Shift locks intensity.</li>
        <li>Right-drag or Control-drag to bend into a new note. Scroll to zoom.</li>
        <li>${desktop ? 'Double-click edits a note. Delete removes selection.' : 'Double-click edits a note. Wave type applies in oscillator mode.'}</li>
        <li>${desktop ? 'Space plays. Ctrl+S stops.' : 'Space plays. Ctrl+S stops. Ctrl+R records.'}</li>
        <li>${desktop ? 'Load a sample. Audio Out plays it. MIDI Out sends MPE. Both does each.' : 'Sampler pitch-shifts one loaded clip and keeps its length.'}</li>
        <li>Keyboard toggle plays A–L. Z and X shift the octave. MIDI in does the same.</li>
        <li>Quantize snaps every note to the nearest 1/4 beat.</li>
        <li>The ball above each bar opens that column: clear, copy, or paste.</li>
      </ul>
    </details>
  `

  const hoverReadout = document.createElement('p')
  hoverReadout.className = 'panel hover-readout'
  hoverReadout.dataset.hover = ''
  const hoverSizer = document.createElement('span')
  hoverSizer.className = 'hover-sizer'
  hoverSizer.setAttribute('aria-hidden', 'true')
  hoverSizer.textContent = HOVER_SIZER
  const hoverValue = document.createElement('span')
  hoverValue.className = 'hover-value'
  hoverValue.textContent = HOVER_IDLE
  hoverReadout.append(hoverSizer, hoverValue)

  const transport = document.createElement('section')
  transport.className = 'panel transport'
  transport.innerHTML = `
    <div class="row icon-row">
      <button type="button" class="primary icon-btn" data-play aria-label="Play" aria-pressed="false"></button>
      <button type="button" class="icon-btn" data-stop aria-label="Stop"></button>
      <button type="button" class="icon-btn" data-record aria-label="Record"></button>
      <button type="button" class="icon-btn" data-keyboard aria-label="Keyboard" aria-pressed="false"></button>
      <span class="octave" data-octave hidden></span>
      <button type="button" class="icon-btn" data-quantize aria-label="Quantize to 1/4 beat" title="Quantize to 1/4 beat"></button>
      <button type="button" class="icon-btn" data-clear aria-label="Clear"></button>
      <button type="button" class="icon-btn" data-demo aria-label="Random sequence"></button>
      <button type="button" class="icon-btn" data-mpe aria-label="Export MPE"></button>
    </div>
    <div class="row transport-mix">
      <label class="field">BPM
        <input data-bpm-range type="range" min="${BPM_MIN}" max="${BPM_MAX}" step="1" />
        <input data-bpm type="number" min="${BPM_MIN}" max="${BPM_MAX}" step="1" />
      </label>
      <label class="field" data-volume-field title="${desktop ? 'Scales what this app sends to its output device.' : ''}">${desktop ? 'monitor' : 'volume'}
        <input data-volume type="range" min="0" max="1" step="0.01" value="0.5" />
      </label>
    </div>
    <div class="row transport-curve">
      <label class="field">new bends
        <select data-curve>
          <option value="exponential">exponential</option>
          <option value="linear">linear</option>
        </select>
      </label>
      ${
        desktop
          ? ''
          : `<label class="field" data-wave-field>wave
        <select data-wave>
          <option value="sine">sine</option>
          <option value="triangle">triangle</option>
          <option value="sawtooth">sawtooth</option>
          <option value="square">square</option>
        </select>
      </label>`
      }
      <p class="readout" data-readout>bar 1 · beat 1.00</p>
    </div>
    ${
      desktop
        ? ''
        : `<div class="row transport-sound">
      <div class="segment" role="group" aria-label="Sound source">
        <button type="button" class="text-btn" data-mode="oscillator" aria-pressed="true">Oscillator</button>
        <button type="button" class="text-btn" data-mode="sampler" aria-pressed="false">Sampler</button>
      </div>
    </div>`
    }
    <div class="row transport-sample" data-sample-row>
      <label class="text-btn file-btn">Load sample
        <input data-sample type="file" accept="audio/*" />
      </label>
      <span class="sample-name" data-sample-name>No sample</span>
      <label class="field">base Hz
        <input data-base type="number" min="20" max="5000" step="0.01" value="440" />
      </label>
      <label class="check" title="Repeats the recording so a bend can outlast it. Clips under 5 seconds start on. The four bars loop either way."><input data-loop type="checkbox" /> loop sample</label>
    </div>
    <div class="row transport-io">
      ${
        desktop
          ? `<label class="field">output
        <select data-output>
          <option value="audio">Audio Out</option>
          <option value="midi">MIDI Out</option>
          <option value="both">Both</option>
        </select>
      </label>
      <button type="button" class="text-btn" data-midi-rescan>Rescan MIDI</button>`
          : `<label class="field">MIDI in
        <select data-midi-in>
          <option value="">Off</option>
        </select>
      </label>`
      }
    </div>
    <p class="hint" data-midi-in-status hidden></p>
    <p class="hint" data-midi-out hidden></p>
    <p class="hint" data-audio-out hidden></p>
    <p class="status" data-status></p>
  `

  document.body.append(info, transport, hoverReadout)

  const hover = hoverValue
  const counts = info.querySelector<HTMLElement>('[data-counts]')!
  const play = transport.querySelector<HTMLButtonElement>('[data-play]')!
  const stop = transport.querySelector<HTMLButtonElement>('[data-stop]')!
  const record = transport.querySelector<HTMLButtonElement>('[data-record]')!
  const keyboard = transport.querySelector<HTMLButtonElement>('[data-keyboard]')!
  const octaveReadout = transport.querySelector<HTMLElement>('[data-octave]')!
  const quantize = transport.querySelector<HTMLButtonElement>('[data-quantize]')!
  const clear = transport.querySelector<HTMLButtonElement>('[data-clear]')!
  const demo = transport.querySelector<HTMLButtonElement>('[data-demo]')!
  const exportMpe = transport.querySelector<HTMLButtonElement>('[data-mpe]')!
  setGlyph(stop, 'stop')
  setGlyph(record, 'record')
  setGlyph(keyboard, 'keyboard')
  setGlyph(quantize, 'quantize')
  setGlyph(clear, 'clear')
  setGlyph(demo, 'demo')
  setGlyph(exportMpe, 'mpe')
  const bpmRange = transport.querySelector<HTMLInputElement>('[data-bpm-range]')!
  const bpmNumber = transport.querySelector<HTMLInputElement>('[data-bpm]')!
  const volume = transport.querySelector<HTMLInputElement>('[data-volume]')
  const curve = transport.querySelector<HTMLSelectElement>('[data-curve]')!
  const waveField = transport.querySelector<HTMLElement>('[data-wave-field]')
  const wave = transport.querySelector<HTMLSelectElement>('[data-wave]')
  const readout = transport.querySelector<HTMLElement>('[data-readout]')!
  const status = transport.querySelector<HTMLElement>('[data-status]')!
  const sampleRow = transport.querySelector<HTMLElement>('[data-sample-row]')!
  const sampleInput = transport.querySelector<HTMLInputElement>('[data-sample]')!
  const sampleName = transport.querySelector<HTMLElement>('[data-sample-name]')!
  const baseInput = transport.querySelector<HTMLInputElement>('[data-base]')!
  const loopInput = transport.querySelector<HTMLInputElement>('[data-loop]')!
  const outputSelect = transport.querySelector<HTMLSelectElement>('[data-output]')
  const midiInSelect = transport.querySelector<HTMLSelectElement>('[data-midi-in]')
  const midiRescan = transport.querySelector<HTMLButtonElement>('[data-midi-rescan]')
  const midiInHint = transport.querySelector<HTMLElement>('[data-midi-in-status]')
  const midiOutHint = transport.querySelector<HTMLElement>('[data-midi-out]')
  const audioOutHint = transport.querySelector<HTMLElement>('[data-audio-out]')

  if (desktop || !recorder) {
    record.hidden = true
    record.disabled = true
    record.title = 'Recording stays in the browser. Desktop audio goes to the DAW.'
  } else {
    record.disabled = !recorder.supported
    if (!recorder.supported) record.title = 'Recording is unavailable in this browser'
  }

  const piano = createKeyboardPiano({ store, audio, scheduler })
  const handleMidi = createMidiPerformance(piano)
  let webMidi: WebMidiPorts | null = null
  let midiReady: Promise<void> | null = null
  let midiOutMessage = ''

  const syncKeyboard = () => {
    const on = piano.enabled
    keyboard.setAttribute('aria-pressed', on ? 'true' : 'false')
    octaveReadout.hidden = !on
    if (on && octaveReadout.textContent !== piano.octaveLabel) octaveReadout.textContent = piano.octaveLabel
  }

  const setStatus = (text: string) => {
    status.textContent = text
  }

  const renderMidiOut = () => {
    if (!midiOutHint) return
    const routed = store.outputRoute !== 'audio'
    midiOutHint.hidden = !routed || midiOutMessage.length === 0
    midiOutHint.textContent = routed ? midiOutMessage : ''
  }

  const renderMeta = () => {
    counts.textContent = `${store.points.size} notes · ${store.bends.length} bends`
    if (document.activeElement !== bpmRange) bpmRange.value = String(store.bpm)
    if (document.activeElement !== bpmNumber) bpmNumber.value = String(store.bpm)
    if (document.activeElement !== curve) curve.value = store.bendCurve
    if (wave && document.activeElement !== wave) wave.value = store.waveType === 'custom' ? 'sine' : store.waveType
    if (waveField) waveField.hidden = store.soundMode !== 'oscillator'
    sampleRow.hidden = store.soundMode !== 'sampler'
    sampleName.textContent = store.sampleName || 'No sample'
    sampleName.title = store.sampleName
    if (document.activeElement !== baseInput) baseInput.value = String(store.sampleBaseHz)
    if (document.activeElement !== loopInput) loopInput.checked = store.sampleLoop
    if (outputSelect && document.activeElement !== outputSelect) outputSelect.value = store.outputRoute
    for (const button of transport.querySelectorAll<HTMLButtonElement>('[data-mode]')) {
      button.setAttribute('aria-pressed', button.dataset.mode === store.soundMode ? 'true' : 'false')
    }
    renderMidiOut()
  }

  const tick = () => {
    piano.tick()
    syncKeyboard()
    const playing = scheduler.isPlaying
    setGlyph(play, playing ? 'pause' : 'play')
    play.setAttribute('aria-label', playing ? 'Pause' : 'Play')
    play.classList.toggle('primary', !playing)
    play.setAttribute('aria-pressed', playing ? 'true' : 'false')
    record.classList.toggle('recording', recorder?.recording ?? false)
    const label = describeTime(scheduler.playhead())
    if (readout.textContent !== label) readout.textContent = label
  }

  const togglePlay = async () => {
    try {
      if (scheduler.isPlaying) {
        piano.finish()
        scheduler.pause()
      } else await scheduler.play()
    } catch (error) {
      console.warn(error)
      setStatus('Audio could not start. Click Play again.')
    }
    tick()
  }

  play.addEventListener('click', () => void togglePlay())
  stop.addEventListener('click', () => {
    piano.finish()
    scheduler.stop()
    tick()
  })
  record.addEventListener('click', () => void toggleRecord())
  keyboard.addEventListener('click', () => {
    piano.setEnabled(!piano.enabled)
    syncKeyboard()
  })
  quantize.addEventListener('click', () => {
    piano.cancel()
    if (scheduler.isPlaying) scheduler.pause()
    store.quantize()
    tick()
  })
  clear.addEventListener('click', () => {
    piano.cancel()
    scheduler.stop()
    store.clear()
    setStatus('')
    tick()
  })
  demo.addEventListener('click', () => {
    piano.cancel()
    scheduler.stop()
    store.loadRandom()
    setStatus('')
    tick()
  })
  exportMpe.addEventListener('click', () => {
    openMpeExport(
      () => ({
        bpm: store.bpm,
        points: store.points,
        bends: store.bends,
      }),
      desktop,
    )
  })

  const applyBpm = (value: number) => {
    scheduler.setBpm(value)
    renderMeta()
  }
  bpmRange.addEventListener('input', () => applyBpm(Number(bpmRange.value)))
  bpmNumber.addEventListener('change', () => applyBpm(Number(bpmNumber.value)))
  volume?.addEventListener('input', () => audio.setVolume?.(Number(volume.value)))
  curve.addEventListener('change', () => store.setBendCurve(curve.value as CurveType))
  wave?.addEventListener('change', () => store.setWaveType(wave.value as OscillatorType))

  for (const button of transport.querySelectorAll<HTMLButtonElement>('[data-mode]')) {
    button.addEventListener('click', () => {
      const next = button.dataset.mode
      if (next !== 'oscillator' && next !== 'sampler') return
      void switchMode(next)
    })
  }

  async function switchMode(next: SoundMode): Promise<void> {
    if (next === store.soundMode) return
    const previous = store.soundMode
    piano.finish()
    store.setSoundMode(next)
    try {
      await engine.applySoundMode(next)
      if (next === 'sampler' && !engine.hasSample()) setStatus('Sampler is silent until a sample is loaded.')
      else if (engine.workletError) setStatus(engine.workletError)
      else setStatus('')
    } catch (error) {
      console.warn(error)
      store.setSoundMode(previous)
      setStatus('Sampler could not start. Staying on the oscillator.')
    }
    renderMeta()
  }

  sampleInput.addEventListener('change', () => {
    const file = sampleInput.files?.[0]
    sampleInput.value = ''
    if (file) void loadFile(file)
  })
  baseInput.addEventListener('change', () => {
    store.setSampleBaseHz(Number(baseInput.value))
    renderMeta()
  })
  loopInput.addEventListener('change', () => {
    store.setSampleLoop(loopInput.checked)
  })

  outputSelect?.addEventListener('change', () => {
    const next = outputSelect.value
    if (next !== 'audio' && next !== 'midi' && next !== 'both') return
    void switchRoute(next)
  })

  async function switchRoute(next: OutputRoute): Promise<void> {
    if (next === store.outputRoute) return
    const was = scheduler.isPlaying
    piano.finish()
    if (was) scheduler.pause()
    store.setOutputRoute(next)
    renderMidiOut()
    if (!was) {
      tick()
      return
    }
    try {
      await scheduler.play()
    } catch (error) {
      console.warn(error)
      setStatus('Output could not restart. Click Play again.')
    }
    tick()
  }

  async function loadFile(file: File): Promise<void> {
    if (file.size > 40_000_000) {
      setStatus(`That file is too large. Samples must be ${SAMPLE_MAX_SECONDS} seconds or shorter.`)
      return
    }
    try {
      const bytes = await file.arrayBuffer()
      const buffer = await engine.context.decodeAudioData(bytes.slice(0))
      if (buffer.duration > SAMPLE_MAX_SECONDS + 0.001) {
        setStatus(`Sample is ${buffer.duration.toFixed(1)}s. The limit is ${SAMPLE_MAX_SECONDS}s.`)
        return
      }
      const loop = buffer.duration < SAMPLE_LOOP_UNDER_SECONDS
      engine.loadSample(buffer)
      store.setSample({ name: file.name, seconds: buffer.duration, loop })
      setStatus(loop ? `${file.name} loaded. Short clips loop through a long bend.` : `${file.name} loaded.`)
    } catch (error) {
      console.warn(error)
      setStatus('Could not decode that audio file.')
    }
  }

  async function ensureWebMidi(): Promise<void> {
    if (!midiInSelect) return
    if (!midiReady) {
      midiReady = (async () => {
        webMidi = createWebMidiPorts(handleMidi)
        try {
          const devices = await webMidi.request()
          const selected = midiInSelect.value
          midiInSelect.replaceChildren(new Option('Off', ''))
          for (const device of devices) midiInSelect.add(new Option(device.name, device.id))
          if ([...midiInSelect.options].some((option) => option.value === selected)) midiInSelect.value = selected
          if (devices.length === 0) setStatus('No MIDI inputs found.')
        } catch (error) {
          console.warn(error)
          setStatus('MIDI input is unavailable in this browser.')
        }
      })()
    }
    await midiReady
  }

  midiInSelect?.addEventListener('pointerdown', () => void ensureWebMidi())
  midiInSelect?.addEventListener('focus', () => void ensureWebMidi())
  midiInSelect?.addEventListener('change', () => {
    webMidi?.select(midiInSelect.value || null)
    setStatus(midiInSelect.value ? 'MIDI in on.' : '')
  })

  async function toggleRecord(): Promise<void> {
    if (!recorder?.supported || desktop) return
    try {
      if (recorder.recording) {
        recorder.stop()
        setStatus('Recording saved.')
      } else {
        await audio.ensureRunning()
        if (!scheduler.isPlaying) await scheduler.play()
        recorder.start()
        setStatus(recorder?.recording ? 'Recording the live output…' : 'Recording failed to start.')
      }
    } catch (error) {
      console.warn(error)
      setStatus('Recording failed.')
    }
    tick()
  }

  window.addEventListener('keydown', (event) => {
    if (event.repeat) return
    if (document.body.hasAttribute('data-modal-open')) return
    const typing = isTypingTarget(event.target)
    if ((event.ctrlKey || event.metaKey) && event.code === 'KeyS') {
      event.preventDefault()
      piano.finish()
      scheduler.stop()
      tick()
      return
    }
    if ((event.ctrlKey || event.metaKey) && event.code === 'KeyR') {
      event.preventDefault()
      void toggleRecord()
      return
    }
    if (!typing && event.code === 'Space') {
      event.preventDefault()
      void togglePlay()
      return
    }
    if (typing || !piano.enabled) return
    if (piano.keyDown(event)) {
      event.preventDefault()
      syncKeyboard()
    }
  })

  window.addEventListener('keyup', (event) => {
    piano.keyUp(event)
  })

  if (desktop && window.cartofreq) {
    window.cartofreq.onMidiInput(handleMidi)
    midiRescan?.addEventListener('click', () => void refreshInputs())
    void loadDesktopIo()
  }

  async function loadDesktopIo(): Promise<void> {
    if (!window.cartofreq) return
    const [inputs, audioOut, midiOut] = await Promise.all([
      window.cartofreq.midiInputs(),
      window.cartofreq.audioStatus(),
      window.cartofreq.midiStatus(),
    ])
    showInputs(inputs.ports)
    showAudioOut(audioOut)
    midiOutMessage = midiOut.ok
      ? `MIDI out: ${midiOut.port}. Set the instrument bend range to ±48 semitones.`
      : `MIDI out unavailable. ${midiOut.error ?? 'The virtual port did not open.'}`
    renderMidiOut()
    if (engine.workletError) setStatus(`Sampler unavailable. ${engine.workletError}`)
    else if (desktop && !engine.hasSample()) setStatus('Load a sample to hear the score. The desktop app plays that recording, not an oscillator.')
  }

  async function refreshInputs(): Promise<void> {
    if (!window.cartofreq) return
    try {
      const inputs = await window.cartofreq.refreshMidiInputs()
      showInputs(inputs.ports)
    } catch (error) {
      console.warn(error)
      setStatus('MIDI input rescan failed.')
    }
  }

  function showInputs(ports: string[]): void {
    if (!midiInHint) return
    midiInHint.hidden = false
    midiInHint.textContent = ports.length > 0 ? `MIDI in: ${ports.join(', ')}` : 'MIDI in: none'
  }

  function showAudioOut(audioOut: { ok: boolean; sink: string; source: string; detail: string }): void {
    if (!audioOutHint) return
    audioOutHint.hidden = false
    audioOutHint.textContent = audioOut.ok
      ? `Audio out: ${audioOut.sink} → ${audioOut.source}. ${audioOut.detail}`
      : audioOut.detail
  }

  store.subscribe(renderMeta)
  renderMeta()
  tick()

  return {
    tick,
    setHover(text: string) {
      hover.textContent = text
    },
    setStatus,
  }
}

const GLYPHS = {
  play: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M8.2 4.6v14.8L19.4 12 8.2 4.6z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M6 4.6h4.2v14.8H6zm7.8 0H18v14.8h-4.2z"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="5.5" y="5.5" width="13" height="13" rx="1.6" fill="currentColor"/></svg>',
  record: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="6.6" fill="currentColor"/></svg>',
  keyboard: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" fill-rule="evenodd" d="M3 6.8h18v10.4H3V6.8zm1.7 1.7h2.1v1.9H4.7V8.5zm3.1 0h2.1v1.9H7.8V8.5zm3.1 0h2.1v1.9h-2.1V8.5zm3.1 0h2.1v1.9h-2.1V8.5zm3.1 0h2.1v1.9h-2.1V8.5zM4.7 11.4h2.1v1.9H4.7v-1.9zm3.1 0h2.1v1.9H7.8v-1.9zm3.1 0h8.3v1.9h-8.3v-1.9z"/></svg>',
  quantize: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M4 4.2h2.2v15.6H4V4.2zm6.9 0h2.2v15.6h-2.2V4.2zm6.9 0H20v15.6h-2.2V4.2z"/><circle cx="12" cy="12" r="2.5" fill="currentColor"/></svg>',
  clear: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" fill-rule="evenodd" d="M9 3.4h6l.9 1.8h4.3v1.7H3.8V5.2h4.3L9 3.4zM6.5 8.5h11v9.8c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V8.5zm3.1 1.6v7.4h1.4v-7.4H9.6zm3.4 0v7.4h1.4v-7.4h-1.4z"/></svg>',
  demo: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2.2 13.5 8.4 19.8 10 13.5 11.6 12 17.8 10.5 11.6 4.2 10 10.5 8.4 12 2.2zm6.2 12.1.75 2.35 2.35.75-2.35.75L18.2 20.5l-.75-2.35-2.35-.75 2.35-.75.75-2.35z"/></svg>',
  mpe: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M11.1 3.2h1.8v8.3l2.55-2.55 1.27 1.27L12 15.04 7.28 10.22l1.27-1.27L11.1 11.5V3.2zM4.8 18.1h14.4V20H4.8v-1.9z"/></svg>',
} as const

function setGlyph(button: HTMLElement, name: keyof typeof GLYPHS): void {
  if (button.dataset.glyph === name) return
  button.dataset.glyph = name
  button.innerHTML = GLYPHS[name]
}

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  const tag = target.tagName
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target.isContentEditable
}
