---
id: template-return-button
title: 'xmod:ReturnButton'
category: Action Links
context: template
summary: A push-button placed inside `<DetailTemplate>` (or a success template) that returns the user to the previous list view.
keywords:
  - return
  - button
  - template
since: '1.0'
related:
  - return-image
  - return-link
  - detail-button
---

# `<xmod:ReturnButton>`

`<xmod:ReturnButton>` renders a push-button that, when clicked, returns the user to the list view they were on before opening the detail. Place it inside `<DetailTemplate>` (or inside an `<AddSuccessTemplate>` / `<EditSuccessTemplate>` to dismiss the success message and return to the list).

The control has no parameters or commands of its own — clicking it simply pops the view stack and re-renders the previous list.

::: info Sibling variants
- [`<xmod:ReturnImage>`](return-image.md) — same behavior, rendered as a clickable image
- [`<xmod:ReturnLink>`](return-link.md) — same behavior, rendered as a hyperlink
:::

## Example

```html {12}
<xmod:Template Id="Employees">
  <ListDataSource CommandText="SELECT EmployeeId, FirstName, LastName FROM Employees" />
  <DetailDataSource CommandText="SELECT * FROM Employees WHERE EmployeeId = @EmpID">
    <Parameter Name="EmployeeId" Alias="EmpID" />
  </DetailDataSource>
  <ItemTemplate>
    <strong>[[FirstName]] [[LastName]]</strong>
    <xmod:DetailButton Text="View Profile">
      <Parameter Name="EmployeeId" Value="[[EmployeeId]]" DataType="Int32" />
    </xmod:DetailButton>
  </ItemTemplate>
  <DetailTemplate>
    <h1>[[FirstName]] [[LastName]]</h1>
    <div>[[Bio]]</div>
    <xmod:ReturnButton Text="Go Back" />
  </DetailTemplate>
</xmod:Template>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| ID | string | | Unique identifier for the button |
| Text | string | | Caption displayed on the button |
| CssClass | string | | CSS class name(s) |
| Style | string | | Inline CSS |
| Width | [size](../unit-types.md) | | Width of the button |
| Height | [size](../unit-types.md) | | Height of the button |
| ToolTip | string | | Hover tooltip |
| Visible | `True` `False` | `True` | Shows or hides the button |
| OnClientClick | JavaScript | | Client-side script to run on click. Returning `false` cancels the action |
| AccessKey | string | | Keyboard shortcut character |
| Enabled | `True` `False` | `True` | When `False`, the button is disabled |
| TabIndex | integer | | Tab order for keyboard navigation |

<details>
<summary>Deprecated Properties (styling)</summary>

`BackColor`, `BorderColor`, `BorderStyle`, `BorderWidth`, `Font-*`, `ForeColor` — use `CssClass` or `Style` instead.

</details>
