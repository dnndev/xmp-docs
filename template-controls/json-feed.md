# <xmod:JsonFeed>

<a name="top"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

The JsonFeed tag, first introduced in version 4.3, is used to easily generate JSON output from your data. JSON is the lingua franca of client-server communication these days and many Javascript and jQuery plugins natively consume it. You could create a JSON feed using the standard feed tag, but the JsonFeed tag saves you a lot of typing. There may still be times when you want to use special layouts or formatting in your feed that you'll want to use the Feed tag, but in most situations, the JsonFeed is all you need.

## Creating A Feed

Creating a feed is a two-step process:

1.  Create your feed on the Manage Feeds page in the Control Panel. The Feed is very similar to XMod Pro's Template tag and is created in a similar fashion. You begin by clicking the "New Feed" button. On the dialog which pops-up, choose the type of feed you want to create, select a data source, and click the dialog's "New Feed" button to create it. From there, you can edit your feed in the editor.  

    The JsonFeed tag is VERY simple. All you need to do is specify the <xmod:JsonFeed> tag and a <ListDataSource>. That's it. Seriously. XMod Pro will do the extra work of setting your content type to application/json, and formatting the data that comes from the ListDataSource so that the values are properly escaped and formatted for JSON. It will also take the column names from your ListDataSource and use those as the property names in your JSON object.  

    For Example:  

    <xmod:JsonFeed>  
      <ListDataSource CommandText="SELECT FirstName, LastName FROM vw_Users" />  
    </xmod:JsonFeed>  

    XMod Pro will create a Javascript Array and add an object for each record returned. For the above, the returned result may look something like this:  

    [ { "FirstName" : "John", "LastName" : "Smith"},  
       { "FirstName" : "Suzy", "LastName", "Harris" },  
       { "FirstName" : "Sinead", "Conner" } ]  

2.  Call your feed. You can get an example of how to call your feed by clicking the "How To Call Your Feed" link on the Manage Feeds page. Basically, you link to it like you would any other page. You'll call XMod Pro's "Feed.aspx" page and pass it a few required parameters and any additional parameters your data source may need to retrieve the data.  

    Use a URL in the form of:  
    **http://_sitename_/DesktopModules/XModPro/Feed.aspx?xfd=_FeedName_&pid=_PortalId_**  

    Where _sitename_ is your site's domain, _FeedName_ is the name of the feed as listed in the grid, and _PortalId_ is the numeric ID of the portal for which the feed is created.  

## A Note About Security

It's important to note that feeds, by their nature, are typically intended to be public. No special security measures have been implemented for securing the feed. So you should be careful about what data you make available through a feed. One way you could make your feed more secure is by creating and passing a token to the feed. This token would then be checked by your data source (most likely a stored procedure) to determine its validity, returning the data only if it's valid.

<a name="syntax"></a>

## Syntax

<div xmlns="">`<xmod:JsonFeed`  
`    Doctype="_string_"`  
`    ContentType="_string_"`  
`    ConnectionString="_string_"`  
`    Filename="_string_"`</div>

<div xmlns="">`   ViewRoles="role1,role2,role3">  

``    <ListDataSource CommandText="_string_" ConnectionString="_string_"/>`  

`</xmod:JsonFeed>`</div>


## Remarks

*   **Data Sources**: The data for each feed is a SQL command. This could be a SQL `SELECT` command or a stored procedure. Supply the SQL command as the CommandText attribute. For stored procedures, use `EXEC _sprocName_`. Note that Bit columns are returned as True/False - not 1/0\. The data source for a feed is defined in the `<ListDataSource>` tag.
*   **ContentType**: Defaults to "text/html". Helps the feed consumer determine the nature of the content. This is often referred to as MIME types. Other examples are: "text/plain", "text/xml", "text/javascript", "application/vnd.ms-excel", etc.

*   **ConnectionString**: If you need to specify a SQL Server database other than the current DotNetNuke database, you can supply a connection string here. When specified, it serves as the default connection string for the ListDataSource and DetailDataSource. You can also use a connection string defined in the web.config file. To do so, use the ConnectionString token like so:

    <pre xml:space="preserve" xmlns="http://www.w3.org/1999/xhtml"><xmod:JsonFeed ... ConnectionString='[[ConnectionString:_connectionName_]]' ...></pre>

*   **Doctype:** (Optional) This property allows you to specify the DOCTYPE for the resulting page. Consumers of the feed may use the DOCTYPE to determine how to render the feed.  

*   In addition to its attributes, the Feed tag also contains numerous child tags which define most of the tag's functionality:
    *   **ListDataSource**: Provides the data for the feed when it is rendering. It accepts <Parameter> tags to pass parameters as part of the command. The "alias" attribute is optional and is used to avoid conflicts or to accept a parameter with a specific name (the "name" attribute) but use a different parameter name in the command (the "alias" attribute). If no "alias" is specified, the "name" will be used.

        Examples:

        <pre xml:space="preserve">#1
        <ListDataSource CommandText="SELECT FirstName, LastName FROM Users" /></pre>

        <pre xml:space="preserve" xmlns="http://www.w3.org/1999/xhtml">#2
        <ListDataSource CommandText="SELECT FirstName, LastName FROM Users 
                                     WHERE ZipCode = @zip">
          <Parameter Name="zip" Value='[[Url:zip]]' />
        </ListDataSource></pre>

        <pre xml:space="preserve" xmlns="http://www.w3.org/1999/xhtml">#3
        <ListDataSource CommandText="EXEC GetUsers @zip">
          <Parameter Name="zip" Value="12345" />
        </ListDataSource></pre>

        You can optionally specify a **ConnectionString** for this data source. If none is specified, the default connection will be used he current DotNetNuke database if the tag doesn't define a connection. As with the template tag, you can use the `[[ConnectionString:connectionName]]` token to use a connection defined in the web.config file.  

*   **Filename**: (Optional) This property can be set to give the browser a filename for downloading purposes. It's a great way to provide your users with an export file. For example, by giving your feed a file name of "MyFile.csv" and setting the ContentType to "application/vnd.ms-excel" you can have the file opened by Microsoft Excel (assuming Excel is installed on the user's machine).  

*   **ViewRoles**: Takes a comma-delimited list of DNN security roles. If the user is logged in and is a member of one of the roles, or is a Host/SuperUser or Admin, the user will be able to see the feed. If the user is not logged-in or is not in one of the roles, he or she will not be able to see the feed. If ViewRoles is empty or is not specified, all users will be able to see the feed.  

## Example

<div xmlns="">

<pre xml:space="preserve" xmlns="http://www.w3.org/1999/xhtml"><xmod:JsonFeed></pre>

<pre xml:space="preserve" xmlns="http://www.w3.org/1999/xhtml"><ListDataSource CommandText="SELECT [AuthorId], [FirstName], [LastName], [GenreId] FROM Authors WHERE 
GenreId = @gid">
  <Parameter Name="gid" Value='[[Url:genre]]' DataType="Int32" DefaultValue="-1" />
</ListDataSource></pre>

<pre xml:space="preserve" xmlns="http://www.w3.org/1999/xhtml"></xmod:JsonFeed></pre>

</div>

