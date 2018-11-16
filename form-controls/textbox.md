# `<Textbox>`





The Textbox tag renders as a single-line text input box at run time.



## Syntax

<div xmlns="">`<Textbox`  
`   AccessKey="_string_"  
    BackColor="_color name_|#dddddd"  
    BorderColor="_color name_|#dddddd"  
    BorderStyle="**NotSet**|None|Dotted|Dashed|Solid|Double|Groove|Ridge| Inset|Outset"  
    BorderWidth="_size_"  
    CssClass="_string_"  
    DataField="_string_"  
    DataType="**string**|int32|int64|boolean|...."  
    Font-Bold="True|**False**"  
    Font-Italic="True|**False**"  
    Font-Names="_string_"  
    Font-Overline="True|**False**"  
    Font-Size="_string_|Smaller|Larger|XX-Small|X-Small|Small|Medium| Large|X-Large|XX-Large"  
    Font-Strikeout="True|**False**"  
    Font-Underline="True|**False**"  
    ForeColor="_color name_|#dddddd"  
    Height="_size_"  
    HtmlEncode="True|F**alse**"  
    ID="_string_"  
    MaxLength="_integer_"  
    Nullable="True|**False**"  
    Placeholder="_string_"  
    ReadOnly="True|**False**"  
    Style="_string_"  
    TabIndex="_integer_"  
    ToolTip="_string_"  
    Visible="**True**|False"  
    Width="_size_"  
``/> `</div>

 

## Remarks

You will probably use the <span style="font-family: monospace;">Textbox</span> tag most often in your forms. It is the standard method for input within most forms and is perfect for entering names, addresses, and other single-line input. The "datatype" attribute defaults to **string**.

*   **AccessKey**: In browsers that support it, this property can be set to a character on the keyboard that can be used to set focus to the control. For instance, setting the value to F allows the user to access the control by pressing Alt+F on their keyboard (for Windows machines).  

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control, specified in [units.  

    ](../unit-types.md)
*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **DataField**: Name of the parameter in the `<SubmitCommand>` which will be filled with this control's data on when the form is submitted and/or the parameter in the `<SelectCommand>` which will supply this control's data when the form is loaded. This attribute is required if the control will participate in operations with your form's data commands.  

*   **DataType**: The type of data this control is supplying to the data commands. This is a [Database type](../data-types.md). . This attribute is required if the control will participate in operations with your form's data commands.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More  

    ](../font-properties.md)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **HtmlEncode**: When set to true, the content of the control will have any HTML encoded before sending it to the SubmitCommand for processing. Note that setting this to true can help protect against scripting attacks but it will also enlarge the size of the text that is saved (<) becomes (&lt;), for instance.  

*   **ID**: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form.  

*   **Nullable**: If True (the default is False), the control will return a DBNull value if the control is blank or contains just whitespace. If a DBNull value is passed to the control, the control will be set to an empty string.  

*   **Placeholder**: New to version 4.2\. If this property is set, the value will be displayed in the textbox when it is empty. It is an HTML5 feature that will only function on capable browsers (all other browsers will ignore it). The purpose is to provide the user with some explanatory text in the control itself prior to the user entering any text. For instance, a contact form's Email textbox might have "Enter your email address" or simple "Email" as the Placeholder. When the user tabs into the control, the text will disappear. If the user tabs out without entering anything, the "Email" text will re-appear. The value here is not a default value for the control and will not be sent to the database.  

*   **ReadOnly**: If True, the contents of the control cannot be changed. The default value is False.  

*   **MaxLength**: The maximum number of characters allowed in the text box.  

*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. `color: red; border: solid 1px black;`).  

*   **Tabindex**: Sets the tab index for the control.  

*   **Tooltip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control.  

*   **Visible**: Determines if the control is visible (true) or hidden (false).  

*   **Width**: Width of the control in [units](../unit-types.md).  



## Example

<div>`<AddForm>`  
`  ...`  
`  <table>`  
`    <tr>`  
`      <td>`  
`        <Label for="txtFirstName" text="First Name" />`  
`        <Textbox id="txtFirstName" datafield="FirstName" datatype="string" />`  
`      </td>`  
`    </tr>`  
`    <tr>`  
`      <td>`  
`        <Label for="txtLastName" text="Last Name" />`  
`        <Textbox id="txtLastName" datafield="LastName" datatype="string" />`  
`       </td>`  
`    </tr>`  
`    <tr>`  
`      <td colspan="2">`  
`        <AdduButton text="Add"/>&nbsp;<CancelButton text="Cancel"/>`  
`      </td>`  
`    </tr>`  
`  </table>`  
`</AddForm>`  

</div>

