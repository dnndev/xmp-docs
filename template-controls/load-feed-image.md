---
id: template-load-feed-image
title: 'xmod:LoadFeedImage'
category: Feed Controls
context: template
summary: A clickable image that loads an XMP feed via AJAX when clicked. Image variant of [`<xmod:LoadFeedButton>`](load-feed-button.md).
keywords:
  - load
  - feed
  - image
  - template
since: '1.0'
related:
  - template-load-feed
  - template-load-feed-button
  - template-load-feed-link
---

# `<xmod:LoadFeedImage>`

`<xmod:LoadFeedImage>` renders a clickable image that fires an AJAX request to load an XMP feed when clicked — same behavior as [`<xmod:LoadFeedButton>`](load-feed-button.md), just rendered as an image rather than a push-button.

::: warning Requires jQuery
The hosting page must include jQuery.
:::

::: info Sibling variants
- [`<xmod:LoadFeedButton>`](load-feed-button.md) — push-button
- [`<xmod:LoadFeedLink>`](load-feed-link.md) — hyperlink
- [`<xmod:LoadFeed>`](load-feed.md) — load on page load (no click required)
:::

## Example

```html {3-5}
<div id="Content"></div>

<xmod:LoadFeedImage AlternateText="Show Top Authors" ImageUrl="~/images/refresh.gif"
    FeedName="Top20Authors" Target="#Content"
    LoadingImageUrl="~/images/loading.gif" />
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| FeedName <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Feed name as defined on the Manage Feeds page |
| Target <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | jQuery selector | | The element whose content is replaced or appended |
| ImageUrl | URL | | Path to the image file. Tilde (`~`) supported |
| AlternateText | string | | Alt text for screen readers and search engines |
| InsertMode | `Replace` `Append` `Prepend` | `Replace` | How the loaded content is placed into the target |
| LoadingImageUrl | URL | | Image shown in the target while the feed is loading |
| LoadingCssClass | string | | CSS class(es) applied to the loading image |
| InfinitePaging | `True` `False` | `False` | Enable infinite-scroll plumbing |
| IDSelector | jQuery selector | | When `InfinitePaging="True"`, locates the element holding the last record's ID |
| CssClass | string | | CSS class name(s) |
| Style | string | | Inline CSS |
| ToolTip | string | | Hover tooltip |
| Visible | `True` `False` | `True` | Shows or hides the control |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Child Tags

`<Field Name Value>` — same as on [`<xmod:LoadFeedButton>`](load-feed-button.md#child-tags).

See [`<xmod:LoadFeedButton>`](load-feed-button.md) for full property details and infinite-paging usage.
