---
id: template-edit-button
title: 'xmod:EditButton'
category: Action Links
context: template
summary: A push-button inside a `<xmod:Template>` (or `<xmod:DataList>`) that opens the EditForm for the row identified by the supplied `<Parameter>` tags.
keywords:
  - edit
  - button
  - template
since: '1.0'
related:
  - template-edit-image
  - template-edit-link
  - template-add-button
  - template-delete-button
---

# `<xmod:EditButton>`

`<xmod:EditButton>` renders a push-button that opens the EditForm for the current row. The supplied `<Parameter>` tags fill the EditForm's `<SelectCommand>` parameters so the form loads the correct record.

This tag is gated by the parent template's `EditRoles`. Place it inside `<ItemTemplate>` or `<AlternatingItemTemplate>` so each row gets its own button with row-specific parameters.

::: info Sibling variants
- [`<xmod:EditImage>`](edit-image.md) — same behavior, rendered as a clickable image
- [`<xmod:EditLink>`](edit-link.md) — same behavior, rendered as a hyperlink
:::

## Example

```html {12-14}
<xmod:Template Id="Employees">
  <ListDataSource CommandText="SELECT * FROM Employees WHERE DepartmentId = @DepartmentId">
    <Parameter Name="DepartmentId" Alias="DepartmentId" />
  </ListDataSource>
  <ItemTemplate>
    <strong>[[FirstName]] [[LastName]]</strong>
    <xmod:EditButton Text="Edit Employee">
      <Parameter Name="EmployeeId" Value="[[EmployeeId]]" DataType="Int32" />
    </xmod:EditButton>
  </ItemTemplate>
</xmod:Template>

<EditForm>
  <SelectCommand CommandText="SELECT * FROM Employees WHERE EmployeeId = @EmployeeId" />
  ...
</EditForm>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| ID | string | | Unique identifier for the button |
| Text | string | | Caption displayed on the button |
| [Ajax](#prop-ajax) | `True` `False` | `False` | When `True`, opens the EditForm via async postback. Requires `ID` set _(since v2.6)_ |
| [Form](#prop-form) | form name | | Override the configured EditForm with a different form _(since v4.7)_ |
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

| Property | Description |
|----------|-------------|
| BackColor / BorderColor / BorderStyle / BorderWidth | Use `CssClass` or `Style` instead |
| Font-Bold / Font-Italic / Font-Names / Font-Overline / Font-Size / Font-Strikeout / Font-Underline | Use `CssClass` instead |
| ForeColor | Use `CssClass` or `Style` instead |

</details>

## Child Tags

| Tag | Required | Description |
|-----|----------|-------------|
| [`<Parameter>`](#child-parameter) | required (one per `<SelectCommand>` parameter) | Supplies the value for the EditForm's `<SelectCommand>` parameter of the same name |

### <span id="child-parameter">`<Parameter>`</span>

Use one `<Parameter>` for each `@param` in the EditForm's `<SelectCommand>`. The values are typically field tokens that identify the row.

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| Name <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Parameter name (matches `@param` in the EditForm's SelectCommand) |
| Value | string \| token | | Parameter value. Field tokens like `[[ID]]` are typical |
| DataType | [database type](../data-types.md) | `String` | Data type used when binding |

## Property Details

*   <span id="prop-ajax">**Ajax**</span>: When `True`, the EditForm appears in place via async postback rather than a full page refresh. The button **must** have its `ID` property set for AJAX to work. The parent `<xmod:Template>` should also have `Ajax="True"`.

*   <span id="prop-form">**Form**</span>: Specifies an alternate form name to load instead of the EditForm configured for the module. Useful when one page has multiple `<xmod:Template>` tags and each needs its own EditForm.
