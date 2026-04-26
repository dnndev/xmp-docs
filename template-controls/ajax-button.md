---
id: template-ajax-button
title: 'xmod:AjaxButton'
category: Action Links
context: template
summary: A push-button that, when clicked, fetches HTML from `Url` via AJAX and inserts it into the element identified by `Target`. No postback.
keywords:
  - ajax
  - button
  - template
since: '1.0'
related:
  - ajax-image
  - ajax-link
  - load-feed
---

# `<xmod:AjaxButton>`

`<xmod:AjaxButton>` renders a push-button that fires an AJAX request when clicked. The HTML returned by `Url` is dropped into the element matched by `Target` (a jQuery selector). No page postback.

::: warning Requires jQuery
The hosting page must include jQuery. Default DNN skins include it; verify a custom skin does too.
:::

::: info Sibling variants
- [`<xmod:AjaxImage>`](ajax-image.md) — same behavior, rendered as a clickable image
- [`<xmod:AjaxLink>`](ajax-link.md) — same behavior, rendered as a hyperlink
:::

## Example

```html {5-7,11}
<xmod:Template Id="Employees">
  <ListDataSource CommandText="SELECT * FROM Employees" />
  <ItemTemplate>
    <strong>[[FirstName]] [[LastName]]</strong>
    <xmod:AjaxButton Text="Get Employee History"
        Url='[[Join("~/GetEmployeeHistory.aspx?empid={0}",[[EmployeeId]])]]'
        Target="#EmployeeHistory" />
  </ItemTemplate>
</xmod:Template>

<div id="EmployeeHistory"></div>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [Url](#prop-url) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | URL | | The URL to fetch via AJAX |
| [Target](#prop-target) | jQuery selector | | The element whose content is replaced by the AJAX response. Required unless `OnSuccess` is set |
| Text | string | | Caption displayed on the button |
| [LoadingImageUrl](#prop-loadingimageurl) | URL | | Image shown while the AJAX call is in flight. Tilde paths supported |
| LoadingCssClass | string | | CSS class applied to the loading image |
| [OnSuccess](#prop-onsuccess) | JS function name | | JavaScript function called with the response data instead of replacing `Target`'s content |
| [OnError](#prop-onerror) | JS function name | | JavaScript function called with `(jqXHR, textStatus, errorThrown)` if the AJAX call fails |
| Method | `get` `post` | `get` | HTTP method used for the request |
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

*   <span id="prop-url">**Url**</span>: The endpoint hit by the AJAX request. Tilde-prefixed paths are resolved through `Page.ResolveUrl`. The endpoint should return HTML — that's what gets dropped into the target. Use [`<xmod:Feed ContentType="text/html">`](feed.md) to expose XMP-driven HTML for AJAX consumption.

*   <span id="prop-target">**Target**</span>: A jQuery selector — typically `#id` for an element by ID. The response HTML replaces the element's existing content. Required unless `OnSuccess` is set (in which case your custom JS handles the response).

*   <span id="prop-loadingimageurl">**LoadingImageUrl**</span>: An image (typically a spinner GIF) shown immediately after the button is clicked, removed when the AJAX call returns. The image renders right after the button; if `LoadingCssClass` is set, those classes are applied to the `<img>`.

*   <span id="prop-onsuccess">**OnSuccess**</span>: A JavaScript function *name* (no parentheses). Overrides the default behavior of replacing `Target`'s content. Your function receives the response data as its single argument:

    ```js
    function doSomethingCool(data) {
      // do something with data
    }
    ```

    ```html
    <xmod:AjaxButton Url="..." OnSuccess="doSomethingCool" />
    ```

*   <span id="prop-onerror">**OnError**</span>: A JavaScript function *name* (no parentheses) called if the AJAX call fails. Receives jQuery's `(jqXHR, textStatus, errorThrown)` arguments.
