---
id: template-toggle-link
title: 'xmod:ToggleLink'
category: Action Links
context: template
summary: A hyperlink that toggles the visibility of the element matched by `Target`. Link variant of [`<xmod:ToggleButton>`](toggle-button.md).
keywords:
  - toggle
  - link
  - template
since: '1.0'
related:
  - toggle-button
  - toggle-image
---

# `<xmod:ToggleLink>`

`<xmod:ToggleLink>` renders a hyperlink that toggles the visibility of the element matched by `Target` — same behavior as [`<xmod:ToggleButton>`](toggle-button.md), just rendered as a link rather than a push-button.

::: warning Requires jQuery
The hosting page must include jQuery.
:::

::: info Sibling variants
- [`<xmod:ToggleButton>`](toggle-button.md) — push-button
- [`<xmod:ToggleImage>`](toggle-image.md) — clickable image
:::

## Example

```html {5-7}
<xmod:Template Id="Employees">
  <ListDataSource CommandText="SELECT EmployeeId, FirstName, LastName, Evaluation FROM Employees" />
  <ItemTemplate>
    <strong>[[FirstName]] [[LastName]]</strong>
    <xmod:ToggleLink Text="View Evaluation"
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
| Text | string | | Caption displayed on the link |
| Speed | `Slow` `Normal` `Fast` \| integer (ms) | (instant) | Transition speed. Omit for an instant toggle |
| CssClass | string | | CSS class name(s) |
| Style | string | | Inline CSS |
| ToolTip | string | | Hover tooltip |
| Visible | `True` `False` | `True` | Shows or hides the link |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

<details>
<summary>Deprecated Properties (styling)</summary>

`BackColor`, `BorderColor`, `BorderStyle`, `BorderWidth`, `Font-*`, `ForeColor` — use `CssClass` or `Style` instead.

</details>

See [`<xmod:ToggleButton>`](toggle-button.md) for full property details and the inline-element caveat with `Speed`.
