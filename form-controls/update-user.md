# `<UpdateUser>`

**New to Version 4.0!** The UpdateUser tag will register a user in the DNN site and optionally add that user to one or more DotNetNuke security roles after the form has been successfully submitted.

::: warning
You MUST take care to properly validate user input. Additionally you should place this tag only on forms that are properly secured so that only users you intend to have access can use the form.
:::

## Syntax
```html
<UpdateUser
    Approved="True|False"
    City="string"
    Country="string"
    DisplayName="string"
    Email="string"
    ErrMsgUserNotFound="string"
    ErrMsgInvalidPassword="string"
    ErrMsgOther="string"
    FirstName="string"
    LastName="string"
    NewPassword="string"
    OldPassword="string"
    PostalCode="string"
    Region="string"
    Street="string" 
    Telephone="string"
    Unit="string"
    UpdatePasswordOnNextLogin="True|False"
    UserId="integer"> 
      (NOTE: Property tags are optional)
      <Property Name="string" Value="string" />
      ...Additional Property Tags as needed...
</UpdateUser>
```

## Remarks

*   The `<UpdateUser>` action is only executed if the form has been successfully submitted. If there is a validation error or an error is thrown from the database, the action will not be performed.  

*   **Order Is Important**: Action tags are executed sequentially, so the order they appear within the form can be important. As an example, if one action fails with an error, all actions prior to the failed action will have executed. Those that occur after the failed action will not be executed. Additionally, some actions may have the ability to modify form values (this modification occurs after any form data has been sent to the database) - i.e. process form values, do calculations on them, transform them, even add and remove values from the list. Those changes will affect any Action tags that are executed downstream that use Field tokens.  

*   **Using Tokens**: Unlike most form tags, which evaluate their tokens when the form is loaded, Action tags evaluate their tokens when they're executed (after successful form submission). This means that values passed into the form such as URL parameters will need to be stored in a hidden form control (typically a TextBox with its Visibility property set to False). On the other hand, this enables Action tags to use Field tokens as their property values so these tags can use values input by the user in the form.  

*   **Approved**: Optional. True or False. If set to True, the user will be auto-approved when the user record is updated. If False, the user will be un-approved when the record is updated. If the property is not set, no change will take place.  

*   **City**: Optional. The city in which the user resides. If the property is not set, no change will take place.  

*   **Country**: Optional. The country in which the user resides. If the property is not set, no change will take place.  

*   **DisplayName**: Optional. The name to display when displaying the user's full name. Unlike the AddUser tag which attempts to create a DisplayName from the first and last names of the user when the DisplayName is not set, in the UpdateUser tag, if the property is not set, no change will take place.  

*   **Email**: Required. The user's email address. If the property is not set or if the property evaluates to an empty string, no change will take place.  

*   **ErrMsgUserNotFound**: Optional. The message to display when the user enters an invalid user. Takes a `{0}` placeholder that will be replaced with user ID.  

*   **ErrMsgInvalidPassword**: Optional. The message to display when the user enters an invalid password.  

    **ErrMsgOther**:Optional. The message to display when an unspecified error occurs. Takes a `{0}` placeholder that will be replaced with user ID.  

*   **FirstName**: Required. The user's first name. If the property is not set or if the property evaluates to an empty string, no change will take place.  

*   **LastName**: Required. The user's last name. If the property is not set or if the property evaluates to an empty string, no change will take place.  

*   **NewPassword**: The new password for the user account that will be updated. If the property is not set or if the property evaluates to an empty string or if OldPassword is not supplied (or is not correct), no change will take place.  

*   **OldPassword**: Required if NewPassword is supplied. The existing password for the user account that will be updated.  

*   **PostalCode**: Optional. The postal code (zip code in the US) associated with the user's address. If the property is not set, no change will take place.  

*   **Property Tags**: These are optional child tags that allow you to specify one or more custom profile properties that will be set when the user is created.  

*   **Region**: Optional. The region (state in the US) where the user is located. If the property is not set, no change will take place.  

*   **Street**: Optional. The street address of the user.  

*   **Telephone**: Optional. The user's telephone number. If the property is not set, no change will take place.  

*   **Unit**: Optional. The unit or apartment number associated with the user's address. If the property is not set, no change will take place.  

*   **UpdatePasswordOnNextLogin**: Optional. True or False. When true, the user will be prompted to update his/her password when logging in next. If the property is not set, no change will take place.  

*   **UserId**: Required. A numeric value that uniquely identifies the user account to be updated. This must be the UserID assigned to the user when the account was created. You can use the `[[User:Id]]` token to get the current user's ID or you can use a field token like: `[[User]]` to retreive a valid user ID from a form control (perhaps a drop-down list that contains users and their ID's).  

## Example
```html {5-8}
<AddForm>
  <SelectCommand CommandText="SELECT @UserId AS UserId">
    <Parameter Name="UserId" Value='[[User:ID]]' DataType="Int32" DefaultValue="-1"/>
   </SelectCommand>
    <UpdateUser Email='[[Email]]'
                FirstName='[[FName]]' 
                LastName='[[LName]]' 
                UserId='[[UserId]]' />
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
   <TextBox Id="txtUserId" Visible="False" DataField="UserId" DataType="Int32" />
</AddForm>
```
