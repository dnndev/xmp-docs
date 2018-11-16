# <CheckBox>

<a name="top"></a>



The CheckBox tag renders as a checkbox and associated label at run-time. A series of CheckBox controls provides a useful alternative to the CheckBoxList. With the CheckBoxList, all selected values are placed into a single string value that is sent to the data source. However, a series of individual CheckBox controls provides you with the same basic functionality as the CheckBoxList, but you also have the ability to store the value of each CheckBox in its own data field.

<a name="syntax"></a>

## Syntax

<div>`<CheckBox`  
``    AccessKey="_string_"  
    BackColor="_color name_|#dddddd"  
    BorderColor="_color name_|#dddddd"  
    BorderStyle="**NotSet**|None|Dotted|Dashed|Solid|Double|Groove|Ridge| Inset|Outset"  
    BorderWidth="_size_"  
    Checked="True|**False**"  
    CssClass="_string_"  
`    DataField="_string_"`  
`    DataType="**B**oolean"`  
    Font-Bold="True|**False**"  
    Font-Italic="True|**False**"  
    Font-Names="_string_"  
    Font-Overline="True|**False**"  
    Font-Size="_string_|Smaller|Larger|XX-Small|X-Small|Small|Medium| Large|X-Large|XX-Large"  
    Font-Strikeout="True|**False**"  
    Font-Underline="True|**False**"  
    ForeColor="_color name_|#dddddd"  
    Height="_size_"  
    ID="_string_"  
    Nullable="True|**False**"````  
    Style="_string_"  
    TabIndex="_integer_"``</div>

<div>``    Text="_string_"  
    TextAlign="Left|**Right**"  
    ToolTip="_string_"  
    Visible="**True**|False"  
    Width="_size_"```  
/>`</div>

<a name="remarks"></a>

## Remarks

*   **AccessKey**: In browsers that support it, this property can be set to a character on the keyboard that can be used to set focus to the control. For instance, setting the value to F allows the user to access the control by pressing Alt+F on their keyboard (for Windows machines).  

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control, specified in [units.  

    ](../unit-types.md)
*   **Checked**: Determines whether the checkbox is checked.  

*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **DataField**: Name of the parameter in the `<SubmitCommand>` which will be filled with this control's data on when the form is submitted and/or the parameter in the `<SelectCommand>` which will supply this control's data when the form is loaded. This attribute is required if the control will participate in operations with your form's data commands.  

*   **DataType**: The type of data this control is supplying to the data commands. This is a [Database type](datatypes.html). Valid values are: boolean only. This attribute is required if the control will participate in operations with your form's data commands.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More  

    ](../font-properties.md)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **ID**: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form.  

*   **Nullable**: If this is set to True, the control will return a DBNull value if the control has not been checked. If a DBNull value is passed to this control, regardless of the Nullable setting, the control will be un-checked.  

*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. "color: red; border: solid 1px black;").  

*   **TabIndex**: Sets the tab index for the control.  

*   **Text**: The caption to display next to the checkbox.  

*   **TextAlign**: The alignment of the text label with respect to its associated check box. Valid values are Left and Right. Default value is Right.  

*   **ToolTip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control.  

*   **Visible**: Determines if the control is visible (true) or hidden (false).  

*   **Width**: Width of the control in [units](../unit-types.md).  



## Example

<a name="example"></a>

<div>`<AddForm>`  
`  ...`  
`  <table>`  
`    <tr>`  
`       <td>`  
`        <Label Target="txtFirstName" Text="First Name" />`  
`        <Textbox Id="txtFirstName" DataField="FirstName" DataType="string" />`  
`      </td>`  
`    </tr>`  
`    <tr>`  
`      <td>`<span class="CodeHighlight" xmlns="http://www.w3.org/1999/xhtml">`<CheckBox Id="chkAgree" DataField="AgreeToTerms" DataType="boolean" Text="I agree to be bound by the terms of the contract." />`</span>  
`      </td>`  
`    </tr>`  
`    <tr>`  
`      <td colspan="2">`  
`        <AddButton Text="Add"/> <CancelButton Text="Cancel" />`  
`      </td>`  
`    </tr>`  
`  </table>`  
`</AddForm>`</div>

