---
id: form-add-to-roles
title: AddToRoles
category: User Actions
context: form
summary: After a form submits successfully, adds a user to one or more DNN security roles. Optionally sets effective and expiration dates and runs only when a condition is met.
keywords:
  - add
  - roles
  - form
since: '4.0'
related:
  - form-remove-from-roles
  - form-add-user
  - form-update-user
---

# `<AddToRoles>`

After a form submits successfully, adds the user identified by `UserId` to each of the named `RoleNames`. Use the `If` attribute to run conditionally — for example, to add the user to a `Newsletter` role only when they checked the opt-in box.

`StartDate` and `EndDate` set the role's effective and expiration dates, useful for time-limited memberships.

::: info Action timing
Action tags only run when the form submits successfully. They evaluate their tokens at that point — not when the form loads — so `[[FieldName]]` tokens read user input. Actions run in document order; an action that fails throws away every action listed below it.
:::

## Example

In the example below, a `<Variable>` captures the current user's ID into `[[uid]]`, then `<AddToRoles>` adds them to the `Role1` and `Editors` roles. Because the role list is comma-delimited, `RoleDelimiter=","` is set explicitly — the default delimiter is the pipe character `|`.

```html {3}
<AddForm>
  <Variable Name="uid" Value="[[User:Id]]" />
  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName) VALUES(@FirstName, @LastName)" />
  <AddToRoles RoleNames="Role1,Editors" UserId="[[uid]]" RoleDelimiter="," />
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
      <td colspan="2"><AddButton Text="Add" /> <CancelButton Text="Cancel" /></td>
    </tr>
  </table>
</AddForm>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [RoleNames](#prop-rolenames) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | delimited list | | One or more DNN role names |
| [UserId](#prop-userid) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | integer \| token | (current user) | DNN UserID of the user to add |
| RoleDelimiter | character | `\|` | Character that separates the values in `RoleNames` |
| [If](#prop-if) | expression | | When set and the expression is false, the action is skipped _(since v4.1)_ |
| [StartDate](#prop-dates) | date | | Effective date — when the membership begins _(since v4.1)_ |
| [EndDate](#prop-dates) | date | | Expiration date — when the membership ends _(since v4.1)_ |
| Culture | locale id | (current culture) | Locale used to parse `StartDate` / `EndDate`. Use `invariant` for culture-invariant parsing _(since v4.1)_ |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Property Details

*   <span id="prop-rolenames">**RoleNames**</span>: A delimited list of DNN role names. Use the pipe `|` (the default) or set a different separator via `RoleDelimiter`. Field tokens may be used. Roles that don't exist on the portal are silently skipped.

*   <span id="prop-userid">**UserId**</span>: The DNN UserID of the user to add. Use `[[User:Id]]` for the currently logged-in user, or a field token for the user identified by the form's data. If `UserId` is omitted, the current user is used (and if no one is logged in, the action exits without doing anything).

*   <span id="prop-if">**If**</span>: A simple equality expression. When set and the expression is false, the action is skipped. Comparisons are text-only and case-insensitive. Use `=` for equality and `<>` for inequality.

    ```html
    <AddToRoles If="[[SignMeUp]] = True" RoleNames="Newsletter" UserId="[[uid]]" />
    ```

*   <span id="prop-dates">**StartDate / EndDate**</span>: Date strings parsed using the locale specified by `Culture` (or the current culture if `Culture` is omitted). When supplied, DNN treats the role membership as effective from `StartDate` through `EndDate`. Field tokens are typically used to populate these.
