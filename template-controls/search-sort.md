---
id: template-search-sort
title: SearchSort
category: Navigation
context: template
summary: Adds a search box and sort controls above a `<xmod:Template>` or `<xmod:DataList>`. Filters the list-data SQL via a placeholder-based `FilterExpression`.
keywords:
  - search
  - sort
  - filter
  - template
since: '1.0'
related:
  - template-template
  - template-data-list
  - template-pager
---

# `<SearchSort>`

`<SearchSort>` adds a search input, a sort dropdown, and a "reverse sort" checkbox to a list view. It's a child of [`<xmod:Template>`](template.md) or [`<xmod:DataList>`](data-list.md) — it doesn't stand on its own.

The `FilterExpression` attribute is a fragment that XMP appends to the list query's WHERE clause, with `{0}` substituted for the user's search input. The `SortFieldNames` and `SortFieldLabels` properties populate the sort dropdown.

The optional inner content (the *display template*) lets you arrange the search box, sort dropdown, and labels with your own HTML.

## Example

```html {3-12}
<xmod:Template ...>
  ...
  <SearchSort FilterExpression="FirstName LIKE '%{0}%'"
              SearchLabelText="Search For:" SearchButtonText="GO"
              SortFieldNames="FirstName,LastName,Zip"
              SortFieldLabels="First Name,Last Name,Zip Code">
    <table>
      <tr>
        <td><strong>{SearchLabel}</strong> {SearchBox} {SearchButton}</td>
        <td align="right">
          <strong>{SortLabel}</strong> {SortFieldList} {SortButton} Reverse {ReverseSort}
        </td>
      </tr>
    </table>
  </SearchSort>
  ...
</xmod:Template>
```

## Properties

### Search filter

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [FilterExpression](#prop-filterexpression) | SQL fragment with `{0}` | | The WHERE-clause fragment XMP appends to the list query when the user submits the search |

### Captions and labels

| Property | Default |
|----------|---------|
| SearchLabelText | `Search` |
| SearchButtonText | `Search` |
| SortLabelText | `Sort` |
| SortButtonText | `Sort` |
| ReverseSortText | `Reverse` |

### Sort columns

| Property | Values | Description |
|----------|--------|-------------|
| [SortFieldNames](#prop-sortfields) | comma-list | Comma-delimited list of column names that the user can sort by |
| [SortFieldLabels](#prop-sortfields) | comma-list | Comma-delimited list of friendly captions for the columns. Maps positionally to `SortFieldNames` |

### CSS classes

| Property | Default | Applies to |
|----------|---------|-----------|
| SearchLabelCssClass | `Normal` | The "Search:" label |
| SearchBoxCssClass | `NormalTextBox` | The search input box |
| SearchButtonCssClass | `CommandButton` | The Search button |
| SortLabelCssClass | `Normal` | The "Sort:" label |
| SortFieldListCssClass | `NormalTextBox` | The sort-column dropdown |
| SortButtonCssClass | `CommandButton` | The Sort button |
| ReverseSortCssClass | `Normal` | The Reverse checkbox |
| CssClass | | The whole panel container |

<details>
<summary>Deprecated Properties (styling)</summary>

These ASP.NET-style style properties are still recognized but you should prefer CSS — set `CssClass` on the panel and on each part via the `*CssClass` properties above.

| Property | Values | Description |
|----------|--------|-------------|
| BackColor | color name \| #dddddd | Background color of the panel |
| BorderColor | color name \| #dddddd | Border color of the panel |
| BorderStyle | `NotSet` `None` `Dotted` `Dashed` `Solid` `Double` `Groove` `Ridge` `Inset` `Outset` | Border style |
| BorderWidth | [size](../unit-types.md) | Border width |
| Font-Bold | `True` `False` | Bold text |
| Font-Italic | `True` `False` | Italic text |
| Font-Names | string | Font family name |
| Font-Overline | `True` `False` | Overline text decoration |
| Font-Size | size or named size | Font size |
| Font-Strikeout | `True` `False` | Strikethrough |
| Font-Underline | `True` `False` | Underline |
| ForeColor | color name \| #dddddd | Text color |
| Width | [size](../unit-types.md) | Panel width |
| Height | [size](../unit-types.md) | Panel height |

</details>

## Property Details

*   <span id="prop-filterexpression">**FilterExpression**</span>: A WHERE-clause fragment (no leading `WHERE`) with `{0}` as the placeholder for whatever the user typed in the search box. When the user submits, XMP runs the list query with this fragment AND-ed to its WHERE clause.

    ```text
    FilterExpression="FirstName LIKE '%{0}%'"
    ```

    If the user enters `John`, the effective filter becomes `FirstName LIKE '%John%'`. The placeholder is parameterized — user input is sent as a SQL parameter, not concatenated into the SQL — so there's no SQL-injection risk from the user's search text.

    Match multiple columns by combining with `OR`:

    ```text
    FilterExpression="FirstName LIKE '%{0}%' OR LastName LIKE '%{0}%'"
    ```

*   <span id="prop-sortfields">**SortFieldNames / SortFieldLabels**</span>: Two comma-delimited lists, mapped positionally.

    | List | Contains |
    |------|----------|
    | `SortFieldNames` | Column names exactly as they appear in the data source — used in the resulting `ORDER BY` |
    | `SortFieldLabels` | Friendly captions shown in the dropdown to the user |

    If `SortFieldLabels` has fewer entries than `SortFieldNames`, the missing labels fall back to the column name. If `SortFieldLabels` is omitted entirely, every column shows its raw name.

## Display Template

Place HTML between `<SearchSort>` and `</SearchSort>` to arrange the controls manually. The placeholders below are replaced with the rendered control:

| Token | Replaced with |
|-------|---------------|
| `{SearchLabel}` | The "Search:" label |
| `{SearchBox}` | The search input |
| `{SearchButton}` | The Search button |
| `{SortLabel}` | The "Sort:" label |
| `{SortFieldList}` | The dropdown of sortable columns |
| `{SortButton}` | The Sort button |
| `{ReverseSort}` | The "Reverse" checkbox |

If no inner content is supplied, XMP uses its built-in default layout.
