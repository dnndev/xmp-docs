---
id: feeds
title: Feeds
category: Core Concepts
context: all
summary: >-
  What feeds are, supported output formats (JSON, RSS, CSV, HTML, and more), and
  how to create and manage them for AJAX data or external consumption.
keywords:
  - feeds
  - JSON
  - RSS
  - CSV
  - AJAX
  - data feeds
---
# Feeds

A **feed** retrieves data from your database and returns it in a specific format — JSON, RSS, CSV, HTML, or virtually any text-based format you need. Unlike a [view](views.md), which renders HTML directly on the page, a feed produces output that's consumed by other code or applications.

You probably won't need feeds while you're getting started, but they become an important part of more complex solutions you'll build later.

## What Feeds Do

Feeds have two primary uses:

**Supplying data to your pages via AJAX.** This is the most common use. A feed returns JSON data that JavaScript on your page can use to update content without a full page reload. For example:
- Populating a dropdown's options based on another field's selection (cascading dropdowns)
- Loading additional records when a visitor clicks "Load More"
- Refreshing a section of the page with updated data

**Making data available externally.** A feed URL can be called by anything that can make an HTTP request — other websites, mobile apps, integrations, or even a spreadsheet application. You can produce RSS feeds for news readers, CSV files for Excel, or JSON for a mobile app.

## Output Formats

A feed can produce any text-based format. You control the output by setting the `ContentType` attribute and writing the appropriate markup in your templates. Some common examples:

| Format | ContentType | Typical use |
|--------|-------------|-------------|
| JSON | `application/json` | AJAX requests, APIs |
| RSS/XML | `text/xml` | News readers, syndication |
| CSV | `application/vnd.ms-excel` | Spreadsheet downloads |
| HTML | `text/html` | Printer-friendly pages, embeddable content |
| Plain text | `text/plain` | Simple data exports |

You can also set a `Filename` attribute so the browser treats the feed as a downloadable file — for example, `Filename="staff-export.csv"` prompts the visitor to save a CSV file.

## Calling a Feed

Every feed has a URL you use to request its data:

```
https://yoursite.com/DesktopModules/XModPro/Feed.aspx?xfd=MyFeedName&pid=0
```

Replace `MyFeedName` with the name of your feed as it appears in the Explorer, and `0` with your site's Portal ID (found in DNN under **Settings > Site Info**).

You can pass additional parameters in the URL, and your feed's data command can use them to filter results. For example, adding `&dept=3` and referencing `@dept` in your SQL lets you return only records for a specific department.

::: warning Security
Feeds are accessible by URL, which means they're public by default. Be careful about what data you expose. Use the `ViewRoles` attribute to restrict access to specific DNN security roles when needed.
:::

## Syntax Examples

### JSON

Since JSON is by far the most common feed format, XMod Pro provides a dedicated `<xmod:JsonFeed>` tag that handles the formatting automatically. You just supply a data source — XMod Pro sets the content type, escapes values, and uses your column names as JSON property names:

```html
<xmod:JsonFeed>
  <ListDataSource CommandText="SELECT DepartmentID, DepartmentName
                               FROM Departments
                               ORDER BY DepartmentName" />
</xmod:JsonFeed>
```

That's it. XMod Pro returns a JSON array like this:

```json
[
  { "DepartmentID": 1, "DepartmentName": "Engineering" },
  { "DepartmentID": 2, "DepartmentName": "Marketing" }
]
```

You can filter results using URL parameters. Calling this feed with `&dept=3` returns only staff in that department:

```html
<xmod:JsonFeed>
  <ListDataSource CommandText="SELECT StaffID, FirstName, LastName
                               FROM Staff
                               WHERE DepartmentID = @dept
                               ORDER BY LastName">
    <Parameter Name="dept" Value='[[Url:dept]]' />
  </ListDataSource>
</xmod:JsonFeed>
```

The `<Parameter>` tag maps the `dept` URL parameter to the `@dept` placeholder in the SQL command. This is how you build feeds that respond to input — the same pattern used for cascading dropdowns and filtered AJAX requests.

### CSV: Downloadable Spreadsheet

For non-JSON formats, use the `<xmod:Feed>` tag. It gives you full control over the output with template sections — similar to how views use templates to render HTML.

Here's a feed that produces a CSV file. Setting `ContentType` to `application/vnd.ms-excel` and adding a `Filename` tells the browser to download it as a spreadsheet:

```html
<xmod:Feed ContentType="application/vnd.ms-excel" Filename="staff-export.csv">
  <ListDataSource CommandText="SELECT FirstName, LastName, Email, Department
                               FROM Staff
                               ORDER BY LastName" />
  <HeaderTemplate>First Name,Last Name,Email,Department</HeaderTemplate>
  <ItemTemplate>[[FirstName]],[[LastName]],[[Email]],[[Department]]</ItemTemplate>
</xmod:Feed>
```

The `<HeaderTemplate>` provides the column headers and the `<ItemTemplate>` repeats for each record. Note there's no `<SeparatorTemplate>` — each item template starts on a new line by default, which is exactly what CSV needs.

::: tip Formatting Tip
With plain-text formats like CSV, whitespace matters. Extra spaces or blank lines inside your template tags will appear in the output. Keep your tags tightly formatted.
:::

### HTML: Printer-Friendly Pages

You can also produce standalone HTML pages — useful for print-friendly views or embeddable content:

```html
<xmod:Feed ContentType="text/html">
  <ListDataSource CommandText="SELECT FirstName, LastName, Department
                               FROM Staff
                               ORDER BY Department, LastName" />
  <HeaderTemplate>
    <html>
    <head><title>Staff Directory</title></head>
    <body>
    <h1>Staff Directory</h1>
    <table>
      <tr><th>Name</th><th>Department</th></tr>
  </HeaderTemplate>

  <ItemTemplate>
      <tr>
        <td>[[FirstName]] [[LastName]]</td>
        <td>[[Department]]</td>
      </tr>
  </ItemTemplate>

  <FooterTemplate>
    </table>
    </body>
    </html>
  </FooterTemplate>
</xmod:Feed>
```

This produces a complete HTML page with its own markup — separate from your DNN site's theme. The same Header/Item/Footer pattern applies: the header opens the structure, items repeat, and the footer closes it.

## Next Steps

- **[JsonFeed Tag Reference](template-controls/json-feed.md)** — Full reference for `<xmod:JsonFeed>`
- **[Feed Tag Reference](template-controls/feed.md)** — Full reference for `<xmod:Feed>` (RSS, CSV, HTML, and custom formats)
- **[Views](views.md)** — Displaying data on the page
- **[Forms](forms.md)** — Collecting data from visitors
