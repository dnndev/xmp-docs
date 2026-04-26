---
id: code-editor
title: Code Editors
category: The Control Panel
context: all
summary: >-
  XMod Pro v5 includes professional-grade code editors built into the Control
  Panel for hand-crafting views, forms, and feeds with syntax highlighting,
  autocomplete, validation, and more.
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
# Code Editors <Badge type="info" text="v5.0" />

XMod Pro v5 includes a professional-grade code editor built right into the Control Panel. There's no need to switch to an external text editor or copy-paste code — you can write and refine your views, feeds, and custom forms in the same place you manage everything else.

What sets this editor apart is that it *understands XMod Pro*. It knows your tags, your tokens, and even your database columns. It highlights your code with XMP-aware syntax coloring, suggests completions as you type, validates your structure in real time, and puts a full tag and token reference right at your fingertips. Combined with [Version History](version-history.md), every save is tracked — so you can experiment freely and roll back if needed.

The editor opens automatically when you select a resource from the [Explorer](explorer.md) or [Dashboard](control-panel.md), and it adapts its features to what you're editing.

## Three Editors, One Foundation

Each resource type has its own editor with context-specific autocomplete, validation, and reference content:

### [Custom Form Editor](custom-form-editor.md)

For hand-coded forms using `<AddForm>` / `<EditForm>` with form controls like `<TextBox>`, `<DropDownList>`, and `<Validate>`. Use this when you need full control over your form's HTML layout and behavior — or after [converting a Form Builder form](form-builder.md#converting-to-a-custom-form) to a custom form.

### [View Editor](view-editor.md)

For creating and editing views using `<xmod:Template>` with data sources, list/detail displays, and view controls like `<xmod:EditLink>` and `<Pager>`. Includes a **Quick Start** wizard to scaffold a view from a database table.

### [Feed Editor](feed-editor.md)

For creating and editing feeds using `<xmod:Feed>` or `<xmod:JsonFeed>`. Define data exports in JSON, RSS, CSV, HTML, or other formats.

## Shared Features

All three editors share the same editing engine and core features:

- **Syntax highlighting** — XMP tokens in orange, tags, HTML, comments, and regions all color-coded. Light and dark themes available.
- **Autocomplete** — Context-aware suggestions for tags, attributes, tokens, database columns, DNN roles, HTML elements, and [snippets](snippets.md). Trigger with **Ctrl+Space**.
- **Real-time validation** — Structural checks run as you type; database checks run on demand. Errors and warnings are displayed inline with gutter indicators and a validation panel. Validation is advisory — it never blocks saving.
- **Code folding** — Collapse template areas, `#region` / `#endregion` blocks, and multi-line tags.
- **Structure Navigator** — A sidebar outline of your document's structure — template areas, form blocks, and regions.
- **Reference Panel** — Searchable tag, token, and snippet reference right next to your code (**Ctrl+Alt+R**).
- **Localization** — Edit localized strings for the current resource.
- **Keyboard shortcuts** — Save, undo/redo, find, wrap selection, and more.

Editor settings (font, theme, indentation, word wrap) are configured in the [Control Panel settings](control-panel.md).
