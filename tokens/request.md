---
id: tokens-request
title: Request Tokens
category: Request Tokens
context: all
summary: Request tokens give you access to data from the current HTTP request — `[[Request:property]]` for headers and request info, `[[Url:param]]` for query strings, `[[Form:param]]` for posted form data, and `[[Cookie:name]]` for cookies.
keywords:
  - request
  - url
  - form
  - cookie
  - tokens
since: '1.0'
related:
  - field
  - user
  - portal
---

# Request Tokens

Request tokens read values from the current HTTP request. There are four prefixes:

| Prefix | What it returns |
|--------|-----------------|
| `[[Request:property]]` | Server-known request info — referrer, URL, IP, browser |
| `[[Url:param]]` | A query-string parameter |
| `[[Form:param]]` | A POST body field |
| `[[Cookie:name]]` | A cookie value |

::: info Filtered for safety
DNN passes these values through its standard HTML/script/SQL filters before XMP sees them. They're safe to embed in markup, but **don't trust client-supplied data for authorization decisions** — IPs, user agents, and most headers can be forged.
:::

## `[[Request:property]]`

Server-side properties of the HTTP request itself.

| Token | Returns |
|-------|---------|
| `[[Request:URL]]` | The URL of the current page |
| `[[Request:Referrer]]` | The URL the user came from. Often empty |
| `[[Request:PageName]]` | Name of the current page (no extension) _(since v4.0)_ |
| `[[Request:HostName]]` | Reverse-DNS hostname of the client (often the same as the IP) |
| `[[Request:HostAddress]]` | Client IP address |
| `[[Request:Agent]]` | Raw `User-Agent` header |
| `[[Request:Browser]]` | DNN's parsed browser name from the User-Agent |
| `[[Request:Locale]]` | Active culture LCID — `en-US`, `fr-FR`, etc. _(since v2.1)_ |

## `[[Url:param]]`

The value of a query-string parameter. Replace `param` with the parameter name.

```
?id=42&q=widget
```

| Token | Returns |
|-------|---------|
| `[[Url:id]]` | `42` |
| `[[Url:q]]` | `widget` |
| `[[Url:missing]]` | _(empty string)_ |

## `[[Form:param]]`

The value of a posted form field (HTML POST form data, **not** XMP forms — those use [field tokens](field.md)). Replace `param` with the field's `name` attribute.

| Token | Returns |
|-------|---------|
| `[[Form:fieldName]]` | The posted value of the form field named `fieldName` |

## `[[Cookie:name]]`

The value of a browser cookie. Replace `name` with the cookie name. Returns an empty string when the cookie isn't set. _(Since v3.0)_

| Token | Returns |
|-------|---------|
| `[[Cookie:UserPrefs]]` | The value of the `UserPrefs` cookie |

## Example

```html
<xmod:Template>
  <HeaderTemplate>
    <h2>Request info</h2>
    <ul>
      <li>Current URL: [[Request:URL]]</li>
      <li>Referrer: [[Request:Referrer]]</li>
      <li>IP: [[Request:HostAddress]]</li>
      <li>URL parameter <code>id</code>: [[Url:id]]</li>
      <li>POST field <code>q</code>: [[Form:q]]</li>
      <li>Cookie <code>UserPrefs</code>: [[Cookie:UserPrefs]]</li>
    </ul>
  </HeaderTemplate>
  ...
</xmod:Template>
```

A common usage pattern is feeding `[[Url:id]]` into a `<DetailDataSource>` parameter so a detail view loads the record named in the URL:

```html
<DetailDataSource CommandText="SELECT * FROM Products WHERE ProductId = @id">
  <Parameter Name="id" Value="[[Url:id]]" DataType="Int32" />
</DetailDataSource>
```

See the [Tokens Overview](README.md#standard-token-rules) for the standard rules that apply to all tokens.
