---
id: code-editor
title: Code Editor
category: The Control Panel
context: all
summary: >-
  The Code Editor is a full-featured editor built into the Control Panel for
  hand-crafting views, forms, and feeds with syntax highlighting, autocomplete,
  validation, and more.
since: '5.0'
keywords:
  - code editor
  - syntax highlighting
  - snippets
  - autocomplete
  - validation
  - folding
  - regions
---
# Code Editor

XMod Pro v5 includes a professional-grade code editor built right into the Control Panel. There's no need to switch to an external text editor or copy-paste code — you can write and refine your views, feeds, and custom forms in the same place you manage everything else.

<!-- SCREENSHOT: code-editor-overview — Editor with a view open, toolbar visible, showing syntax-highlighted XMP code -->

What sets this editor apart is that it *understands XMod Pro*. It knows your tags, your tokens, and even your database columns. It highlights your code with XMP-aware syntax coloring, suggests completions as you type, validates your structure in real time, and puts a full tag and token reference right at your fingertips. Combined with [Version History](version-history.md), every save is tracked — so you can experiment freely and roll back if needed.

The editor opens automatically when you select a resource from the [Explorer](explorer.md) or [Dashboard](control-panel.md).

## The Toolbar

The toolbar runs along the top of the editor. Here's what each button does, from left to right:

<!-- SCREENSHOT: code-editor-toolbar — Closeup of the editor toolbar with all buttons visible -->

- **Fold All** — Collapse all foldable sections in the code
- **Unfold All** — Expand everything back out
- **Format Code** — Clean up the indentation of the selected code (or all code if nothing is selected)
- **Structure Navigator** — Toggle a sidebar showing the document's structure and regions ([details below](#structure-navigator))
- **Reference Panel** — Toggle a sidebar with tag and token reference ([details below](#reference-panel))
- **Localization** — Edit localization strings for the current resource
- **Validation** — Shows the count of errors and warnings. Click to open the [validation panel](#validation).
- **Quick Start** (views only) — Launch the View Quick Start wizard to generate a view from a data source
- **Reload** — Discard unsaved changes and reload the code from the server
- **Save** — Save your changes (also available with **Ctrl+S** / **Cmd+S**)

The status bar at the bottom of the editor shows the line count, last modified date, available keyboard shortcuts, and a word wrap toggle.

## Syntax Highlighting

The editor highlights your code to make it easier to read and spot mistakes:

- **XMP tokens** like `[[FieldName]]`, `[[User:ID]]`, and `[[Portal:Name]]` are highlighted in orange
- **XMP tags** like `<xmod:Template>` and `<xmod:TextBox>` are highlighted as XML tags
- **Comments** using `[-- ... --]` syntax are dimmed
- **HTML tags**, attributes, and strings all get their own colors
- **Placeholders** like `{CommandName}` are highlighted distinctly
- **Regions** (`#region` / `#endregion`) are visually marked for easy identification

The editor supports both light and dark themes — you can switch between them in [Settings](#settings).

## Autocomplete

The editor doesn't just offer generic text completion — it knows what you're building and suggests the right things at the right time. Start typing a tag name, and it offers XMP controls with their attributes. Type `[[` and it suggests tokens. If your resource has a data source configured, it even suggests your database column names.

<!-- SCREENSHOT: code-editor-autocomplete — Autocomplete popup showing XMP tag suggestions -->

Suggestions include:

- **XMP form controls** — `<xmod:TextBox>`, `<xmod:DropDownList>`, and all other form controls
- **XMP template tags** — `<xmod:Template>`, `<xmod:Feed>`, and related tags
- **Tag attributes** — Context-aware suggestions for the current tag's attributes
- **Attribute values** — Known values for attributes like `DataType`, `Orientation`, etc.
- **Tokens** — `[[FieldName]]`, `[[User:...]]`, `[[Portal:...]]`, and other token types
- **Database columns** — Column names from your resource's data source
- **DNN roles** — Portal role names for `ViewRoles` and similar attributes
- **HTML elements** — Standard HTML tags
- **Snippets** — Your saved code snippets, ready to insert (see [Snippets](snippets.md))

Autocomplete appears automatically as you type, or you can trigger it manually with **Ctrl+Space**.

## Code Folding

You can collapse sections of code to focus on the part you're working on. Click the fold indicator in the gutter (left margin) next to any foldable section, or use the **Fold All** / **Unfold All** toolbar buttons.

Foldable sections include:

- **`#region` / `#endregion` blocks** — Define your own named, collapsible sections anywhere in your code
- **Template areas** — `<HeaderTemplate>`, `<ItemTemplate>`, `<DetailTemplate>`, `<FooterTemplate>`, and others
- **XML/HTML tags** — Any tag pair that spans multiple lines

::: tip Using Regions
Regions are a great way to organize long templates. Wrap a section in `#region Section Name` and `#endregion` to make it collapsible:

```xml
#region List View Header
<div class="header">
  <h2>My Items</h2>
</div>
#endregion
```
:::

## Structure Navigator

Click the **Structure Navigator** button in the toolbar to open a sidebar that shows your document's outline. It lists all regions and template areas, giving you a bird's-eye view of the document structure.

<!-- SCREENSHOT: code-editor-structure-navigator — Structure Navigator sidebar showing regions and template areas -->

Click any item in the list to jump directly to that section. This is especially useful in long view definitions with multiple template areas and regions.

## Reference Panel

No need to leave the editor to look something up. Click the **Reference Panel** button in the toolbar (or press **Ctrl+Alt+R** / **Cmd+Alt+R**) to open a sidebar with searchable reference documentation right next to your code.

<!-- SCREENSHOT: code-editor-reference-panel — Reference Panel sidebar showing available tags and tokens -->

The panel includes:

- **Tags & Attributes** — Every available XMP tag and its attributes, filtered to the current context
- **Tokens** — A complete list of token types and their syntax
- **Snippets** — Your saved code snippets, ready to insert with a click

The reference content updates automatically based on what you're editing — when you're working on a form, you'll see form controls; when you're working on a view, you'll see template tags. It's like having the documentation always open, always relevant.

## Validation

One of the most useful features of the editor is real-time validation. Instead of saving your code, loading the page, and discovering a problem there, the editor catches structural issues as you type and highlights them right in the code.

- **Errors** appear with red indicators in the gutter and wavy red underlines
- **Warnings** appear with orange indicators and orange underlines
- **Info messages** appear with blue indicators

<!-- SCREENSHOT: code-editor-validation — Validation indicators showing errors and warnings in the gutter and inline -->

The validation badge in the toolbar shows a count of current errors and warnings. Click it to open the **validation panel**, which lists all issues with their line numbers. Click any issue to jump to that line.

Hover over a highlighted section to see a tooltip describing the issue.

::: info Context-Aware Validation
The editor validates differently depending on what you're editing. For views, it checks the `<xmod:Template>` structure. For feeds, it checks the `<xmod:Feed>` or `<xmod:JsonFeed>` structure. This means it catches mistakes specific to each resource type — not just generic XML errors.
:::

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| **Ctrl+S** / **Cmd+S** | Save |
| **Ctrl+Z** / **Cmd+Z** | Undo |
| **Ctrl+Shift+Z** / **Cmd+Shift+Z** | Redo |
| **Ctrl+F** / **Cmd+F** | Find |
| **Ctrl+Space** | Trigger autocomplete |
| **Ctrl+Alt+W** / **Cmd+Alt+W** | Wrap selection with a tag |
| **Ctrl+Alt+R** / **Cmd+Alt+R** | Toggle Reference Panel |
| **Tab** / **Shift+Tab** | Indent / outdent selected lines |

The current keyboard shortcuts are also displayed in the editor's status bar.

## Settings

Editor settings are part of the global [Control Panel settings](control-panel.md). You can configure:

- **Font** — Choose between Fira Code and JetBrains Mono
- **Font Size** — Adjust the text size
- **Theme** — Light or dark mode
- **Indentation** — Tabs or spaces, and the tab size
- **Word Wrap** — Toggle word wrapping on or off (also available from the status bar)

## Next Steps

- **[Control Panel](control-panel.md)** — Overview of the XMod Pro Control Panel
- **[The Explorer](explorer.md)** — Browse and manage your resources
- **[Snippets](snippets.md)** — Create reusable code snippets
- **[Version History](version-history.md)** — Browse, compare, and restore previous versions
