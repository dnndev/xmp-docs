---
id: form-continue-button
title: 'xmod:ContinueButton'
category: Buttons
context: form
summary: The ContinueButton tag renders a push-button inside an AddSuccessTemplate or EditSuccessTemplate that returns the user to the page they came from or to a custom URL.
keywords:
  - continue
  - button
  - form
since: '1.0'
related:
  - continue-image
  - continue-link
---
# `<xmod:ContinueButton>`

The ContinueButton tag renders a push-button used inside an `<AddSuccessTemplate>` or `<EditSuccessTemplate>` — the optional "thank you" view shown after a form is successfully submitted. When clicked, the user is sent to the page they would have seen if no success template had been displayed, or to the URL specified in `Redirect`.

::: info xmod: prefix required
Unlike the other Add/Update/Cancel buttons, ContinueButton, ContinueImage, and ContinueLink are *template tags* — they live inside `<…SuccessTemplate>`, not inside the form itself — so they require the `xmod:` prefix. Use `<xmod:ContinueButton>` rather than `<ContinueButton>`.
:::

## Example
```html {6-7}
<AddForm>
  ...
</AddForm>

<AddSuccessTemplate>
  <ItemTemplate>
    <h1>Thanks for Signing Up</h1>
    <p>Click the button below to go to your profile page.</p>
    <xmod:ContinueButton Text="View Your Profile"
                         Redirect="http://mysite.com/profile" RedirectMethod="Get" />
  </ItemTemplate>
</AddSuccessTemplate>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| Text | string | | Caption displayed on the button |
| AccessKey | string | | Keyboard shortcut character (e.g. `F` for Alt+F) |
| CssClass | string | | CSS class name(s) for styling the control |
| Enabled | `True` `False` | `True` | When `False`, the control is disabled (grayed out and not interactive) |
| Height | [size](../unit-types.md) | | Height of the control |
| ID | string | | Unique identifier for the control within the form |
| [OnClientClick](#prop-onclientclick) | JavaScript | | Client-side script to run when the button is clicked |
| [Redirect](#prop-redirect) | URL | | URL the user is redirected to. If omitted, the user is returned to the page they would have seen if the success template hadn't been displayed |
| [RedirectMethod](#prop-redirectmethod) | `Get` `Post` | `Get` | HTTP method used for the redirect |
| Style | string | | Inline CSS (e.g. `color: red; border: solid 1px black;`) |
| TabIndex | integer | | Tab order for keyboard navigation |
| ToolTip | string | | Text displayed on mouse hover |
| Visible | `True` `False` | `True` | Shows or hides the control |
| Width | [size](../unit-types.md) | | Width of the control |

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

*   <span id="prop-onclientclick">**OnClientClick**</span>: A JavaScript expression to run when the button is clicked, before the redirect happens. If your script returns `false`, the button does nothing further. If it returns `true` (or doesn't return anything), the button proceeds normally.

*   <span id="prop-redirect">**Redirect**</span>: After the click, redirect the user to this URL. If omitted, the user is sent to the page they would have seen if the success template hadn't been shown — typically the page that contained the form.

*   <span id="prop-redirectmethod">**RedirectMethod**</span>: The HTTP method used for the redirect. `Get` (the default) appends form values as query string parameters. `Post` submits them as a form POST.
