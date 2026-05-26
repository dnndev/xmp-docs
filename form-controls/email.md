---
id: form-email
title: Email
category: Actions
context: form
summary: After a form submits successfully, sends an email. Body content goes between the opening and closing tags. A form may contain any number of `<Email>` tags.
keywords:
  - email
  - form
since: '1.0'
related:
  - form-redirect
  - form-silent-post
  - form-add-user
---

# `<Email>`

After a form submits successfully, the `<Email>` tag sends an email. The body of the email is the content between the opening and closing `<Email>` tags — plain text or HTML, with field tokens substituted at send time. A form may contain any number of `<Email>` tags; each can target different recipients with different bodies.

::: info Action timing
The `<Email>` tag only runs when the form submits successfully. Tokens in the attributes and body are evaluated at that point — not when the form loads — so `[[FieldName]]` tokens read user input.
:::

::: warning Not for bulk mail
The `<Email>` tag is for transactional emails — confirmations, notifications, and similar one-shot messages. It is not a bulk mailer.
:::

## Example

```html {15-20}
<AddForm>
  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName) VALUES(@FirstName, @LastName)" />
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
  <Email To="you@yoursite.com" From="me@mysite.com"
         Subject="A New Record Has Been Added ([[FirstName]] [[LastName]])" Format="Html">
    The following record was added to the database:<br />
    <strong>First Name:</strong> [[FirstName]]<br />
    <strong>Last Name:</strong> [[LastName]]
  </Email>
</AddForm>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [To](#prop-to) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | email \| comma-list | | Primary recipient(s) |
| [From](#prop-from) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | email | | Sender's email address |
| Subject | string | | Email subject line. Field tokens may be used |
| [CC](#prop-cc) | email \| comma-list | | Carbon-copy recipients |
| [BCC](#prop-bcc) | email \| comma-list | | Blind-carbon-copy recipients |
| ReplyTo | email | | Address used when the recipient clicks "Reply" |
| Format | `Text` `Html` | `Text` | Plain-text or HTML email |
| [Attachment](#prop-attachment) | path \| pipe-list | | One or more files to attach |
| [SendIf](#prop-sendif) | expression | | When set and the expression is false, the email is not sent |
| EnableSsl | `True` `False` | `False` | When `True`, the SMTP connection uses SSL |
| SmtpServer | string | (DNN setting) | Override the SMTP server for this email |
| SmtpUsername | string | (DNN setting) | Override the SMTP username |
| SmtpPassword | string | (DNN setting) | Override the SMTP password |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Body content

The text between the opening and closing `<Email>` tags is the body of the email. When `Format="Html"`, you can use HTML markup. Field tokens such as `[[FirstName]]` are substituted at send time.

```html
<Email To="ops@example.com" From="server@example.com" Subject="New entry" Format="Html">
  <p>A new entry was created by [[User:DisplayName]]:</p>
  <p>[[Notes]]</p>
</Email>
```

## Property Details

*   <span id="prop-to">**To**</span>: One email address or a comma-delimited list. List controls (e.g. `<CheckboxList>`) can also feed this property — the control must use the pipe (`|`) separator for its values.

*   <span id="prop-from">**From**</span>: The sender's email address. Many SMTP servers reject messages whose `From` does not match an authorized sender, so this is typically your site's no-reply or system address.

*   <span id="prop-cc">**CC**</span>: Carbon-copy recipients — they receive the email and are visible in the recipient list. Same format as `To`.

*   <span id="prop-bcc">**BCC**</span>: Blind-carbon-copy recipients — they receive the email but are not visible in the recipient list. Same format as `To`.

*   <span id="prop-attachment">**Attachment**</span>: A file system path or a tilde-prefixed virtual path. Pipe-separate multiple paths to attach more than one file.

    | Form | Example |
    |------|---------|
    | Mapped path | `/files/filename.ext` |
    | Mapped path with drive | `c:/files/filename.ext` |
    | Virtual (tilde) path | `~/portals/0/files/filename.ext` _(since v4.8)_ |
    | Multiple files | `~/portals/0/files/a.ext\|~/portals/0/files/b.ext` |

*   <span id="prop-sendif">**SendIf**</span>: A simple equality expression. When set and the result is false, the email is not sent. Useful for sending an email only when the user opted in or selected a particular option. Comparisons are text-only and case-insensitive.

    ```html
    <Email SendIf="[[Department]] = Sales" To="sales@example.com" From="..." Subject="...">
      ...
    </Email>
    ```
