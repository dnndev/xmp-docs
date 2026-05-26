---
id: template-load-feed-button
title: 'xmod:LoadFeedButton'
category: Feed Controls
context: template
summary: A push-button that loads an XMP feed via AJAX when clicked. Companion to [`<xmod:LoadFeed>`](load-feed.md), which loads automatically on page load.
keywords:
  - load
  - feed
  - button
  - template
since: '1.0'
related:
  - template-load-feed
  - template-load-feed-image
  - template-load-feed-link
---

# `<xmod:LoadFeedButton>`

`<xmod:LoadFeedButton>` renders a push-button that fires an AJAX request to load an XMP feed when clicked. Unlike [`<xmod:LoadFeed>`](load-feed.md), which loads on page load, `<xmod:LoadFeedButton>` only loads when the user clicks. Use it for "Load More" or "Refresh" patterns, including infinite-scroll lists.

::: warning Requires jQuery
The hosting page must include jQuery.
:::

::: info Sibling variants
- [`<xmod:LoadFeedImage>`](load-feed-image.md) — same behavior, rendered as a clickable image
- [`<xmod:LoadFeedLink>`](load-feed-link.md) — same behavior, rendered as a hyperlink
:::

## Example — Two buttons, one target

```html {5-8}
<div id="Content"></div>

<xmod:LoadFeedButton Text="Show Top Authors" FeedName="Top20Authors" Target="#Content"
    LoadingImageUrl="~/images/loading.gif" />
<xmod:LoadFeedButton Text="Show Top Crime Books" FeedName="Top20CrimeBooks" Target="#Content">
  <Field Name="GenreId" Value="20" />
</xmod:LoadFeedButton>
```

## Example — Infinite paging

The button below loads 10 more authors and appends them to the existing list. The feed receives a `LastId` parameter, taken from the hidden span at the end of the last visible row.

```html {12-15}
<xmod:Template>
  <ListDataSource CommandText="SELECT TOP 10 AuthorId, FirstName, LastName FROM Authors" />
  <HeaderTemplate><ul id="AuthorsList"></HeaderTemplate>
  <ItemTemplate>
    <li>[[FirstName]] [[LastName]]<span style="display:none;">[[AuthorId]]</span></li>
  </ItemTemplate>
  <FooterTemplate>
    </ul>
    <xmod:LoadFeedButton Text="Show Next 10"
        FeedName="Authors_Chunked"
        Target="#AuthorsList"
        IDSelector="#AuthorsList li:last span"
        InsertMode="Append"
        InfinitePaging="True"
        LoadingImageUrl="~/images/loading.gif" />
  </FooterTemplate>
</xmod:Template>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| FeedName <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Feed name as defined on the Manage Feeds page |
| Target <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | jQuery selector | | The element whose content is replaced or appended |
| Text | string | | Caption displayed on the button |
| InsertMode | `Replace` `Append` `Prepend` | `Replace` | How the loaded content is placed into the target |
| LoadingImageUrl | URL | | Image shown in the target while the feed is loading. Tilde paths supported |
| LoadingCssClass | string | | CSS class(es) applied to the loading image |
| [InfinitePaging](#prop-infinitepaging) | `True` `False` | `False` | Enable infinite-scroll plumbing — the button passes `LastId` to the feed |
| IDSelector | jQuery selector | | When `InfinitePaging="True"`, locates the element holding the last record's ID |
| CssClass | string | | CSS class name(s) |
| Style | string | | Inline CSS |
| Width | [size](../unit-types.md) | | Width of the button |
| Height | [size](../unit-types.md) | | Height of the button |
| ToolTip | string | | Hover tooltip |
| Visible | `True` `False` | `True` | Shows or hides the button |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Child Tags

| Tag | Required | Description |
|-----|----------|-------------|
| `<Field Name Value>` | optional | Pass extra parameters to the feed — same surface as on [`<xmod:LoadFeed>`](load-feed.md#child-field). Add as many as needed |

## Property Details

*   <span id="prop-infinitepaging">**InfinitePaging**</span>: When `True`, the button calls `xmp_InfinitePaging` (a helper registered automatically). The helper reads the inner text of the element matched by `IDSelector` and sends it to the feed as a `LastId` parameter. Pair with `InsertMode="Append"` and a feed that returns rows where `AuthorId > @LastId` to build a "Load More" pattern.

    The feed should set `ContentType="text/html"` and return only the rows (no surrounding header/footer markup) so they fit cleanly into the existing list.

## Companion feed setup

Feeds consumed by Load Feed buttons should set `ContentType="text/html"` so the response slots into the page directly. See [`<xmod:LoadFeed>`](load-feed.md) for full feed-side examples.
