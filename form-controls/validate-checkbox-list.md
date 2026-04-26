---
id: form-validate-checkbox-list
title: Validate Type="CheckboxList"
category: Validation
context: form
summary: The Validate tag with Type="CheckboxList" prevents the form from being submitted unless at least one item in the target checkbox list is selected.
keywords:
  - validate
  - checkboxlist
  - form
since: '1.0'
related:
  - validate-required
  - validate-checkbox
  - validation-summary
  - checkbox-list
---
# `<Validate Type="CheckboxList">`

The CheckboxList validator prevents the form from being submitted unless at least one item in the target [`<CheckBoxList>`](checkbox-list.md) is checked. Use it when "you must pick at least one" is the right rule — for example, "select at least one notification preference."

::: warning Server-side only
This validator runs on the server. The form must pass all client-side validation and POST back before the CheckboxList check fires. The source explicitly disables client-side validation in its constructor (`EnableClientScript = False`).
:::

## Example
```html {15-16,21}
<AddForm>
  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName, FavColors)
                              VALUES(@FirstName, @LastName, @FavColors)" />
  <table>
    <tr>
      <td>
        <Label For="txtFirstName" Text="First Name" />
        <TextBox Id="txtFirstName" DataField="FirstName" DataType="string" />
      </td>
    </tr>
    <tr>
      <td>
        <Label For="cblColors" Text="Favorite Color(s)" />
        <CheckBoxList Id="cblColors" DataField="FavColors" DataType="string">
          <ListItem Value="Red">Red</ListItem>
          <ListItem Value="Green">Green</ListItem>
          <ListItem Value="Blue">Blue</ListItem>
        </CheckBoxList>
        <Validate Type="CheckboxList" Target="cblColors" Text="**"
                  Message="Please select at least one color" />
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
| [Type](#prop-type) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | `CheckboxList` | | Identifies this as a CheckboxList validator |
| [Target](#prop-target) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | control ID | | ID of the `<CheckBoxList>` to validate |
| CssClass | string | | CSS class name(s) for styling the validator's error display |
| [Display](#prop-display) | `Static` `Dynamic` | `Dynamic` | Whether the validator reserves layout space when no error is shown |
| Height | [size](../unit-types.md) | | Height of the validator's error display |
| [Message](#prop-message) | string | | Text shown in the `<ValidationSummary>` when validation fails |
| [Text](#prop-text) | string | | Text shown inline at the validator's location when validation fails |
| Width | [size](../unit-types.md) | | Width of the validator's error display |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

::: info No EnableClientScript
This validator runs server-side only and does not expose `EnableClientScript` — the source forces it to `False` in the constructor.
:::

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

*   <span id="prop-type">**Type**</span>: Set to `CheckboxList` to identify this as a CheckboxList validator.

*   <span id="prop-target">**Target**</span>: The `ID` of the `<CheckBoxList>` control whose selection should be checked. The control must be a `<CheckBoxList>` (or another `ListControl`) — the validator throws an exception at runtime if pointed at any other control type.

*   <span id="prop-message">**Message**</span>: The error text shown in the `<ValidationSummary>` (if you have one) when validation fails. If no `<ValidationSummary>` is present, this text appears at the validator's location instead.

*   <span id="prop-text">**Text**</span>: The text shown inline at the validator's location when validation fails. Used together with `Message` and `<ValidationSummary>`: a short inline marker (`*`, `**`, or an icon) at the validator + the full sentence in the summary block.

*   <span id="prop-display">**Display**</span>: Whether the validator reserves layout space even when no error is shown. `Dynamic` (the default) collapses to no space until validation fails. `Static` always reserves space.
