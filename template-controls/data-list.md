---
id: template-data-list
title: 'xmod:DataList'
category: Display Controls
context: template
summary: A view tag that lays out records in a grid pattern (rows and columns). Same data and permissions surface as `<xmod:Template>`, plus three Repeat properties for grid layout.
keywords:
  - data
  - list
  - grid
since: '1.0'
related:
  - template
  - pager
  - search-sort
---

# `<xmod:DataList>`

`<xmod:DataList>` is a view tag — same role as [`<xmod:Template>`](template.md) — that arranges records in a grid of rows and columns instead of a single column. Useful for product cards, image galleries, and any list where each row should hold multiple records side-by-side.

```
Record1  Record2  Record3
Record4  Record5  Record6
Record7  Record8
```

A view file may contain any combination of `<xmod:DataList>` and `<xmod:Template>` tags, each with its own data source.

## Example

```html
<xmod:DataList AddRoles="Editors,Authors" RepeatColumns="3" RepeatDirection="Horizontal">
  <ListDataSource CommandText="SELECT * FROM Users" />
  <DetailDataSource CommandText="SELECT * FROM Users WHERE UserID = @UserID" />

  <HeaderTemplate><h1>Users</h1></HeaderTemplate>
  <ItemTemplate>
    [[FirstName]] [[LastName]]<br />
    <xmod:DetailLink Text="More...">
      <Parameter Name="UserID" Value="[[UserID]]" />
    </xmod:DetailLink>
  </ItemTemplate>

  <DetailTemplate>
    <h1>User Detail</h1>
    [[FirstName]] [[LastName]]
  </DetailTemplate>
  <NoItemsTemplate>
    <span class="NormalRed">Sorry — no records were found.</span>
  </NoItemsTemplate>
</xmod:DataList>
```

## Properties

`<xmod:DataList>` shares its full property and child-tag surface with [`<xmod:Template>`](template.md#properties) — `AddRoles`, `EditRoles`, `DeleteRoles`, `DetailRoles`, `Ajax`, `ConnectionString`, `UsePaging`, plus all the layout-template and data-command children — and adds three properties that control the grid layout:

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [RepeatColumns](#prop-repeatcolumns) | integer | `0` (no limit) | Maximum number of records per row |
| [RepeatDirection](#prop-repeatdirection) | `Horizontal` `Vertical` | `Horizontal` | Whether records fill across (left-to-right) or down (top-to-bottom) first |
| [RepeatLayout](#prop-repeatlayout) | `Table` `Flow` | `Table` | Whether the grid is built with HTML `<table>` rows/cells or `<span>` + `<br>` |

For the rest of the surface — `AddRoles`/`EditRoles`/`DeleteRoles`/`DetailRoles`, `Ajax`, `ConnectionString`, `UsePaging`, and the `<ListDataSource>`/`<DetailDataSource>`/`<DeleteCommand>`/`<CustomCommands>`/`<HeaderTemplate>`/`<ItemTemplate>`/`<AlternatingItemTemplate>`/`<SeparatorTemplate>`/`<FooterTemplate>`/`<DetailTemplate>`/`<NoItemsTemplate>`/`<Pager>`/`<SearchSort>` children — see [`<xmod:Template>`](template.md).

## Property Details

*   <span id="prop-repeatcolumns">**RepeatColumns**</span>: The maximum number of records that appear in each row of the grid. Once that many records are placed, the next record starts a new row. Unlike a typical HTML table where each column holds a different field, here each "column" holds a complete record (rendered by `<ItemTemplate>`).

*   <span id="prop-repeatdirection">**RepeatDirection**</span>: Determines fill order.

    | Value | Behavior |
    |-------|----------|
    | `Horizontal` _(default)_ | Records fill left-to-right within a row, then top-to-bottom across rows |
    | `Vertical` | Records fill top-to-bottom within a column, then left-to-right across columns |

    With `RepeatColumns="3"` and 8 records:

    ```
    Horizontal:        Vertical:
    Record1 Record2    Record3   Record1 Record4 Record7
    Record4 Record5    Record6   Record2 Record5 Record8
    Record7 Record8              Record3 Record6
    ```

*   <span id="prop-repeatlayout">**RepeatLayout**</span>: How the grid is rendered in HTML.

    | Value | Renders |
    |-------|---------|
    | `Table` _(default)_ | A `<table>` with one `<tr>` per row and one `<td>` per record. Reliable cross-browser layout |
    | `Flow` | `<span>` elements separated by `<br>`. Lighter markup, useful when you want to style the layout entirely with CSS |
