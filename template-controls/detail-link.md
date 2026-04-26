---
id: template-detail-link
title: 'xmod:DetailLink'
category: Action Links
context: template
summary: A hyperlink inside a `<xmod:Template>` (or `<xmod:DataList>`) that switches to the detail view. Link variant of [`<xmod:DetailButton>`](detail-button.md).
keywords:
  - detail
  - link
  - template
since: '1.0'
related:
  - detail-button
  - detail-image
---

# `<xmod:DetailLink>`

`<xmod:DetailLink>` renders a hyperlink that switches the parent template to detail view — same behavior as [`<xmod:DetailButton>`](detail-button.md), just rendered as a link rather than a push-button.

::: info Sibling variants
- [`<xmod:DetailButton>`](detail-button.md) — push-button
- [`<xmod:DetailImage>`](detail-image.md) — clickable image
:::

## Example

```html {7-9}
<xmod:Template Id="Employees">
  <ListDataSource CommandText="SELECT EmployeeId, FirstName, LastName FROM Employees" />
  <DetailDataSource CommandText="SELECT * FROM Employees WHERE EmployeeId = @EmployeeId">
    <Parameter Name="EmployeeId" />
  </DetailDataSource>
  <ItemTemplate>
    [[FirstName]] [[LastName]] —
    <xmod:DetailLink Text="View Profile">
      <Parameter Name="EmployeeId" Value="[[EmployeeId]]" DataType="Int32" />
    </xmod:DetailLink>
  </ItemTemplate>
  <DetailTemplate>
    <h1>[[FirstName]] [[LastName]]</h1>
  </DetailTemplate>
</xmod:Template>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| ID | string | | Unique identifier for the link |
| Text | string | | Caption displayed on the link |
| Ajax | `True` `False` | `False` | When `True`, switches to detail view via async postback. Requires `ID` set _(since v2.6)_ |
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

Same set as [`<xmod:DetailButton>`](detail-button.md) — `BackColor`, `BorderColor`, `BorderStyle`, `BorderWidth`, `Font-*`, `ForeColor`. Use `CssClass` or `Style` instead.

</details>

## Child Tags

Same as [`<xmod:DetailButton>`](detail-button.md#child-parameter) — required `<Parameter Name Value DataType>` tags supply values for the parent's `<DetailDataSource>`.
