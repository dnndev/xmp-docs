---
id: template-detail-button
title: 'xmod:DetailButton'
category: Action Links
context: template
summary: A push-button inside a `<xmod:Template>` (or `<xmod:DataList>`) that switches to the detail view, fetching the row identified by the supplied `<Parameter>` tags.
keywords:
  - detail
  - button
  - template
since: '1.0'
related:
  - template-detail-image
  - template-detail-link
  - template-return-button
---

# `<xmod:DetailButton>`

`<xmod:DetailButton>` renders a push-button that switches the parent template from list view to detail view. The supplied `<Parameter>` tags fill the parent's `<DetailDataSource>` parameters — the matching row is fetched and rendered inside the parent's `<DetailTemplate>`.

This tag is gated by the parent template's `DetailRoles` (defaulting to "everyone who can see the module"). Place it inside `<ItemTemplate>` or `<AlternatingItemTemplate>` so each row gets its own button with row-specific parameters.

::: info Sibling variants
- [`<xmod:DetailImage>`](detail-image.md) — same behavior, rendered as a clickable image
- [`<xmod:DetailLink>`](detail-link.md) — same behavior, rendered as a hyperlink
:::

## Example

```html {15-17}
<xmod:Template Id="Employees">
  <ListDataSource CommandText="SELECT EmployeeId, FirstName, LastName FROM Employees" />
  <DetailDataSource CommandText="SELECT * FROM Employees WHERE EmployeeId = @EmployeeId">
    <Parameter Name="EmployeeId" />
  </DetailDataSource>

  <ItemTemplate>
    <strong>[[FirstName]] [[LastName]]</strong>
    <xmod:DetailButton Text="View Profile">
      <Parameter Name="EmployeeId" Value="[[EmployeeId]]" DataType="Int32" />
    </xmod:DetailButton>
  </ItemTemplate>

  <DetailTemplate>
    <h1>[[FirstName]] [[LastName]]</h1>
    <h4>Biography</h4>
    <div>[[Bio]]</div>
  </DetailTemplate>
</xmod:Template>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| ID | string | | Unique identifier for the button |
| Text | string | | Caption displayed on the button |
| [Ajax](#prop-ajax) | `True` `False` | `False` | When `True`, switches to detail view via async postback. Requires `ID` set _(since v2.6)_ |
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
| [`<Parameter>`](#child-parameter) | required (one per `<DetailDataSource>` parameter) | Supplies the value for the matching `<DetailDataSource>` parameter |

### <span id="child-parameter">`<Parameter>`</span>

Use one `<Parameter>` for each `@param` in the parent template's `<DetailDataSource>`. The values are typically field tokens that identify the row.

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| Name <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Parameter name (matches `@param` in the DetailDataSource) |
| Value | string \| token | | Parameter value. Field tokens like `[[ID]]` are typical |
| DataType | [database type](../data-types.md) | `String` | Data type used when binding |

## Property Details

*   <span id="prop-ajax">**Ajax**</span>: When `True`, the detail view replaces the list view via async postback rather than a full page refresh. The button **must** have its `ID` property set for AJAX to work. The parent `<xmod:Template>` should also have `Ajax="True"`.
