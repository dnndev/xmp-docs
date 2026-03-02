---
id: form-builder
title: Form Builder
category: Core Concepts
context: all
summary: >-
  The Form Builder is a visual editor for creating data entry forms without
  writing code. Add controls, connect to a database, configure validation, and
  apply themes — all with a modern, keyboard-friendly interface.
since: '2.0'
keywords:
  - form builder
  - visual editor
  - controls
  - data source
  - auto-generate
  - theme
  - validation
  - slash command
---
# Form Builder

The Form Builder lets you create data entry forms visually — without writing any code. You add controls by name, configure their properties in a sidebar panel, connect the form to a database table, and apply a theme. XMod Pro handles the rest.

<img src="./img/v5/form-builder-overview.png" alt="Form Builder showing the canvas with several controls and the Property Panel on the right" width="700" />

In v5, the Form Builder has been completely redesigned. It's faster, more capable, and built around a keyboard-friendly workflow. You can build a fully functional, styled, data-bound form in minutes — and if you ever need more control, you can switch to the [Code Editor](code-editor.md) at any time.

::: info Host Access Only
The Form Builder is only available to Host (SuperUser) accounts, accessed through the [Control Panel](control-panel.md).
:::

## Creating a New Form

To create a new form, click the **+** button in the [Control Panel](control-panel.md) toolbar and choose **Form**. You'll be asked for a name and whether to start with the Form Builder or a custom (code) form.

If you'd like a head start, you can **auto-generate a form from a database table** — select a table, pick the columns you want, and the Form Builder creates the controls, data commands, and layout for you. From there, you can customize everything.

## Adding Controls

There are two ways to add a control:

- **Press `/`** (the slash key) anywhere in the Form Builder to open the Control Palette
- **Click the `+` button** in the toolbar

<!-- SCREENSHOT: form-builder-control-palette — The Control Palette showing categories and search results -->

The Control Palette is a searchable menu of all available controls. Start typing to filter by name — it uses fuzzy matching, so you don't need to spell the exact control name. Controls are organized into categories like Input, Selection, Layout, Buttons, Validation, and more.

Select a control and it's added to your form immediately. The control's label becomes editable right away, so you can name it without an extra click.

::: tip
The `/` shortcut works like the slash commands in tools like Notion or Slack. It's the fastest way to build a form — just type `/text` for a TextBox, `/drop` for a DropDownList, and so on.
:::

## The Canvas

The canvas is the main area where your form takes shape. Each control appears as a row showing its label, an approximation of the control's appearance, and a drag handle.

You can:

- **Select a control** by clicking it — this opens its properties in the sidebar
- **Edit a label** by clicking the label text directly on the canvas
- **Reorder controls** by dragging the handle on the left side
- **Nest controls** by dragging them into container controls like Rows, Panels, or TabStrips
- **Navigate with the keyboard** — use the up/down arrow keys to move between controls

Right-click a control (or use its toolbar) to access additional options: **Edit**, **Duplicate**, **Move Up/Down**, and **Delete**.

## The Property Panel

When you select a control on the canvas, its properties appear in a collapsible sidebar on the right. This is where you configure everything about the control.

As shown in the overview screenshot, properties are organized into collapsible sections — **Label**, **Data**, **Other**, **Legacy Properties**, and **Custom Properties**. Common properties include:

- **Label** — The text displayed next to the control
- **Data Field** — The database column this control reads from and writes to
- **Data Type** — The type of data (string, integer, date, etc.)
- **Max Length** — For text controls, the character limit
- **CSS Class** — Apply a CSS class for custom styling
- **Style** — Inline CSS styles

The available properties vary by control type. A DropDownList, for example, will have properties for configuring its list items and data source, while a TextBox will have properties for placeholder text and input masks.

The panel is resizable — drag its left edge to make it wider or narrower, or collapse it entirely to maximize your canvas space.

## Connecting to a Database

Most forms need to read from and write to a database. The Form Builder handles this through the **Data Source** configuration.

Click the **Data Source** button to open the dialog where you can:

1. **Choose a database** — Your DNN database or an external SQL Server database (just supply the connection string)
2. **Select a table** — Pick from a list of available tables
3. **Choose columns** — Select which columns to include
4. **Set the key field** — Identify the column that uniquely identifies each record (needed for editing)

Once configured, the Form Builder auto-generates the SQL commands to insert, update, and retrieve records. It also maps your database columns to form controls — setting the `DataField`, `DataType`, and `MaxLength` properties automatically.

### Auto-Generating a Form

The fastest way to build a data-bound form is to let the Form Builder create it for you:

1. Open the Data Source dialog
2. Select your table and columns
3. Click **Generate Form**

The Form Builder analyzes your table's schema and creates the appropriate controls — TextBoxes for text columns, DateInputs for date columns, CheckBoxes for boolean columns, and so on. It's a great starting point that you can then customize.

## Validation

To add validation to a control, select it and look for the **Validation** section in the property panel. You can add rules like:

- **Required** — The field must have a value
- **Email** — The value must be a valid email address
- **Pattern** — The value must match a regular expression
- **Range** — The value must fall within a min/max range
- **Compare** — The value must match another field

Each rule can have a custom error message. Validation errors are displayed to the user when they submit the form.

The toolbar shows a real-time **validation indicator** — a badge showing how many errors or warnings exist in your form definition. Click it to see the details and navigate to the issue.

## Layout and Containers

For more complex form layouts, you can use container controls to organize your form into sections:

- **Row** — Arrange controls in a multi-column grid layout (based on a 12-column grid)
- **Panel** — Group controls inside a bordered container
- **TabStrip** — Organize controls into tabbed sections
- **FieldGroup** — Group related fields with a legend/heading
- **Section** — A collapsible section

Drag controls into a container to nest them, or drag them out to move them back to the root level.

## Themes and Styling

The Form Builder includes a theming system that lets you style your forms without writing CSS.

<!-- SCREENSHOT: form-builder-themes — Form settings dialog showing theme selection and CSS variable customization -->

Open the **Form Settings** dialog to configure:

- **Theme** — Choose from a library of built-in themes, or create your own
- **Label Position** — Top (above the control), Left (beside it), Inside (floating placeholder), or None
- **CSS Variable Customization** — Fine-tune the theme by adjusting variables for spacing, typography, borders, button colors, and more
- **Live Preview** — See your changes in real time as you adjust settings

You can save custom themes for reuse across your forms.

## Previewing Your Form

To see how your form will look and behave at runtime, use the **Preview** button. This opens a live preview that renders the form exactly as it would appear on your DNN page — including validation, styling, and data source connections.

## Converting to a Custom Form

The Form Builder is designed for the most common form-building scenarios. When you need more control — custom HTML layout, JavaScript interactivity, or advanced tag configurations — you can convert your form to a **custom form** and continue working in the [Code Editor](code-editor.md).

This is a one-way conversion that gives you full control over the form's HTML, CSS, and XMP tags. The Form Builder generates clean, well-structured code as a starting point.

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| **/** | Open the Control Palette |
| **Arrow Up / Down** | Navigate between controls |
| **Enter** | Edit the selected control's label |
| **Alt+Enter** | Toggle focus between canvas and property panel |
| **Ctrl+S** / **Cmd+S** | Save the form |
| **Escape** | Close dialogs and menus |

## Next Steps

- **[Forms](forms.md)** — Learn about XMod Pro forms as a concept
- **[Code Editor](code-editor.md)** — Edit forms as code for maximum flexibility
- **[The Explorer](explorer.md)** — Browse and manage all your resources
- **[Control Panel](control-panel.md)** — Overview of the XMod Pro Control Panel
