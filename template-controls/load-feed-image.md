# `<xmod:LoadFeedImage>`

The LoadFeedImage tag makes it a cinch to dynamically load XMod Pro feeds into your page. This tag requires jQuery be included in the page. The LoadFeedImage tag will grab the feed data when the user clicks the button.

## Syntax
```html
<xmod:LoadFeedImage
  AlternateText="string"
  FeedName="string"
  Height="size"
  IDSelector="jQuery element selector"
  ImageUrl="string"
  InfinitePaging="True|False"
  InsertMode="Replace|Append|Prepend"
  LoadingCssClass="CSS Class Name(s)"
  LoadingImageUrl="url"
  Target="jQuery element selector"
  Width="size">

  [one or more optional Field tags can be used to pass data to the feed] 
  <Field Name="string" Value="string" />

</xmod:LoadFeedImage>
```

## Remarks

*   **AlternateText**: Use this attribute's value will be used as the image's "alt" text. The "alt" text is generally used by screen reader software used by visually impaired users to identify the content of an image. It may also be used by search engines.  

*   **FeedName**: The name you have given your feed on the Manage Feeds page. Note that you should set the feed's ContentType to "text/html" (see examples below).  

*   **IDSelector**: Used if InfinitePaging is True, this is a jQuery Selector that locates the element that contains the ID for each record. XMod Pro will look at the inner text of the element. If you don't want the ID to appear to be visible, we recommend inserting a `<span>` tag that has its display set to none like so:  
    ```html
    <table id="AuthorsTable">
      <tr>
        <td>[[FirstName]] [[LastName]]<span style="display:none;">[[AuthorID]]</span></td>
        <td>[[SalesRank]]</td>
      </tr>
    </table>
    ```
    In the above case, if you wanted to append new records to the end of the table, you would set your IDSelector like so:  
    `IDSelector="#AuthorsTable tr:last td:first span"`  

*   **InfinitePaging**: True or False. False by default. When set to true, XMod Pro will add jQuery and Javascript to the page enabling your button to trigger adding feed results to an existing list. For instance, you can display your initial results in a table and, when the button is clicked, the feeds results can be added to the existing table. You'll often see this behavior on mobile phones when viewing data from the web. At the bottom of a list of results you'll see a link like "Show 10 More...". Clicking that will add 10 more results to the list. Clicking the button again will add 10 more results the list, and so on. The LoadFeedButton makes the front end of this process pretty painless to implement. You'll just need to pair it with an XMod Pro feed that can return data in the format you expect. See the Example for details.  

*   **InsertMode**: Set to "Replace" by default. You can also set it to Append or Prepend. When set to replace, the feed's results will replace the content of the target element (see Target property). When set to Append, the results will be added to the end of the target. Likewise, when set to Prepend, it will insert the results before the target. Note, when using Append and Prepend, it is important your XMod Pro feed return results using HTML that works with your page. For instance, if you're Appending to an existing table, your feed should return table rows (`<tr>` tags).  

*   **LoadingCssClass**: One or more CSS class names (separated by a space) that will be applied to the HTML image tag used to display a "loading" status to the user. This property is ignored if no LoadingImageUrl has been specified.  

*   **LoadingImageUrl**: The path to the image you'd like to display as a "loading" status indicator to your users. Typically this will be an animated GIF or similar file. You may use the tilde (`~`) character as a short-hand for the site's root directory.  

*   **Target**: A jQuery selector identifying the element whose content will be replaced by the results of the feed.  

*   **Field Tags**: If you need to pass additional information to your feed, use the child Field tags. The Field's Name property should be the name of the parameter your feed is looking for and the Value of that Field will be the value you pass in for the parameter.  

## Example

This example shows two LoadFeedImage tags. They retrieve different feeds but place them in the same element on the page (the DIV with id of Content). When the "Show Top Authors" is clicked, the Content DIV will display the list of Top 20 authors. If you then click the "Show Top Crime Books" the contents of the DIV tag will be replaced with the top 20 crime books. The two feeds are shown after the template example.

```html {6-7,9-12}
<!-- Main Content DIV Feed Results Will Be Placed Here -->
<div id="Content"></div>


<!-- LOAD FEED TAGS -->
<xmod:LoadFeedImage AlternateText="Show Top Authors" ImageUrl="~/images/Top20.png" 
  FeedName="Top20Authors" Target="#Content" LoadingImageUrl="~/images/loading.gif" />

<xmod:LoadFeedImage AlternateText="Show Top Crime Books" ImageUrl="~/images/TopCrime.png" 
  FeedName="Top20CrimeBooks" Target="#Content"> 
  <Field Name="GenreId" Value="20" /> 
</xmod:LoadFeedImage> 
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

## Example - Infinite Paging

This example shows how you can setup "Infinite Paging". The idea behind infinite paging is that the user is presented with an initial list of, say, 10 results. If there are 100 total records, normally the user would page to the next set of 10 and keep paging to browse through the results. Infinite paging leverages the power of AJAX to present all those results on the same page. So, the user is presented with a button that, when clicked, will load the next set of 10 results and **add** them to the existing list. So, now the list contains a total of 20 results. If the button is pressed again, 10 more results will be added to the list for a total of 30 results. The two feeds are shown after the template example.

Infinite Paging will send your feed a parameter called "LastId" that you can use to determine the next set of values to return. However, Infinite Paging needs to you to tell it where it can get the LastId. You do this by setting the IDSelector property. This should be a jQuery selector that points to the element that contains that value. XMod Pro will grab the innerText of that element and use that as the LastId. In the example below, we're storing the Author's ID in a hidden SPAN tag. Since the last-retrieved record id is going to be in the last record we display, we'll find the LastId in the list item.

```html {14-16}
<xmod:Template>
  <ListDataSource CommandText="SELECT TOP 10 AuthorId, FirstName, LastName FROM Authors" />

  <HeaderTemplate>
    <ul id="AuthorsList">
  </HeaderTemplate>

  <ItemTemplate>
      <li>[[FirstName]] [[FirstName]]<span style="display:none;">[[AuthorId]]</span></li>
  </ItemTemplate>

  <FooterTemplate>
    </ul>
    <xmod:LoadFeedImage AlternateText="Show Next 10 Authors" ImageUrl="~/images/ShowMore.gif" 
      FeedName="Authors_Chunked" LoadingImageUrl="~/images/loading.gif" 
      Target="#AuthorsList" IDSelector="#AuthorsList li:last span" InsertMode="Append" />
  </FooterTemplate>
</xmod:Template>
```

### Example Feed -- Infinite Paging, Authors

This feed is designed to work with the template specified above. There are several important items to implement to ensure successful implementation of infinite paging.

1.  The feed must have its ContentType set to "text/html" since we're sending HTML back to the template.
2.  The ListDataSource should use the URL parameter called "LastId" to determine which record(s) to return.
3.  The ListDataSource is set to select the first 10 records that match the WHERE clause criteria. This allows you to return the next 10 records to the template. If your template was set to retrieve the next 20 records, the ListDataSource should SELECT TOP 20 ...
4.  The ListDataSource has a `<Parameter>` tag that grabs the URL parameter called "LastId" that is passed automatically by XMod Pro.
5.  Since we are injecting HTML into the template's page, we only need to render out the minimum HTML to add List Items to the unordered list. So, we don't have a HeaderTemplate or FooterTemplate - just an ItemTemplate matches the ItemTemplate in the `<xmod:Template>` tag above. This is important not only to maintain visual consistency but you must also be sure to include the `<span>` tag that contains the record's ID.

```html
<xmod:Feed ContentType="text/html">
  <ListDataSource CommandText="SELECT TOP 10 FirstName, LastName, AuthorId FROM Authors WHERE AuthorId > @LastId ORDER BY AuthorId ASC">
    <Parameter Name="LastId" Value='[[Url:LastId]]' />
  </ListDataSource>
  <ItemTemplate>
        <li>[[FirstName]] [[LastName]]<span style="display:none;">[[AuthorId]]</span></li>
  </ItemTemplate>
</xmod:Feed>
```