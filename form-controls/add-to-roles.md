---
id: form-add-to-roles
title: AddToRoles
category: User Actions
context: form
summary: >-
  In the example below, we're using a `<Variable>` tag to retrieve the current
  user's ID and make it available to the `<AddToRoles>` tag.
keywords:
  - add
  - roles
  - form
---
# `<AddToRoles>`

**New to Version 4.0** The AddToRoles tag will add a user to one or more DotNetNuke security roles after the form has been successfully submitted.

## Syntax
```html
<AddToRoles
    Culture="locale-id"
    EndDate="date"
    If="basic conditional equality expression"
    RoleDelimiter="|"
    RoleNames="delimited list of DNN roles"
    StartDate="date" 
    UserId="integer" 
/>
```

## Remarks

*   The AddToRoles action is only executed if the form has been successfully submitted. If there is a validation error or an error is thrown from the database, the action will not be performed.  

*   **Order Is Important**: Action tags are executed sequentially, so the order they appear within the form can be important. As an example, if one action fails with an error, all actions prior to the failed action will have executed. Those that occur after the failed action will not be executed. Additionally, some actions may have the ability to modify form values (this modification occurs after any form data has been sent to the database) - i.e. process form values, do calculations on them, transform them, even add and remove values from the list. Those changes will affect any Action tags that are executed downstream that use Field tokens.  

*   **Using Tokens**: Unlike most form tags, which evaluate their tokens when the form is loaded, Action tags evaluate their tokens when they're executed (after successful form submission). This means that values passed into the form such as URL parameters will need to be stored in a hidden form control (typically a TextBox with its Visibility property set to False). On the other hand, this enables Action tags to use Field tokens as their property values so these tags can use values input by the user in the form.  

*   **Culture**: optional. Specify a locale id (e.g. en-us, en-gb, de-de, etc.) if the supplied Start/End date properties are being input in that locale. If omitted, the Start/End dates will be parsed in accordance with the system's current locale. Field tokens may be used to populate this property. New to version 4.1  

*   **EndDate**: optional. When specified, this is the date the user will be removed from the role - i.e. the Expiration Date. Field tokens may be used to populate this property. New to version 4.1  

*   **If**: optional. This is a basic equality expression. When it evaluates to true, the AddToRoles action will be executed. If it evaluates to false, the AddToRoles action will not be executed. This is a good way to add a user to a role only if some value on the form has been set. For instance, you could add someone to the Newsletter role only if they check a box on the form confirming that they want your newsletter. New to version 4.1  

    `<AddToRoles If='[[SignMeUp]] = True' RoleNames="Newsletter" UserId='[[uid]]' />`  

    :::tip NOTE
    Comparisons are text-only and are not case-sensitive. You can test for equality using the "=" operator or inequality using the "<>" operator.
    :::

*   **RoleDelimiter**: optional. When listing more than one Role Name in the `RoleNames` property, this value determines what character is used to separate them. By default, the values is the pipe `|` character. Often users will set the RoleDelimiter to the comma `,` character.

*   **RoleNames**: Required. One or more DotNetNuke security role names you want to add the user to. If more than one role is specified, separate them with the pipe `|` character (by default) or the character specified in the `RoleDelimiter` property. Field tokens may be used to populate this property.  

*   **StartDate**: optional. When specified, this is the date on which the user will be placed in the role - i.e. the Effective Date. Field tokens may be used to populate this property. New to version 4.1  

*   **UserId**: Required. The unique numeric user identifier assigned by DotNetNuke to the user you want to add to a role. Field tokens may be used to populate this property.  


## Example

In the example below, we're using a `<Variable>` tag to retrieve the current user's ID and make it available to the `<AddToRoles>` tag. The variable has a name of "uid" and we set the UserId property of the `<AddToRoles>` tag to `[[uid]]`. Since we are specifying a comma-delimited set of roles, we specify a `RoleDelimiter` of comma `,` and separate the roles in the `RoleNames` property with commas. If we didn't set the `RoleDelimiter` property, we would, instead, need to separate our role names with the pipe `|` like so: `RoleNames="Role1|Editors"`.

```html {4}
<AddForm>  
  <Variable Name="uid" Value='[[User:Id]]' />  
  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName) VALUES(@FirstName, @LastName)" />  
  <AddToRoles RoleNames="Role1,Editors" UserId='[[uid]]' RoleDelimiter="," />  
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
