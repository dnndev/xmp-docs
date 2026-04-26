---
id: tokens-overview
title: Tokens Overview
category: Tokens
context: all
summary: Tokens are placeholders in your views, forms, and feeds that XMod Pro replaces with real values at run time — field values, user info, URL parameters, formatted dates, computed expressions, and more.
keywords:
  - tokens
  - overview
since: '1.0'
---

# Tokens

Tokens are placeholders that XMod Pro replaces with real values at run time. Every token starts with `[[` and ends with `]]`. The text in between determines what the token resolves to:

```html
[[FirstName]]                      <!-- a field value from the current row     -->
[[User:DisplayName]]               <!-- a property of the current user         -->
[[Url:id]]                         <!-- a query-string parameter               -->
[[DateAdd:7,d,yyyy-MM-dd]]         <!-- a calculated date                      -->
[[Join("Hi, {0}!", [[FirstName]])]] <!-- a formatted string                    -->
[[=Price * 1.06]]                  <!-- an arithmetic expression (v5+)         -->
```

## Token reference

| Page | Format | What it returns |
|------|--------|-----------------|
| [Field Tokens](field.md) | `[[fieldName]]` | A column value from the current row |
| [Data Parameter Tokens](data.md) | `[[TemplateID_list@param]]` | A SQL parameter value (typical use: OUTPUT parameters) |
| [User Tokens](user.md) | `[[User:property]]` | A property of the currently logged-in user |
| [Portal Tokens](portal.md) | `[[Portal:property]]` | A setting from the current DNN portal |
| [Page Tokens](page.md) | `[[Page:property]]` | A property of the current DNN page |
| [Module Tokens](module.md) | `[[Module:property]]` | A property of the current XMod Pro module instance |
| [Request Tokens](request.md) | `[[Request:property]]`, `[[Url:param]]`, `[[Form:param]]`, `[[Cookie:name]]` | HTTP request data — query string, post body, cookies, headers |
| [Function Tokens](functions.md) | `[[Join(...)]]`, `[[Localize:key]]` | Run a function — string formatting, localization |
| [DateAdd Token](dateadd.md) | `[[DateAdd:n,unit,format]]` | A date relative to today |
| [Expression Tokens](expressions.md) <Badge type="info" text="v5.0" /> | `[[=...]]` | An arithmetic, string, or conditional expression |

## Standard token rules

These rules apply to all tokens.

### Anywhere — HTML and plain text

Tokens work as HTML attribute values or as bare text:

```html
<img src="[[ImageUrl]]" alt="[[Caption]]" />
<p>Welcome, [[User:FirstName]]!</p>
```

### Inside an XMP tag attribute — use single quotes

When a token appears inside the attribute of an XMP tag (`<xmod:DetailButton>`, `<xmod:CommandButton>`, `<TextBox>`, etc.), wrap the attribute value in **single quotes** instead of double quotes — the brackets in `[[...]]` confuse the XML parser otherwise.

```html
<!-- ✓ Correct -->
<xmod:DetailButton Text='[[FirstName]]' />

<!-- ✗ Wrong — fails to parse -->
<xmod:DetailButton Text="[[FirstName]]" />
```

### Where each token can be used

| Token type | List view | Detail view | Header / Footer / NoItems | Form attributes | Form body |
|-----------|-----------|-------------|---------------------------|-----------------|-----------|
| Field tokens (template) | ✓ | ✓ | ✗ — no current row | n/a | n/a |
| Field tokens (form) | n/a | n/a | n/a | ✓ — bound to `<SelectCommand>` | ✓ |
| User / Portal / Page / Module / Request | ✓ | ✓ | ✓ | ✓ | ✓ |
| DateAdd / Function tokens | ✓ | ✓ | ✓ | ✓ | ✓ |
| Data parameter tokens | ✓ | ✓ | ✓ | ✗ template-only | ✗ template-only |
| Expression tokens (v5+) | ✓ | ✓ | ✓ | ✓ | ✓ |

### Tokens are not case-sensitive on the prefix

`[[User:Email]]`, `[[user:Email]]`, and `[[USER:Email]]` all work. The key part (after the colon) is case-sensitive when it refers to a field column or DNN profile property.
