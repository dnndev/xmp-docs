# `<Password>`

The Password tag renders as a single-line text input box at run time that masks user input so that passwords and other sensitive data isn't viewable by others looking at the screen.

## Syntax
```html
<Password 
    AccessKey="string" 
    BackColor="color name|#dddddd" 
    BorderColor="color name|#dddddd" 
    BorderStyle="NotSet|None|Dotted|Dashed|Solid|Double|Groove|Ridge| Inset|Outset" 
    BorderWidth="size" 
    CssClass="string" 
    DataField="string" 
    DataType="string|int32|int64|boolean|...."
    Font-Bold="True|False" 
    Font-Italic="True|False" 
    Font-Names="string" 
    Font-Overline="True|False" 
    Font-Size="string|Smaller|Larger|XX-Small|X-Small|Small|Medium| Large|X-Large|XX-Large" 
    Font-Strikeout="True|False" 
    Font-Underline="True|False" 
    ForeColor="color name|#dddddd" 
    Height="size" 
    ID="string" 
    MaxLength="integer"
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

If no value is supplied for the "datatype" attribute, a data type of **string** is assumed.

*   **AccessKey**: In browsers that support it, this property can be set to a character on the keyboard that can be used to set focus to the control. For instance, setting the value to F allows the user to access the control by pressing Alt+F on their keyboard (for Windows machines)
*   **BackColor**: Color of the background of the control.
*   **BorderColor**: Color of the border around the control
*   **BorderStyle**: Style of the border around the control.
*   **BorderWidth**: Width of the border around the control, specified in [units](../unit-types.md)
*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control
*   **DataField**: Name of the parameter in the `<submitcommand>` which will be filled with this control's data on when the form is submitted and/or the parameter in the `<selectcommand>` which will supply this control's data when the form is loaded. This attribute is required if the control will participate in operations with your form's data commands.
*   **DataType**: The type of data this control is supplying to the data commands. This is a [Database type](../data-types.md). Valid values are: string (default), int32, int64, boolean, . This attribute is required if the control will participate in operations with your form's data commands.
*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More](../font-properties.md)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  
*   **Height**: Height of the control, specified in [units](../unit-types.md).
*   **ID**: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form.
*   **Nullable**: If True (the default is False), the control will return a DBNull value if the control is blank or contains just whitespace. If a DBNull value is passed to the control, the control will be set to an empty string.
*   **ReadOnly**: If True, the contents of the control cannot be changed. The default value is False.
*   **MaxLength**: The maximum number of characters allowed in the text box.
*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. "color: red; border: solid 1px black;")
*   **Visible**: Determines if the control is visible (true) or hidden (false)
*   **Width**: Width of the control in [units](../unit-types.md).


## Example
```html {13}
<AddForm>
  ...
  <table>
    <tr>
      <td>
        <Label for="txtFirstName" text="First Name" /> 
        <Textbox id="txtFirstName" datafield="FirstName" datatype="string" />
       </td>
    </tr>
    <tr>
       <td>
         <Label for="txtPassword" text="Enter your password" />
         <Password id="txtPassword" datafield="Password" datatype="string" />
       </td>
    </tr>
    <tr>
       <td colspan="2">
         <AddButton text="Add"/> <CancelButton text="Cancel"/>
       </td>
    </tr>
  </table>
</AddForm>

