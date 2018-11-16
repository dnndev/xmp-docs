# `<CalendarLink>`

The Calendar tag renders as a push-button at run-time. When clicked, a calendar date-picker pops up to enable the user to select a date.

## Syntax
```html
<CalendarLink
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
    Target="ID of control that will receive the selected date"
    Text="string"
    ToolTip="string"
    Visible="True|False"
    Width="size"
  />
```

## Remarks

*   **AccessKey**: In browsers that support it, this property can be set to a character on the keyboard that can be used to set focus to the control. For instance, setting the value to F allows the user to access the control by pressing Alt+F on their keyboard (for Windows machines).  

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control, specified in [units](../unit-types.md)
*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More](../font-properties.md)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Format**: If specified, this overrides the default date format used by the pop-up calendar. If left blank, the web server's default short date format will be used. An example format would be: `format="yyyy-MM-dd"` where _yyyy_ returns the four digit year, _MM_ returns a two-digit month, and _dd_ returns a two-digit day. If you need the value to stay in that format, consider also using the `<validate type="regex">` tag to validate the target control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. `color: red; border: solid 1px black;`).  

*   **Target**: This is the ID of the control where the calendar's selected date will be sent. This should be a text box.  

*   **Text**: The caption that will be displayed on the link.  

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
         <CalendarLink Text="Select Date" Target="txtEventDate" Format="yyyy-MM-dd" />  
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

