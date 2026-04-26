---
id: form-update-button
title: UpdateButton
category: Buttons
context: form
summary: The UpdateButton tag renders as a push-button that, when clicked, executes the SubmitCommand of the enclosing EditForm.
keywords:
  - update
  - button
  - form
since: '1.0'
related:
  - update-image
  - update-link
  - add-edit-form
---
# `<UpdateButton>`

The UpdateButton tag renders as a push-button at run-time. When clicked, it executes the `<SubmitCommand>` associated with the enclosing `<EditForm>`. Use `<UpdateImage>` for a clickable image button or `<UpdateLink>` for a hyperlink that performs the same action.

::: info Use only inside EditForm
The UpdateButton triggers the `<EditForm>`'s `<SubmitCommand>`. It has no effect outside an `<EditForm>`.
:::

## Example
```html {18}
<EditForm>
  <SelectCommand CommandText="SELECT * FROM Users WHERE UserId = @UserId" />
  <SubmitCommand CommandText="UPDATE Users SET FirstName=@FirstName, LastName=@LastName
                              WHERE UserId=@UserId" />
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
      <td colspan="2"><UpdateButton Text="Update"/> <CancelButton Text="Cancel"/></td>
    </tr>
  </table>
  <TextBox Id="txtUserId" DataField="UserId" DataType="int32" Visible="false" />
</EditForm>
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
| [Redirect](#prop-redirect) | URL \| `.` | | URL the user is redirected to after the form processes the click |
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

*   <span id="prop-onclientclick">**OnClientClick**</span>: A JavaScript expression to run when the button is clicked, before the server-side processing happens. Useful for confirmation dialogs, client-side validation, or showing a busy indicator. If your script returns `false`, the button does nothing further (no postback, no submit). If it returns `true` (or doesn't return anything), the button proceeds normally.

*   <span id="prop-redirect">**Redirect**</span>: After the form's `<SubmitCommand>` runs, redirect the user to this URL. [Field tokens](../tokens/field.md) may be used in the value (and are URL-encoded automatically), but [function tokens](../tokens/functions.md) like `[[Portal:ID]]` and `[[User:ID]]` are not supported here. Use a single period (`.`) as a shortcut for "the current page" — useful when you want to clear the form after a successful update.

*   <span id="prop-redirectmethod">**RedirectMethod**</span>: The HTTP method used for the redirect. `Get` (the default) appends form values as query string parameters. `Post` submits them as a form POST.

    ::: warning Post uses ID, not DataField
    When `RedirectMethod="Post"`, the field names in the posted form come from each form control's `ID`, not its `DataField`. If your downstream page expects specific field names, set the IDs to match.
    :::
