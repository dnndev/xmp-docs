---
id: template-edit-link
title: 'xmod:EditLink'
category: Action Links
context: template
summary: A hyperlink inside a `<xmod:Template>` (or `<xmod:DataList>`) that opens the EditForm for the current row. Link variant of [`<xmod:EditButton>`](edit-button.md).
keywords:
  - edit
  - link
  - template
since: '1.0'
related:
  - edit-button
  - edit-image
---

# `<xmod:EditLink>`

`<xmod:EditLink>` renders a hyperlink that opens the EditForm — same behavior as [`<xmod:EditButton>`](edit-button.md), just rendered as a link rather than a push-button.

::: info Sibling variants
- [`<xmod:EditButton>`](edit-button.md) — push-button
- [`<xmod:EditImage>`](edit-image.md) — clickable image
:::

## Example

```html {5-7}
<xmod:Template Id="Employees">
  <ListDataSource CommandText="SELECT * FROM Employees" />
  <ItemTemplate>
    <strong>[[FirstName]] [[LastName]]</strong>
    <xmod:EditLink Text="Edit">
      <Parameter Name="EmployeeId" Value="[[EmployeeId]]" DataType="Int32" />
    </xmod:EditLink>
  </ItemTemplate>
</xmod:Template>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| ID | string | | Unique identifier for the link |
| Text | string | | Caption displayed on the link |
| Ajax | `True` `False` | `False` | When `True`, opens the EditForm via async postback. Requires `ID` set _(since v2.6)_ |
| Form | form name | | Override the configured EditForm with a different form _(since v4.7)_ |
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

Same set as [`<xmod:EditButton>`](edit-button.md) — `BackColor`, `BorderColor`, `BorderStyle`, `BorderWidth`, `Font-*`, `ForeColor`. Use `CssClass` or `Style` instead.

</details>

## Child Tags

Same as [`<xmod:EditButton>`](edit-button.md#child-parameter) — required `<Parameter Name Value DataType>` tags supply values for the EditForm's `<SelectCommand>`.
