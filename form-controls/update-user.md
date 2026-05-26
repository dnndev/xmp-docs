---
id: form-update-user
title: UpdateUser
category: User Actions
context: form
summary: After a form submits successfully, updates an existing DNN user's profile information and optionally changes their password.
keywords:
  - update
  - user
  - form
since: '4.0'
related:
  - form-add-user
  - form-login
  - form-add-to-roles
---

# `<UpdateUser>`

After a form submits successfully, updates an existing DNN user identified by `UserId`. Only the properties you set are touched — properties left off the tag are left unchanged on the user record. Custom DNN profile properties can be set via `<Property>` child tags.

::: warning Validate user input — and lock the form down
The form must verify that the current user is allowed to edit the target `UserId`. Without that check, anyone who can reach the form could overwrite anyone else's profile.
:::

::: info Action timing
Action tags only run when the form submits successfully. They evaluate their tokens at that point — not when the form loads — so `[[FieldName]]` tokens read user input. Actions run in document order; an action that fails throws away every action listed below it.
:::

## Example

```html {5-8}
<AddForm>
  <SelectCommand CommandText="SELECT @UserId AS UserId">
    <Parameter Name="UserId" Value="[[User:Id]]" DataType="Int32" DefaultValue="-1" />
  </SelectCommand>
  <UpdateUser Email="[[Email]]"
              FirstName="[[FName]]"
              LastName="[[LName]]"
              UserId="[[UserId]]" />
  <table>
    <tr>
      <td>
        <Label For="txtFirstName" Text="First Name" />
        <TextBox Id="txtFirstName" DataField="FName" DataType="String" />
        <Validate Type="Required" Target="txtFirstName" Text="**" Message="First Name is required." />
      </td>
    </tr>
    <tr>
      <td>
        <Label For="txtLastName" Text="Last Name" />
        <TextBox Id="txtLastName" DataField="LName" DataType="String" />
        <Validate Type="Required" Target="txtLastName" Text="**" Message="Last Name is required." />
      </td>
    </tr>
    <tr>
      <td>
        <Label For="txtEmail" Text="Email" />
        <TextBox Id="txtEmail" DataField="Email" DataType="String" />
        <Validate Type="Required" Target="txtEmail" Text="**" Message="An email address is required." />
        <Validate Type="Email" Target="txtEmail" Text="**" Message="Please enter a valid email address." />
      </td>
    </tr>
    <tr>
      <td colspan="2"><AddButton Text="Save" /> <CancelButton Text="Cancel" /></td>
    </tr>
    <tr>
      <td colspan="2"><ValidationSummary DisplayMode="BulletList" HeaderText="Errors:" CssClass="NormalRed" /></td>
    </tr>
  </table>
  <TextBox Id="txtUserId" Visible="False" DataField="UserId" DataType="Int32" />
</AddForm>
```

## Properties

### Required

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [UserId](#prop-userid) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | integer \| token | | The DNN UserID of the user to update |

### User profile

Set only the properties you want to change. Properties left off the tag (or set to an empty string for most fields) are left untouched.

| Property | Values | Description |
|----------|--------|-------------|
| Email | email | New email address |
| FirstName | string | New first name |
| LastName | string | New last name |
| DisplayName | string | New display name |
| Approved | `True` `False` | When set, toggles the user's approved flag |
| UpdatePasswordOnNextLogin | `True` `False` | When set, toggles the prompt-on-next-login flag |
| Country | string | DNN profile: country |
| Region | string | DNN profile: region/state |
| City | string | DNN profile: city |
| PostalCode | string | DNN profile: zip / postal code |
| Street | string | DNN profile: street address |
| Unit | string | DNN profile: unit / apartment |
| Telephone | string | DNN profile: telephone |

### Password change

To change the user's password, supply both `OldPassword` and `NewPassword` — DNN requires the existing password to authorize the change.

| Property | Values | Description |
|----------|--------|-------------|
| OldPassword | string | The user's current password |
| NewPassword | string | The replacement password |

### Error messages

| Property | Default | Notes |
|----------|---------|-------|
| ErrMsgUserNotFound | "Unable to locate user with ID of '{0}'" | `{0}` is replaced with the supplied `UserId` |
| ErrMsgInvalidPassword | "Invalid or incorrect password supplied" | Thrown when the password change fails |
| ErrMsgOther | "An error occurred while trying to update user with ID of '{0}'" | Catch-all. `{0}` is replaced with the supplied `UserId` |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Child Tags

| Tag | Required | Description |
|-----|----------|-------------|
| [`<Property>`](#child-property) | optional | Sets a custom DNN profile property on the user |

### <span id="child-property">`<Property>`</span>

Sets a single custom profile property. Use one `<Property>` tag per property to set.

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| Name <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Profile property name (must already exist in DNN) |
| Value | string \| token | | New value |

## Property Details

*   <span id="prop-userid">**UserId**</span>: The DNN-assigned UserID of the account to update. Use `[[User:Id]]` to update the currently logged-in user, or a field token bound to a hidden `<TextBox>` to update the user identified by the form's data. The value must parse to an integer; otherwise `ErrMsgUserNotFound` is thrown.
