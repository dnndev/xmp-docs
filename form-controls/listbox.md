---
id: form-listbox
title: ListBox
category: List Controls
context: form
summary: The ListBox tag renders as a single- or multi-select listbox at run-time.
keywords:
  - list
  - box
  - form
since: '1.0'
related:
  - form-dropdown-list
  - form-checkbox-list
  - form-radio-button-list
  - form-control-datasource
---
# `<ListBox>`

The ListBox tag renders as a single-select or multi-select listbox at run-time. Items can be defined inline as `<ListItem>` children, bound to a [`<ControlDataSource>`](control-datasource.md), or both.

## Example 1 - Basic Usage
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
        <Label For="lstColors" Text="Favorite Color" />
        <ListBox Id="lstColors" DataField="FavoriteColors" DataType="string" SelectionMode="Single">
          <ListItem Value="#00FF00">Green</ListItem>
          <ListItem Value="#FF0000" Selected="True">Red</ListItem>
          <ListItem Value="#0000FF">Blue</ListItem>
        </ListBox>
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
| [DataType](#prop-datatype) | `String` `Int32` `Int64` `Boolean` [more...](../data-types.md) | `String` | Database type for data commands. Multi-select listboxes must use `String` |
| AccessKey | string | | Keyboard shortcut character (e.g. `F` for Alt+F) |
| [AppendDataBoundItems](#prop-appenddataboundeditems) | `True` `False` | `False` | When `True`, items retrieved from a `<ControlDataSource>` are appended to inline `<ListItem>` children rather than replacing them |
| CssClass | string | | CSS class name(s) for styling the control |
| [DataSourceID](#prop-datasourceid) | string | | ID of a `<ControlDataSource>` tag whose data fills this control |
| [DataTextField](#prop-datatextfield) | string | | When data-bound, the source column whose value is shown as each item's display text |
| DataTextFormatString | format string | | A .NET format string applied to each item's display text |
| [DataValueField](#prop-datavaluefield) | string | | When data-bound, the source column whose value becomes each item's hidden value |
| Enabled | `True` `False` | `True` | When `False`, the control is disabled (grayed out and not interactive) |
| Height | [size](../unit-types.md) | | Height of the control |
| [Nullable](#prop-nullable) | `True` `False` | `False` | Returns DBNull when nothing is selected |
| Rows | integer | `4` | Number of rows visible in the listbox |
| [SelectedItemsSeparator](#prop-selecteditemsseparator) | string | `\|` | Character(s) used to join values together in multi-select mode |
| [SelectionMode](#prop-selectionmode) | `Single` `Multiple` | `Single` | Whether one or many items can be selected |
| Style | string | | Inline CSS (e.g. `color: red; border: solid 1px black;`) |
| TabIndex | integer | | Tab order for keyboard navigation |
| ToolTip | string | | Text displayed on mouse hover |
| Visible | `True` `False` | `True` | Shows or hides the control |
| Width | [size](../unit-types.md) | | Width of the control |

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

</details>

## Property Details

*   <span id="prop-id">**ID**</span>: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form.

*   <span id="prop-datafield">**DataField**</span>: Name of the parameter in the `<SubmitCommand>` which will be filled with this control's selected value(s) when the form is submitted and/or the parameter in the `<SelectCommand>` which will supply this control's data when the form is loaded. This attribute is required if the control will participate in operations with your form's data commands.

*   <span id="prop-datatype">**DataType**</span>: The type of data this control supplies to the data commands. This is a [Database type](../data-types.md). This attribute is required if the control will participate in operations with your form's data commands.

    ::: warning Multi-select requires String
    If the listbox is in multi-select mode, you **must** set `DataType="String"`. The control concatenates the selected values into a single delimited string (see `SelectedItemsSeparator`), so even if the underlying values are numeric, the value sent to the database is always a string like `"32|578|38"`.
    :::

*   <span id="prop-appenddataboundeditems">**AppendDataBoundItems**</span>: When `True` and the control is bound to a `<ControlDataSource>`, the items returned by the data source are appended to any inline `<ListItem>` children. When `False` (the default), the bound data replaces inline items.

*   <span id="prop-datasourceid">**DataSourceID**</span>: ID of a `<ControlDataSource>` tag whose data fills this control's items. Required only if the control's items come from a data source. (The casing — capital `ID` — comes from the underlying ASP.NET ListControl; XMP markup is case-insensitive.)

*   <span id="prop-datatextfield">**DataTextField**</span>: When using a `<ControlDataSource>`, the column name whose value supplies each list item's display text. Required when `DataSourceID` is set.

*   <span id="prop-datavaluefield">**DataValueField**</span>: When using a `<ControlDataSource>`, the column name whose value supplies each list item's hidden value. Required when `DataSourceID` is set.

*   <span id="prop-nullable">**Nullable**</span>: If `Nullable` is `True` and no item has been selected, the control returns `DBNull` to the data commands. If a `DBNull` value is passed back to the control (e.g. when loading a record for editing), the control de-selects all items.

*   <span id="prop-selectionmode">**SelectionMode**</span>: When set to `Single` (the default), only one item can be selected at a time. When set to `Multiple`, the user can select multiple items by holding Ctrl or Shift while clicking.

*   <span id="prop-selecteditemsseparator">**SelectedItemsSeparator**</span>: When `SelectionMode="Multiple"`, the control merges the selected values into a single string using a separator. The default separator is the pipe character (`|`). For example, with three items selected (32, 578, and 38) the value sent to the database would be `"32|578|38"`. If only one item is selected, no separator is used.

    The separator only applies in multi-select mode and only when more than one item is selected. To use a different character (e.g. comma), set `SelectedItemsSeparator=","`.

    ::: tip Email lists
    If you are using this control to supply email addresses to the `<Email>` tag, the Email tag expects a pipe-delimited list by default. However, since email recipient lists are usually comma-delimited elsewhere, you can set `SelectedItemsSeparator=","` and the Email tag will still parse them correctly.
    :::

## Example 2 - Binding to a Data Source
```html {3,5-6}
<AddForm>
  ...
  <ControlDataSource Id="dsColors" CommandText="SELECT ColorId, ColorName FROM MyColorsTable" />
  ...
  <ListBox Id="lstColors" DataSourceId="dsColors" DataTextField="ColorName" DataValueField="ColorId"
     DataField="FavoriteColor" DataType="Int32" />
</AddForm>
```

## Example 3 - Adding Items to a Data-Bound List

This example shows how to use `AppendDataBoundItems` to add a "(None Selected)" item to a list that is being populated from a table.

```html {3,5-8}
<AddForm>
  ...
  <ControlDataSource Id="dsColors" CommandText="SELECT ColorId, ColorName FROM MyColorsTable" />
  ...
  <ListBox Id="lstColors" DataSourceId="dsColors" DataTextField="ColorName" DataValueField="ColorId"
     DataField="FavoriteColor" DataType="Int32" AppendDataBoundItems="True">
    <ListItem Value="-1">(None Selected)</ListItem>
  </ListBox>
</AddForm>
```
