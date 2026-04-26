---
id: tokens-portal
title: Portal Tokens
category: Portal Tokens
context: all
summary: Portal tokens (`[[Portal:property]]`) return settings of the current DNN portal — name, ID, contact email, home directory, and more.
keywords:
  - portal
  - tokens
since: '1.0'
related:
  - user
  - module
  - page
---

# Portal Tokens

`[[Portal:property]]` returns a setting of the current DNN portal. Use it to drop the site's name, contact email, or logo into your views and forms, or to pass the portal ID into SQL when you have multiple portals sharing tables.

## Syntax

```
[[Portal:property]]
```

## Properties

| Token | Returns |
|-------|---------|
| `[[Portal:ID]]` | Numeric DNN PortalID for the current portal |
| `[[Portal:Name]]` | The portal's display name |
| `[[Portal:Description]]` | The portal's description from Site Settings _(since v1.4)_ |
| `[[Portal:Email]]` | The portal's primary contact email |
| `[[Portal:Alias]]` | The active domain alias for the portal _(since v1.4)_ |
| `[[Portal:LogoFile]]` | Filename of the portal logo |
| `[[Portal:HomeDirectory]]` | Web-relative path to the portal's home directory |
| `[[Portal:HomeDirectoryMapped]]` | File-system path to the portal's home directory |
| `[[Portal:HomeTabId]]` | Page (TabID) of the portal's home page |
| `[[Portal:LoginTabId]]` | Page (TabID) of the portal's custom login page _(since v1.4)_ |
| `[[Portal:Expiry]]` | Portal expiration date. Returns `12:00:00 AM` when no expiration is set _(since v1.4)_ |
| `[[Portal:TimeZoneOffset]]` | Offset from GMT in minutes. May be positive or negative _(since v1.4)_ |

## Example

```html
<xmod:Template>
  <HeaderTemplate>
    <h1>Welcome to [[Portal:Name]]</h1>
    <p>Questions? <a href="mailto:[[Portal:Email]]">Contact us</a>.</p>
    <img src="[[Portal:HomeDirectory]][[Portal:LogoFile]]" alt="[[Portal:Name]]" />
  </HeaderTemplate>
  <ListDataSource CommandText="SELECT * FROM Articles WHERE PortalId = @pid">
    <Parameter Name="pid" Value="[[Portal:ID]]" DataType="Int32" />
  </ListDataSource>
  ...
</xmod:Template>
```

See the [Tokens Overview](README.md#standard-token-rules) for the standard rules that apply to all tokens.
