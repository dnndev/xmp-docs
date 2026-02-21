---
id: views
title: Views
category: Core Concepts
context: all
summary: >-
  What views are, how they display your data with HTML and field tokens, and how
  to create and manage them using the Explorer and Code Editor.
keywords:
  - views
  - templates
  - display data
  - areas
  - item template
  - detail template
---
# Views

A **view** is how you display data from your database on a DNN page. You write HTML, drop in [field tokens](tokens/field.md) where you want data values to appear, and XMod Pro fills in the rest. Every time a visitor loads the page, XMod Pro runs your data command, gets the records, and renders your HTML once for each record.

If you haven't read [How XMP Works](how-xmp-works.md), start there — it explains the view cycle and the role of data commands and tokens.

## Display Modes: List and Detail

Most views have two **display modes** that work together:

- **List mode** displays multiple records at once — a product catalog, a staff directory, a list of events. Each record is rendered using your `<ItemTemplate>`. You can optionally add an `<AlternatingItemTemplate>` to change the look or layout of every other record.
- **Detail mode** displays a single record in full — the complete product page, the staff member's profile. This uses your `<DetailTemplate>`.

When a visitor clicks a detail link in the list, XMod Pro swaps to detail mode for that record. A "Back" link returns them to the list. You control the HTML for both modes independently.

Not every view needs both modes. A simple list with no click-through can skip the detail template entirely.

::: tip Multiple View Areas
You can include more than one `<xmod:Template>` tag in a single view file, each with its own data source and layout. This lets you show side-by-side content — for example, a list of products on the left and a list of categories on the right — all within the same module.
:::

## Customizing the Layout

Views are just HTML with field tokens. You have full control over the structure, styling, and layout. XMod Pro also provides several optional template sections for fine-tuning your list display:

- **HeaderTemplate** — HTML rendered once at the top of the list (table headers, section titles)
- **ItemTemplate** — HTML rendered for each record (this is the main one)
- **AlternatingItemTemplate** — Optional alternate layout for even-numbered records (useful for striped rows)
- **FooterTemplate** — HTML rendered once at the bottom of the list
- **NoItemsTemplate** — HTML displayed when the data command returns no records (an "empty state" message)

Since the `<ItemTemplate>` repeats for every record, you only put the *repeating* portion of your HTML inside it. Any HTML structure that wraps the list — like a `<table>` tag or `<ul>` — gets split between the Header and Footer templates. For example, to display records in a table:

```html
<HeaderTemplate>
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
</FooterTemplate>
```

The `<HeaderTemplate>` opens the `<table>` and adds the header row, each `<ItemTemplate>` adds one data row, and the `<FooterTemplate>` closes the `<table>`. XMod Pro assembles them into a complete, valid HTML table at render time.

## Search, Sort, and Paging

XMod Pro has built-in support for search, sorting, and paging — you don't need to write any JavaScript or server-side code.

- **Paging** splits long lists into pages. Set `UsePaging="True"` on the `<xmod:Template>` tag and add a `<xmod:Pager>` control to your template.
- **Search and Sort** lets visitors filter and reorder the list. Use the `<xmod:SearchSort>` control to add a search box and sort dropdowns to your template.

## Security

Each view can control who is allowed to add, edit, and delete records using role-based security. You set these directly on the `<xmod:Template>` tag:

- `AddRoles` — who can see the "Add" button to create new records
- `EditRoles` — who can see the "Edit" button on each record
- `DeleteRoles` — who can see the "Delete" button on each record
- `DetailRoles` — who can view the detail area

These use your existing DNN security roles, so there's nothing extra to configure.

## Basic Syntax

Here's a minimal view showing a list of staff members with a detail view:

```html
<xmod:Template>
  <ListDataSource CommandText="SELECT * FROM Staff ORDER BY LastName" />
  <DetailDataSource CommandText="SELECT * FROM Staff WHERE StaffID = @StaffID">
    <Parameter Name="StaffID" Value='[[Url:sid]]' />
  </DetailDataSource>

  <ItemTemplate>
    <div class="staff-card">
      <h3>
        <xmod:DetailLink Text='[[FirstName]] [[LastName]]'>
          <Parameter Name="sid" Value='[[StaffID]]' />
        </xmod:DetailLink>
      </h3>
      <p>[[Department]] — [[Title]]</p>
    </div>
  </ItemTemplate>

  <DetailTemplate>
    <h2>[[FirstName]] [[LastName]]</h2>
    <p>[[Title]], [[Department]]</p>
    <p>[[Email]] | [[Phone]]</p>
    <xmod:ReturnLink Text="← Back to list" />
  </DetailTemplate>
</xmod:Template>
```

The `<ListDataSource>` tells XMod Pro which records to retrieve for the list. The `<DetailDataSource>` retrieves a single record when a visitor clicks through. The `<ItemTemplate>` and `<DetailTemplate>` define the HTML for each area.

::: info Tag Name vs. Concept
The XML tag is called `<xmod:Template>`, but in the XMod Pro UI you'll see these referred to as **views**. Same thing, different names — "view" describes what it does, "template" is the tag name in the code.
:::

## Next Steps

- **[View Controls Reference](template-controls/template.md)** — Full tag reference for `<xmod:Template>` and all available view controls
- **[Tutorial 1: Listing Users](tutorials/1_listing-users.md)** — Build your first view step by step
- **[Tutorial 2: User Detail View](tutorials/2_user-detail-view.md)** — Add a detail area to your view
- **[Forms](forms.md)** — Learn how to collect and save data
- **[Tokens Reference](tokens/field.md)** — All available token types
