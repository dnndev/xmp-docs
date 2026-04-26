---
id: template-return-image
title: 'xmod:ReturnImage'
category: Action Links
context: template
summary: A clickable image placed inside `<DetailTemplate>` that returns the user to the previous list view. Image variant of [`<xmod:ReturnButton>`](return-button.md).
keywords:
  - return
  - image
  - template
since: '1.0'
related:
  - return-button
  - return-link
---

# `<xmod:ReturnImage>`

`<xmod:ReturnImage>` renders a clickable image that returns the user to the previous list view — same behavior as [`<xmod:ReturnButton>`](return-button.md), just rendered as an image rather than a push-button.

::: info Sibling variants
- [`<xmod:ReturnButton>`](return-button.md) — push-button
- [`<xmod:ReturnLink>`](return-link.md) — hyperlink
:::

## Example

```html {6}
<xmod:Template Id="Employees">
  ...
  <DetailTemplate>
    <h1>[[FirstName]] [[LastName]]</h1>
    <div>[[Bio]]</div>
    <xmod:ReturnImage AlternateText="Go Back" ImageUrl="~/images/back.gif" />
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
