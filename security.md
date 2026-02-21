---
id: security
title: Security
category: Core Concepts
context: all
summary: >-
  How XMod Pro's role-based security works — controlling who can view, add, edit,
  and delete data at the module and resource level.
keywords:
  - security
  - roles
  - permissions
  - access control
---
# Security

XMod Pro uses DNN's built-in security roles to control who can do what. You don't need to create a separate user system — you assign permissions using the same roles you already manage in DNN.

Security in XMod Pro works at three levels: who can manage XMod Pro itself, who can interact with data on your pages, and how XMod Pro protects against common web attacks.

::: danger Your Responsibility
XMod Pro provides security features and built-in protections, but it is ultimately a development tool — what you build with it determines how secure your site is. Misconfigured permissions, exposed data in public feeds, or custom SQL can introduce vulnerabilities that XMod Pro cannot prevent on your behalf. Always review your security settings, test with non-admin accounts, and follow web security best practices. KnowBetter Creative Services, LLC is not responsible for security issues resulting from how XMod Pro is configured or used.
:::

## Control Panel Access

The XMod Pro [Control Panel](control-panel.md) — where you create and manage views, forms, feeds, projects, and database tables — is restricted to **Host (SuperUser) accounts only**. Regular users, including DNN Administrators, cannot access it.

This is by design. The control panel can execute SQL commands and modify database structures, so access is limited to the most trusted accounts on your DNN installation.

## View Permissions

Each [view](views.md) can control who sees the Add, Edit, Delete, and Detail buttons using role attributes on the `<xmod:Template>` tag:

| Attribute | Controls |
|-----------|----------|
| `AddRoles` | Who can see the "Add New" button to create records |
| `EditRoles` | Who can see the "Edit" button on each record |
| `DeleteRoles` | Who can see the "Delete" button on each record |
| `DetailRoles` | Who can click through to the detail view of a record |

Set these to one or more DNN role names, separated by commas:

```html
<xmod:Template
    AddRoles="Administrators,Staff Editors"
    EditRoles="Administrators,Staff Editors"
    DeleteRoles="Administrators"
    DetailRoles="Registered Users">
  ...
</xmod:Template>
```

In this example, Administrators and Staff Editors can add and edit records, only Administrators can delete, and any Registered User can view details. Visitors who aren't in the specified roles simply don't see the corresponding buttons. The list view still renders, but only the actions the visitor has permission for are shown.

::: tip Host and Admin Always Have Access
DNN Host (SuperUser) and Administrator accounts always have full permissions, regardless of what roles you specify. You don't need to include them in your role lists.
:::

### Buttons Outside a View

Sometimes you'll place an Add button outside of a `<xmod:Template>` tag — for example, a single "Add New" button that sits above multiple view areas. Since this button isn't inside a template, the template's `AddRoles` attribute doesn't apply to it.

To control who can see these buttons, go to the XMod Pro configuration page's **Security tab** and select which roles are allowed to add records. This setting applies only to Add buttons placed outside of `<xmod:Template>` tags.

## Feed Permissions

[Feeds](feeds.md) are accessed by URL, which means they're **public by default**. Anyone who knows the URL can request the feed's data.

To restrict access, use the `ViewRoles` attribute:

```html
<xmod:Feed ViewRoles="Administrators,Staff Editors" ...>
  ...
</xmod:Feed>
```

`ViewRoles` works the same way on `<xmod:JsonFeed>`. When set, only logged-in users who belong to one of the listed roles (or are a Host/Admin) can access the feed. Everyone else gets no data.

::: warning Be Careful With Public Feeds
If you don't set `ViewRoles`, your feed is public. Make sure you're not exposing sensitive data — email addresses, internal IDs, or anything you wouldn't want a visitor to see. When in doubt, add `ViewRoles`.
:::

## Built-In Protections

XMod Pro includes several layers of protection against common web attacks. These work automatically — you don't need to configure them:

- **SQL injection protection** — Data commands use parameterized queries. Values from tokens, URL parameters, and form fields are passed as typed parameters, not concatenated into SQL strings. This protection applies when you use `<Parameter>` tags in your data sources. If you write raw SQL that concatenates user input directly into a `CommandText`, you bypass this protection — always use parameters.
- **Cross-site scripting (XSS)** — Input from URLs, form posts, and cookies is filtered to remove malicious markup and scripts.
- **Cross-site request forgery (CSRF)** — The control panel's API uses anti-forgery tokens to verify that requests originate from your site.

## Next Steps

- **[Views](views.md)** — Where role-based permissions are most commonly used
- **[Feeds](feeds.md)** — Controlling access to feed data
- **[Configuring XMod Pro](configuring-xmod-pro.md)** — Module-level settings including security defaults
