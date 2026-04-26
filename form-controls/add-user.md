---
id: form-add-user
title: AddUser
category: User Actions
context: form
summary: After a form submits successfully, registers a new user in DNN. Optionally adds the user to one or more roles and sets custom profile properties.
keywords:
  - add
  - user
  - form
since: '4.0'
related:
  - update-user
  - login
  - add-to-roles
---

# `<AddUser>`

After a form submits successfully, registers a new user in DNN with the supplied profile information. Optionally adds the user to one or more security roles via `RoleNames`, and sets custom profile properties via `<Property>` child tags.

::: warning Validate user input — and lock the form down
Public registration forms are a target for abuse. Always validate the form's inputs and protect the form so only the audience you intend can submit it.
:::

::: info Passing the new UserID downstream
On success, XMP adds a `__UserId` token (two underscores + `UserId`) to the form data, so later action tags (e.g. `<AddToRoles>`, `<Redirect>`) can reference the new user by ID. Available since v4.1.
:::

::: info Action timing
Action tags only run when the form submits successfully. They evaluate their tokens at that point — not when the form loads — so `[[FieldName]]` tokens read user input. Actions run in document order; an action that fails throws away every action listed below it.
:::

## Example

```html {2-4}
<AddForm>
  <AddUser RoleNames="Role1,Editors" Email="[[Email]]"
           FirstName="[[FName]]" LastName="[[LName]]"
           Username="[[Username]]" Password="[[Password]]" />
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
      <td>
        <Label For="txtUsername" Text="Username" />
        <TextBox Id="txtUsername" DataField="Username" DataType="String" />
        <Validate Type="Required" Target="txtUsername" Text="**" Message="Please enter a Username." />
      </td>
    </tr>
    <tr>
      <td>
        <Label For="txtPassword" Text="Password" />
        <Password Id="txtPassword" DataField="Password" DataType="String" />
        <Validate Type="Required" Target="txtPassword" Text="**" Message="A Password is required." />
      </td>
    </tr>
    <tr>
      <td colspan="2"><AddButton Text="Add" /> <CancelButton Text="Cancel" /></td>
    </tr>
    <tr>
      <td colspan="2"><ValidationSummary DisplayMode="BulletList" HeaderText="Errors:" CssClass="NormalRed" /></td>
    </tr>
  </table>
</AddForm>
```

## Properties

### Required

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| Username <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Unique username for the new account |
| Email <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | email | | The new user's email address |
| FirstName <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | The new user's first name |
| LastName <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | The new user's last name |
| Password <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Password for the new account |

### User profile

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [DisplayName](#prop-displayname) | string | (FirstName + LastName) | Name displayed throughout DNN. If omitted, defaults to "FirstName LastName" |
| Approved | `True` `False` | `False` | When `True`, the user is auto-approved and can log in immediately |
| UpdatePasswordOnNextLogin | `True` `False` | `False` | When `True`, the user is prompted to change their password at first login |
| Country | string | | Country (mapped to DNN profile) |
| Region | string | | Region/state (mapped to DNN profile) |
| City | string | | City (mapped to DNN profile) |
| PostalCode | string | | Zip / postal code (mapped to DNN profile) |
| Street | string | | Street address (mapped to DNN profile) |
| Unit | string | | Unit / apartment (mapped to DNN profile) |
| Telephone | string | | Telephone (mapped to DNN profile) |
| [RoleNames](#prop-rolenames) | comma-list | | One or more DNN role names. The new user is added to each |
| SendVerificationEmail | `True` `False` | `False` | _(Ignored as of v4.6.)_ DNN now sends the verification email automatically based on the portal's registration mode |

### Error messages

When DNN rejects the user creation, `<AddUser>` throws an action error using one of these messages. Override them to localize or customize the wording.

| Property | Default |
|----------|---------|
| ErrMsgDuplicateEmail | "The email address already exists" |
| ErrMsgInvalidEmail | "The supplied email is invalid" |
| ErrMsgInvalidPassword | "The supplied password is invalid" |
| ErrMsgInvalidUsername | "The supplied username is invalid" |
| ErrMsgDuplicateUser | "The user is already registered" |
| ErrMsgDuplicateUsername | "The username already exists" |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Child Tags

| Tag | Required | Description |
|-----|----------|-------------|
| [`<Property>`](#child-property) | optional | Sets a custom DNN profile property on the new user |

### <span id="child-property">`<Property>`</span>

Sets a single custom profile property. Use one `<Property>` tag per property to set.

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| Name <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Profile property name (must already exist in DNN) |
| Value | string \| token | | Value to assign |

```html
<AddUser Email="[[Email]]" Username="[[Username]]" Password="[[Password]]"
         FirstName="[[FName]]" LastName="[[LName]]">
  <Property Name="Biography" Value="[[Bio]]" />
  <Property Name="Twitter"   Value="[[TwitterHandle]]" />
</AddUser>
```

## Property Details

*   <span id="prop-displayname">**DisplayName**</span>: The name DNN shows in places like the user menu and post bylines. If omitted (or empty), `<AddUser>` builds it from `FirstName` and `LastName`.

*   <span id="prop-rolenames">**RoleNames**</span>: A comma-delimited list of DNN security role names. After the user is created, `<AddUser>` adds them to each named role. For more control (start/end dates, custom delimiter, conditional adds), use a separate [`<AddToRoles>`](add-to-roles.md) action with the `[[__UserId]]` token.
