---
id: form-radio-button-list
title: RadioButtonList
category: List Controls
context: form
summary: The RadioButtonList tag renders as a series of mutually-exclusive radio buttons at run-time.
keywords:
  - radio
  - button
  - list
  - form
since: '1.0'
related:
  - dropdown-list
  - checkbox-list
  - listbox
  - control-datasource
---
# `<RadioButtonList>`

The RadioButtonList tag renders a group of mutually-exclusive radio buttons — only one can be selected at a time. Items can be defined inline as `<ListItem>` children, bound to a [`<ControlDataSource>`](control-datasource.md), or both.

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
        <Label For="rblColors" Text="Favorite Color" />
        <RadioButtonList Id="rblColors" DataField="FavoriteColor" DataType="string">
          <ListItem Value="#00FF00">Green</ListItem>
          <ListItem Value="#FF0000" Selected="true">Red</ListItem>
          <ListItem Value="#0000FF">Blue</ListItem>
        </RadioButtonList>
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
| [DataType](#prop-datatype) | `String` `Int32` `Int64` `Boolean` [more...](../data-types.md) | `String` | Database type for data commands |
| AccessKey | string | | Keyboard shortcut character (e.g. `F` for Alt+F) |
| [AppendDataBoundItems](#prop-appenddataboundeditems) | `True` `False` | `False` | When `True`, items retrieved from a `<ControlDataSource>` are appended to inline `<ListItem>` children rather than replacing them |
| CellPadding | integer | `-1` | When `RepeatLayout="Table"`, distance in pixels between the cell border and its content. `-1` uses the browser default |
| CellSpacing | integer | `0` | When `RepeatLayout="Table"`, distance in pixels between adjacent cells |
| CssClass | string | | CSS class name(s) for styling the control |
| [DataSourceID](#prop-datasourceid) | string | | ID of a `<ControlDataSource>` tag whose data fills this control |
| [DataTextField](#prop-datatextfield) | string | | When data-bound, the source column whose value is shown as each item's display text |
| DataTextFormatString | format string | | A .NET format string applied to each item's display text |
| [DataValueField](#prop-datavaluefield) | string | | When data-bound, the source column whose value becomes each item's hidden value |
| Enabled | `True` `False` | `True` | When `False`, the control is disabled (grayed out and not interactive) |
| Height | [size](../unit-types.md) | | Height of the control |
| [Nullable](#prop-nullable) | `True` `False` | `False` | Returns DBNull when no item is selected |
| [RepeatColumns](#prop-repeatcolumns) | integer | `0` | Number of columns to lay out the radio buttons in. `0` means a single column |
| [RepeatDirection](#prop-repeatdirection) | `Horizontal` `Vertical` | `Vertical` | Whether items flow across rows (Horizontal) or down columns (Vertical) |
| [RepeatLayout](#prop-repeatlayout) | `Table` `Flow` | `Table` | Whether items are wrapped in an HTML table (Table) or rendered inline (Flow) |
| Style | string | | Inline CSS (e.g. `color: red; border: solid 1px black;`) |
| TabIndex | integer | | Tab order for keyboard navigation |
| [TextAlign](#prop-textalign) | `Left` `Right` | `Right` | Whether each item's label appears to the left or right of its radio button |
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

*   <span id="prop-datafield">**DataField**</span>: Name of the parameter in the `<SubmitCommand>` which will be filled with this control's selected value when the form is submitted and/or the parameter in the `<SelectCommand>` which will supply this control's data when the form is loaded. This attribute is required if the control will participate in operations with your form's data commands.

*   <span id="prop-datatype">**DataType**</span>: The type of data this control supplies to the data commands. This is a [Database type](../data-types.md). This attribute is required if the control will participate in operations with your form's data commands.

*   <span id="prop-appenddataboundeditems">**AppendDataBoundItems**</span>: When `True` and the control is bound to a `<ControlDataSource>`, the items returned by the data source are appended to any inline `<ListItem>` children. When `False` (the default), the bound data replaces inline items.

*   <span id="prop-datasourceid">**DataSourceID**</span>: ID of a `<ControlDataSource>` tag whose data fills this control's items. Required only if the control's items come from a data source. (The casing — capital `ID` — comes from the underlying ASP.NET ListControl; XMP markup is case-insensitive.)

*   <span id="prop-datatextfield">**DataTextField**</span>: When using a `<ControlDataSource>`, the column name whose value supplies each list item's display text. Required when `DataSourceID` is set.

*   <span id="prop-datavaluefield">**DataValueField**</span>: When using a `<ControlDataSource>`, the column name whose value supplies each list item's hidden value. Required when `DataSourceID` is set.

*   <span id="prop-nullable">**Nullable**</span>: When `True` and no radio button is selected, the control returns `DBNull` to the data commands. If a `DBNull` value is passed back to the control (e.g. when loading a record for editing), all items are deselected regardless of the `Nullable` setting.

*   <span id="prop-repeatcolumns">**RepeatColumns**</span>: How many columns the radio buttons are laid out in. The default of `0` produces a single column. Combined with `RepeatDirection`, this controls how items flow across the layout.

*   <span id="prop-repeatdirection">**RepeatDirection**</span>: When laid out in multiple columns, whether items fill across rows first (`Horizontal`) or down columns first (`Vertical`). Has no visible effect when `RepeatColumns="0"`.

*   <span id="prop-repeatlayout">**RepeatLayout**</span>: Controls the underlying HTML structure. `Table` (the default) wraps items in an HTML table — predictable spacing, but extra markup. `Flow` renders items as inline elements separated by `<br>` tags — lighter markup, easier to style with CSS.

*   <span id="prop-textalign">**TextAlign**</span>: Whether the label text appears to the left or to the right of each radio button. The default `Right` is conventional for English-reading layouts.
