# <xmod:Template>

<a name="top"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

The template tag is the primary workhorse of XModPro. It contains the data commands and layout instructions for your display. Additionally, it enables you to specify who is allowed to add, edit, and delete records as well as who is allowed to view the details of records. You can use multiple Template tags, enabling you to have side-by-side (or however you want to lay them out using HTML) displays within the same module instance, each being fed by different datasources.

<a name="syntax"></a>

## Syntax

<div xmlns="" style="font-size: 9pt;font-family: monospace;">`<xmod:Template`  
`  AddRoles="DNNRoleName1,DNNRoleName2"`  
`  Ajax="True|**False**"`  
`  ConnectionString="_string_"`  
`  DeleteRoles="DNNRoleName1;DNNRoleName2"`  
`  DetailRoles="DNNRoleName1;DNNRoleName2"`</div>

<div xmlns="" style="font-size: 9pt;font-family: monospace;">`EditRoles="DNNRoleName1;DNNRoleName2"`</div>

<div xmlns="" style="font-family: monospace;font-size: 9pt;">`ID="_string_"`</div>

<div xmlns="" style="font-family: monospace;font-size: 9pt;">`UsePaging="**True**|False" >`  

`    <ListDataSource CommandText="_string_"  
        ConnectionString="_string_" />`  
`    <DetailDataSource CommandText="_string_"  
        ConnectionString="_string_" />  

    <DeleteCommand CommandText="_string_" />  

    <CustomCommands>  
      <DataCommand CommandName="_string_" CommandText="_string_" ConnectionString="_string_">  
        <Parameter Name="_string_" Value="_string_" />  
      </DataCommand>  
    </CustomCommands>`</div>

<div xmlns="" style="font-size: 9pt;font-family: monospace;">  

`[<Pager>](temp_pager.html) ... </Pager>  
[<SearchSort>](temp_searchsort.html)...</SearchSort>`  

`    <HeaderTemplate>...</HeaderTemplate>`  
`    <ItemTemplate>...</ItemTemplate>`  
`    <AlternatingItemTemplate>...</AlternatingItemTemplate>  
    <SeparatorTemplate>...</SeparatorTemplate>`  
`    <FooterTemplate>...</FooterTemplate>`  

`    <DetailTemplate>...</DetailTemplate>  

    <NoItemsTemplate>...</NoItemsTemplate>`  
`<span style="font-size: 9pt;" xmlns="http://www.w3.org/1999/xhtml"></xmod:Template></span>`</div>

<a name="remarks"></a>

## Remarks

*   **AddRoles/EditRoles/DeleteRoles/DetailRoles:** Each of these properties are lists of DNN role names, separated by commas. Host/SuperUser and Admin accounts always have add/update/delete/detail permissions. By default, anyone who has access to view the module also has detail viewing permissions. Supply the DetailRoles attribute to limit who can view the details of records within the template. Users other than Host/Admin must be explicitly granted add/update/delete rights. Prior to version 4.0, role names were separated by semi-colons. To enhance consistency with other areas of XMod Pro, commas are now used. For backwards compatibility, you can still use semi-colons, but their usage is deprecated as of version 4.0\. You should use commas going forward.  

    **NOTE**: These permissions apply ONLY to controls _within_ the <span style="font-family: monospace;"><xmod:Template></span> tag. If you have an <span style="font-family: monospace;"><xmod:AddButton></span>, and <span style="font-family: monospace;"><xmod:AddLink></span>, or <span style="font-family: monospace;"><xmod:AddImage></span> tag placed _outside_ of the <span style="font-family: monospace;" xmlns="http://www.w3.org/1999/xhtml"><xmod:Template></span> tag, you will need to set permissions at the module level by going to the module's Configure page and choosing the Security tab. There you can choose the roles allowed to add records.
*   **Ajax**: New to version 2.6, when this attribute is true, actions within the template tag will be performed without a full page refresh. This value is false by default. NOTE: buttons that postback such as the DetailButton (or DetailImage or DetailLink) or AddButton or DeleteButton or CommandButton, etc. must have their ID property set to function correctly. If you have to click twice on a button, for instance, make sure it's ID has been set.

    **ConnectionString**: If you need to specify a SQL Server database other than the current DotNetNuke database, you can supply a connection string here. When specified, it serves as the default connection string for the ListDataSource and DetailDataSource. You can also use a connection string defined in the web.config file. To do so, use the ConnectionString token like so:

    <pre xml:space="preserve" style="font-family: Verdana;" xmlns="http://www.w3.org/1999/xhtml"><span style="font-family: monospace;"><xmod:Template ... ConnectionString='[[ConnectionString:</span>_connectionName_<span style="font-family: monospace;">]]' ...></span></pre>

*   **UsePaging**: If set to true, the default, list views will display a pager if more than one page is available for display. The pager can be set using the `<Pager>` tag.  

*   **Data Sources**: The data for each template is a SQL command. This could be a SQL `SELECT` command or a stored procedure. Supply the SQL command as the CommandText attribute. For stored procedures, use `<span style="font-size: 9pt;">EXEC</span> _sprocName_`. In the initial release, data sources can only point to the current DotNetNuke database. Also note that Bit columns are returned as True/False - not 1/0\. The data source for list views is defined in <span style="font-size: 9pt;" xmlns="http://www.w3.org/1999/xhtml">the</span> `<span style="font-size: 9pt; font-family: monospace;"><ListDataSource></span>` tag while the data source for the detail view is defined in the <span style="font-size: 9pt; font-family: monospace;" xmlns="http://www.w3.org/1999/xhtml"><DetailDataSource></span> tag.  

*   In addition to its attributes, the Template tag also contains numerous child tags which define most of the tag's functionality:
    *   **ListDataSource**: Provides the data for the template when it is displaying in list view. It accepts <span style="font-family: monospace;"><parameter></span> tags to pass parameters as part of the command. The "alias" attribute is optional and is used to avoid conflicts or to accept a parameter with a specific name (the "name" attribute) but use a different parameter name in the command (the "alias" attribute). If no "alias" is specified, the "name" will be used.

        **Output Parameters**: New to version 1.3, you can retrieve and use the value of SQL Output parameters. To do so, add the Direction="Output" to the <span style="font-family: monospace;"><parameter></span> tag and specify a DataType and Size (required for Strings). See Example #4 and the [Data Parameter Tokens Topic](tokens_data.html).

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

        <span style="font-family: Verdana;">You can optionally specify a</span> **ConnectionString** <span style="font-family: Verdana;">for this data source. If none is specified, the default connection will be used - either the connection specified by the ConnectionString property of the parent</span> `<xmod:Template>`<span style="font-family: Verdana;">tag or the current DotNetNuke database if the template doesn't define a connection. As with the template tag, you can use the</span> `[[ConnectionString:connectionName]]` <span style="font-family: Verdana;">token to use a connection defined in the web.config file.</span>  

    *   **DetailDataSource**: Provides the data for the template when it is displaying a single record. It accepts `<Parameter>` tags like the `<ListDataSource>`. You can optionally specify a **ConnectionString** for this data source. If none is specified, the default connection will be used - either the connection specified by the ConnectionString property of the parent `<xmod:Template>` tag or the current DotNetNuke database if the template doesn't define a connection. As with the template tag, you can use the `[[ConnectionString:connectionName]]` token to use a connection defined in the web.config file.  

        DetailDataSource tags can also take **Output Parameters**. See the ListDataSource topic above for details.  

    *   **DeleteCommand**: Provides the command to execute when a Delete Button/Image/Link is pressed within the template. It accepts `<parameter>` tags like the `<ListDataSource>`.  

    *   **CustomCommands**<span style="font-size: 9pt;"><span style="font-family: Verdana;">: New to version 3\. Custom commands allow you to execute commands on your data source beyond the standard list/detail/delete commands. For instance, you may use them to create an Approve Record button which would set the approval status on a record. Custom Commands are triggered using <span style="font-family: monospace;"><xmod:CommandButton>, <xmod:CommandLink> and <xmod:CommandImage></span> controls. For the <Command> tag, specify the Name of the command and set the Type to Custom. When a custom command is executed, the page will postback to the server and XMod Pro will attempt to reload the resultset on the same page the user was on when the command button was clicked. In most cases this should update any values on that page that have been changed.</span></span>

        <span style="font-size: 9pt;"><span style="font-family: Verdana;">An example is below:</span></span>

        <pre xml:space="preserve" xmlns="http://www.w3.org/1999/xhtml"><span style="font-family: monospace;"><xmod:Template></span>
         ... 
        `<span style="font-size: 9pt;"><CustomCommands>
            <DataCommand CommandName="ChangeLastNameToSmith" CommandText="UPDATE Authors SET LastName='Smith' WHERE AuthorId=@AuthorId">
              <Parameter Name="AuthorId" />
            </DataCommand>
          </CustomCommands></span>`</pre>

        <pre xml:space="preserve">  ...</pre>

        <pre xml:space="preserve">  <ItemTemplate></pre>

        <pre xml:space="preserve">   <xmod:CommandButton Text="CustomCommand"></pre>

        <pre xml:space="preserve">    <Command Name="ChangeLastNameToSmith" Type="Custom"></pre>

        <pre xml:space="preserve">      <Parameter Name="AuthorId" Value='[[AuthorId]]' /></pre>

        <pre xml:space="preserve">    </Command></pre>

        <pre xml:space="preserve">   </xmod:CommandButton></pre>

        <pre xml:space="preserve">  ...</pre>

        <pre xml:space="preserve">  </ItemTemplate></pre>

        <pre xml:space="preserve">  ...</pre>

        <pre xml:space="preserve"></xmod:Template>  
         </pre>

    *   **HeaderTemplate**: When displaying a list view, HTML, text, and controls that will be rendered once, at the beginning of the list. This template is optional.  

*   **ItemTemplate**: When displaying a list view, HTML, text, field tokens, and controls that will be rendered for each record in the result set. If the AlternatingItemTemplate is supplied, then the ItemTemplate will be used for all odd-numbered records.  

*   **AlternatingItemTemplate**: When displaying a list view, HTML, text, field tokens, and controls that will be rendered for the even-numbered records in the result set. This template is optional.  

*   **SeparatorTemplate**: When displaying a list view, this will render any HTML or text that you specify between each record. One good example is if you're creating a list of comma-separated records (we'll use numbers for simplicity). If you put your comma in the ItemTemplate, you would get a trailing comma like this: 1,2,3, But if you put your comma in the SeparatorTemplate, you won't get that trailing comma: 1,2,3\. (Added in version 1.4)  

*   **FooterTemplate**: When displaying a list view, HTML, text, and controls that will be rendered once, at the end of the list. This template is optional.  

*   **DetailTemplate**: Defines the layout for viewing a single record. When the user clicks a detail button, this template will be used. This template can contain HTML, text, Field Tokens, and controls. It is required if you will be using XMod Pro's detail buttons in your list view.  

*   **NoItemsTemplate**: Defines the layout and text to display when the data source returns no records. This tag is optional. If not specified, nothing will be shown.  

*   **Pager**: This optional tag allows you to override the default configuration and look of the top and bottom pagers. Additionally, you can optionally override the default layout of the top and bottom pagers using your own HTML. See the `[<Pager>](temp_pager.html) <span style="font-size: 9pt;" xmlns="http://www.w3.org/1999/xhtml"></span> `topic for more details.  

*   **SearchSort**: This allows you to define basic searching and sorting for your template. For more details see the `[<SearchSort>](temp_searchsort.html)` topic.  

*   **Field Tokens**: In order to display data from your data source, XMod Pro uses "field tokens". These are essentially placeholders that contain the name of the column or field in your data source. At run-time, these tokens are replaced with the value from record. Field Tokens are written in this form: `[[FieldName]]` "FieldName" is the name of the field or column in your data source. This name is case sensitive and must match the field/column's name exactly. It must be surrounded by [[ and ]]. You can use the Field Token in many places. However, when you use it as the attribute value for an XMod Pro tag or other third party control, you must delimit the attribute value with single quotes, rather than double quotes. See the `<xmod:DetailButton>` code in the example. When used in the `<Parameter>` tag, the attribute is written as: `value='[[UserID]'` rather than:<span style="font-size: 9pt;"> </span>`value="[[UserID]]"`. When using a Field Token with HTML tag attributes, this is not necessary.

[Back to top](#top)  
<a name="example"></a>

## Example

<div xmlns="">`<xmod:Template AddRoles="SampleRole1;SampleRole2">`  
`    <ListDataSource CommandText="SELECT * FROM Users" />`  
`    <DetailDataSource CommandText="SELECT * FROM Users WHERE UserID=@UserID" />`  
`    <HeaderTemplate>`  
`        <ul>`  
`    </HeaderTemplate>`  
`    <ItemTemplate>`  
`        <li>`  
`            User's Name: [[FirstName]] [[LastName]] <br />`  
`            <xmod:DetailLink Text="More...">`  
`                <Parameter Name="UserID" Value='[[UserID]]' />`  
`            </xmod:DetailLink>`  
`        </li>`  
`    </ItemTemplate>`  
`    <AlternatingItemTemplate>`  
`        <li class="AltItem">`  
`            User's Name: [[FirstName]] [[LastName]] <br />`  
`            <xmod:DetailLink Text="More...">`  
`                <Parameter Name="UserID" Value='[[UserID]]' />`  
`            </xmod:DetailLink>`  
`        </li>`  
`    </AlternatingItemTemplate>`  
`    <FooterTemplate>`  
`        </ul>`  
`    </FooterTemplate>`  
`    <DetailTemplate>`  
`        <h1>This is the detail view</h1>`  
`        User's Name: [[FirstName]] [[LastName]]`  
`    </DetailTemplate>`  
`</xmod:Template>`</div>

[Back to top](#top)