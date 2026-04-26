---
id: form-validate-email
title: Validate Type="Email"
category: Validation
context: form
summary: The Validate tag with Type="Email" prevents the form from being submitted unless the target control's value matches the pattern of a valid email address.
keywords:
  - validate
  - email
  - form
since: '1.0'
related:
  - validate-required
  - validate-regular-expression
  - validation-summary
---
# `<Validate Type="Email">`

The Email validator prevents the form from being submitted unless the target control's value looks like a valid email address. It uses a built-in regex that handles most well-formed email addresses — a convenient shortcut so you don't have to write your own pattern.

::: info Format only — not deliverability
This validator only checks the *shape* of the address, not whether the inbox actually exists or accepts mail. To verify deliverability you need a separate confirmation step (e.g. send a "click here to confirm" email).
:::

If the built-in pattern doesn't fit your needs, use [`<Validate Type="RegEx">`](validate-regular-expression.md) with your own `ValidationExpression`.

## Example
```html {7-8,14}
<AddForm>
  ...
  <table>
    <tr>
      <td>
        <Label For="txtEmail" Text="Email" />
        <TextBox Id="txtEmail" DataField="Email" DataType="string" />
        <Validate Type="Email" Target="txtEmail" Message="Please enter a valid email address" />
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
| [Type](#prop-type) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | `Email` | | Identifies this as an Email validator |
| [Target](#prop-target) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | control ID | | ID of the control to validate |
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

*   <span id="prop-type">**Type**</span>: Set to `Email` to identify this as an Email validator.

*   <span id="prop-target">**Target**</span>: The `ID` of the form control whose value should be checked.

*   <span id="prop-message">**Message**</span>: The error text shown in the `<ValidationSummary>` (if you have one) when validation fails. If no `<ValidationSummary>` is present, this text appears at the validator's location instead.

*   <span id="prop-text">**Text**</span>: The text shown inline at the validator's location when validation fails. Used together with `Message` and `<ValidationSummary>`: a short inline marker (`*`, `**`, or an icon) at the validator + the full sentence in the summary block.

*   <span id="prop-display">**Display**</span>: Whether the validator reserves layout space even when no error is shown. `Dynamic` (the default) collapses to no space until validation fails. `Static` always reserves space.

*   <span id="prop-enableclientscript">**EnableClientScript**</span>: When `True` (the default), the validator runs in the browser before the form is submitted, giving the user immediate feedback. Set to `False` to force server-side-only validation.
