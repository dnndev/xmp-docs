# `<DateInput>`

The DateInput tag renders as a single-line textbox at run time that accepts dates and, optionally, time. .

## Syntax
```html
<DateInput 
    AccessKey="string" 
    BackColor="color name|#dddddd" 
    BorderColor="color name|#dddddd" 
    BorderStyle="NotSet|None|Dotted|Dashed|Solid|Double|Groove|Ridge| Inset|Outset" 
    BorderWidth="size" 
    CssClass="string" 
    Culture="locale id"
    DataField="string" 
    DataType="datetime|date"
    DateOnly="True|False"
    Font-Bold="True|False" 
    Font-Italic="True|False" 
    Font-Names="string" 
    Font-Overline="True|False" 
    Font-Size="string|Smaller|Larger|XX-Small|X-Small|Small|Medium| Large|X-Large|XX-Large" 
    Font-Strikeout="True|False" 
    Font-Underline="True|False" 
    ForeColor="color name|#dddddd" 
    Format="date/time formatting expression"
    Height="size" 
    ID="string" 
    Nullable="True|False"
    ReadOnly="True|False" 
    Style="string" 
    TabIndex="integer" 
    ToolTip="string"
    Visible="True|False" 
    Width="size"
/> 
```
 

## Remarks

When you need to enter dates in your forms, the DateInput tag will help. It allows you to specify what **culture** XMod Pro should use when evaluating the input so it can better convert it to the appropriate datetime data type. Additionally, you can specify a **format** for the input that will be used when editing a record. The `datatype` attribute default is **datetime**.

*   **AccessKey**: In browsers that support it, this property can be set to a character on the keyboard that can be used to set focus to the control. For instance, setting the value to F allows the user to access the control by pressing Alt+F on their keyboard (for Windows machines)
*   **BackColor**: Color of the background of the control.
*   **BorderColor**: Color of the border around the control
*   **BorderStyle**: Style of the border around the control.
*   **BorderWidth**: Width of the border around the control, specified in [units](../unit-types.md)
*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control
*   **Culture**: A locale ID identifying the culture that should be used when converting the control's input to a date for use by the database. Some examples: en-GB, es-MX, es-SP, en-US. If no culture is specified the system's current culture is used.
*   **DataField**: Name of the parameter in the `<submitcommand>` which will be filled with this control's data on when the form is submitted and/or the parameter in the `<selectcommand>` which will supply this control's data when the form is loaded. This attribute is required if the control will participate in operations with your form's data commands.
*   **DateOnly**: (new to version 3.1) When set to True, the control only processes the date portion of the value entered. While a time may be entered by the user, it will not be sent to the database. When a date if retrieved from the database for editing, only the date will be displayed. It's important to remember that when the DataType is set to DateTime, there is always a time component - even if it isn't visible in the control. So, when DataType is DateTime and DateOnly is true, the time component will always be set to 12:00:00 AM. When DataType is set to Date, only the date component is processed and stored in the database and he DateOnly property does not need to be set.
*   **DataType**: The type of data this control is supplying to the data commands. This is a [Database type](../data-types.md). . This attribute is required if the control will participate in operations with your form's data commands. The DateInput uses datetime by default.
*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More](../font-properties.md)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.
*   **Format**: When a record is being edited and a date value is read from the database and placed in the control, the Format attribute determines how it will be displayed. You can use standard date formatting expressions here:
    *   `d`: Represents the day of the month as a number from 1 through 31
    *   `dd`: Represents the day of the month as a number from 01 through 31
    *   `M`: Represents the month as a number from 1 to 12
    *   `MM`: Represents the month as number from 01 to 12
    *   `yy`: Represents the year as a two digit number. 2008 would be 08, 1999 would be 99
    *   `yyyy`: Represents the year as a four digit number. 2008 would be 2008, 1999 would be 1999
    *   `h`: Represents the hour as a number from 1 to 12, using a twelve hour clock
    *   `hh`: Represents the hours as a number from 01 to 12 using a twelve hour clock
    *   `H`: Represents the hour as a number from 1 to 24 using a 24 hour clock
    *   `HH`: Represents the hour as a number from 01 to 24 using a 24 hour clock
    *   `m`: Represents the minute as a number from 0 to 59
    *   `mm`: Represents the minute as a number from 00 to 59
    *   `s`: Represents the second as a number from 0 to 59
    *   `ss`: Represents the second as number from 00 to 59
    *   `t`: Represents the time as a short time pattern i.e 2009-06-15T13:45:30 -> 1:45 PM. The results are culture-dependent.
    *   `T`: Represents the time as a long time pattern i.e 2009-06-15T13:45:30 -> 1:45:30 PM. The results are culture-dependent.
*   **Height**: Height of the control, specified in [units](../unit-types.md).
*   **ID**: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form.
*   **Nullable**: If True (the default is False), the control will return a `DBNull` value if the control is blank or contains just whitespace. If a `DBNull` value is passed to the control, the control will be set to an empty string.
*   **ReadOnly**: If True, the contents of the control cannot be changed. The default value is False.
*   **MaxLength**: The maximum number of characters allowed in the text box.
*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. `color: red; border: solid 1px black;`)
*   **Tabindex**: Sets the tab index for the control
*   **Tooltip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control
*   **Visible**: Determines if the control is visible (true) or hidden (false)
*   **Width**: Width of the control in [units](../unit-types.md).



## Example
```html {7-8}
<AddForm>
  ...
  <table>
    <tr>
      <td>
        <label for="txtEventDate" text="Event Date" /> 
        <DateInput id="txtEventDate" datafield="EventDate" datatype="datetime" 
           culture="fr-FR" format="dd-MM-yyyy"/>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <AddButton text="Add"/>&nbsp;<CancelButton text="Cancel"/>
      </td>
    </tr>
  </table>
</AddForm>
```
