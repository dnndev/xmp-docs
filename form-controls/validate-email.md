---
id: form-validate-email
title: Validate type="Email"
category: Validation
context: form
summary: >-
  The Validate tag whose type is set to "email" is referred to as an Email
  Validator and is used to ensure the value of the target control matches the
  form of a valid email address.
keywords:
  - validate
  - type="
  - email"
  - form
---
# `<Validate type="Email">`

The Validate tag whose type is set to "email" is referred to as an Email Validator and is used to ensure the value of the target control matches the form of a valid email address. It does not validate the email account is valid or active.

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
    Type="Email"
    Width="size" 
/> 
```

## Remarks

When the `Type` attribute is set to **Email**, the control prevents the form from being submitted if its associated control's value does not match the pattern of a properly formed email address. It does not validate the email _account_ is active or valid. The Email Validator is a handy short-cut. It uses a built-in pattern that should validate most forms of email address. If you find it insufficient for specific situations, you can always use the RegularExpression Validator and use your own pattern.

You associate a control with the `<Validate>` tag by setting its "target" attribute to the ID of the control you wish to validate. The `Message` attribute is the text that will be displayed to the user when validation fails. If you are using the `<ValidationSummary>` tag, then you can also supply a `Text` attribute. When validation fails, the "text" will be displayed where your `<Validate>` tag is and the "message" will be displayed in the `<ValidationSummary>`.

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control. Defaults to NotSet.  

*   **BorderWidth**: Width of the border around the control, specified in [units](../unit-types.md)

*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **Display**: This attribute determines if the `<Validate>` tag will reserve space for its message in the page layout - typically resulting in blank space in your form -or whether it will dynamically allocate the space for the message when validation fails. Defaults to **Dynamic** display.  

*   **EnableClientScript**: Use the `EnableClientScript` property to specify whether client-side validation is enabled. Defaults to **True**.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More](../font-properties.md)

*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **Message**: This is the text that will be displayed to the user, when validation fails. If you are using the `<ValidationSummary>`, then this is the message that will be displayed in the `<ValidationSummary>` when validation fails.  

*   **Target**: Set this attribute to the ID of the control you wish to validate.  

*   **Text**: If you are using the `<ValidationSummary>` tag, then you can also supply a `Text` attribute. When validation fails, the `Text` will be displayed where your `<Validate>` tag is and the "message" will be displayed in the `<ValidationSummary>`.  

*   **Type**: When the `Type` attribute is set to **Email**, the control prevents the form from being submitted if its associated control's value does not match the pattern of a properly formed email address. It does not validate the email _account_ is active or valid. The Email Validator is a handy short-cut. It uses a built-in pattern that should validate most forms of email address. If you find it insufficient for specific situations, you can always use the RegularExpression Validator and use your own pattern.  

*   **Width**: Width of the control in [units](../unit-types.md).  

## Example
```html {8,14}
<AddForm>
  ...
  <table>
    <tr>
      <td>
        <Label For="txtEmail" Text="Email" /> 
        <TextBox Id="txtEmail" DataField="Email" DataType="string" />
        <Validate Type="email" Target="txtEmail" Message="Please enter a valid email address" />
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
