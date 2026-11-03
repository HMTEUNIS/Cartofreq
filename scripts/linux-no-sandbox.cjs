const fs = require('node:fs/promises')
const path = require('node:path')

/**
 * The AppImage and the unpacked binary abort on double-click: Electron finds
 * chrome-sandbox, it is not setuid root, and the process exits before JavaScript
 * runs. A desktop entry can pass --no-sandbox, but opening the file itself does not.
 * Wrap the Linux executable so every launch includes the flag.
 */
exports.default = async function linuxNoSandbox(context) {
  if (context.electronPlatformName !== 'linux') return
  const name = context.packager.executableName
  const binary = path.join(context.appOutDir, name)
  const real = path.join(context.appOutDir, `${name}.bin`)
  await fs.rename(binary, real)
  const script = `#!/bin/sh
here=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
exec "$here/${name}.bin" --no-sandbox "$@"
`
  await fs.writeFile(binary, script, { mode: 0o755 })
}
