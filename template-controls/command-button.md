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

## Property Details

*   <span id="prop-redirect">**Redirect**</span>: After the commands run, navigate to this URL. Use a single period (`.`) as a shortcut for "the current page".
