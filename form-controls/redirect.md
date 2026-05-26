---
id: form-redirect
title: Redirect
category: Actions
context: form
summary: After a form submits successfully, redirects the user to a URL — optionally only when a condition is met.
keywords:
  - redirect
  - form
since: '4.0'
related:
  - form-silent-post
  - form-email
  - form-login
---

# `<Redirect>`

After a form submits successfully, redirects the user to the URL specified by `Target`. Use the `If` attribute to redirect only when a condition is met — the form can declare multiple `<Redirect>` tags, and the first one whose condition matches wins. If none match, the form falls back to the redirect on the clicked Add/Update button (if any), then to the default page.

::: info Action timing
Action tags only run when the form submits successfully. They evaluate their tokens at that point — not when the form loads — so you can use `[[FieldName]]` tokens to read user input. They also run in document order, so an action that fails throws away every action listed below it.
:::

## Example

```html {15-16}
<AddForm>
  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName)
                              VALUES(@FirstName, @LastName)" />
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
      <td colspan="2"><AddButton Text="Add" Redirect="/Find.aspx" /> <CancelButton Text="Cancel" /></td>
    </tr>
  </table>
  <Redirect Target="/Find.aspx?ln=Smith" If="[[LastName]] = Smith" />
  <Redirect Target="/Find.aspx?ln=Jones" If="[[LastName]] = Jones" />
</AddForm>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [Target](#prop-target) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | URL \| `.` | | The URL to redirect to. Use `.` to redirect to the current page |
| [If](#prop-if) | expression | | Conditional expression — when omitted or true, this redirect runs |
| Method | `Get` `Post` | `Get` | HTTP method used for the redirect |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Property Details

*   <span id="prop-target">**Target**</span>: The URL the user is sent to. May be absolute (`https://example.com/page`), site-relative (`~/Find.aspx`), or root-relative (`/Find.aspx`). The special value `.` (a single period) means "redirect to the current page" — useful for refreshing the page after a successful form submission.

*   <span id="prop-if">**If**</span>: A simple equality expression evaluated when the form submits. When the result is true (or `If` is omitted), this redirect runs and no later `<Redirect>` tags are considered. Comparisons are text-only and case-insensitive. Use `=` for equality and `<>` for inequality. Field tokens are typically used on at least one side of the comparison.

    ```html
    <Redirect If="[[Department]] = Sales" Target="~/sales.aspx" />
    ```

## Multiple Redirects

A form may contain any number of `<Redirect>` tags. They are evaluated top-to-bottom, and the first match wins. Once a `<Redirect>` runs, all later actions and redirects are skipped — there's only one place a user can land. If no `<Redirect>` matches, control falls through to the redirect on the clicked button (e.g. `<AddButton Redirect="...">`), then to the default success behavior.
