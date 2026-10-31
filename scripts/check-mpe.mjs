/**
 * Byte-level check for MPE export. No tsx: esbuild bundles the TypeScript, then node runs it.
 * Run from this project's directory: node scripts/check-mpe.mjs
 */
import esbuild from 'esbuild'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const outfile = path.join(os.tmpdir(), `cartofreq-mpe-check-${process.pid}.mjs`)

await esbuild.build({
  absWorkingDir: root,
  stdin: {
    contents: `
      export {
        exportMpe,
        hzToMidiFloat,
        hzToNoteAndOffset,
        offsetToBend,
        zToCC74,
        xToTicks,
        TICKS_PER_QUARTER,
        MPE_MEMBER_BEND_RANGE_SEMITONES,
      } from './src/export/mpe.ts'
      export { Store } from './src/model/store.ts'
    `,
    resolveDir: root,
    sourcefile: 'mpe-check-entry.ts',
    loader: 'ts',
  },
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile,
  logLevel: 'silent',
})

try {
  const mod = await import(pathToFileURL(outfile).href)
  run(mod)
  console.log('mpe export check ok')
} finally {
  fs.rmSync(outfile, { force: true })
}

function run(mod) {
  const {
    exportMpe,
    hzToMidiFloat,
    hzToNoteAndOffset,
    offsetToBend,
    zToCC74,
    xToTicks,
    TICKS_PER_QUARTER,
    MPE_MEMBER_BEND_RANGE_SEMITONES,
    Store,
  } = mod

  assert(Math.abs(hzToMidiFloat(440) - 69) < 1e-9, 'A4 is midi 69')
  const a4 = hzToNoteAndOffset(440)
  assert(a4.note === 69 && Math.abs(a4.offsetSemitones) < 1e-9, 'A4 offset is 0')
  assert(offsetToBend(MPE_MEMBER_BEND_RANGE_SEMITONES) === 1, '+48 saturates at +1')
  assert(offsetToBend(-96) === -1, 'past -48 saturates at -1')
  assert(zToCC74(0) === 0 && zToCC74(1) === 127, 'CC74 endpoints')
  assert(xToTicks(0, 96) === 0, 'origin tick')
  assert(xToTicks(1, 120) === 16 * TICKS_PER_QUARTER, 'loop length is 16 quarters')
  assert(xToTicks(0.25, 90) === 4 * TICKS_PER_QUARTER, 'ticks ignore tempo')

  const store = new Store()
  const demo = exportMpe({ bpm: store.bpm, points: store.points, bends: store.bends })
  assert(Buffer.from(demo.subarray(0, 4)).toString('ascii') === 'MThd', 'demo starts with MThd')
  const demoMidi = parseMidi(demo)
  assert(demoMidi.format === 1, `demo format 1, got ${demoMidi.format}`)
  assert(demoMidi.division === 480, `ppq 480, got ${demoMidi.division}`)
  assert(demoMidi.ntrks === demoMidi.tracks.length, 'track count matches header')
  const demoOns = noteOns(demoMidi)
  assert(demoOns.length === 3, `demo exports 3 notes (targets are not standalone), got ${demoOns.length}`)
  assert(demoOns.every((event) => event.channel >= 2), 'demo note-ons are on member channels')
  assert(!hasChannel1NoteOn(demoMidi), 'channel 1 has no note-ons')
  assert(demoOns.some((event) => event.dur === TICKS_PER_QUARTER), 'standalone note is one quarter')
  assert(demoMidi.tracks.every((track) => track.events.some((event) => event.kind === 'meta' && event.meta === 0x51)), 'tempo on each track')

  const wrapPoints = new Map([
    ['a', { id: 'a', x: 0.95, y: 440, z: 0.2, waveType: 'sine' }],
    ['b', { id: 'b', x: 0.05, y: 880, z: 0.9, waveType: 'sine' }],
  ])
  const wrap = parseMidi(exportMpe({
    bpm: 120,
    points: wrapPoints,
    bends: [{ id: 'bend', fromPointId: 'a', toPointId: 'b', curveType: 'exponential' }],
  }))
  const wrapOns = noteOns(wrap)
  assert(wrapOns.length === 1, 'wrap target is not a second note')
  assert(wrapOns[0].tick === 7296, `wrap starts at 7296, got ${wrapOns[0].tick}`)
  assert(wrapOns[0].off === 8064, `wrap glide extends past the loop to 8064, got ${wrapOns[0].off}`)
  assert(wrapOns[0].note === 69, 'glide keeps the source MIDI note')
  assert(wrapOns[0].channel === 2, 'first member channel is 2')
  const wrapBends = wrap.tracks[0].events.filter((event) => event.kind === 0xe0)
  assert(wrapBends.length > 10, 'glide writes a pitch-bend curve')
  assert(wrapBends[0].tick === wrapOns[0].tick, 'initial bend is at note start')
  const bendBeforeNote = wrap.tracks[0].events.findIndex((event) => event.kind === 0x90)
  const firstBend = wrap.tracks[0].events.findIndex((event) => event.kind === 0xe0)
  assert(firstBend >= 0 && firstBend < bendBeforeNote, 'pitch bend is before note on')
  assert(!hasChannel1NoteOn(wrap), 'wrap file has no channel 1 note-ons')

  const overlap = parseMidi(exportMpe({
    bpm: 100,
    points: new Map([
      ['a', { id: 'a', x: 0, y: 220, z: 0.5, waveType: 'sine' }],
      ['b', { id: 'b', x: 0, y: 330, z: 0.5, waveType: 'sine' }],
    ]),
    bends: [],
  }))
  const overlapOns = noteOns(overlap)
  assert(overlapOns.length === 2, 'two simultaneous notes')
  assert(new Set(overlapOns.map((event) => event.channel)).size === 2, 'overlapping notes use two channels')
  assert(overlapOns.every((event) => event.channel !== 1), 'neither overlap note is on channel 1')

  const linear = bendValues(curveFile('linear'))
  const exponential = bendValues(curveFile('exponential'))
  assert(linear.join(',') !== exponential.join(','), 'curve type changes the bend automation')

  const chain = parseMidi(exportMpe({
    bpm: 120,
    points: new Map([
      ['a', { id: 'a', x: 0, y: 440, z: 0.4, velocity: 0.2, waveType: 'sine' }],
      ['b', { id: 'b', x: 0.25, y: 660, z: 0.4, velocity: 0.9, waveType: 'sine' }],
      ['c', { id: 'c', x: 0.5, y: 880, z: 0.4, velocity: 0.4, waveType: 'sine' }],
    ]),
    bends: [
      { id: 'ab', fromPointId: 'a', toPointId: 'b', curveType: 'linear' },
      { id: 'bc', fromPointId: 'b', toPointId: 'c', curveType: 'exponential' },
    ],
  }))
  const chainOns = noteOns(chain).sort((a, b) => a.tick - b.tick)
  assert(chainOns.length === 2, `velocity chain is two notes, got ${chainOns.length}`)
  const chainOnBytes = chain.tracks
    .flatMap((track) => track.events.filter((event) => event.kind === 0x90 && event.d2 > 0))
    .sort((a, b) => a.tick - b.tick)
  assert(chainOnBytes[0].d2 === 25, `source note-on is 25, got ${chainOnBytes[0].d2}`)
  assert(chainOnBytes[1].d2 === 114, `B→C note-on uses B (114), got ${chainOnBytes[1].d2}`)
  const firstExpr = cc11During(chain, chainOns[0])
  const firstValues = new Set(firstExpr.map((event) => event.d2))
  assert(firstExpr.length > 1 && firstValues.size > 1, `bend CC11 ramp, got ${firstExpr.length} events`)
  assert(firstExpr[0].tick === chainOns[0].tick && firstExpr[0].d2 === 25, 'CC11 starts with the source velocity')
  const glideTrack = chain.tracks.find((track) => track.events.some((event) => event.kind === 0x90 && event.d2 === 25))
  const firstOnAt = glideTrack.events.findIndex((event) => event.kind === 0x90 && event.d2 > 0)
  const firstCc11At = glideTrack.events.findIndex((event) => event.kind === 0xb0 && event.d1 === 11)
  assert(firstCc11At >= 0 && firstCc11At < firstOnAt, 'initial CC11 is before note-on')
  assert(firstExpr[firstExpr.length - 1].d2 === 114, 'CC11 ends on the target velocity')
  assert(firstExpr.every((event) => event.tick <= chainOns[0].off), 'CC11 stays inside the glide')
  const brightness = chain.tracks.some((track) => track.events.some((event) => event.kind === 0xb0 && event.d1 === 74))
  assert(brightness, 'CC74 brightness is still written')
  assert(!chain.tracks.some((track) => track.events.some((event) => event.kind === 0xd0)), 'no channel pressure')

  const held = parseMidi(exportMpe({
    bpm: 120,
    points: new Map([
      ['a', { id: 'a', x: 0.1, y: 440, z: 0.5, velocity: 0.2, waveType: 'sine' }],
      ['b', { id: 'b', x: 0.6, y: 550, z: 0.5, velocity: 0.9, waveType: 'sine' }],
    ]),
    bends: [],
  }))
  const heldOns = noteOns(held).sort((a, b) => a.tick - b.tick)
  const heldBytes = held.tracks
    .flatMap((track) => track.events.filter((event) => event.kind === 0x90 && event.d2 > 0))
    .sort((a, b) => a.tick - b.tick)
  assert(heldBytes.length === 2 && heldBytes[0].d2 === 25 && heldBytes[1].d2 === 114, 'standalone note-ons differ')
  assert(cc11During(held, heldOns[0]).length === 1 && cc11During(held, heldOns[0])[0].tick === heldOns[0].tick && cc11During(held, heldOns[0])[0].d2 === 25, 'standalone CC11 is one strike value')
  assert(cc11During(held, heldOns[1]).length === 1 && cc11During(held, heldOns[1])[0].tick === heldOns[1].tick && cc11During(held, heldOns[1])[0].d2 === 114, 'second standalone CC11 matches its point')
  const secondExpr = cc11During(chain, chainOns[1])
  assert(secondExpr.length > 1 && secondExpr[0].d2 === 114, `B→C CC11 starts at B, got ${secondExpr[0] && secondExpr[0].d2}`)

  const linearExpr = exprValues(velocityCurve('linear'))
  const exponentialExpr = exprValues(velocityCurve('exponential'))
  assert(linearExpr.join(',') !== exponentialExpr.join(','), 'velocity curve type changes CC11')

  function curveFile(curve) {
    return exportMpe({
      bpm: 120,
      points: new Map([
        ['a', { id: 'a', x: 0, y: 440, z: 0, waveType: 'sine' }],
        ['b', { id: 'b', x: 0.5, y: 880, z: 1, waveType: 'sine' }],
      ]),
      bends: [{ id: 'bend', fromPointId: 'a', toPointId: 'b', curveType: curve }],
    })
  }

  function velocityCurve(curve) {
    return exportMpe({
      bpm: 120,
      points: new Map([
        ['a', { id: 'a', x: 0, y: 440, z: 0.5, velocity: 0.2, waveType: 'sine' }],
        ['b', { id: 'b', x: 0.5, y: 440, z: 0.5, velocity: 0.9, waveType: 'sine' }],
      ]),
      bends: [{ id: 'bend', fromPointId: 'a', toPointId: 'b', curveType: curve }],
    })
  }
}

function bendValues(bytes) {
  return parseMidi(bytes).tracks.flatMap((track) => track.events.filter((event) => event.kind === 0xe0).map((event) => event.raw))
}

function cc11During(midi, note) {
  return midi.tracks.flatMap((track) => track.events.filter((event) =>
    event.kind === 0xb0
    && event.d1 === 11
    && event.channel === note.channel
    && event.tick >= note.tick
    && event.tick <= note.off))
}

function exprValues(bytes) {
  return parseMidi(bytes).tracks.flatMap((track) =>
    track.events.filter((event) => event.kind === 0xb0 && event.d1 === 11).map((event) => event.d2))
}

function noteOns(midi) {
  const ons = []
  for (const track of midi.tracks) {
    for (const event of track.events) {
      if (event.kind !== 0x90 || event.d2 === 0) continue
      const off = track.events.find((other) =>
        other.tick >= event.tick
        && other.channel === event.channel
        && other.d1 === event.d1
        && ((other.kind === 0x80) || (other.kind === 0x90 && other.d2 === 0))
        && other !== event)
      ons.push({
        tick: event.tick,
        channel: event.channel,
        note: event.d1,
        off: off ? off.tick : -1,
        dur: off ? off.tick - event.tick : -1,
      })
    }
  }
  return ons
}

function hasChannel1NoteOn(midi) {
  return midi.tracks.some((track) => track.events.some((event) => event.kind === 0x90 && event.channel === 1 && event.d2 > 0))
}

function parseMidi(bytes) {
  const header = Buffer.from(bytes.subarray(0, 4)).toString('ascii')
  if (header !== 'MThd') throw new Error(`missing MThd, got ${header}`)
  const format = (bytes[8] << 8) | bytes[9]
  const ntrks = (bytes[10] << 8) | bytes[11]
  const division = (bytes[12] << 8) | bytes[13]
  let i = 14
  const tracks = []
  while (i + 8 <= bytes.length) {
    const type = Buffer.from(bytes.subarray(i, i + 4)).toString('ascii')
    if (type !== 'MTrk') throw new Error(`expected MTrk, got ${type}`)
    const size = (bytes[i + 4] << 24) | (bytes[i + 5] << 16) | (bytes[i + 6] << 8) | bytes[i + 7]
    i += 8
    const end = i + size
    const events = []
    let tick = 0
    let running = 0
    while (i < end) {
      let delta = 0
      let b = 0
      do {
        b = bytes[i++]
        delta = (delta << 7) | (b & 0x7f)
      } while (b & 0x80)
      tick += delta
      let status = bytes[i]
      if (status < 0x80) status = running
      else {
        running = status
        i++
      }
      if (status === 0xff) {
        const meta = bytes[i++]
        let len = 0
        do {
          b = bytes[i++]
          len = (len << 7) | (b & 0x7f)
        } while (b & 0x80)
        i += len
        events.push({ tick, kind: 'meta', meta })
        continue
      }
      const kind = status & 0xf0
      const channel = (status & 0x0f) + 1
      if (kind === 0xc0 || kind === 0xd0) {
        events.push({ tick, kind, channel, d1: bytes[i++], d2: 0, raw: 0 })
        continue
      }
      const d1 = bytes[i++]
      const d2 = bytes[i++]
      events.push({ tick, kind, channel, d1, d2, raw: kind === 0xe0 ? (d2 << 7) | d1 : 0 })
    }
    if (i !== end) throw new Error(`track ended at ${i}, expected ${end}`)
    tracks.push({ events })
  }
  return { format, ntrks, division, tracks }
}

function assert(condition, message) {
  if (!condition) throw new Error(message)
}
