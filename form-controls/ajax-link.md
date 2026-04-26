---
id: form-ajax-link
title: AjaxLink
category: Buttons
context: form
summary: The AjaxLink tag renders a hyperlink that, when clicked, fetches HTML from a URL and inserts it into a target element on the page — without a postback.
keywords:
  - ajax
  - link
  - form
since: '1.0'
related:
  - ajax-button
  - ajax-image
---
# `<AjaxLink>`

The AjaxLink tag renders a hyperlink that, when clicked, makes a jQuery AJAX call to a URL and inserts the returned HTML into a target element on the page — same behavior as [`<AjaxButton>`](ajax-button.md), just rendered as an inline `<a>` element.

::: warning Requires jQuery
This control depends on jQuery being included in the page. DNN typically includes jQuery automatically; if your install doesn't, use [`<ScriptBlock>`](script-block.md) to add it.
:::

::: info Url is required
You must specify `Url`. You must also specify either `Target` (where to put the response) or `OnSuccess` (your own callback to handle it).
:::

## Example
```html {12-13}
<AddForm>
  <SubmitCommand CommandText="UPDATE EmployeeReview SET Rating=@Rating" />

  <Label>Submit Rating for Employee</Label>
  <DropDownList Id="Rating" DataField="Rating" DataType="Int32">
    <ListItem Value="1">Poor</ListItem>
    <ListItem Value="2">Sub-Par</ListItem>
    <ListItem Value="3">Average</ListItem>
    <ListItem Value="4">Above Average</ListItem>
    <ListItem Value="5">Excellent</ListItem>
  </DropDownList>
  <AjaxLink Text="View Employee History" Url="mysite.com/history.aspx?eid=100"
            Target="#divHistory" />
  <div id="divHistory"></div>
  <AddButton Text="Add Rating" /> <CancelButton Text="Nevermind" />
</AddForm>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [Url](#prop-url) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | URL | | The URL the AJAX request is sent to |
| [Target](#prop-target) | jQuery selector | | The element(s) whose HTML will be replaced with the response. Required unless `OnSuccess` is specified |
| Text | string | | Caption displayed as the link text |
| CssClass | string | | CSS class name(s) for styling the control |
| DataType | string | | jQuery `dataType` for the AJAX call (e.g. `json`, `html`, `text`) |
| Enabled | `True` `False` | `True` | When `False`, the control is disabled (rendered as plain text, not a clickable link) |
| Height | [size](../unit-types.md) | | Height of the control |
| ID | string | | Unique identifier for the control within the form |
| [LoadingCssClass](#prop-loadingcssclass) | CSS class | | CSS class applied to the loading image while the AJAX call is in flight |
| [LoadingImageUrl](#prop-loadingimageurl) | URL | | Image displayed next to the link while the AJAX call is in flight |
| Method | `get` `post` | `get` | HTTP method used for the AJAX request |
| [OnError](#prop-onerror) | JS function name | | JavaScript function called if the AJAX request fails |
| [OnSuccess](#prop-onsuccess) | JS function name | | JavaScript function called with the response. When set, the response is *not* automatically inserted into `Target` |
| Style | string | | Inline CSS (e.g. `color: red; border: solid 1px black;`) |
| ToolTip | string | | Text displayed on mouse hover |
| Visible | `True` `False` | `True` | Shows or hides the control |
| Width | [size](../unit-types.md) | | Width of the control |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

<details>
<summary>Deprecated Properties</summary>

These properties use ASP.NET inline styling and are no longer recommended for modern web development. Use the `CssClass` property to apply CSS classes or the `Style` property for inline CSS instead.

| Property | Values | Description |
|----------|--------|-------------|
| BackColor | color name \| #dddddd | Background color of the control |
| BorderColor | color name \| #dddddd | Border color of the control |
| BorderStyle | `NotSet` `None` `Dotted` `Dashed` `Solid` `Double` `Groove` `Ridge` `Inset` `Outset` | Border style of the control |
| BorderWidth | [size](../unit-types.md) | Border width of the control |
| Font-Bold | `True` `False` | Bold text |
| Font-Italic | `True` `False` | Italic text |
| Font-Names | string | Font family name |
| Font-Overline | `True` `False` | Overline text decoration |
| Font-Size | `XX-Small` `X-Small` `Small` `Medium` `Large` `X-Large` `XX-Large` or size | Font size |
| Font-Strikeout | `True` `False` | Strikethrough text decoration |
| Font-Underline | `True` `False` | Underline text decoration |
| ForeColor | color name \| #dddddd | Text color of the control |

</details>

## Property Details

*   <span id="prop-url">**Url**</span>: The URL the AJAX request is sent to. The tilde (`~`) represents the application root. Required.

*   <span id="prop-target">**Target**</span>: A jQuery selector identifying the element(s) whose HTML will be replaced with the response. Use `#elementId` to target a single element by ID (e.g. `#divResults`), or `.className` to target all elements with a CSS class (e.g. `div.results`). Required unless you provide an `OnSuccess` callback that handles the response yourself.

*   <span id="prop-loadingimageurl">**LoadingImageUrl**</span>: A URL to an image (typically an animated spinner) shown immediately to the right of the link while the AJAX request is in flight. The image is removed automatically when the call completes successfully. The tilde (`~`) represents the application root. If omitted, no loading indicator is shown.

*   <span id="prop-loadingcssclass">**LoadingCssClass**</span>: CSS class applied to the loading image. Useful for positioning or styling the spinner. Ignored if `LoadingImageUrl` is not specified.

*   <span id="prop-onsuccess">**OnSuccess**</span>: The name of a JavaScript function to call when the AJAX call completes successfully. If specified, the function is called with the response data and the default behavior (inserting the response into `Target`) is skipped — your function is responsible for doing whatever needs to happen.

    ```js
    function doSomethingCool(data) {
      alert("The following data was returned: " + data);
    }
    ```

    Then on the control: `OnSuccess="doSomethingCool"` (function name only — no parens).

*   <span id="prop-onerror">**OnError**</span>: The name of a JavaScript function to call if the AJAX call fails. The function receives the standard jQuery `jqXHR`, `textStatus`, and `errorThrown` arguments.

    ```js
    function myErrHandler(jqXHR, textStatus, errorThrown) {
      alert("The following error occurred: " + textStatus);
    }
    ```

    Then on the control: `OnError="myErrHandler"` (function name only — no parens).
