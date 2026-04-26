---
id: template-add-image
title: 'xmod:AddImage'
category: Action Links
context: template
summary: A clickable image inside a `<xmod:Template>` (or `<xmod:DataList>`) that opens the module's AddForm. Image variant of [`<xmod:AddButton>`](add-button.md).
keywords:
  - add
  - image
  - template
since: '1.0'
related:
  - add-button
  - add-link
---

# `<xmod:AddImage>`

`<xmod:AddImage>` renders a clickable image that opens the AddForm — same behavior as [`<xmod:AddButton>`](add-button.md), just rendered as an image rather than a push-button.

::: info Sibling variants
- [`<xmod:AddButton>`](add-button.md) — push-button
- [`<xmod:AddLink>`](add-link.md) — hyperlink
:::

## Example

```html {12}
<xmod:Template Id="Employees">
  <ListDataSource CommandText="SELECT * FROM Employees WHERE DepartmentId = @DepartmentId">
    <Parameter Name="DepartmentId" Alias="DepartmentId" />
  </ListDataSource>
  <ItemTemplate>
    <strong>[[FirstName]] [[LastName]]</strong>
  </ItemTemplate>
  <FooterTemplate>
    <xmod:AddImage AlternateText="New Employee" ImageUrl="~/images/add.gif" />
  </FooterTemplate>
</xmod:Template>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| ID | string | | Unique identifier for the image button |
| ImageUrl | URL | | Path to the image file. Tilde (`~`) supported |
| AlternateText | string | | Alt text for screen readers and search engines |
| ImageAlign | `NotSet` `Left` `Right` `Baseline` `Top` `Middle` `Bottom` `AbsBottom` `AbsMiddle` `TextTop` | `NotSet` | Image alignment relative to surrounding content |
| Ajax | `True` `False` | `False` | When `True`, opens the AddForm via async postback. Requires `ID` set _(since v2.6)_ |
| Form | form name | | Override the configured AddForm with a different form _(since v4.7)_ |
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

| Property | Description |
|----------|-------------|
| BackColor / BorderColor / BorderStyle / BorderWidth | Use `CssClass` or `Style` instead |
| Font-Bold / Font-Italic / Font-Names / Font-Overline / Font-Size / Font-Strikeout / Font-Underline | Use `CssClass` instead |
| ForeColor | Use `CssClass` or `Style` instead |

</details>

## Child Tags

Same as [`<xmod:AddButton>`](add-button.md#child-parameter) — optional `<Parameter Name Value DataType>` tags pass values into the AddForm's `<SelectCommand>`.

See [`<xmod:AddButton>`](add-button.md) for full property and behavior details — `<xmod:AddImage>` differs only in being rendered as an image with `ImageUrl`/`AlternateText`/`ImageAlign` instead of `Text`.
