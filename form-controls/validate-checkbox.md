# <Validate type="checkbox">





The Validate tag whose type is set to "checkbox" is referred to as a CheckBox Validator and is used to ensure the user either checks or does not check a checkbox control.



## Syntax

<div class="Code">`<Validate`  
`` BackColor="_color name_|#dddddd"  
    BorderColor="_color name_|#dddddd"  
    BorderStyle="**NotSet**|None|Dotted|Dashed|Solid|Double|Groove|Ridge| Inset|Outset"  
    BorderWidth="_size_"  
    CssClass="_string_"  
    Display="Static|**Dynamic**"`  
`   Font-Bold="True|**False**"  
    Font-Italic="True|**False**"  
    Font-Names="_string_"  
    Font-Overline="True|**False**"  
    Font-Size="_string_|Smaller|Larger|XX-Small|X-Small|Small|Medium| Large|X-Large|XX-Large"  
    Font-Strikeout="True|**False**"  
    Font-Underline="True|**False**"  
    ForeColor="_color name_|#dddddd"  
    Height="_size_"  
    Message="_string_"  
    MustBeChecked="**True**|False"  
    Target="_string_"  
    Text="_string_"  
    Type="Checkbox"  
    Width="_size_"``  
`/> `</div>

 

## Remarks

The Checkbox validator is one type of the `<Validate>` tag. When the "type" attribute is set to **Checkbox**, the control prevents the form from being submitted if its associated checkbox control is checked or un-checked (depending on settings). You associate a control with the `<Validate>` tag by setting its "target" attribute to the ID of the control you wish to validate. The "message" attribute is the text that will be displayed to the user when validation fails. If you are using the `<ValidationSummary>` tag, then you can also supply a "text" attribute. When validation fails, the "text" will be displayed where your `<Validate>` tag is and the "message" will be displayed in the `<ValidationSummary>`. The "display" attribute determines if the `<Validate>` tag will reserve space for its message in the page layout - typically resulting in blank space in your form -or whether it will dynamically allocate the space for the message when validation fails. The `<Validate>` tag defaults to **Dynamic** display.  

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control. Defaults to NotSet.  

*   **BorderWidth**: Width of the border around the control, specified in (../unit-types.md)  

*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **Display**: This attribute determines if the <Validate> tag will reserve space for its message in the page layout - typically resulting in blank space in your form -or whether it will dynamically allocate the space for the message when validation fails. Defaults to **Dynamic** display.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More  

    ](../font-properties.md)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **Message**: This is the text that will be displayed to the user, in the <span style="font-family: monospace;" xmlns="http://www.w3.org/1999/xhtml"><ValidationSummary></span>, when validation fails.  

*   **MustBeChecked**: True/False, default value is True. Determines what constitutes a valid state for the control. If set to True, then the user must check the box for the control to be valid. If the property is set to False, the user must un-check the control for it to be valid.  

*   **Target**: Set this attribute to the ID of the control you wish to validate.  

*   **Text**: . If you are using the `<ValidationSummary>` tag, then you can also supply a "text" attribute. When validation fails, the "text" will be displayed where your `<Validate>` tag is and the "message" will be displayed in the `<ValidationSummary>`.  

*   **Type**: When the "type" attribute is set to **Checkbox**, the control prevents the form from being submitted if its associated checkbox control is checked or un-checked (depending on settings).  

*   **Width**: Width of the control in [units](../unit-types.md).  



## Example

<div class="Code" xmlns="">`<AddForm>`  
`  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName) VALUES(@FirstName, @LastName)" />`  
`    <table>`  
``      <tr>`  
`        <td>`  
`          <Label For="txtFirstName" Text="First Name" />`  
`          <TextBox Id="txtFirstName" DataField="FirstName" DataType="string" />`  
`        </td>`  
`      </tr>`  
`      <tr>`  
`        <td>`  
`          <Label For="txtLastName" Text="Last Name" />`  
`          <TextBox Id="txtLastName" DataField="LastName" DataType="string" />`  
`        </td>`  
`      </tr>`  
      <tr>`  
`        <td>`  
`          <Label For="chkAgree" Text="I Agree to the Terms of Service" />`  
`          <Checkbox Id="chkAgree" DataField="Agree" DataType="boolean" />`  
`<span style="color: #ff0000;"><Validate Type="checkbox" target="chkAgree" mustbechecked="True" message="You must agree to the terms" /></span>`  
`        </td>`  
`      </tr>`  
`      <tr>`  
`        <td colspan="2">`  
`          <AddButton text="Add" />&nbsp;<CancelButton text="Cancel" />`  
`        </td>`  
`      </tr>`  
`    </table>`  
`</AddForm>`</div>

