# <xmod:DataList>

<a name="top"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

The DataList tag, like the Template tag, is a View control that is used for displaying and interacting with records from your datasource. It is used in essentially the same manner as the Template tag and can be used together with the Template tag within your templates. Like the Template tag, it contains the data commands and layout instructions for your display and enables you to specify who is allowed to add, edit, and delete records as well as who is allowed to view the details of records. The primary difference between the DataList and Template is that the DataList allows you to layout your records in a grid pattern.

<pre xml:space="preserve" xmlns="">Record1 Record2 Record3  
Record4 Record5 Record6  
Record7 Record8
----- OR ----
Record1 Record4 Record7
Record2 Record5 Record8
Record3 Record6</pre>

This type of layout is handy for scenarios like displaying a list of images or products where you want to control the specific number of columns and the order in which they're displayed.

You can use multiple DataList tags, enabling you to have side-by-side (or however you want to lay them out using HTML) displays within the same module instance, each being fed by different datasources.

<a name="syntax"></a>

## Syntax

<div xmlns="">`<xmod:DataList`  
`    AddRoles="DNNRoleName1,DNNRoleName2"`  
`    Ajax="True|False"  
`    ConnectionString="_string_"  
    DeleteRoles="DNNRoleName1;DNNRoleName2"`  
`    DetailRoles="DNNRoleName1;DNNRoleName2"  
`    EditRoles="DNNRoleName1;DNNRoleName2"``  
    ID="_string_"  
    RepeatColumns="_integer_"  
    RepeatDirection="Horizontal|Vertical"  
    RepeatLayout="Table|Flow"  
    UsePaging="**True**|False">`  

`    <ListDataSource CommandText="string"  
        ConnectionString="_string_"/>`  
`    <DetailDataSource CommandText="string"  
        ConnectionString="_string_"/>  

    <DeleteCommand CommandText="string" />`  

`[<Pager>](temp_pager.html) ... </Pager>  
[<SearchSort>](temp_searchsort.html)...</SearchSort>`  

`    <HeaderTemplate>...</HeaderTemplate>`  
`    <ItemTemplate>...</ItemTemplate>`  
`    <AlternatingItemTemplate>...</AlternatingItemTemplate>  
    <SeparatorTemplate>...</SeparatorTemplate>`  
`    <FooterTemplate>...</FooterTemplate>`  

`    <DetailTemplate>...</DetailTemplate>  

    <NoItemsTemplate>...</NoItemsTemplate>`  
`</xmod:DataList>`</div>

<a name="remarks"></a>

## Remarks

*   **AddRoles/EditRoles/DeleteRoles/DetailRoles:** Each of these properties are lists of DNN role names, separated by commas. Host/SuperUser and Admin accounts always have add/update/delete/detail permissions. By default, anyone who has access to view the module also has detail viewing permissions. Supply the DetailRoles attribute to limit who can view the details of records within the DataList. Users other than Host/Admin must be explicitly granted add/update/delete rights. Prior to version 4.0, role names were separated by semi-colons. To enhance consistency with other areas of XMod Pro, commas are now used. For backwards compatibility, you can still use semi-colons, but their usage is deprecated as of version 4.0\. You should use commas going forward.  

    **NOTE**: These permissions apply ONLY to controls _within_ the <xmod:DataList> tag. If you have an <xmod:AddButton>, and <xmod:AddLink>, or <xmod:AddImage> tag placed _outside_ of the <xmod:DataList> tag, you will need to set permissions at the module level by going to the module's Configure page and choosing the Security tab. There you can choose the roles allowed to add records.
*   **Ajax**: New to version 2.6, when this attribute is true, actions within the template tag will be performed without a full page refresh. This value is false by default. NOTE: buttons that postback such as the DetailButton (or DetailImage or DetailLink) or AddButton or DeleteButton or CommandButton, etc. must have their ID property set to function correctly. If you have to click twice on a button, for instance, make sure it's ID has been set.

    **ConnectionString**: If you need to specify a SQL Server database other than the current DotNetNuke database, you can supply a connection string here. When specified, it serves as the default connection string for the ListDataSource and DetailDataSource. You can also use a connection string defined in the web.config file. To do so, use the ConnectionString token like so:

    <pre xml:space="preserve"><xmod:DataList... ConnectionString='[[ConnectionString:_connectionName_]]' ...></pre>

*   **RepeatColumns**: Determines the maximum number of columns that will be used for displaying records. If there are more records than the number of columns, the DataList will create new rows. Keep in mind that, unlike standard tables where each column contains a field from the record, in a DataList each column contains a full record.  

*   **RepeatLayout**: Determines the underlying HTML that is used to create the column layout. **Table** indicates the grid pattern will be created by an HTML table, **Flow** indicates the pattern will be created by SPAN and BR tags.  

*   **RepeatDirection**: Determines in which order the columns and rows are filled. If set to **Horizontal**, the columns and rows are filled from left to right and then top to bottom. If set to **Vertical**, columns and rows are filled from top to bottom first and then left to right.  

*   **UsePaging**: If set to true, the default, list views will display a pager if more than one page is available for display. The pager can be set using the `<Pager>` tag.  

*   **Data Sources**: The data for each view is a SQL command. This could be a SQL `SELECT` command or a stored procedure. Supply the SQL command as the commandtext attribute. For stored procedures, use `EXEC _sprocName_`. In the initial release, data sources can only point to the current DotNetNuke database. Also note that Bit columns are returned as True/False - not 1/0\. The data source for list views is defined in the `<ListDataSource>` tag while the data source for the detail view is defined in the DetailDataSource tag.  

*   In addition to its attributes, the DataList tag also contains numerous child tags which define most of the tag's functionality:
    *   **ListDataSource**: Provides the data for the DataList when it is displaying in list view. It accepts <parameter> tags to pass parameters as part of the command. The "alias" attribute is optional and is used to avoid conflicts or to accept a parameter with a specific name (the "name" attribute) but use a different parameter name in the command (the "alias" attribute). If no "alias" is specified, the "name" will be used.

        **Output Parameters**: New to version 1.3, you can retrieve and use the value of SQL Output parameters. To do so, add the Direction="Output" to the <parameter> tag and specify a DataType and Size (required for Strings). See Example #4 and the [Data Parameter Tokens Topic](tokens_data.html).

        Examples:

        <pre xml:space="preserve">#1
        <ListDataSource CommandText="SELECT FirstName, LastName FROM Users" /></pre>

        <pre xml:space="preserve">#2
        <ListDataSource CommandText="SELECT FirstName, LastName FROM Users 
                                     WHERE ZipCode = @zip">
          <parameter name="zip" alias="zip" value="12345" />
        </ListDataSource></pre>

        <pre xml:space="preserve">#3
        <ListDataSource CommandText="EXEC GetUsers @zip">
          <parameter name="zip" alias="zip" value="12345" />
        </ListDataSource></pre>

        <pre xml:space="preserve">#4
        <ListDataSource CommandText="GetEmploeesByDepartment" CommandType="StoredProcedure">
          <parameter name="DepartmentId" value="32"/>
          <parameter name="DepartmentName" direction="Output" datatype="string" size="100" />
        </ListDataSource></pre>

        You can optionally specify a **ConnectionString** for this data source. If none is specified, the default connection will be used - either the connection specified by the ConnectionString property of the parent `<xmod:DataList>` tag or the current DotNetNuke database if the DataList tag doesn't define a connection. As with the DataList tag, you can use the `[[ConnectionString:connectionName]]` token to use a connection defined in the web.config file.  

    *   **DetailDataSource**: Provides the data for the DetailTemplate when it is displaying a single record. It accepts `<parameter>` tags like the `<ListDataSource>`. You can optionally specify a **ConnectionString** for this data source. If none is specified, the default connection will be used - either the connection specified by the ConnectionString property of the parent `<xmod:DataList>` tag or the current DotNetNuke database if the DataList doesn't define a connection. As with the DataList tag, you can use the `[[ConnectionString:connectionName]]` token to use a connection defined in the web.config file.  

        DetailDataSource tags can also take **Output Parameters**. See the ListDataSource topic above for details.  

    *   **DeleteCommand**: Provides the command to execute when a Delete Button/Image/Link is pressed within the DataList. It accepts `<parameter>` tags like the `<ListDataSource`>  

    *   **HeaderTemplate**: When displaying a list view, HTML, text, and controls that will be rendered once, at the beginning of the list. This template is optional.  

*   **ItemTemplate**: When displaying a list view, HTML, text, field tokens, and controls that will be rendered for each record in the result set. If the AlternatingItemTemplate is supplied, then the ItemTemplate will be used for all odd-numbered records.  

*   **AlternatingItemTemplate**: When displaying a list view, HTML, text, field tokens, and controls that will be rendered for the even-numbered records in the result set. This template is optional.  

*   **SeparatorTemplate**: When displaying a list view, this will render any HTML or text that you specify between each record. One good example is if you're creating a list of comma-separated records (we'll use numbers for simplicity). If you put your comma in the ItemTemplate, you would get a trailing comma like this: 1,2,3, But if you put your comma in the SeparatorTemplate, you won't get that trailing comma: 1,2,3\. (Added in version 1.4)  

*   **FooterTemplate**: When displaying a list view, HTML, text, and controls that will be rendered once, at the end of the list. This template is optional.  

*   **DetailTemplate**: Defines the layout for viewing a single record. When the user clicks a detail button, this template will be used. This template can contain HTML, text, Field Tokens, and controls. It is required if you will be using XMod Pro's detail buttons in your list view.  

*   **NoItemsTemplate**: Defines the layout and text to display when the data source returns no records. This tag is optional. If not specified, nothing will be shown.  

*   **Pager**: This optional tag allows you to override the default configuration and look of the top and bottom pagers. Additionally, you can optionally override the default layout of the top and bottom pagers using your own HTML. See the `[<Pager>](temp_pager.html)` topic for more details.  

*   **SearchSort**: This allows you to define basic searching and sorting for your DataList. For more details see the `[<SearchSort>](temp_searchsort.html)` topic.  

*   **Field Tokens**: In order to display data from your data source, XMod Pro uses "field tokens". These are essentially placeholders that contain the name of the column or field in your data source. At run-time, these tokens are replaced with the value from record. Field Tokens are written in this form: `[[FieldName]]` "FieldName" is the name of the field or column in your data source. This name is case sensitive and must match the field/column's name exactly. It must be surrounded by [[ and ]]. You can use the Field Token in many places. However, when you use it as the attribute value for an XMod Pro tag or other third party control, you must delimit the attribute value with single quotes, rather than double quotes. See the `<xmod:detailbutton>` code in the example. When used in the `<parameter>` tag, the attribute is written as: `value='[[UserID]'` rather than: `value="[[UserID]]"`. When using a Field Token with HTML tag attributes, this is not necessary.

[Back to top](#top)  
<a name="example"></a>

## Example

<div xmlns="">`<xmod:DataList AddRoles="SampleRole1;SampleRole2">`  
`    <ListDataSource commandtext="SELECT * FROM Users" />`  
`    <DetailDataSource commandtext="SELECT * FROM Users WHERE UserID=@UserID" />`  
`    <HeaderTemplate>`  
`        <h1>Users List</h1>`  
`    </HeaderTemplate>`  
`    <ItemTemplate>`  
`            User's Name: [[FirstName]] [[LastName]] <br />`  
`            <xmod:detaillink text="More...">`  
`                <parameter name="UserID" value='[[UserID]]' />`  
`            </xmod:detaillink>`  
`    </ItemTemplate>`  
`    <AlternatingItemTemplate>`  
`            User's Name: [[FirstName]] [[LastName]] <br />`  
`            <xmod:detaillink text="More...">`  
`                <parameter name="UserID" value='[[UserID]]' />`  
`            </xmod:detaillink>`  
`    </AlternatingItemTemplate>`  
`    <FooterTemplate>`  

`    </FooterTemplate>`  
`    <DetailTemplate>`  
`        <h1>This is the detail view</h1>`  
`        User's Name: [[FirstName]] [[LastName]]`  
`    </DetailTemplate>  
    <NoItemsTemplate>  
      <span class="NormalRed">Sorry. No Records Were Found</span>  
    </NoItemsTemplate>`  
`</xmod:DataList>`</div>

[Back to top](#top)