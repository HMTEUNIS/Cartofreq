import { exportMpe, type MpeExportInput } from '../export/mpe'

let openRoot: HTMLElement | null = null

/** Opens the export dialog. The file is built only after Download .mid. */
export function openMpeExport(read: () => MpeExportInput, desktop = false): void {
  if (openRoot) {
    openRoot.querySelector<HTMLButtonElement>('[data-download]')?.focus()
    return
  }

  const root = document.createElement('div')
  root.className = 'mpe-modal'
  root.innerHTML = `
    <div class="mpe-dialog" role="dialog" aria-modal="true" aria-labelledby="mpe-export-title">
      <h2 id="mpe-export-title">Export as MPE</h2>
      <p class="mpe-lead">${
        desktop
          ? 'This writes the sequence to an MPE file for another instrument. The desktop app can also play a loaded sample, and can send the same performance out the virtual MIDI port.'
          : 'This exports your sequence as an MPE (MIDI Polyphonic Expression) file. Pitch, glissando, and brightness (Z-axis) are preserved.'
      }</p>
      <ul>
        <li>Pitch: Microtonal offsets are carried via per-note pitch bend.</li>
        <li>Glissando: Bend connections become pitch bend automation curves.</li>
        <li>Brightness: Z-axis maps to CC74 (timbre).</li>
        <li>Velocity is the note-on velocity. Changes along a bend are carried on CC11 (expression).</li>
        ${desktop ? '' : '<li>Wave type is not exported. The receiving instrument determines the sound.</li>'}
      </ul>
      <p class="mpe-requirement">Requirement: You must use an MPE-compatible instrument. Set its member-channel pitch bend range to ±48 semitones (the MPE default). Without this, microtonal pitches will be incorrect.</p>
      <p>Bends longer than ±48 semitones saturate. The file is one track per member channel (format 1).</p>
      <div class="row mpe-actions">
        <button type="button" class="primary" data-download>Download .mid</button>
        <button type="button" data-close>Close</button>
      </div>
    </div>
  `
  document.body.append(root)
  document.body.setAttribute('data-modal-open', '')
  openRoot = root

  const dialog = root.querySelector<HTMLElement>('.mpe-dialog')!
  const download = root.querySelector<HTMLButtonElement>('[data-download]')!
  const closeButton = root.querySelector<HTMLButtonElement>('[data-close]')!
  const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null

  const close = () => {
    window.removeEventListener('keydown', onKey, true)
    root.remove()
    document.body.removeAttribute('data-modal-open')
    if (openRoot === root) openRoot = null
    opener?.focus()
  }

  const onKey = (event: KeyboardEvent) => {
    if (event.code !== 'Escape') return
    event.preventDefault()
    event.stopPropagation()
    close()
  }

  download.addEventListener('click', () => {
    const bytes = exportMpe(read())
    const copy = new ArrayBuffer(bytes.byteLength)
    new Uint8Array(copy).set(bytes)
    const blob = new Blob([copy], { type: 'audio/midi' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `cartofreq-${Date.now()}.mid`
    link.click()
    window.setTimeout(() => URL.revokeObjectURL(url), 1500)
  })
  closeButton.addEventListener('click', close)
  root.addEventListener('click', (event) => {
    if (event.target === root) close()
  })
  dialog.addEventListener('click', (event) => event.stopPropagation())
  window.addEventListener('keydown', onKey, true)
  download.focus()
}
