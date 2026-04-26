---
id: tokens-user
title: User Tokens
category: User Tokens
context: all
summary: User tokens (`[[User:property]]`) return information about the currently logged-in user — ID, name, email, and any DNN profile property.
keywords:
  - user
  - tokens
since: '1.0'
related:
  - portal
  - module
  - request
---

# User Tokens

`[[User:property]]` returns a property of the user who is currently viewing the page. Use it to personalize content, prefill form fields, or pass the user's ID into a SQL parameter.

When no one is logged in, the user is the DNN anonymous user and most properties return empty strings.

## Syntax

```
[[User:property]]
```

`property` is one of the built-in properties below or the name of any DNN profile property defined for the portal.

## Built-in properties

| Token | Returns |
|-------|---------|
| `[[User:ID]]` | The numeric DNN UserID. Useful for SQL parameters that filter by user |
| `[[User:Username]]` | The user's username |
| `[[User:DisplayName]]` | The user's display name (e.g. "Kelly Ford") |
| `[[User:FirstName]]` | The user's first name |
| `[[User:LastName]]` | The user's last name |
| `[[User:Email]]` | The user's email address |

## DNN profile properties

Any standard or custom DNN profile property is accessible by name:

| Token | Returns |
|-------|---------|
| `[[User:Telephone]]` | Phone number from profile |
| `[[User:Street]]` | Street address |
| `[[User:City]]` | City |
| `[[User:Region]]` | State / region |
| `[[User:PostalCode]]` | ZIP / postal code |
| `[[User:Country]]` | Country |
| `[[User:Cell]]` | Cell phone |
| `[[User:Fax]]` | Fax |
| _Custom properties_ | Use the property's name as defined in DNN's Site Settings → User Profile |

## Example

```html
<xmod:Template>
  <HeaderTemplate>
    <h1>Welcome, [[User:DisplayName]]!</h1>
    <a href="mailto:[[User:Email]]">Send yourself an email</a>
  </HeaderTemplate>
  <ListDataSource CommandText="SELECT * FROM Posts WHERE AuthorID = @uid">
    <Parameter Name="uid" Value="[[User:ID]]" DataType="Int32" />
  </ListDataSource>
  <ItemTemplate>
    <p>[[Title]]</p>
  </ItemTemplate>
</xmod:Template>
```

See the [Tokens Overview](README.md#standard-token-rules) for the standard rules that apply to all tokens.
