# `<Validate type="compare">`

The Validate tag whose type is set to "compare" is referred to as a Comparison Validator and is used to ensure the value of the target control is the same as a hard-coded value or the same as the value in a second control. It is useful when prompting the user for an email address or password.

## Syntax
```html
<Validate 
    BackColor="color name|#dddddd"
    BorderColor="color name|#dddddd"
    BorderStyle="NotSet|None|Dotted|Dashed|Solid|Double|Groove|Ridge| Inset|Outset"
    BorderWidth="size"
    CompareTarget="string"
    CompareValue="string"
    CssClass="string"
    DataType="String|Integer|Double|Date|Currency"
    Display="Static|Dynamic"
    EnableClientScript="True|False"
    Font-Bold="True|False"
    Font-Italic="True|False"
    Font-Names="string"
    Font-Overline="True|False"
    Font-size="string|Smaller|Larger|XX-Small|X-Small|Small|Medium| Large|X-Large|XX-Large"
    Font-strikeout="True|False"
    Font-Underline="True|False"
    ForeColor="color name|#dddddd"
    Height="size"
    Message="string"
    Operator="Equal|NotEqual|GreaterThan|GreaterThanEqual|LessThan|LessThanEqual|DataTypeCheck"
    Target="string"
    Text="string"
    Type="Compare"
    Width="size" 
/> 
```
 

## Remarks

When the "type" attribute is set to **Compare**, the control prevents the form from being submitted if its associated control does not match a value - either a hard-coded value or the value in a second control. You associate a control with the `<Validate>` tag by setting its "target" attribute to the ID of the control you wish to validate. To compare the target control with the value of a second control, place the second control's ID in the "comparetarget" attribute and do not define the "comparevalue" attribute. To compare the target control with a hard-coded value, place that value in the "comparevalue" attribute and do not define the "comparetarget" attribute. If you set the "operator" attribute to DataTypeCheck then choose the datatype to check-for using the "DataType" attribute. The "message" attribute is the text that will be displayed to the user when validation fails. If you are using the `<ValidationSummary>` tag, then you can also supply a "text" attribute. When validation fails, the "text" will be displayed where your `<Validate>` tag is and the "message" will be displayed in the `<ValidationSummary>`.

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control. Defaults to NotSet.  

*   **BorderWidth**: Width of the border around the control, specified in [units](../unit-types.md)

*   **CompareTarget**: Place the second control's `ID` here to compare the target control with the value of a second control, and do not define the `CompareValue` attribute.  

*   **CompareValue**: To compare the target control with a hard-coded value, place that value in the `CompareValue` attribute and do not define the `CompareTarget` attribute.  

*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **DataType**: Use this property to choose the datatype to check for. DataTypes include String, Integer, Double, Date, Currency. Default is String.  

*   **Display**: This attribute determines if the `<Validate>` tag will reserve space for its message in the page layout - typically resulting in blank space in your form -or whether it will dynamically allocate the space for the message when validation fails. Defaults to **Dynamic** display.  

*   **EnableClientScript**: Use the EnableClientScript property to specify whether client-side validation is enabled. Defaults to **True**.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More](../font-properties.md)

*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **Message**: This is the text that will be displayed to the user, when validation fails. If you are using the `<ValidationSummary>`, then this is the message that will be displayed in the `<ValidationSummary>` when validation fails.  

*   **Operator**: If you set the `Operator` attribute to `DataTypeCheck`, then choose the datatype to check for - using the `DataType` attribute.  

*   **Target**: Set this attribute to the ID of the control you wish to validate.  

*   **Text**: If you are using the `<ValidationSummary>` tag, then you can also supply a `Text` attribute. When validation fails, the `Text` will be displayed where your `<Validate>` tag is and the "message" will be displayed in the `<ValidationSummary>`.  

*   **Type**: When the `Type` attribute is set to **Compare**, the control prevents the form from being submitted if its associated control does not match a value - either a hard-coded value or the value in a second control.  

*   **Width**: Width of the control in [units](../unit-types.md).  



## Example
```html {14-15,21}
<AddForm>
  ...
  <table>
    <tr>
      <td>
        <Label For="txtEmailOne" Text="Email" />
        <TextBox Id="txtEmailOne" />
      </td>
      </tr>
      <tr>
        <td>
          <Label For="txtEmail" Text="Email" /> 
          <TextBox Id="txtEmail" DataField="Email" DataType="string" />
          <Validate Type="compare" Target="txtEmail" CompareTarget="txtEmailOne" 
                    Message="The email addresses don't match" />
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <AddButton text="Add"/>&nbsp;<cancelbutton text="Cancel"/>
          <ValidationSummary />
        </td>
      </tr>
  </table>
</AddForm>
```
