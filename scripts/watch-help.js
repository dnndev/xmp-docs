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

// Destination for deployed help content
const deployPath = 'C:/TestSites/xmp5dev/DesktopModules/XModPro/help/help-content.json'

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

    // Copy to deploy location
    const sourcePath = path.join(docsDir, 'help-content.json')

    try {
      fs.copyFileSync(sourcePath, deployPath)
      log(`Deployed to ${deployPath}`)
      log('Ready for browser refresh!\n')
    } catch (copyError) {
      log(`Deploy error: ${copyError.message}`)
    }

    isBuilding = false
  })
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
log(`Deploy to: ${deployPath}`)

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
