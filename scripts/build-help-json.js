/**
 * XModPro Help JSON Builder
 *
 * Extracts frontmatter and key content sections from markdown documentation
 * and generates a JSON file for use in the XModPro admin UI.
 *
 * Usage: node scripts/build-help-json.js [--output path] [--minify]
 *
 * Output: help-content.json (or specified path)
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

// Configuration
const CONFIG = {
  // Directories to scan for markdown files
  contentDirs: [
    'form-controls',
    'template-controls',
    'tokens',
    'tutorials'
  ],
  // Root-level files to include
  rootFiles: [
    'getting-started.md',
    'control-panel.md',
    'manage-forms.md',
    'form-builder.md',
    'manage-templates.md',
    'manage-feeds.md',
    'database-tools.md',
    'snippets.md',
    'using-javascript.md',
    'data-types.md',
    'unit-types.md',
    'font-properties.md',
    'localization.md',
    'faq.md'
  ],
  // Output file
  outputFile: 'help-content.json',
  // XModPro version
  version: '5.0.0'
}

/**
 * Parse command line arguments
 */
function parseArgs() {
  const args = process.argv.slice(2)
  const options = {
    output: CONFIG.outputFile,
    minify: false
  }

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--output' && args[i + 1]) {
      options.output = args[++i]
    } else if (args[i] === '--minify') {
      options.minify = true
    }
  }

  return options
}

/**
 * Extract the Syntax code block from markdown content
 */
function extractSyntax(content) {
  // Look for ## Syntax followed by a code block
  const syntaxMatch = content.match(/## Syntax\s*```(?:html|xml)?\s*([\s\S]*?)```/i)
  if (syntaxMatch) {
    return syntaxMatch[1].trim()
  }
  return null
}

/**
 * Extract the first Example code block from markdown content
 */
function extractExample(content) {
  // Look for ## Example followed by a code block
  const exampleMatch = content.match(/## Example[^#]*?```(?:html|xml)?\s*([\s\S]*?)```/i)
  if (exampleMatch) {
    return exampleMatch[1].trim()
  }
  return null
}

/**
 * Extract attribute names from the Remarks section
 */
function extractAttributes(content) {
  const attributes = []
  // Match **AttributeName**: pattern in Remarks
  const remarkSection = content.match(/## Remarks([\s\S]*?)(?=## |$)/i)
  if (remarkSection) {
    const attrMatches = remarkSection[1].matchAll(/\*\s*\*\*([^*]+)\*\*:/g)
    for (const match of attrMatches) {
      const attrName = match[1].trim()
      // Skip non-attribute items
      if (!attrName.includes(' ') && attrName.length < 30) {
        attributes.push(attrName)
      }
    }
  }
  return attributes
}

/**
 * Process a single markdown file
 */
function processFile(filePath, relativePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data: frontmatter, content } = matter(fileContent)

    // Skip files without required frontmatter
    if (!frontmatter.id || !frontmatter.title) {
      console.log(`  Skipping ${relativePath} (missing required frontmatter)`)
      return null
    }

    const topic = {
      id: frontmatter.id,
      title: frontmatter.title,
      category: frontmatter.category || 'Uncategorized',
      context: frontmatter.context || 'all',
      summary: frontmatter.summary || '',
      path: '/' + relativePath.replace(/\.md$/, '').replace(/\\/g, '/'),
    }

    // Optional fields
    if (frontmatter.since) topic.since = frontmatter.since
    if (frontmatter.keywords) topic.keywords = frontmatter.keywords
    if (frontmatter.related) topic.related = frontmatter.related
    if (frontmatter.deprecated) topic.deprecated = frontmatter.deprecated
    if (frontmatter.deprecatedMessage) topic.deprecatedMessage = frontmatter.deprecatedMessage

    // Extract content sections
    const syntax = extractSyntax(content)
    if (syntax) topic.syntax = syntax

    const example = extractExample(content)
    if (example) topic.example = example

    const attributes = extractAttributes(content)
    if (attributes.length > 0) topic.attributes = attributes

    // Store full content for in-app reading (without frontmatter)
    topic.content = content.trim()

    return topic
  } catch (error) {
    console.error(`  Error processing ${filePath}:`, error.message)
    return null
  }
}

/**
 * Recursively scan a directory for markdown files
 */
function scanDirectory(dirPath, basePath = '') {
  const topics = []

  if (!fs.existsSync(dirPath)) {
    console.log(`  Directory not found: ${dirPath}`)
    return topics
  }

  const entries = fs.readdirSync(dirPath, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)
    const relativePath = basePath ? `${basePath}/${entry.name}` : entry.name

    if (entry.isDirectory()) {
      topics.push(...scanDirectory(fullPath, relativePath))
    } else if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'README.md') {
      const topic = processFile(fullPath, relativePath)
      if (topic) {
        topics.push(topic)
      }
    }
  }

  return topics
}

/**
 * Build category index from topics
 */
function buildCategoryIndex(topics) {
  const categories = {
    form: new Set(),
    template: new Set(),
    feed: new Set(),
    all: new Set()
  }

  for (const topic of topics) {
    const context = topic.context || 'all'
    categories[context]?.add(topic.category)
    if (context === 'all') {
      categories.form.add(topic.category)
      categories.template.add(topic.category)
      categories.feed.add(topic.category)
    }
  }

  return {
    form: [...categories.form].sort(),
    template: [...categories.template].sort(),
    feed: [...categories.feed].sort(),
    all: [...categories.all].sort()
  }
}

/**
 * Main build function
 */
async function build() {
  const options = parseArgs()

  console.log('XModPro Help JSON Builder')
  console.log('='.repeat(40))
  console.log(`Output: ${options.output}`)
  console.log(`Minify: ${options.minify}`)
  console.log('')

  const topics = []

  // Process content directories
  for (const dir of CONFIG.contentDirs) {
    console.log(`Scanning ${dir}/...`)
    const dirPath = path.join(rootDir, dir)
    const dirTopics = scanDirectory(dirPath, dir)
    topics.push(...dirTopics)
    console.log(`  Found ${dirTopics.length} topics`)
  }

  // Process root-level files
  console.log('Scanning root files...')
  let rootCount = 0
  for (const file of CONFIG.rootFiles) {
    const filePath = path.join(rootDir, file)
    if (fs.existsSync(filePath)) {
      const topic = processFile(filePath, file)
      if (topic) {
        topics.push(topic)
        rootCount++
      }
    }
  }
  console.log(`  Found ${rootCount} topics`)

  // Build output
  const output = {
    version: CONFIG.version,
    generated: new Date().toISOString(),
    topicCount: topics.length,
    categories: buildCategoryIndex(topics),
    topics: topics.sort((a, b) => a.title.localeCompare(b.title))
  }

  // Write output file
  const outputPath = path.join(rootDir, options.output)
  const jsonContent = options.minify
    ? JSON.stringify(output)
    : JSON.stringify(output, null, 2)

  fs.writeFileSync(outputPath, jsonContent, 'utf8')

  console.log('')
  console.log('='.repeat(40))
  console.log(`Total topics: ${topics.length}`)
  console.log(`Output size: ${(Buffer.byteLength(jsonContent) / 1024).toFixed(1)} KB`)
  console.log(`Written to: ${outputPath}`)
}

// Run
build().catch(console.error)
