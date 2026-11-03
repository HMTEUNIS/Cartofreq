import * as THREE from 'three'
import type { SequencerView } from '../scene'
import {
  BEND_WRAP_BREAK,
  describePitch,
  describeTime,
  formatHz,
  noteFromWorld,
  sampleBendWorld,
  worldFromNote,
} from '../model/space'
import type { Store } from '../model/store'
import type { NoteEditor } from '../ui/noteEditor'
import { HOVER_IDLE, type ControlHandles } from '../ui/controls'

interface BindOptions {
  view: SequencerView
  store: Store
  editor: NoteEditor
  ui: ControlHandles
}

/** Screen-space slack for a thin bend stroke. */
const BEND_PICK_PX = 12
/** Skip inserts this close to either end of the forward span. */
const BEND_ENDPOINT_T = 0.04

interface BendPick {
  bendId: string
  /** Closest drawn sample, 0 at the source and 1 at the target. */
  t: number
  sample: { x: number; y: number; z: number }
}

type Gesture =
  | {
      kind: 'move'
      pointerId: number
      id: string
      cameraPlane: THREE.Plane
      lockZ: number
    }
  | {
      kind: 'bend'
      pointerId: number
      fromId: string
      cameraPlane: THREE.Plane
      lockZ: number
      end: { x: number; y: number; z: number } | null
    }

export function bindInteraction(options: BindOptions): void {
  const { view, store, editor, ui } = options
  const canvas = view.canvas
  const raycaster = new THREE.Raycaster()
  const ndc = new THREE.Vector2()
  const hitPoint = new THREE.Vector3()

  let selected: string | null = null
  let gesture: Gesture | null = null
  let arm: { pointerId: number; sx: number; sy: number; world: THREE.Vector3 } | null = null
  let suppressMouse = false

  const select = (id: string | null) => {
    selected = id
    view.setSelected(id)
  }

  store.subscribe(() => {
    if (selected && !store.points.has(selected)) select(null)
  })

  const aim = (clientX: number, clientY: number) => {
    view.clientToNDC(clientX, clientY, ndc)
    raycaster.setFromCamera(ndc, view.camera)
  }

  const pickPoint = (): string | null => {
    const hits = raycaster.intersectObjects(view.pointsGroup.children, true)
    for (const hit of hits) {
      const id = view.pickPointId(hit.object)
      if (id) return id
    }
    return null
  }

  const pickPlane = (): THREE.Vector3 | null => {
    const hits = raycaster.intersectObject(view.plane, false)
    return hits[0]?.point.clone() ?? null
  }

  const bendProject = new THREE.Vector3()

  const projectBend = (
    sample: { x: number; y: number; z: number },
    width: number,
    height: number,
  ): { x: number; y: number } | null => {
    bendProject.set(sample.x, sample.y, sample.z)
    bendProject.applyMatrix4(view.camera.matrixWorldInverse)
    // The camera looks down -Z. A point behind it would flip through the projection.
    if (bendProject.z >= 0) return null
    bendProject.set(sample.x, sample.y, sample.z).project(view.camera)
    return {
      x: (bendProject.x * 0.5 + 0.5) * width,
      y: (-bendProject.y * 0.5 + 0.5) * height,
    }
  }

  const pickBend = (clientX: number, clientY: number): BendPick | null => {
    const rect = canvas.getBoundingClientRect()
    if (rect.width <= 0 || rect.height <= 0) return null
    const cursorX = clientX - rect.left
    const cursorY = clientY - rect.top
    view.camera.updateMatrixWorld()

    let bestDist = BEND_PICK_PX
    let best: BendPick | null = null

    for (const bend of store.bends) {
      const from = store.points.get(bend.fromPointId)
      const to = store.points.get(bend.toPointId)
      if (!from || !to) continue
      const samples = sampleBendWorld(from, to, bend.curveType)
      const last = samples.length - 1
      if (last <= 0) continue
      const screen = samples.map((sample) => projectBend(sample, rect.width, rect.height))
      for (let i = 0; i < last; i++) {
        if (samples[i + 1].x < samples[i].x - BEND_WRAP_BREAK) continue
        const start = screen[i]
        const end = screen[i + 1]
        if (!start || !end) continue
        const dist = distanceToSegment(cursorX, cursorY, start.x, start.y, end.x, end.y)
        if (dist > bestDist) continue
        const startDist = (cursorX - start.x) ** 2 + (cursorY - start.y) ** 2
        const endDist = (cursorX - end.x) ** 2 + (cursorY - end.y) ** 2
        const index = startDist <= endDist ? i : i + 1
        bestDist = dist
        best = { bendId: bend.id, t: index / last, sample: samples[index] }
      }
    }
    return best
  }

  const insertOnBend = (hit: BendPick) => {
    if (hit.t <= BEND_ENDPOINT_T || hit.t >= 1 - BEND_ENDPOINT_T) return
    const bend = store.bends.find((item) => item.id === hit.bendId)
    if (!bend) return
    const from = store.points.get(bend.fromPointId)
    const to = store.points.get(bend.toPointId)
    if (!from || !to) return
    const placed = noteFromWorld(hit.sample)
    const velocity = from.velocity + (to.velocity - from.velocity) * hit.t
    const fromId = bend.fromPointId
    const toId = bend.toPointId
    const curveType = bend.curveType
    let inserted = ''
    store.batch(() => {
      inserted = store.addPoint({
        x: placed.x,
        y: placed.y,
        z: placed.z,
        velocity,
        waveType: from.waveType,
      })
      store.removeBend(bend.id)
      store.addBend(fromId, inserted, curveType)
      store.addBend(inserted, toId, curveType)
    })
    select(inserted)
  }

  const cameraPlaneThrough = (origin: THREE.Vector3): THREE.Plane => {
    const normal = new THREE.Vector3()
    view.camera.getWorldDirection(normal)
    return new THREE.Plane().setFromNormalAndCoplanarPoint(normal, origin)
  }

  const intersectDrag = (plane: THREE.Plane): THREE.Vector3 | null => {
    return raycaster.ray.intersectPlane(plane, hitPoint) ? hitPoint : null
  }

  const planeFor = (gesturePlane: THREE.Plane, lockZ: number, shift: boolean): THREE.Plane => {
    if (!shift) return gesturePlane
    return new THREE.Plane(new THREE.Vector3(0, 0, 1), -lockZ)
  }

  const showNote = (point: { x: number; y: number; z: number }) => {
    ui.setHover(
      `${describePitch(point.y)} · ${formatHz(point.y)} · ${describeTime(point.x)} · intensity ${Math.round(point.z * 100)}`,
    )
  }

  const finishBend = (current: Extract<Gesture, { kind: 'bend' }>) => {
    view.setPreview(null, null, store.bendCurve)
    gesture = null
    const end = current.end
    const from = store.points.get(current.fromId)
    if (!end || !from) return
    const origin = worldFromNote(from)
    const dx = origin.x - end.x
    const dy = origin.y - end.y
    const dz = origin.z - end.z
    if (dx * dx + dy * dy + dz * dz < 0.35 * 0.35) return
    const note = noteFromWorld(end)
    const id = store.addPoint({ ...note, waveType: store.waveType })
    store.addBend(current.fromId, id, store.bendCurve)
    select(id)
  }

  canvas.addEventListener('pointerdown', (event) => {
    if (editor.interceptPointer()) return
    if (event.button !== 0 && event.button !== 2) return
    suppressMouse = false
    aim(event.clientX, event.clientY)
    const pointId = pickPoint()

    if (pointId && (event.button === 0 || event.button === 2)) {
      suppressMouse = true
      event.preventDefault()
      event.stopPropagation()
    }

    if (pointId && (event.button === 2 || (event.button === 0 && event.ctrlKey))) {
      const point = store.points.get(pointId)
      if (!point) return
      const world = worldFromNote(point)
      const origin = new THREE.Vector3(world.x, world.y, world.z)
      canvas.setPointerCapture(event.pointerId)
      view.controls.enabled = false
      gesture = {
        kind: 'bend',
        pointerId: event.pointerId,
        fromId: pointId,
        cameraPlane: cameraPlaneThrough(origin),
        lockZ: origin.z,
        end: null,
      }
      select(pointId)
      canvas.style.cursor = 'crosshair'
      return
    }

    if (pointId && event.button === 0 && event.detail < 2) {
      const point = store.points.get(pointId)
      if (!point) return
      const world = worldFromNote(point)
      const origin = new THREE.Vector3(world.x, world.y, world.z)
      canvas.setPointerCapture(event.pointerId)
      view.controls.enabled = false
      gesture = {
        kind: 'move',
        pointerId: event.pointerId,
        id: pointId,
        cameraPlane: cameraPlaneThrough(origin),
        lockZ: origin.z,
      }
      arm = null
      select(pointId)
      canvas.style.cursor = 'grabbing'
      return
    }

    if (!pointId && event.button === 0 && event.detail < 2) {
      // A press on the stroke must not arm a plane-add. That first click is
      // also the first half of a double-click, which inserts on the bend instead.
      if (pickBend(event.clientX, event.clientY)) {
        arm = null
      } else {
        const world = pickPlane()
        if (world) {
          arm = { pointerId: event.pointerId, sx: event.clientX, sy: event.clientY, world }
        }
      }
    }
  }, true)

  canvas.addEventListener('mousedown', (event) => {
    if (!suppressMouse) return
    event.preventDefault()
    event.stopPropagation()
  }, true)

  window.addEventListener('pointermove', (event) => {
    if (gesture && event.pointerId === gesture.pointerId) {
      aim(event.clientX, event.clientY)
      const plane = planeFor(gesture.cameraPlane, gesture.lockZ, event.shiftKey)
      const hit = intersectDrag(plane)
      if (!hit) return
      const note = noteFromWorld(hit)
      if (gesture.kind === 'move') {
        store.updatePoint(gesture.id, note)
        const updated = store.points.get(gesture.id)
        if (updated) showNote(updated)
      } else {
        const world = worldFromNote(note)
        gesture.end = world
        const from = store.points.get(gesture.fromId)
        if (from) view.setPreview(from, world, store.bendCurve)
        showNote(note)
      }
      return
    }

    if (arm && event.pointerId === arm.pointerId) {
      const dx = event.clientX - arm.sx
      const dy = event.clientY - arm.sy
      if (dx * dx + dy * dy > 36) arm = null
    }

    if (event.buttons !== 0 || gesture) return
    if (event.target !== canvas) return
    aim(event.clientX, event.clientY)
    const pointId = pickPoint()
    view.setHover(pointId)
    canvas.style.cursor = pointId ? 'grab' : 'crosshair'
    if (pointId) {
      const point = store.points.get(pointId)
      if (point) showNote(point)
      return
    }
    const world = pickPlane()
    if (!world) {
      ui.setHover(HOVER_IDLE)
      return
    }
    showNote(noteFromWorld(world))
  })

  const endPointer = (event: PointerEvent) => {
    if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId)
    if (gesture && gesture.pointerId === event.pointerId) {
      const current = gesture
      gesture = null
      view.controls.enabled = true
      canvas.style.cursor = 'crosshair'
      if (current.kind === 'bend') finishBend(current)
      return
    }
    if (arm && arm.pointerId === event.pointerId) {
      const dx = event.clientX - arm.sx
      const dy = event.clientY - arm.sy
      const world = arm.world
      arm = null
      if (dx * dx + dy * dy <= 36) {
        const id = store.addPoint({ ...noteFromWorld(world), waveType: store.waveType })
        select(id)
      }
    }
    view.controls.enabled = true
  }

  window.addEventListener('pointerup', endPointer)
  window.addEventListener('pointercancel', (event) => {
    if (gesture?.kind === 'bend') view.setPreview(null, null, store.bendCurve)
    gesture = null
    arm = null
    if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId)
    view.controls.enabled = true
  })

  canvas.addEventListener('dblclick', (event) => {
    aim(event.clientX, event.clientY)
    const pointId = pickPoint()
    if (pointId) {
      select(pointId)
      editor.open(pointId, event.clientX, event.clientY)
      return
    }
    const bend = pickBend(event.clientX, event.clientY)
    if (!bend) return
    insertOnBend(bend)
  })

  canvas.addEventListener('contextmenu', (event) => event.preventDefault())

  window.addEventListener('keydown', (event) => {
    if (document.body.hasAttribute('data-modal-open')) return
    if (isTypingTarget(event.target)) return
    if (event.key !== 'Delete' && event.key !== 'Backspace') return
    if (!selected) return
    event.preventDefault()
    const id = selected
    select(null)
    store.removePoint(id)
  })
}

function distanceToSegment(
  px: number,
  py: number,
  ax: number,
  ay: number,
  bx: number,
  by: number,
): number {
  const abx = bx - ax
  const aby = by - ay
  const lengthSq = abx * abx + aby * aby
  const u = lengthSq > 0 ? Math.min(1, Math.max(0, ((px - ax) * abx + (py - ay) * aby) / lengthSq)) : 0
  const dx = px - (ax + abx * u)
  const dy = py - (ay + aby * u)
  return Math.hypot(dx, dy)
}

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  const tag = target.tagName
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target.isContentEditable
}
