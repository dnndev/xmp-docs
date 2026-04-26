---
id: form-silent-post
title: SilentPost
category: Actions
context: form
summary: After a successful form submission, sends an HTTP POST to a URL in the background — useful for notifying mailing lists, webhooks, or other services without redirecting the user.
keywords:
  - silent
  - post
  - form
since: '4.0'
related:
  - redirect
  - email
  - action
---

# `<SilentPost>`

After a form submits successfully, sends an HTTP POST request to the specified `Url` behind the scenes — the user is not redirected and never sees the response. Useful for notifying a webhook, signing a user up to a mailing list, or pushing form data to another service.

Add `<Field>` child tags to include data in the POST body.

::: info Action timing
Action tags only run when the form submits successfully. They evaluate their tokens at that point — not when the form loads — so you can use `[[FieldName]]` tokens to read user input. Actions run in document order; an action that fails throws away every action listed below it.
:::

## Example

```html {2-5}
<AddForm>
  <SilentPost Url="https://example.com/PostTest.aspx" If="[[P2]] = 5">
    <Field Name="param1" Value="1" />
    <Field Name="param2" Value="[[P2]]" />
  </SilentPost>

  <TextBox Id="txtParam2" DataField="P2" DataType="String" /><br />

  <AddButton Text="Add" /> <CancelButton Text="Cancel" />
</AddForm>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [Url](#prop-url) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | URL | | The URL that will receive the POST request |
| [If](#prop-if) | expression | | When omitted or true, this `<SilentPost>` runs. Otherwise it is skipped |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Child Tags

| Tag | Required | Description |
|-----|----------|-------------|
| [`<Field>`](#child-field) | optional | One key/value pair to include in the POST body. Add as many as needed |

## Property Details

*   <span id="prop-url">**Url**</span>: The destination URL. May be absolute or relative. Field tokens (e.g. `[[FieldName]]`) and other XMP tokens are evaluated when the form submits, so the URL itself can include user-supplied data.

*   <span id="prop-if">**If**</span>: A simple equality expression. When the result is true (or `If` is omitted), the `<SilentPost>` runs. Comparisons are text-only and case-insensitive. Use `=` for equality and `<>` for inequality.

    ```html
    <SilentPost If="[[SubscribeMe]] = True" Url="https://lists.example.com/subscribe" />
    ```

### <span id="child-field">`<Field>`</span>

Adds a single name/value pair to the POST body. The fields are URL-encoded and sent with `Content-Type: application/x-www-form-urlencoded`.

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| Name <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Field name (the key in the POST body) |
| Value | string \| token | | Field value. Field tokens are evaluated at the time the form is submitted |
