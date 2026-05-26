---
id: form-add-image
title: AddImage
category: Buttons
context: form
summary: The AddImage tag renders as a clickable image that, when clicked, executes the SubmitCommand of the enclosing AddForm.
keywords:
  - add
  - image
  - form
since: '1.0'
related:
  - form-add-button
  - form-add-link
  - form-add-edit-form
---
# `<AddImage>`

The AddImage tag renders as a clickable image at run-time. When clicked, it executes the `<SubmitCommand>` associated with the enclosing `<AddForm>` — same behavior as [`<AddButton>`](add-button.md), just rendered as an image instead of a push-button.

::: info Use only inside AddForm
The AddImage triggers the `<AddForm>`'s `<SubmitCommand>`. It has no effect outside an `<AddForm>`.
:::

## Example
```html {16-17}
<AddForm>
  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName)
                              VALUES(@FirstName, @LastName)" />
  <table>
    <tr>
      <td>
         <Label For="txtFirstName" Text="First Name" />
         <TextBox Id="txtFirstName" DataField="FirstName" DataType="string" />
       </td>
    </tr>
    <tr>
      <td><Label For="txtLastName" Text="Last Name" />
          <TextBox Id="txtLastName" DataField="LastName" DataType="string" /></td>
    </tr>
    <tr>
      <td colspan="2"><AddImage AlternateText="Add" ImageUrl="~/images/add.gif" />
          <CancelImage AlternateText="Cancel" ImageUrl="~/images/cancel.gif" /></td>
    </tr>
  </table>
</AddForm>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [ImageUrl](#prop-imageurl) | URL | | Path to the image file to display |
| AccessKey | string | | Keyboard shortcut character (e.g. `F` for Alt+F) |
| AlternateText | string | | Alt text for accessibility (screen readers) and search engines |
| CssClass | string | | CSS class name(s) for styling the control |
| Enabled | `True` `False` | `True` | When `False`, the control is disabled (grayed out and not interactive) |
| Height | [size](../unit-types.md) | | Height of the image |
| ID | string | | Unique identifier for the control within the form |
| ImageAlign | `NotSet` `Left` `Right` `Baseline` `Top` `Middle` `Bottom` `AbsBottom` `AbsMiddle` `TextTop` | `NotSet` | Alignment of the image with respect to surrounding content |
| [OnClientClick](#prop-onclientclick) | JavaScript | | Client-side script to run when the image is clicked |
| [Redirect](#prop-redirect) | URL \| `.` | | URL the user is redirected to after the form processes the click |
| [RedirectMethod](#prop-redirectmethod) | `Get` `Post` | `Get` | HTTP method used for the redirect |
| Style | string | | Inline CSS (e.g. `color: red; border: solid 1px black;`) |
| TabIndex | integer | | Tab order for keyboard navigation |
| ToolTip | string | | Text displayed on mouse hover |
| Visible | `True` `False` | `True` | Shows or hides the control |
| Width | [size](../unit-types.md) | | Width of the image |

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

*   <span id="prop-imageurl">**ImageUrl**</span>: Path to the image file. The tilde (`~`) represents the application root, so `ImageUrl="~/images/add.gif"` resolves to `/dnntestsite/images/add.gif` on a development install and `/images/add.gif` on production. Use a portal-relative path (e.g. `/Portals/0/images/add.gif`) for portal-specific images.

*   <span id="prop-onclientclick">**OnClientClick**</span>: A JavaScript expression to run when the image is clicked, before the server-side processing happens. Useful for confirmation dialogs, client-side validation, or showing a busy indicator. If your script returns `false`, the button does nothing further (no postback, no submit). If it returns `true` (or doesn't return anything), the button proceeds normally.

*   <span id="prop-redirect">**Redirect**</span>: After the form's `<SubmitCommand>` runs, redirect the user to this URL. [Field tokens](../tokens/field.md) may be used in the value (and are URL-encoded automatically), but [function tokens](../tokens/functions.md) like `[[Portal:ID]]` and `[[User:ID]]` are not supported here. Use a single period (`.`) as a shortcut for "the current page" — useful when you want to clear the form after a successful submit.

*   <span id="prop-redirectmethod">**RedirectMethod**</span>: The HTTP method used for the redirect. `Get` (the default) appends form values as query string parameters. `Post` submits them as a form POST.

    ::: warning Post uses ID, not DataField
    When `RedirectMethod="Post"`, the field names in the posted form come from each form control's `ID`, not its `DataField`. If your downstream page expects specific field names, set the IDs to match.
    :::
