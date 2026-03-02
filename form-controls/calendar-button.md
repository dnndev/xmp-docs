---
id: form-calendar-button
title: CalendarButton
category: Buttons
context: form
summary: >-
  The CalendarButton tag renders as a push-button at run-time. When clicked, a
  calendar date-picker pops up to enable the user to select a date.
keywords:
  - calendar
  - button
  - form
---
# `<CalendarButton>`

The CalendarButton tag renders as a push-button at run-time. When clicked, a calendar date-picker pops up to enable the user to select a date.

## Syntax
```html
<CalendarButton
    AccessKey="string"   
    BackColor="color name|#dddddd"
    BorderColor="color name|#dddddd"
    BorderStyle="NotSet|None|Dotted|Dashed|Solid|Double|Groove|Ridge|Inset|Outset"
    BorderWidth="size"
    CssClass="string"
    Font-Bold="True|False"
    Font-Italic="True|False"
    Font-Names="string"
    Font-Overline="True|False"
    Font-Size="string|Smaller|Larger|XX-Small|X-Small|Small|Medium|Large|X-Large|XX-Large"
    Font-Strikeout="True|False"
    Font-Underline="True|False"
    ForeColor="color name|#dddddd"
    Format="date-formatting expression"
    Height="size"
    Style="string"
    TabIndex="integer"
    Target="ID of control that will receive the selected date"
    Text="string"
    ToolTip="string"
    Visible="True|False"
    Width="size"
  /> 
```

## Remarks

*   **AccessKey**: In browsers that support it, this property can be set to a character on the keyboard that can be used to set focus to the control. For instance, setting the value to F allows the user to access the control by pressing Alt+F on their keyboard (for Windows machines).  

*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **Format**: If specified, this overrides the default date format used by the pop-up calendar. If left blank, the web server's default short date format will be used. An example format would be: `format="yyyy-MM-dd"` where _yyyy_ returns the four digit year, _MM_ returns a two-digit month, and _dd_ returns a two-digit day. If you need the value to stay in that format, consider also using the `<validate type="regex">` tag to validate the target control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **Style**: Same as the HTML style attribute. It allows you to apply CSS styling to the control (e.g. `color: red; border: solid 1px black;`).  

*   **TabIndex**: Sets the tab index for the control.  

*   **Target**: This is the ID of the control where the calendar's selected date will be sent. This should be a text box.  

*   **Text**: The caption that will be displayed on the button.  

*   **ToolTip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control.  

*   **Visible**: Determines if the control is visible (true) or hidden (false).  

*   **Width**: Width of the control in [units](../unit-types.md).  



## Example
```html {8}
<AddForm>  
  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName) VALUES(@FirstName, @LastName)" />  
  <table>  
    <tr>  
      <td>  
         <Label For="txtEventDate" Text="Event Date" />  
         <TextBox Id="txtEventDate" DataField="EvtDate" DataType="datetime" />  
         <CalendarButton Text="Select Date" Target="txtEventDate" Format="yyyy-MM-dd" />  
       </td>  
    </tr>  
    ...  
    <tr>  
      <td colspan="2">  
        <AddButton Text="Add"/> <CancelButton Text="Cancel"/>  
      </td>  
    </tr>  
  </table>  
</AddForm>
```

<details>
<summary>Deprecated Properties</summary>

These properties use ASP.NET inline styling and are no longer recommended. Use `CssClass` for CSS classes or `Style` for inline CSS instead.

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
