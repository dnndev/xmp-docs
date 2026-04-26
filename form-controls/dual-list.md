---
id: form-dual-list
title: DualList
category: List Controls
context: form
summary: The DualList tag renders as two side-by-side listboxes with movement buttons that let the user transfer items between them. The selected items list is sent to the database.
keywords:
  - dual
  - list
  - form
since: '1.5'
related:
  - listbox
  - checkbox-list
  - control-datasource
---
# `<DualList>`

The DualList tag renders two side-by-side listboxes separated by a row of movement buttons (`>`, `<`, `>>`, `<<`). The user moves items between the two boxes; the contents of the right-hand box are what get saved to the database. It's a more interactive alternative to a multi-select listbox or a checkbox list when the source list is long.

::: warning JavaScript required
The DualList moves items between the two listboxes via JavaScript. The control will not function correctly with JavaScript disabled in the browser.
:::

## Example
```html {13-17}
<AddForm>
  ...
  <table>
    <tr>
       <td>
        <Label For="txtFirstName" Text="First Name" />
        <TextBox Id="txtFirstName" DataField="FirstName" DataType="string" />
      </td>
    </tr>
    <tr>
      <td>
        <Label For="lstColors" Text="Favorite Colors" />
        <DualList Id="lstColors" DataField="FavoriteColors" DataType="string">
          <ListItem Value="#00FF00">Green</ListItem>
          <ListItem Value="#FF0000" Selected="true">Red</ListItem>
          <ListItem Value="#0000FF">Blue</ListItem>
        </DualList>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <AddButton Text="Add"/> <CancelButton Text="Cancel"/>
      </td>
    </tr>
  </table>
</AddForm>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [ID](#prop-id) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Unique identifier for the control within the form |
| [DataField](#prop-datafield) | string | | Parameter name for data binding to your form's data commands |
| [DataType](#prop-datatype) | `String` | `String` | Database type — must be `String` because the selected values are joined into a delimited string |
| [AppendDataBoundItems](#prop-appenddataboundeditems) | `True` `False` | `False` | When `True`, items retrieved from a `<ControlDataSource>` are appended to inline `<ListItem>` children rather than replacing them |
| [ButtonStyle](#prop-buttonstyle) | style attributes | | Styling for the four movement buttons — uses ASP.NET nested style syntax (e.g. `ButtonStyle-CssClass="my-btn"`) |
| CssClass | string | | CSS class name(s) for styling the wrapping `<table>` element |
| [DataSourceID](#prop-datasourceid) | string | | ID of a `<ControlDataSource>` tag whose data fills the source listbox |
| [DataTextField](#prop-datatextfield) | string | | When data-bound, the source column whose value is shown as each item's display text |
| DataTextFormatString | format string | | A .NET format string applied to each item's display text |
| [DataValueField](#prop-datavaluefield) | string | | When data-bound, the source column whose value becomes each item's hidden value |
| Enabled | `True` `False` | `True` | When `False`, the control is disabled (grayed out and not interactive) |
| Height | [size](../unit-types.md) | | Height of the wrapping element |
| [ListStyle](#prop-liststyle) | style attributes | | Styling applied to both listboxes — uses ASP.NET nested style syntax (e.g. `ListStyle-Width="200"`, `ListStyle-CssClass="my-list"`) |
| [Nullable](#prop-nullable) | `True` `False` | `False` | Returns DBNull when the right-hand listbox is empty |
| [SelectedItemsSeparator](#prop-selecteditemsseparator) | string | `\|` | Character(s) used to join values together when more than one item is selected |
| Style | string | | Inline CSS for the wrapping element |
| TabIndex | integer | | Tab order for keyboard navigation |
| ToolTip | string | | Text displayed on mouse hover |
| Visible | `True` `False` | `True` | Shows or hides the control |
| Width | [size](../unit-types.md) | | Width of the wrapping element |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

<details>
<summary>Deprecated Properties</summary>

These properties use ASP.NET inline styling and are no longer recommended for modern web development. Use the `CssClass` property to apply CSS classes or the `Style` property for inline CSS instead.

| Property | Values | Description |
|----------|--------|-------------|
| BackColor | color name \| #dddddd | Background color of the control |
| BorderColor | color name \| #dddddd | Border color of the control |
| BorderStyle | `NotSet` `None` `Dotted` `Dashed` `Solid` `Double` `Groove` `Ridge` `Inset` `Outset` | Border style of the control |
| BorderWidth | [size](../unit-types.md) | Border width of the control |
| Font-Bold | `True` `False` | Bold text |
| Font-Italic | `True` `False` | Italic text |
| Font-Names | string | Font family name |
| Font-Overline | `True` `False` | Overline text decoration |
| Font-Size | `XX-Small` `X-Small` `Small` `Medium` `Large` `X-Large` `XX-Large` or size | Font size |
| Font-Strikeout | `True` `False` | Strikethrough text decoration |
| Font-Underline | `True` `False` | Underline text decoration |
| ForeColor | color name \| #dddddd | Text color of the control |

The `ListStyle` and `ButtonStyle` properties accept the same set of nested style attributes (e.g. `ListStyle-Font-Bold`, `ButtonStyle-ForeColor`). These are likewise deprecated — prefer styling the listboxes and buttons via `ListStyle-CssClass` and `ButtonStyle-CssClass` (or via CSS rules targeting the rendered elements).

</details>

## Property Details

*   <span id="prop-id">**ID**</span>: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form.

*   <span id="prop-datafield">**DataField**</span>: Name of the parameter in the `<SubmitCommand>` which will be filled with the selected values when the form is submitted and/or the parameter in the `<SelectCommand>` which will supply this control's data when the form is loaded. This attribute is required if the control will participate in operations with your form's data commands.

*   <span id="prop-datatype">**DataType**</span>: Always `String` for this control. Because multiple items can be selected, the selected values are joined into a single delimited string (see [SelectedItemsSeparator](#prop-selecteditemsseparator)) — even if the underlying values are numeric, the value sent to the database is always a string like `"32|578|38"`.

*   <span id="prop-appenddataboundeditems">**AppendDataBoundItems**</span>: When `True` and the control is bound to a `<ControlDataSource>`, the items returned by the data source are appended to any inline `<ListItem>` children. When `False` (the default), the bound data replaces inline items.

*   <span id="prop-datasourceid">**DataSourceID**</span>: ID of a `<ControlDataSource>` tag whose data fills the source (left-hand) listbox. Required only if the source items come from a data source. (The casing — capital `ID` — comes from the underlying ASP.NET ListControl; XMP markup is case-insensitive.)

*   <span id="prop-datatextfield">**DataTextField**</span>: When using a `<ControlDataSource>`, the column name whose value supplies each list item's display text. Required when `DataSourceID` is set.

*   <span id="prop-datavaluefield">**DataValueField**</span>: When using a `<ControlDataSource>`, the column name whose value supplies each list item's hidden value. Required when `DataSourceID` is set.

*   <span id="prop-buttonstyle">**ButtonStyle**</span>: Styling for the four movement buttons (`>`, `<`, `>>`, `<<`). Uses ASP.NET nested style syntax: prefix any style attribute with `ButtonStyle-` (e.g. `ButtonStyle-CssClass="my-button"`, `ButtonStyle-Width="40"`). For modern styling, prefer `ButtonStyle-CssClass` and define the rules in your stylesheet.

*   <span id="prop-liststyle">**ListStyle**</span>: Styling applied to both the source and selected listboxes. Uses ASP.NET nested style syntax: prefix any style attribute with `ListStyle-` (e.g. `ListStyle-Width="200"`, `ListStyle-CssClass="my-list"`). For modern styling, prefer `ListStyle-CssClass`.

*   <span id="prop-nullable">**Nullable**</span>: When `True` and the right-hand (selected items) listbox is empty, the control returns `DBNull` to the data commands. If a `DBNull` value is passed back to the control (e.g. when loading a record for editing), all items are returned to the source listbox regardless of the `Nullable` setting.

*   <span id="prop-selecteditemsseparator">**SelectedItemsSeparator**</span>: When more than one item is in the right-hand listbox, the control merges those values into a single string using a separator. The default separator is the pipe character (`|`). For example, if items 32, 578, and 38 are selected, the value sent to the database would be `"32|578|38"`. If only one item is selected, no separator is used.

    ::: tip Email lists
    If you are using this control to supply email addresses to the `<Email>` tag, the Email tag expects a pipe-delimited list by default. However, since email recipient lists are usually comma-delimited elsewhere, you can set `SelectedItemsSeparator=","` and the Email tag will still parse them correctly.
    :::
