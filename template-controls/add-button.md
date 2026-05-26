---
id: template-add-button
title: 'xmod:AddButton'
category: Action Links
context: template
summary: A push-button inside a `<xmod:Template>` (or `<xmod:DataList>`) that opens the module's AddForm. Use `<xmod:AddImage>` or `<xmod:AddLink>` for image and link variants.
keywords:
  - add
  - button
  - template
since: '1.0'
related:
  - template-add-image
  - template-add-link
  - template-edit-button
  - template-delete-button
---

# `<xmod:AddButton>`

`<xmod:AddButton>` renders a push-button that, when clicked, switches the module to the AddForm — the form configured to add new records. Use `<Parameter>` child tags to pass values into the AddForm's `<SelectCommand>` (so default values can be derived from the current row).

This tag is gated by the parent template's `AddRoles` when placed inside `<xmod:Template>`/`<xmod:DataList>`. When placed outside any template, it's gated by the module's Configure → Security tab.

::: info Sibling variants
- [`<xmod:AddImage>`](add-image.md) — same behavior, rendered as a clickable image
- [`<xmod:AddLink>`](add-link.md) — same behavior, rendered as a hyperlink
:::

## Example

```html {19}
<xmod:Template Id="Employees">
  <ListDataSource CommandText="SELECT * FROM Employees WHERE DepartmentId = @DepartmentId">
    <Parameter Name="DepartmentId" Alias="DepartmentId" />
  </ListDataSource>
  <ItemTemplate>
    <strong>[[FirstName]] [[LastName]]</strong>
  </ItemTemplate>
  <FooterTemplate>
    <xmod:AddButton Text="New Employee" />
  </FooterTemplate>
</xmod:Template>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| ID | string | | Unique identifier for the button |
| Text | string | | Caption displayed on the button |
| [Ajax](#prop-ajax) | `True` `False` | `False` | When `True`, switches to the AddForm via async postback. The button must have `ID` set _(since v2.6)_ |
| [Form](#prop-form) | form name | | Override the configured AddForm with a different form _(since v4.7)_ |
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

| Property | Values | Description |
|----------|--------|-------------|
| BackColor | color name \| #dddddd | Background color |
| BorderColor | color name \| #dddddd | Border color |
| BorderStyle | `NotSet` `None` `Dotted` `Dashed` `Solid` `Double` `Groove` `Ridge` `Inset` `Outset` | Border style |
| BorderWidth | [size](../unit-types.md) | Border width |
| Font-Bold / Font-Italic / Font-Names / Font-Overline / Font-Size / Font-Strikeout / Font-Underline | various | Font styling — use `CssClass` instead |
| ForeColor | color name \| #dddddd | Text color |

</details>

## Child Tags

| Tag | Required | Description |
|-----|----------|-------------|
| [`<Parameter>`](#child-parameter) | optional | Passes a value into the AddForm's `<SelectCommand>` parameter of the same name |

### <span id="child-parameter">`<Parameter>`</span>

Use one `<Parameter>` for each `@param` in the AddForm's `<SelectCommand>`. The values become defaults for the form's controls when the form first loads.

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| Name <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Parameter name (matches `@param` in the form's SelectCommand) |
| Value | string \| token | | Parameter value. Field tokens like `[[ID]]` are typical |
| DataType | [database type](../data-types.md) | `String` | Data type used when binding |

## Property Details

*   <span id="prop-ajax">**Ajax**</span>: When `True`, the AddForm appears in place via async postback rather than a full page refresh. The button **must** have its `ID` property set for AJAX to work — without an `ID`, you'll typically see a "click twice" symptom where the form only appears on the second click. The parent `<xmod:Template>` should also have `Ajax="True"`.

*   <span id="prop-form">**Form**</span>: Specifies an alternate form name to load instead of the AddForm configured for the module. Useful when one page has multiple `<xmod:Template>` tags and each needs its own AddForm — set `Form="EmployeeAdd"` on one template and `Form="ContractorAdd"` on another.
