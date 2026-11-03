import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { Line2 } from 'three/addons/lines/Line2.js'
import { LineGeometry } from 'three/addons/lines/LineGeometry.js'
import { LineMaterial } from 'three/addons/lines/LineMaterial.js'
import { COLUMN_COUNT, columnCenterNorm } from './model/column'
import type { Store } from './model/store'
import {
  BARS,
  BEND_WRAP_BREAK,
  noteFromWorld,
  pitchMarks,
  PLANE_Z,
  sampleBendWorld,
  WORLD_X,
  WORLD_Y,
  WORLD_Z,
  worldFromNote,
} from './model/space'
import { DEFAULT_VELOCITY, type CurveType, type NotePoint } from './model/types'

const WAVE_COLOR: Record<OscillatorType, THREE.Color> = {
  sine: new THREE.Color('#ffe14a'),
  square: new THREE.Color('#ff8c1a'),
  sawtooth: new THREE.Color('#ff3b30'),
  triangle: new THREE.Color('#3ddc6e'),
  custom: new THREE.Color('#ffe14a'),
}

/**
 * In-line pitch names turn on only inside this camera-to-target distance.
 * The default shot is about 33.8 units out (minDistance 4, maxDistance 72).
 * Orbit zoom is exponential, so halfway down to the closest dolly is
 * sqrt(33.8 * 4) ≈ 11.6. 8 sits further in — roughly two-thirds of that
 * scroll — where a 42° view is about two octaves tall and the left endcaps
 * have left the frame.
 */
const PITCH_LINE_LABEL_DISTANCE = 8

function paintByWave(material: THREE.MeshStandardMaterial, wave: OscillatorType): void {
  const color = WAVE_COLOR[wave] ?? WAVE_COLOR.sine
  material.color.copy(color)
  material.emissive.copy(color)
}

/** Visual size before highlight and hover. Velocity 0 is small; velocity 1 is large. */
const POINT_SCALE_MIN = 0.55
const POINT_SCALE_MAX = 1.35

function pointScaleForVelocity(velocity: number): number {
  const v = Number.isFinite(velocity) ? Math.min(1, Math.max(0, velocity)) : DEFAULT_VELOCITY
  return POINT_SCALE_MIN + (POINT_SCALE_MAX - POINT_SCALE_MIN) * v
}

const VIS_GEO = new THREE.SphereGeometry(0.18, 28, 18)
const PICK_GEO = new THREE.SphereGeometry(0.46, 10, 8)
const RING_GEO = new THREE.SphereGeometry(0.28, 18, 12)
const PICK_MAT = new THREE.MeshBasicMaterial({
  transparent: true,
  opacity: 0,
  depthWrite: false,
})
const RING_MAT = new THREE.MeshBasicMaterial({
  color: 0xfff4e2,
  wireframe: true,
  transparent: true,
  opacity: 0.9,
})

export interface SequencerView {
  readonly canvas: HTMLCanvasElement
  readonly camera: THREE.PerspectiveCamera
  readonly controls: OrbitControls
  readonly pointsGroup: THREE.Group
  readonly columnsGroup: THREE.Group
  readonly plane: THREE.Mesh
  sync(store: Store): void
  setColumn(index: number | null): void
  pickColumn(object: THREE.Object3D): number | null
  setPlayhead(norm: number): void
  setHighlights(levels: Map<string, number>): void
  setSelected(id: string | null): void
  setHover(id: string | null): void
  setPreview(from: NotePoint | null, toWorld: { x: number; y: number; z: number } | null, curve: CurveType): void
  pickPointId(object: THREE.Object3D): string | null
  clientToNDC(clientX: number, clientY: number, target: THREE.Vector2): void
  start(onFrame: () => void): void
}

export function createScene(root: HTMLElement): SequencerView {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x10141a)

  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 250)
  camera.position.set(7.2, 16.8, 34)

  let renderer: THREE.WebGLRenderer
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true })
  } catch (error) {
    root.innerHTML = '<p class="fatal">WebGL is not available in this browser.</p>'
    throw error
  }
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  root.replaceChildren(renderer.domElement)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.target.set(9.4, 6.6, 1.8)
  controls.enableDamping = true
  controls.dampingFactor = 0.08
  controls.rotateSpeed = 0.75
  controls.zoomSpeed = 0.85
  controls.screenSpacePanning = true
  controls.minDistance = 4
  controls.maxDistance = 72
  controls.minPolarAngle = 0.12
  controls.maxPolarAngle = Math.PI - 0.05
  controls.mouseButtons = {
    LEFT: THREE.MOUSE.ROTATE,
    MIDDLE: THREE.MOUSE.PAN,
    RIGHT: THREE.MOUSE.ROTATE,
  }
  controls.update()

  scene.add(new THREE.HemisphereLight(0xf7f1e6, 0x24303a, 0.9))
  const key = new THREE.DirectionalLight(0xfff4e4, 1.4)
  key.position.set(-8, 18, 12)
  scene.add(key)
  const fill = new THREE.DirectionalLight(0x8fb4ff, 0.4)
  fill.position.set(14, 6, -6)
  scene.add(fill)

  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(WORLD_X, WORLD_Y),
    new THREE.MeshBasicMaterial({
      color: 0x1a2832,
      transparent: true,
      opacity: 0.72,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  )
  plane.position.set(WORLD_X / 2, WORLD_Y / 2, PLANE_Z)
  plane.name = 'interaction-plane'
  scene.add(plane)

  const { guide, pitchLineLabels, barMaterials } = buildGuide()
  scene.add(guide)

  const pointsGroup = new THREE.Group()
  const bendsGroup = new THREE.Group()
  const previewGroup = new THREE.Group()
  const columnsGroup = new THREE.Group()
  columnsGroup.name = 'columns'
  scene.add(bendsGroup, pointsGroup, previewGroup, columnsGroup)

  const columnGeo = new THREE.SphereGeometry(0.26, 20, 14)
  const columnMeshes: THREE.Mesh[] = []
  for (let index = 0; index < COLUMN_COUNT; index++) {
    const material = new THREE.MeshStandardMaterial({
      color: 0x8d8474,
      emissive: 0x2a2418,
      roughness: 0.45,
      metalness: 0.05,
    })
    const mesh = new THREE.Mesh(columnGeo, material)
    mesh.position.set(columnCenterNorm(index) * WORLD_X, WORLD_Y + 0.48, PLANE_Z)
    mesh.userData.columnIndex = index
    columnsGroup.add(mesh)
    columnMeshes.push(mesh)
  }

  const columnHighlight = new THREE.Mesh(
    new THREE.PlaneGeometry(WORLD_X / COLUMN_COUNT, WORLD_Y),
    new THREE.MeshBasicMaterial({
      color: 0xe3a45a,
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
      side: THREE.DoubleSide,
    }),
  )
  columnHighlight.visible = false
  columnHighlight.raycast = () => {}
  columnHighlight.renderOrder = 1
  scene.add(columnHighlight)

  const playhead = buildPlayhead()
  scene.add(playhead)

  const ghost = new THREE.Mesh(
    VIS_GEO,
    new THREE.MeshBasicMaterial({ color: 0xd5e6ff, transparent: true, opacity: 0.85 }),
  )
  ghost.visible = false
  ghost.raycast = () => {}
  scene.add(ghost)

  const pointMeshes = new Map<string, THREE.Mesh>()
  const lineMaterials: LineMaterial[] = [...barMaterials]
  let selectedId: string | null = null
  let hoverId: string | null = null
  let levels = new Map<string, number>()
  let viewWidth = window.innerWidth
  let viewHeight = window.innerHeight

  function makeLine(samples: Array<{ x: number; y: number; z: number }>, color: number, width: number): Line2 {
    const geometry = new LineGeometry()
    const flat: number[] = []
    for (const sample of samples) flat.push(sample.x, sample.y, sample.z)
    geometry.setPositions(flat)
    const material = new LineMaterial({
      color,
      linewidth: width,
      transparent: true,
      opacity: 0.95,
      worldUnits: false,
    })
    material.resolution.set(viewWidth, viewHeight)
    lineMaterials.push(material)
    const line = new Line2(geometry, material)
    line.computeLineDistances()
    line.frustumCulled = false
    // Bend hits are a screen-space test. Line2's analytic raycast misses a thin stroke.
    line.raycast = () => {}
    return line
  }

  function disposeLine(object: THREE.Object3D): void {
    if (!(object instanceof Line2)) return
    object.geometry.dispose()
    const material = object.material
    const index = lineMaterials.indexOf(material)
    if (index >= 0) lineMaterials.splice(index, 1)
    material.dispose()
  }

  function addCurve(
    group: THREE.Group,
    samples: Array<{ x: number; y: number; z: number }>,
    color: number,
    width: number,
    bendId?: string,
  ): void {
    let run: Array<{ x: number; y: number; z: number }> = []
    const flush = () => {
      if (run.length >= 2) {
        const line = makeLine(run, color, width)
        if (bendId) line.userData.bendId = bendId
        group.add(line)
      }
      run = []
    }
    for (const sample of samples) {
      const previous = run[run.length - 1]
      if (previous && sample.x < previous.x - BEND_WRAP_BREAK) flush()
      run.push(sample)
    }
    flush()
  }

  function clearGroup(group: THREE.Group): void {
    for (const child of [...group.children]) {
      group.remove(child)
      disposeLine(child)
    }
  }

  function applyVisuals(): void {
    for (const [id, mesh] of pointMeshes) {
      const hot = levels.get(id) ?? 0
      const selected = id === selectedId
      const hover = id === hoverId
      const base = typeof mesh.userData.velScale === 'number' ? mesh.userData.velScale : 1
      const pulse = 1 + hot * 0.55 + (hover && !selected ? 0.1 : 0)
      mesh.scale.setScalar(base * pulse)
      // The picker is a child, so a soft point would shrink the hit target.
      // Counter-scale only the picker. World pick radius stays ~0.46 at rest
      // (today's size, including at velocity 0.75). The selection ring stays
      // parented so it keeps hugging the visible sphere.
      const picker = mesh.getObjectByName('picker')
      if (picker) picker.scale.setScalar(base > 0 ? 1 / base : 1)
      const material = mesh.material as THREE.MeshStandardMaterial
      material.emissiveIntensity = 0.16 + hot * 1.2 + (selected ? 0.45 : 0) + (hover ? 0.2 : 0)
      const ring = mesh.getObjectByName('selection')
      if (ring) ring.visible = selected || hot > 0.35
    }
  }

  function resize(): void {
    viewWidth = window.innerWidth
    viewHeight = window.innerHeight
    camera.aspect = viewWidth / Math.max(viewHeight, 1)
    camera.updateProjectionMatrix()
    renderer.setSize(viewWidth, viewHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    for (const material of lineMaterials) material.resolution.set(viewWidth, viewHeight)
  }

  resize()
  window.addEventListener('resize', resize)

  return {
    canvas: renderer.domElement,
    camera,
    controls,
    pointsGroup,
    columnsGroup,
    plane,

    setColumn(index) {
      for (let i = 0; i < columnMeshes.length; i++) {
        const mesh = columnMeshes[i]
        if (!mesh) continue
        const on = i === index
        const material = mesh.material as THREE.MeshStandardMaterial
        material.color.setHex(on ? 0xf0d3a4 : 0x8d8474)
        material.emissive.setHex(on ? 0x8a6230 : 0x2a2418)
        mesh.scale.setScalar(on ? 1.45 : 1)
      }
      if (index == null) {
        columnHighlight.visible = false
        return
      }
      columnHighlight.visible = true
      columnHighlight.position.set(columnCenterNorm(index) * WORLD_X, WORLD_Y / 2, PLANE_Z + 0.06)
    },

    pickColumn(object) {
      let current: THREE.Object3D | null = object
      while (current) {
        const index = current.userData.columnIndex
        if (typeof index === 'number') return index
        current = current.parent
      }
      return null
    },

    sync(store) {
      const seen = new Set<string>()
      for (const point of store.points.values()) {
        seen.add(point.id)
        let mesh = pointMeshes.get(point.id)
        const sampler = store.soundMode === 'sampler'
        if (!mesh) {
          mesh = createPointMesh(point, sampler)
          pointMeshes.set(point.id, mesh)
          pointsGroup.add(mesh)
        }
        const world = worldFromNote(point)
        mesh.position.set(world.x, world.y, world.z)
        mesh.userData.velScale = pointScaleForVelocity(point.velocity)
        paintByWave(mesh.material as THREE.MeshStandardMaterial, sampler ? 'sine' : point.waveType)
      }
      for (const [id, mesh] of pointMeshes) {
        if (seen.has(id)) continue
        pointsGroup.remove(mesh)
        ;(mesh.material as THREE.Material).dispose()
        pointMeshes.delete(id)
      }

      clearGroup(bendsGroup)
      for (const bend of store.bends) {
        const from = store.points.get(bend.fromPointId)
        const to = store.points.get(bend.toPointId)
        if (!from || !to) continue
        const color = bend.curveType === 'exponential' ? 0xf0a35e : 0x6cb7c9
        addCurve(bendsGroup, sampleBendWorld(from, to, bend.curveType), color, 3, bend.id)
      }
      applyVisuals()
    },

    setPlayhead(norm) {
      playhead.position.x = Math.min(1, Math.max(0, norm)) * WORLD_X
    },

    setHighlights(next) {
      levels = next
      applyVisuals()
    },

    setSelected(id) {
      selectedId = id
      applyVisuals()
    },

    setHover(id) {
      hoverId = id
      applyVisuals()
    },

    setPreview(from, toWorld, curve) {
      clearGroup(previewGroup)
      if (!from || !toWorld) {
        ghost.visible = false
        return
      }
      const toNote = noteFromWorld(toWorld)
      addCurve(previewGroup, sampleBendWorld(from, toNote, curve), 0xd6e4ff, 2)
      ghost.position.set(toWorld.x, toWorld.y, toWorld.z)
      ghost.visible = true
    },

    pickPointId(object) {
      let current: THREE.Object3D | null = object
      while (current) {
        const id = current.userData.pointId
        if (typeof id === 'string') return id
        current = current.parent
      }
      return null
    },

    clientToNDC(clientX, clientY, target) {
      const rect = renderer.domElement.getBoundingClientRect()
      target.x = ((clientX - rect.left) / rect.width) * 2 - 1
      target.y = -((clientY - rect.top) / rect.height) * 2 + 1
    },

    start(onFrame) {
      const loop = () => {
        requestAnimationFrame(loop)
        controls.update()
        const distance = camera.position.distanceTo(controls.target)
        pitchLineLabels.visible = distance < PITCH_LINE_LABEL_DISTANCE
        onFrame()
        renderer.render(scene, camera)
      }
      requestAnimationFrame(loop)
    },
  }
}

function createPointMesh(point: NotePoint, uniform: boolean): THREE.Mesh {
  const material = new THREE.MeshStandardMaterial({
    emissiveIntensity: 0.16,
    roughness: 0.38,
    metalness: 0.08,
  })
  paintByWave(material, uniform ? 'sine' : point.waveType)
  const mesh = new THREE.Mesh(VIS_GEO, material)
  mesh.userData.pointId = point.id
  mesh.userData.velScale = pointScaleForVelocity(point.velocity)
  const picker = new THREE.Mesh(PICK_GEO, PICK_MAT)
  picker.name = 'picker'
  picker.userData.pointId = point.id
  mesh.add(picker)
  const ring = new THREE.Mesh(RING_GEO, RING_MAT)
  ring.name = 'selection'
  ring.visible = false
  ring.raycast = () => {}
  mesh.add(ring)
  return mesh
}

function buildPlayhead(): THREE.Group {
  const group = new THREE.Group()
  const sheet = new THREE.Mesh(
    new THREE.PlaneGeometry(WORLD_Z, WORLD_Y),
    new THREE.MeshBasicMaterial({
      color: 0xffe2b8,
      transparent: true,
      opacity: 0.2,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  )
  sheet.rotation.y = Math.PI / 2
  sheet.position.set(0, WORLD_Y / 2, WORLD_Z / 2)
  sheet.raycast = () => {}
  const edge = new THREE.Mesh(
    new THREE.BoxGeometry(0.032, WORLD_Y, 0.032),
    new THREE.MeshBasicMaterial({ color: 0xfff6e4 }),
  )
  edge.position.set(0, WORLD_Y / 2, WORLD_Z)
  edge.raycast = () => {}
  const foot = new THREE.Mesh(
    new THREE.BoxGeometry(0.26, 0.016, 0.016),
    new THREE.MeshBasicMaterial({ color: 0xfff6e4 }),
  )
  foot.position.set(0, 0, WORLD_Z)
  foot.raycast = () => {}
  group.add(sheet, edge, foot)
  return group
}

function buildGuide(): { guide: THREE.Group; pitchLineLabels: THREE.Group; barMaterials: LineMaterial[] } {
  const group = new THREE.Group()
  const positions: number[] = []
  const colors: number[] = []
  const barMaterials: LineMaterial[] = []

  const push = (
    x1: number, y1: number, z1: number,
    x2: number, y2: number, z2: number,
    hex: number,
  ) => {
    const color = new THREE.Color(hex)
    positions.push(x1, y1, z1, x2, y2, z2)
    colors.push(color.r, color.g, color.b, color.r, color.g, color.b)
  }

  const z = PLANE_Z + 0.03
  for (let beat = 0; beat <= 16; beat++) {
    const x = (beat / 16) * WORLD_X
    const bar = beat % 4 === 0
    if (bar) {
      const geometry = new LineGeometry()
      geometry.setPositions([x, 0, z, x, WORLD_Y, z])
      const material = new LineMaterial({
        color: 0xd4b48a,
        linewidth: 2,
        transparent: true,
        opacity: 0.95,
        worldUnits: false,
      })
      material.resolution.set(window.innerWidth, window.innerHeight)
      barMaterials.push(material)
      const line = new Line2(geometry, material)
      line.computeLineDistances()
      line.frustumCulled = false
      line.raycast = () => {}
      group.add(line)
    } else {
      push(x, 0, z, x, WORLD_Y, z, 0x24323a)
    }
    const tick = bar ? 0.26 : 0.12
    push(x, -tick, z, x, 0, z, bar ? 0xe0b07a : 0x4a5c68)
  }

  for (const mark of pitchMarks()) {
    if (!mark.octaveAnchor) continue
    for (let bar = 0; bar <= BARS; bar++) {
      const x = (bar / BARS) * WORLD_X
      push(x - 0.14, mark.y, z + 0.02, x + 0.14, mark.y, z + 0.02, 0xf0d3a4)
    }
  }

  for (const mark of pitchMarks()) {
    if (mark.natural) {
      const hex = mark.octaveAnchor ? 0x6d8f84 : mark.label.startsWith('C') ? 0x4d6a78 : 0x2c3c48
      push(0, mark.y, z, WORLD_X, mark.y, z, hex)
      push(-0.28, mark.y, z, 0, mark.y, z, mark.octaveAnchor ? 0xf0d3a4 : 0x8ea0ae)
    } else {
      push(-0.12, mark.y, z, 0, mark.y, z, 0x3d4e5a)
    }
  }

  push(0, 0, z, WORLD_X, 0, z, 0xe0b07a)
  push(0, 0, z, 0, WORLD_Y, z, 0x8fd0c6)
  push(0, 0, 0, 0, 0, WORLD_Z, 0xd27b86)
  for (const zNorm of [0, 0.5, 1]) {
    push(0, 0, zNorm * WORLD_Z, 0.4, 0, zNorm * WORLD_Z, 0xd27b86)
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
  const lines = new THREE.LineSegments(
    geometry,
    new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.95 }),
  )
  lines.raycast = () => {}
  group.add(lines)

  const box = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.BoxGeometry(WORLD_X, WORLD_Y, WORLD_Z)),
    new THREE.LineBasicMaterial({ color: 0x415868, transparent: true, opacity: 0.85 }),
  )
  box.position.set(WORLD_X / 2, WORLD_Y / 2, WORLD_Z / 2)
  box.raycast = () => {}
  group.add(box)

  for (const mark of pitchMarks()) {
    if (!mark.natural) continue
    const sprite = makeSprite(mark.label, mark.octaveAnchor ? '#f0d3a4' : '#a9b6c3')
    sprite.position.set(-1.55, mark.y, z)
    sprite.scale.set(mark.octaveAnchor ? 1.05 : 0.82, mark.octaveAnchor ? 0.36 : 0.28, 1)
    group.add(sprite)
  }

  const pitchLineLabels = buildPitchLineLabels(z)
  group.add(pitchLineLabels)

  for (let bar = 1; bar <= BARS; bar++) {
    const sprite = makeSprite(String(bar), '#d7c4a4')
    sprite.position.set(((bar - 0.5) / BARS) * WORLD_X, -0.7, z)
    sprite.scale.set(0.7, 0.34, 1)
    group.add(sprite)
  }

  const time = makeSprite('time', '#e0b07a')
  time.position.set(WORLD_X + 1.1, -0.15, z)
  time.scale.set(1.3, 0.42, 1)
  const pitch = makeSprite('pitch', '#8fd0c6')
  pitch.position.set(-1.15, WORLD_Y + 0.55, z)
  pitch.scale.set(1.35, 0.42, 1)
  const loud = makeSprite('loud', '#d27b86')
  loud.position.set(1.15, -0.55, WORLD_Z)
  loud.scale.set(1.15, 0.4, 1)
  const soft = makeSprite('soft', '#d27b86')
  soft.position.set(1.15, -0.55, 0.05)
  soft.scale.set(1.15, 0.4, 1)
  group.add(time, pitch, loud, soft)
  return { guide: group, pitchLineLabels, barMaterials }
}

/** One name per bar, between the beat lines, just above each natural pitch line. */
const PITCH_LINE_LABEL_X = [2.5, 6.5, 10.5, 14.5]

function buildPitchLineLabels(z: number): THREE.Group {
  const labels = new THREE.Group()
  labels.name = 'pitch-line-labels'
  labels.visible = false
  labels.raycast = () => {}
  for (const mark of pitchMarks()) {
    if (!mark.natural) continue
    const anchor = mark.octaveAnchor
    const color = anchor ? '#f0d3a4' : '#a9b6c3'
    const width = anchor ? 0.78 : 0.6
    const height = anchor ? 0.26 : 0.2
    for (const x of PITCH_LINE_LABEL_X) {
      const sprite = makeSprite(mark.label, color)
      // Glyphs are centered in the sprite, so a small lift clears the grid line.
      sprite.position.set(x, mark.y + height * 0.42, z + 0.06)
      sprite.scale.set(width, height, 1)
      labels.add(sprite)
    }
  }
  return labels
}

const spriteMaterials = new Map<string, THREE.SpriteMaterial>()

function makeSprite(text: string, color: string): THREE.Sprite {
  const key = `${color}\0${text}`
  let material = spriteMaterials.get(key)
  if (!material) {
    const canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 128
    const context = canvas.getContext('2d')
    if (!context) throw new Error('2D canvas is unavailable')
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.font = '600 64px ui-monospace, Menlo, Consolas, monospace'
    context.fillStyle = color
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillText(text, canvas.width / 2, canvas.height / 2)
    const texture = new THREE.CanvasTexture(canvas)
    texture.colorSpace = THREE.SRGBColorSpace
    material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false })
    spriteMaterials.set(key, material)
  }
  const sprite = new THREE.Sprite(material)
  sprite.renderOrder = 6
  sprite.raycast = () => {}
  return sprite
}
