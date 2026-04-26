---
id: form-login
title: Login
category: User Actions
context: form
summary: After a form submits successfully, logs a user into the DNN site using the supplied credentials. Optionally exposes the user's ID, username, and name to later actions on the form.
keywords:
  - login
  - form
since: '4.0'
related:
  - add-user
  - update-user
  - redirect
---

# `<Login>`

After a form submits successfully, the `<Login>` tag authenticates a user against the DNN site using the supplied `Username` and `Password`, then logs them in. If authentication fails, the form throws an action error using the matching `ErrMsg…` property.

The optional `*Field` properties expose the logged-in user's information to actions that run later in the form (e.g. a `<Redirect>` that needs the new user's ID).

::: info Action timing
Action tags only run when the form submits successfully. They evaluate their tokens at that point — not when the form loads — so `[[FieldName]]` tokens read user input. Actions run in document order; an action that fails throws away every action listed below it.
:::

## Example

```html {2-3}
<AddForm>
  <Login Username="[[Uname]]" Password="[[Pword]]" UsernameField="UsrName" UserIdField="UsrId" />
  <Redirect Target="~/Home.aspx?uid=[[UsrId]]&un=[[UsrName]]" />

  <Label For="Uname" Text="Username:" />
  <TextBox Id="Uname" DataField="Uname" DataType="String" /><br />

  <Label For="Pword" Text="Password:" />
  <Password Id="Pword" DataField="Pword" DataType="String" /><br />

  <AddButton Text="Login" /> <CancelButton Text="Cancel" />
</AddForm>
```

In this example, `<Login>` reads the form's username and password fields, logs the user in, then exposes their `UserID` and `Username` under the new field names `UsrId` and `UsrName`. The downstream `<Redirect>` then uses those tokens in its `Target`.

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [Username](#prop-username) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Username of the account to log in. Typically a `[[FieldName]]` token bound to a `<TextBox>` |
| [Password](#prop-password) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Password for the account. Typically bound to a `<Password>` control |
| RememberMe | `True` `False` | `True` | When `True`, persists the login in a cookie (the equivalent of DNN's "Remember Me" checkbox) |
| [UserIdField](#prop-fields) | string | | When set, the logged-in user's `UserID` is added to the form's data under this field name, so later actions can reference it as `[[name]]` |
| [UsernameField](#prop-fields) | string | | When set, the logged-in user's `Username` is exposed under this field name |
| [FirstNameField](#prop-fields) | string | | When set, the logged-in user's `FirstName` is exposed under this field name |
| [LastNameField](#prop-fields) | string | | When set, the logged-in user's `LastName` is exposed under this field name |
| ErrMsgLoginFailed | string | "Your username and/or password is incorrect…" | Error thrown when DNN reports an invalid username/password |
| ErrMsgNotApproved | string | "Your account has not yet been approved" | Error thrown when DNN reports the account is awaiting approval |
| ErrMsgLockout | string | "Your account has been locked…" | Error thrown when DNN reports the account is locked |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Property Details

*   <span id="prop-username">**Username**</span>: The username supplied to DNN's authentication API. This is most commonly the value of a `<TextBox>` on the form, referenced via a field token.

*   <span id="prop-password">**Password**</span>: The password supplied to DNN's authentication API. This is most commonly the value of a `<Password>` control, referenced via a field token.

*   <span id="prop-fields">**UserIdField / UsernameField / FirstNameField / LastNameField**</span>: After a successful login, XMP adds entries to the in-memory form data so subsequent action tags (and email bodies) can use them. Each `*Field` property names the token to publish under. For example, `UserIdField="UsrId"` makes `[[UsrId]]` available to every action that runs after this one. Only the fields you opt into are added.
