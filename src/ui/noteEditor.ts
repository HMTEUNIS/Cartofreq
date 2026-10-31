import { zToCutoff, zToQ } from '../audio/voice'
import { describePitch, describeTime, FREQ_MAX, FREQ_MIN, formatHz } from '../model/space'
import type { Store } from '../model/store'
import type { CurveType } from '../model/types'

export interface NoteEditor {
  open(id: string, clientX: number, clientY: number): void
  close(): void
  /** True when this pointerdown dismissed the editor by clicking the canvas. */
  interceptPointer(): boolean
}

const WAVES: OscillatorType[] = ['sine', 'triangle', 'sawtooth', 'square']

export function createNoteEditor(store: Store): NoteEditor {
  const root = document.createElement('div')
  root.className = 'editor'
  root.hidden = true
  root.innerHTML = `
    <header>
      <h2 data-title>Note</h2>
      <button type="button" class="icon" data-close aria-label="Close">×</button>
    </header>
    <div class="stack">
      <p class="readout" data-meta></p>
      <label>Frequency
        <input data-freq type="number" min="${FREQ_MIN}" max="${FREQ_MAX}" step="0.01" />
      </label>
      <label>Intensity
        <input data-gain type="range" min="0" max="1" step="0.01" />
      </label>
      <p class="readout" data-cutoff></p>
      <p class="readout" data-q></p>
      <label>Velocity
        <input data-velocity type="range" min="0" max="1" step="0.01" />
        <span class="velocity-caption"><span>smooth</span><span>hit</span></span>
      </label>
      <label>Wave
        <select data-wave>
          ${WAVES.map((wave) => `<option value="${wave}">${wave}</option>`).join('')}
        </select>
      </label>
      <div data-bends></div>
      <button type="button" class="danger" data-delete>Remove point</button>
    </div>
  `
  document.body.append(root)

  const title = root.querySelector<HTMLElement>('[data-title]')!
  const meta = root.querySelector<HTMLElement>('[data-meta]')!
  const freq = root.querySelector<HTMLInputElement>('[data-freq]')!
  const gain = root.querySelector<HTMLInputElement>('[data-gain]')!
  const velocity = root.querySelector<HTMLInputElement>('[data-velocity]')!
  const cutoff = root.querySelector<HTMLElement>('[data-cutoff]')!
  const q = root.querySelector<HTMLElement>('[data-q]')!
  const wave = root.querySelector<HTMLSelectElement>('[data-wave]')!
  const bends = root.querySelector<HTMLElement>('[data-bends]')!
  let currentId: string | null = null
  let bendSignature = ''
  let dismissed = false

  const point = () => (currentId ? store.points.get(currentId) : undefined)

  const refresh = () => {
    const current = point()
    if (!current || !currentId) return
    title.textContent = describePitch(current.y)
    meta.textContent = `${formatHz(current.y)} · ${describeTime(current.x)}`
    if (document.activeElement !== freq) freq.value = current.y.toFixed(2)
    if (document.activeElement !== gain) gain.value = String(current.z)
    if (document.activeElement !== velocity) velocity.value = String(current.velocity)
    cutoff.textContent = `Cutoff: ${zToCutoff(current.z).toFixed(0)} Hz`
    q.textContent = `Q: ${zToQ(current.z).toFixed(2)}`
    if (document.activeElement !== wave) wave.value = current.waveType
    const signature = store.outgoing(currentId).map((bend) => `${bend.id}:${bend.curveType}`).join('|')
    if (signature !== bendSignature) {
      bendSignature = signature
      renderBends(currentId)
    }
  }

  const renderBends = (id: string) => {
    const outgoing = store.outgoing(id)
    bends.replaceChildren()
    if (outgoing.length === 0) {
      const hint = document.createElement('p')
      hint.className = 'tagline'
      hint.textContent = 'Right-drag this note to bend into a new one.'
      bends.append(hint)
      return
    }
    for (const bend of outgoing) {
      const target = store.points.get(bend.toPointId)
      const row = document.createElement('label')
      row.className = 'bend-row'
      row.textContent = target ? `Bend to ${describePitch(target.y)}` : 'Bend'
      const select = document.createElement('select')
      select.innerHTML = `<option value="exponential">exponential</option><option value="linear">linear</option>`
      select.value = bend.curveType
      select.addEventListener('change', () => {
        store.updateBend(bend.id, { curveType: select.value as CurveType })
      })
      row.append(select)
      bends.append(row)
    }
  }

  const close = () => {
    currentId = null
    bendSignature = ''
    root.hidden = true
  }

  root.querySelector('[data-close]')!.addEventListener('click', close)
  root.querySelector('[data-delete]')!.addEventListener('click', () => {
    if (!currentId) return
    const id = currentId
    close()
    store.removePoint(id)
  })

  freq.addEventListener('input', () => {
    if (!currentId) return
    const value = Number(freq.value)
    if (!Number.isFinite(value) || value < FREQ_MIN || value > FREQ_MAX) return
    store.updatePoint(currentId, { y: value })
  })
  gain.addEventListener('input', () => {
    if (!currentId) return
    store.updatePoint(currentId, { z: Number(gain.value) })
  })
  velocity.addEventListener('input', () => {
    if (!currentId) return
    store.updatePoint(currentId, { velocity: Number(velocity.value) })
  })
  wave.addEventListener('change', () => {
    if (!currentId) return
    store.updatePoint(currentId, { waveType: wave.value as OscillatorType })
  })

  store.subscribe(() => {
    if (!currentId) return
    if (!store.points.has(currentId)) {
      close()
      return
    }
    refresh()
  })

  document.addEventListener('pointerdown', (event) => {
    if (!currentId) return
    if (root.contains(event.target as Node)) return
    const target = event.target
    close()
    if (target instanceof HTMLCanvasElement) dismissed = true
  }, true)

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && currentId) close()
  })

  return {
    open(id, clientX, clientY) {
      if (!store.points.has(id)) return
      currentId = id
      bendSignature = ''
      root.hidden = false
      root.style.left = `${clientX + 14}px`
      root.style.top = `${clientY + 14}px`
      refresh()
      const rect = root.getBoundingClientRect()
      if (rect.right > window.innerWidth - 8) {
        root.style.left = `${Math.max(8, window.innerWidth - rect.width - 8)}px`
      }
      if (rect.bottom > window.innerHeight - 8) {
        root.style.top = `${Math.max(8, window.innerHeight - rect.height - 8)}px`
      }
    },
    close,
    interceptPointer() {
      const swallow = dismissed
      dismissed = false
      return swallow
    },
  }
}
