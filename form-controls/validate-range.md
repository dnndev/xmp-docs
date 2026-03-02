---
id: form-validate-range
title: Validate type="Range"
category: Validation
context: form
summary: >-
  The Validate tag whose type is set to "range" is referred to as a Range
  Validator and is used to ensure the value of the target control falls within
  the specified range of values. This can be used, for example, to ensure that
  only a limited number of tickets can be purchased - that the number of tickets
  ordered is at least one but not more than five.
keywords:
  - validate
  - type="
  - range"
  - form
---
# `<Validate type="Range">`

The Validate tag whose type is set to "range" is referred to as a Range Validator and is used to ensure the value of the target control falls within the specified range of values. This can be used, for example, to ensure that only a limited number of tickets can be purchased - that the number of tickets ordered is at least one but not more than five.

## Syntax
```html
<Validate 
    BackColor="color name|#dddddd"
    BorderColor="color name|#dddddd"
    BorderStyle="NotSet|None|Dotted|Dashed|Solid|Double|Groove|Ridge| Inset|Outset"
    BorderWidth="size"
    CssClass="string"
    DataType="String|Integer|Double|Date|Currency"
    Display="Static|Dynamic"
    EnableClientScript="True|False" 
    Font-Bold="True|False"
    Font-Italic="True|False"
    Font-Names="string"
    Font-Overline="True|False"
    Font-Size="string|Smaller|Larger|XX-Small|X-Small|Small|Medium| Large|X-Large|XX-Large"
    Font-Strikeout="True|False"
    Font-Underline="True|False"
    ForeColor="color name|#dddddd"
    Height="size"
    MaximumValue="string"
    Message="string"
    MinimumValue="string"
    Target="string"
    Text="string"
    Type="Range"
    Width="size"
/> 
```

## Remarks

When the `Type` attribute is set to **Range**, the control prevents the form from being submitted if its associated control's value does not match the range specified using the "MaximumValue" and "MinimumValue" attributes. You associate a control with the `<Validate>` tag by setting its `Target` attribute to the `ID` of the control you wish to validate. The `Message` attribute is the text that will be displayed to the user when validation fails. If you are using the `<ValidationSummary>` tag, then you can also supply a "text" attribute. When validation fails, the "text" will be displayed where your `<Validate>` tag is and the "message" will be displayed in the `<ValidationSummary>`.

*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.

*   **DataType**: Use this property to choose the datatype to check for. DataTypes include String, Integer, Double, Date, Currency. Default is String.  

*   **Display**: This attribute determines if the `<Validate>` tag will reserve space for its message in the page layout - typically resulting in blank space in your form - or whether it will dynamically allocate the space for the message when validation fails. Defaults to **Dynamic** display.  

*   **EnableClientScript**: Use the `EnableClientScript` property to specify whether client-side validation is enabled. Defaults to **True**.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **MaximumValue**: Sets the maximum value of the validation range.  

*   **Message**: This is the text that will be displayed to the user, when validation fails. If you are using the `<ValidationSummary>`, then this is the message that will be displayed in the `<ValidationSummary>` when validation fails.  

*   **MinimumValue**: Sets the minimum value of the validation range.  

*   **Target** <span style="color:red; font-weight:bold; font-size:1.2em;">*</span>: Set this attribute to the ID of the control you wish to validate.  

*   **Text**: If you are using the `<ValidationSummary>` tag, then you can also supply a "text" attribute. When validation fails, the "text" will be displayed where your `<Validate>` tag is and the "message" will be displayed in the `<ValidationSummary>`.  

*   **Type** <span style="color:red; font-weight:bold; font-size:1.2em;">*</span>: When the "type" attribute is set to **Range**, the control prevents the form from being submitted if its associated control's value does not match the range specified using the "MaximumValue" and "MinimumValue" attributes.  

*   **Width**: Width of the control in [units](../unit-types.md).  


<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Example
```html {8-9,15}
<AddForm>
  ...
  <table>
    <tr>
      <td>
        <Label For="txtQuantity" Text="Number of Tickets" /> 
        <TextBox Id="txtQuantity" DataField="Quantity" DataType="int32" />
        <Validate Type="range" Target="txtQuantity" MinimumValue="1" MaximumValue="5" 
          Message="You can only order between 1 and 5 tickets" DataType="Integer" />
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <AddButton Text="Place Order" />&nbsp;<CancelButton Text="Cancel" />
        <ValidationSummary />
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
