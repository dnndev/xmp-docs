# `<Email>`

The Email tag does not render visibly at run-time. It is a behind-the-scenes operator. Upon successful submission of the form, XMod Pro will send an email based on the information provided in this tag. You may include more than one Email tag in each form. The Email tag can be used to send multiple emails but it is not intended as a bulk email mechanism.

## Syntax
```html
<Email 
  To="comma-delimited list of email addresses"
  From="email address"
  CC="string" 
  BCC="string"
  ReplyTo="string"
  Subject="string"
  Format="Text|Html"
  Attachment="mapped or relative path and filename of attachment"
  SendIf="expression"
  EnableSsl="False|True"
  SmtpPassword="string"
  SmtpServer="string"
  SmtpUsername="string">
    ...Text/HTML and [[FieldTokens]] to make up Body of the Email...
</Email>
```

## Remarks

*   You may include more than one Email tag in each form.  

*   The Email tag can be used to send multiple emails but it is not intended as a bulk email mechanism.  

*   **Field Tokens** may be used in the email attributes and in the body of the email.  

*   **Attachment**: Attaches a file(s) in the file system of the website to the email. The value must be a file system-based path (mapped path) and filename, or a relative path prefixed with "~" (New to version 4.8). You can send multiple attachments by passing in a pipe delimited string.  

*   **BCC**: Blind Carbon Copy - email addresses will receive a copy of the email but will not show up in the list of recipients. You may specify a single email address or a list of addresses. Addresses can be separated by commas. NOTE, you may use email addresses derived from list controls as well. The list control must use the pipe (`|`) separator to separate its values for this to work correctly. (added in version 2.1)  

*   **CC**: Carbon Copy - email addresses will receive a copy of the email and will show up in the list of recipients as having been CC'ed. You may specify a single email address or a list of addresses. Addresses can be separated by commas. NOTE, you may use email addresses derived from list controls as well. The list control must use the pipe (`|`) separator to separate its values for this to work correctly. (added in version 2.1)  

*   **EnableSsl**: Will set the EnableSSL flag and will send your emails. Default is set to false.  

*   **Format**: `Text` to send a plain text email or `HTML` to send an HTML-based email.  

*   **From**: The email address that should be displayed in the **From** field of the email.  

*   **ReplyTo**: (New to version 4.0) The email address that will be listed as the **Reply-To** address when the email recipient clicks "Reply" in their email client. Use this if you want replies sent to an email address that is different than the From email address.  

*   **SendIf**: (new to version 2.6) An expression that, when it evaluates to True, indicates the email should be sent. Typically you'll use this attribute if you want to only send an email if a user selects a certain value in your form.  

    Example 1: 
    
    `SendIf='[[Department]] = Sales'`
    
    In this example we are taking the value of the "Department" column and comparing it to "Sales" If they are equal, the email will be sent. If they are not, the email will not be sent.  

    Example 2: 
    
    `SendIf='[[Department]] <> Sales'` 
    
    In this example, if "Department" doesn't equal "Sales", the email will be sent. Otherwise, it won't be sent.  

    :::tip NOTE
    Comparisons are not text-only and are not case-sensitive. You can test for equality using the `=` operator or inequality using the `<>` operator.
    :::

*   **SmtpPassword**: Password for the SMTP Account.  

*   **SmtpServer**: Account name for the SMTP Server.  

*   **SmtpUsername**: Username for the SMTP Account  

*   **To**: A single email address or comma-delimited list of email addresses that should receive the email. 

    :::tip NOTE
    You may use email addresses derived from list controls as well. The list control must use the pipe (`|`) separator to separate its values for this to work correctly.
    :::


## Example
```html {22-27}
<AddForm>
  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName) VALUES(@FirstName, @LastName)" />
  <table>
    <tr>
      <td>
         <label for="txtFirstName" text="First Name" /> 
         <textbox id="txtFirstName" datafield="FirstName" datatype="string" />
       </td>
    </tr>
    <tr>
      <td>
        <Label For="txtLastName" Text="Last Name" />
        <TextBox Id="txtLastName" DataField="LastName" DataType="string" />
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <AddButton Text="Add"/> <CanceBbutton Text="Cancel"/>
      </td>
    </tr>
  </table>
  <Email To="you@yoursite.com" From="me@mysite.com,them@theirsite.com" 
    Subject="A New Record Has Been Added ([[FirstName]] [[LastName]])" Format="html">
    The following record was added to the database:<br />
    <strong>First Name:</strong> [[FirstName]]<br />
    <strong>Last Name:</strong> [[LastName]]
  </Email>
</AddForm>
```
