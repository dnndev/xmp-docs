/**
 * Watch for markdown file changes and auto-rebuild/deploy help content
 *
 * Usage: node scripts/watch-help.js
 */

import chokidar from 'chokidar'
import { exec } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const docsDir = path.dirname(__dirname)

// Destinations for deployed help content.
// The Vue admin-ui fetches from /DesktopModules/XModPro/admin-ui/control-panel/help-content.json
// (see src/stores/help.js). The source-tree public/ copy keeps the next
// `npm run build` of the control-panel in sync for packaging.
const deployTargets = [
  'C:/TestSites/xmp5dev/DesktopModules/XModPro/admin-ui/control-panel/help-content.json',
  'C:/Users/kford/source/dnndev/xmp/XModPro/admin-ui/control-panel/public/help-content.json'
]

// Help images live in XModPro.Help/img and are referenced from inside the
// markdown content as ![](img/foo.png). HelpViewer.vue rewrites those to
// /DesktopModules/XModPro/help/img/foo.png at render time, so dev needs the
// images mirrored to that location or every help image 404s. We mirror once
// at startup (images change rarely; a watch loop isn't worth the overhead).
const imageSourceDir = path.join(docsDir, 'img')
const imageDeployDir = 'C:/TestSites/xmp5dev/DesktopModules/XModPro/help/img'

// Debounce timer
let buildTimeout = null
const DEBOUNCE_MS = 500

// Track if build is in progress
let isBuilding = false

function log(msg) {
  const time = new Date().toLocaleTimeString()
  console.log(`[${time}] ${msg}`)
}

function buildAndDeploy() {
  if (isBuilding) {
    log('Build already in progress, skipping...')
    return
  }

  isBuilding = true
  log('Building help-content.json...')

  exec('node scripts/build-help-json.js', { cwd: docsDir }, (error, stdout, stderr) => {
    if (error) {
      log(`Build error: ${error.message}`)
      isBuilding = false
      return
    }

    if (stderr) {
      log(`Build stderr: ${stderr}`)
    }

    // Copy to each deploy location
    const sourcePath = path.join(docsDir, 'help-content.json')

    for (const target of deployTargets) {
      try {
        fs.mkdirSync(path.dirname(target), { recursive: true })
        fs.copyFileSync(sourcePath, target)
        log(`Deployed to ${target}`)
      } catch (copyError) {
        log(`Deploy error (${target}): ${copyError.message}`)
      }
    }
    log('Ready for browser refresh!\n')

    isBuilding = false
  })
}

function deployImages() {
  if (!fs.existsSync(imageSourceDir)) {
    log(`Image source not found: ${imageSourceDir} (skipping image mirror)`)
    return
  }

  // Walk subdirectories too -- v5 screenshots live in img/v5/, and previous
  // non-recursive versions of this function silently skipped them, producing
  // 404s for every image referenced from a v5 doc page.
  let copied = 0
  function mirrorDir(srcDir, dstDir) {
    fs.mkdirSync(dstDir, { recursive: true })
    for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
      const src = path.join(srcDir, entry.name)
      const dst = path.join(dstDir, entry.name)
      if (entry.isDirectory()) {
        mirrorDir(src, dst)
      } else if (entry.isFile()) {
        fs.copyFileSync(src, dst)
        copied++
      }
    }
  }

  try {
    mirrorDir(imageSourceDir, imageDeployDir)
    log(`Mirrored ${copied} help image(s) to ${imageDeployDir}`)
  } catch (err) {
    log(`Image mirror error: ${err.message}`)
  }
}

function onFileChange(filePath) {
  // Only process .md files
  if (!filePath.endsWith('.md')) return

  const relativePath = path.relative(docsDir, filePath)
  log(`Changed: ${relativePath}`)

  // Debounce multiple rapid changes
  if (buildTimeout) {
    clearTimeout(buildTimeout)
  }
  buildTimeout = setTimeout(buildAndDeploy, DEBOUNCE_MS)
}

// Watch the docs directory for .md files
const watchPattern = docsDir

log('XModPro Help Watcher')
log('====================')
log(`Docs dir: ${docsDir}`)
log(`Watching: ${watchPattern}`)
log('Deploy targets:')
for (const target of deployTargets) {
  log(`  ${target}`)
}
log(`Image mirror: ${imageSourceDir} -> ${imageDeployDir}`)

// One-shot image mirror at startup -- images change rarely so we don't watch them.
// Restart the watcher to pick up new images.
deployImages()

// Initialize watcher
const watcher = chokidar.watch(watchPattern, {
  ignored: [
    /(^|[\/\\])\../,           // ignore dotfiles
    /node_modules/,            // ignore node_modules
    /\.vitepress/              // ignore vitepress folder
  ],
  persistent: true,
  ignoreInitial: true,
  usePolling: true,            // More reliable on Windows
  interval: 500,               // Poll every 500ms
  awaitWriteFinish: {
    stabilityThreshold: 300,
    pollInterval: 100
  }
})

watcher
  .on('all', (event, filePath) => {
    log(`[DEBUG] Event: ${event}, Path: ${filePath}`)
  })
  .on('change', onFileChange)
  .on('add', onFileChange)
  .on('ready', () => {
    const watched = watcher.getWatched()
    const dirs = Object.keys(watched)
    log(`Watching ${dirs.length} directories`)
    log('Watching for changes... (Ctrl+C to stop)\n')
  })
  .on('error', (error) => {
    log(`Watcher error: ${error.message}`)
  })

// Handle graceful shutdown
process.on('SIGINT', () => {
  log('\nStopping watcher...')
  watcher.close()
  process.exit(0)
})
