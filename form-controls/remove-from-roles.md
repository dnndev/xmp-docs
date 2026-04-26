---
id: form-remove-from-roles
title: RemoveFromRoles
category: User Actions
context: form
summary: After a form submits successfully, removes a user from one or more DNN security roles.
keywords:
  - remove
  - from
  - roles
  - form
since: '4.0'
related:
  - add-to-roles
  - update-user
---

# `<RemoveFromRoles>`

After a form submits successfully, removes the user identified by `UserId` from each of the named `RoleNames`. The `<RemoveFromRoles>` tag shares the same surface as [`<AddToRoles>`](add-to-roles.md): it accepts the same `If` condition, `RoleDelimiter`, and (less commonly used here) date and culture properties.

::: info Action timing
Action tags only run when the form submits successfully. They evaluate their tokens at that point — not when the form loads — so `[[FieldName]]` tokens read user input. Actions run in document order; an action that fails throws away every action listed below it.
:::

## Example

In the example below, the currently logged-in user (identified via `[[User:Id]]`) is removed from the `Role1` and `Editors` roles. Because the role list is comma-delimited, `RoleDelimiter=","` is set explicitly — the default delimiter is the pipe character `|`.

```html {4}
<AddForm>
  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName)
                              VALUES(@FirstName, @LastName)" />
  <RemoveFromRoles RoleNames="Role1,Editors" UserId="[[User:Id]]" RoleDelimiter="," />
  <table>
    <tr>
      <td><Label For="txtFirstName" Text="First Name" /></td>
      <td><TextBox Id="txtFirstName" DataField="FirstName" DataType="String" /></td>
    </tr>
    <tr>
      <td><Label For="txtLastName" Text="Last Name" /></td>
      <td><TextBox Id="txtLastName" DataField="LastName" DataType="String" /></td>
    </tr>
    <tr>
      <td colspan="2"><AddButton Text="Save" /> <CancelButton Text="Cancel" /></td>
    </tr>
  </table>
</AddForm>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [RoleNames](#prop-rolenames) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | delimited list | | One or more DNN role names |
| [UserId](#prop-userid) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | integer \| token | (current user) | DNN UserID of the user to remove |
| RoleDelimiter | character | `\|` | Character that separates the values in `RoleNames` |
| If | expression | | When set and the expression is false, the action is skipped |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Property Details

*   <span id="prop-rolenames">**RoleNames**</span>: A delimited list of DNN role names. Use the pipe `|` (the default) or set a different separator via `RoleDelimiter`. Field tokens may be used. Roles the user isn't in are silently skipped.

*   <span id="prop-userid">**UserId**</span>: The DNN UserID of the user to remove. Use `[[User:Id]]` for the currently logged-in user, or a field token for the user identified by the form's data. If `UserId` is omitted, the current user is used (and if no one is logged in, the action exits without doing anything).
