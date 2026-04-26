---
id: template-load-feed
title: 'xmod:LoadFeed'
category: Feed Controls
context: template
summary: Loads an XMP feed asynchronously when the page loads, replacing or appending to a target HTML element. Useful for AJAX-style content loading and infinite-scroll lists.
keywords:
  - load
  - feed
  - ajax
  - template
since: '1.0'
related:
  - load-feed-button
  - load-feed-image
  - load-feed-link
  - feed
  - json-feed
---

# `<xmod:LoadFeed>`

`<xmod:LoadFeed>` fires an AJAX request when the page loads, fetching an XMP feed and dropping the rendered content into a target HTML element. Use it to populate parts of a page after the rest has rendered (so the user sees the page faster), or to lazy-load expensive content.

For user-triggered loading (a "Load More" button or link), see [`<xmod:LoadFeedButton>`](load-feed-button.md), [`<xmod:LoadFeedImage>`](load-feed-image.md), and [`<xmod:LoadFeedLink>`](load-feed-link.md).

::: warning Requires jQuery
The hosting page must include jQuery. Default DNN skins do; verify a custom skin does too.
:::

::: tip Place after the target
The tag fires its AJAX call as soon as it renders. If the target HTML element appears later in the page than the `<xmod:LoadFeed>` tag, the script may run before the target exists. Place the `<xmod:LoadFeed>` after the target element to be safe.
:::

## Example

```html {7-10}
<!-- Top Authors goes here -->
<div id="TopAuthors"></div>

<!-- Top Crime Books goes here -->
<div id="TopCrime"></div>

<!-- Trigger the loads -->
<xmod:LoadFeed FeedName="Top20Authors" Target="#TopAuthors" LoadingImageUrl="~/images/loading.gif" />
<xmod:LoadFeed FeedName="Top20CrimeBooks" Target="#TopCrime">
  <Field Name="GenreId" Value="20" />
</xmod:LoadFeed>
```

The targeted feeds (defined separately on the Manage Feeds page) need `ContentType="text/html"` so the result is HTML the page can drop in directly:

```html
<xmod:Feed ContentType="text/html">
  <ListDataSource CommandText="SELECT FirstName, LastName FROM Authors WHERE SalesRank <= 20" />
  <HeaderTemplate><table><thead><tr><th>Author</th></tr></thead><tbody></HeaderTemplate>
  <ItemTemplate><tr><td>[[FirstName]] [[LastName]]</td></tr></ItemTemplate>
  <FooterTemplate></tbody></table></FooterTemplate>
</xmod:Feed>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [FeedName](#prop-feedname) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Name of the feed (as defined on the Manage Feeds page) |
| [Target](#prop-target) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | jQuery selector | | The element whose content is replaced or appended |
| [InsertMode](#prop-insertmode) | `Replace` `Append` `Prepend` | `Replace` | How the loaded content is placed into the target |
| [LoadingImageUrl](#prop-loadingimageurl) | URL | | Image shown in the target while the feed is loading. Tilde paths supported |
| LoadingCssClass | string | | CSS class(es) applied to the loading image |
| [InfinitePaging](#prop-infinitepaging) | `True` `False` | `False` | Enable infinite-scroll plumbing — adds the JavaScript helper used by Load Feed buttons in infinite-paging mode |
| IDSelector | jQuery selector | | When `InfinitePaging="True"`, selects the element holding the last record's ID — sent as `LastId` to the feed |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Child Tags

| Tag | Required | Description |
|-----|----------|-------------|
| [`<Field>`](#child-field) | optional | Pass extra parameters to the feed (e.g. filter values). Add as many as needed |

### <span id="child-field">`<Field>`</span>

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| Name <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Parameter name as expected by the feed's `<ListDataSource>` parameter |
| Value | string \| token | | Parameter value |

## Property Details

*   <span id="prop-feedname">**FeedName**</span>: The exact feed name from the Manage Feeds page (case-sensitive). The feed should set `ContentType="text/html"` so that what gets dropped into the page is renderable HTML, not RSS or JSON wrapped in markup.

*   <span id="prop-target">**Target**</span>: A jQuery selector — typically an `#id` selector for the placeholder element. The loaded content replaces (or extends) this element's contents.

*   <span id="prop-insertmode">**InsertMode**</span>: How the loaded content is placed.

    | Value | Behavior |
    |-------|----------|
    | `Replace` _(default)_ | Replaces the target's existing content |
    | `Append` | Adds the loaded content at the end of the target |
    | `Prepend` | Adds the loaded content at the start of the target |

*   <span id="prop-loadingimageurl">**LoadingImageUrl**</span>: An image (typically an animated GIF) shown in the target while the AJAX request is in flight. The image is removed when the feed responds. The XMP-managed wrapper image picks up the class `xmp-loading-image` automatically; any classes you set in `LoadingCssClass` are added alongside it.

*   <span id="prop-infinitepaging">**InfinitePaging**</span>: When `True`, registers an additional JavaScript helper (`xmp_InfinitePaging`) that Load Feed buttons can call to fetch the next page using the last record's ID as a cursor. Pair with `IDSelector` so the helper knows where to find the cursor value, and use a `<Field>` named to match your feed's pagination parameter.
