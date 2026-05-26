---
id: template-return-link
title: 'xmod:ReturnLink'
category: Action Links
context: template
summary: A hyperlink placed inside `<DetailTemplate>` that returns the user to the previous list view. Link variant of [`<xmod:ReturnButton>`](return-button.md).
keywords:
  - return
  - link
  - template
since: '1.0'
related:
  - template-return-button
  - template-return-image
---

# `<xmod:ReturnLink>`

`<xmod:ReturnLink>` renders a hyperlink that returns the user to the previous list view — same behavior as [`<xmod:ReturnButton>`](return-button.md), just rendered as a link rather than a push-button.

::: info Sibling variants
- [`<xmod:ReturnButton>`](return-button.md) — push-button
- [`<xmod:ReturnImage>`](return-image.md) — clickable image
:::

## Example

```html {6}
<xmod:Template Id="Employees">
  ...
  <DetailTemplate>
    <h1>[[FirstName]] [[LastName]]</h1>
    <div>[[Bio]]</div>
    <xmod:ReturnLink Text="« Back to list" />
  </DetailTemplate>
</xmod:Template>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| ID | string | | Unique identifier for the link |
| Text | string | | Caption displayed on the link |
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
