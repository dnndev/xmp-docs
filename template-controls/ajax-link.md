---
id: template-ajax-link
title: 'xmod:AjaxLink'
category: Action Links
context: template
summary: A hyperlink that fetches HTML from `Url` via AJAX and inserts it into the element identified by `Target`. Link variant of [`<xmod:AjaxButton>`](ajax-button.md).
keywords:
  - ajax
  - link
  - template
since: '1.0'
related:
  - ajax-button
  - ajax-image
---

# `<xmod:AjaxLink>`

`<xmod:AjaxLink>` renders a hyperlink that fires an AJAX request when clicked — same behavior as [`<xmod:AjaxButton>`](ajax-button.md), just rendered as a link rather than a push-button.

::: warning Requires jQuery
The hosting page must include jQuery.
:::

::: info Sibling variants
- [`<xmod:AjaxButton>`](ajax-button.md) — push-button
- [`<xmod:AjaxImage>`](ajax-image.md) — clickable image
:::

## Example

```html {5-7,9}
<xmod:Template Id="Employees">
  <ListDataSource CommandText="SELECT * FROM Employees" />
  <ItemTemplate>
    <strong>[[FirstName]] [[LastName]]</strong>
    <xmod:AjaxLink Text="Get Employee History"
        Url='[[Join("~/GetEmployeeHistory.aspx?empid={0}",[[EmployeeId]])]]'
        Target="#EmployeeHistory" />
  </ItemTemplate>
</xmod:Template>

<div id="EmployeeHistory"></div>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| Url <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | URL | | The URL to fetch via AJAX |
| Target | jQuery selector | | The element whose content is replaced by the response. Required unless `OnSuccess` is set |
| Text | string | | Caption displayed on the link |
| LoadingImageUrl | URL | | Image shown while the AJAX call is in flight |
| LoadingCssClass | string | | CSS class applied to the loading image |
| OnSuccess | JS function name | | JavaScript function called with response data instead of replacing `Target` |
| OnError | JS function name | | JavaScript function called on AJAX failure |
| Method | `get` `post` | `get` | HTTP method used for the request |
| CssClass | string | | CSS class name(s) |
| Style | string | | Inline CSS |
| ToolTip | string | | Hover tooltip |
| Visible | `True` `False` | `True` | Shows or hides the link |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

<details>
<summary>Deprecated Properties (styling)</summary>

`BackColor`, `BorderColor`, `BorderStyle`, `BorderWidth`, `Font-*`, `ForeColor` — use `CssClass` or `Style` instead.

</details>

See [`<xmod:AjaxButton>`](ajax-button.md) for full property details.
