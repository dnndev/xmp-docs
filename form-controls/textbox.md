---
id: form-textbox
title: Textbox
category: Input Controls
context: form
summary: The Textbox tag renders as a single-line text input box at run time.
keywords:
  - textbox
  - form
since: '1.0'
related:
  - textarea
  - password
  - label
---

# `<Textbox>`

The Textbox tag renders as a single-line text input box at run time. You will probably use it most often in your forms — it is the standard control for entering names, addresses, and other single-line data.

## Example
```html {7,13}
<AddForm>
  ...
  <table>
    <tr>
      <td>
        <Label For="txtFirstName" Text="First Name" />
        <Textbox Id="txtFirstName" DataField="FirstName" DataType="String" />
      </td>
    </tr>
    <tr>
      <td>
        <Label For="txtLastName" Text="Last Name" />
        <Textbox Id="txtLastName" DataField="LastName" DataType="String" />
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <AddButton Text="Add"/>&nbsp;<CancelButton Text="Cancel"/>
      </td>
    </tr>
  </table>
</AddForm>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [ID](#prop-id) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Unique identifier for the control within the form |
| [DataField](#prop-datafield) | string | | Parameter name for data binding to your form's data commands |
| [DataType](#prop-datatype) | `String` `Int32` `Int64` `Boolean` [more...](../data-types.md) | `String` | Database type for data commands |
| AccessKey | string | | Keyboard shortcut character (e.g. `F` for Alt+F) |
| CssClass | string | | CSS class name(s) for styling the control |
| Enabled | `True` `False` | `True` | When `False`, the control is disabled (grayed out and not interactive). Different from `ReadOnly`, which still allows focus and selection |
| Height | [size](../unit-types.md) | | Height of the control |
| [HtmlEncode](#prop-htmlencode) | `True` `False` | `False` | HTML-encodes content before sending to the SubmitCommand |
| MaxLength | integer | | Maximum number of characters allowed |
| [Nullable](#prop-nullable) | `True` `False` | `False` | Returns DBNull when the control is blank or whitespace |
| [Placeholder](#prop-placeholder) | string | | Hint text displayed when the control is empty |
| ReadOnly | `True` `False` | `False` | Prevents the user from changing the contents |
| Style | string | | Inline CSS (e.g. `color: red; border: solid 1px black;`) |
| TabIndex | integer | | Tab order for keyboard navigation |
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

*   <span id="prop-id">**ID**</span>: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form.

*   <span id="prop-datafield">**DataField**</span>: Name of the parameter in the `<SubmitCommand>` which will be filled with this control's data when the form is submitted and/or the parameter in the `<SelectCommand>` which will supply this control's data when the form is loaded. This attribute is required if the control will participate in operations with your form's data commands.

*   <span id="prop-datatype">**DataType**</span>: The type of data this control is supplying to the data commands. This is a [Database type](../data-types.md). This attribute is required if the control will participate in operations with your form's data commands.

*   <span id="prop-htmlencode">**HtmlEncode**</span>: When set to True, the content of the control will be HTML-encoded before sending it to the SubmitCommand for processing. This can help protect against scripting attacks but will also enlarge the size of the text that is saved — for instance, `<` becomes `&lt;`.

*   <span id="prop-nullable">**Nullable**</span>: If True, the control will return a DBNull value if the control is blank or contains just whitespace. If a DBNull value is passed to the control, the control will be set to an empty string.

*   <span id="prop-placeholder">**Placeholder**</span>: The value will be displayed in the textbox when it is empty, providing explanatory text prior to user input. For instance, a contact form's Email textbox might use "Enter your email address" or simply "Email" as the Placeholder. When the user tabs into the control, the text disappears. If the user tabs out without entering anything, the placeholder text re-appears. This is not a default value and will not be sent to the database.
