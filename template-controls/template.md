---
id: template-template
title: 'xmod:Template'
category: Display Controls
context: template
summary: The primary view tag — declares one data view inside an XMP view, with its own data sources, role-based permissions, and list/detail layout templates.
keywords:
  - template
  - view
since: '1.0'
related:
  - template-data-list
  - template-pager
  - template-search-sort
  - template-feed
---

# `<xmod:Template>`

`<xmod:Template>` is the primary workhorse of XMod Pro. It declares one data view inside a [view](../views.md) — its own data commands, the layout for the list view (`<ItemTemplate>`, `<HeaderTemplate>`, `<FooterTemplate>`, …), the layout for the detail view (`<DetailTemplate>`), and the role-based permissions that gate adding, editing, deleting, and viewing detail.

A view file may contain multiple `<xmod:Template>` tags, each bound to a different data source — laid out side-by-side with HTML, or stacked, or shown one at a time via [`<xmod:Select>`](select.md).

::: info `<xmod:Template>` vs. View
In v5 we use **View** for the user-facing concept (what you create in the Control Panel) and **template** for the underlying tag — `<xmod:Template>`, `<ItemTemplate>`, `<DetailTemplate>`, etc. A View is everything inside one `.template` file; an `<xmod:Template>` is one data view within that file.
:::

## Example

```html
<xmod:Template AddRoles="Editors,Authors">
  <ListDataSource CommandText="SELECT * FROM Users" />
  <DetailDataSource CommandText="SELECT * FROM Users WHERE UserID = @UserID" />

  <HeaderTemplate><ul></HeaderTemplate>
  <ItemTemplate>
    <li>
      [[FirstName]] [[LastName]]
      <xmod:DetailLink Text="More...">
        <Parameter Name="UserID" Value="[[UserID]]" />
      </xmod:DetailLink>
    </li>
  </ItemTemplate>
  <AlternatingItemTemplate>
    <li class="AltItem">
      [[FirstName]] [[LastName]]
      <xmod:DetailLink Text="More...">
        <Parameter Name="UserID" Value="[[UserID]]" />
      </xmod:DetailLink>
    </li>
  </AlternatingItemTemplate>
  <FooterTemplate></ul></FooterTemplate>

  <DetailTemplate>
    <h1>User Detail</h1>
    [[FirstName]] [[LastName]]
  </DetailTemplate>
</xmod:Template>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| ID | string | | Unique identifier for the template within the view |
| [AddRoles](#prop-roles) | comma-list | | DNN role names allowed to add records via buttons inside this template |
| [EditRoles](#prop-roles) | comma-list | | DNN role names allowed to edit records via buttons inside this template |
| [DeleteRoles](#prop-roles) | comma-list | | DNN role names allowed to delete records via buttons inside this template |
| [DetailRoles](#prop-roles) | comma-list | (everyone) | DNN role names allowed to open the detail view. By default any visitor who can see the module can view detail |
| [Ajax](#prop-ajax) | `True` `False` | `False` | When `True`, in-template buttons (DetailLink, DeleteButton, CommandButton, etc.) postback via AJAX without a full page refresh _(since v2.6)_ |
| [ConnectionString](#prop-connectionstring) | string \| `[[ConnectionString:name]]` | DNN database | Default connection string for `<ListDataSource>` and `<DetailDataSource>` |
| UsePaging | `True` `False` | `True` | When `True`, lists with more than one page show a [`<Pager>`](pager.md) |

## Child Tags

`<xmod:Template>` is a container — most of its functionality comes from its child tags.

### Data commands

| Tag | Required | Description |
|-----|----------|-------------|
| [`<ListDataSource>`](#child-listdatasource) | required for list view | SQL or stored procedure that returns the rows shown in list view |
| [`<DetailDataSource>`](#child-detaildatasource) | required for detail view | SQL or stored procedure that returns the single row shown in detail view |
| [`<DeleteCommand>`](#child-deletecommand) | required for delete buttons | SQL or stored procedure that runs when a `<xmod:DeleteButton>` is clicked |
| [`<CustomCommands>`](#child-customcommands) | optional | Container for one or more named `<DataCommand>` tags driven by `<xmod:CommandButton>` _(since v3)_ |

### Layout templates (list view)

| Tag | Description |
|-----|-------------|
| `<HeaderTemplate>` | Rendered once at the top of the list. Optional |
| `<ItemTemplate>` | Rendered once per row. Required for list view. If `<AlternatingItemTemplate>` is set, this renders only odd rows |
| `<AlternatingItemTemplate>` | Rendered for even rows when set. Optional |
| `<SeparatorTemplate>` | Rendered between rows (not after the last). Use for comma-separated lists where a trailing separator would be wrong _(since v1.4)_ |
| `<FooterTemplate>` | Rendered once at the bottom of the list. Optional |
| `<NoItemsTemplate>` | Rendered when the data source returns zero rows. Optional |

### Layout template (detail view)

| Tag | Description |
|-----|-------------|
| `<DetailTemplate>` | The HTML and tags shown when a `<xmod:DetailButton>` (or sibling) is clicked. Required if you use detail buttons |

### Pager and Search/Sort

| Tag | Description |
|-----|-------------|
| [`<Pager>`](pager.md) | Customizes the appearance and layout of the top and bottom pagers |
| [`<SearchSort>`](search-sort.md) | Adds a search input and sort options above the list |

## Property Details

*   <span id="prop-roles">**AddRoles / EditRoles / DeleteRoles / DetailRoles**</span>: Comma-delimited DNN role names. Host (SuperUser) and Admin accounts always have all four permissions; other users must be explicitly granted. By default, anyone who can view the module can also view detail — set `DetailRoles` to gate that.

    ::: warning Inside-only
    These role properties only gate buttons rendered **inside** this `<xmod:Template>`. Buttons placed *outside* the template (e.g. an `<xmod:AddButton>` above the list) are gated by the module's Configure → Security tab in DNN.
    :::

    Prior to v4.0 these lists used semicolons as delimiters. Comma is preferred in v4.0+; semicolon is still recognized for backwards compatibility.

*   <span id="prop-ajax">**Ajax**</span>: When `True`, buttons inside the template (DetailLink, DeleteButton, CommandButton, etc.) postback through AJAX so the page doesn't refresh. Each button must have its `Id` property set; otherwise you may need to click twice.

*   <span id="prop-connectionstring">**ConnectionString**</span>: The default connection string used by `<ListDataSource>` and `<DetailDataSource>` when those children don't specify their own. If omitted, the current DNN site's database is used. To reference a connection string defined in `web.config`, use `[[ConnectionString:name]]`.

*   <span id="child-listdatasource">**`<ListDataSource>`**</span>: Provides the rows for list view. Accepts a SQL `SELECT` (the default) or a stored procedure (set `CommandType="StoredProcedure"`). Add `<Parameter>` children to bind values:

    ```html
    <ListDataSource CommandText="SELECT FirstName, LastName FROM Users WHERE ZipCode = @zip">
      <Parameter Name="zip" Value="12345" />
    </ListDataSource>
    ```

    Stored procedures with output parameters _(since v1.3)_:

    ```html
    <ListDataSource CommandText="GetEmployeesByDepartment" CommandType="StoredProcedure">
      <Parameter Name="DepartmentId" Value="32" />
      <Parameter Name="DepartmentName" Direction="Output" DataType="String" Size="100" />
    </ListDataSource>
    ```

    Output parameters become available as field tokens after the command runs. See [Data Tokens](../tokens/data.md).

*   <span id="child-detaildatasource">**`<DetailDataSource>`**</span>: Provides the single row for detail view. Same surface as `<ListDataSource>` — SQL or stored proc, with parameters and optional output parameters.

*   <span id="child-deletecommand">**`<DeleteCommand>`**</span>: Runs when a `<xmod:DeleteButton>` (or sibling) inside this template is clicked. Same parameter surface as the data sources.

*   <span id="child-customcommands">**`<CustomCommands>`**</span>: Container for named `<DataCommand>` tags that custom buttons can fire. Each `<DataCommand>` has a `CommandName`, `CommandText`, optional `ConnectionString`, and `<Parameter>` children. Trigger them from a `<xmod:CommandButton>` (or sibling) with `<Command Name="..." Type="Custom">`.

    ```html
    <xmod:Template>
      ...
      <CustomCommands>
        <DataCommand CommandName="ChangeLastNameToSmith"
            CommandText="UPDATE Authors SET LastName='Smith' WHERE AuthorId = @AuthorId">
          <Parameter Name="AuthorId" />
        </DataCommand>
      </CustomCommands>
      ...
      <ItemTemplate>
        <xmod:CommandButton Text="Set To Smith">
          <Command Name="ChangeLastNameToSmith" Type="Custom">
            <Parameter Name="AuthorId" Value="[[AuthorId]]" />
          </Command>
        </xmod:CommandButton>
      </ItemTemplate>
    </xmod:Template>
    ```

## Field tokens inside templates

Each row's columns are exposed to the layout templates as `[[FieldName]]` tokens — the name must match the column name exactly (case-sensitive). When a field token appears in an XMP tag's attribute, use single quotes around the attribute value:

```html
<xmod:DetailLink Text="More...">
  <Parameter Name="UserID" Value='[[UserID]]' />
</xmod:DetailLink>
```

Field tokens inside HTML attributes don't need single-quoted delimiters.
