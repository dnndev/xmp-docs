---
id: template-command-button
title: 'xmod:CommandButton'
category: Action Links
context: template
summary: A push-button that fires one or more commands at other templates on the page — refreshing their list views, opening their detail views, or triggering a custom command on the parent template.
keywords:
  - command
  - button
  - template
since: '1.0'
related:
  - command-image
  - command-link
---

# `<xmod:CommandButton>`

`<xmod:CommandButton>` is the most flexible action button in the template family. When clicked, it fires one or more `<Command>` child tags. Each command targets another `<xmod:Template>` (or `<xmod:DataList>`) by ID and triggers one of its commands — list refresh, detail open, custom command, etc. — passing parameter values along.

This is what makes side-by-side master/detail layouts possible: a button in the master template can refresh the detail template with the clicked row's parameters.

::: info Sibling variants
- [`<xmod:CommandImage>`](command-image.md) — same behavior, rendered as a clickable image
- [`<xmod:CommandLink>`](command-link.md) — same behavior, rendered as a hyperlink
:::

## Example

A Departments template with a button per department that, when clicked, refreshes both the Employees template (with the selected department's ID) and resets the EmployeeProfile template's detail view:

```html {3-10}
<xmod:Template Id="Departments">
  <ListDataSource CommandText="SELECT DepartmentId, DepartmentName FROM Departments ORDER BY DepartmentName" />
  <ItemTemplate>
    <xmod:CommandButton Text="[[DepartmentName]]">
      <Command Target="Employees" Type="List">
        <Parameter Name="DepartmentId" Value="[[DepartmentId]]" />
      </Command>
      <Command Target="EmployeeProfile" Type="Detail">
        <Parameter Name="EmployeeId" Value="-1" />
      </Command>
    </xmod:CommandButton>
  </ItemTemplate>
</xmod:Template>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| ID | string | | Unique identifier for the button |
| Text | string | | Caption displayed on the button |
| Ajax | `True` `False` | `False` | When `True`, the commands run via async postback. Requires `ID` set _(since v2.6)_ |
| [Redirect](#prop-redirect) | URL \| `.` | | After the commands run, redirect the user to this URL |
| RedirectMethod | `Get` `Post` | `Get` | HTTP method used for the redirect |
| CssClass | string | | CSS class name(s) |
| Style | string | | Inline CSS |
| Width | [size](../unit-types.md) | | Width of the button |
| Height | [size](../unit-types.md) | | Height of the button |
| ToolTip | string | | Hover tooltip |
| Visible | `True` `False` | `True` | Shows or hides the button |
| OnClientClick | JavaScript | | Client-side script to run on click. Returning `false` cancels the action |
| AccessKey | string | | Keyboard shortcut character |
| Enabled | `True` `False` | `True` | When `False`, the button is disabled |
| TabIndex | integer | | Tab order for keyboard navigation |

<details>
<summary>Deprecated Properties (styling)</summary>

`BackColor`, `BorderColor`, `BorderStyle`, `BorderWidth`, `Font-*`, `ForeColor` — use `CssClass` or `Style` instead.

</details>

## Child Tags

| Tag | Required | Description |
|-----|----------|-------------|
| [`<Command>`](#child-command) | required | One command to fire when the button is clicked. Add as many as needed |

### <span id="child-command">`<Command>`</span>

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| Target <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | template ID | | The `Id` of the `<xmod:Template>` (or `<xmod:DataList>`) the command runs against |
| Type <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | `List` `Detail` `Add` `Edit` `Delete` `Custom` | | Which command to run on the target |
| Name | string | | Used when `Type="Custom"` — the `CommandName` of the matching `<DataCommand>` in the target's `<CustomCommands>` |

::: warning No transaction
Commands run sequentially, but they're not wrapped in a transaction. If a later command fails, the earlier ones are not rolled back.
:::

Each `<Command>` accepts `<Parameter>` child tags that fill the target's command parameters:

```html
<Command Target="Employees" Type="List">
  <Parameter Name="DepartmentId" Value="[[DepartmentId]]" />
</Command>
```

| Parameter attribute | Values | Default | Description |
|---------------------|--------|---------|-------------|
| Name <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Parameter name (matches `@param` in the target's command) |
| Value | string \| token | | Parameter value |

See the [`<Parameter>` reference](../form-controls/parameter.md) for the full attribute list (`DefaultValue`, `Alias`, `DataType`, `Size`, `Direction`).

## Custom Commands

`Type="List"`, `Type="Detail"`, `Type="Add"`, `Type="Edit"`, and `Type="Delete"` fire the target template's built-in commands — its `<ListDataSource>`, `<DetailDataSource>`, etc. **`Type="Custom"`** is the escape hatch: it lets you fire a *named* command that you define yourself, for one-off actions that don't fit the CRUD shape.

You define custom commands inside the target template's `<CustomCommands>` block. Each one is a `<DataCommand>` with its own `CommandName`, `CommandText` (any SQL or stored proc), and `<Parameter>` children. After the command runs, the target template re-renders its current view — so a button that flips a flag in the database can immediately show the updated row.

```html {5-10,14-18}
<xmod:Template Id="Articles">
  <ListDataSource CommandText="SELECT ArticleId, Headline, Published FROM Articles
                                ORDER BY Headline" />

  <CustomCommands>
    <DataCommand CommandName="TogglePublished"
                 CommandText="UPDATE Articles SET Published = 1 - Published WHERE ArticleId = @ArticleId">
      <Parameter Name="ArticleId" DataType="Int32" />
    </DataCommand>
  </CustomCommands>

  <ItemTemplate>
    [[Headline]] — [[=If(Published, 'published', 'draft')]]
    <xmod:CommandButton Text="[[=If(Published, 'Unpublish', 'Publish')]]">
      <Command Name="TogglePublished" Type="Custom">
        <Parameter Name="ArticleId" Value="[[ArticleId]]" />
      </Command>
    </xmod:CommandButton>
  </ItemTemplate>
</xmod:Template>
```

How the pieces fit together:

1. The `<CustomCommands>` block (highlighted lines 5-10) defines a single named command, `TogglePublished`. It takes one parameter, `ArticleId`, and flips the `Published` bit on that row.
2. The `<xmod:CommandButton>` (highlighted lines 14-18) fires it. The `<Command>` tag's `Name` attribute matches the `CommandName` of the `<DataCommand>` — *not* `CommandName`, just `Name`. `Type="Custom"` is what tells XMP to look in `<CustomCommands>` rather than running a built-in.
3. The button passes the current row's `ArticleId` along, so the SQL knows which row to update.
4. After the command runs, the Articles template re-renders its list, and the row reflects the new `Published` value.

::: tip Targeting another template
Custom commands work cross-template too — set `Target="OtherTemplateId"` on the `<Command>` tag and it'll fire the named command on that template instead. This is handy for a settings template that has buttons modifying a separate data template.
:::

::: warning Don't confuse the two `Name` attributes
The `<Command Name="...">` attribute matches the `<DataCommand CommandName="...">` value. They're spelled differently — `Name` on the firing side, `CommandName` on the defining side. Tag misspellings (`<Command CommandName="...">`) silently fail to find a match and the button does nothing.
:::

For the full surface of `<CustomCommands>` and `<DataCommand>` (alternate connection strings, output parameters), see [`<xmod:Template>`](template.md#child-customcommands).

## Property Details

*   <span id="prop-redirect">**Redirect**</span>: After the commands run, navigate to this URL. Use a single period (`.`) as a shortcut for "the current page".
