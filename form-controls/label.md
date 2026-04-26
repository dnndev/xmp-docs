---
id: form-label
title: Label
category: Layout
context: form
summary: Renders a static caption, typically associated with an input control via the `For` attribute for accessibility.
keywords:
  - label
  - form
since: '1.0'
related:
  - textbox
  - panel
---

# `<Label>`

Renders a static caption next to a form control. The `For` attribute associates the label with a specific input control (by `Id`), letting screen readers announce the caption when the user focuses the control. The label's text can be set via the `Text` attribute, or by placing text between `<Label>` and `</Label>`.

## Example

```html {6,12}
<AddForm>
  ...
  <table>
    <tr>
      <td>
        <Label Id="lblFirstName" For="txtFirstName" Text="First Name" />
        <TextBox Id="txtFirstName" DataField="FirstName" DataType="String" />
      </td>
    </tr>
    <tr>
      <td>
        <Label Id="lblLastName" For="txtLastName" Text="Last Name" />
        <TextBox Id="txtLastName" DataField="LastName" DataType="String" />
      </td>
    </tr>
    <tr>
      <td colspan="2"><AddButton Text="Add" /> <CancelButton Text="Cancel" /></td>
    </tr>
  </table>
</AddForm>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| Id | string | | Unique identifier for the label within the form |
| [For](#prop-for) | control id | | The `Id` of the input control this label captions. Used for accessibility |
| [Text](#prop-text) | string | | Caption text. Alternatively, place the caption between the opening and closing `<Label>` tags |
| CssClass | string | | CSS class name(s) for styling |
| Style | string | | Inline CSS (e.g. `color: red; font-weight: bold;`) |
| Visible | `True` `False` | `True` | Shows or hides the label |

<details>
<summary>Deprecated Properties</summary>

These properties use ASP.NET inline styling and are no longer recommended for modern web development. Use the `CssClass` property to apply CSS classes or the `Style` property for inline CSS instead.

| Property | Values | Description |
|----------|--------|-------------|
| BackColor | color name \| #dddddd | Background color of the control |
| BorderColor | color name \| #dddddd | Border color of the control |
| BorderStyle | `NotSet` `None` `Dotted` `Dashed` `Solid` `Double` `Groove` `Ridge` `Inset` `Outset` | Border style |
| BorderWidth | [size](../unit-types.md) | Border width |
| Font-Bold | `True` `False` | Bold text |
| Font-Italic | `True` `False` | Italic text |
| Font-Names | string | Font family name |
| Font-Overline | `True` `False` | Overline text decoration |
| Font-Size | `XX-Small` `X-Small` `Small` `Medium` `Large` `X-Large` `XX-Large` or size | Font size |
| Font-Strikeout | `True` `False` | Strikethrough text decoration |
| Font-Underline | `True` `False` | Underline text decoration |
| ForeColor | color name \| #dddddd | Text color |

</details>

## Property Details

*   <span id="prop-for">**For**</span>: The `Id` of the input control this label captions. When set, the label renders as an HTML `<label for="...">` element pointing to that control. This lets assistive technology read the caption when the user focuses the input, and lets sighted users click the caption to focus the input.

*   <span id="prop-text">**Text**</span>: The caption to display. Alternatively, you can place the caption between the opening `<Label>` and closing `</Label>` tags — useful when the caption needs HTML markup.

    ```html
    <Label For="txtNotes"><strong>Notes</strong> <em>(optional)</em></Label>
    ```
