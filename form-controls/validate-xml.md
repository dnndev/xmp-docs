---
id: form-validate-xml
title: Validate Type="XML"
category: Validation
context: form
summary: >-
  The Validate tag whose type is set to "xml" is referred to as an XML Validator
  and is used to ensure the user provides a well-formed XML snippet as input for
  a given control. **NOTE:** that this provides very basic verification the XML
  is well-formed. Deeper checks are not performed.
keywords:
  - validate
  - type="
  - form
---
# `<Validate Type="XML">`

The Validate tag whose type is set to "xml" is referred to as an XML Validator and is used to ensure the user provides a well-formed XML snippet as input for a given control. **NOTE:** that this provides very basic verification the XML is well-formed. Deeper checks are not performed.

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
    Type="XML"
    Width="size" 
/>
```

## Remarks

The XML validator is one type of the `<Validate>` tag. When the `Type` attribute is set to **xml**, the control prevents the form from being submitted if its associated control does not contain well-formed XML. You associate a control with the `<Validate>` tag by setting its `Target` attribute to the ID of the control you wish to validate. The `Message` attribute is the text that will be displayed to the user when validation fails. If you are using the `<ValidationSummary>` tag, then you can also supply a `Text` attribute. When validation fails, the `Text` will be displayed where your `<Validate>` tag is and the `Message` will be displayed in the `<ValidationSummary`. The `Display` attribute determines if the the `<Validate>` tag will reserve space for its message in the page layout - typically resulting in blank space in your form -or whether it will dynamically display allocate the space for the message when validation fails. The `<Validate>` tag defaults to **Dynamic** display.

*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.

*   **Display**: This attribute determines if the `<Validate>` tag will reserve space for its message in the page layout - typically resulting in blank space in your form -or whether it will dynamically allocate the space for the message when validation fails. Defaults to **Dynamic** display.  

*   **EnableClientScript**: Use the `EnableClientScript` property to specify whether client-side validation is enabled. Defaults to **True**.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **Message**: This is the text that will be displayed to the user, when validation fails. If you are using the `<ValidationSummary>`, then this is the message that will be displayed in the `<ValidationSummary>` when validation fails.  

*   **Target** <span style="color:red; font-weight:bold; font-size:1.2em;">*</span>: Set this attribute to the ID of the control you wish to validate.  

*   **Text**: If you are using the `<ValidationSummary>` tag, then you can also supply a `Text` attribute. When validation fails, the `Text` will be displayed where your `<Validate>` tag is and the `Message` will be displayed in the `<ValidationSummary>`.  

*   **Type** <span style="color:red; font-weight:bold; font-size:1.2em;">*</span>: When the `Type` attribute is set to **xml**, the control prevents the form from being submitted if its associated control does not contain well-formed XML.  

*   **Width**: Width of the control in [units](../unit-types.md).  


<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Example
```html {21,27}
<AddForm>
  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName, MyXml) 
                              VALUES(@FirstName, @LastName, @MyXml)" />
    <table>
      <tr>
        <td>
          <Label For="txtFirstName" Text="FirstName" /> 
          <TextBox Id="txtFirstName" DataField="FirstName" DataType="string" />
        </td>
      </tr>
      <tr>
        <td>
          <Label For="txtLastName" Text="Last Name" /> 
          <TextBox Id="txtLastName" DataField="LastName" DataType="string" />
        </td>
      </tr>
      <tr>
        <td>
          <Label For="txtXml" Text="Your XML" /> 
          <TextArea Id="txtXml" DataField="MyXml" DataType="string" />
          <Validate Type="xml" Target="txtXml" Message="Please enter well-formed XML" />
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
