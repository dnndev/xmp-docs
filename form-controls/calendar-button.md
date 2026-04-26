---
id: form-calendar-button
title: CalendarButton
category: Buttons
context: form
summary: The CalendarButton tag renders as a push-button that opens a date-picker calendar and writes the selected date to a target text box.
keywords:
  - calendar
  - button
  - form
since: '1.0'
related:
  - calendar-image
  - calendar-link
  - date-input
  - textbox
---
# `<CalendarButton>`

The CalendarButton tag renders a push-button that opens a pop-up date-picker. When the user picks a date, it's written into the [target](#prop-target) control (typically a `<TextBox>`). Use [`<CalendarImage>`](calendar-image.md) for an image trigger or [`<CalendarLink>`](calendar-link.md) for a hyperlink that does the same thing.

::: info Validation is skipped
CalendarButton sets `CausesValidation="False"` automatically, so opening the calendar won't trigger client-side validation on the form. (For an alternative date entry experience that *does* validate, see [`<DateInput>`](date-input.md).)
:::

## Example
```html {8}
<AddForm>
  <SubmitCommand CommandText="INSERT INTO Events(EvtDate) VALUES(@EvtDate)" />
  <table>
    <tr>
      <td>
         <Label For="txtEventDate" Text="Event Date" />
         <TextBox Id="txtEventDate" DataField="EvtDate" DataType="datetime" />
         <CalendarButton Text="Select Date" Target="txtEventDate" Format="yyyy-MM-dd" />
       </td>
    </tr>
    <tr>
      <td colspan="2"><AddButton Text="Add"/> <CancelButton Text="Cancel"/></td>
    </tr>
  </table>
</AddForm>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [Target](#prop-target) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | control ID | | ID of the control (typically a `<TextBox>`) that will receive the selected date |
| Text | string | | Caption displayed on the button |
| AccessKey | string | | Keyboard shortcut character (e.g. `F` for Alt+F) |
| CssClass | string | | CSS class name(s) for styling the control |
| Enabled | `True` `False` | `True` | When `False`, the control is disabled (grayed out and not interactive) |
| [Format](#prop-format) | date format string | | Format string used when writing the selected date into the target. If omitted, the server's short date format is used |
| Height | [size](../unit-types.md) | | Height of the control |
| ID | string | | Unique identifier for the control within the form |
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

*   <span id="prop-target">**Target**</span>: The `ID` of the form control that will receive the selected date — typically a `<TextBox>`. The control must be in the same form as the calendar trigger.

*   <span id="prop-format">**Format**</span>: A .NET date format string used to write the selected date into the target control. If omitted, the server's short date format is used. Common patterns: `yyyy-MM-dd` (ISO date), `MM/dd/yyyy` (US), `dd/MM/yyyy` (UK). If you need to enforce that format on submission, pair the target textbox with a `<Validate Type="regex">` rule.
