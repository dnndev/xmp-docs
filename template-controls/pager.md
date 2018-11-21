# `<Pager>`

The Pager tag can only be used within a Template or DataList tag. The tag defines how the pagers in the view will look and function. The Pager attributes provide the information necessary to define how the components of the top and bottom pagers will look while the inner content of the Pager allows you to use HTML to determine how the components are arranged. If no inner content is specified, the default layout will be used. If no tag is specified, the pagers will not be shown.

::: tip
Need SEO-Friendly Paging? As of version 4.5, you can set the Type property of the Pager to "Hyperlink" and the pager will use standard hyperlinks which can be crawled more easily by search engines.
:::

NOTE: To turn off paging for the view, use the **UsePaging** attribute of the [`<xmod:Template>`](template.md) or [`<xmod:DataList>`](data-list.md) tag.

## Syntax
```html
<xmod:Template|DataList ...> 
  ... 
  <Pager 
    CurrentPageCssClass="string" 
    FirstLastCssClass="string|CommandButton"
    FirstPageCaption="string|First"
    FirstPageCssClass="string"
    LastPageCaption="string|Last"
    LastPageCssClass="string"
    MaxPageNumButtons="integer|5"
    NextPageCaption="string|Next"
    NextPageCssClass="string"
    PageNumCssClass="string|CommandButton"
    PageSize="integer|10"
    PrevNextCssClass="string|CommandButton"
    PrevPageCssClass="string"
    PrevPageCaption="string|Prev"
    ScrollToTop="True|False" 
    ShowBottomPager="True|False"
    ShowFirstLast="True|False"
    ShowPrevNext="True|False"
    ShowTopPager="True|False" 
    Type="string">

      ...Display Template (see Remarks)...
  
  </Pager>
  ...
</xmod:Template|DataList>
```


## Remarks

*   **CurrentPageCssClass**: The Cascading Style Sheet (CSS) class name to associate with the Current Page navigation link.  

*   **FirstLastCssClass**: The Cascading Style Sheet (CSS) class name to associate with the First Page and Last Page navigation links. The default value is `CommandButton`.  

*   **FirstPageCaption**: The text to use for the First Page navigation link, when it is visible. The default value is `First`.  

*   **FirstPageCssClass**: The Cascading Style Sheet (CSS) class name to associate with the First Page navigation link.  

*   **LastPageCaption**: The text to use for the Last Page navigation link, when it is visible. The default value is `Last`.  

*   **LastPageCssClass**: The Cascading Style Sheet (CSS) class name to associate with the Last Page navigation link.  

*   **MaxPageNumButtons:** Determines the maximum number of page link buttons which will be displayed. Page number buttons enable the user to navigate to a specific page by clicking on them. They appear between the Previous and Next navigation buttons. The default value is `5`.  

*   **NextPageCaption**: The text to use for the Next Page navigation link, when it is visible. The default value is `Next`.  

*   **NextPageCssClass**: The Cascading Style Sheet (CSS) class name to associate with the Next Page navigation link.  

*   **PageNumCssClass**: The Cascading Style Sheet (CSS) class name to associate with the page number link buttons. The default value is `CommandButton`.  

*   **PageParameterName**: Sets the URL parameter name that will be used to pass the page number. This is optional and only used if the Pager Type is set to Hyperlink. This defaults to `pg`. (New to version 4.5).  

*   **PageSize**: Determines the maximum number of records to display on each page. The default value is `10`.  

*   **PrevNextCssClass**: The Cascading Style Sheet (CSS) class name to associate with the Previous Page and Next Page navigation links. The default value is `CommandButton`.  

*   **PrevPageCaption**: The text to use for the Previous Page navigation link, when it is visible. The default value is `Prev`.  

*   **PrevPageCssClass**: The Cascading Style Sheet (CSS) class name to associate with the Previous Page navigation link.  

*   **ScrollToTop**: A true/false value which is set to true by default. When true, if the user clicks a link in the Bottom Pager, the page, when it is reloaded, will scroll to the top of the page. This is helpful if you have a long list of items and the user has scrolled down before clicking the Next page (or any pager) link. The default DNN action would maintain his/her position on the new page, which is not what the user would expect. By setting ScrollToTop to true, you can take the user back to the top of the page. NOTE: If the user clicks a link in the Top Pager, the page will not scroll to the top - even if this property is true. Instead, it will maintain the user's current position. (new to version 4.0).  

*   **SearchValueParameterName**: Sets the URL parameter name that will be used to pass search phrase the user has entered. This is optional and only used if the Pager Type is set to Hyperlink. This defaults to `sv`. (New to version 4.5).  

*   **ShowBottomPager**: A true/false value which determines if the Top paging control will be visible. This optional attribute is True by default. If both ShowBottomPager and ShowTopPager are set to False, no paging controls will be shown but the results will still be paged. In other words, only the first page of results will be shown without any visible mechanism to navigate to other pages. (Added in version 1.2).  

*   **ShowFirstLast**: A true/false value which determines if the First Page and Last Page navigation links should be used. The default value is False.  

*   **ShowPrevNext**: A true/false value which determines if the Previous Page and Next Page navigation links should be used. The default value is True.  

*   **ShowTopPager**: A true/false value which determines if the Bottom paging control will be visible. This optional attribute is True by default. If both ShowBottomPager and ShowTopPager are set to False, no paging controls will be shown but the results will still be paged. In other words, only the first page of results will be shown without any visible mechanism to navigate to other pages.  
    (Added in version 1.2).  

*   **SortColumnParameterName**: Sets the URL parameter name that will be used to pass the name of the column to sort on. This is optional and only used if the Pager Type is set to Hyperlink. This defaults to "sc". (New to version 4.5).  

*   **SortOrderParameterName**: Sets the URL parameter name that will be used to pass the chosen sort order. This is optional and only used if the Pager Type is set to Hyperlink. This defaults to "so". (New to version 4.5.  

*   **Type**: Set the `<Pager Type="Hyperlink" />` and it will use it, passing the page, search, and sort information via the URL. Note that each click on the pager is a brand new request of the server just like any HTML hyperlink. So other modules on the page may lose their state. This pager should be used if your priority is crawlable results.  

*   **Display Template**: Within the `<Pager> </Pager>` tags, you can use HTML and special pager tokens to arrange and style the components of the pager. See the Example for one possibility. Below are the tokens you can use:
    *   **{PageNumber}**: Will be replaced with the current page number.
    *   **{PageCount}**: Will be replaced with the total number of pages.
    *   **{Pager}**: Will be replaced with the navigation links (First, Previous, Next, Last, and the page number links)

## Example
```html
<xmod:Template ...> 
    ... 
    <Pager PageSize="15" PageNumCssClass="CommandButton" 
      FirstPageCaption="[First]" LastPageCaption="[Last]">
      <table>
        <tr>
          <td>Page <strong>{PageNumber}</strong> of {PageCount}</td>
          <td align="right">{Pager}</td>
        </tr>
      </table>
    </Pager>
    ... 
</xmod:Template>
```
