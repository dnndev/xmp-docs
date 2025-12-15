---
id: form-remove-from-roles
title: RemoveFromRoles
category: User Actions
context: form
summary: >-
  In the example below, we are removing the currently logged-in user (specified
  by the `[[User:Id]]` token) from the "Role1" and "Editors" roles.
keywords:
  - remove
  - from
  - roles
  - form
---
# `<RemoveFromRoles>`

**New to Version 4.0!** The RemoveFromRoles tag will remove a user from one or more DotNetNuke security roles after the form has been successfully submitted.

## Syntax
```html
<RemoveFromRoles
    RoleDelimiter="|"
    RoleNames="delimited list of DNN roles" 
    UserId="integer" 
/>
```



## Remarks

*   The RemoveFromRoles action is only executed if the form has been successfully submitted. If there is a validation error or an error is thrown from the database, the action will not be performed.  

*   **Order Is Important**: Action tags are executed sequentially, so the order they appear within the form can be important. As an example, if one action fails with an error, all actions prior to the failed action will have executed. Those that occur after the failed action will not be executed. Additionally, some actions may have the ability to modify form values (this modification occurs after any form data has been sent to the database) - i.e. process form values, do calculations on them, transform them, even add and remove values from the list. Those changes will affect any Action tags that are executed downstream that use Field tokens.  

*   **Using Tokens**: Unlike most form tags, which evaluate their tokens when the form is loaded, Action tags evaluate their tokens when they're executed (after successful form submission). This means that values passed into the form such as URL parameters will need to be stored in a hidden form control (typically a TextBox with its Visibility property set to False). On the other hand, this enables Action tags to use Field tokens as their property values so these tags can use values input by the user in the form.  

*   **RoleDelimiter**: optional. When listing more than one Role Name in the `RoleNames` property, this value determines what character is used to separate them. By default, the values is the pipe `|` character. Often users will set the RoleDelimiter to the comma `,` character.

*   **RoleNames**: Required. One or more DotNetNuke security role names you want to add the user to. If more than one role is specified, separate them with the pipe `|` character (by default) or the character specified in the `RoleDelimiter` property. Field tokens may be used to populate this property.  

*   **UserId**: Required. The unique numeric user identifier assigned by DotNetNuke to the user you want to remove from a role. You can use the `[[User:Id]]` token to get the current user's ID or you can use a field token that might store a user id like: `[[User]]` to retrieve a valid user ID from a form control whose DataField is set to User.  



## Example

In the example below, we are removing the currently logged-in user (specified by the `[[User:Id]]` token) from the "Role1" and "Editors" roles. Since we are specifying a comma-delimited set of roles, we specify a `RoleDelimiter` of comma `,` and separate the roles in the `RoleNames` property with commas. If we didn't set the `RoleDelimiter` property, we would, instead, need to separate our role names with the pipe `|` like so: `RoleNames="Role1|Editors"`.

```html {4}
<AddForm>
  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName) 
                              VALUES(@FirstName, @LastName)" />
  <RemoveFromRoles RoleNames="Role1,Editors" UserId='[[User:Id]]' RoleDelimiter=","/>
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
