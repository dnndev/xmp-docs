---
id: form-captcha
title: Captcha
category: Input Controls
context: form
summary: The Captcha tag renders a CAPTCHA challenge to help verify the user is human and reduce automated form spam.
keywords:
  - captcha
  - form
since: '1.0'
---
# `<Captcha>`

The Captcha tag renders a CAPTCHA challenge — an image of distorted characters the user must read and type — to help confirm the user is human. If your forms are public, web bots will eventually find them and submit junk; a CAPTCHA reduces the frequency of those submissions.

::: warning NOTE
Due to a limitation in the underlying DNN CAPTCHA control, this tag can only be used in the FormView module.
:::

## Example
```html {18}
<AddForm>
  ...
  <table>
    <tr>
      <td>
        <Label For="txtFirstName" Text="First Name" />
        <Textbox id="txtFirstName" DataField="FirstName" DataType="string" />
      </td>
    </tr>
    <tr>
      <td>
        <Label For="txtLastName" Text="Last Name" />
        <Textbox Id="txtLastName" DataField="LastName" DataType="string" />
       </td>
    </tr>
    <tr>
      <td>
        <Captcha CaptchaLength="5" />
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <AddButton Text="Add"/>&nbsp; <CancelButton Text="Cancel"/>
      </td>
    </tr>
  </table>
</AddForm>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [ID](#prop-id) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Unique identifier for the control within the form |
| AccessKey | string | | Keyboard shortcut character (e.g. `F` for Alt+F) |
| BackgroundColor | color name \| #dddddd | | Background color used behind the CAPTCHA characters |
| BackgroundImage | URL | | URL to an image file used as the background behind the characters |
| [CaptchaChars](#prop-captchachars) | string | `abc...XYZ23456789` | Character set used to generate the challenge text |
| CaptchaHeight | [size](../unit-types.md) | `100px` | Height of the CAPTCHA image |
| CaptchaLength | integer | `6` | Number of characters in the challenge |
| CaptchaWidth | [size](../unit-types.md) | `300px` | Width of the CAPTCHA image |
| CssClass | string | | CSS class name(s) for styling the control |
| Enabled | `True` `False` | `True` | When `False`, the control is disabled (grayed out and not interactive) |
| ErrorMessage | string | (localized) | Message shown to the user if their input does not match the challenge |
| [ErrorStyle](#prop-errorstyle) | style attributes | | Styling for the error message — uses ASP.NET nested style syntax (e.g. `ErrorStyle-ForeColor="red"`) |
| Expiration | integer (seconds) | `120` | How long the challenge remains valid before it must be regenerated |
| Height | [size](../unit-types.md) | | Height of the control |
| Style | string | | Inline CSS (e.g. `color: red; border: solid 1px black;`) |
| TabIndex | integer | | Tab order for keyboard navigation |
| Text | string | (localized) | Caption displayed next to the CAPTCHA image (e.g. "Enter the code shown above") |
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

The `ErrorStyle` property accepts the same set of nested style attributes (e.g. `ErrorStyle-Font-Bold`, `ErrorStyle-ForeColor`). These are likewise deprecated — prefer styling the error message via CSS targeting the rendered error element.

</details>

## Property Details

*   <span id="prop-id">**ID**</span>: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form.

*   <span id="prop-captchachars">**CaptchaChars**</span>: The pool of characters from which challenge text is randomly drawn. The default set deliberately omits visually ambiguous characters (such as `O`, `0`, `I`, `1`) to reduce user errors. Override this only if you have a specific reason — for example, to limit the challenge to digits or to avoid characters that don't render well in your chosen font.

*   <span id="prop-errorstyle">**ErrorStyle**</span>: Styling for the error message displayed when the user's input doesn't match the challenge. Uses ASP.NET nested style syntax: prefix any deprecated style attribute with `ErrorStyle-` (e.g. `ErrorStyle-ForeColor="red"`, `ErrorStyle-Font-Bold="True"`). For modern styling, prefer CSS targeting the rendered error element.
