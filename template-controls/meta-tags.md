---
id: template-meta-tags
title: 'xmod:MetaTags'
category: Display Controls
context: template
summary: Sets or appends to the host page's `<title>`, meta description, meta keywords, and meta robots tags. Useful for SEO on detail views.
keywords:
  - meta
  - tags
  - seo
  - template
since: '1.0'
related:
  - template
  - format
---

# `<xmod:MetaTags>`

`<xmod:MetaTags>` modifies the host page's metadata at render time — `<title>`, `<meta name="description">`, `<meta name="keywords">`, and `<meta name="robots">`. Each child tag (`<Title>`, `<Description>`, `<Keywords>`, `<Robots>`) either *replaces* the existing value or, when `Append="True"`, appends to it.

This is most useful on detail views, where you can plug record-specific text into the page title and description for SEO and shareability.

::: tip For meta tags to take effect
The page must already have the `<meta>` tag in place (DNN typically adds them based on Site Settings → Description / Keywords). `<xmod:MetaTags>` finds the existing tag by ID (`MetaKeywords`, `MetaDescription`, `MetaRobots`) and updates its content. If your skin or DNN version doesn't render the meta tag, the corresponding `<xmod:MetaTags>` child has no effect.
:::

## Example

```html {12-15}
<xmod:Template Id="Employees">
  <DetailDataSource CommandText="SELECT * FROM Employees WHERE EmployeeId = @EmpID">
    <Parameter Name="EmployeeId" Value="[[Url:eid]]" DataType="Int32" />
  </DetailDataSource>

  <DetailTemplate>
    <h1>Employee Profile</h1>
    <h3>[[FirstName]] [[LastName]]</h3>
    <h4>Biography</h4>
    <div>[[Bio]]</div>

    <xmod:MetaTags>
      <Title>Employee Profile for [[FirstName]] [[LastName]]</Title>
      <Keywords Append="True">[[FirstName]],[[LastName]]</Keywords>
    </xmod:MetaTags>
  </DetailTemplate>
</xmod:Template>
```

## Child Tags

`<xmod:MetaTags>` has no attributes of its own — it's a container for child tags that target specific page metadata.

| Tag | Targets | Description |
|-----|---------|-------------|
| [`<Title>`](#child-meta) | `<title>` element | Page title |
| [`<Description>`](#child-meta) | `<meta name="description">` | Description for search engines and social previews |
| [`<Keywords>`](#child-meta) | `<meta name="keywords">` | Keywords for search engines |
| [`<Robots>`](#child-meta) | `<meta name="robots">` | Robots directive (`index`, `noindex`, `follow`, `nofollow`, etc.) _(since v4.8)_ |
| [`<Redirect>`](#child-redirect) | `<meta http-equiv="refresh">` | Inserts a meta-refresh redirect _(since v4.3)_ |

### <span id="child-meta">`<Title>` / `<Description>` / `<Keywords>` / `<Robots>`</span>

Place the new metadata text between the opening and closing tags. Field tokens are evaluated at render time.

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| Append | `True` `False` | `False` | When `True`, the tag's content is appended to the existing page metadata instead of replacing it |

For `Keywords`, `Append="True"` adds a comma between the existing keywords and the appended ones if needed.

### <span id="child-redirect">`<Redirect>`</span>

Inserts a `<meta http-equiv="refresh">` tag, redirecting the browser to another URL after an optional delay.

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| Url | URL | | Destination URL |
| Delay | integer (seconds) | `0` | Seconds to wait before redirecting. `0` redirects immediately |
