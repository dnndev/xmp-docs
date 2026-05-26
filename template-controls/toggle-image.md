---
id: template-toggle-image
title: 'xmod:ToggleImage'
category: Action Links
context: template
summary: A clickable image that toggles the visibility of the element matched by `Target`. Image variant of [`<xmod:ToggleButton>`](toggle-button.md).
keywords:
  - toggle
  - image
  - template
since: '1.0'
related:
  - template-toggle-button
  - template-toggle-link
---

# `<xmod:ToggleImage>`

`<xmod:ToggleImage>` renders a clickable image that toggles the visibility of the element matched by `Target` — same behavior as [`<xmod:ToggleButton>`](toggle-button.md), just rendered as an image rather than a push-button.

::: warning Requires jQuery
The hosting page must include jQuery.
:::

::: info Sibling variants
- [`<xmod:ToggleButton>`](toggle-button.md) — push-button
- [`<xmod:ToggleLink>`](toggle-link.md) — hyperlink
:::

## Example

```html {5-7}
<xmod:Template Id="Employees">
  <ListDataSource CommandText="SELECT EmployeeId, FirstName, LastName, Evaluation FROM Employees" />
  <ItemTemplate>
    <strong>[[FirstName]] [[LastName]]</strong>
    <xmod:ToggleImage AlternateText="View Evaluation" ImageUrl="~/images/expand.gif"
        Target='[[Join("#divEvaluation_{0}",[[EmployeeId]])]]' Speed="Fast" />
    <div id="divEvaluation_[[EmployeeId]]" style="display:none;">
      <p>[[Evaluation]]</p>
    </div>
  </ItemTemplate>
</xmod:Template>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| Target <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | jQuery selector | | The element to show/hide |
| ImageUrl | URL | | Path to the image file. Tilde (`~`) supported |
| AlternateText | string | | Alt text for screen readers and search engines |
| Speed | `Slow` `Normal` `Fast` \| integer (ms) | (instant) | Transition speed. Omit for an instant toggle |
| CssClass | string | | CSS class name(s) |
| Style | string | | Inline CSS |
| ToolTip | string | | Hover tooltip |
| Visible | `True` `False` | `True` | Shows or hides the control |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

<details>
<summary>Deprecated Properties (styling)</summary>

`BackColor`, `BorderColor`, `BorderStyle`, `BorderWidth`, `Font-*`, `ForeColor` — use `CssClass` or `Style` instead.

</details>

See [`<xmod:ToggleButton>`](toggle-button.md) for full property details and the inline-element caveat with `Speed`.
