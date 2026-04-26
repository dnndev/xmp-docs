---
id: template-command-image
title: 'xmod:CommandImage'
category: Action Links
context: template
summary: A clickable image that fires one or more commands at other templates on the page. Image variant of [`<xmod:CommandButton>`](command-button.md).
keywords:
  - command
  - image
  - template
since: '1.0'
related:
  - command-button
  - command-link
---

# `<xmod:CommandImage>`

`<xmod:CommandImage>` renders a clickable image that fires one or more `<Command>` child tags — same behavior as [`<xmod:CommandButton>`](command-button.md), just rendered as an image rather than a push-button.

::: info Sibling variants
- [`<xmod:CommandButton>`](command-button.md) — push-button
- [`<xmod:CommandLink>`](command-link.md) — hyperlink
:::

## Example

```html {5-9}
<xmod:Template Id="Employees">
  <ListDataSource CommandText="SELECT * FROM Employees" />
  <ItemTemplate>
    <strong>[[FirstName]] [[LastName]]</strong>
    <xmod:CommandImage AlternateText="View Profile" ImageUrl="~/images/profile.gif">
      <Command Type="Detail" Target="EmployeeProfile">
        <Parameter Name="EmployeeId" Value="[[EmployeeId]]" />
      </Command>
    </xmod:CommandImage>
  </ItemTemplate>
</xmod:Template>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| ID | string | | Unique identifier for the image button |
| ImageUrl | URL | | Path to the image file. Tilde (`~`) supported |
| AlternateText | string | | Alt text for screen readers and search engines |
| ImageAlign | `NotSet` `Left` `Right` `Baseline` `Top` `Middle` `Bottom` `AbsBottom` `AbsMiddle` `TextTop` | `NotSet` | Image alignment relative to surrounding content |
| Ajax | `True` `False` | `False` | When `True`, the commands run via async postback. Requires `ID` set _(since v2.6)_ |
| Redirect | URL \| `.` | | After the commands run, redirect the user to this URL |
| RedirectMethod | `Get` `Post` | `Get` | HTTP method used for the redirect |
| CssClass | string | | CSS class name(s) |
| Style | string | | Inline CSS |
| Width | [size](../unit-types.md) | | Width of the image |
| Height | [size](../unit-types.md) | | Height of the image |
| ToolTip | string | | Hover tooltip |
| Visible | `True` `False` | `True` | Shows or hides the control |
| OnClientClick | JavaScript | | Client-side script to run on click. Returning `false` cancels the action |
| AccessKey | string | | Keyboard shortcut character |
| Enabled | `True` `False` | `True` | When `False`, the control is disabled |
| TabIndex | integer | | Tab order for keyboard navigation |

<details>
<summary>Deprecated Properties (styling)</summary>

`BackColor`, `BorderColor`, `BorderStyle`, `BorderWidth`, `Font-*`, `ForeColor` — use `CssClass` or `Style` instead.

</details>

## Child Tags

Same as [`<xmod:CommandButton>`](command-button.md#child-command) — required `<Command Target Type Name>` tags with optional `<Parameter>` children.
