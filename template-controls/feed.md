---
id: template-feed
title: 'xmod:Feed'
category: Feed Controls
context: template
summary: >-
  The Feed tag, first introduced in version 3.0, is used to define the output of
  feeds. A feed typically is thought of as an RSS feed, but it can be much more
  than that.
keywords:
  - feed
  - template
---
# `<xmod:Feed>`

The Feed tag, first introduced in version 3.0, is used to define the output of feeds. A feed typically is thought of as an RSS feed, but it can be much more than that. With the Feed tag, you can produce virtually any XML-based output, a printer-friendly HTML page, a plain text page, even a comma-delimited file that can be automatically opened by Excel or a similar program.

## Creating A Feed

Creating a feed is a two-step process:

1.  Create your feed on the Manage Feeds page in the Control Panel. The Feed is very similar to XMod Pro's Template tag and is created in a similar fashion. You begin by clicking the "New Feed" button. On the dialog which pops-up, choose the type of feed you want to create, select a data source, and click the dialog's "New Feed" button to create it. From there, you can edit your feed in the editor.  

    The Feed Tag is defined much the same way as the Template tag. You define your data source in the ListDataSource tag. You use the Header, ItemTemplate, AlternatingItemTemplate, and Footer tags to format the display of your data.  

    ::: tip FORMATTING TIP
    If you are creating a CSV (comma-separated values) file or a file with similar plain text formatting, you will probably need to pay attention to the spacing of the tags in your feed. Unlike HTML, extra whitespace and linefeeds will show up in a plain text file.  
    :::

2.  Call your feed. You can get an example of how to call your feed by clicking the "How To Call Your Feed" link on the Manage Feeds page. Basically, you link to it like you would any other page. You'll call XMod Pro's "Feed.aspx" page and pass it a few required parameters and any additional parameters your data source may need to retrieve the data.  

    Use a URL in the form of:  
    **http://_sitename_/DesktopModules/XModPro/Feed.aspx?xfd=_FeedName_&pid=_PortalId_**  

    Where _sitename_ is your site's domain, _FeedName_ is the name of the feed as listed in the grid, and _PortalId_ is the numeric ID of the portal for which the feed is created.  

::: danger SECURITY NOTE
It's important to note that feeds, by their nature, are typically intended to be public. No special security measures are implemented by default. So you should be careful about what data you make available through a feed. Beginning with version 4.0, you can use the `ViewRoles` attribute to restrict visibility to logged-in users in a set of DNN security roles. An alternative approach would be to create and pass a token to the feed. This token would then be checked by your data source (most likely a stored procedure) to determine its validity, returning the data only if it's valid.
:::

## Syntax
```html
<xmod:Feed 
    Doctype="string" 
    ContentType="string" 
    ConnectionString="string"
       Encoding="utf7|utf8|utf16|utf32|ascii" 
    Filename="string"
    ViewRoles="role1,role2,role3" >

    <ListDataSource CommandText="string" ConnectionString="string" /> 

    <HeaderTemplate>...</HeaderTemplate> 
    <ItemTemplate>...</ItemTemplate> 
    <AlternatingItemTemplate>...</AlternatingItemTemplate>
    <SeparatorTemplate>...</SeparatorTemplate> 
    <FooterTemplate>...</FooterTemplate> 

</xmod:Feed>
```

## Remarks

*   **Doctype:** (Optional) This property allows you to specify the DOCTYPE for the resulting page. Consumers of the feed may use the DOCTYPE to determine how to render the feed.  

*   **ContentType**: Defaults to `text/html`. Helps the feed consumer determine the nature of the content. This is often referred to as MIME types. Other examples are: `text/plain`, `text/xml`, `text/javascript`, `application/vnd.ms-excel`, etc.

*   **ConnectionString**: If you need to specify a SQL Server database other than the current DotNetNuke database, you can supply a connection string here. When specified, it serves as the default connection string for the `ListDataSource` and `DetailDataSource`. You can also use a connection string defined in the web.config file. To do so, use the ConnectionString token like so:

    ```html
    <xmod:Feed ... ConnectionString='[[ConnectionString:_connectionName_]]' ...>
    ```

*   **Encoding**: (Optional) New to version 4.5.0. This property enables alternative content encoding and can be set to `utf7`, `utf8`, `utf16`, `utf32`, or `ASCII`. Default value is `utf8`.  

*   **Filename**: (Optional) This property can be set to give the browser a filename for downloading purposes. It's a great way to provide your users with an export file. For example, by giving your feed a file name of "MyFile.csv" and setting the ContentType to "application/vnd.ms-excel" you can have the file opened by Microsoft Excel (assuming Excel is installed on the user's machine).  

*   **Data Sources**: The data for each feed is a SQL command. This could be a SQL `SELECT` command or a stored procedure. Supply the SQL command as the CommandText attribute. For stored procedures, use `EXEC _sprocName_`. Note that Bit columns are returned as `True`/`False` - not `1`/`0`. The data source for a feed is defined in the `<ListDataSource>` tag.  

*   In addition to its attributes, the Feed tag also contains numerous child tags which define most of the tag's functionality:

    *   **ListDataSource**: Provides the data for the template when it is displaying in list view. It accepts `<Parameter>` tags to pass parameters as part of the command. The "alias" attribute is optional and is used to avoid conflicts or to accept a parameter with a specific name (the "name" attribute) but use a different parameter name in the command (the "alias" attribute). If no "alias" is specified, the "name" will be used.

        Examples:

        #1
        ```html
        <ListDataSource CommandText="SELECT FirstName, LastName FROM Users" />
        ```

        #2
        ```html
        <ListDataSource CommandText="SELECT FirstName, LastName FROM Users 
                                     WHERE ZipCode = @zip">
          <Parameter Name="zip" Alias="zip" Value="12345" />
        </ListDataSource>
        ```

        #3
        ```html
        <ListDataSource CommandText="EXEC GetUsers @zip">
          <Parameter Name="zip" Alias="zip" Value="12345" />
        </ListDataSource>
        ```

        You can optionally specify a **ConnectionString** for this data source. If none is specified, the default connection will be used - either the connection specified by the ConnectionString property of the parent `<xmod:Feed>` tag or the current DotNetNuke database if the tag doesn't define a connection. As with the template tag, you can use the `[[ConnectionString:connectionName]]` token to use a connection defined in the web.config file.  

    *   **HeaderTemplate**: When displaying a list view, HTML, text, and controls that will be rendered once, at the beginning of the list. This template is optional.  

*   **ItemTemplate**: When displaying a list view, HTML, text, field tokens, and controls that will be rendered for each record in the result set. If the AlternatingItemTemplate is supplied, then the ItemTemplate will be used for all odd-numbered records.  

*   **AlternatingItemTemplate**: When displaying a list view, HTML, text, field tokens, and controls that will be rendered for the even-numbered records in the result set. This template is optional.  

*   **SeparatorTemplate**: When displaying a list view, this will render any HTML or text that you specify between each record. One good example is if you're creating a list of comma-separated records (we'll use numbers for simplicity). If you put your comma in the ItemTemplate, you would get a trailing comma like this: `1,2,3,` but if you put your comma in the SeparatorTemplate, you won't get that trailing comma: `1,2,3`. (Added in version 1.4)  

*   **FooterTemplate**: When displaying a list view, HTML, text, and controls that will be rendered once, at the end of the list. This template is optional.  

*   **Field Tokens**: In order to display data from your data source, XMod Pro uses "field tokens". These are essentially placeholders that contain the name of the column or field in your data source. At run-time, these tokens are replaced with the value from the record. Field Tokens are written in this form: `[[FieldName]]` "FieldName" is the name of the field or column in your data source. It must be surrounded by `[[` and `]]` You can use the Field Token in many places. However, when you use it as the attribute value for an XMod Pro tag or other third party control, you must delimit the attribute value with single quotes, rather than double quotes. For example, when used in the `<Parameter>` tag, the attribute is written as: `Value='[[UserID]'` rather than: `Value="[[UserID]]"`. When using a Field Token with HTML tag attributes, this is not necessary.  

*   **ViewRoles**: New to version 4.0. Takes a comma-delimited list of DNN security roles. If the user is logged in and is a member of one of the roles, or is a Host/SuperUser or Admin, the user will be able to see the feed. If the user is not logged-in or is not in one of the roles, he or she will not be able to see the feed. If ViewRoles is empty or is not specified, all users will be able to see the feed.  

## Example
```html
<xmod:Feed ContentType="application/vnd.ms-excel" Filename="test.csv">
  <ListDataSource CommandText="SELECT [AuthorId], [FirstName], [LastName], [GenreId] FROM Authors" />
  <HeaderTemplate>Author Id,First Name,Last Name,Genre Id</HeaderTemplate>
  <ItemTemplate>[[AuthorId]],[[FirstName]],[[LastName]],[[GenreId]]</ItemTemplate>
</xmod:Feed>
```

