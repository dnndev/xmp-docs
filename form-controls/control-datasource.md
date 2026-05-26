---
id: form-control-datasource
title: ControlDataSource
category: Data
context: form
summary: Defines a reusable data source that can populate one or more list controls (DropDownList, ListBox, CheckboxList, RadioButtonList, DualList) with rows from your database or DNN.
keywords:
  - control
  - data
  - source
  - form
since: '1.0'
related:
  - form-dropdown-list
  - form-listbox
  - form-checkbox-list
  - form-radio-button-list
  - form-dual-list
---

# `<ControlDataSource>`

`<ControlDataSource>` defines a reusable set of data — typically the rows that fill a list control like a `<DropDownList>`, `<ListBox>`, `<CheckboxList>`, `<RadioButtonList>`, or `<DualList>`. A single `<ControlDataSource>` can feed multiple controls, and a form may contain as many `<ControlDataSource>` tags as needed.

The data can come from a SQL query (the default), a stored procedure, or a small set of built-in DNN sources (users, roles, pages, countries) when `Source="dnn"`.

::: info Pairing with list controls
Each list control links to a `<ControlDataSource>` with three attributes: `DataSourceId` (the source's `Id`), `DataTextField` (the column shown to the user), and `DataValueField` (the column saved on submit). See [DropDownList](dropdown-list.md) for the complete list-control surface, including [cascading dropdowns](dropdown-list.md#cascading-dropdowns).
:::

## Example

```html {9-10,18-19}
<AddForm>
  <SelectCommand CommandText="SELECT @FirstName AS FirstName, @LastName AS LastName,
                              'AZ' AS StateId">
    <Parameter Name="FirstName" Value='[[User:FirstName]]' DefaultValue="" />
    <Parameter Name="LastName" Value='[[User:LastName]]' DefaultValue="" />
  </SelectCommand>
  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName, StateId)
                              VALUES(@FirstName, @LastName, @StateId)" />
  <ControlDataSource Id="dsStates"
      CommandText="SELECT StateName, StateId FROM States ORDER BY StateName ASC" />
  <table>
    <tr>
      <td><Label For="txtFirstName" Text="First Name" /></td>
      <td><TextBox Id="txtFirstName" DataField="FirstName" DataType="String" /></td>
    </tr>
    <tr>
      <td><Label For="ddlState" Text="State" /></td>
      <td>
        <DropDownList Id="ddlState" DataField="StateId" DataType="Int32"
          DataSourceId="dsStates" DataTextField="StateName" DataValueField="StateId" />
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
| [Id](#prop-id) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Unique identifier — list controls reference this via `DataSourceId` |
| [CommandText](#prop-commandtext) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | SQL query, stored-procedure name, or built-in source name (when `Source="dnn"`) |
| [CommandType](#prop-commandtype) | `Text` `StoredProcedure` | `Text` | How `CommandText` is interpreted |
| [ConnectionString](#prop-connectionstring) | string \| `[[ConnectionString:name]]` | DNN database | Database to query. Defaults to the DNN site's database |
| [Source](#prop-source) | `dnn` | (SQL) | Set to `dnn` to query DNN's built-in lists (Users, Roles, Pages, ListCountries) instead of the database |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Child Tags

| Tag | Required | Description |
|-----|----------|-------------|
| [`<Parameter>`](#child-parameter) | optional | Supplies a value to a SQL parameter or stored-procedure argument referenced in `CommandText`. One per parameter, in any order |

## Property Details

*   <span id="prop-id">**Id**</span>: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the data source within the form. List controls bind to this data source by setting their `DataSourceId` attribute to this value. Multiple controls can share the same `<ControlDataSource>`.

*   <span id="prop-commandtext">**CommandText**</span>: The SQL statement, stored-procedure name, or built-in source identifier that returns the rows for this data source.
    *   When `CommandType` is `Text` (the default), this is a SQL `SELECT` statement.
    *   When `CommandType` is `StoredProcedure`, this is the name of a stored procedure.
    *   When `Source="dnn"`, this is the name of a built-in DNN source — see [Source](#prop-source) below.

*   <span id="prop-commandtype">**CommandType**</span>: Determines how `CommandText` is executed.
    *   `Text` (default) — `CommandText` is treated as a SQL statement.
    *   `StoredProcedure` (since v4.7) — `CommandText` is the name of a stored procedure. Supply its arguments with `<Parameter>` child tags.

*   <span id="prop-connectionstring">**ConnectionString**</span>: The database to query. If omitted, XMod Pro uses the connection string for the current DNN site. To reference a connection string defined in `web.config`, use the `[[ConnectionString:name]]` token, where _name_ is the connection string's name.

*   <span id="prop-source">**Source**</span>: When set to `dnn`, the data is supplied by DNN's API instead of by SQL. In this mode, `CommandText` selects which list to return:

    | CommandText | Returns |
    |-------------|---------|
    | `Users` | Users in the current portal |
    | `Roles` | Security roles in the current portal |
    | `Pages` | Pages in the current portal |
    | `ListCountries` | Countries from DNN's built-in Lists table |

    `ConnectionString`, `CommandType`, and `<Parameter>` children are ignored when `Source="dnn"`.

### <span id="child-parameter">`<Parameter>`</span>

Optional child tag that supplies a value to a parameter referenced in `CommandText`. Add one `<Parameter>` for each `@param` in your SQL or each argument in your stored procedure.

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| Name <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Parameter name — must match the `@param` in `CommandText` (without the `@`) |
| Value | string \| token | | Parameter value. Function tokens such as `[[User:Id]]`, `[[Url:paramName]]`, or `[[Portal:Id]]` are evaluated at run time |
| DefaultValue | string | | Used when `Value` is missing or evaluates to whitespace — useful when a token resolves to nothing |
| DataType | [database type](../data-types.md) | `String` | The parameter's database type |

## Pairing with list controls

To use this data source in a list control, set three attributes on the list control:

| List-control attribute | Purpose |
|-----------------------|---------|
| `DataSourceId` | The `Id` of this `<ControlDataSource>` |
| `DataTextField` | Column to display to the user |
| `DataValueField` | Column to save when the form is submitted |

For example, given a `<ControlDataSource Id="dsStates"
CommandText="SELECT StateName, StateId FROM States">`, a `<DropDownList>` would bind to it with `DataSourceId="dsStates" DataTextField="StateName" DataValueField="StateId"`.

## Example 2 — Stored procedure

```html
<ControlDataSource Id="dsStates"
    CommandType="StoredProcedure"
    CommandText="GetStatesByCountry">
  <Parameter Name="CountryId" Value="[[User:Profile:CountryId]]" DefaultValue="0" DataType="Int32" />
</ControlDataSource>
```

## Example 3 — DNN built-in source

```html
<ControlDataSource Id="dsRoles" Source="dnn" CommandText="Roles" />

<DropDownList Id="ddlRoles" DataField="RoleId" DataType="Int32"
    DataSourceId="dsRoles" DataTextField="RoleName" DataValueField="RoleId" />
```

## Example 4 — Cascading dropdowns

See [Cascading Dropdowns](dropdown-list.md#cascading-dropdowns) on the DropDownList page for the full pattern.
