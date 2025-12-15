/**
 * Auto-generate frontmatter for XModPro help documentation
 *
 * Usage: node scripts/add-frontmatter.js [--dry-run]
 *   --dry-run: Preview changes without writing files
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const docsDir = path.dirname(__dirname)

// Command line flags
const forceUpdate = process.argv.includes('--force')

// Files/folders to skip
const SKIP_FILES = [
  'index.md',
  'README.md',
  'HELP_SCHEMA.md',
  'eula.md',
  'revision-history.md'
]

const SKIP_FOLDERS = ['node_modules', '.vitepress', 'scripts']

// Category mappings based on folder and control type patterns
const CATEGORY_MAP = {
  // Form controls
  'form-controls': {
    default: 'Input Controls',
    patterns: {
      // Order matters! More specific patterns first
      'validate': 'Validation',
      'validation-summary': 'Validation',
      'dropdown|listbox|checkbox-list|radio-button-list|dual-list': 'List Controls',
      '^checkbox$|^radio-button$': 'Selection Controls',
      // Button patterns - must come after selection controls to not match radio-button
      'add-button|add-image|add-link': 'Buttons',
      'update-button|update-image|update-link': 'Buttons',
      'cancel-button|cancel-image|cancel-link': 'Buttons',
      'continue-button|continue-image|continue-link': 'Buttons',
      'ajax-button|ajax-image|ajax-link': 'Buttons',
      'calendar-button|calendar-image|calendar-link': 'Buttons',
      'textbox|textarea|password|text|html-input|markdown|date-input': 'Input Controls',
      'email|silent-post|redirect': 'Actions',
      'add-user|update-user|login|register|add-to-roles|remove-from-roles': 'User Actions',
      'panel|tabstrip|label': 'Layout',
      'jquery-ready|script-block': 'Scripting',
      'file-upload|captcha': 'Input Controls',
      'control-datasource': 'Data',
      'include': 'Structure',
      'action': 'Actions',
      'add-edit-form': 'Structure'
    }
  },
  // Template controls
  'template-controls': {
    default: 'Display Controls',
    patterns: {
      'add-button|add-image|add-link': 'Action Links',
      'edit-button|edit-image|edit-link': 'Action Links',
      'delete-button|delete-image|delete-link': 'Action Links',
      'detail-button|detail-image|detail-link': 'Action Links',
      'return-button|return-image|return-link': 'Action Links',
      'toggle-button|toggle-image|toggle-link': 'Action Links',
      'command-button|command-image|command-link': 'Action Links',
      'ajax-button|ajax-image|ajax-link': 'Action Links',
      'load-feed-button|load-feed-image|load-feed-link|load-feed': 'Feed Controls',
      'data-list|template|each': 'Display Controls',
      'pager|search-sort': 'Navigation',
      'if-empty|if-not-empty|select': 'Conditional',
      'feed|json-feed': 'Feed Controls',
      'redirect|register': 'Actions',
      'meta-tags|navigate-url': 'SEO',
      'format': 'Formatting',
      'include|jquery-ready|script-block|markdown|slideshow': 'Display Controls'
    }
  },
  // Tokens
  'tokens': {
    default: 'Tokens',
    patterns: {
      'field|data': 'Field Tokens',
      'user': 'User Tokens',
      'portal': 'Portal Tokens',
      'module|page': 'Module Tokens',
      'request': 'Request Tokens',
      'dateadd|functions': 'Function Tokens'
    }
  },
  // Tutorials
  'tutorials': {
    default: 'Tutorials',
    patterns: {}
  }
}

// Root-level file categories
const ROOT_CATEGORIES = {
  'getting-started': 'Getting Started',
  'activating': 'Getting Started',
  'configuring-xmod-pro': 'Configuration',
  'control-panel': 'Configuration',
  'manage-forms': 'Managing Content',
  'manage-templates': 'Managing Content',
  'manage-feeds': 'Managing Content',
  'form-builder': 'Form Builder',
  'inline-editor': 'Editors',
  'database-tools': 'Tools',
  'localization': 'Advanced',
  'using-javascript': 'Advanced',
  'snippets': 'Editors',
  'data-types': 'Reference',
  'unit-types': 'Reference',
  'font-properties': 'Reference',
  'faq': 'Reference'
}

/**
 * Determine category based on folder and filename
 */
function getCategory(folder, filename) {
  const basename = filename.replace('.md', '')

  // Root level files
  if (!folder || folder === '.') {
    return ROOT_CATEGORIES[basename] || 'General'
  }

  const folderConfig = CATEGORY_MAP[folder]
  if (!folderConfig) return 'General'

  // Check patterns
  for (const [pattern, category] of Object.entries(folderConfig.patterns)) {
    const regex = new RegExp(pattern)
    if (regex.test(basename)) {
      // Handle nested pattern objects (for buttons)
      if (typeof category === 'object') {
        for (const [prefix, cat] of Object.entries(category)) {
          if (prefix === 'default') continue
          if (basename.startsWith(prefix)) return cat
        }
        return category.default || folderConfig.default
      }
      return category
    }
  }

  return folderConfig.default
}

/**
 * Determine context based on folder
 */
function getContext(folder) {
  if (!folder || folder === '.') return 'all'
  if (folder === 'form-controls') return 'form'
  if (folder === 'template-controls') return 'template'
  if (folder === 'tokens') return 'all'
  if (folder === 'tutorials') return 'all'
  return 'all'
}

/**
 * Extract title from markdown content
 */
function extractTitle(content) {
  // Look for first heading
  const headingMatch = content.match(/^#\s+(?:`<([^>]+)>`|`([^`]+)`|(.+))$/m)
  if (headingMatch) {
    // Extract tag name or text
    return headingMatch[1] || headingMatch[2] || headingMatch[3].trim()
  }
  return null
}

/**
 * Extract summary from markdown content
 */
function extractSummary(content) {
  // Skip frontmatter and first heading, find first paragraph
  let text = content.replace(/^---[\s\S]*?---\s*/m, '') // Remove frontmatter
  text = text.replace(/^#[^\n]+\n+/, '') // Remove first heading

  // Get first non-empty paragraph (before next heading, code block, image, or VitePress block)
  // Stop at: #, `, -, *, ![, or :::
  const paragraphMatch = text.match(/^([A-Z][^\n]+(?:\n(?![#`\-*!:])[^\n]+)*)/m)
  if (paragraphMatch) {
    let summary = paragraphMatch[1]
      .replace(/\n/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()

    // Stop at markdown images if any slipped through
    const imgIndex = summary.indexOf('![')
    if (imgIndex > 0) {
      summary = summary.substring(0, imgIndex).trim()
    }

    // Stop at VitePress blocks if any slipped through
    const vitepressIndex = summary.indexOf(':::')
    if (vitepressIndex > 0) {
      summary = summary.substring(0, vitepressIndex).trim()
    }

    // Convert markdown links [text](url) to just text
    summary = summary.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')

    // Remove any trailing colons or incomplete sentences
    summary = summary.replace(/:\s*$/, '.')

    return summary
  }
  return null
}

/**
 * Generate keywords from title
 */
function generateKeywords(title, folder) {
  const words = title
    .replace(/[<>:`]/g, '')
    .replace(/([A-Z])/g, ' $1')
    .toLowerCase()
    .split(/[\s-]+/)
    .filter(w => w.length > 2 && !['the', 'and', 'for', 'tag', 'xmod'].includes(w))

  // Add common variants
  const keywords = [...new Set(words)]

  // Add folder-specific keywords
  if (folder === 'form-controls') {
    if (!keywords.includes('form')) keywords.push('form')
  } else if (folder === 'template-controls') {
    if (!keywords.includes('template')) keywords.push('template')
  }

  return keywords.slice(0, 5)
}

/**
 * Generate ID from folder and filename
 */
function generateId(folder, filename) {
  const basename = filename.replace('.md', '')
  if (!folder || folder === '.') return basename
  return `${folder.replace('-controls', '')}-${basename}`
}

/**
 * Process a single markdown file
 */
function processFile(filePath, dryRun = false) {
  const relativePath = path.relative(docsDir, filePath)
  const folder = path.dirname(relativePath)
  const filename = path.basename(relativePath)

  // Skip excluded files
  if (SKIP_FILES.includes(filename)) {
    return { skipped: true, reason: 'excluded file' }
  }

  const content = fs.readFileSync(filePath, 'utf-8')
  const parsed = matter(content)

  // Check if already has our required fields (unless forcing update)
  const hasFullFrontmatter = parsed.data.id && parsed.data.summary
  if (hasFullFrontmatter && !forceUpdate) {
    return { skipped: true, reason: 'already has frontmatter' }
  }

  // Extract or generate frontmatter fields
  const title = parsed.data.title || extractTitle(parsed.content) || filename.replace('.md', '')
  const id = generateId(folder === '.' ? '' : folder, filename)
  const category = getCategory(folder === '.' ? '' : folder, filename)
  const context = getContext(folder === '.' ? '' : folder)
  const summary = extractSummary(content) || `Documentation for ${title}.`
  const keywords = generateKeywords(title, folder)

  // Build new frontmatter (spread existing first so new values override)
  const newFrontmatter = {
    ...parsed.data, // Preserve any existing frontmatter
    id,
    title: title.replace(/^<|>$/g, ''),
    category,
    context,
    summary,
    keywords
  }

  // Remove VitePress-specific fields that aren't in our schema
  delete newFrontmatter.layout
  delete newFrontmatter.hero
  delete newFrontmatter.features

  // Generate new content
  const newContent = matter.stringify(parsed.content, newFrontmatter)

  if (!dryRun) {
    fs.writeFileSync(filePath, newContent, 'utf-8')
  }

  return {
    updated: true,
    id,
    title: newFrontmatter.title,
    category,
    context
  }
}

/**
 * Find all markdown files recursively
 */
function findMarkdownFiles(dir) {
  const files = []

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      if (!SKIP_FOLDERS.includes(entry.name)) {
        files.push(...findMarkdownFiles(fullPath))
      }
    } else if (entry.name.endsWith('.md')) {
      files.push(fullPath)
    }
  }

  return files
}

// Main execution
const dryRun = process.argv.includes('--dry-run')

console.log(`\n${dryRun ? '[DRY RUN] ' : ''}${forceUpdate ? '[FORCE] ' : ''}Adding frontmatter to XModPro help docs...\n`)

const files = findMarkdownFiles(docsDir)
const results = { updated: 0, skipped: 0 }

for (const file of files) {
  const relativePath = path.relative(docsDir, file)
  const result = processFile(file, dryRun)

  if (result.skipped) {
    results.skipped++
    if (process.argv.includes('--verbose')) {
      console.log(`  SKIP: ${relativePath} (${result.reason})`)
    }
  } else if (result.updated) {
    results.updated++
    console.log(`  ${dryRun ? 'WOULD UPDATE' : 'UPDATED'}: ${relativePath}`)
    console.log(`    id: ${result.id}, category: ${result.category}, context: ${result.context}`)
  }
}

console.log(`\n${dryRun ? '[DRY RUN] Would update' : 'Updated'}: ${results.updated} files`)
console.log(`Skipped: ${results.skipped} files`)
console.log('')
