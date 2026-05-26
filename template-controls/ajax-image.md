---
id: template-ajax-image
title: 'xmod:AjaxImage'
category: Action Links
context: template
summary: A clickable image that fetches HTML from `Url` via AJAX and inserts it into the element identified by `Target`. Image variant of [`<xmod:AjaxButton>`](ajax-button.md).
keywords:
  - ajax
  - image
  - template
since: '1.0'
related:
  - template-ajax-button
  - template-ajax-link
---

# `<xmod:AjaxImage>`

`<xmod:AjaxImage>` renders a clickable image that fires an AJAX request when clicked — same behavior as [`<xmod:AjaxButton>`](ajax-button.md), just rendered as an image rather than a push-button.

::: warning Requires jQuery
The hosting page must include jQuery.
:::

::: info Sibling variants
- [`<xmod:AjaxButton>`](ajax-button.md) — push-button
- [`<xmod:AjaxLink>`](ajax-link.md) — hyperlink
:::

## Example

```html {5-7,9}
<xmod:Template Id="Employees">
  <ListDataSource CommandText="SELECT * FROM Employees" />
  <ItemTemplate>
    <strong>[[FirstName]] [[LastName]]</strong>
    <xmod:AjaxImage AlternateText="Get Employee History" ImageUrl="~/images/info.gif"
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
| ImageUrl | URL | | Path to the image file. Tilde (`~`) supported |
| AlternateText | string | | Alt text for screen readers and search engines |
| LoadingImageUrl | URL | | Image shown while the AJAX call is in flight |
| LoadingCssClass | string | | CSS class applied to the loading image |
| OnSuccess | JS function name | | JavaScript function called with response data instead of replacing `Target` |
| OnError | JS function name | | JavaScript function called on AJAX failure |
| Method | `get` `post` | `get` | HTTP method used for the request |
| CssClass | string | | CSS class name(s) |
| Style | string | | Inline CSS |
| ToolTip | string | | Hover tooltip |
| Visible | `True` `False` | `True` | Shows or hides the control |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

<details>
<summary>Deprecated Properties (styling)</summary>

`BackColor`, `BorderColor`, `BorderStyle`, `BorderWidth`, `Font-*`, `ForeColor` — use `CssClass` or `Style` instead.

</details>

See [`<xmod:AjaxButton>`](ajax-button.md) for full property details.
