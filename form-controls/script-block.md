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

The actual `<script>` tag goes between the opening and closing `<ScriptBlock>` tags — wrap it in a CDATA section if your script contains characters that confuse the XML parser.

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

*   <span id="prop-registeronce">**RegisterOnce**</span>: When `True`, the script is registered only if no other script with the same `ScriptId` is already on the page. Use this when the same form (or several forms sharing a helper) might be rendered more than once on a single page. `RegisterOnce` applies to `ClientScript`, `StartupScript`, and `ClientScriptInclude` block types.

*   <span id="prop-url">**Url**</span>: When `BlockType="ClientScriptInclude"`, the path to the external `.js` file. Tilde (`~`) is supported for site-root-relative paths. Ignored for other block types.

    ```html
    <ScriptBlock ScriptId="AcmeUtils"
                 BlockType="ClientScriptInclude"
                 Url="~/scripts/acme-utils.js"
                 RegisterOnce="True" />
    ```

*   <span id="prop-if">**If**</span>: A simple equality expression evaluated when the form renders. When the expression is false (or resolves to `false` or `0`), the script is not registered. When the property is omitted, the script is always registered (the v4.x behavior). Use `=` for equality and `<>` for inequality.

    ```html
    <ScriptBlock ScriptId="DebugHelpers" If="[[User:IsHost]] = True">
      <script>console.log('XMP debug helpers loaded');</script>
    </ScriptBlock>
    ```
