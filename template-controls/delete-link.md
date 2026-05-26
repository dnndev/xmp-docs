---
id: template-delete-link
title: 'xmod:DeleteLink'
category: Action Links
context: template
summary: A hyperlink inside a `<xmod:Template>` (or `<xmod:DataList>`) that runs the parent's `<DeleteCommand>`. Link variant of [`<xmod:DeleteButton>`](delete-button.md).
keywords:
  - delete
  - link
  - template
since: '1.0'
related:
  - template-delete-button
  - template-delete-image
---

# `<xmod:DeleteLink>`

`<xmod:DeleteLink>` renders a hyperlink that deletes the current row — same behavior as [`<xmod:DeleteButton>`](delete-button.md), just rendered as a link rather than a push-button.

::: info Sibling variants
- [`<xmod:DeleteButton>`](delete-button.md) — push-button
- [`<xmod:DeleteImage>`](delete-image.md) — clickable image
:::

## Example

```html {7-10}
<xmod:Template Id="Employees">
  <ListDataSource CommandText="SELECT * FROM Employees" />
  <DeleteCommand CommandText="DELETE FROM Employees WHERE EmployeeId = @EmpID">
    <Parameter Name="EmployeeId" Alias="EmpID" />
  </DeleteCommand>
  <ItemTemplate>
    <strong>[[FirstName]] [[LastName]]</strong>
    <xmod:DeleteLink Text="Delete"
        OnClientClick="return confirm('Are you sure you want to delete this employee?');">
      <Parameter Name="EmployeeId" Alias="EmpID" Value="[[EmployeeId]]" DataType="Int32" />
    </xmod:DeleteLink>
  </ItemTemplate>
</xmod:Template>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| ID | string | | Unique identifier for the link |
| Text | string | | Caption displayed on the link |
| Ajax | `True` `False` | `False` | When `True`, the delete runs via async postback. Requires `ID` set _(since v2.6)_ |
| CssClass | string | | CSS class name(s) |
| Style | string | | Inline CSS |
| Width | [size](../unit-types.md) | | Width of the link |
| Height | [size](../unit-types.md) | | Height of the link |
| ToolTip | string | | Hover tooltip |
| Visible | `True` `False` | `True` | Shows or hides the link |
| OnClientClick | JavaScript | | Client-side script to run on click. Returning `false` cancels the delete |
| AccessKey | string | | Keyboard shortcut character |
| Enabled | `True` `False` | `True` | When `False`, the link is disabled |
| TabIndex | integer | | Tab order for keyboard navigation |

<details>
<summary>Deprecated Properties (styling)</summary>

Same set as [`<xmod:DeleteButton>`](delete-button.md) — `BackColor`, `BorderColor`, `BorderStyle`, `BorderWidth`, `Font-*`, `ForeColor`. Use `CssClass` or `Style` instead.

</details>

## Child Tags

Same as [`<xmod:DeleteButton>`](delete-button.md#child-parameter) — required `<Parameter Name Alias Value DataType>` tags supply values for the parent's `<DeleteCommand>`.
