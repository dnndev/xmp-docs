---
id: form-validate-checkbox-list
title: Validate type="checkboxlist"
category: Validation
context: form
summary: >-
  The Validate tag whose type is set to "checkboxlist" is referred to as a
  CheckBoxList Validator and is used to ensure the user checks at least one box
  in the list. NOTE: This validator runs on the server only. A form must pass
  all client-side validation and be submitted to the server before this
  validation will trigger.
keywords:
  - validate
  - type="checkboxlist"
  - form
---
# `<Validate type="checkboxlist">`

The Validate tag whose type is set to "checkboxlist" is referred to as a CheckBoxList Validator and is used to ensure the user checks at least one box in the list. NOTE: This validator runs on the server only. A form must pass all client-side validation and be submitted to the server before this validation will trigger.

## Syntax
```html
<Validate 
    BackColor="color name|#dddddd"
    BorderColor="color name|#dddddd"
    BorderStyle="NotSet|None|Dotted|Dashed|Solid|Double|Groove|Ridge| Inset|Outset"
    BorderWidth="size"
    CssClass="string"
    Display="Static|Dynamic"
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
    Type="CheckboxList"
    Width="size" 
/> 
```
 

## Remarks

The CheckboxList validator is one type of the `<Validate>` tag. When the "type" attribute is set to **CheckboxList**, the control prevents the form from being submitted if its associated control does not have any boxes ticked. You associate a control with the `<Validate>` tag by setting its "target" attribute to the ID of the control you wish to validate. The "message" attribute is the text that will be displayed to the user when validation fails. If you are using the `<ValidationSummary>` tag, then you can also supply a "text" attribute. When validation fails, the "text" will be displayed where your `<Validate>` tag is and the "message" will be displayed in the `<ValidationSummary>`. The "display" attribute determines if the `<Validate>` tag will reserve space for its message in the page layout - typically resulting in blank space in your form -or whether it will dynamically allocate the space for the message when validation fails. The `<Validate>` tag defaults to **Dynamic** display.  

*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.

*   **Display**: This attribute determines if the `<Validate>` tag will reserve space for its message in the page layout - typically resulting in blank space in your form -or whether it will dynamically allocate the space for the message when validation fails. Defaults to **Dynamic** display.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **Message**: This is the text that will be displayed to the user, in the `<ValidationSummary>`, when validation fails.  

*   **Target** <span style="color:red; font-weight:bold; font-size:1.2em;">*</span>: Set this attribute to the ID of the control you wish to validate.  

*   **Text**: If you are using the `<ValidationSummary>` tag, then you can also supply a "text" attribute. When validation fails, the "text" will be displayed where your `<Validate>` tag is and the "message" will be displayed in the `<ValidationSummary>`.  

*   **Type** <span style="color:red; font-weight:bold; font-size:1.2em;">*</span>: When the "type" attribute is set to **CheckboxList**, the control prevents the form from being submitted if its associated control does not have any boxes ticked.  

*   **Width**: Width of the control in [units](../unit-types.md).  


<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Example
```html {20-21,27}
<AddForm>
  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName) VALUES(@FirstName, @LastName)" />
  <table>
    <tr>
      <td>
        <Label For="txtFirstName" Text="First Name" /> 
        <TextBox Id="txtFirstName" DataField="FirstName" DataType="string" />
      </td>
    </tr>
    <tr>
      <td>
        <Label for="txtLastName" text="Last Name" /> 
        <TextBox id="txtLastName" datafield="LastName" datatype="string" />
      </td>
    </tr>
    <tr>
      <td>
        <Label for="cblColors" text="Favorite Color(s)" /> 
        <Checkbox id="cblColors" datafield="FavColors" datatype="string" />
        <Validate Type="checkboxlist" Target="cblColors" Text="**" 
          Message="Everyone has a favorite color. What's yours? (Select at least one)" />
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
