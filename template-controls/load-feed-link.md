---
id: template-load-feed-link
title: 'xmod:LoadFeedLink'
category: Feed Controls
context: template
summary: A hyperlink that loads an XMP feed via AJAX when clicked. Link variant of [`<xmod:LoadFeedButton>`](load-feed-button.md).
keywords:
  - load
  - feed
  - link
  - template
since: '1.0'
related:
  - template-load-feed
  - template-load-feed-button
  - template-load-feed-image
---

# `<xmod:LoadFeedLink>`

`<xmod:LoadFeedLink>` renders a hyperlink that fires an AJAX request to load an XMP feed when clicked — same behavior as [`<xmod:LoadFeedButton>`](load-feed-button.md), just rendered as a link rather than a push-button.

::: warning Requires jQuery
The hosting page must include jQuery.
:::

::: info Sibling variants
- [`<xmod:LoadFeedButton>`](load-feed-button.md) — push-button
- [`<xmod:LoadFeedImage>`](load-feed-image.md) — clickable image
- [`<xmod:LoadFeed>`](load-feed.md) — load on page load (no click required)
:::

## Example

```html {3-5}
<div id="Content"></div>

<xmod:LoadFeedLink Text="Show Top Authors"
    FeedName="Top20Authors" Target="#Content"
    LoadingImageUrl="~/images/loading.gif" />
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| FeedName <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Feed name as defined on the Manage Feeds page |
| Target <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | jQuery selector | | The element whose content is replaced or appended |
| Text | string | | Caption displayed on the link |
| InsertMode | `Replace` `Append` `Prepend` | `Replace` | How the loaded content is placed into the target |
| LoadingImageUrl | URL | | Image shown in the target while the feed is loading |
| LoadingCssClass | string | | CSS class(es) applied to the loading image |
| InfinitePaging | `True` `False` | `False` | Enable infinite-scroll plumbing |
| IDSelector | jQuery selector | | When `InfinitePaging="True"`, locates the element holding the last record's ID |
| CssClass | string | | CSS class name(s) |
| Style | string | | Inline CSS |
| ToolTip | string | | Hover tooltip |
| Visible | `True` `False` | `True` | Shows or hides the link |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Child Tags

`<Field Name Value>` — same as on [`<xmod:LoadFeedButton>`](load-feed-button.md#child-tags).

See [`<xmod:LoadFeedButton>`](load-feed-button.md) for full property details and infinite-paging usage.
