---
id: template-script-block
title: 'xmod:ScriptBlock'
category: Display Controls
context: template
summary: Injects a `<script>` block (or external script file) into one of several locations in the rendered page. Includes deduplication via `ScriptId` and conditional registration via `If`.
keywords:
  - script
  - block
  - template
since: '1.0'
related:
  - template-jquery-ready
  - template-include
---

# `<xmod:ScriptBlock>`

`<xmod:ScriptBlock>` registers a JavaScript or CSS block (or an external script file) with the hosting page so it ends up in the `<head>`, body-top, or body-bottom of the rendered HTML. With `BlockType="HeadScript"` it can also carry other head markup — `<meta>` and `<link>` tags for Open Graph, Twitter cards or a canonical URL. The block is identified by `ScriptId`, which lets the same script appear in multiple views without rendering twice when `RegisterOnce="True"`.

The actual `<script>`, `<style>` or `<meta>` tags go between the opening and closing `<xmod:ScriptBlock>` tags.

## Example

```html {2-13,15-21}
<div>
  <xmod:ScriptBlock ScriptId="AlertScripts" RegisterOnce="True" BlockType="StartupScript">
    <script>
      function helloWorld() {
        alert('Hello World');
      }
      function goodbyeWorld() {
        alert('Goodbye Cruel World');
      }
      function showMessage(sMessage) {
        alert(sMessage);
      }
    </script>
  </xmod:ScriptBlock>

  <xmod:ScriptBlock ScriptId="MyStyling" RegisterOnce="True" BlockType="HeadScript">
    <style>
      table td a { color: red; }
    </style>
  </xmod:ScriptBlock>

  <a href="#" onclick="helloWorld();">Hello World</a><br />
  <a href="#" onclick="goodbyeWorld();">Goodbye</a><br />
  <a href="#" onclick="showMessage('Hello and Goodbye');">Show Message</a>
</div>
```

## What Goes Inside the Block

The content of a `<xmod:ScriptBlock>` is plain markup plus tokens. Field tokens, system tokens and [expression tokens](../tokens/expressions.md) are all replaced before the block is registered, so a `<meta>` tag can pull its `content` from the current row:

```html
<xmod:ScriptBlock ScriptId="SocialTags" BlockType="HeadScript" RegisterOnce="True">
  <meta property="og:title" content="[[=HtmlEncode(Title)]]" />
  <meta property="og:site_name" content="[[Portal:Name]]" />
  <meta property="article:published_time" content="[[=Format(DatePublished, 'yyyy-MM-ddTHH:mm:ss')]]" />
</xmod:ScriptBlock>
```

::: warning No other XMP controls inside the block
Do not place `<xmod:Select>`, `<xmod:Format>`, `<xmod:IfEmpty>` or any other XMP control inside a `<xmod:ScriptBlock>`. The block only registers the markup that comes *before* the first nested control; the control and everything after it are dropped without an error. If the control sat inside an attribute value, the head is left with a half-written tag.

Use an expression token instead: `[[=Format(DatePublished, 'yyyy-MM-dd')]]` in place of `<xmod:Format>`, and the patterns under [Conditional Content in the Head](#conditional-content-in-the-head) in place of `<xmod:Select>`.
:::

Wrap text fields that go into an attribute in `HtmlEncode(...)`, as in the `og:title` example above. A quote or apostrophe in the data would otherwise end the attribute early.

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [ScriptId](#prop-scriptid) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Unique identifier used to deduplicate the script across the page |
| [BlockType](#prop-blocktype) | `ClientScript` `StartupScript` `HeadScript` `ClientScriptInclude` | `ClientScript` | Where in the page the script is rendered |
| [RegisterOnce](#prop-registeronce) | `True` `False` | `False` | When `True`, skip registration if the same `ScriptId` is already on the page |
| [Url](#prop-url) | URL | | Used only with `BlockType="ClientScriptInclude"` — the path to the external `.js` file |
| [If](#prop-if) | expression | | When set and the expression is false, the script is not registered _(since v5.0)_ |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Property Details

*   <span id="prop-scriptid">**ScriptId**</span>: A page-wide unique identifier. When `RegisterOnce="True"`, XMP checks whether a script with this ID has already been registered (by another `<xmod:ScriptBlock>`, another module, or DNN itself) and skips this block if so. Choose names specific enough to avoid collisions — `"AcmeXmpViewHelpers"` is safer than `"helpers"`.

*   <span id="prop-blocktype">**BlockType**</span>: Where the script lands in the rendered HTML.

    | Value | Location |
    |-------|----------|
    | `ClientScript` _(default)_ | Near the top of the page body |
    | `StartupScript` | Near the bottom of the page body — runs after most of the DOM is in place |
    | `HeadScript` | Inside the page's `<head>` |
    | `ClientScriptInclude` | Renders a `<script src="...">` reference to the file at `Url` |

*   <span id="prop-registeronce">**RegisterOnce**</span>: When `True`, the block is registered only if no other block with the same `ScriptId` is already on the page. Use this when the same view (or several views sharing a helper) might be rendered more than once on a single page.

    The setting matters for `BlockType="HeadScript"`: blocks are registered in the order they appear, the first block registered under a `ScriptId` wins, and later blocks with the same `ScriptId` are skipped. Without `RegisterOnce`, a second `HeadScript` block with the same `ScriptId` is written into the head again. For the other block types ASP.NET already keys each registration by `ScriptId`, so a duplicate is never emitted either way.

*   <span id="prop-url">**Url**</span>: When `BlockType="ClientScriptInclude"`, the path to the external `.js` file. Tilde (`~`) is supported for site-root-relative paths. Ignored for other block types.

    ```html
    <xmod:ScriptBlock ScriptId="AcmeUtils"
                      BlockType="ClientScriptInclude"
                      Url="~/scripts/acme-utils.js"
                      RegisterOnce="True" />
    ```

*   <span id="prop-if">**If**</span>: Decides whether the block is registered at all. Evaluated when the view renders, after tokens have been replaced. When the property is omitted, the block is always registered (the v4.x behavior). Otherwise:

    | `If` value | Result |
    |------------|--------|
    | empty | not registered |
    | `false` or `0` (any casing) | not registered |
    | a token mixed with other text (never resolves — see below) | not registered |
    | anything else | registered |

    `If` is a simple on/off switch: it does not compare values, so `=` or `<>` inside the value are just characters. That makes a bare field token the easiest "has a value" test — a URL with a query string counts as a value like any other:

    ```html
    <xmod:ScriptBlock ScriptId="VideoEmbed" BlockType="HeadScript" RegisterOnce="True" If='[[VideoUrl]]'>
      <link rel="preconnect" href="https://www.youtube.com" />
    </xmod:ScriptBlock>
    ```

    For a real comparison, use an [expression token](../tokens/expressions.md) that returns `true` or `false`:

    ```html
    <xmod:ScriptBlock ScriptId="MemberScripts" If="[[=If(${User:ID} > 0, 'true', 'false')]]">
      <script>console.log('member scripts loaded');</script>
    </xmod:ScriptBlock>
    ```

    ::: warning Do not mix a token with literal text
    `If="[[Status]] = Active"` never registers. ASP.NET only resolves a token when it is the whole attribute value, so the comparison never sees the field's value, and `<xmod:ScriptBlock>` treats the unresolved text as "off". Put the comparison inside the expression token instead: `If="[[=If(Status = 'Active', 'true', 'false')]]"`.
    :::

## Conditional Content in the Head

`<xmod:Select>`, `<xmod:IfEmpty>` and `<xmod:IfNotEmpty>` cannot wrap a `<xmod:ScriptBlock>` to decide whether it registers. Those controls choose what is *displayed*; a `<xmod:ScriptBlock>` registers its content earlier, before anything is displayed, and it does so in every branch whether the branch matches or not. With a different `ScriptId` in each branch, every block reaches the head. With the same `ScriptId` and `RegisterOnce="True"`, the first block in the file always wins, whatever the data says.

Put the condition on the block itself with `If`. A common case is a fallback chain — "use the first of these fields that has a value". Two ways to write it:

### One block per branch

Give the blocks the same `ScriptId`, set `RegisterOnce="True"`, list them from most to least preferred, and leave the last one without an `If`. Because the first block registered under a `ScriptId` wins, the first `If` that passes is the one that reaches the head:

```html
<xmod:ScriptBlock ScriptId="OgImage" BlockType="HeadScript" RegisterOnce="True" If='[[OpenGraphImage]]'>
  <meta property="og:image" content="[[OpenGraphImage]]" />
</xmod:ScriptBlock>

<xmod:ScriptBlock ScriptId="OgImage" BlockType="HeadScript" RegisterOnce="True" If='[[SocialImageUrl]]'>
  <meta property="og:image" content="[[SocialImageUrl]]?width=1200&height=630" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
</xmod:ScriptBlock>

<xmod:ScriptBlock ScriptId="OgImage" BlockType="HeadScript" RegisterOnce="True">
  <meta property="og:image" content="https://example.com/Portals/0/social-default.png" />
</xmod:ScriptBlock>
```

Each branch can emit different tags, as the `SocialImageUrl` branch does with its width and height. One `ScriptId` covers one decision — a second independent choice, such as `twitter:image`, gets its own `ScriptId` and its own chain.

### One block, one expression

When every branch emits the same tag and only the value differs, a single block with `Coalesce` is shorter:

```html
<xmod:ScriptBlock ScriptId="OgImage" BlockType="HeadScript" RegisterOnce="True">
  <meta property="og:image" content="[[=Coalesce(OpenGraphImage, If(SocialImageUrl, Concat(SocialImageUrl, '?width=1200&height=630')), 'https://example.com/Portals/0/social-default.png')]]" />
</xmod:ScriptBlock>
```

`Coalesce` skips both empty strings and NULLs, and the two-argument `If(SocialImageUrl, ...)` returns an empty string when the field is empty, so the chain falls through exactly as the per-branch version does.

::: tip
An HTML attribute that holds an expression token is written with single quotes in the rendered page (`content='...'`). Wrap text fields in `HtmlEncode(...)` there too; it encodes apostrophes as well as double quotes.
:::
