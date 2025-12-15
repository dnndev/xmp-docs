---
id: template-load-feed
title: 'xmod:LoadFeed'
category: Feed Controls
context: template
summary: >-
  The LoadFeed tag makes it a cinch to dynamically load XMod Pro feeds into your
  page. This tag requires jQuery be included in the page. The LoadFeed tag will
  grab the feed data when the page is loaded.
keywords:
  - load
  - feed
  - template
---
# `<xmod:LoadFeed>`

The LoadFeed tag makes it a cinch to dynamically load XMod Pro feeds into your page. This tag requires jQuery be included in the page. The LoadFeed tag will grab the feed data when the page is loaded. Depending on the complexity of your page, it is possible the HTML element which will house the results may not be rendered yet. It is good practice to place the load feed tags after the HTML elements in the page if this is an issue.To allow the user to trigger the loading of a feed see: [`<xmod:LoadFeedButton>`](load-feed-button.md), [`<xmod:LoadFeedImage>`](load-feed-image.md), and [`<xmod:LoadFeedLink>`](load-feed-link.md).

## Syntax
```html
<xmod:LoadFeed
  FeedName="string"
  LoadingCssClass="CSS Class Name(s)"
  LoadingImageUrl="url"
  Target="jQuery element selector">
  
  [one or more optional Field tags can be used to pass data to the feed] 
  <Field Name="string" Value="string" />

</xmod:LoadFeed>
```

## Remarks

*   **FeedName**: The name you have given your feed on the Manage Feeds page. Note that you should set the feed's ContentType to "text/html" (see examples below).  

*   **LoadingCssClass**: One or more CSS class names (separated by a space) that will be applied to the HTML image tag used to display a "loading" status to the user. This property is ignored if no LoadingImageUrl has been specified.  

*   **LoadingImageUrl**: The path to the image you'd like to display as a "loading" status indicator to your users. Typically this will be an animated GIF or similar file. You may use the tilde (`~`) character as a short-hand for the site's root directory.  

*   **Target**: A jQuery selector identifying the element whose content will be replaced by the results of the feed.  

*   **Field Tags**: If you need to pass additional information to your feed, use the child Field tags. The Field's Name property should be the name of the parameter your feed is looking for and the Value of that Field will be the value you pass in for the parameter.  

## Example

This example shows that you don't even need `<xmod:Template>` tags in your template. The LoadFeed tags will load their date when the page is loaded. It creates to LoadFeed tags at the top of the template and points them to two DIV tags where the results of the feeds will be placed. The two feeds are shown after the template example.

```html {8,9-11} 
<!-- TOP AUTHORS -->  
<div id="TopAuthors"></div>  

<!-- TOP CRIME BOOKS" -->  
<div id="TopCrime"></div>`  

<!-- LOAD FEED TAGS -->  
<xmod:LoadFeed FeedName="Top20Authors" Target="#TopAuthors" LoadingImageUrl="~/images/loading.gif" />  
<xmod:LoadFeed FeedName="Top20CrimeBooks" Target="#TopCrime">  
  <Field Name="GenreId" Value="20" />  
</xmod:LoadFeed>  
```

### Example Feeds -- Top20Authors
```html
<xmod:Feed ContentType="text/html">
  <ListDataSource CommandText="SELECT FirstName, LastName, AuthorId, SalesRank FROM Authors WHERE SalesRank <= 20" />
  <HeaderTemplate>
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
  </HeaderTemplate>
  <ItemTemplate>
        <tr>
          <td>[[SalesRank]]</td>
          <td>[[FirstName]] [[LastName]]</td>
        </tr>
  </ItemTemplate>
  <FooterTemplate>
      </tbody>
    </table>
  </FooterTemplate>
</xmod:Feed>
```

### Example Feeds -- Top20CrimeBooks
```html
<xmod:Feed ContentType="text/html">
  <ListDataSource CommandText="SELECT Title, SalesRank FROM Books WHERE GenereId = @GenreId">
    <Parameter Name="GenreId" Value='[[Url:GenreId]]' />
  </ListDataSource>
  <HeaderTemplate>
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
  </HeaderTemplate>
  <ItemTemplate>
        <tr>
          <td>[[SalesRank]]</td>
          <td>[[Title]]</td>
        </tr>
  </ItemTemplate>
  <FooterTemplate>
      </tbody>
    </table>
  </FooterTemplate>
</xmod:Feed>
```
