---
id: form-validate-required
title: Validate Required
category: Validation
context: form
summary: The Validate tag with Type="Required" prevents the form from being submitted unless the target control has a value.
keywords:
  - validate
  - required
  - form
since: '1.0'
related:
  - validate-compare
  - validate-range
  - validate-email
  - validate-checkbox
  - validation-summary
---
# `<Validate Type="Required">`

The Required validator prevents the form from being submitted if its target control is empty. It's the most commonly used validator — drop it next to any control that the user must fill in.

::: info Not for checkboxes
A `<CheckBox>` always has a value (checked or unchecked), and a `<CheckBoxList>` is treated similarly — so `Type="Required"` doesn't do what you'd expect on those. Use [`<Validate Type="Checkbox">`](validate-checkbox.md) to require a single checkbox to be checked, or [`<Validate Type="CheckboxList">`](validate-checkbox-list.md) to require at least one item in a list to be selected.
:::

## Example
```html {7-8,18}
<AddForm>
  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName) VALUES(@FirstName, @LastName)" />
  <table>
    <tr>
      <td>
        <Label For="txtFirstName" Text="First Name" />
        <TextBox Id="txtFirstName" DataField="FirstName" DataType="string" />
        <Validate Type="Required" Target="txtFirstName"
                  Message="You must enter a First Name" />
      </td>
    </tr>
    <tr>
      <td>
        <Label For="txtLastName" Text="Last Name" />
        <TextBox Id="txtLastName" DataField="LastName" DataType="string" />
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
| [Type](#prop-type) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | `Required` | | Identifies this as a Required validator |
| [Target](#prop-target) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | control ID | | ID of the control to validate |
| CssClass | string | | CSS class name(s) for styling the validator's error display |
| [Display](#prop-display) | `Static` `Dynamic` | `Dynamic` | Whether the validator reserves layout space when no error is shown |
| [EnableClientScript](#prop-enableclientscript) | `True` `False` | `True` | When `True`, validation runs in the browser as well as on the server |
| Height | [size](../unit-types.md) | | Height of the validator's error display |
| [Message](#prop-message) | string | | Text shown in the `<ValidationSummary>` when validation fails |
| [Text](#prop-text) | string | | Text shown inline at the validator's location when validation fails. Often a short marker (e.g. `*` or `**`) |
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

*   <span id="prop-type">**Type**</span>: Set to `Required` to identify this as a Required validator. The single `<Validate>` tag supports many validator types via this attribute (see [Compare](validate-compare.md), [Range](validate-range.md), [Email](validate-email.md), [RegEx](validate-regular-expression.md), and others).

*   <span id="prop-target">**Target**</span>: The `ID` of the form control whose value should be checked. Maps to ASP.NET's `ControlToValidate`.

*   <span id="prop-message">**Message**</span>: The error text shown in the `<ValidationSummary>` (if you have one) when validation fails. If no `<ValidationSummary>` is present, this text appears at the validator's location instead.

*   <span id="prop-text">**Text**</span>: The text shown inline at the validator's location when validation fails. Used together with `Message` and `<ValidationSummary>`: a short inline marker (`*`, `**`, or an icon) at the validator + the full sentence in the summary block.

*   <span id="prop-display">**Display**</span>: Whether the validator reserves layout space even when no error is shown. `Dynamic` (the default) collapses to no space until validation fails — usually what you want. `Static` always reserves space (useful when you want the form layout to not shift when an error appears).

*   <span id="prop-enableclientscript">**EnableClientScript**</span>: When `True` (the default), the validator runs in the browser before the form is submitted, giving the user immediate feedback. Set to `False` to force server-side-only validation — useful for controls (like rich text editors) that don't expose their value cleanly to client-side script.
