---
id: form-html-input
title: HtmlInput
category: Input Controls
context: form
summary: >-
  The HtmlInput tag renders as a rich text editor at run time. It uses the
  current HTML Editor provider for your DotNetNuke site.
keywords:
  - html
  - input
  - form
since: '1.0'
---
# `<HtmlInput>`

The HtmlInput tag renders as a rich text editor at run time, allowing users to enter and format text as they would in a word processor. Behind the scenes, it uses the default rich text editor configured for your DNN site.

## Example
```html {8-9}
<AddForm>
  ...
  <table>
    ...
    <tr>
      <td>
        <Label For="txtBio" Text="Bio" />
        <HtmlInput Id="txtBio" DataField="Bio" DataType="String"
          Width="600" Height="400"/>
      </td>
    </tr>
    ...
    <tr>
      <td colspan="2">
        <AddButton Text="Add"/>&nbsp;<CancelButton Text="Cancel"/>
      </td>
    </tr>
  </table>
</AddForm>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [ID](#prop-id) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Unique identifier for the control within the form |
| [DataField](#prop-datafield) | string | | Parameter name for data binding to your form's data commands |
| DataType | `String` | `String` | Database type — always `String` for this control |
| Height | [size](../unit-types.md) | | Height of the control |
| [Nullable](#prop-nullable) | `True` `False` | `False` | Returns DBNull when the control is blank or whitespace |
| Visible | `True` `False` | `True` | Shows or hides the control |
| Width | [size](../unit-types.md) | | Width of the control |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

**Validating the HtmlInput Control**: The nature of the HtmlInput control does not allow it to be validated on the client. If you use a validator with this control, set the `EnableClientScript` attribute to `false`.

## Property Details

*   <span id="prop-id">**ID**</span>: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form.

*   <span id="prop-datafield">**DataField**</span>: Name of the parameter in the `<SubmitCommand>` which will be filled with this control's data when the form is submitted and/or the parameter in the `<SelectCommand>` which will supply this control's data when the form is loaded. This attribute is required if the control will participate in operations with your form's data commands.

*   <span id="prop-nullable">**Nullable**</span>: If True, the control will return a DBNull value if the control is blank or contains just whitespace. If a DBNull value is passed to the control, the control will be set to an empty string. Note: Different HTML editors may function differently. XMod Pro will set/read the `StringValue` property on the underlying editor provider. What the individual editor does with that is up to the editor.
