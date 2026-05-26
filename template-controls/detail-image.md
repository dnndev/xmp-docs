---
id: template-detail-image
title: 'xmod:DetailImage'
category: Action Links
context: template
summary: A clickable image inside a `<xmod:Template>` (or `<xmod:DataList>`) that switches to the detail view. Image variant of [`<xmod:DetailButton>`](detail-button.md).
keywords:
  - detail
  - image
  - template
since: '1.0'
related:
  - template-detail-button
  - template-detail-link
---

# `<xmod:DetailImage>`

`<xmod:DetailImage>` renders a clickable image that switches the parent template to detail view — same behavior as [`<xmod:DetailButton>`](detail-button.md), just rendered as an image rather than a push-button.

::: info Sibling variants
- [`<xmod:DetailButton>`](detail-button.md) — push-button
- [`<xmod:DetailLink>`](detail-link.md) — hyperlink
:::

## Example

```html {8-10}
<xmod:Template Id="Employees">
  <ListDataSource CommandText="SELECT EmployeeId, FirstName, LastName FROM Employees" />
  <DetailDataSource CommandText="SELECT * FROM Employees WHERE EmployeeId = @EmployeeId">
    <Parameter Name="EmployeeId" />
  </DetailDataSource>
  <ItemTemplate>
    <strong>[[FirstName]] [[LastName]]</strong>
    <xmod:DetailImage AlternateText="View Profile" ImageUrl="~/images/detail.gif">
      <Parameter Name="EmployeeId" Value="[[EmployeeId]]" DataType="Int32" />
    </xmod:DetailImage>
  </ItemTemplate>
  <DetailTemplate>
    <h1>[[FirstName]] [[LastName]]</h1>
  </DetailTemplate>
</xmod:Template>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| ID | string | | Unique identifier for the image button |
| ImageUrl | URL | | Path to the image file. Tilde (`~`) supported |
| AlternateText | string | | Alt text for screen readers and search engines |
| ImageAlign | `NotSet` `Left` `Right` `Baseline` `Top` `Middle` `Bottom` `AbsBottom` `AbsMiddle` `TextTop` | `NotSet` | Image alignment relative to surrounding content |
| Ajax | `True` `False` | `False` | When `True`, switches to detail view via async postback. Requires `ID` set _(since v2.6)_ |
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

Same set as [`<xmod:DetailButton>`](detail-button.md) — `BackColor`, `BorderColor`, `BorderStyle`, `BorderWidth`, `Font-*`, `ForeColor`. Use `CssClass` or `Style` instead.

</details>

## Child Tags

Same as [`<xmod:DetailButton>`](detail-button.md#child-parameter) — required `<Parameter Name Value DataType>` tags supply values for the parent's `<DetailDataSource>`.
