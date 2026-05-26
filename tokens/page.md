---
id: tokens-page
title: Page Tokens
category: Page Tokens
context: all
summary: Page tokens (`[[Page:property]]`) return information about the DNN page that hosts the module — its ID, name, and title.
keywords:
  - page
  - tokens
since: '4.3'
related:
  - tokens-module
  - tokens-portal
---

# Page Tokens

`[[Page:property]]` returns information about the DNN page (a "tab" in DNN's API) that hosts the XMP module. Use these tokens to embed the page ID in client-side IDs, link to the same page with parameters, or display the page title.

## Syntax

```
[[Page:property]]
```

## Properties

| Token | Returns |
|-------|---------|
| `[[Page:ID]]` | The DNN TabID of the current page. Equivalent to `[[Module:TabId]]` |
| `[[Page:Name]]` | The page name as set in DNN |
| `[[Page:Title]]` | The page title (from DNN's page settings) |

All three properties were added in v4.3.

## Example

```html
<xmod:Template>
  <HeaderTemplate>
    <h1>[[Page:Title]]</h1>
  </HeaderTemplate>
  ...
</xmod:Template>

<AddForm ClientName='[[Join("MyForm_{0}", [[Page:ID]])]]'>
  ...
</AddForm>
```

See the [Tokens Overview](README.md#standard-token-rules) for the standard rules that apply to all tokens.
