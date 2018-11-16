# `<HtmlInput>`

The HtmlInput tag renders as a rich text editor at run time. It uses the current HTML Editor provider for your DotNetNuke site.

## Syntax
```html
<HtmlInput 
    DataField="string" 
    DataType="string"
    Height="size" 
    ID="string" 
    Nullable="True|False"
    Visible="True|False" 
    Width="size"
/> 
```

## Remarks

The HtmlInput tag enables you to provide your users with an easy-to-use rich text editor. This allows them to enter and format text as they would in a word processor. Behind the scenes, the HtmlInput tag uses the default rich text editor setup for use with your site. The `DataType` attribute is always **string**.

**Validating the HtmlInput Control**: The nature of the HtmlInput control does not allow it to be validated on the client. If you use a validator with this control, set the `EnableClientScript` attribute to `false`.

The HtmlInput control has the following attributes:

*   **DataField**: Name of the parameter in the `<SubmitCommand>` which will be filled with this control's data on when the form is submitted and/or the parameter in the `<SelectCommand>` which will supply this control's data when the form is loaded. This attribute is required if the control will participate in operations with your form's data commands.
*   **DataType**: The type of data this control is supplying to the data commands. This is a [Database type](../data-types.md). The datatype for the HtmlInput is always string..  

*   **Height**: Height of the control, specified in [units](../unit-types.md).
*   **ID**: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form.
*   **Nullable**: If True (the default is False), the control will return a DBNull value if the control is blank or contains just whitespace. If a DBNull value is passed to the control, the control will be set to an empty string. NOTE: Different HTML editors may function differently. XMod Pro will set/read the "StringValue" property on the underlying editor provider. What the individual editor does with that is up to the editor.
*   **Visible**: Determines if the control is visible (true) or hidden (false)
*   **Width**: Width of the control in [units](../unit-types.md).



## Example
```html {8-9}
<AddForm>
  ...
  <table>
    ...
    <tr>
      <td>
        <label for="txtBio" text="Bio" /> 
        <htmlinput id="txtBio" datafield="Bio" datatype="string" 
          width="600" height="400"/>
      </td>
    </tr>
    ...
    <tr>
      <td colspan="2">
        <addbutton text="Add"/>&nbsp;<cancelbutton text="Cancel"/>
      </td>
    </tr>
  </table>
</AddForm>
```
