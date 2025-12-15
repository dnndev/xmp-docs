---
id: form-validate-regular-expression
title: Validate type="RegEx"
category: Validation
context: form
summary: >-
  The Validate tag whose type is set to "regex" is referred to as a Regular
  Expression Validator and is used to ensure the value of the target control
  matches the specified regular expression pattern.
keywords:
  - validate
  - type="
  - reg
  - ex"
  - form
---
# `<Validate type="RegEx">`

The Validate tag whose type is set to "regex" is referred to as a Regular Expression Validator and is used to ensure the value of the target control matches the specified regular expression pattern. This can be used, for example, to ensure a phone number matches the format you specify or that an email address is properly formatted.

## Syntax
```html
<Validate 
    BackColor="color name|#dddddd"
    BorderColor="color name|#dddddd"
    BorderStyle="NotSet|None|Dotted|Dashed|Solid|Double|Groove|Ridge| Inset|Outset"
    BorderWidth="size"
    CssClass="string"
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
    Message="string"
    Target="string"
    Text="string"
    Type="RegEx"
    ValidationExpression="string"
    Width="size" 
/>
```

## Remarks

When the `Type` attribute is set to **RegEx**, the control prevents the form from being submitted if its associated control's value does not match the regular expression pattern specified in the `ValidationExpression` attribute. You associate a control with the `<Validate>` tag by setting its `Target` attribute to the ID of the control you wish to validate. The `Message` attribute is the text that will be displayed to the user when validation fails. If you are using the `<ValidationSummary>` tag, then you can also supply a `Text` attribute. When validation fails, the `Text` will be displayed where your `<Validate>` tag is and the `Message` will be displayed in the `<ValidationSummary>`.



*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control. Defaults to NotSet.  

*   **BorderWidth**: Width of the border around the control, specified in [units](../unit-types.md)

*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **Display**: This attribute determines if the `<Validate>` tag will reserve space for its message in the page layout - typically resulting in blank space in your form -or whether it will dynamically allocate the space for the message when validation fails. Defaults to **Dynamic** display.  

*   **EnableClientScript**: Use the EnableClientScript property to specify whether client-side validation is enabled. Defaults to **True**.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More](../font-properties.md)

*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **Message**: This is the text that will be displayed to the user, when validation fails. If you are using the `<ValidationSummary>`, then this is the message that will be displayed in the `<ValidationSummary>` when validation fails.  

*   **Target**: Set this attribute to the ID of the control you wish to validate.  

*   **Text**: If you are using the `<ValidationSummary>` tag, then you can also supply a `Text` attribute. When validation fails, the `Text` will be displayed where your `<Validate>` tag is and the `Message` will be displayed in the `<ValidationSummary>`.  

*   **Type**: When the `Type` attribute is set to **RegEx**, the control prevents the form from being submitted if its associated control's value does not match the regular expression pattern specified in the `ValidationExpression` attribute.  

*   **ValidationExpression**: This determines the pattern used to validate a field.  

*   **Width**: Width of the control in [units](../unit-types.md).  

## Example
```html {8-10,16}
<AddForm>
  ...
  <table>
    <tr>
      <td>
        <Label For="txtPhone" Text="Phone" /> 
        <TextBox Id="txtPhone" DataField="Phone" DataType="string" />
        <Validate Type="regex" Target="txtPhone" 
          ValidationExpression="\(\d\d\d\)\s+\d\d\d\-\d\d\d\d" 
          Message="The phone number must be in the format: (999) 999-9999" />
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <AddButton Text="Add" />&nbsp;<CancelButton Text="Cancel" />
        <ValidationSummary />
      </td>
    </tr>
  </table>
</AddForm>
```
