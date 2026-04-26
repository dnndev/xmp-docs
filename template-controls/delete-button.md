---
id: template-delete-button
title: 'xmod:DeleteButton'
category: Action Links
context: template
summary: A push-button inside a `<xmod:Template>` (or `<xmod:DataList>`) that runs the parent's `<DeleteCommand>` for the row identified by the supplied `<Parameter>` tags.
keywords:
  - delete
  - button
  - template
since: '1.0'
related:
  - delete-image
  - delete-link
  - edit-button
---

# `<xmod:DeleteButton>`

`<xmod:DeleteButton>` renders a push-button that runs the parent template's `<DeleteCommand>` for the current row. The supplied `<Parameter>` tags fill the command's parameters so the right record gets deleted.

This tag is gated by the parent template's `DeleteRoles`. Place it inside `<ItemTemplate>` or `<AlternatingItemTemplate>` so each row has its own button. Always pair it with an `OnClientClick` confirmation prompt — once the SQL runs, the deletion is permanent.

::: info Sibling variants
- [`<xmod:DeleteImage>`](delete-image.md) — same behavior, rendered as a clickable image
- [`<xmod:DeleteLink>`](delete-link.md) — same behavior, rendered as a hyperlink
:::

## Example

```html {9-12}
<xmod:Template Id="Employees">
  <ListDataSource CommandText="SELECT * FROM Employees" />
  <DeleteCommand CommandText="DELETE FROM Employees WHERE EmployeeId = @EmpID">
    <Parameter Name="EmployeeId" Alias="EmpID" />
  </DeleteCommand>

  <ItemTemplate>
    <strong>[[FirstName]] [[LastName]]</strong>
    <xmod:DeleteButton Text="Delete"
        OnClientClick="return confirm('Are you sure you want to delete this employee?');">
      <Parameter Name="EmployeeId" Alias="EmpID" Value="[[EmployeeId]]" DataType="Int32" />
    </xmod:DeleteButton>
  </ItemTemplate>
</xmod:Template>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| ID | string | | Unique identifier for the button |
| Text | string | | Caption displayed on the button |
| [Ajax](#prop-ajax) | `True` `False` | `False` | When `True`, the delete runs via async postback (the row removes from the list without a full page refresh). Requires `ID` set _(since v2.6)_ |
| CssClass | string | | CSS class name(s) |
| Style | string | | Inline CSS |
| Width | [size](../unit-types.md) | | Width of the button |
| Height | [size](../unit-types.md) | | Height of the button |
| ToolTip | string | | Hover tooltip |
| Visible | `True` `False` | `True` | Shows or hides the button |
| [OnClientClick](#prop-onclientclick) | JavaScript | | Client-side script to run on click. Returning `false` cancels the delete — typically used for `confirm()` prompts |
| AccessKey | string | | Keyboard shortcut character |
| Enabled | `True` `False` | `True` | When `False`, the button is disabled |
| TabIndex | integer | | Tab order for keyboard navigation |

<details>
<summary>Deprecated Properties (styling)</summary>

| Property | Description |
|----------|-------------|
| BackColor / BorderColor / BorderStyle / BorderWidth | Use `CssClass` or `Style` instead |
| Font-Bold / Font-Italic / Font-Names / Font-Overline / Font-Size / Font-Strikeout / Font-Underline | Use `CssClass` instead |
| ForeColor | Use `CssClass` or `Style` instead |

</details>

## Child Tags

| Tag | Required | Description |
|-----|----------|-------------|
| [`<Parameter>`](#child-parameter) | required (one per `<DeleteCommand>` parameter) | Supplies the value for the matching `<DeleteCommand>` parameter |

### <span id="child-parameter">`<Parameter>`</span>

Use one `<Parameter>` for each `@param` in the parent template's `<DeleteCommand>`. The values are typically field tokens that identify the row.

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| Name <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Parameter name on this control |
| Alias | string | (same as Name) | Alternate parameter name used in the SQL — useful when the data column has a name that conflicts with another parameter |
| Value | string \| token | | Parameter value. Field tokens like `[[ID]]` are typical |
| DataType | [database type](../data-types.md) | `String` | Data type used when binding |

## Property Details

*   <span id="prop-ajax">**Ajax**</span>: When `True`, the delete is executed via async postback. The list re-renders without the deleted row and the rest of the page stays put. The button **must** have its `ID` property set; the parent `<xmod:Template>` should also have `Ajax="True"`.

*   <span id="prop-onclientclick">**OnClientClick**</span>: A JavaScript expression run when the button is clicked, before the delete posts back. Returning `false` cancels the delete. The standard pattern is a confirm dialog:

    ```html
    OnClientClick="return confirm('Delete this record?');"
    ```

    Without the `return`, the dialog still appears but the user's choice is ignored — the delete will proceed regardless.
