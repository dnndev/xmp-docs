# XModPro Help Documentation Schema

This document defines the frontmatter schema used in XModPro documentation files. The schema enables both VitePress (public docs) and the in-app help system to use the same source files.

## Frontmatter Schema

Every markdown file should include YAML frontmatter at the top:

```yaml
---
id: unique-identifier        # Required: URL-friendly identifier (lowercase, hyphens)
title: Display Title         # Required: Human-readable title
category: Category Name      # Required: Grouping category
context: form|template|feed|all  # Required: Where this applies
summary: Brief description   # Required: 1-2 sentence description for tooltips/search
since: "1.0"                 # Optional: Version when feature was introduced
keywords: [word1, word2]     # Optional: Search keywords (array)
related: [form-textarea, form-password]  # Optional: full prefixed topic IDs (array) — see ID convention below
deprecated: false            # Optional: Mark as deprecated
deprecatedMessage: "Use X"   # Optional: What to use instead
---
```

## Field Definitions

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier, lowercase with hyphens. **Folder-prefixed** to stay unique across directories — see the ID convention below. Example: `form-dropdown-list` |
| `title` | string | Display title shown in navigation and headers. Example: `DropDownList` |
| `category` | string | Grouping category for organization. See categories below. |
| `context` | enum | Where this control/feature is used: `form`, `template`, `feed`, or `all` |
| `summary` | string | Brief 1-2 sentence description. Used for tooltips and search results. |

### Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `since` | string | Version number when feature was introduced. Quote to preserve as string. |
| `keywords` | array | Additional search terms not in title/summary |
| `related` | array | Full prefixed IDs of related topics for "See Also" links (e.g. `form-textarea`, not `textarea`). Must match a topic's `id` exactly or the link is silently dropped. |
| `deprecated` | boolean | Mark feature as deprecated |
| `deprecatedMessage` | string | Explanation of what to use instead |

### ID Convention

Topic `id`s are **folder-prefixed** so they stay globally unique — the same control name can appear in more than one folder (e.g. an `add-button.md` exists in both `form-controls/` and `template-controls/`). `scripts/add-frontmatter.js` generates ids as:

```
{folder-without-"-controls"}-{filename-without-".md"}
```

| File | Generated `id` |
|------|----------------|
| `form-controls/textbox.md` | `form-textbox` |
| `template-controls/data-list.md` | `template-data-list` |
| `tokens/field.md` | `tokens-field` |
| `getting-started.md` (root) | `getting-started` (no prefix) |

**Because `related` entries are matched against these ids, they must use the full prefixed form too** (`form-textarea`, not `textarea`). A bare slug in `related` won't match any id and the in-app "Related Topics" link is silently dropped. `npm run help:build` reports any `related` entry that fails to resolve.

## Categories

### Form Controls
- `Input Controls` - TextBox, TextArea, Password, etc.
- `List Controls` - DropDownList, ListBox, CheckBoxList, etc.
- `Buttons` - AddButton, UpdateButton, CancelButton, etc.
- `Validation` - All Validate types
- `Data` - ControlDataSource, SelectCommand, etc.
- `Actions` - Email, SilentPost, Redirect, etc.
- `Layout` - Panel, TabStrip, etc.
- `Scripting` - jQueryReady, ScriptBlock, etc.

### Template Controls
- `Display Controls` - DataList, Template, etc.
- `Navigation` - Pager, SearchSort, etc.
- `Action Links` - EditLink, DeleteLink, DetailLink, etc.
- `Conditional` - IfEmpty, IfNotEmpty, etc.

### Tokens
- `Field Tokens` - Data field references
- `User Tokens` - User properties
- `Portal Tokens` - Portal properties
- `Request Tokens` - URL, Form, Cookie values
- `Function Tokens` - DateAdd, Join, etc.

## Content Structure

After frontmatter, documentation should follow this structure:

```markdown
# `<TagName>`

Brief introduction paragraph.

## Syntax
```html
<TagName attribute="value" />
```

## Remarks
* **AttributeName**: Description of the attribute...

## Example
```html
<!-- Example code -->
```
```

## Build Script Output

The build script extracts frontmatter and key sections into `help-content.json`:

```json
{
  "version": "5.0.0",
  "generated": "2024-01-15T10:30:00Z",
  "topics": [
    {
      "id": "form-textbox",
      "title": "Textbox",
      "category": "Input Controls",
      "context": "form",
      "summary": "Single-line text input...",
      "since": "1.0",
      "keywords": ["text", "input"],
      "related": ["form-textarea", "form-password"],
      "syntax": "<Textbox Id=\"...\" />",
      "path": "/form-controls/textbox"
    }
  ],
  "categories": {
    "form": ["Input Controls", "List Controls", ...],
    "template": ["Display Controls", ...],
    "all": [...]
  }
}
```

## Usage in Admin UI

The help system provides:

1. **Contextual Tooltips** - Hover over controls to see `summary`
2. **Quick Reference** - Search and browse topics in sidebar
3. **Full Help Viewer** - Read complete documentation in-app
4. **Deep Links** - Link to specific topics from anywhere
