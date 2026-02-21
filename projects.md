---
id: projects
title: Projects
category: Core Concepts
context: all
summary: >-
  How to group related views, forms, and feeds into projects for easier
  organization and management.
since: '5.0'
keywords:
  - projects
  - organization
  - grouping
---
# Projects

A **project** groups related views, forms, and feeds together so you can manage them as a unit. Think of it like a folder — if you're building a staff directory, you might create a "Staff Directory" project and add the staff list view, the staff edit form, and the department data feed to it.

Projects are purely organizational. They don't change where your files are stored or how they work — they just make it easier to find things as your collection of views, forms, and feeds grows.

## What's in a Project?

A project can contain any combination of:

- **Views** — the data displays for your solution
- **Forms** — the data entry forms
- **Feeds** — the data feeds (JSON, CSV, etc.)

Each project also has a **name** and an optional **description** to help you remember what it's for.

## Projects Are Optional

Views, forms, and feeds don't need to belong to a project. They exist independently and work the same whether or not they're part of one. You can also add the same item to multiple projects — for example, a shared "Departments" feed might appear in both your "Staff Directory" and "Event Calendar" projects.

Projects become more valuable as your site grows. With a handful of views and forms, you can find everything quickly. Once you have dozens, projects keep things organized.

## Creating a Project

You create and manage projects from the [Explorer](explorer.md) in the control panel:

1. Click **New Project** to create one
2. Give it a name and an optional description
3. Add views, forms, and feeds from the dropdowns in each section

You can add and remove items from a project at any time. Removing an item from a project doesn't delete it — it just removes the association.

<!-- TODO: screenshot of the project dashboard showing a project with views, forms, and feeds -->

## Deleting a Project

When you delete a project, you'll be asked whether to also delete the views, forms, and feeds that belong to it. XMod Pro checks each item before deleting:

- Items that belong to **other projects** are kept
- Items that are **assigned to a module** on a page are kept
- Only items that are exclusive to the project being deleted can be removed

This safety check prevents you from accidentally breaking a live page.

## Portal and Global Scope

Projects can be either **portal-specific** or **global**:

- **Portal projects** are visible only within the current DNN portal. This is the default and what you'll use most of the time.
- **Global projects** are available across all portals on the same DNN installation. This is useful when multiple portals share the same views, forms, or feeds.

You can change a project's scope after creating it. When you do, XMod Pro copies the project and its resources to the new scope.

## Next Steps

- **[The Explorer](explorer.md)** — Where you create and manage projects
- **[Views](views.md)** — Displaying data on the page
- **[Forms](forms.md)** — Collecting data from visitors
- **[Feeds](feeds.md)** — Supplying data in different formats
