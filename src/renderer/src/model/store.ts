import { clipColumn, columnOf, columnStart, type ColumnClip, type PasteMode } from './column'
import { FREQ_MAX, FREQ_MIN, PLANE_Z_NORM, clamp, BPM_MIN, BPM_MAX, quantizeToQuarterBeat } from './space'
import {
  DEFAULT_SAMPLE_BASE_HZ,
  DEFAULT_VELOCITY,
  SAMPLE_BASE_MAX,
  SAMPLE_BASE_MIN,
  type BendConnection,
  type CurveType,
  type NotePoint,
  type OutputRoute,
  type SoundMode,
} from './types'

type PointInput = Omit<NotePoint, 'id' | 'velocity'> & { velocity?: number }
type PointDraft = PointInput & { id: string }

export class Store {
  readonly points = new Map<string, NotePoint>()
  bends: BendConnection[] = []
  bpm = 96
  bendCurve: CurveType = 'exponential'
  /** Wave used by notes placed from here on. Existing points keep their own. */
  waveType: OscillatorType = 'sine'
  /** Oscillator on the web. Sampler pitch-shifts one loaded clip. */
  soundMode: SoundMode = 'oscillator'
  /** Hz the loaded clip plays at a SoundTouch pitch of 1. */
  sampleBaseHz = DEFAULT_SAMPLE_BASE_HZ
  sampleName = ''
  sampleSeconds = 0
  /** When true, the clip loops so a bend can outlast it. */
  sampleLoop = false
  /** Desktop only. Audio plays the sampler; MIDI sends MPE; both do each. */
  outputRoute: OutputRoute = 'audio'

  private listeners = new Set<() => void>()
  /** While greater than 0, {@link emit} waits for the outermost {@link batch}. */
  private hold = 0
  private held = false

  constructor() {
    this.loadDemo()
  }

  subscribe(listener: () => void): () => void {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  private emit(): void {
    if (this.hold > 0) {
      this.held = true
      return
    }
    this.held = false
    for (const listener of [...this.listeners]) listener()
  }

  /** Apply several edits, then notify listeners once. */
  batch(run: () => void): void {
    this.hold += 1
    try {
      run()
    } finally {
      this.hold -= 1
      if (this.hold === 0 && this.held) this.emit()
    }
  }

  addPoint(input: PointInput): string {
    const id = crypto.randomUUID()
    this.points.set(id, this.sanitize({ ...input, id }))
    this.emit()
    return id
  }

  updatePoint(id: string, patch: Partial<Omit<NotePoint, 'id'>>): void {
    const current = this.points.get(id)
    if (!current) return
    this.points.set(id, this.sanitize({ ...current, ...patch, id }))
    this.emit()
  }

  removePoint(id: string): void {
    if (!this.points.delete(id)) return
    this.bends = this.bends.filter((bend) => bend.fromPointId !== id && bend.toPointId !== id)
    this.emit()
  }

  addBend(fromPointId: string, toPointId: string, curveType: CurveType = this.bendCurve): string | null {
    if (fromPointId === toPointId) return null
    if (!this.points.has(fromPointId) || !this.points.has(toPointId)) return null
    const id = crypto.randomUUID()
    this.bends.push({ id, fromPointId, toPointId, curveType })
    this.emit()
    return id
  }

  removeBend(id: string): void {
    const next = this.bends.filter((bend) => bend.id !== id)
    if (next.length === this.bends.length) return
    this.bends = next
    this.emit()
  }

  updateBend(id: string, patch: Partial<Pick<BendConnection, 'curveType'>>): void {
    const bend = this.bends.find((item) => item.id === id)
    if (!bend) return
    if (patch.curveType) bend.curveType = patch.curveType
    this.emit()
  }

  outgoing(pointId: string): BendConnection[] {
    return this.bends.filter((bend) => bend.fromPointId === pointId)
  }

  setBpm(bpm: number): void {
    const next = clamp(Math.round(bpm), BPM_MIN, BPM_MAX)
    if (next === this.bpm) return
    this.bpm = next
    this.emit()
  }

  setBendCurve(curve: CurveType): void {
    if (curve === this.bendCurve) return
    this.bendCurve = curve
    this.emit()
  }

  setWaveType(wave: OscillatorType): void {
    const next = wave === 'custom' ? 'sine' : wave
    if (next === this.waveType) return
    this.waveType = next
    this.emit()
  }

  setSoundMode(mode: SoundMode): void {
    if (mode === this.soundMode) return
    this.soundMode = mode
    this.emit()
  }

  setSampleBaseHz(hz: number): void {
    if (!Number.isFinite(hz)) return
    const next = clamp(hz, SAMPLE_BASE_MIN, SAMPLE_BASE_MAX)
    if (next === this.sampleBaseHz) return
    this.sampleBaseHz = next
    this.emit()
  }

  setSample(info: { name: string; seconds: number; loop: boolean }): void {
    this.sampleName = info.name
    this.sampleSeconds = info.seconds
    this.sampleLoop = info.loop
    this.emit()
  }

  setSampleLoop(loop: boolean): void {
    if (loop === this.sampleLoop) return
    this.sampleLoop = loop
    this.emit()
  }

  setOutputRoute(route: OutputRoute): void {
    if (route === this.outputRoute) return
    this.outputRoute = route
    this.emit()
  }

  /** Notes whose time falls in the bar, including arrivals from other columns. */
  pointsInColumn(index: number): NotePoint[] {
    return [...this.points.values()].filter((point) => columnOf(point.x) === index)
  }

  /**
   * Snapshot of one bar. Bends that leave the bar become a single start point.
   * The end of a bend that began in another bar is left out.
   */
  copyColumn(index: number): ColumnClip {
    return clipColumn(this.points.values(), this.bends, index)
  }

  /** Remove every note in the bar. Bends that touched them go with the notes. */
  clearColumn(index: number): void {
    const ids = this.pointsInColumn(index).map((point) => point.id)
    this.batch(() => {
      for (const id of ids) this.removePoint(id)
    })
  }

  /**
   * Drop the copied bar onto `index`.
   * Overwrite clears that bar first. Addition leaves what is already there.
   */
  pasteColumn(index: number, clip: ColumnClip, mode: PasteMode): void {
    const start = columnStart(index)
    this.batch(() => {
      if (mode === 'overwrite') {
        for (const id of this.pointsInColumn(index).map((point) => point.id)) this.removePoint(id)
      }
      const ids = clip.points.map((point) => this.addPoint({
        x: start + point.dx,
        y: point.y,
        z: point.z,
        velocity: point.velocity,
        waveType: point.waveType,
      }))
      for (const bend of clip.bends) {
        const from = ids[bend.from]
        const to = ids[bend.to]
        if (from && to) this.addBend(from, to, bend.curveType)
      }
    })
  }

  /** Move every note onto the nearest quarter-beat. Pitch, intensity, and bends stay. */
  quantize(): void {
    this.batch(() => {
      for (const point of [...this.points.values()]) {
        const x = quantizeToQuarterBeat(point.x)
        if (x === point.x) continue
        this.updatePoint(point.id, { x })
      }
    })
  }

  clear(): void {
    this.points.clear()
    this.bends = []
    this.emit()
  }

  loadDemo(): void {
    this.points.clear()
    this.bends = []
    this.bpm = 197
    this.bendCurve = 'exponential'

    // Captured from a live session: 35 notes, 15 exponential bends.
    const notes: Array<[number, number, number, number, OscillatorType]> = [
      [0.06014115486807507, 109.69198380689319, 0.7540878685220249, 0.75, 'triangle'],
      [0.13224524432839976, 108.39144993683101, 1, 0.75, 'sine'],
      [0.21197882141820126, 114.72398977386572, 0.8267865230969619, 0.75, 'triangle'],
      [0.2763277051782829, 145.50185334108136, 0.709381513214904, 0.1, 'square'],
      [0.3198368767606863, 97.21849972979521, 0.784443018951373, 0.75, 'triangle'],
      [0.3830907735700439, 125.42991614394718, 0.7356439912215436, 0.75, 'square'],
      [0.42717057106035666, 141.79500995791173, 0.8031658513172595, 0.75, 'sine'],
      [0.5160097506087972, 145.26431335915163, 0.7825807536516145, 0.75, 'sine'],
      [0.6495999999999981, 195.99771799087463, 0.72, 0.75, 'square'],
      [0.6861975469335702, 167.36530010786484, 0.704867509105118, 0.75, 'sine'],
      [0.7052798472559898, 153.02540231581753, 0.6907746443992082, 0.75, 'sine'],
      [0.7765812257402378, 126.47501428436871, 0.6642054346671792, 0.75, 'triangle'],
      [0.5564514443281208, 169.57610528983838, 0.82647242431, 0.75, 'sine'],
      [0.2768162277138462, 238.75479073534456, 0.5053996312051542, 0.75, 'sine'],
      [0.3411847476495199, 407.66766815918777, 0.47353191838928615, 0.75, 'sine'],
      [0.6891075690880638, 246.7253323511815, 0.7267454435081031, 0.75, 'sine'],
      [0.5884146222915984, 252.51877709020167, 0.5793636103791212, 0.75, 'sine'],
      [0.40575607443132833, 300.4984314647117, 0.40533420587725216, 0.75, 'sine'],
      [0.8373849829919608, 308.26789859099034, 0.09, 0.75, 'sine'],
      [0.6839341179963736, 395.47662256842455, 0.7199999999999995, 0.75, 'sine'],
      [0.7628776666218653, 248.36991231721288, 0.6876293514534094, 0.75, 'sine'],
      [0.3603430057616309, 593.3493623918756, 0.1376824858043206, 0.75, 'sine'],
      [0.113326798757309, 538.0931932905266, 0, 0.75, 'sine'],
      [0.32032729277951283, 702.3324512635079, 0.19421262576209414, 0.75, 'sine'],
      [0.5878322043929076, 539.1410401369884, 0, 0.75, 'sine'],
      [0.70709398997044, 603.5203978498721, 0.1451996912574834, 0.75, 'sine'],
      [0.6667032323819431, 808.4866346798027, 0.2531182370697643, 0.11, 'triangle'],
      [0.42860982636156864, 603.0199932871928, 0.20852342779111482, 0.75, 'sine'],
      [0.18298541117441414, 407.26962722235055, 0.21675305062374975, 0.75, 'sine'],
      [0.678691292588608, 265.54628495442455, 0.5710004256991218, 0.75, 'sine'],
      [0.5401445638317224, 177.7198109781509, 0.5887759930919678, 0.75, 'sine'],
      [0.8497136097963592, 191.23305265344518, 0.7199999999999985, 0.75, 'sine'],
      [0.9124170899802452, 196.32577155878315, 0.72, 0.75, 'sine'],
      [0.7837855836184497, 185.165302826394, 0.7199999999999985, 0.75, 'sine'],
      [0.19485498847920585, 178.6116297724202, 0.72, 0.75, 'sine'],
    ]
    const ids = notes.map(([x, y, z, velocity, waveType]) => this.addSilent({ x, y, z, velocity, waveType }))
    const links: Array<[number, number]> = [
      [0, 1],
      [1, 2],
      [2, 3],
      [4, 5],
      [5, 6],
      [6, 7],
      [8, 9],
      [9, 10],
      [12, 8],
      [13, 17],
      [24, 26],
      [23, 27],
      [29, 15],
      [17, 30],
      [30, 29],
    ]
    for (const [from, to] of links) {
      this.bends.push({
        id: crypto.randomUUID(),
        fromPointId: ids[from]!,
        toPointId: ids[to]!,
        curveType: 'exponential',
      })
    }
    this.emit()
  }

  /** Replace the score with a new phrase. Tempo stays where the listener left it. */
  loadRandom(): void {
    this.points.clear()
    this.bends = []

    const count = randInt(20, 30)
    const times = spreadTimes(count)
    const lengths = phraseLengths(count)
    const waves: OscillatorType[] = ['sine', 'triangle', 'square', 'sawtooth']
    const ids: string[] = []
    let cursor = 0

    for (const length of lengths) {
      const waveType = waves[randInt(0, waves.length - 1)]!
      const upper = length === 1 ? (Math.random() < 0.72 ? 240 : 520) : Math.random() < 0.45 ? 320 : Math.random() < 0.75 ? 780 : 1500
      const lower = length === 1 ? 58 : upper < 400 ? 70 : upper < 800 ? 160 : 360
      let freq = logRand(lower, upper)
      for (let step = 0; step < length; step++) {
        if (step > 0) {
          const cents = Math.random() < 0.5 ? randRange(-70, 70) : randRange(-800, 800)
          const move = Math.abs(cents) < 15 ? (cents < 0 ? -35 : 35) : cents
          freq = clamp(freq * 2 ** (move / 1200), FREQ_MIN, FREQ_MAX)
        }
        const z =
          length === 1
            ? randRange(0.22, 0.96)
            : clamp(randRange(0.3, 0.88) + (step - (length - 1) / 2) * 0.08, 0.04, 1)
        const velocity =
          length === 1 ? randRange(0.7, 1) : step === 0 ? randRange(0.28, 0.75) : randRange(0.06, 0.32)
        ids.push(
          this.addSilent({
            x: times[cursor]!,
            y: freq,
            z,
            velocity,
            waveType,
          }),
        )
        if (step > 0) {
          this.bends.push({
            id: crypto.randomUUID(),
            fromPointId: ids[cursor - 1]!,
            toPointId: ids[cursor]!,
            curveType: Math.random() < 0.62 ? 'exponential' : 'linear',
          })
        }
        cursor += 1
      }
    }
    this.emit()
  }

  private addSilent(input: PointInput): string {
    const id = crypto.randomUUID()
    this.points.set(id, this.sanitize({ ...input, id }))
    return id
  }

  private sanitize(point: PointDraft): NotePoint {
    const wave = point.waveType === 'custom' ? 'sine' : point.waveType
    const raw = point.velocity
    const velocity = typeof raw === 'number' && Number.isFinite(raw) ? raw : DEFAULT_VELOCITY
    return {
      id: point.id,
      x: clamp(point.x, 0, 1),
      y: clamp(point.y, FREQ_MIN, FREQ_MAX),
      z: clamp(point.z, 0, 1),
      velocity: clamp(velocity, 0, 1),
      waveType: wave,
    }
  }
}

export const DEFAULT_INTENSITY = PLANE_Z_NORM

function randInt(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1))
}

function randRange(min: number, max: number): number {
  return min + Math.random() * (max - min)
}

function logRand(min: number, max: number): number {
  return min * (max / min) ** Math.random()
}

/** Mix short glides with single hits. Lengths always sum to `count`. */
function phraseLengths(count: number): number[] {
  const lengths: number[] = []
  let left = count
  const reserveHits = Math.min(8, Math.max(4, Math.floor(count * 0.3)))
  const chainBudget = count - reserveHits
  let chained = 0
  while (left > reserveHits && chained < chainBudget) {
    const room = Math.min(4, chainBudget - chained, left - reserveHits)
    if (room < 2) break
    const len = randInt(2, room)
    lengths.push(len)
    chained += len
    left -= len
  }
  while (left > 0) {
    lengths.push(1)
    left -= 1
  }
  for (let i = lengths.length - 1; i > 0; i--) {
    const j = randInt(0, i)
    const swap = lengths[i]!
    lengths[i] = lengths[j]!
    lengths[j] = swap
  }
  return lengths
}

function spreadTimes(count: number): number[] {
  const xs = Array.from({ length: count }, (_, index) => {
    const slot = (index + 0.5) / count
    const jitter = (Math.random() - 0.5) * (0.55 / count)
    return clamp(slot + jitter, 0.012, 0.988)
  }).sort((a, b) => a - b)
  const minGap = Math.min(0.016, 0.85 / count)
  for (let i = 1; i < xs.length; i++) {
    if (xs[i]! < xs[i - 1]! + minGap) xs[i] = xs[i - 1]! + minGap
  }
  const end = xs[xs.length - 1] ?? 1
  if (end > 0.988) {
    const scale = 0.976 / end
    for (let i = 0; i < xs.length; i++) xs[i] = (xs[i] ?? 0) * scale
  }
  return xs
}
