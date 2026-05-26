---
id: form-parameter
title: Parameter
category: Data
context: all
summary: >-
  Defines a parameter for a data command (SelectCommand, SubmitCommand,
  ListDataSource, DetailDataSource, ControlDataSource, etc.) — binds a
  named value to the SQL command, with support for default values, output
  parameters, and explicit data typing.
keywords:
  - parameter
  - data
  - sql
  - default value
  - alias
  - output parameter
  - return value
since: '1.0'
related:
  - form-control-datasource
  - form-add-edit-form
---

# `<Parameter>`

The `<Parameter>` tag binds a named value to a SQL command parameter (the `@name` placeholders in your SQL). It's a child tag — you place it inside any data command:

* In **forms**: `<SelectCommand>`, `<SubmitCommand>`, `<DeleteCommand>`, `<UpdateCommand>`, `<ControlDataSource>`
* In **views**: `<ListDataSource>`, `<DetailDataSource>`
* In **feeds**: `<ListDataSource>`
* In **command buttons**: inside the `<Command>` tag of `<xmod:CommandButton>`, `<xmod:CommandLink>`, and `<xmod:CommandImage>`

A single command can have as many `<Parameter>` tags as it needs — typically one per `@placeholder` in the SQL.

## Example

```html {3-4,9-10}
<xmod:Template>
  <ListDataSource CommandText="SELECT * FROM Articles WHERE CategoryId = @cat ORDER BY @sort">
    <Parameter Name="cat" DefaultValue="0" DataType="Int32" />
    <Parameter Name="sort" Value="Headline" />
  </ListDataSource>

  <DetailDataSource CommandText="SELECT * FROM Articles WHERE ArticleId = @id">
    <Parameter Name="id" Value="-1" DataType="Int32" />
  </DetailDataSource>
  ...
</xmod:Template>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [Name](#prop-name) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | The parameter's name. Used to look up a matching value from the URL/form post when `Value` is empty. |
| [Value](#prop-value) | string \| token | | The value to bind to the SQL parameter. Optional — see [How values are resolved](#how-values-are-resolved). |
| [DefaultValue](#prop-defaultvalue) | string \| token | | Fallback value used when `Value` is empty. |
| [Alias](#prop-alias) | string | (same as `Name`) | The SQL parameter name. Set this when the SQL placeholder differs from `Name`. |
| [DataType](#prop-datatype) | DbType | `String` | The SQL data type — match this to the column type for proper indexing and conversion. |
| [Size](#prop-size) | integer | (provider default) | The size of a sized type (varchar, nvarchar, char). |
| [Direction](#prop-direction) | `Input` `Output` `InputOutput` `ReturnValue` | `Input` | Used for stored procedures that have output parameters or return values. |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Property Details

### How values are resolved

The single most-misunderstood part of `<Parameter>` is *where the value comes from*. XMod Pro looks in three places, in this order, and uses the first one that has a non-empty value:

1. **The `Value` attribute** — if you set it (and it's non-empty after trimming), that value is used.
2. **The `DefaultValue` attribute** — if `Value` is missing or empty, XMod Pro falls back to `DefaultValue`.
3. **The HTTP request** — if both `Value` and `DefaultValue` are empty, XMod Pro looks for a URL query string or form-post field whose name matches `Name`. This is most useful in feeds, where calling `Feed.aspx?xfd=MyFeed&dept=3` will bind `3` to a `<Parameter Name="dept" />` automatically.

This ordering explains a common pattern: write `Value` for the "normal case", and use `DefaultValue` to keep the page from breaking on the first load (or for callers who don't pass the parameter):

```html
<DetailDataSource CommandText="SELECT * FROM Volunteers WHERE VolunteerId = @vid">
  <Parameter Name="vid" Value='<%# FormData("vid") %>'
                       DefaultValue='<%# UserData("ID") %>' DataType="Int32" />
</DetailDataSource>
```

When an admin links to the page with `?vid=42`, `Value` resolves to `42` and that record loads. When a regular user visits without a `vid`, `Value` is empty and `DefaultValue` resolves to the current user's ID — they edit their own profile. One form, two use cases.

---

*   <span id="prop-name">**Name**</span>: The parameter's name. This serves two purposes:

    1. It's the key XMod Pro uses to look up an HTTP request parameter when no `Value` or `DefaultValue` is supplied (see [How values are resolved](#how-values-are-resolved)).
    2. It's also the SQL placeholder name *unless* you set [Alias](#prop-alias) — in which case `Alias` is what gets bound to the SQL command.

*   <span id="prop-value">**Value**</span>: The value to bind to the SQL parameter. Almost always a [token](../tokens/README.md) or data-binding expression — pulling from a field, the URL, the current user, or another runtime source.

    ```html
    <Parameter Name="UserId"   Value="[[User:ID]]" />
    <Parameter Name="ProductId" Value="[[Url:pid]]" />
    <Parameter Name="DeptName"  Value='<%# Eval("Department") %>' />
    ```

    If the resolved value is an empty string after trimming whitespace, it's treated as missing — XMod Pro will fall through to `DefaultValue` and then to the HTTP request. This means a token like `[[Url:pid]]` that resolves to an empty string when the URL doesn't contain `pid` will *not* short-circuit the fallback chain.

    Set `Value=""` (literally an empty string) only if you specifically want to force a NULL or an empty string into the SQL parameter — and even then, the fallback chain may surprise you. The safer pattern is to handle empties in your SQL with `ISNULL(@param, …)`.

*   <span id="prop-defaultvalue">**DefaultValue**</span>: A fallback used when `Value` is empty. This is what makes the same data command work for both an explicit "edit this record" caller (URL passes the id) and a "default to my own profile" caller (no id in URL — fall back to the current user). Without `DefaultValue`, you'd need separate forms or extra SQL conditionals.

    ::: tip Use DefaultValue, not a literal Value, for guard rails
    On the very first load of a `<DetailDataSource>` whose parameter comes from a button click, the parameter has no value yet. Setting `DefaultValue="-1"` (for an integer ID column where IDs are always positive) ensures no record matches and the detail area starts empty rather than showing the first record in the table by accident. Tutorial 7 shows this pattern.
    :::

*   <span id="prop-alias">**Alias**</span>: The name used to bind to the SQL command — i.e. the `@xxx` placeholder in your `CommandText`. Defaults to `Name`. Set it when the URL/form parameter name and the SQL parameter name need to differ.

    Example: a URL passes `?id=5`, but your SQL uses `@UserId`:

    ```html
    <ListDataSource CommandText="SELECT * FROM Users WHERE UserId = @UserId">
      <Parameter Name="id" Alias="UserId" DataType="Int32" />
    </ListDataSource>
    ```

    Now `Feed.aspx?xfd=...&id=5` binds the URL's `id=5` to the SQL's `@UserId`. The same applies the other direction — when a button passes `<Parameter Name="ProductId" />` to a target template's data source whose SQL uses `@pid`, you'd set `Alias="pid"`.

    If the URL or form parameter name already matches the SQL placeholder, leave `Alias` off — XMod Pro will use `Name` as both.

*   <span id="prop-datatype">**DataType**</span>: A [DbType](https://learn.microsoft.com/dotnet/api/system.data.dbtype) value — `String` (the default), `Int32`, `Int64`, `Boolean`, `DateTime`, `Decimal`, `Double`, `Guid`, and others.

    Setting `DataType` matters more than it looks. Without it, every parameter is bound as `nvarchar` (`DbType.String`), which forces SQL Server to do an implicit conversion when comparing to non-string columns. That conversion can defeat indexes — turning a millisecond indexed seek into a multi-second table scan on large tables.

    Rule of thumb: **set `DataType` whenever the column it's compared against isn't `nvarchar`/`varchar`.**

    ```html
    <Parameter Name="UserId"   DataType="Int32" />        <!-- INT column -->
    <Parameter Name="DueDate"  DataType="DateTime" />     <!-- DATETIME column -->
    <Parameter Name="IsActive" DataType="Boolean" />      <!-- BIT column -->
    <Parameter Name="Price"    DataType="Decimal" />      <!-- DECIMAL/MONEY column -->
    ```

*   <span id="prop-size">**Size**</span>: For sized types (`String`, `AnsiString`, `Binary`), the maximum length. You usually don't need to set this for input parameters — the provider sizes them automatically based on the value. **Always set `Size` when `Direction` is `Output` and `DataType` is a string type**, otherwise SQL Server returns only the first character.

    ```html
    <Parameter Name="ResultMessage" Direction="Output" DataType="String" Size="500" />
    ```

*   <span id="prop-direction">**Direction**</span>: Used with stored procedures to capture **output parameters** or the procedure's **return value**. Combine with [SubmitCommand](add-edit-form.md) (in forms) or [ListDataSource](../template-controls/data-list.md) (in views) to get the result back into XMod Pro.

    | Direction | Use |
    |-----------|-----|
    | `Input` (default) | Pass a value into the command — the everyday case. |
    | `Output` | Capture an output parameter from a stored procedure. The value is available afterwards via the [`[[Posted:Name]]`](../tokens/request.md) token. |
    | `ReturnValue` | Capture the procedure's `RETURN` value. |
    | `InputOutput` | Pass a value in *and* read it back out. |

    ```html
    <SubmitCommand CommandText="exec InsertOrder">
      <Parameter Name="CustomerId" Value='<%# FormData("CustomerId") %>' DataType="Int32" />
      <Parameter Name="OrderId"    Direction="Output" DataType="Int32" />
      <Parameter Name="Status"     Direction="ReturnValue" DataType="Int32" />
    </SubmitCommand>
    ```

    On a successful submit, `[[Posted:OrderId]]` and `[[Posted:Status]]` are available in the form's success template and in any post-submit redirect.

    ::: tip Make Output names unique
    For output and return parameters, use a `Name` that doesn't collide with any of your form's `DataField` values. If both an `<TextBox DataField="OrderId">` and an `<Parameter Name="OrderId" Direction="Output">` exist, you'll get unpredictable results.
    :::

## See Also

* [`<ControlDataSource>`](control-datasource.md) — uses Parameter for SELECT-driven dropdowns and list controls
* [`<AddForm>` / `<EditForm>`](add-edit-form.md) — for SubmitCommand, DeleteCommand, and SelectCommand parameter usage
* [`<xmod:Template>`](../template-controls/template.md) — for ListDataSource and DetailDataSource parameter usage in views
* [Tokens overview](../tokens/README.md) — the most common source of `Value` and `DefaultValue`
