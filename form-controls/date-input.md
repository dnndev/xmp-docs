---
id: form-date-input
title: DateInput
category: Input Controls
context: form
summary: >-
  The DateInput tag renders as a single-line textbox at run time that accepts
  dates and, optionally, time.
keywords:
  - date
  - input
  - form
since: '1.0'
---
# `<DateInput>`

The DateInput tag renders as a single-line textbox at run time that accepts dates and, optionally, time. You can specify a culture for date parsing and a display format for editing.

## Example
```html {7-8}
<AddForm>
  ...
  <table>
    <tr>
      <td>
        <Label For="txtEventDate" Text="Event Date" />
        <DateInput Id="txtEventDate" DataField="EventDate" DataType="DateTime"
           Culture="fr-FR" Format="dd-MM-yyyy"/>
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
| [DataType](#prop-datatype) | `DateTime` `Date` | `DateTime` | Database type for data commands |
| AccessKey | string | | Keyboard shortcut character (e.g. `F` for Alt+F) |
| CssClass | string | | CSS class name(s) for styling the control |
| [Culture](#prop-culture) | locale ID | | Culture used when converting input to a date (e.g. `en-US`, `fr-FR`) |
| [DateOnly](#prop-dateonly) | `True` `False` | `False` | Strips the time component from the value |
| Enabled | `True` `False` | `True` | When `False`, the control is disabled (grayed out and not interactive). Different from `ReadOnly`, which still allows focus and selection |
| [Format](#prop-format) | format string | | Date/time display format used when editing a record |
| Height | [size](../unit-types.md) | | Height of the control |
| [Nullable](#prop-nullable) | `True` `False` | `False` | Returns DBNull when the control is blank or whitespace |
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

*   <span id="prop-datatype">**DataType**</span>: The database type for this control. Use `DateTime` to store both date and time, or `Date` to store only the date portion. When set to `DateTime`, there is always a time component even if it isn't visible in the control.

*   <span id="prop-culture">**Culture**</span>: A locale ID identifying the culture that should be used when converting the control's input to a date for use by the database. Some examples: `en-GB`, `es-MX`, `es-SP`, `en-US`. If no culture is specified, the system's current culture is used.

*   <span id="prop-dateonly">**DateOnly**</span>: When set to True, the control only processes the date portion of the value entered. While a time may be entered by the user, it will not be sent to the database. When a date is retrieved from the database for editing, only the date will be displayed. When `DataType` is `DateTime` and `DateOnly` is True, the time component will always be set to 12:00:00 AM. When `DataType` is set to `Date`, only the date component is processed and the `DateOnly` property does not need to be set.

*   <span id="prop-format">**Format**</span>: When a record is being edited and a date value is read from the database and placed in the control, the Format attribute determines how it will be displayed. You can use standard date formatting expressions:
    *   `d`: Day of the month (1–31). When used alone, displays the short date pattern (e.g. 6/15/2009). Culture-dependent.
    *   `dd`: Day of the month with leading zero (01–31)
    *   `D`: Long date pattern (e.g. Monday, June 15, 2009). Culture-dependent.
    *   `M`: Month as a number (1–12)
    *   `MM`: Month with leading zero (01–12)
    *   `yy`: Two-digit year (e.g. 08 for 2008)
    *   `yyyy`: Four-digit year (e.g. 2008)
    *   `h`: Hour, 12-hour clock (1–12)
    *   `hh`: Hour, 12-hour clock with leading zero (01–12)
    *   `H`: Hour, 24-hour clock (1–24)
    *   `HH`: Hour, 24-hour clock with leading zero (01–24)
    *   `m`: Minute (0–59)
    *   `mm`: Minute with leading zero (00–59)
    *   `s`: Second (0–59)
    *   `ss`: Second with leading zero (00–59)
    *   `t`: Short time pattern (e.g. 1:45 PM). Culture-dependent.
    *   `T`: Long time pattern (e.g. 1:45:30 PM). Culture-dependent.

*   <span id="prop-nullable">**Nullable**</span>: If True, the control will return a DBNull value if the control is blank or contains just whitespace. If a DBNull value is passed to the control, the control will be set to an empty string.
