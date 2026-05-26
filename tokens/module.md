---
id: tokens-module
title: Module Tokens
category: Module Tokens
context: all
summary: Module tokens (`[[Module:property]]`) return information about the current XMP module instance — its ID and the page it's on.
keywords:
  - module
  - tokens
since: '1.0'
related:
  - tokens-page
  - tokens-portal
---

# Module Tokens

`[[Module:property]]` returns information about the current XMP module instance. Use it when you need a value that's unique per module — for example, when generating client-side element IDs that wouldn't conflict if the same view were rendered twice on the same page.

## Syntax

```
[[Module:property]]
```

## Properties

| Token | Returns |
|-------|---------|
| `[[Module:ID]]` | The numeric ModuleID assigned by DNN when the module was added to the page. Useful as a unique suffix for client-side IDs |
| `[[Module:TabId]]` | The DNN TabID of the page the module is on. Same value as `[[Page:ID]]` _(since v1.4)_ |

## Example

Use `[[Module:ID]]` to keep `<AddForm>`'s `ClientName` unique on pages that may host multiple instances of the same form:

```html
<AddForm ClientName='[[Join("ContactForm_{0}", [[Module:ID]])]]'>
  ...
</AddForm>
```

Embed the module ID in client-side script:

```html
<xmod:jQueryReady>
  $('#widget_[[Module:ID]]').show();
</xmod:jQueryReady>
```

See the [Tokens Overview](README.md#standard-token-rules) for the standard rules that apply to all tokens.
