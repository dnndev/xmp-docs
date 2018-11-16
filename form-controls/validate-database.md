# <Validate Type="database">





The Validate tag whose type is set to "Database" is referred to as a Database Validator and is used to display error messages thrown from the database.



## Syntax

<div class="Code" xmlns="http://www.w3.org/1999/xhtml">`<Validate`  
``    CssClass="_string_"  
``Text="_string_"  
    Type="Database"``  
`/> `</div>

 

## Remarks

The database validator is a special type of `<Validate>` tag. When the "type" attribute is set to **Database**, the control prevents the form from being submitted if the database throws an error or a value is returned via a specially-named output parameter. Unlike other <span style="font-family: monospace;"><Validate></span> tags, the database validator is not associated with a specific form control and only one is allowed per form. The database validator is used to display error messages returned from the database. These can be actual errors thrown by the database or a friendly error message returned using the specially named ERROR output parameter.

*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **Text**: This text that will be displayed where your validation fails. If you have a <span style="font-family: monospace;" xmlns="http://www.w3.org/1999/xhtml"><ValidationSummary></span> tag on your form then the error message will be displayed there. If this validator has not been placed in your form, the message will still be displayed using the default error reporting mechanism.  

*   **Type**: When the "type" attribute is set to **Database**, the control prevents the form from being submitted if the database throws an error or a value is returned via a specially-named output parameter. Unlike other <span style="font-family: monospace;" xmlns="http://www.w3.org/1999/xhtml"><Validate></span> tags, the database validator is not associated with a specific form control and only one is allowed per form.

**Passing a friendly error message back to the form**: In some cases your stored procedure may want to inform the user that the data they submitted is invalid in some way. A good example is if a user is choosing a Team Name for a sports league and you want to ensure that no two Team Names are the same. If the user submits a name that already exists, you'd want to inform them of that, allowing them to choose a different name. Here's how you'd do that:

1.  Set the `<SubmitCommand>` tag's `CommandType` property to: `StoredProcedure`  

2.  Add an OUTPUT parameter to the `<SubmitCommand>`. It ***must* be named ERROR** and **its direction must be set to Output** like so:  
    `<Parameter Name="ERROR" DataType="String" Size="250" Direction="Output" />`  

3.  Optionally (though you will usually do this), add a `<Validate Type="Database" />` tag to your form.  

4.  Optionally add a `<ValidationSummary>` tag to your form if you don't already have one.  

5.  If you don't use the Validate/ValidationSummary combination of tags, the error will be reported to the end user using the standard XMod Pro reporting mechanisms.  

6.  In your stored procedure, set the @ERROR parameter to be an OUTPUT parameter and set its value to whatever message you want to return.  



## Example

<div>

<pre xml:space="preserve"><AddForm></pre>

<pre xml:space="preserve">  <SubmitCommand CommandText="XMP_ReturnValueTester" CommandType="StoredProcedure"></pre>

<pre xml:space="preserve">    <Parameter Name="FirstName" DataType="String" Size="25" /></pre>

<pre xml:space="preserve">    <Parameter Name="LastName" DataType="String" Size="25" /></pre>

<pre xml:space="preserve">  </SubmitCommand></pre>

<pre xml:space="preserve">  <div class="xmp-Authors xmp-form"></pre>

<pre xml:space="preserve">    <div class="xmp-form-row"></pre>

<pre xml:space="preserve">      <Label For="FirstName" Text="First Name" CssClass="NormalBold xmp-form-label" /></pre>

<pre xml:space="preserve">      <TextBox id="FirstName" DataField="FirstName" DataType="string" MaxLength="25" Width="165" /></pre>

<pre xml:space="preserve">    </div></pre>

<pre xml:space="preserve">    <div class="xmp-form-row"></pre>

<pre xml:space="preserve">      <Label For="LastName" Text="Last Name" CssClass="NormalBold xmp-form-label" /></pre>

<pre xml:space="preserve">      <TextBox Id="LastName" DataField="LastName" DataType="Decimal" MaxLength="25" Width="165" /></pre>

<pre xml:space="preserve">    </div></pre>

<pre xml:space="preserve">    <div class="kbxmFormRow"></pre>

<pre xml:space="preserve">      <span class="xmp-form-label">&nbsp;</span></pre>

<pre xml:space="preserve">      <AddButton Text="Add" CssClass="CommandButton xmp-button"  /> <CancelButton Text="Cancel" CssClass="CommandButton xmp-button" /></pre>

<pre xml:space="preserve">      <br /></pre>

<pre xml:space="preserve">    </div></pre>

<pre xml:space="preserve">   <span style="color: #ff0000;"><Validate Type="Database" /></span></pre>

<pre xml:space="preserve">      <ValidationSummary DisplayMode="BulletList"  CssClass="NormalRed xmp-validation-summary" /></pre>

<pre xml:space="preserve">  </div></pre>

<pre xml:space="preserve"></AddForm></pre>

Here's a sample stored procedure that is guaranteed to throw an error:

<pre xml:space="preserve">CREATE PROCEDURE [dbo].[XMP_DBThrownError_Tester]</pre>

<pre xml:space="preserve">  @FirstName nvarchar(255),</pre>

<pre xml:space="preserve">  @LastName nvarchar(255)</pre>

<pre xml:space="preserve">AS</pre>

<pre xml:space="preserve">BEGIN</pre>

<pre xml:space="preserve">  RAISERROR('Example Error Thrown',18,1)</pre>

<pre xml:space="preserve">END</pre>

Here's what the example form looks like after the user has submitted the form and the stored procedure has thrown the error:

<pre xml:space="preserve">![](Resources/Images/Validate_Database_InAction.png)</pre>

</div>

