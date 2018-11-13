# <Password>

<a name="top"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

The Password tag renders as a single-line text input box at run time that masks user input so that passwords and other sensitive data isn't viewable by others looking at the screen.

<a name="syntax"></a>

## Syntax

<div>`<Password`  
`    AccessKey="_string_"  
    BackColor="_color name_|#dddddd"  
    BorderColor="_color name_|#dddddd"  
    BorderStyle="**NotSet**|None|Dotted|Dashed|Solid|Double|Groove|Ridge| Inset|Outset"  
    BorderWidth="_size_"  
    CssClass="_string_"  
`    DataField="_string_"`  
`    DataType="**string**|int32|int64|boolean|...."  
`    Font-Bold="True|**False**"  
    Font-Italic="True|**False**"  
    Font-Names="_string_"  
    Font-Overline="True|**False**"  
    Font-Size="_string_|Smaller|Larger|XX-Small|X-Small|Small|Medium| Large|X-Large|XX-Large"  
    Font-Strikeout="True|**False**"  
    Font-Underline="True|**False**"  
    ForeColor="_color name_|#dddddd"  
    Height="_size_"  
    ID="_string_"  
    MaxLength="_integer_"  
    Nullable="True|**False**"  
    ReadOnly="True|**False**"  
    Style="_string_"  
    TabIndex="_integer_"  
    ToolTip="_string_"  
    Visible="**True**|False"  
    Width="_size_"`  
`/> `</div>

 <a name="remarks"></a>

## Remarks

If no value is supplied for the "datatype" attribute, a data type of **string** is assumed.

*   **AccessKey**: In browsers that support it, this property can be set to a character on the keyboard that can be used to set focus to the control. For instance, setting the value to F allows the user to access the control by pressing Alt+F on their keyboard (for Windows machines)
*   **BackColor**: Color of the background of the control.
*   **BorderColor**: Color of the border around the control
*   **BorderStyle**: Style of the border around the control.
*   **BorderWidth**: Width of the border around the control, specified in [units](units.html)
*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control
*   **DataField**: Name of the parameter in the `<submitcommand>` which will be filled with this control's data on when the form is submitted and/or the parameter in the `<selectcommand>` which will supply this control's data when the form is loaded. This attribute is required if the control will participate in operations with your form's data commands.
*   **DataType**: The type of data this control is supplying to the data commands. This is a [Database type](datatypes.html). Valid values are: string (default), int32, int64, boolean, . This attribute is required if the control will participate in operations with your form's data commands.
*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More](fontproperties.html)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](units.html).
*   **ID**: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form.
*   **Nullable**: If True (the default is False), the control will return a DBNull value if the control is blank or contains just whitespace. If a DBNull value is passed to the control, the control will be set to an empty string.
*   **ReadOnly**: If True, the contents of the control cannot be changed. The default value is False.
*   **MaxLength**: The maximum number of characters allowed in the text box.
*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. "color: red; border: solid 1px black;")
*   **Visible**: Determines if the control is visible (true) or hidden (false)
*   **Width**: Width of the control in [units](units.html).

[Back to top](#top)<a name="example"></a>

## Example

<div>`<addform>`  
`  ...`  
`  <table>`  
`    <tr>`  
`      <td>`  
`        <label for="txtFirstName" text="First Name" />`  
`        <textbox id="txtFirstName" datafield="FirstName" datatype="string" />`  
`       </td>`  
`    </tr>`  
`    <tr>`  
`       <td>`  
`         <label for="txtPassword" text="Enter your password" />`  
`         <password id="txtPassword" datafield="Password" datatype="string" />`  
`       </td>`  
`    </tr>`  
`    <tr>`  
`       <td colspan="2">`  
`         <addbutton text="Add"/> <cancelbutton text="Cancel"/>`  
`       </td>`  
`    </tr>`  
`  </table>`  
`</addform>`</div>

[Back to top](#top)