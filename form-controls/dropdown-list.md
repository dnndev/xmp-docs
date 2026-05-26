---
id: form-dropdown-list
title: DropDownList
category: List Controls
context: form
summary: The DropDownList tag renders as a single-select drop-down list. Items can be hard-coded or bound to a ControlDataSource.
keywords:
  - drop
  - down
  - list
  - form
since: '1.0'
related:
  - form-listbox
  - form-checkbox-list
  - form-radio-button-list
  - form-control-datasource
---
# `<DropDownList>`

The DropDownList tag renders as a drop-down list at run-time, allowing the user to choose one item from a list. Items can be defined inline as `<ListItem>` children, bound to a [`<ControlDataSource>`](control-datasource.md), or both. Two DropDownList controls can also be linked together to create a [cascading dropdown](#cascading-dropdowns).

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
        <Label For="ddlColors" Text="Favorite Color" />
        <DropDownList Id="ddlColors" DataField="FavoriteColor" DataType="string">
          <ListItem Value="#00FF00">Green</ListItem>
          <ListItem Value="#FF0000" Selected="true">Red</ListItem>
          <ListItem Value="#0000FF">Blue</ListItem>
        </DropDownList>
       </td>
     </tr>
     <tr>
       <td colspan="2">
         <AddButton Text="Add" /> <CancelButton Text="Cancel" />
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
| CssClass | string | | CSS class name(s) for styling the control |
| [DataSourceID](#prop-datasourceid) | string | | ID of a `<ControlDataSource>` tag whose data fills this control |
| [DataTextField](#prop-datatextfield) | string | | When data-bound, the source column whose value is shown as each item's display text |
| DataTextFormatString | format string | | A .NET format string applied to each item's display text |
| [DataValueField](#prop-datavaluefield) | string | | When data-bound, the source column whose value becomes each item's hidden value |
| Enabled | `True` `False` | `True` | When `False`, the control is disabled (grayed out and not interactive) |
| Height | [size](../unit-types.md) | | Height of the control |
| [Nullable](#prop-nullable) | `True` `False` | `False` | When `True`, returns DBNull if the selected item's value is an empty string |
| [ParameterName](#prop-parametername) | string | | When acting as the parent of a [cascading dropdown](#cascading-dropdowns), the name of the parameter on the target `<ControlDataSource>` to populate with the selected value |
| Style | string | | Inline CSS (e.g. `color: red; border: solid 1px black;`) |
| TabIndex | integer | | Tab order for keyboard navigation |
| [TargetControlId](#prop-targetcontrolid) | string \| comma-separated | | When acting as the parent of a [cascading dropdown](#cascading-dropdowns), the ID(s) of the dependent control(s) to refresh when this control's value changes |
| [TargetDataSourceId](#prop-targetdatasourceid) | string \| comma-separated | | When acting as the parent of a [cascading dropdown](#cascading-dropdowns), the ID(s) of the `<ControlDataSource>` tag(s) to update with this control's value |
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

*   <span id="prop-appenddataboundeditems">**AppendDataBoundItems**</span>: When `True` and the control is bound to a `<ControlDataSource>`, the items returned by the data source are appended to any inline `<ListItem>` children. When `False` (the default), the bound data replaces inline items. Useful for adding a "(None Selected)" or "Choose one" item at the top of a data-bound list — see [Example 3](#example-3-adding-items-to-a-data-bound-list) below.

*   <span id="prop-datasourceid">**DataSourceID**</span>: ID of a `<ControlDataSource>` tag whose data fills this control's items. Required only if the control's items come from a data source. (The casing — capital `ID` — comes from the underlying ASP.NET ListControl; XMP markup is case-insensitive.)

*   <span id="prop-datatextfield">**DataTextField**</span>: When using a `<ControlDataSource>`, the column name whose value supplies each list item's display text. Required when `DataSourceID` is set.

*   <span id="prop-datavaluefield">**DataValueField**</span>: When using a `<ControlDataSource>`, the column name whose value supplies each list item's hidden value. Required when `DataSourceID` is set.

*   <span id="prop-nullable">**Nullable**</span>: Since an item is always selected in a drop-down list, when `Nullable` is `True` and the selected item's hidden value is an empty string, the control returns `DBNull` to the data commands. When a `DBNull` value is passed back to the control (e.g. when loading a record for editing), XMP will attempt to select the first item with an empty hidden value; if none is found, it selects the first item in the list.

*   <span id="prop-parametername">**ParameterName**</span>: Used only when this control is the parent of a [cascading dropdown](#cascading-dropdowns). The name of the parameter on the target `<ControlDataSource>` that should receive this control's selected value.

*   <span id="prop-targetcontrolid">**TargetControlId**</span>: Used only when this control is the parent of a [cascading dropdown](#cascading-dropdowns). One or more control IDs (comma-separated, since v4.0) that should be refreshed when this control's value changes.

*   <span id="prop-targetdatasourceid">**TargetDataSourceId**</span>: Used only when this control is the parent of a [cascading dropdown](#cascading-dropdowns). One or more `<ControlDataSource>` IDs (comma-separated, since v4.0) whose `ParameterName` parameter should be updated with this control's selected value before the dependent controls are refreshed.

## Cascading Dropdowns

Two DropDownList controls can be linked so that the selected value in the first determines the available items in the second. To do this, you set a few properties on the parent control and bind the child control to a `<ControlDataSource>` that takes a parameter.

For this example, we'll use the DNN Lists table — a built-in table that contains, among other things, a list of Countries and the Regions belonging to each Country. We'll set up two DropDownList controls: the first lists Countries, and the second is dynamically loaded with the Regions of the selected Country.

```html {4-9,12-14,17-18}
<AddForm>
  <SubmitCommand CommandText="INSERT INTO Contacts(ContactName,Country,Region)
                              VALUES(@ContactName,@Country,@Region)" />
  <ControlDataSource Id="dsCountries"
    CommandText="SELECT Text, EntryID FROM Lists WHERE ListName='Country' ORDER BY Text" />
  <ControlDataSource id="dsRegions"
    CommandText="SELECT Text, Value FROM Lists WHERE ParentID=@ParentID">
    <Parameter Name="ParentID" />
  </ControlDataSource>
  ...
  <Label For="ddlCountries" Text="Country" />
  <DropDownList Id="ddlCountries" DataField="Country" DataType="string"
    DataTextField="Text" DataValueField="EntryID" DataSourceId="dsCountries"
    TargetDataSourceId="dsRegions" ParameterName="ParentID" TargetControlId="ddlRegions" />

  <Label For="ddlRegions" Text="Region" />
  <DropDownList Id="ddlRegions" DataField="Region" DataType="string"
    DataTextField="Text" DataValueField="Value" DataSourceId="dsRegions" />

  <AddButton Text="Add" /> &nbsp; <CancelButton Text="Cancel" />
</AddForm>
```

The DNN Lists table uses a self-referencing parent/child structure: each record can have a `ParentID` that points to another record's `EntryID`. To find the regions of a country, we look for records whose `ParentID` matches that country's `EntryID`. The `dsRegions` data source is set up to accept a `ParentID` parameter so we can drive that lookup from the parent dropdown.

The Country dropdown is configured to drive the Regions dropdown by setting three properties:

1. **`TargetControlId`** — the dependent control to refresh (`ddlRegions`)
2. **`TargetDataSourceId`** — the data source whose parameter will be updated (`dsRegions`)
3. **`ParameterName`** — the name of the parameter on that data source (`ParentID`)

When a country is selected, XMP updates `dsRegions`'s `ParentID` parameter with the selected country's value, then re-binds `ddlRegions`.

## Example 2 - Binding to a Data Source
```html {3,5-6}
<AddForm>
  ...
  <ControlDataSource Id="dsColors" CommandText="SELECT ColorId, ColorName FROM MyColorsTable" />
  ...
  <DropDownList Id="ddlColors" DataSourceId="dsColors" DataTextField="ColorName" DataValueField="ColorId"
     DataField="FavoriteColor" DataType="Int32" />
</AddForm>
```

## Example 3 - Adding Items to a Data-Bound List

This example shows how to use the `AppendDataBoundItems` property to add a "(None Selected)" item to a list that is being populated from a table.

```html {3,5-8}
<AddForm>
  ...
  <ControlDataSource Id="dsColors" CommandText="SELECT ColorId, ColorName FROM MyColorsTable"/>
  ...
  <DropDownList Id="ddlColors" DataSourceId="dsColors" DataTextField="ColorName" DataValueField="ColorId"
     DataField="FavoriteColor" DataType="Int32" AppendDataBoundItems="True">
    <ListItem Value="-1">(None Selected)</ListItem>
  </DropDownList>
</AddForm>
```

## Example 4 - Requiring an Item Be Selected

This example shows how to require the user to choose an item from your data-bound list. Notice the value of the "(None Selected)" item is set to an empty string — this will be interpreted by the Required Field Validator as not having a value. Presumably the colors retrieved from `MyColorsTable` will all have non-empty values. The same approach works for hard-coded lists.

```html {3,5-9,11}
<AddForm>
  ...
  <ControlDataSource Id="dsColors" CommandText="SELECT ColorId, ColorName FROM MyColorsTable" />
  ...
  <DropDownList Id="ddlColors" DataSourceId="dsColors" DataTextField="ColorName" DataValueField="ColorId"
     DataField="FavoriteColor" DataType="Int32" AppendDataBoundItems="True">
    <ListItem Value="">(None Selected)</ListItem>
  </DropDownList>
  <Validate Type="Required" Target="ddlColors" Text="**" Message="Please select a color" />
  ...
  <ValidationSummary Id="vsSummary" DisplayMode="BulletList" />
  ...
</AddForm>
```
