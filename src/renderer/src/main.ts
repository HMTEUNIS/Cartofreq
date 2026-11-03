import './style.css'
import type { GestureOutput } from './audio/gesture'
import type { Transport } from './audio/transport'
import { bindInteraction } from './interaction/raycast'
import { Store } from './model/store'
import type { RecorderHandle } from './recording'
import { createScene } from './scene'
import { createColumnEditor } from './ui/columnEditor'
import { createControls } from './ui/controls'
import { createNoteEditor } from './ui/noteEditor'

const root = document.querySelector<HTMLElement>('#app')
if (!root) throw new Error('Missing #app')

const IS_ELECTRON = window.cartofreq?.platform === 'electron'

const store = new Store()
if (IS_ELECTRON) {
  store.setSoundMode('sampler')
  store.setOutputRoute('audio')
}

window.__cartofreqScore = () => ({
  bpm: store.bpm,
  bendCurve: store.bendCurve,
  waveType: store.waveType,
  soundMode: store.soundMode,
  sampleBaseHz: store.sampleBaseHz,
  points: [...store.points.values()].map((point) => ({
    id: point.id,
    x: point.x,
    y: point.y,
    z: point.z,
    velocity: point.velocity,
    waveType: point.waveType,
  })),
  bends: store.bends.map((bend) => ({
    id: bend.id,
    fromPointId: bend.fromPointId,
    toPointId: bend.toPointId,
    curveType: bend.curveType,
  })),
})

async function boot(): Promise<void> {
  const view = createScene(root!)
  const editor = createNoteEditor(store)
  const columns = createColumnEditor(store, (index) => view.setColumn(index))
  let scheduler: Transport
  let audio: GestureOutput & { setVolume?(value: number): void }
  let recorder: RecorderHandle | null = null

  const { createAudioEngine } = await import('./audio/synth')
  const engine = await createAudioEngine({
    initialMode: store.soundMode,
    baseHz: () => store.sampleBaseHz,
    loop: () => store.sampleLoop,
  })

  if (IS_ELECTRON) {
    const { MidiScheduler } = await import('./audio/midi-scheduler')
    const { createMidiGesture } = await import('./audio/midi-gesture')
    const { Scheduler } = await import('./audio/scheduler')
    const { createOutputTransport, createRoutedGesture } = await import('./audio/output-transport')
    const audioScheduler = new Scheduler(engine, store)
    const midiScheduler = new MidiScheduler(store)
    scheduler = createOutputTransport({
      audio: audioScheduler,
      midi: midiScheduler,
      route: () => store.outputRoute,
    })
    audio = createRoutedGesture(engine, createMidiGesture(), () => store.outputRoute)
  } else {
    const { Scheduler } = await import('./audio/scheduler')
    const { createRecorder } = await import('./recording')
    scheduler = new Scheduler(engine, store)
    audio = engine
    recorder = createRecorder(engine)
  }

  const ui = createControls({
    store,
    audio,
    engine,
    scheduler,
    recorder,
    platform: IS_ELECTRON ? 'electron' : 'web',
  })
  store.subscribe(() => view.sync(store))
  view.sync(store)
  bindInteraction({ view, store, editor, columns, ui })
  view.start(() => {
    view.setPlayhead(scheduler.playhead())
    view.setHighlights(scheduler.highlights())
    ui.tick()
  })
}

void boot()
