# <AddForm>, <EditForm>

<a name="top"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

Forms in XMod Pro are defined using HTML and special XMod Pro tags. XMod Pro provides you with the ability to define separate forms to use for adding a record (using the `<AddForm>` tag) and for editing a record (using the `<EditForm>` tag). To use third party libraries containing XMod Pro-compatible controls, you use the `<Register>` tag. This makes the library available to both your Add and Edit Form.

<a name="syntax"></a>

## Syntax

<div>`<Register .../>`  
`<Register .../>`  
`...`  
`<AddForm ClientName="_string_" ScrollToTop="True|**False**">  
    <Variable .../>  
    ...`  
`    <SelectCommand.../>`  
`    <SubmitCommand.../>  
[`<ControlDataSource .../>`](form_controldatasource.html)`  
`    ...HTML AND FORM CONTROLS...`  
`</AddForm>`</div>

<div>  
`<EditForm ClientName="_string_">  
   <Variable .../>  
    ...`  
`    <SelectCommand.../>`  
`    <SubmitCommand.../>  
    <ControlDataSource .../>`  
`    ...HTML AND FORM CONTROLS...`  
`</EditForm>  

<AddSuccessTemplate>  
  <ItemTemplate> HTML, Field Tokens, <xmod:Redirect> tags, and Continue Button/Image/Link controls</ItemTemplate>  
</AddSuccessTemplate>  

<EditSuccessTemplate>  
  <ItemTemplate> HTML, Field Tokens, <xmod:Redirect> tags, and Continue Button/Image/Link controls</ItemTemplate>  
</EditSuccessTemplate>`  
</div>

 <a name="remarks"></a>

## Remarks

Each form definition can contain only one `<AddForm>` and one `<EditForm>` tag. Though, it is possible to define just the `<AddForm>` or `<EditForm>` should you only need that form type. All your control tags, HTML tags, and text must fall within the `<AddForm>` and `<EditForm>` tags. Your HTML and tags should be XHTML compliant for best results.

`<AddForm> and <EditForm>`

*   **ClientName**: This attribute is optional. When used, it enables you to specify the name to use for your form within Javascript calls. It is used with XMod Pro's Javascript helper function to quickly and easily get the client ID of elements within an XMod Pro form. For more information see the [Using Javascript](UsingJavascript.html) help topic.  

*   **ScrollToTop**: This attribute is optional. When set to True, when the user clicks the AddButton or UpdateButton, the form will position the browser window at the top of the page rather than maintaining the scroll position. This is helpful when you're using a long form and you want to avoid the visual jump that ensues between the time the page loads (at the top of the page) and the time the browser jumps to the previous scroll position. In the right circumstances, it can mitigate that jarring visual jump. New to version 4.1.  

`<SelectCommand> and <SubmitCommand>`

<span style="font-family: Arial;">Form tags rely on "command" tags (</span>`<SelectCommand>`<span style="font-family: Arial;">,</span> `<SubmitCommand>`<span style="font-family: Arial;">) to perform their data-related functions. The</span> `<SelectCommand>` <span style="font-family: Arial;">when specified, is used to populate the form with data when it first loads. The</span> `<SubmitCommand>` <span style="font-family: Arial;">is executed when the user presses or clicks the Add/Update button in the form. These commands work in conjunction with the "DataField" and "DataType" attributes of the form control tags. The DataField attribute values match the parameter names (i.e. @ParamName) in the commands. The "DataType" attribute enables XMod Pro to pass the control's value properly to your command. The attributes for these tags are described below:</span>

*   **CommandText**: The SQL command to execute to return the data. This attribute is required.  

*   **ConnectionString**: The database connection string for the datasource from which the data will be retrieved. This attribute is optional. XMod Pro will use the connection string for the current DNN database by default. To use connection strings stored in the web.config file, use the [[ConnectionString:_connectionStringName_]] where connectionStringName is the name assigned to the connection string in the web.config file.  

*   **<Parameter>**: These child tags enable the <span style="font-family: monospace;"><SelectCommand></span> to accept values passed as POST or GET parameters or parameters passed from <span style="font-family: monospace;"><xmod:DeleteButton></span>, <span style="font-family: monospace;"><xmod:EditButton></span>, and similar tags.  
    Parameters have the following attributes:
    *   **Name**: The name of the parameter. This must match the `@name` parameter in the CommandText.
    *   **Value:** The value of the parameter (optional). This attribute allows you to hard-code a value for the parameter or use the value of a token (like <span style="font-family: Verdana;">[[Url:MyParam]]</span>) - see the example code later in this topic.
    *   **DefaultValue**: This attribute value will be used if no Value is found for the parameter.
    *   **DataType**: This attribute that enables you to ensure the parameter's value is of a specific type (as an aid in preventing SQL injection attacks).
    *   **Direction**: Possible values are Input,InputOutput, Output, and ReturnValue. Defaults is Input.  

    *   **Size**: The size of the parameter. Size="_aNumericalValue_". Only applicable to text. Specifies the number of characters allowed for that parameter. It's especially important for Output parameters as it determines the maximum number of characters returned.  

`<ControlDataSource>`

Use this optional tag if you want to bind a list-based control to a set of data. [More Information](form_controldatasource.html)

**Using [[Field]] Tokens in Your Form:**

Beginning in version 1.3, XMod Pro now supports the ability to use data from your <span style="font-family: monospace;"><SelectCommand></span> in the attributes of your form controls. This allows you to retrieve values from your database or from passed-in parameters or hard-coded values in your forms to further enhance their dynamic nature. For instance, if a customer is ordering a product, your <span style="font-family: monospace;" xmlns="http://www.w3.org/1999/xhtml"><SelectCommand></span> can look that product up in the inventory database and set the MaximumValue of the Range Validator so that it prevents the user from ordering more a quantity greater than the stock you have in the warehouse.

Using <span style="font-family: monospace;">[[Field]]</span> tokens is easy. They follow the same rules as <span style="font-family: monospace;">[[Field]]</span> tokens in templates.

**Example:**

<pre xml:space="preserve" xmlns=""><AddForm>
  <SelectCommand CommandText="<span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml">SELECT StockOnHand</span> FROM Inventory WHERE ProductId = @ProductId">
    <Parameter Name="ProductId" Value='[[Url:pid]]' DataType="Int32" />
  </SelectCommand>
  ...
  <TextBox Id="txtQuantity" DataField="Qty" DataType="Int32"/>
  <Validate Type="Range" `Target="txtQuantity" MinimumValue="1" 
    MaximumValue=<span style="color: #ff0000;">'[[StockOnHand]]'</span> 
    Message='[[Join("You can only order between 1 and {0} tickets",<span style="color: #ff0000;">[[StockOnHand]]</span>)]]' 
    Type="Integer" />`
</pre>

`<AddSuccessTemplate>, <EditSuccessTemplate>`

These tags are **optional**. They provide you with the ability to display a "thank you" or a "completed" type of message to your user after successful submission of the form. The AddSuccessTemplate tag is used when the AddForm is submitted. The EditSuccessTemplate tag is used when the EditForm is submitted. When displayed, the content of the tag's `<ItemTemplate>` tag will be displayed in place of the Add/Edit form.  

**Enabling Your Users to Continue After Successful Form Submission:**

The <span style="font-family: monospace;"><AddSuccessTemplate></span> and <span style="font-family: monospace;"><EditSuccesTemplate></span> tags accept [`<xmod:ContinueButton>`](form_continuebutton.html), `[<xmod:ContinueImage>](form_continueimage.html)`, and `[<xmod:ContinueLink>](form_continuelink.html)` controls. These render as a button, image, or link, respectively. They act as "OK" buttons. When clicked, these buttons will take the user to the page/view they would ordinarily see after submitting their form without the success message. Of course, you can also send the user to the URL of your choice. Each of these buttons has a Redirect attribute that takes a destination URL. When used, the user will be redirected to that URL. NOTE: if you want to POST values to a destination URL, you should use the `[<xmod:Redirect>](temp_redirect.html)` tag.

You can use text, HTML, and `[[Field]]` tokens to craft your success message. Note that the `[[Field]]` tokens will be replaced at run-time by the values in the form's data-bound fields, rather than values actually saved to the database.

**Displaying the return value and/or Output parameter value from a Stored Procedure (new to v.4)**:

If your form's <span style="font-family: monospace;"><SubmitCommand></span> calls a stored procedure that returns a value or sets the value of an output parameter, you can display or otherwise use that value in your success template.  

IMPORTANT: When calling stored procedures in your <span style="font-family: monospace;"><SubmitCommand></span>, you MUST declare all the parameters you're passing to the stored procedure. Because you can have controls on your form that you may not pass to the database (i.e. using an entered value in an Email or Redirect) XMod Pro cannot automatically generate those stored procedure parameters for you.

1.  Modify your <span style="font-family: monospace;" xmlns="http://www.w3.org/1999/xhtml"><SubmitCommand></span> to call your stored procedure and set its CommandType property to StoredProcedure:  

    `<SubmitCommand CommandText="<span style="color: #ff0000;">addContact</span>" <span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml">CommandType="StoredProcedure"</span>>`  

2.  For each form field you want to pass to your stored procedure, add a <span style="font-family: monospace;" xmlns="http://www.w3.org/1999/xhtml"><Parameter></span> tag to your <span style="font-family: monospace;"><SubmitCommand></span>:  

    `<SubmitCommand CommandText="addContact" CommandType="StoredProcedure">`  
    `<span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml"><Parameter Name="FirstName" /></span>`  
    `<span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml">  <Parameter Name="LastName" /></span>  
    </SubmitCommand>`  

3.  Add parameters for your Output and/or Return Value. Be sure to set the Direction property accordingly:  

    ``<SubmitCommand CommandText="addContact" CommandType="StoredProcedure">``  
    `  <Parameter Name="FirstName" />  
      <Parameter Name="LastName" />  
    <span style="color: #ff0000;"><Parameter Name="retVal" Direction="ReturnValue" /></span>  
    <span style="color: #ff0000;">  <Parameter Name="newID" Direction="Output" DataType="int32" /></span>`  
    `</SubmitCommand>`  

    NOTES: Your parameter name(s) should be unique among all your form's controls (i.e. their DataField properties). Also, if you set a DataType for your return value/output parameter, ensure that the returned value returned matches it. Otherwise an error will be thrown. Also, if you're passing textual data types like varchar or nvarchar, please ensure that your <span style="font-family: monospace;" xmlns="http://www.w3.org/1999/xhtml"><Parameter></span> tags specify a Size property - otherwise, only the 1st character will be returned in an output parameter.  

4.  If your stored procedure will pass back friendly error messages (like duplicate record messages), set that up. Your stored procedure must have an OUTPUT parameter whose name is @ERROR (all caps). You can handle this by adding a ERROR parameter and adding a <span style="font-family: monospace;"><Validate Type="Database" /></span> and a <span style="font-family: monospace;" xmlns="http://www.w3.org/1999/xhtml"><ValidationSummary /></span> tag if your form doesn't already have one. Any errors from the database will be displayed in the ValidationSummary tag.  

    ``<SubmitCommand CommandText="addContact" CommandType="StoredProcedure">``  
    `  <Parameter Name="FirstName" />  
      <Parameter Name="LastName" />  
      <Parameter Name="retVal" Direction="ReturnValue" />  
      <Parameter Name="newID" Direction="Output" DataType="int32" />  
    <span style="color: #ff0000;"><Parameter Name="ERROR" Direction="Output" DataType="_string_" /></span>`  
    `</SubmitCommand>  
    ...  
    <AddButton Text="Add" />  
    <span style="color: #ff0000;"><Validate Type="Database" /></span>  
    <span style="color: #ff0000;"><ValidationSummary /></span>`  

5.  In your success template, use your return value as you would a field token:  

    `<AddSuccessTemplate>`  
    `  This is my return value: [[retVal]] <br />  
       <xmod:Redirect Display="Button" Text="View New Record" Target="href://mysite.com/TeamDetail.aspx" Method="Post">  
         <Field Name="teamid" Value='[[newID]]' />  
       </xmod:Redirect>`  
    `</AddSuccessTemplate>`  

<pre xml:space="preserve" style="font-weight: bold;font-size: 12pt;" xmlns=""><Variable></pre>

Variable tags, new to version 2.7, are optional tags you can use to provide additional data to your form. Variables are not rendered to the form but are available to your data commands and controls. For instance, you might use a variable to store the portal's ID. Then, in your <span style="font-family: monospace;"><SubmitCommand></span>, you can use that variable to store the Portal ID in the record along with other form values. Another possibility would be to use the <span style="font-family: monospace;" xmlns="http://www.w3.org/1999/xhtml"><Text</span>> tag to display information to the user from Variables or, perhaps, to configure a Javascript function in your form.

<pre xml:space="preserve" xmlns=""><span style="font-size: 9pt;" xmlns="http://www.w3.org/1999/xhtml">Syntax: <Variable Name="uniqueName" Value="variableValue" DataType="string|Int32|Int64|boolean|..."/></span></pre>

The name you provide the variable is used just like column names are used with your data commands. You can bind controls to the variable by specifying the variable's Name as the control's DataField property. The Value can be a hard-coded value or one of XMod Pro's tokens - like [[Portal:ID]]. When using a token, ensure that the Value is delimited with single-quotes rather than double quotes. Finally, the DataType property allows you to specify the type of value the variable contains. The default data type is String.

Variable tags are typically placed at the top of each form.

**Example:**

<pre xml:space="preserve" xmlns=""><AddForm>  
  <span style="color: #ff0000;"><Variable Name="thePortalId" Value='[[Portal:ID]]' DataType="Int32" /></span> 
 <SubmitCommand CommandText="INSERT INTO MyTable (Name,PortalId) VALUES(@Name,<span style="color: #ff0000;">@thePortalId</span>)" />
  ...
  <TextBox Id="txtName" DataField="Name" DataType="String" />
  ...
</AddForm>  
  </pre>

[Back to top](#top)

## Example

<div xmlns="">`<AddForm>`  
`  <SelectCommand CommandText="SELECT @FirstName AS FirstName, @LastName AS LastName,  
                              'AZ' AS StateId">  
    <Parameter Name="FirstName" Value='[[User:FirstName]]' DefaultValue="" />  
    <Parameter Name="LastName" Value='[[User:LastName]]' DefaultValue="" />  
  </SelectCommand>`</div>

<div xmlns="">  
`  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName, StateId)  
                              VALUES(@FirstName, @LastName, @StateId)" />`</div>

<div xmlns="">`  
  <ControlDataSource Id="dsStates" ConnectionString="(your connection string here)"  
      CommandText="SELECT StateName, StateId FROM States ORDER BY StateName ASC" />`  
`  <table>`  
`    <tr>`  
`      <td>`  
`        <Label For="txtFirstName" Text="First Name" />`  
`        <Textbox Id="txtFirstName" DataField="FirstName" DataType="string" />`  
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
`        <DropDownList Id="ddlState" DataField="StateId" DataType="int32"  
           DataSourceId="dsStates" DataTextField="StateName" DataValueField="StateId" />`  
`       </td>`  
`    </tr>`  
    <tr>`  
`      <td colspan="2">`  
`        <AddButton Text="Add"/> <CancelButton Text="Cancel"/>`  
`      </td>`  
`    </tr>`  
`  </table>`  
`  <Email To="``me@mysite.com``" From="server@mysite.com" Subject="New User Added"` `Format="html">`  
`    <Content>`  
`     A new user has been added:<br />`  
`     FirstName: [[FirstName]]<br />`  
`      LastName: [[LastName]]`  
`    </Content>`  
`  </Email>`  
`</AddForm>`  

`<EditForm>`  
`  <SelectCommand CommandText="SELECT * FROM Users WHERE UserId = @UserId AND PortalId = @PID">  
    <Parameter Name="PID" Value='[[Portal:ID]]' />  
  </SelectCommand>`</div>

<div xmlns="">  
`  <SubmitCommand CommandText="UPDATE Users SET FirstName=@FirstName, LastName=@LastName, StateId=@StateId WHERE UserId=@UserId" />`  
</div>

<div xmlns="">``  <ControlDataSource Id="dsStates" ConnectionString="(your connection string here)"  
      CommandText="SELECT StateName, StateId FROM States ORDER BY StateName ASC" />``</div>

<div xmlns="">  
`  <table>`  
`    <tr>`  
`      <td>`  
`        <Label For="txtFirstName" Text="FirstName" />`  
`        <TextBox Id="txtFirstName" DataField="FirstName" DataType="string" />`  
`      </td>`  
`    </tr>`  
`    <tr>`  
`      <td>`  
`        <Label For="txtLastName" Text="Last Name" />`  
`        <TextBox Id="txtLastName" DataField="LastName" DataType="string" />`  
`      </td>`  
`    </tr>`  
``    <tr>`  
`      <td>`  
`        <Label For="ddlState" Text="State" />`  
`        <Dropdownlist Id="ddlState" DataField="StateId" DataType="int32"  
           DataSourceId="dsStates" DataTextField="StateName" DataValueField="StateId" />`  
`      </td>`  
`    </tr>`  
    <tr>`  
`      <td colspan="2">`  
`        <UpdateButton Text="Update"/>&nbsp;&nbsp;<CancelButton text="Cancel" />`  
`      </td>`  
`    </tr>`  
`  </table>`  
`  <TextBox Id="txtUserId" DataField="UserId" DataType="int32" Visible="false" />`  
`</EditForm>  

<AddSuccessTemplate>  
  <ItemTemplate>  
    <h1>Form Submission Successful</h1>  
    <p>Thanks for your submission, [[FirstName]]. We'll email you once we've completed the review process</p>  
    <xmod:ContinueButton Text="Continue" />  
  </ItemTemplate>  
</AddSuccessTemplate>  

<EditSuccessTemplate>  
  <ItemTemplate>  
    <h1>Record Update Successful</h1>  
    <p>Thanks for updating your submission, [[FirstName]]. We'll email you once we've completed the review process</p>  
    <xmod:ContinueButton Text="Continue" />  
  </ItemTemplate>  
</EditSuccessTemplate>  
`</div>

[Back to top](#top)