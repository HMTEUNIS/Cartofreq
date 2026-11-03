import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('cartofreq', {
  platform: 'electron',
  sendMidi: (bytes: number[]) => {
    ipcRenderer.send('midi:send', bytes)
  },
  midiStatus: () => ipcRenderer.invoke('midi:status'),
  onMidiInput: (cb: (msg: number[]) => void) => {
    ipcRenderer.on('midi:input', (_event, msg: number[]) => cb(msg))
  },
  midiInputs: () => ipcRenderer.invoke('midi:inputs'),
  refreshMidiInputs: () => ipcRenderer.invoke('midi:refresh-inputs'),
  audioStatus: () => ipcRenderer.invoke('audio:status'),
})
