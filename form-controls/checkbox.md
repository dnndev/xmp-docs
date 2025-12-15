---
id: form-checkbox
title: CheckBox
category: Selection Controls
context: form
summary: >-
  The CheckBox tag renders as a checkbox and associated label at run-time. A
  series of CheckBox controls provides a useful alternative to the CheckBoxList.
keywords:
  - check
  - box
  - form
---
# `<CheckBox>`

The CheckBox tag renders as a checkbox and associated label at run-time. A series of CheckBox controls provides a useful alternative to the CheckBoxList. With the CheckBoxList, all selected values are placed into a single string value that is sent to the data source. However, a series of individual CheckBox controls provides you with the same basic functionality as the CheckBoxList, but you also have the ability to store the value of each CheckBox in its own data field.

## Syntax
```html
<CheckBox 
    AccessKey="string" 
    BackColor="color name|#dddddd" 
    BorderColor="color name|#dddddd" 
    BorderStyle="NotSet|None|Dotted|Dashed|Solid|Double|Groove|Ridge| Inset|Outset" 
    BorderWidth="size" 
    Checked="True|False"
    CssClass="string" 
    DataField="string" 
    DataType="Boolean" 
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
    Nullable="True|False" 
    Style="string" 
    TabIndex="integer"
    Text="string"
    TextAlign="Left|Right" 
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

*   **BorderWidth**: Width of the border around the control, specified in [units.  

    ](../unit-types.md)
*   **Checked**: Determines whether the checkbox is checked.  

*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **DataField**: Name of the parameter in the `<SubmitCommand>` which will be filled with this control's data on when the form is submitted and/or the parameter in the `<SelectCommand>` which will supply this control's data when the form is loaded. This attribute is required if the control will participate in operations with your form's data commands.  

*   **DataType**: The type of data this control is supplying to the data commands. This is a [Database type](../data-types.md). Valid values are: boolean only. This attribute is required if the control will participate in operations with your form's data commands.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More](../font-properties.md)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **ID**: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form.  

*   **Nullable**: If this is set to True, the control will return a DBNull value if the control has not been checked. If a DBNull value is passed to this control, regardless of the Nullable setting, the control will be un-checked.  

*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. `color: red; border: solid 1px black;`).  

*   **TabIndex**: Sets the tab index for the control.  

*   **Text**: The caption to display next to the checkbox.  

*   **TextAlign**: The alignment of the text label with respect to its associated check box. Valid values are Left and Right. Default value is Right.  

*   **ToolTip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control.  

*   **Visible**: Determines if the control is visible (true) or hidden (false).  

*   **Width**: Width of the control in [units](../unit-types.md).  

## Example
```html {12}
<AddForm> 
  ... 
  <table> 
    <tr> 
       <td> 
        <Label Target="txtFirstName" Text="First Name" /> 
        <Textbox Id="txtFirstName" DataField="FirstName" DataType="string" /> 
      </td> 
    </tr> 
    <tr> 
      <td>
        <CheckBox Id="chkAgree" DataField="AgreeToTerms" DataType="boolean" 
          Text="I agree to be bound by the terms of the contract." />  
      </td> 
    </tr> 
    <tr> 
      <td colspan="2"> 
        <AddButton Text="Add"/> <CancelButton Text="Cancel" /> 
      </td> 
    </tr> 
  </table> 
</AddForm>
```
