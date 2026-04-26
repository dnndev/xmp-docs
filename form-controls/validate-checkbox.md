---
id: form-validate-checkbox
title: Validate Type="Checkbox"
category: Validation
context: form
summary: The Validate tag with Type="Checkbox" prevents the form from being submitted unless the target checkbox is in the required state (checked or unchecked).
keywords:
  - validate
  - checkbox
  - form
since: '1.0'
related:
  - validate-required
  - validate-checkbox-list
  - validation-summary
  - checkbox
---
# `<Validate Type="Checkbox">`

The Checkbox validator prevents the form from being submitted unless the target [`<Checkbox>`](checkbox.md) is in the required state. The classic case is a "I agree to the terms" checkbox that the user must tick — but the validator can also require a checkbox to be *unchecked* via [`MustBeChecked="False"`](#prop-mustbechecked).

::: info Why not Validate Type="Required"?
A checkbox always has a value (it's either checked or unchecked), so a "required" check would always pass. The Checkbox validator exists specifically to express "this checkbox must be in this state."
:::

## Example
```html {12-13,18}
<AddForm>
  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName, Agree)
                              VALUES(@FirstName, @LastName, @Agree)" />
  <table>
    <tr>
      <td>
        <Label For="txtFirstName" Text="First Name" />
        <TextBox Id="txtFirstName" DataField="FirstName" DataType="string" />
      </td>
    </tr>
    <tr>
      <td>
        <Label For="chkAgree" Text="I agree to the Terms of Service" />
        <Checkbox Id="chkAgree" DataField="Agree" DataType="boolean" />
        <Validate Type="Checkbox" Target="chkAgree" MustBeChecked="True"
                  Message="You must agree to the terms" />
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
| [Type](#prop-type) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | `Checkbox` | | Identifies this as a Checkbox validator |
| [Target](#prop-target) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | control ID | | ID of the `<Checkbox>` to validate |
| [MustBeChecked](#prop-mustbechecked) | `True` `False` | `True` | The state the checkbox must be in to pass validation |
| CssClass | string | | CSS class name(s) for styling the validator's error display |
| [Display](#prop-display) | `Static` `Dynamic` | `Dynamic` | Whether the validator reserves layout space when no error is shown |
| [EnableClientScript](#prop-enableclientscript) | `True` `False` | `True` | When `True`, validation runs in the browser as well as on the server |
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
| ForeColor | color name \| #dddddd | Text color of the error display |

</details>

## Property Details

*   <span id="prop-type">**Type**</span>: Set to `Checkbox` to identify this as a Checkbox validator.

*   <span id="prop-target">**Target**</span>: The `ID` of the `<Checkbox>` control whose state should be checked. The control must be a `<Checkbox>` — the validator throws an exception at runtime if pointed at any other control type.

*   <span id="prop-mustbechecked">**MustBeChecked**</span>: The state the checkbox must be in to pass validation. `True` (the default) means the box must be checked; `False` means it must be unchecked.

*   <span id="prop-message">**Message**</span>: The error text shown in the `<ValidationSummary>` (if you have one) when validation fails. If no `<ValidationSummary>` is present, this text appears at the validator's location instead.

*   <span id="prop-text">**Text**</span>: The text shown inline at the validator's location when validation fails. Used together with `Message` and `<ValidationSummary>`: a short inline marker (`*`, `**`, or an icon) at the validator + the full sentence in the summary block.

*   <span id="prop-display">**Display**</span>: Whether the validator reserves layout space even when no error is shown. `Dynamic` (the default) collapses to no space until validation fails. `Static` always reserves space.

*   <span id="prop-enableclientscript">**EnableClientScript**</span>: When `True` (the default), the validator runs in the browser as well as on the server. The check is implemented as a small JavaScript expando attribute that mirrors `MustBeChecked`, so the user gets immediate feedback without a postback.
