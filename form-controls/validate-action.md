---
id: form-validate-action
title: Validate Type="Action"
category: Validation
context: form
summary: The Validate tag with Type="Action" displays errors thrown by action tags (AddUser, Login, etc.) when the form is submitted.
keywords:
  - validate
  - action
  - form
since: '4.0'
related:
  - form-validate-database
  - form-validation-summary
  - form-add-user
  - form-login
---
# `<Validate Type="Action">`

The Action validator surfaces errors thrown by action tags — `<AddUser>`, `<Login>`, `<UpdateUser>`, `<AddToRoles>`, and similar — when the form is submitted. The classic case is `<AddUser>` complaining "that username already exists"; this validator catches that error and shows it as a normal form-validation message.

Unlike most validators, it isn't tied to a specific control. Place one anywhere in the form (typically alongside the buttons).

If you have a `<ValidationSummary>` on the form, the action error appears there. If you don't include this validator at all, the error still surfaces — through XMod Pro's default error display.

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [Type](#prop-type) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | `Action` | | Identifies this as an Action validator |
| CssClass | string | | CSS class name(s) for styling the validator's error display |
| [Text](#prop-text) | string | | Text shown inline at the validator's location when an action error occurs |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

::: info Differs from other validators
Action doesn't take a `Target`, `Message`, `Display`, or `EnableClientScript` — it isn't tied to a specific control and only runs server-side after the action tag fails.
:::

## Example

A registration form using `<AddUser>`. The Action validator catches duplicate-username and other AddUser errors and surfaces them in the validation summary:

```html {3-5,33,36}
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
        <Label For="txtEmail" Text="Email" />
        <TextBox Id="txtEmail" DataField="Email" DataType="string" />
        <Validate Type="Required" Target="txtEmail" Text="**" Message="Email is required." />
        <Validate Type="Email"    Target="txtEmail" Text="**" Message="Please enter a valid email." />
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

The `<Validate Type="Action" />` placed alongside the buttons catches any error from the `<AddUser>` action and routes it into the `<ValidationSummary>` for display.

## Property Details

*   <span id="prop-type">**Type**</span>: Set to `Action` to identify this as an Action validator.

*   <span id="prop-text">**Text**</span>: The text shown inline at the validator's location when an action error occurs. The full error message goes into the `<ValidationSummary>` (if present); `Text` is for an inline marker. If you omit `Text`, nothing renders inline.
