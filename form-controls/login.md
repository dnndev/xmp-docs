# `<Login>`

**New to Version 4.0!** The Login tag will log the specified user into the DNN website.

## Syntax
```html
<Login
    FirstNameField="string"
    LastNameField="string"
    Password="string"
    RememberMe="True|False"
    UserIdField="string"
    Username="string"
    UsernameField="string" />
```
 

## Remarks

*   The Login action is only executed if the form has been successfully submitted. If there is a validation error or an error is thrown from the database, the action will not be performed.  

*   **Order Is Important**: Action tags are executed sequentially, so the order they appear within the form can be important. As an example, if one action fails with an error, all actions prior to the failed action will have executed. Those that occur after the failed action will not be executed. Additionally, some actions may have the ability to modify form values (this modification occurs after any form data has been sent to the database) - i.e. process form values, do calculations on them, transform them, even add and remove values from the list. Those changes will affect any Action tags that are executed downstream that use Field tokens. In this manner, actions can be chained together with previous actions providing new or updated data for actions downstream.  

*   **Using Tokens**: Unlike most form tags, which evaluate their tokens when the form is loaded, Action tags evaluate their tokens when they're executed (after successful form submission). This means that values passed into the form such as URL parameters will need to be stored in a hidden form control (typically a TextBox with its Visibility property set to False). On the other hand, this enables Action tags to use Field tokens as their property values so these tags can use values input by the user in the form.  

*   **FirstNameField**: Optional. If you would like the tag to pass the user's FirstName along to subsequent actions, specify the field name to use here. Later actions can then use that name in their field tokens. If not specified, this information will not be inserted into the action stream for use by later action tags.  

*   **LastNameField**: Optional. If you would like the tag to pass the user's LastName along to subsequent actions, specify the field name to use here. Later actions can then use that name in their field tokens. If not specified, this information will not be inserted into the action stream for use by later action tags.  

*   **Password**: REQUIRED: The password for the user account that will be logged-in. Typically this will be a Field Token that is bound to a `<Password>` form control.  

*   **RememberMe**: This attribute stores the login information in a cookie and is the equivalent to DNN's login page Remember Me checkbox. Default set to "True".  

*   **UserIdField**: Optional. If you would like the tag to pass the user's UserId along to subsequent actions, specify the field name to use here. Later actions can then use that name in their field tokens. If not specified, this information will not be inserted into the action stream for use by later action tags.  

*   **Username**: REQUIRED: The username of the account to be logged in. Typically this will be a Field Token bound to a `<TextBox>` form control.  

*   **UsernameField**: Optional. If you would like the tag to pass the user's Username along to subsequent actions, specify the field name to use here. Later actions can then use that name in their field tokens. If not specified, this information will not be inserted into the action stream for use by later action tags.  



## Example
```html {2}
<AddForm>
  <Login Username='[[Uname]]' Password='[[Pword]]' UsernameField="UsrName" UserIdField="UsrId" />
  <Redirect Target="~/Home.aspx?uid=[[UsrId]]&un=[[UsrName]]" />
  
  <Label For="Uname" Text="Username:" />
  <TextBox Id="Uname" DataField="Uname" DataType="string" /> <br />

  <Label For="Pword" Text="Password:" />
  <Password Id="Pword" DataField="Pword" DataType="string" /> <br />

  <AddButton Text="Add" /> &nbsp;<CancelButton Text="Cancel" />
</AddForm>
```

In the example above note how we're using Field Tokens (`[[Uname]]` and `[[Pword]]`) to grab the data from the form controls. Additionally, we're telling the Login tag to add the user's Username and UserID to any tags "downstream". The field names that will be used are `UsrName` for the Username and `UsrId` for the UserID. There is one "downstream" action - the `<Redirect>` tag. It's using those fields in its `Target` property to feed the data into the URL. NOTE that in this specific case (and unlike most other XMod Pro forms) we can simply put the field tokens `[[UsrName]]` and `[[UsrId]]` directly into the target property without having to use the JOIN() function.

