import './style.css'
import { Scheduler } from './audio/scheduler'
import { createAudioEngine } from './audio/synth'
import { bindInteraction } from './interaction/raycast'
import { Store } from './model/store'
import { createRecorder } from './recording'
import { createScene } from './scene'
import { createControls } from './ui/controls'
import { createNoteEditor } from './ui/noteEditor'

const root = document.querySelector<HTMLElement>('#app')
if (!root) throw new Error('Missing #app')

const store = new Store()

window.__cartofreqScore = () => ({
  bpm: store.bpm,
  bendCurve: store.bendCurve,
  waveType: store.waveType,
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

const audio = createAudioEngine()
const scheduler = new Scheduler(audio, store)
const recorder = createRecorder(audio)
const view = createScene(root)
const editor = createNoteEditor(store)
const ui = createControls({ store, audio, scheduler, recorder })

store.subscribe(() => view.sync(store))
view.sync(store)

bindInteraction({ view, store, editor, ui })

view.start(() => {
  view.setPlayhead(scheduler.playhead())
  view.setHighlights(scheduler.highlights())
  ui.tick()
})
