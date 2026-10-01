---
id: form-script-block
title: ScriptBlock
category: Scripting
context: form
summary: Injects a `<script>` block (or external script file) into one of several locations in the rendered page. Includes deduplication via `ScriptId` and conditional registration via `If`.
keywords:
  - script
  - block
  - form
since: '1.0'
related:
  - form-jquery-ready
  - form-include
---

# `<ScriptBlock>`

`<ScriptBlock>` registers a JavaScript block (or an external script file) with the hosting page so it ends up in the head, body-top, or body-bottom of the rendered HTML. The block is identified by `ScriptId`, which lets the same script appear in multiple forms or views without rendering twice when `RegisterOnce="True"`.

The actual `<script>` tag goes between the opening and closing `<ScriptBlock>` tags — wrap it in a CDATA section if your script contains characters that confuse the XML parser. With `BlockType="HeadScript"` the block can carry `<style>`, `<link>` and `<meta>` tags as well.

The content is plain markup plus tokens; field, system and [expression tokens](../tokens/expressions.md) are replaced before the block is registered. Do not place other XMP controls inside a `<ScriptBlock>` — the block only registers the markup before the first nested control and drops the rest without an error. Use an expression token for anything computed, such as `[[=Format(DueDate, 'yyyy-MM-dd')]]`.

## Example

```html {2-14}
<AddForm>
  <ScriptBlock ScriptId="AlertScripts" RegisterOnce="True">
    <script type="text/javascript">
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
  </ScriptBlock>
  <table>
    <tr>
      <td>
        <a href="#" onclick="helloWorld();">Hello World</a><br />
        <a href="#" onclick="goodbyeWorld();">Goodbye</a><br />
        <a href="#" onclick="showMessage('Hello and Goodbye');">Show Message</a>
      </td>
    </tr>
  </table>
</AddForm>
```

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

*   <span id="prop-scriptid">**ScriptId**</span>: A page-wide unique identifier. When `RegisterOnce="True"`, XMP checks whether a script with this ID has already been registered (by another `<ScriptBlock>`, another module, or DNN itself) and skips this block if so. Choose names specific enough to avoid collisions — `"AcmeXmpFormHelpers"` is safer than `"helpers"`.

*   <span id="prop-blocktype">**BlockType**</span>: Where the script lands in the rendered HTML.

    | Value | Location |
    |-------|----------|
    | `ClientScript` _(default)_ | Near the top of the page body |
    | `StartupScript` | Near the bottom of the page body — runs after most of the DOM is in place |
    | `HeadScript` | Inside the page's `<head>` |
    | `ClientScriptInclude` | Renders a `<script src="...">` reference to the file at `Url` |

*   <span id="prop-registeronce">**RegisterOnce**</span>: When `True`, the block is registered only if no other block with the same `ScriptId` is already on the page. Use this when the same form (or several forms sharing a helper) might be rendered more than once on a single page.

    The setting matters for `BlockType="HeadScript"`: blocks are registered in the order they appear, the first block registered under a `ScriptId` wins, and later blocks with the same `ScriptId` are skipped. Without `RegisterOnce`, a second `HeadScript` block with the same `ScriptId` is written into the head again. For the other block types ASP.NET already keys each registration by `ScriptId`, so a duplicate is never emitted either way.

*   <span id="prop-url">**Url**</span>: When `BlockType="ClientScriptInclude"`, the path to the external `.js` file. Tilde (`~`) is supported for site-root-relative paths. Ignored for other block types.

    ```html
    <ScriptBlock ScriptId="AcmeUtils"
                 BlockType="ClientScriptInclude"
                 Url="~/scripts/acme-utils.js"
                 RegisterOnce="True" />
    ```

*   <span id="prop-if">**If**</span>: Decides whether the block is registered at all. Evaluated when the form renders, after tokens have been replaced. When the property is omitted, the block is always registered (the v4.x behavior). Otherwise:

    | `If` value | Result |
    |------------|--------|
    | empty | not registered |
    | `false` or `0` (any casing) | not registered |
    | a token mixed with other text (never resolves — see below) | not registered |
    | anything else | registered |

    `If` is a simple on/off switch: it does not compare values, so `=` or `<>` inside the value are just characters. A bare field token is the easiest "has a value" test (`If='[[ReturnUrl]]'`); for a real comparison, use an [expression token](../tokens/expressions.md) that returns `true` or `false`:

    ```html
    <ScriptBlock ScriptId="MemberScripts" If="[[=If(${User:ID} > 0, 'true', 'false')]]">
      <script>console.log('member scripts loaded');</script>
    </ScriptBlock>
    ```

    ::: warning Do not mix a token with literal text
    `If="[[Status]] = Active"` never registers. ASP.NET only resolves a token when it is the whole attribute value, so the comparison never sees the field's value, and `<ScriptBlock>` treats the unresolved text as "off". Put the comparison inside the expression token instead: `If="[[=If(Status = 'Active', 'true', 'false')]]"`. This differs from form actions such as `<Redirect If>` and `<Email SendIf>`, which do accept `[[Field]] = value` because their tokens are replaced as text when the form is submitted.
    :::

    For head tags that depend on data — a fallback chain of `<meta>` tags, for example — see [Conditional Content in the Head](../template-controls/script-block.md#conditional-content-in-the-head) on the view-side control. The same patterns apply to a form's `<ScriptBlock>`.
