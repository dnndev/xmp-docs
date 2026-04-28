---
id: tutorials-7_multi-layout-views
title: '7: Multi-Layout Views'
category: Tutorials
context: all
summary: >-
  Most of what you'll do in XMod Pro is build solutions that add, edit, delete,
  and display data — but XMod Pro can do more than that. In this tutorial we'll
  show how a single view can contain multiple layouts that talk to each other,
  letting you build a master/detail interface where clicking an item on one side
  of the page updates content on the other side. We won't build a full sample
  application; instead we'll focus on the mechanism that makes multi-layout
  views work, assuming you're already comfortable creating views, forms, and
  basic add/edit/delete flows. Until now you've worked with views that contain a
  single `<xmod:Template>` tag. That tag handles a list mode and (optionally) a
  detail mode for one set of records. That's enough for most situations, but
  what if you want a list of news headlines on the left side of your module
  and, when a visitor clicks a headline, the full article appears on the right?
  All it takes is a second `<xmod:Template>` tag and a new button type — the
  command button.
keywords:
  - multi-layout
  - multiple layouts
  - command button
  - master detail
---
# Tutorial 7: <br>Multi-Layout Views

_Building a View With Multiple Layouts_

Most of what you'll do in XMod Pro is build solutions that add, edit, delete, and display data — but XMod Pro can do more than that. In this tutorial we'll show how a single view can contain multiple **layouts** that talk to each other, letting you build a master/detail interface where clicking an item on one side of the page updates content on the other side.

We won't build a full sample application here. Instead we'll focus on the mechanism that makes multi-layout views work, assuming you're already comfortable creating views, forms, and basic add/edit/delete flows. Those concepts are covered in earlier tutorials.

Until now, you've worked with views that contain a single `<xmod:Template>` tag. That tag handles a list mode and (optionally) a detail mode for one set of records. When the detail mode is shown, it replaces the list mode. That's enough for most situations, but what if you want a list of news headlines on the left side of your module and, when a visitor clicks a headline, the full article appears on the right? With most modules you'd be out of luck — but not with XMod Pro. All it takes is a second `<xmod:Template>` tag and a new button type.

## What's a "Layout"?

"Wait," you may be thinking, "I thought a view _was_ the template?" In v4 of XMod Pro the file and the tag both went by the name "template", which often led to confusion. In v5 we use clearer terms:

- A **view** is the file you create and manage in the Explorer.
- Inside a view you can place one or more `<xmod:Template>` tags. Each one is a self-contained **layout** — it has its own data source and its own markup.

Most views have just one layout. But a view can hold multiple layouts side by side, and XMod Pro is designed so that one layout can communicate with the others in the same view. Layout A can tell Layout B to display its list of records and Layout C to display a detail record. More importantly, Layout A can pass parameters along — telling Layout B and Layout C *which* data to display.

For our news-article example, we'll use two layouts:

- **Headlines** — displays a list of article headlines on the left.
- **Article** — displays the full text of one article on the right.

We'll use a simple two-column HTML table inside the view to position them. The Headlines layout goes in the left column and the Article layout goes in the right column. The basic idea looks like this:

<table>
  <tr>
    <td style="vertical-align: top;width:50%">
      Headlines (Layout A)<br />
      <a>Article One</a> by John Smith <br />
      <a>Article Two</a> by Adam Smith  <br />
      <a>Article Three</a> by Joanna Smith
    </td>
    <td style="vertical-align: top; width: 50%">
      Article (Layout B) <br />
      <strong>Article One</strong><br />
      by John Smith  <br />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non sem.
      Suspendisse adipiscing iaculis massa. Proin sodales. Maecenas ac risus non
      eros feugiat venenatis. Suspendisse odio magna, aliquam ut, tempus eget,
      varius ut, sapien. Quisque orci eros, venenatis et, gravida at,
      sagittis non, lacus.</p>
    </td>
  </tr>
</table>

The structure here is just plain HTML — a table with one row and two columns. How you choose to lay things out is up to you (CSS Grid, flexbox, or a plain table all work fine). Drop an `<xmod:Template>` tag in the left column and another in the right. The Headlines layout only knows how to render a list of headlines; the Article layout only knows how to render a single article.

## Connecting the Layouts: Command Buttons

Now we need a way for the Headlines layout to tell the Article layout *which* article to display. That's what the **command** button is for. Like most buttons in XMod Pro, the command button comes in three flavors: a push-button (`<xmod:CommandButton>`), a hyperlink (`<xmod:CommandLink>`), or a clickable image (`<xmod:CommandImage>`). In the mock-up above, the article titles would be `<xmod:CommandLink>` tags.

Here's the command link code:

```html
<xmod:CommandLink text='[[Headline]]'>
  <Command target="Article" type="Detail">
    <Parameter name="ArticleId" value='[[ArticleId]]'/>
  </Command>
</xmod:CommandLink>
```

The Command Link uses the article's Headline column for its display text. More importantly, it contains a `<Command>` tag, which has three things going on:

1. **target** — the ID of the layout we want to control. In this case, the Article layout.
2. **type** — which mode to switch the target into. We want it to show its detail mode, so we pass `Detail`.
3. **`<Parameter>`** — the value to pass to the target's `<DetailDataSource>`. The parameter's name (`ArticleId`) must match the parameter name in the target layout's data source.

When clicked, this link tells the Article layout to retrieve the article whose `ArticleId` matches the one belonging to the headline that was clicked.

## The Two Layouts in Code

Here are the important pieces of each layout. The HTML used for visual styling has been removed to keep the example focused.

```html
<xmod:Template id="Headlines">
  <ListDataSource CommandText="SELECT ArticleId,Headline FROM Articles" />

  <ItemTemplate>
    <xmod:CommandLink text='[[Headline]]'>
      <Command target="Article" type="Detail">
        <Parameter name="ArticleId" value='[[ArticleId]]' />
      </Command>
    </xmod:CommandLink>
    by [[Author]]<br />
  </ItemTemplate>
  ...
</xmod:Template>

<xmod:Template id="Article">
  <DetailDataSource CommandText="SELECT * FROM Articles WHERE Id=@ArticleId">
    <Parameter name="ArticleId" value="-1" />
  </DetailDataSource>
  ...
  <DetailTemplate>
    <strong>[[Headline]]</strong><br />
    by [[Author]]<br />
    <div>[[Article]]</div>
  </DetailTemplate>
</xmod:Template>
```

**Notes:**

* The Command Link's `<Command>` tag specifies `Article` as its target. This must match the `id` of the layout you want to control.
* The Command tag must specify whether it wants to execute the target's detail data source or list data source. Here, we want detail mode, so the `type` attribute is `Detail`.
* The `<Parameter>` child tag's name must match the parameter name in the target's data source (the `<DetailDataSource>` in our example).
* When the Command Link is clicked, XMod Pro looks for an `<xmod:Template>` with `id="Article"`. It then runs the Detail data source, passing along the value of `ArticleId`. The Article layout retrieves its data and renders its `<DetailTemplate>`.
* Notice that the `<Parameter>` tag inside `<DetailDataSource>` defaults to `-1`. This is a dummy value used when the page first loads — since article IDs in our table are positive numbers, `-1` ensures no record matches and the detail area starts empty until the user clicks a headline.

## The Full View

Here's the complete view, layout HTML included:

```html
<table>
  <tr>
    <td>
      <xmod:Template id="Headlines">
        <ListDataSource CommandText="SELECT ArticleId,Headline FROM Articles"/>
        <ItemTemplate>
          <xmod:CommandLink text='[[Headline]]'>
            <Command target="Article" type="Detail">
              <Parameter name="ArticleId" value='[[ArticleId]]' />
            </Command>
          </xmod:CommandLink>
          by [[Author]]<br />
        </ItemTemplate>
      </xmod:Template>
    </td>
  </tr>
  <tr>
    <td>
      <xmod:Template id="Article">
        <DetailDataSource CommandText="SELECT * FROM Articles WHERE Id=@ArticleId">
          <Parameter name="ArticleId" value="-1" />
        </DetailDataSource>
        <DetailTemplate>
          <strong>[[Headline]]</strong><br />
          by [[Author]]<br />
          <div>[[Article]]</div>
        </DetailTemplate>
      </xmod:Template>
    </td>
  </tr>
</table>
```
