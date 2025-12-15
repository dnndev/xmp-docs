---
id: form-add-user
title: AddUser
category: User Actions
context: form
summary: >-
  You MUST take care to properly validate user input. Additionally you should
  place this tag only on forms that are properly secured so that only users you
  intend to have access can use the form. :::
keywords:
  - add
  - user
  - form
---
# `<AddUser>`

**New to Version 4.0!** The `<AddUser>` tag will register a user in the DNN site and optionally add that user to one or more DotNetNuke security roles after the form has been successfully submitted.

::: warning
You MUST take care to properly validate user input. Additionally you should place this tag only on forms that are properly secured so that only users you intend to have access can use the form.
:::

## Syntax
```html
<AddUser
    Approved="True|False"
    City="string"
    Country="string"
    DisplayName="string"
    Email="string"
    ErrMsgDuplicateEmail="string"
    ErrMsgDuplicateUser="string"
    ErrMsgDuplicateUsername="string"
    ErrMsgInvalidEmail="string"
    ErrMsgInvalidPassword="string"
    ErrMsgInvalidUsername="string"
    FirstName="string"
    LastName="string"
    Password="string"
    PostalCode="string"
    Region="string"
    RoleNames="comma-delimited list of DNN roles"
    Street="string"
    SendVerificationEmail="True|False" 
    Telephone="string"
    Unit="string"
    UpdatePasswordOnNextLogin="True|False"
    Username="string"> 
      (NOTE: Property tags are optional)
      <Property Name="string" Value="string" />
      ...Additional Property Tags as needed...
</AddUser>
```

## Remarks

*   The AddUser action is only executed if the form has been successfully submitted. If there is a validation error or an error is thrown from the database, the action will not be performed.  

*   Varying versions of DNN has caused fluctuations in how certain profile properties are created/modified on the user object. For example, if you find that a certain property isn’t working as expected, set it as a `<Property>` tag.  

*   **Order Is Important**: Action tags are executed sequentially, so the order they appear within the form can be important. As an example, if one action fails with an error, all actions prior to the failed action will have executed. Those that occur after the failed action will not be executed. Additionally, some actions may have the ability to modify form values (this modification occurs after any form data has been sent to the database) - i.e. process form values, do calculations on them, transform them, even add and remove values from the list. Those changes will affect any Action tags that are executed downstream that use Field tokens.  

*   **Using Tokens**: Unlike most form tags, which evaluate their tokens when the form is loaded, Action tags evaluate their tokens when they're executed (after successful form submission). This means that values passed into the form such as URL parameters will need to be stored in a hidden form control (typically a TextBox with its Visibility property set to False). On the other hand, this enables Action tags to use Field tokens as their property values so these tags can use values input by the user in the form.  

*   **Passing the New User ID Downstream**: If you want an action later in the sequence (like an `<AddToRoles>` or `<Redirect>` tag), the AddUser tag now passes a special value along with the other form values: __UserId (that's 2 underscore characters followed by the word UserId). You can use this as if it were a field token. New to version 4.1.  

*   **Approved**: Optional. True or False. The default value is False. If set to True, the user will be auto-approved when the user record is created.  

*   **City**: Optional. The city in which the user resides.  

*   **Country**: Optional. The country in which the user resides.  

*   **DisplayName**: Optional. The name to display when displaying the user's full name. If not supplied the control will attempt to combine the FirstName and LastName.  

*   **Email**: Required. The user's email address.  

*   **ErrMsgDuplicateEmail**: Optional. The message to display when the user enters a duplicate email.  

*   **ErrMsgDuplicateUser**: Optional. The message to display when the user enters a duplicate user.  

*   **ErrMsgDuplicateUsername**: Optional. The message to display when the user enters a duplicate username.  

*   **ErrMsgInvalidEmail**: Optional. The message to display when the user enters an invalid email.  

*   **ErrMsgInvalidPassword**: Optional. The message to display when the user enters an invalid password.  

*   **ErrMsgInvalidUsername** : Optional. The message to display when the user enters an invalid username.  

*   **FirstName**: Required. The user's first name.  

*   **LastName**: Required. The user's last name.  

*   **Password**: The password for the user account that will be created.  

*   **PostalCode**: Optional. The postal code (zip code in the US) associated with the user's address.  

*   **Property Tags**: These are optional child tags that allow you to specify one or more custom profile properties that will be set when the user is created.  

*   **Region**: Optional. The region (state in the US) where the user is located.  

*   **RoleNames**: Optional. One or more DotNetNuke security role names you want to add the user to. If more than one role is specified, separate them with commas.  

*   **SendVerificationEmail**: Optional. True or False. The default value is False. If set to True, this will trigger DNN to send a verification email to the user.  

*   **Street**: Optional. The street address of the user.  

*   **Telephone**: Optional. The user's telephone number.  

*   **Unit**: Optional. The unit or apartment number associated with the user's address.  

*   **UpdatePasswordOnNextLogin**: True or False. The default value is False. When True, the user will be prompted to update his/her password when logging in next.  

*   **Username**: Required. A unique name that will be associated with this user account.  

## Example
```html {2-4}
<AddForm>  
  <AddUser RoleNames="Role1,Editors" Email='[[Email]]'
      FirstName='[[FName]]' LastName='[[LName]]'  
      Username='[[Username]]' Password='[[Password]]' />  
  <table>  
    <tr>  
      <td>  
         <Label For="txtFirstName" Text="First Name" />  
         <TextBox Id="txtFirstName" DataField="FName" DataType="string" />  
         <Validate Type="Required" Target="txtFirstName" Text="**" Message="First Name is required." />
       </td>  
    </tr>  
    <tr>  
      <td>  
        <Label For="txtLastName" Text="Last Name" />  
        <TextBox Id="txtLastName" DataField="LName" DataType="string" />  
        <Validate Type="Required" Target="txtLastName" Text="**" Message="Last Name is required." />
      </td>  
    </tr>  
    <tr>  
      <td>  
        <Label For="txtEmail" Text="Email" />  
        <TextBox Id="txtEmail" DataField="Email" DataType="string" />  
        <Validate Type="Required" Target="txtEmail" Text="**" Message="An email address is required." />
        <Validate Type="Email" Target="txtEmail" Text="**" Message="Please enter a valid email address." />  
      </td>  
    </tr>  
    <tr>  
      <td>  
        <Label For="txtUsername" Text="Username" />  
        <TextBox Id="txtUsername" DataField="Username" DataType="string" />  
        <Validate Type="Required" Target="txtUsername" Text="**" Message="Please enter a Username." />
      </td>  
    </tr>  
    <tr>  
      <td>  
        <Label For="txtPassword" Text="Password" />  
        <Password Id="txtPassword" DataField="Password" DataType="string" />  
        <Validate Type="Required" Target="txtPassword" Text="**" Message="A Password is required." />
      </td>  
    </tr>  
    <tr>  
      <td>  
        <Label For="txtReEnterPassword" Text="Password" />  
        <Password Id="txtReEnterPassword" DataField="pw2" DataType="string" />  
        <Validate Type="Required" Target="txtReEnterPassword" Text="**" Message="Please re-enter your password." />
        <Validate Type="Compare" Target="txtPassword" CompareTarget="txtReEnterPassword" Text="**" Message="Your passwords don't match" />  
      </td>  
    </tr>
    <tr>  
      <td colspan="2">  
        <AddButton Text="Add"/> <CancelButton Text="Cancel"/>  
      </td>  
    </tr>  
    <tr>  
      <td colspan="2">  
        <ValidationSummary DisplayMode="BulletList" HeaderText="Errors:" CssClass="NormalRed" />  
      </td>  
    </tr>  
  </table>  
</AddForm>
```
