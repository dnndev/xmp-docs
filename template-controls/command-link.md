---
id: template-command-link
title: 'xmod:CommandLink'
category: Action Links
context: template
summary: A hyperlink that fires one or more commands at other templates on the page. Link variant of [`<xmod:CommandButton>`](command-button.md).
keywords:
  - command
  - link
  - template
since: '1.0'
related:
  - template-command-button
  - template-command-image
---

# `<xmod:CommandLink>`

`<xmod:CommandLink>` renders a hyperlink that fires one or more `<Command>` child tags — same behavior as [`<xmod:CommandButton>`](command-button.md), just rendered as a link rather than a push-button.

::: info Sibling variants
- [`<xmod:CommandButton>`](command-button.md) — push-button
- [`<xmod:CommandImage>`](command-image.md) — clickable image
:::

## Example

```html {5-9}
<xmod:Template Id="Employees">
  <ListDataSource CommandText="SELECT * FROM Employees" />
  <ItemTemplate>
    [[FirstName]] [[LastName]] —
    <xmod:CommandLink Text="View Profile">
      <Command Type="Detail" Target="EmployeeProfile">
        <Parameter Name="EmployeeId" Value="[[EmployeeId]]" />
      </Command>
    </xmod:CommandLink>
  </ItemTemplate>
</xmod:Template>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| ID | string | | Unique identifier for the link |
| Text | string | | Caption displayed on the link |
| Ajax | `True` `False` | `False` | When `True`, the commands run via async postback. Requires `ID` set _(since v2.6)_ |
| Redirect | URL \| `.` | | After the commands run, redirect the user to this URL |
| RedirectMethod | `Get` `Post` | `Get` | HTTP method used for the redirect |
| CssClass | string | | CSS class name(s) |
| Style | string | | Inline CSS |
| Width | [size](../unit-types.md) | | Width of the link |
| Height | [size](../unit-types.md) | | Height of the link |
| ToolTip | string | | Hover tooltip |
| Visible | `True` `False` | `True` | Shows or hides the link |
| OnClientClick | JavaScript | | Client-side script to run on click. Returning `false` cancels the action |
| AccessKey | string | | Keyboard shortcut character |
| Enabled | `True` `False` | `True` | When `False`, the link is disabled |
| TabIndex | integer | | Tab order for keyboard navigation |

<details>
<summary>Deprecated Properties (styling)</summary>

`BackColor`, `BorderColor`, `BorderStyle`, `BorderWidth`, `Font-*`, `ForeColor` — use `CssClass` or `Style` instead.

</details>

## Child Tags

Same as [`<xmod:CommandButton>`](command-button.md#child-command) — required `<Command Target Type Name>` tags with optional `<Parameter>` children.
