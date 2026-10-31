import type { AudioEngine } from './audio/synth'

export interface RecorderHandle {
  readonly supported: boolean
  readonly recording: boolean
  start(): void
  stop(): void
  toggle(): void
}

function chooseMime(): string | undefined {
  if (typeof MediaRecorder === 'undefined') return undefined
  const candidates = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4']
  return candidates.find((type) => MediaRecorder.isTypeSupported(type))
}

/** Records the live master output. Stopping the recorder downloads a file. */
export function createRecorder(audio: AudioEngine): RecorderHandle {
  const mime = chooseMime()
  let recorder: MediaRecorder | null = null
  let recording = false
  let session = 0

  function download(blob: Blob): void {
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    const extension = blob.type.includes('mp4') ? 'm4a' : 'webm'
    link.href = url
    link.download = `cartofreq-${new Date().toISOString().replace(/[:.]/g, '-')}.${extension}`
    link.click()
    window.setTimeout(() => URL.revokeObjectURL(url), 2000)
  }

  return {
    get supported() {
      return audio.streamDestination != null && mime != null
    },
    get recording() {
      return recording
    },
    start() {
      if (recording || !audio.streamDestination || !mime) return
      const current = ++session
      const localChunks: Blob[] = []
      try {
        recorder = new MediaRecorder(audio.streamDestination.stream, { mimeType: mime })
      } catch (error) {
        console.warn('MediaRecorder failed to start', error)
        return
      }
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) localChunks.push(event.data)
      }
      recorder.onstop = () => {
        const type = recorder?.mimeType || mime || 'audio/webm'
        if (localChunks.length > 0) download(new Blob(localChunks, { type }))
        if (current === session) recording = false
      }
      recorder.onerror = () => {
        if (current === session) recording = false
      }
      recorder.start(120)
      recording = true
    },
    stop() {
      if (!recording || !recorder) return
      if (recorder.state !== 'inactive') recorder.stop()
      recording = false
    },
    toggle() {
      if (recording) this.stop()
      else this.start()
    },
  }
}
