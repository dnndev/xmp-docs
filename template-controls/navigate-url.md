---
id: template-navigate-url
title: 'xmod:NavigateUrl'
category: Navigation
context: template
summary: Renders a URL using DNN's `NavigateUrl()` API — friendly URLs go through your site's URL provider and respect the site's URL rewriting rules.
keywords:
  - navigate
  - url
  - friendly
  - template
since: '4.6'
related:
  - template-redirect
---

# `<xmod:NavigateUrl>`

`<xmod:NavigateUrl>` calls DNN's `NavigateUrl()` API and writes the resulting URL into the rendered output. Going through DNN means the result honors the site's friendly-URL provider, language, and URL rewriting rules — typing the URL by hand wouldn't.

Most commonly, you'll embed the tag inside an HTML attribute (e.g. `href`) to produce a link to a specific page with parameters.

## Example

Render a friendly URL to page 237 with an `eid` parameter pulled from the current row:

```html {4}
<xmod:Template Id="Employees">
  <ListDataSource CommandText="SELECT * FROM Employees" />
  <ItemTemplate>
    [[FirstName]] [[LastName]]<br />
    <a href="<xmod:NavigateUrl TabId='237'><Parameter Name='eid' Value='[[Id]]' /></xmod:NavigateUrl>">View Work History</a>
  </ItemTemplate>
</xmod:Template>
```

When DNN's friendly-URL provider is in use, the rendered URL looks like `/work-history/eid/42` rather than `/Default.aspx?TabId=237&eid=42`.

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [TabId](#prop-tabid) | integer | (current page) | The DNN page (tab) ID to link to. When omitted, the URL points to the current page |
| [ControlKey](#prop-controlkey) | string | | Optional control key — useful when linking to a specific module action page |

## Child Tags

| Tag | Required | Description |
|-----|----------|-------------|
| [`<Parameter>`](#child-parameter) | optional | One URL parameter. Add as many as needed |

### <span id="child-parameter">`<Parameter>`</span>

Each `<Parameter>` adds one query-string-style parameter to the generated URL. Values are URL-encoded automatically. All values are passed as text (no `DataType`).

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| Name <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Parameter name |
| Value | string \| token | | Parameter value |

## Property Details

*   <span id="prop-tabid">**TabId**</span>: The DNN-assigned page ID. "Tab" is the legacy DNN term for what users now call a page. To find a page's TabId, hover the page in DNN's page management UI or look at its URL when editing. Omit this property to generate a URL for the current page.

*   <span id="prop-controlkey">**ControlKey**</span>: Used to load a specific module action — for example, `Edit` to open a module's edit screen. Rarely needed in view markup. Requires `TabId` to be set.
