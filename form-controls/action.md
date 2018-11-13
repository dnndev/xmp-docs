# <Action>

<a name="top" xmlns="http://www.w3.org/1999/xhtml"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

**New to Version 4.0!** The Action tag allows you to execute custom server-side functionality after the form has been successfully submitted.

<a name="syntax" xmlns="http://www.w3.org/1999/xhtml"></a>

## Syntax

    <Action
        Assembly="Name of DLL containing action - do not include the .dll extension" 
        Namespace="Namespace pointing to the action class" > 

<pre xmlns="" xml:space="preserve">      <Property Name="_string_" Value="_string_" />
</pre>

<pre xmlns="" xml:space="preserve">      ...Additional Property Tags as needed...</pre>

    </Action>

 <a name="remarks" xmlns="http://www.w3.org/1999/xhtml"></a>

## Remarks

*   The Action tag is only executed if the form has been successfully submitted. If there is a validation error or an error is thrown from the database, the action will not be performed. Note that the Action is executed after the SubmitCommand is executed, so it cannot impact the database call itself.  

*   **Order Is Important**: Action tags are executed sequentially, so the order they appear within the form can be important. As an example, if one action fails with an error, all actions prior to the failed action will have executed. Those that occur after the failed action will not be executed. Additionally, some actions may have the ability to modify form values (this modification occurs after any form data has been sent to the database) - i.e. process form values, do calculations on them, transform them, even add and remove values from the list. Those changes will affect any Action tags that are executed downstream that use Field tokens.  

*   **Using Tokens**: Unlike most form tags, which evaluate their tokens when the form is loaded, Action tags evaluate their tokens when they're executed (after successful form submission). This means that values passed into the form such as URL parameters will need to be stored in a hidden form control (typically a TextBox with its Visibility property set to False). On the other hand, this enables Action tags to use Field tokens as their property values so these tags can use values input by the user in the form.  

*   **Assembly**: Required. The file name of the DLL in your /bin directory that contains the action class.  

*   **Namespace**: Required. The full namespace that points to the action class in your DLL.  

*   **Creating a Custom Action**: If you are a .NET programmer, you can create your custom action by performing the following steps:  

    1.  Create a Class Library project in Visual Studio  

    2.  Reference the DotNetNuke.dll, KnowBetter.XModPro.Common.dll files in your project  

    3.  Create the class that will contain your custom action  

    4.  Add a method called "Execute" and set it to accept a PortalModuleBase object and KnowBetter.XModPro.Common.XItem object like so:  

        ` Public Sub Execute(pmb As DotNetNuke.Entities.Modules.PortalModuleBase, ByRef xi As KnowBetter.XModPro.Common.XItem)`  
        `     ' Do something very cool and interesting here.`  
        `     ' pmb will contain useful environmental data like the current PortalId and current UserId.`  
        `     ' xi will contain a list of values from the form just submitted. Note: They are passed by reference so you can modify the values`  
        `     ' and add values to the list. At this point, the data will have been saved to the database already. However, your modified values`  
        `     ' can be used by subsequent <Action> tags as well as <Email> tags and user redirection.`  
        ` End Sub`  

    5.  Compile and place the DLL in your site's /bin directory.  

*   **Property Tags**: These are optional child tags that allow you to specify one or more attributes that will be set when the action is executed.  

[Back to top](#top)<a name="example" xmlns="http://www.w3.org/1999/xhtml"></a>

## Example

<div xmlns="">`<AddForm>`  
`  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName) VALUES(@FirstName, @LastName)" />`  
`  <Action Assembly="MyCompany.XMPActions" Namespace="MyCompany.XModPro.Actions.MyCustomAction" />`  
`  <table>`  
`    <tr>`  
`      <td>`  
`         <Label For="txtFirstName" Text="First Name" />`  
`         <TextBox Id="txtFirstName" DataField="FirstName" DataType="string" />`  
`       </td>`  
`    </tr>`  
`    <tr>`  
`      <td>`  
`        <Label For="txtLastName" Text="Last Name" />`  
`        <TextBox Id="txtLastName" DataField="LastName" DataType="string" />`  
`      </td>`  
`    </tr>`  
`    <tr>`  
`      <td colspan="2">`  
`        <AddButton Text="Add"/> <CancelButton Text="Cancel"/>`  
`      </td>`  
`    </tr>`  
`  </table>  
</AddForm>`</div>

[Back to top](#top)