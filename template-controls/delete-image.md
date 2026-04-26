---
id: template-delete-image
title: 'xmod:DeleteImage'
category: Action Links
context: template
summary: A clickable image inside a `<xmod:Template>` (or `<xmod:DataList>`) that runs the parent's `<DeleteCommand>`. Image variant of [`<xmod:DeleteButton>`](delete-button.md).
keywords:
  - delete
  - image
  - template
since: '1.0'
related:
  - delete-button
  - delete-link
---

# `<xmod:DeleteImage>`

`<xmod:DeleteImage>` renders a clickable image that deletes the current row — same behavior as [`<xmod:DeleteButton>`](delete-button.md), just rendered as an image rather than a push-button.

::: info Sibling variants
- [`<xmod:DeleteButton>`](delete-button.md) — push-button
- [`<xmod:DeleteLink>`](delete-link.md) — hyperlink
:::

## Example

```html {7-11}
<xmod:Template Id="Employees">
  <ListDataSource CommandText="SELECT * FROM Employees" />
  <DeleteCommand CommandText="DELETE FROM Employees WHERE EmployeeId = @EmpID">
    <Parameter Name="EmployeeId" Alias="EmpID" />
  </DeleteCommand>
  <ItemTemplate>
    <strong>[[FirstName]] [[LastName]]</strong>
    <xmod:DeleteImage AlternateText="Delete Employee" ImageUrl="~/images/delete.gif"
        OnClientClick="return confirm('Are you sure you want to delete this employee?');">
      <Parameter Name="EmployeeId" Alias="EmpID" Value="[[EmployeeId]]" DataType="Int32" />
    </xmod:DeleteImage>
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
| Ajax | `True` `False` | `False` | When `True`, the delete runs via async postback. Requires `ID` set _(since v2.6)_ |
| CssClass | string | | CSS class name(s) |
| Style | string | | Inline CSS |
| Width | [size](../unit-types.md) | | Width of the image |
| Height | [size](../unit-types.md) | | Height of the image |
| ToolTip | string | | Hover tooltip |
| Visible | `True` `False` | `True` | Shows or hides the control |
| OnClientClick | JavaScript | | Client-side script to run on click. Returning `false` cancels the delete |
| AccessKey | string | | Keyboard shortcut character |
| Enabled | `True` `False` | `True` | When `False`, the control is disabled |
| TabIndex | integer | | Tab order for keyboard navigation |

<details>
<summary>Deprecated Properties (styling)</summary>

Same set as [`<xmod:DeleteButton>`](delete-button.md) — `BackColor`, `BorderColor`, `BorderStyle`, `BorderWidth`, `Font-*`, `ForeColor`. Use `CssClass` or `Style` instead.

</details>

## Child Tags

Same as [`<xmod:DeleteButton>`](delete-button.md#child-parameter) — required `<Parameter Name Alias Value DataType>` tags supply values for the parent's `<DeleteCommand>`. The `Alias` attribute is useful when the data column has a name that conflicts with another parameter.
