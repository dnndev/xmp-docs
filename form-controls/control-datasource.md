# <ControlDataSource>

<a name="top"></a>



Use this optional tag if you want to bind a list-based control to a set of data. A good example would be providing the user with a drop down list of states (in the US) or a list of departments in a company or a list of job titles, etc. You can supply more than one `<ControlDataSource>` per form definition and you can use the `<ControlDataSource>` as the source for multiple controls within your form.

<a name="syntax"></a>

## Syntax

<div>  
`<ControlDataSource  
  CommandText="_string_"  
 CommandType="StoredProcedure"  
  ConnectionString="_string_"  
  Id="_string_"  
  Source="_string_">  
_Optionally add Parameter tags for any parameters you need_  
_    to send to the database._``  
    <Parameter Name="string" Value="string" DataType="data type" />  
    ...`  
`</ControlDataSource>`  
</div>

 <a name="remarks"></a>

## Remarks  

*   **Id**: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form. This attribute is required as it provides the link between the data source and the controls to which it is bound.  

*   **CommandText**: The SQL command to execute to return the data. This attribute is required. Optionally, when **Source** has been set to _dnn_, you can specify special values for CommandText to enable retrieval of data from the DotNetNuke database via its API rather than direct database queries (see the Source property description for more details).  

*   **CommandType**: New to version 4.7\. The ControlDataSource tag can now specify to use stored procedures. Specify CommandType="StoredProcedure".  

*   **ConnectionString**: The database connection string for the datasource from which the data will be retrieved. This attribute is optional. XMod Pro will use the connection string for the current DNN database by default. To use connection strings stored in the web.config file, use the [[ConnectionString:_connectionStringName_]] where connectionStringName is the name assigned to the connection string in the web.config file.  

*   **Source**: New to version 4.0\. You can optionally specify "dnn" (without quotes) as this property's value. When Source is set to dnn, you can retrieve different sets of data using the DNN API rather than querying the datbase directly. You determine what data you want to retrieve by specifying it in the CommandText property. Currently supported values are:  

    *   **Users**: Returns a list of users from the current portal
    *   **Roles**: Returns a list of security roles in the current portal
    *   **Pages**: Returns a list of pages in the current portal
    *   **ListCountries**: Returns the list of countries defined in the DotNetNuke Lists table.  

*   **<Parameter>**: Beginning with version 1.2, the ControlDataSource tag now recognizes `<Parameter>` child tags. :  

    *   **Name**: This is the name of the parameter and should be the same as the @param used in your CommandText.
    *   **Value**: This is the value of the parameter. You can hard-code the value or you can use function tokens like `[[Url:paramName]]` or `[[Portal:ID]]`<span style="font-size: 9pt;">,</span> etc.

For each control that will use the data, you need to specify:  

*   **DataSourceId**: This is the Id of the `<ControlDataSource>` and serves to link the control to the data source.
*   **DataTextField**: This is the name of the field in the data source that contains the value to use for the control's display text.
*   **DataValueField**: This is the name of the field in the data source that contains the value to use for the control's hidden text.



## Example

<div xmlns="">`<AddForm>`  
`  <SelectCommand CommandText="SELECT @FirstName AS FirstName, @LastName AS LastName,  
                              'AZ' AS StateId">  
    <Parameter Name="FirstName" Value='[[User:FirstName]]' DefaultValue="" />  
    <Parameter Name="LastName" Value='[[User:LastName]]' DefaultValue="" />  
  </selectcommand>`  
`  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName, StateId)  
                              VALUES(@FirstName, @LastName, @StateId)" />  
 <span style="color: #ff0000;"> <ControlDataSource Id="dsStates" ConnectionString="(your connection string here)"</span>  
<span style="color: #ff0000;">      CommandText="SELECT StateName, StateId FROM States ORDER BY StateName ASC" /></span>`  
`  <table>`  
`    <tr>`  
`      <td>`  
`        <Label For="txtFirstName" Text="First Name" />`  
`        <TextBox Id="txtFirstName" DataField="FirstName" DataType="string" />`  
`      </td>`  
`    </tr>`  
`    <tr>`  
`      <td>`  
`        <Label For="txtLastName" Text="Last Name" />`  
`        <TextBox Id="txtLastName" DataField="LastName" DataType="string" />`  
`       </td>`  
`    </tr>`  
``    <tr>`  
`      <td>`  
`        <Label For="ddlState" Text="State" />`  
`        <DropdownList Id="ddlState" DataField="StateId" DataType="int32"  
           DataSourceId="dsStates" DataTextField="StateName" DataValueField="StateId" />`  
`       </td>`  
`    </tr>`  
    <tr>`  
`      <td colspan="2">`  
`        <AddButton Text="Add"/> <CancelButton Text="Cancel" />`  
`      </td>`  
`    </tr>`  
`  </table>`  
`  <Email To="``me@mysite.com``" From="server@mysite.com" Subject="New User Added"` `Format="html">`  
`     A new user has been added:<br />`  
`     FirstName: [[FirstName]]<br />`  
`      LastName: [[LastName]]`  
`  </Email>`  
`</AddForm>`  

</div>

