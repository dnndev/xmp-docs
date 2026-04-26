---
id: form-include
title: Include
category: Layout
context: form
summary: Inserts the raw contents of an external file into the form at the location of the tag. Useful for sharing common HTML across multiple forms.
keywords:
  - include
  - form
since: '1.0'
related:
  - script-block
---

# `<Include>`

`<Include>` reads the file at `FileName` and writes its raw contents into the form's output stream. Use it to share a common header, footer, disclaimer, or HTML block across multiple forms — change the file once and every form that includes it picks up the change.

::: tip Use sparingly
Each `<Include>` is a separate disk read every time the form renders. For most forms, one or two includes is fine. If you find yourself including the same fragment dozens of times in a single form, consider duplicating the markup or extracting it to a [`<ScriptBlock>`](script-block.md) (which has a `RegisterOnce` deduplication option).
:::

::: warning Trust the contents
The file is rendered verbatim — no escaping or sanitization. Only include files whose contents you control.
:::

## Example

You might keep a site-wide header in `~/includes/CompanyHeader.html`:

```html
<h1>DNNDev.com</h1>
<p><em>Makers of Cool DNN Tools since 2004</em></p>
```

Reference it from any form:

```html {2}
<AddForm>
  <Include FileName="~/includes/CompanyHeader.html" />
  <table>
    <tr>
      <td>
        <Label For="txtFirstName" Text="First Name" />
        <TextBox Id="txtFirstName" DataField="FirstName" DataType="String" />
      </td>
    </tr>
    ...
    <tr>
      <td colspan="2"><AddButton Text="Add" /> <CancelButton Text="Cancel" /></td>
    </tr>
  </table>
</AddForm>
```

If the company name changes, update `CompanyHeader.html` once and every form that includes it picks up the new value.

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

    The contents are written verbatim — there is no processing of XMP tags, tokens, or markup inside the included file.
