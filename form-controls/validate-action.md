---
id: form-validate-action
title: Validate Type="Action"
category: Validation
context: form
summary: >-
  The Validate tag whose type is set to "action" is referred to as an Action
  Validator and is used to display special error messages thrown from the action
  tags in your form.
keywords:
  - validate
  - type="
  - action"
  - form
---
# `<Validate Type="Action">`

The Validate tag whose type is set to "action" is referred to as an Action Validator and is used to display special error messages thrown from the action tags in your form.

## Syntax
```html
<Validate 
    CssClass="string"
    Text="string"
    Type="Action" 
/> 
```
 

## Remarks

The action validator is a special type of `<Validate>` tag. When the "type" attribute is set to **Action**, the control will display the error message thrown by an action tag such as `<AddUser>`. An example would be if the user attempts to register with a username that already exists in the site. A duplicate username error will be thrown and an appropriate message will be displayed by this validator. If you have a `<ValidationSummary>` tag on your form then the error message will be displayed there. If this validator has not been placed in your form, the message will still be displayed using the default error reporting mechanism.

*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **Text**: This text that will be displayed where your validation fails. If you have a `<ValidationSummary>` tag on your form then the error message will be displayed there. If this validator has not been placed in your form, the message will still be displayed using the default error reporting mechanism.  

*   **Type**: When the `Type` attribute is set to **Action**, the control will display the error message thrown by an action tag such as `<AddUser>`.



## Example
```html {53,58}
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
        <AddButton Text="Add" /> <CancelButton Text="Cancel" />
        <Validate Type="Action" />
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

In the example above, we've highlighted the three key components at work here - the AddUser tag, the Validate tag, and the ValidationSummary tag. As you can see, there isn't much you have to do to use the action validator. Just place it on your form and, ideally, also have a ValidationSummary tag on the form for displaying any errors.

</div>

