---
id: template-pager
title: Pager
category: Navigation
context: template
summary: Configures the top and bottom pagers shown above and below a `<xmod:Template>` or `<xmod:DataList>`. Supports both postback and SEO-friendly hyperlink modes.
keywords:
  - pager
  - paging
  - template
since: '1.0'
related:
  - template-template
  - template-data-list
  - template-search-sort
---

# `<Pager>`

`<Pager>` configures how the pagers above and below a list view look and behave. It's a child of [`<xmod:Template>`](template.md) or [`<xmod:DataList>`](data-list.md) — it doesn't stand on its own.

The tag's attributes set things like page size, captions, and CSS classes. Optional inner content (the *display template*) lets you arrange the navigation links and page-info tokens with your own HTML.

::: tip SEO-friendly paging
Set `Type="Hyperlink"` (since v4.5) and the pager renders standard `<a href="...">` links instead of postback buttons. Each click is a fresh request — search-engine crawlers can follow the links and index every page. Other modules on the page may lose state on hyperlink clicks, so use this when crawlability is more important than module-state preservation.
:::

::: info Turning paging off
To disable paging entirely (show all rows on a single page), set `UsePaging="False"` on the parent `<xmod:Template>` or `<xmod:DataList>` instead of removing the `<Pager>` tag.
:::

## Example

```html {3-10}
<xmod:Template ...>
  ...
  <Pager PageSize="15" PageNumCssClass="CommandButton"
         FirstPageCaption="[First]" LastPageCaption="[Last]">
    <table>
      <tr>
        <td>Page <strong>{PageNumber}</strong> of {PageCount}</td>
        <td align="right">{Pager}</td>
      </tr>
    </table>
  </Pager>
  ...
</xmod:Template>
```

## Properties

### Layout & sizing

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| PageSize | integer | `10` | Maximum number of records on each page |
| MaxPageNumButtons | integer | `5` | Maximum number of page-number buttons between Previous and Next |
| ShowTopPager | `True` `False` | `True` | When `False`, the pager above the list is hidden _(since v1.2)_ |
| ShowBottomPager | `True` `False` | `True` | When `False`, the pager below the list is hidden _(since v1.2)_ |
| ShowPrevNext | `True` `False` | `True` | When `False`, the Previous / Next links are hidden |
| ShowFirstLast | `True` `False` | `False` | When `True`, First / Last links appear at each end of the pager |
| ScrollToTop | `True` `False` | `True` | After clicking a link in the *bottom* pager, scroll the page to the top of the view _(since v4.0)_ |

::: info Pagers vs. paging
`ShowTopPager` and `ShowBottomPager` only hide the pager UI — paging still happens. With both set to `False`, only the first page renders and visitors have no way to reach later pages.
:::

### Captions

| Property | Default |
|----------|---------|
| FirstPageCaption | `First` |
| PrevPageCaption | `Prev` |
| NextPageCaption | `Next` |
| LastPageCaption | `Last` |

### CSS classes

| Property | Default | Applies to |
|----------|---------|-----------|
| PageNumCssClass | `CommandButton` | Page-number buttons |
| PrevNextCssClass | `CommandButton` | Previous and Next links |
| FirstLastCssClass | `CommandButton` | First and Last links |
| CurrentPageCssClass | | The current page's button (overrides `PageNumCssClass` for that one) |
| FirstPageCssClass | | First-page link only (overrides `FirstLastCssClass` for that one) |
| LastPageCssClass | | Last-page link only |
| PrevPageCssClass | | Previous-page link only (overrides `PrevNextCssClass` for that one) |
| NextPageCssClass | | Next-page link only |

### SEO-friendly mode

Set `Type="Hyperlink"` to enable. The four `*ParameterName` properties control the URL parameters the hyperlink pager uses to communicate state.

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| Type | `LinkButton` `Hyperlink` | `LinkButton` | When `Hyperlink`, the pager renders `<a href>` links instead of postback buttons _(since v4.5)_ |
| PageParameterName | string | `pg` | URL parameter that carries the page number |
| SearchValueParameterName | string | `sv` | URL parameter that carries the search phrase |
| SortColumnParameterName | string | `sc` | URL parameter that carries the sort column name |
| SortOrderParameterName | string | `so` | URL parameter that carries the sort order |

## Display Template

Place HTML between `<Pager>` and `</Pager>` to arrange the pager's parts manually. If no inner content is supplied, XMP uses its built-in default layout.

Three placeholders are substituted at render time:

| Token | Replaced with |
|-------|---------------|
| `{PageNumber}` | The current page number |
| `{PageCount}` | The total number of pages |
| `{Pager}` | The First / Prev / page-number buttons / Next / Last links, in order |

```html
<Pager PageSize="20">
  <div class="my-pager">
    <span>Page {PageNumber} of {PageCount}</span>
    <span>{Pager}</span>
  </div>
</Pager>
```
