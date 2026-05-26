---
id: form-validation-summary
title: ValidationSummary
category: Validation
context: form
summary: The ValidationSummary tag groups all validation errors from a form's Validate tags into a single, formatted display block.
keywords:
  - validation
  - summary
  - form
since: '1.0'
related:
  - form-validate-required
  - form-validate-compare
  - form-validate-range
  - form-validate-email
  - form-validate-regular-expression
---
# `<ValidationSummary>`

The ValidationSummary tag collects all the `Message` values from the form's `<Validate>` tags and displays them together as a list, bullet list, or paragraph. It pairs naturally with each `<Validate>` tag's `Text` attribute: each validator marks its own location with a short inline indicator (e.g. `*` or `**`), while the full sentence describing the problem appears in the summary.

You typically place one `<ValidationSummary>` near the form's submit buttons.

## Example

A Range validator with `Text="*"` (inline marker next to the field) and `Message="..."` (full sentence in the summary):

```html {7-9,14}
<AddForm>
  ...
  <table>
    <tr>
      <td>
        <Label For="txtQuantity" Text="Number of Tickets" />
        <TextBox Id="txtQuantity" DataField="Quantity" DataType="int32" />
        <Validate Type="Range" Target="txtQuantity" MinimumValue="1" MaximumValue="5"
                  DataType="Integer" Text="*"
                  Message="You can only order between 1 and 5 tickets" />
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <AddButton Text="Place Order" />&nbsp;<CancelButton Text="Cancel" /><br />
        <ValidationSummary DisplayMode="BulletList" CssClass="NormalRed" HeaderText="Errors:" />
      </td>
    </tr>
  </table>
</AddForm>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| CssClass | string | | CSS class name(s) for styling the summary |
| [DisplayMode](#prop-displaymode) | `List` `BulletList` `SingleParagraph` | `BulletList` | How the messages are laid out |
| [EnableClientScript](#prop-enableclientscript) | `True` `False` | `True` | When `True`, the summary updates client-side as validators report errors (no postback needed) |
| [HeaderText](#prop-headertext) | string | | Text displayed above the message list when validation fails |
| Height | [size](../unit-types.md) | | Height of the summary |
| ID | string | | Unique identifier for the control within the form |
| Width | [size](../unit-types.md) | | Width of the summary |

<details>
<summary>Deprecated Properties</summary>

These properties use ASP.NET inline styling and are no longer recommended for modern web development. Use the `CssClass` property to apply CSS classes or the `Style` property for inline CSS instead.

| Property | Values | Description |
|----------|--------|-------------|
| BackColor | color name \| #dddddd | Background color of the summary |
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
| ForeColor | color name \| #dddddd | Text color. **Note:** the summary hard-codes red text by default. If you set `CssClass`, XMP automatically clears `ForeColor` so your stylesheet's color rules take effect |

</details>

## Property Details

*   <span id="prop-displaymode">**DisplayMode**</span>: How the validation messages are laid out. `BulletList` (the default) renders each message as a `<li>` inside a `<ul>`. `List` separates messages with `<br>`. `SingleParagraph` joins them into a single paragraph with spaces between.

*   <span id="prop-headertext">**HeaderText**</span>: Text rendered immediately above the message list when validation fails. Useful for framing the errors (e.g. `HeaderText="Please fix the following:"`). Omit for a bare list.

*   <span id="prop-enableclientscript">**EnableClientScript**</span>: When `True` (the default), the summary updates in the browser as validators report errors — without requiring a postback. Set to `False` to update only after a server-side postback.

## Pairing with `<Validate>` tags

The `<Validate>` tag has both `Message` and `Text`:

- **`Message`** appears in the `<ValidationSummary>` (typically the full sentence).
- **`Text`** appears at the validator's own location (typically a short inline marker like `*`).

If you don't include a `<ValidationSummary>`, the validator's `Message` falls back to displaying inline at the validator's location — which is why the `Text` / `Message` separation only matters once a summary is on the form.
