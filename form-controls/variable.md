---
id: form-variable
title: Variable
category: Layout
context: form
summary: Captures a hard-coded or token-derived value that other tags on the form can reference via a field token.
keywords:
  - variable
  - form
since: '1.0'
related:
  - textbox
  - add-to-roles
---

# `<Variable>`

`<Variable>` stores a value under a name so other tags on the form — `<SelectCommand>` parameters, `<Email>` bodies, action tags like `<AddToRoles>`, and so on — can read it via a `[[FieldName]]` token.

It's most useful when the same token-derived value (e.g. `[[User:Id]]`, `[[Url:state]]`) is referenced in several places, or when an action tag needs a value that isn't tied to a visible form control. Unlike a hidden `<TextBox>`, `<Variable>` doesn't render as an HTML element at all — there's no input on the page, no postback round-trip, and no risk of a user tampering with the value.

## Example

In the example below, `<Variable Name="uid">` captures the current user's ID once. The `<AddToRoles>` action then references it as `[[uid]]`. Without the variable, the same `[[User:Id]]` token would have to be repeated everywhere.

```html {2}
<AddForm>
  <Variable Name="uid" Value="[[User:Id]]" />
  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName)
                              VALUES(@FirstName, @LastName)" />
  <AddToRoles RoleNames="Editors" UserId="[[uid]]" />

  <Label For="txtFirstName" Text="First Name" />
  <TextBox Id="txtFirstName" DataField="FirstName" DataType="String" /><br />

  <Label For="txtLastName" Text="Last Name" />
  <TextBox Id="txtLastName" DataField="LastName" DataType="String" /><br />

  <AddButton Text="Add" /> <CancelButton Text="Cancel" />
</AddForm>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [Name](#prop-name) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | The name other tags use to reference this value, as a field token (`[[Name]]`) |
| [Value](#prop-value) | string \| token | | The value to store. Function tokens are evaluated when the form loads |
| DataType | [database type](../data-types.md) | `String` | The type used when the variable is bound to a SQL parameter |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Property Details

*   <span id="prop-name">**Name**</span>: The token name. Choose something distinct from your form's `DataField` names to avoid collisions. Other tags reference the variable via `[[Name]]`.

*   <span id="prop-value">**Value**</span>: The value to store. Hard-coded strings, function tokens (`[[User:Id]]`, `[[Url:state]]`, `[[Portal:Id]]`, etc.), and concatenations are all valid.

::: info Variable vs. hidden TextBox
A hidden `<TextBox Visible="False">` accomplishes something similar, but it round-trips through the page (it lives in viewstate, can be tampered with via the browser's developer tools, and adds an HTML element). `<Variable>` is the better fit when you just need a name for a value the form already knows.
:::
