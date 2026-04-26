---
id: form-validate-xml
title: Validate Type="XML"
category: Validation
context: form
summary: The Validate tag with Type="XML" prevents the form from being submitted unless the target control's value parses as well-formed XML.
keywords:
  - validate
  - xml
  - form
since: '1.0'
related:
  - validate-regular-expression
  - validate-required
  - validation-summary
---
# `<Validate Type="XML">`

The XML validator prevents the form from being submitted unless the target control's value can be parsed as well-formed XML. It's a quick well-formedness check (matching tags, balanced quotes, single root element) — it does **not** validate against any schema or DTD.

::: info Server-side only
This validator runs only on the server. The form must pass all client-side validation and POST back before the XML check happens.
:::

## Example
```html {15,21}
<AddForm>
  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName, MyXml)
                              VALUES(@FirstName, @LastName, @MyXml)" />
  <table>
    <tr>
      <td>
        <Label For="txtFirstName" Text="First Name" />
        <TextBox Id="txtFirstName" DataField="FirstName" DataType="string" />
      </td>
    </tr>
    <tr>
      <td>
        <Label For="txtXml" Text="Your XML" />
        <TextArea Id="txtXml" DataField="MyXml" DataType="string" />
        <Validate Type="XML" Target="txtXml" Message="Please enter well-formed XML" />
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

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [Type](#prop-type) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | `XML` | | Identifies this as an XML validator |
| [Target](#prop-target) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | control ID | | ID of the control to validate |
| CssClass | string | | CSS class name(s) for styling the validator's error display |
| [Display](#prop-display) | `Static` `Dynamic` | `Dynamic` | Whether the validator reserves layout space when no error is shown |
| [EnableClientScript](#prop-enableclientscript) | `True` `False` | `True` | When `True`, the validator participates in the page's client-side validation framework. Note that the actual XML check always runs on the server |
| Height | [size](../unit-types.md) | | Height of the validator's error display |
| [Message](#prop-message) | string | | Text shown in the `<ValidationSummary>` when validation fails |
| [Text](#prop-text) | string | | Text shown inline at the validator's location when validation fails |
| Width | [size](../unit-types.md) | | Width of the validator's error display |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

<details>
<summary>Deprecated Properties</summary>

These properties use ASP.NET inline styling and are no longer recommended for modern web development. Use the `CssClass` property to apply CSS classes or the `Style` property for inline CSS instead.

| Property | Values | Description |
|----------|--------|-------------|
| BackColor | color name \| #dddddd | Background color of the validator's error display |
| BorderColor | color name \| #dddddd | Border color |
| BorderStyle | `NotSet` `None` `Dotted` `Dashed` `Solid` `Double` `Groove` `Ridge` `Inset` `Outset` | Border style |
| BorderWidth | [size](../unit-types.md) | Border width |
| Font-Bold | `True` `False` | Bold text |
| Font-Italic | `True` `False` | Italic text |
| Font-Names | string | Font family name |
| Font-Overline | `True` `False` | Overline text decoration |
| Font-Size | `XX-Small` `X-Small` `Small` `Medium` `Large` `X-Large` `XX-Large` or size | Font size |
| Font-Strikeout | `True` `False` | Strikethrough text decoration |
| Font-Underline | `True` `False` | Underline text decoration |
| ForeColor | color name \| #dddddd | Text color. **Note:** the validator hard-codes red, bold text by default. If you set `CssClass`, XMP automatically clears `ForeColor` so your stylesheet's color rules take effect |

</details>

## Property Details

*   <span id="prop-type">**Type**</span>: Set to `XML` to identify this as an XML validator.

*   <span id="prop-target">**Target**</span>: The `ID` of the form control whose value should be checked.

*   <span id="prop-message">**Message**</span>: The error text shown in the `<ValidationSummary>` (if you have one) when validation fails. If no `<ValidationSummary>` is present, this text appears at the validator's location instead.

*   <span id="prop-text">**Text**</span>: The text shown inline at the validator's location when validation fails. Used together with `Message` and `<ValidationSummary>`: a short inline marker (`*`, `**`, or an icon) at the validator + the full sentence in the summary block.

*   <span id="prop-display">**Display**</span>: Whether the validator reserves layout space even when no error is shown. `Dynamic` (the default) collapses to no space until validation fails. `Static` always reserves space.

*   <span id="prop-enableclientscript">**EnableClientScript**</span>: Whether the validator participates in the client-side validation framework. The actual XML well-formedness check always runs server-side (XML parsing requires a server-side .NET XmlDocument), so the only practical effect is whether the validator's display is updated client-side after a postback.
