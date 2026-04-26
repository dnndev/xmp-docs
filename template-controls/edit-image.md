---
id: template-edit-image
title: 'xmod:EditImage'
category: Action Links
context: template
summary: A clickable image inside a `<xmod:Template>` (or `<xmod:DataList>`) that opens the EditForm for the current row. Image variant of [`<xmod:EditButton>`](edit-button.md).
keywords:
  - edit
  - image
  - template
since: '1.0'
related:
  - edit-button
  - edit-link
---

# `<xmod:EditImage>`

`<xmod:EditImage>` renders a clickable image that opens the EditForm — same behavior as [`<xmod:EditButton>`](edit-button.md), just rendered as an image rather than a push-button.

::: info Sibling variants
- [`<xmod:EditButton>`](edit-button.md) — push-button
- [`<xmod:EditLink>`](edit-link.md) — hyperlink
:::

## Example

```html {6-8}
<xmod:Template Id="Employees">
  <ListDataSource CommandText="SELECT * FROM Employees" />
  <ItemTemplate>
    <strong>[[FirstName]] [[LastName]]</strong>
    <xmod:EditImage AlternateText="Edit Employee" ImageUrl="~/images/edit.gif">
      <Parameter Name="EmployeeId" Value="[[EmployeeId]]" DataType="Int32" />
    </xmod:EditImage>
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
| Ajax | `True` `False` | `False` | When `True`, opens the EditForm via async postback. Requires `ID` set _(since v2.6)_ |
| Form | form name | | Override the configured EditForm with a different form _(since v4.7)_ |
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

Same set as [`<xmod:EditButton>`](edit-button.md) — `BackColor`, `BorderColor`, `BorderStyle`, `BorderWidth`, `Font-*`, `ForeColor`. Use `CssClass` or `Style` instead.

</details>

## Child Tags

Same as [`<xmod:EditButton>`](edit-button.md#child-parameter) — required `<Parameter Name Value DataType>` tags supply values for the EditForm's `<SelectCommand>`.
