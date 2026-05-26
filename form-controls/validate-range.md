---
id: form-validate-range
title: Validate Type="Range"
category: Validation
context: form
summary: The Validate tag with Type="Range" prevents the form from being submitted unless the target control's value falls between MinimumValue and MaximumValue.
keywords:
  - validate
  - range
  - form
since: '1.0'
related:
  - form-validate-required
  - form-validate-compare
  - form-validate-regular-expression
  - form-validation-summary
---
# `<Validate Type="Range">`

The Range validator prevents the form from being submitted unless the target control's value falls between `MinimumValue` and `MaximumValue` (inclusive). Use it for numeric ranges (quantities, ages, ratings) or date ranges (must be in the future, within a 30-day window, etc.).

## Example
```html {8-9,15}
<AddForm>
  ...
  <table>
    <tr>
      <td>
        <Label For="txtQuantity" Text="Number of Tickets" />
        <TextBox Id="txtQuantity" DataField="Quantity" DataType="int32" />
        <Validate Type="Range" Target="txtQuantity" MinimumValue="1" MaximumValue="5"
                  DataType="Integer" Message="You can only order between 1 and 5 tickets" />
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <AddButton Text="Place Order" />&nbsp;<CancelButton Text="Cancel" />
        <ValidationSummary />
      </td>
    </tr>
  </table>
</AddForm>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [Type](#prop-type) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | `Range` | | Identifies this as a Range validator |
| [Target](#prop-target) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | control ID | | ID of the control to validate |
| [MinimumValue](#prop-minimumvalue) | string | | Lowest allowed value (inclusive) |
| [MaximumValue](#prop-maximumvalue) | string | | Highest allowed value (inclusive) |
| CssClass | string | | CSS class name(s) for styling the validator's error display |
| [DataType](#prop-datatype) | `String` `Integer` `Double` `Date` `Currency` | `String` | How the values should be parsed for comparison |
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

*   <span id="prop-type">**Type**</span>: Set to `Range` to identify this as a Range validator.

*   <span id="prop-target">**Target**</span>: The `ID` of the form control whose value should be checked.

*   <span id="prop-minimumvalue">**MinimumValue**</span>: The lowest allowed value, inclusive. Combine with `MaximumValue` to define the range.

*   <span id="prop-maximumvalue">**MaximumValue**</span>: The highest allowed value, inclusive.

*   <span id="prop-datatype">**DataType**</span>: How the values should be parsed before comparison. Defaults to `String` (literal text comparison). For numeric or date ranges, set to `Integer`, `Double`, `Date`, or `Currency` so the comparison is type-aware. **Tip:** if you forget to set `DataType` for a numeric range, "10" will sort *below* "5" because they're compared as strings.

*   <span id="prop-message">**Message**</span>: The error text shown in the `<ValidationSummary>` (if you have one) when validation fails. If no `<ValidationSummary>` is present, this text appears at the validator's location instead.

*   <span id="prop-text">**Text**</span>: The text shown inline at the validator's location when validation fails. Used together with `Message` and `<ValidationSummary>`: a short inline marker (`*`, `**`, or an icon) at the validator + the full sentence in the summary block.

*   <span id="prop-display">**Display**</span>: Whether the validator reserves layout space even when no error is shown. `Dynamic` (the default) collapses to no space until validation fails. `Static` always reserves space.

*   <span id="prop-enableclientscript">**EnableClientScript**</span>: When `True` (the default), the validator runs in the browser before the form is submitted, giving the user immediate feedback. Set to `False` to force server-side-only validation.
