---
id: template-include
title: 'xmod:Include'
category: Display Controls
context: template
summary: Inserts the raw contents of an external file into the template at the location of the tag. Useful for sharing common HTML across multiple views.
keywords:
  - include
  - template
since: '1.0'
related:
  - template-script-block
  - template-register
---

# `<xmod:Include>`

`<xmod:Include>` reads the file at `FileName` and writes its contents into the rendered output verbatim. Use it to share a common header, footer, or HTML fragment across multiple views — change the file once and every view that includes it picks up the change.

Unlike most XMP tags, `<xmod:Include>` doesn't have to live inside a `<xmod:Template>` — you can place it anywhere in the view file, including before or between templates. It is not data-bound.

::: tip Use sparingly
Each `<xmod:Include>` is a separate disk read every time the view renders. For most pages, one or two includes is fine. If you need the same fragment dozens of times in one view, consider duplicating the markup or moving it into a [`<xmod:ScriptBlock>`](script-block.md) (which has a `RegisterOnce` deduplication option).
:::

::: warning Trust the contents
The file is rendered verbatim — no escaping, no sanitization, no XMP processing of tags or tokens inside the file. Only include files whose contents you control.
:::

## Example

You might keep a site-wide header in `~/includes/CompanyHeader.html`:

```html
<h1>DNNDev.com</h1>
<p><em>Makers of Cool DNN Tools since 2004</em></p>
```

Reference it from any view:

```html {2}
<div>
  <xmod:Include FileName="~/includes/CompanyHeader.html" />

  <xmod:Template Id="Employees">
    <DetailDataSource CommandText="SELECT * FROM Employees WHERE EmployeeId = @EmpID">
      <Parameter Name="EmployeeId" Value="[[Url:eid]]" DataType="Int32" />
    </DetailDataSource>
    <DetailTemplate>
      <h1>[[FirstName]] [[LastName]]</h1>
      <div>[[Bio]]</div>
    </DetailTemplate>
  </xmod:Template>
</div>
```

If the company name changes, update `CompanyHeader.html` once and every view that includes it picks up the new value.

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [FileName](#prop-filename) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | path | | Path to the file whose contents should be included |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Property Details

*   <span id="prop-filename">**FileName**</span>: A path to a file on the web server. Use a tilde (`~`) prefix for paths relative to the site root, or an absolute virtual path. Examples:

    | Form | Example |
    |------|---------|
    | Tilde (site root) | `~/includes/CompanyHeader.html` |
    | Absolute virtual path | `/Portals/0/myfile.txt` |

    The file's contents are written into the response stream as-is. XMP tags and tokens inside the file are **not** processed.
