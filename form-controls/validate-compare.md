---
id: form-validate-compare
title: Validate Type="Compare"
category: Validation
context: form
summary: The Validate tag with Type="Compare" prevents the form from being submitted unless the target control's value matches another control's value or a hard-coded value.
keywords:
  - validate
  - compare
  - form
since: '1.0'
related:
  - validate-required
  - validate-range
  - validate-email
  - validation-summary
---
# `<Validate Type="Compare">`

The Compare validator checks the target control's value against another control's value or a hard-coded value, using a configurable comparison operator. The classic use case is "make sure the password and confirm-password fields match," but it works equally well for date ranges, type checks, and minimum-value comparisons.

## Example

Confirming an email address by comparing two textboxes:

```html {12-13,19}
<AddForm>
  ...
  <table>
    <tr>
      <td>
        <Label For="txtEmail" Text="Email" />
        <TextBox Id="txtEmail" DataField="Email" DataType="string" />
      </td>
    </tr>
    <tr>
      <td>
        <Label For="txtEmailConfirm" Text="Confirm Email" />
        <TextBox Id="txtEmailConfirm" />
        <Validate Type="Compare" Target="txtEmailConfirm" CompareTarget="txtEmail"
                  Message="The email addresses don't match" />
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <AddButton Text="Add"/>&nbsp;<CancelButton Text="Cancel"/>
        <ValidationSummary />
      </td>
    </tr>
  </table>
</AddForm>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [Type](#prop-type) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | `Compare` | | Identifies this as a Compare validator |
| [Target](#prop-target) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | control ID | | ID of the control to validate |
| [CompareTarget](#prop-comparetarget) | control ID | | ID of the control whose value to compare against. Use *either* `CompareTarget` *or* `CompareValue`, not both |
| [CompareValue](#prop-comparevalue) | string | | Hard-coded value to compare against. Use *either* `CompareTarget` *or* `CompareValue`, not both |
| CssClass | string | | CSS class name(s) for styling the validator's error display |
| [DataType](#prop-datatype) | `String` `Integer` `Double` `Date` `Currency` | `String` | The data type used for the comparison |
| [Display](#prop-display) | `Static` `Dynamic` | `Dynamic` | Whether the validator reserves layout space when no error is shown |
| [EnableClientScript](#prop-enableclientscript) | `True` `False` | `True` | When `True`, validation runs in the browser as well as on the server |
| Height | [size](../unit-types.md) | | Height of the validator's error display |
| [Message](#prop-message) | string | | Text shown in the `<ValidationSummary>` when validation fails |
| [Operator](#prop-operator) | `Equal` `NotEqual` `GreaterThan` `GreaterThanEqual` `LessThan` `LessThanEqual` `DataTypeCheck` | `Equal` | The comparison operator |
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

*   <span id="prop-type">**Type**</span>: Set to `Compare` to identify this as a Compare validator.

*   <span id="prop-target">**Target**</span>: The `ID` of the form control whose value should be checked.

*   <span id="prop-comparetarget">**CompareTarget**</span>: The `ID` of a second control whose value the target should be compared with. Use this *or* `CompareValue`, not both. Maps to ASP.NET's `ControlToCompare`.

*   <span id="prop-comparevalue">**CompareValue**</span>: A hard-coded value the target should be compared with (e.g. `CompareValue="18"` to require a minimum age). Use this *or* `CompareTarget`, not both. Maps to ASP.NET's `ValueToCompare`.

*   <span id="prop-operator">**Operator**</span>: How the two values are compared. Defaults to `Equal`. The special value `DataTypeCheck` ignores any compare value and instead just verifies that the target control's value can be parsed as the specified `DataType` — useful as a quick "is this a valid number/date?" check without needing a regex.

*   <span id="prop-datatype">**DataType**</span>: How the values should be parsed before comparison. Defaults to `String` (literal text comparison). Set to `Integer`, `Double`, `Date`, or `Currency` for type-aware comparisons.

*   <span id="prop-message">**Message**</span>: The error text shown in the `<ValidationSummary>` (if you have one) when validation fails. If no `<ValidationSummary>` is present, this text appears at the validator's location instead.

*   <span id="prop-text">**Text**</span>: The text shown inline at the validator's location when validation fails. Used together with `Message` and `<ValidationSummary>`: a short inline marker (`*`, `**`, or an icon) at the validator + the full sentence in the summary block.

*   <span id="prop-display">**Display**</span>: Whether the validator reserves layout space even when no error is shown. `Dynamic` (the default) collapses to no space until validation fails. `Static` always reserves space.

*   <span id="prop-enableclientscript">**EnableClientScript**</span>: When `True` (the default), the validator runs in the browser before the form is submitted, giving the user immediate feedback. Set to `False` to force server-side-only validation.
