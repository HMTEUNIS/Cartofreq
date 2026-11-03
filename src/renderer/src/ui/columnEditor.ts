import { COLUMN_COUNT, describeColumn, type ColumnClip, type PasteMode } from '../model/column'
import type { Store } from '../model/store'

export interface ColumnEditor {
  open(index: number, clientX: number, clientY: number): void
  close(): void
  /** True when this pointerdown dismissed the panel by clicking the canvas. */
  interceptPointer(): boolean
}

export function createColumnEditor(
  store: Store,
  onColumn: (index: number | null) => void,
): ColumnEditor {
  const root = document.createElement('div')
  root.className = 'editor column-editor'
  root.hidden = true
  root.innerHTML = `
    <header>
      <h2>Column</h2>
      <button type="button" class="icon" data-close aria-label="Close">×</button>
    </header>
    <div class="stack">
      <p class="readout" data-where></p>
      <p class="readout" data-counts></p>
      <p class="readout" data-status></p>
      <button type="button" data-clear>Clear column</button>
      <button type="button" data-copy>Copy column</button>
      <button type="button" data-paste>Paste column</button>
      <div class="choice" data-choice hidden>
        <p class="readout">Overwrite or addition</p>
        <button type="button" data-overwrite>Overwrite</button>
        <button type="button" data-addition>Addition</button>
      </div>
    </div>
  `
  document.body.appendChild(root)

  const where = root.querySelector<HTMLElement>('[data-where]')!
  const counts = root.querySelector<HTMLElement>('[data-counts]')!
  const status = root.querySelector<HTMLElement>('[data-status]')!
  const pasteButton = root.querySelector<HTMLButtonElement>('[data-paste]')!
  const choice = root.querySelector<HTMLElement>('[data-choice]')!

  let index: number | null = null
  let clip: ColumnClip | null = null
  let dismissed = false

  const noteWord = (n: number) => (n === 1 ? '1 note' : `${n} notes`)
  const bendWord = (n: number) => (n === 1 ? '1 bend' : `${n} bends`)

  const refresh = () => {
    if (index == null) return
    where.textContent = describeColumn(index)
    const here = store.pointsInColumn(index).length
    counts.textContent = noteWord(here)
    pasteButton.disabled = clip == null
    pasteButton.title = clip == null ? 'Copy a column first' : `Paste ${noteWord(clip.points.length)}`
  }

  const close = () => {
    if (index == null) return
    index = null
    choice.hidden = true
    root.hidden = true
    onColumn(null)
  }

  const paste = (mode: PasteMode) => {
    if (index == null || !clip) return
    const target = index
    store.pasteColumn(target, clip, mode)
    choice.hidden = true
    status.textContent = mode === 'overwrite' ? 'Pasted over this column.' : 'Added to this column.'
    status.hidden = false
    refresh()
  }

  root.querySelector('[data-close]')!.addEventListener('click', close)
  root.querySelector('[data-clear]')!.addEventListener('click', () => {
    if (index == null) return
    store.clearColumn(index)
    choice.hidden = true
    status.textContent = 'Cleared.'
    status.hidden = false
    refresh()
  })
  root.querySelector('[data-copy]')!.addEventListener('click', () => {
    if (index == null) return
    clip = store.copyColumn(index)
    choice.hidden = true
    status.textContent = `Copied ${noteWord(clip.points.length)}, ${bendWord(clip.bends.length)}.`
    status.hidden = false
    refresh()
  })
  pasteButton.addEventListener('click', () => {
    if (!clip) return
    choice.hidden = false
    status.textContent = ''
    status.hidden = true
  })
  root.querySelector('[data-overwrite]')!.addEventListener('click', () => paste('overwrite'))
  root.querySelector('[data-addition]')!.addEventListener('click', () => paste('addition'))

  store.subscribe(() => {
    if (index == null) return
    refresh()
  })

  document.addEventListener('pointerdown', (event) => {
    if (index == null) return
    if (root.contains(event.target as Node)) return
    const target = event.target
    close()
    if (target instanceof HTMLCanvasElement) dismissed = true
  }, true)

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && index != null) close()
  })

  return {
    open(next, clientX, clientY) {
      if (next < 0 || next >= COLUMN_COUNT) return
      index = next
      choice.hidden = true
      status.textContent = clip
        ? `Clipboard holds ${noteWord(clip.points.length)}.`
        : ''
      status.hidden = status.textContent === ''
      root.hidden = false
      root.style.left = `${clientX + 14}px`
      root.style.top = `${clientY + 14}px`
      refresh()
      onColumn(next)
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
