---
id: template-add-link
title: 'xmod:AddLink'
category: Action Links
context: template
summary: A hyperlink inside a `<xmod:Template>` (or `<xmod:DataList>`) that opens the module's AddForm. Link variant of [`<xmod:AddButton>`](add-button.md).
keywords:
  - add
  - link
  - template
since: '1.0'
related:
  - template-add-button
  - template-add-image
---

# `<xmod:AddLink>`

`<xmod:AddLink>` renders a hyperlink that opens the AddForm — same behavior as [`<xmod:AddButton>`](add-button.md), just rendered as a link rather than a push-button.

::: info Sibling variants
- [`<xmod:AddButton>`](add-button.md) — push-button
- [`<xmod:AddImage>`](add-image.md) — clickable image
:::

## Example

```html {10}
<xmod:Template Id="Employees">
  <ListDataSource CommandText="SELECT * FROM Employees WHERE DepartmentId = @DepartmentId">
    <Parameter Name="DepartmentId" Alias="DepartmentId" />
  </ListDataSource>
  <ItemTemplate>
    <strong>[[FirstName]] [[LastName]]</strong>
  </ItemTemplate>
  <FooterTemplate>
    <xmod:AddLink Text="New Employee" />
  </FooterTemplate>
</xmod:Template>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| ID | string | | Unique identifier for the link |
| Text | string | | Caption displayed on the link |
| Ajax | `True` `False` | `False` | When `True`, opens the AddForm via async postback. Requires `ID` set _(since v2.6)_ |
| Form | form name | | Override the configured AddForm with a different form _(since v4.7)_ |
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

| Property | Description |
|----------|-------------|
| BackColor / BorderColor / BorderStyle / BorderWidth | Use `CssClass` or `Style` instead |
| Font-Bold / Font-Italic / Font-Names / Font-Overline / Font-Size / Font-Strikeout / Font-Underline | Use `CssClass` instead |
| ForeColor | Use `CssClass` or `Style` instead |

</details>

## Child Tags

Same as [`<xmod:AddButton>`](add-button.md#child-parameter) — optional `<Parameter Name Value DataType>` tags pass values into the AddForm's `<SelectCommand>`.

See [`<xmod:AddButton>`](add-button.md) for full behavior details.
