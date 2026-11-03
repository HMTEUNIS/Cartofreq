import { execFileSync } from 'node:child_process'
import { app, BrowserWindow, ipcMain } from 'electron'
import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const require = createRequire(import.meta.url)
const midi = require('@julusian/midi') as {
  Output: new () => MidiOutput
  Input: new () => MidiInput
}

interface MidiOutput {
  getPortCount(): number
  getPortName(index: number): string
  openPort(index: number): void
  openVirtualPort(name: string): void
  sendMessage(bytes: number[]): void
  closePort(): void
}

interface MidiInput {
  getPortCount(): number
  getPortName(index: number): string
  openPort(index: number): void
  openVirtualPort(name: string): void
  closePort(): void
  destroy(): void
  ignoreTypes(sysex: boolean, timing: boolean, activeSensing: boolean): void
  on(event: 'message', listener: (delta: number, message: number[]) => void): void
}

const VIRTUAL_PORT_NAME = 'Cartofreq MPE'
const VIRTUAL_INPUT_NAME = 'Cartofreq MIDI In'
const SINK_NAME = 'cartofreq_out'
const SOURCE_NAME = 'cartofreq_in'

let win: BrowserWindow | null = null
let midiOut: MidiOutput | null = null
let virtualIn: MidiInput | null = null
const hardwareInputs: MidiInput[] = []
let sinkModuleId: string | null = null
let sourceModuleId: string | null = null

let midiState: { ok: boolean; port: string; error?: string } = {
  ok: false,
  port: VIRTUAL_PORT_NAME,
}
let midiInState: { ok: boolean; ports: string[]; error?: string } = {
  ok: false,
  ports: [],
}
let audioState: { ok: boolean; sink: string; source: string; detail: string } = {
  ok: false,
  sink: 'CartofreqOut',
  source: 'CartofreqIn',
  detail: '',
}

function send(bytes: number[]): void {
  if (!midiOut) return
  try {
    midiOut.sendMessage(bytes)
  } catch {
    midiState = { ok: false, port: VIRTUAL_PORT_NAME, error: 'MIDI port closed.' }
  }
}

/** Tell member channels 2–16 to use the MPE ±48 semitone bend range. */
function sendPitchBendRange(channel: number): void {
  const status = 0xb0 | (channel - 1)
  send([status, 101, 0])
  send([status, 100, 0])
  send([status, 6, 48])
  send([status, 38, 0])
  send([status, 101, 127])
  send([status, 100, 127])
}

/** Manager channel 1: 15 member channels in the lower zone. */
function sendMpeConfiguration(): void {
  send([0xb0, 101, 0])
  send([0xb0, 100, 6])
  send([0xb0, 6, 15])
  send([0xb0, 38, 0])
  send([0xb0, 101, 127])
  send([0xb0, 100, 127])
  for (let channel = 2; channel <= 16; channel++) sendPitchBendRange(channel)
}

function openExistingPort(output: MidiOutput): boolean {
  const count = output.getPortCount()
  for (let index = 0; index < count; index++) {
    if (!output.getPortName(index).includes(VIRTUAL_PORT_NAME)) continue
    output.openPort(index)
    return true
  }
  return false
}

function initMidi(): void {
  const output = new midi.Output()
  try {
    output.openVirtualPort(VIRTUAL_PORT_NAME)
    midiOut = output
  } catch (virtualError) {
    try {
      if (!openExistingPort(output)) throw virtualError
      midiOut = output
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error)
      midiState = {
        ok: false,
        port: VIRTUAL_PORT_NAME,
        error: `${detail} On Windows, install loopMIDI and create a port named ${VIRTUAL_PORT_NAME}.`,
      }
      console.error('[MIDI] Init failed:', error)
      return
    }
  }
  midiState = { ok: true, port: VIRTUAL_PORT_NAME }
  sendMpeConfiguration()
  console.log('[MIDI] Ready:', VIRTUAL_PORT_NAME)
}

function listen(input: MidiInput): void {
  input.ignoreTypes(true, true, true)
  input.on('message', (_delta, message) => {
    if (!win || !Array.isArray(message)) return
    win.webContents.send(
      'midi:input',
      message.map((byte) => byte & 0xff),
    )
  })
}

function closeHardwareInputs(): void {
  while (hardwareInputs.length > 0) {
    const input = hardwareInputs.pop()
    if (!input) continue
    try {
      input.closePort()
    } catch {
      /* already closed */
    }
    try {
      input.destroy()
    } catch {
      /* already destroyed */
    }
  }
}

/**
 * RtMidi publishes a port other programs can open. JZZ does not, which is why
 * MIDI in uses the same library as MIDI out.
 * Hardware ports are opened directly so a keyboard works without a patchbay.
 * Names containing "Cartofreq" are skipped so the app does not hear its own output.
 */
function openHardwareInputs(): string[] {
  closeHardwareInputs()
  const probe = new midi.Input()
  const names: string[] = []
  const count = probe.getPortCount()
  for (let index = 0; index < count; index++) names.push(probe.getPortName(index))
  probe.destroy()

  const opened: string[] = []
  for (let index = 0; index < names.length; index++) {
    const name = names[index] ?? `MIDI ${index}`
    if (/cartofreq/i.test(name)) continue
    const input = new midi.Input()
    try {
      input.openPort(index)
      listen(input)
      hardwareInputs.push(input)
      opened.push(name)
    } catch (error) {
      console.error('[MIDI] Input open failed:', name, error)
      try {
        input.destroy()
      } catch {
        /* already destroyed */
      }
    }
  }
  return opened
}

function openVirtualInput(): string | null {
  if (virtualIn) return VIRTUAL_INPUT_NAME
  const input = new midi.Input()
  try {
    input.openVirtualPort(VIRTUAL_INPUT_NAME)
    listen(input)
    virtualIn = input
    return VIRTUAL_INPUT_NAME
  } catch (error) {
    console.error('[MIDI] Virtual input failed:', error)
    try {
      input.destroy()
    } catch {
      /* already destroyed */
    }
    return null
  }
}

function refreshMidiInputs(): { ok: boolean; ports: string[]; error?: string } {
  const ports: string[] = []
  const virtual = openVirtualInput()
  if (virtual) ports.push(virtual)
  ports.push(...openHardwareInputs())
  midiInState = ports.length > 0
    ? { ok: true, ports }
    : { ok: false, ports, error: 'No MIDI input opened.' }
  if (midiInState.ok) console.log('[MIDI] Inputs:', ports.join(', '))
  return midiInState
}

function pactl(args: string[]): string {
  return execFileSync('pactl', args, { encoding: 'utf8', timeout: 4000 }).trim()
}

/**
 * Create a null sink and a source that monitors it.
 * The app does not steal the system default sink. Point Cartofreq's output at
 * CartofreqOut, and the DAW's input at CartofreqIn.
 */
function setupVirtualAudio(): void {
  if (process.platform === 'darwin') {
    audioState = {
      ok: false,
      sink: 'BlackHole',
      source: 'BlackHole',
      detail: 'Install BlackHole, send Cartofreq’s output to it, and choose that device as the DAW input.',
    }
    return
  }
  if (process.platform === 'win32') {
    audioState = {
      ok: false,
      sink: 'CABLE Input',
      source: 'CABLE Output',
      detail: 'Install VB-Cable, send Cartofreq’s output to CABLE Input, and choose CABLE Output as the DAW input.',
    }
    return
  }
  if (process.platform !== 'linux') {
    audioState = {
      ok: false,
      sink: 'CartofreqOut',
      source: 'CartofreqIn',
      detail: 'Virtual audio devices are created on Linux. Other systems need a virtual audio driver.',
    }
    return
  }
  try {
    const sinks = pactl(['list', 'short', 'sinks'])
    if (!sinks.includes(SINK_NAME)) {
      const id = pactl([
        'load-module',
        'module-null-sink',
        `sink_name=${SINK_NAME}`,
        'sink_properties=device.description=CartofreqOut',
      ])
      if (/^\d+$/.test(id)) sinkModuleId = id
    }
    const sources = pactl(['list', 'short', 'sources'])
    if (!sources.includes(SOURCE_NAME)) {
      const id = pactl([
        'load-module',
        'module-remap-source',
        `master=${SINK_NAME}.monitor`,
        `source_name=${SOURCE_NAME}`,
        'source_properties=device.description=CartofreqIn',
      ])
      if (/^\d+$/.test(id)) sourceModuleId = id
    }
    audioState = {
      ok: true,
      sink: 'CartofreqOut',
      source: 'CartofreqIn',
      detail: 'Set this app’s output to CartofreqOut. In the DAW, choose CartofreqIn.',
    }
    console.log('[Audio] Virtual devices ready')
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error)
    audioState = {
      ok: false,
      sink: 'CartofreqOut',
      source: 'CartofreqIn',
      detail: `PulseAudio or PipeWire is required. ${detail}`,
    }
    console.error('[Audio] Virtual device setup failed:', error)
  }
}

function cleanupVirtualAudio(): void {
  if (sourceModuleId) {
    try {
      pactl(['unload-module', sourceModuleId])
    } catch {
      /* already unloaded */
    }
    sourceModuleId = null
  }
  if (sinkModuleId) {
    try {
      pactl(['unload-module', sinkModuleId])
    } catch {
      /* already unloaded */
    }
    sinkModuleId = null
  }
}

function createWindow(): void {
  win = new BrowserWindow({
    width: 1400,
    height: 900,
    title: 'Cartofreq',
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.mjs'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
    },
  })

  if (process.env.ELECTRON_RENDERER_URL) {
    void win.loadURL(process.env.ELECTRON_RENDERER_URL)
  } else {
    void win.loadFile(path.join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  initMidi()
  refreshMidiInputs()
  setupVirtualAudio()
  createWindow()
})

app.on('before-quit', () => {
  cleanupVirtualAudio()
})

app.on('window-all-closed', () => {
  try {
    midiOut?.closePort()
  } catch {
    /* already closed */
  }
  closeHardwareInputs()
  try {
    virtualIn?.closePort()
    virtualIn?.destroy()
  } catch {
    /* already closed */
  }
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('midi:send', (_event, bytes: number[]) => {
  if (!Array.isArray(bytes)) return
  send(bytes)
})

ipcMain.handle('midi:status', () => midiState)
ipcMain.handle('midi:inputs', () => midiInState)
ipcMain.handle('midi:refresh-inputs', () => refreshMidiInputs())
ipcMain.handle('audio:status', () => audioState)
