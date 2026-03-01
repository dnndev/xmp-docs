---
id: control-panel
title: Control Panel
category: The Control Panel
context: all
summary: >-
  The Control Panel is your central workspace in XMod Pro — a modern, tab-based
  environment for creating and managing views, forms, feeds, projects, and
  database tables.
since: '5.0'
keywords:
  - control panel
  - dashboard
  - toolbar
  - explorer
  - tabs
  - command palette
  - settings
---
# Control Panel

The Control Panel is the central workspace for everything you build with XMod Pro. From here you can create and edit forms, views, and feeds, manage database tables, organize resources into projects, and access every tool XMod Pro offers — all in a single, modern interface.

<!-- SCREENSHOT: cp-overview — Full Control Panel with Dashboard visible, toolbar at top, showing resource cards and recent work -->

In v5, the Control Panel has been completely redesigned. It now uses a tab-based layout similar to a code editor like VS Code — you can have multiple resources open at once, switch between them instantly, and pick up right where you left off. Your open tabs are remembered between sessions.

::: info Host Access Only
The Control Panel is only available to Host (SuperUser) accounts.
:::

## Accessing the Control Panel

To open the Control Panel:

1. Log in as a Host (SuperUser) account
2. Navigate to any page that has an XMod Pro module
3. Enter **Edit Mode** by clicking the pencil icon at the bottom of the DNN Persona Bar (the sidebar on the left)
4. Select **Control Panel** from the module's action menu

<!-- SCREENSHOT: cp-action-menu — The module action menu showing the Control Panel option -->

## The Toolbar

The toolbar runs across the top of the Control Panel and gives you quick access to every major feature.

<!-- SCREENSHOT: cp-toolbar — The toolbar with all buttons visible -->

From left to right:

- **Home** — Return to the [Dashboard](#the-dashboard)
- **Explorer** — Toggle the [Explorer sidebar](#the-explorer) to browse your resources
- **Command Palette** — Search for any resource by name (also available with **Ctrl+K** / **Cmd+K**)
- **New (+)** — Create a new form, view, feed, or project
- **Help** — Open the built-in help viewer with searchable documentation
- **Database Tools** — Open [Database Tools](database-tools.md) to create and manage tables
- **Version History** — Open [Version History](version-history.md) to browse and restore previous versions
- **Settings** — Open global settings (theme, editor preferences, snippets)
- **Fullscreen** — Expand the Control Panel to fill the browser window
- **Exit** — Close the Control Panel and return to your DNN page

## The Dashboard

The Dashboard is your home screen — the first thing you see when you open the Control Panel. It's designed to get you to what you need quickly.

<!-- SCREENSHOT: cp-dashboard — Dashboard showing resource cards, recent work, and pinned items -->

At the top, you'll see **resource cards** for Forms, Views, Feeds, and Projects. Each card shows a count and offers buttons to browse or create new resources.

Below that, two columns show:

- **Recent Work** — Resources you've opened recently, with timestamps. Click any item to open it immediately.
- **Pinned Items** — Your favorite resources, pinned for quick access. Pin a resource from its context menu in the Explorer.

The Dashboard also provides quick access to the **View Quick Start** wizard, which can generate a complete view from a data source in seconds.

## The Explorer

The Explorer is a slide-out sidebar where you browse, search, and manage all your resources. Click the **Explorer** button in the toolbar to open it.

<!-- SCREENSHOT: cp-explorer — Explorer sidebar open showing the Forms tab with search and filters -->

It's organized into four tabs:

- **[Forms](explorer-forms.md)** — Your form definitions
- **[Views](explorer-views.md)** — Your view definitions
- **[Feeds](explorer-feeds.md)** — Your feed definitions
- **[Projects](explorer-projects.md)** — Your project containers

Each tab includes:

- **Search** — Filter resources by name
- **Filters** — Narrow by scope (Portal / Global), type (Form Builder / Custom), or usage (In Use / Unused)
- **Sorting** — Sort by name, creation date, or last modified date
- **Context menu** — Right-click any resource for options like Open, Rename, Duplicate, Delete, Pin, and View Usage

For full details, see [The Explorer](explorer.md).

## Editor Tabs

When you open a resource, it appears as a tab — just like browser tabs or tabs in a code editor. You can have as many tabs open as you need and switch between them without losing your place.

<!-- SCREENSHOT: cp-tabs — Multiple editor tabs open showing different resource types with color-coded icons -->

Tabs are color-coded by resource type so you can tell them apart at a glance:

| Color | Resource Type |
|-------|--------------|
| Blue | Forms |
| Green | Views |
| Purple | Feeds |
| Cyan | Projects |

Each tab shows a **dirty indicator** (a dot) when it has unsaved changes. You can:

- **Drag tabs** to reorder them
- **Right-click a tab** to close it, close other tabs, or close all saved tabs
- **Close with the X** button on each tab

Your open tabs are **saved between sessions** — when you come back to the Control Panel, the same tabs will be open and ready.

## Command Palette

Press **Ctrl+K** (or **Cmd+K** on Mac) to open the Command Palette — a quick search that lets you find and open any resource by name without touching the Explorer. Just start typing, and results appear instantly.

This is the fastest way to jump to a specific form, view, or feed when you know its name.

## Settings

Click the **gear icon** in the toolbar to open the global settings dialog. Here you can configure:

- **Theme** — Switch between light and dark mode
- **Editor Font** — Choose Fira Code or JetBrains Mono
- **Editor Font Size** — Set your preferred text size
- **Indentation** — Tabs or spaces, and the tab width
- **Snippets** — Manage your code snippet library

These settings apply everywhere in the Control Panel, including the [Code Editor](code-editor.md).

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| **Ctrl+K** / **Cmd+K** | Open Command Palette |
| **Ctrl+S** / **Cmd+S** | Save the current resource (in the editor) |
| **Escape** | Close dialogs and menus |

## Next Steps

- **[The Explorer](explorer.md)** — Browse and manage your resources in detail
- **[Code Editor](code-editor.md)** — The built-in editor for views, feeds, and custom forms
- **[Database Tools](database-tools.md)** — Create and manage database tables
- **[Version History](version-history.md)** — Browse, compare, and restore previous versions
- **[Forms](forms.md)** — Learn about XMod Pro forms
- **[Views](views.md)** — Learn about XMod Pro views
- **[Feeds](feeds.md)** — Learn about XMod Pro feeds
