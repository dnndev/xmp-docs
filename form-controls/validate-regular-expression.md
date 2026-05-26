---
id: form-validate-regular-expression
title: Validate Type="RegEx"
category: Validation
context: form
summary: The Validate tag with Type="RegEx" prevents the form from being submitted unless the target control's value matches a regular expression you supply.
keywords:
  - validate
  - regex
  - regular expression
  - form
since: '1.0'
related:
  - form-validate-required
  - form-validate-email
  - form-validate-range
  - form-validation-summary
---
# `<Validate Type="RegEx">`

The Regular Expression validator prevents the form from being submitted unless the target control's value matches a regular expression you supply. Use it for phone numbers, postal codes, custom IDs, or any pattern that has a specific format you need to enforce.

::: tip Common patterns
- US phone: `\(\d{3}\)\s+\d{3}\-\d{4}` matches `(503) 555-1234`
- US ZIP: `\d{5}(-\d{4})?` matches `97201` or `97201-1234`
- Date (yyyy-mm-dd): `\d{4}-\d{2}-\d{2}`
- For email addresses, prefer [`<Validate Type="Email">`](validate-email.md) which has a built-in pattern
:::

## Example
```html {7-9,15}
<AddForm>
  ...
  <table>
    <tr>
      <td>
        <Label For="txtPhone" Text="Phone" />
        <TextBox Id="txtPhone" DataField="Phone" DataType="string" />
        <Validate Type="RegEx" Target="txtPhone"
                  ValidationExpression="\(\d{3}\)\s+\d{3}\-\d{4}"
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

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [Type](#prop-type) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | `RegEx` | | Identifies this as a Regular Expression validator |
| [Target](#prop-target) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | control ID | | ID of the control to validate |
| [ValidationExpression](#prop-validationexpression) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | regex pattern | | The regular expression the value must match |
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
| ForeColor | color name \| #dddddd | Text color. **Note:** the validator hard-codes red, bold text by default. If you set `CssClass`, XMP automatically clears `ForeColor` so your stylesheet's color rules take effect |

</details>

## Property Details

*   <span id="prop-type">**Type**</span>: Set to `RegEx` to identify this as a Regular Expression validator.

*   <span id="prop-target">**Target**</span>: The `ID` of the form control whose value should be checked.

*   <span id="prop-validationexpression">**ValidationExpression**</span>: The regular expression pattern the value must match. The pattern is implicitly anchored — the entire input must match (it's not a substring search). Both client-side (JavaScript regex) and server-side (.NET regex) validation use this same pattern, so stick to syntax both engines support.

*   <span id="prop-message">**Message**</span>: The error text shown in the `<ValidationSummary>` (if you have one) when validation fails. If no `<ValidationSummary>` is present, this text appears at the validator's location instead.

*   <span id="prop-text">**Text**</span>: The text shown inline at the validator's location when validation fails. Used together with `Message` and `<ValidationSummary>`: a short inline marker (`*`, `**`, or an icon) at the validator + the full sentence in the summary block.

*   <span id="prop-display">**Display**</span>: Whether the validator reserves layout space even when no error is shown. `Dynamic` (the default) collapses to no space until validation fails. `Static` always reserves space.

*   <span id="prop-enableclientscript">**EnableClientScript**</span>: When `True` (the default), the validator runs in the browser before the form is submitted, giving the user immediate feedback. Set to `False` to force server-side-only validation.
