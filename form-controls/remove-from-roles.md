# `<RemoveFromRoles>`

**New to Version 4.0!** The RemoveFromRoles tag will remove a user from one or more DotNetNuke security roles after the form has been successfully submitted.

## Syntax
```html
<RemoveFromRoles
    RoleNames="comma-delimited list of DNN roles" 
    UserId="integer" 
/>
```



## Remarks

*   The RemoveFromRoles action is only executed if the form has been successfully submitted. If there is a validation error or an error is thrown from the database, the action will not be performed.  

*   **Order Is Important**: Action tags are executed sequentially, so the order they appear within the form can be important. As an example, if one action fails with an error, all actions prior to the failed action will have executed. Those that occur after the failed action will not be executed. Additionally, some actions may have the ability to modify form values (this modification occurs after any form data has been sent to the database) - i.e. process form values, do calculations on them, transform them, even add and remove values from the list. Those changes will affect any Action tags that are executed downstream that use Field tokens.  

*   **Using Tokens**: Unlike most form tags, which evaluate their tokens when the form is loaded, Action tags evaluate their tokens when they're executed (after successful form submission). This means that values passed into the form such as URL parameters will need to be stored in a hidden form control (typically a TextBox with its Visibility property set to False). On the other hand, this enables Action tags to use Field tokens as their property values so these tags can use values input by the user in the form.  

*   **RoleNames**: Required. One or more DotNetNuke security role names you want to remove the user from. If more than one role is specified, separate them with commas.  

*   **UserId**: Required. The unique numeric user identifier assigned by DotNetNuke to the user you want to remove from a role. You can use the `[[User:Id]]` token to get the current user's ID or you can use a field token that might store a user id like: `[[User]]` to retrieve a valid user ID from a form control whose DataField is set to User.  



## Example
```html {4}
<AddForm>
  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName) 
                              VALUES(@FirstName, @LastName)" />
  <RemoveFromRoles RoleNames="Role1,Editors" UserId='[[User:Id]]' />
  <table>
    <tr>
      <td>
         <Label For="txtFirstName" Text="First Name" /> 
         <TextBox Id="txtFirstName" DataField="FirstName" DataType="string" />
       </td>
    </tr>
    <tr>
      <td>
        <Label For="txtLastName" Text="Last Name" />
        <TextBox Id="txtLastName" DataField="LastName" DataType="string" />
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <AddButton Text="Add"/> <CancelButton Text="Cancel"/>
      </td>
    </tr>
  </table>
</AddForm>
```
