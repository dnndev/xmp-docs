---
id: template-toggle-button
title: 'xmod:ToggleButton'
category: Action Links
context: template
summary: A push-button that toggles the visibility of the element matched by `Target` using jQuery's `.toggle()`. Useful for show/hide and disclosure UI.
keywords:
  - toggle
  - button
  - template
since: '1.0'
related:
  - toggle-image
  - toggle-link
---

# `<xmod:ToggleButton>`

`<xmod:ToggleButton>` renders a push-button that, when clicked, toggles the visibility of the element identified by `Target` (a jQuery selector). Optionally fade in/out using `Speed`.

::: warning Requires jQuery
The hosting page must include jQuery.
:::

::: info Sibling variants
- [`<xmod:ToggleImage>`](toggle-image.md) — same behavior, rendered as a clickable image
- [`<xmod:ToggleLink>`](toggle-link.md) — same behavior, rendered as a hyperlink
:::

## Example

```html {5-7,9}
<xmod:Template Id="Employees">
  <ListDataSource CommandText="SELECT EmployeeId, FirstName, LastName, Evaluation FROM Employees" />
  <ItemTemplate>
    <strong>[[FirstName]] [[LastName]]</strong>
    <xmod:ToggleButton Text="View Evaluation"
        Target='[[Join("#divEvaluation_{0}",[[EmployeeId]])]]'
        Speed="Fast" />
    <div id="divEvaluation_[[EmployeeId]]" style="display:none;">
      <p>[[Evaluation]]</p>
    </div>
  </ItemTemplate>
</xmod:Template>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [Target](#prop-target) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | jQuery selector | | The element to show/hide |
| [Speed](#prop-speed) | `Slow` `Normal` `Fast` \| integer (ms) | (instant) | Transition speed. Omit for an instant toggle |
| Text | string | | Caption displayed on the button |
| AccessKey | string | | Keyboard shortcut character |
| CssClass | string | | CSS class name(s) |
| Style | string | | Inline CSS |
| Width | [size](../unit-types.md) | | Width of the button |
| Height | [size](../unit-types.md) | | Height of the button |
| ToolTip | string | | Hover tooltip |
| Visible | `True` `False` | `True` | Shows or hides the button |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

<details>
<summary>Deprecated Properties (styling)</summary>

`BackColor`, `BorderColor`, `BorderStyle`, `BorderWidth`, `Font-*`, `ForeColor` — use `CssClass` or `Style` instead.

</details>

## Property Details

*   <span id="prop-target">**Target**</span>: A jQuery selector — typically `#id` for an element by ID, or a class selector like `.bio`. The selected element's visibility is toggled with jQuery's `.toggle()` on click.

*   <span id="prop-speed">**Speed**</span>: When set, jQuery uses a fade in/out animation at the named speed.

    | Value | Duration |
    |-------|----------|
    | `Slow` | ~600ms |
    | `Normal` | ~400ms |
    | `Fast` | ~200ms |
    | integer | exact milliseconds (e.g. `1000` = 1 second) |

    ::: warning Inline elements with Speed
    When `Speed` is set, jQuery animates by changing `display`. If the target is an inline element, jQuery 1.2.6+ will set `display: block` to make it visible — which can break inline layouts. Either explicitly set `display: inline` in CSS first, or use a block element as the target.
    :::
