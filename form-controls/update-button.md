---
id: form-update-button
title: UpdateButton
category: Buttons
context: form
summary: >-
  The UpdateButton tag renders as a push-button at run-time that, when clicked,
  initiates the update process, executing the `<SubmitCommand>` of the
  associated `<EditForm>`.
keywords:
  - update
  - button
  - form
---
# `<UpdateButton>`

The UpdateButton tag renders as a push-button at run-time that, when clicked, initiates the update process, executing the `<SubmitCommand>` of the associated `<EditForm>`.

## Syntax
```html
<UpdateButton 
    AccessKey="string"
    BackColor="color name|#dddddd"
    BorderColor="color name|#dddddd"
    BorderStyle="NotSet|None|Dotted|Dashed|Solid|Double|Groove|Ridge|Inset|Outset"
    BorderWidth="size"
    CssClass="string"
    Font-Bold="True|False"
    Font-Italic="True|False"
    Font-Names="string"
    Font-Overline="True|False"
    Font-Size="string|Smaller|Larger|XX-Small|X-Small|Small|Medium|Large|X-Large|XX-Large"
    Font-Strikeout="True|False"
    Font-Underline="True|False"
    ForeColor="color name|#dddddd"
    Height="size"
    OnClientClick="string"
    Redirect="url"
    RedirectMethod="Get|Post"
    Style="string"
    TabIndex="integer"
    Text="string"
    ToolTip="string"
    Visible="True|False"
    Width="size" 
/> 
```
 

## Remarks

*   The update button should only be used in `<EditForm>` tags. It's purpose is to initiate the `<SubmitCommand>` associated with the `<EditForm`>  

*   **AccessKey**: In browsers that support it, this property can be set to a character on the keyboard that can be used to set focus to the control. For instance, setting the value to F allows the user to access the control by pressing Alt+F on their keyboard (for Windows machines)  

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control, specified in [units](../unit-types.md)

*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control  

*   **Font Properties**: A series of attributes such as `font-bold`, `font-size`, etc. that allow you to control how the text in the control is displayed. [More](../font-properties.md)

*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **OnClientClick**: Should you wish to perform some action on the client when the control is clicked, add your Javascript function call or script in this attribute. If your script returns _false_ the control will not perform its normal processing. If you return true then the control will perform its normal processing.  

*   **Redirect**: Enables you to redirect the user to an alternative URL after the button is clicked. The redirection occurs after any form processes initiated by the button click completes. Field tokens may be used in the redirect attribute. However, function tokens such as `[[Portal:ID]]`, `[[Join()]]`, `[[User:ID]]`, etc. cannot be used. When field tokens are used, they are URL Encoded. New to version 4.0: You can use a period (.) for the Redirect property's value. The period acts as shortcut to redirect to the current page.  

*   **RedirectMethod**: Determines the HTTP method by which the user is redirected: `Get` or `Post`  
    
    :::tip NOTE
    When using `Post`, the ID that you supply for your form controls determine the name of the field that is posted to the target URL, not the DataField.
    :::

*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. `color: red; border: solid 1px black;`)  

*   **Visible**: Determines if the control is visible (true) or hidden (false)  

*   **Width**: Width of the control in [units](../unit-types.md).  



## Example
```html {19}
<EditForm>
  <SelectCommand commandtext="SELECT * FROM Users WHERE UserId = @UserId" />
  <SubmitCommand commandtext="UPDATE Users SET FirstName=@FirstName, LastName=@LastName WHERE UserId=@UserId" />
  <table>
    <tr>
      <td>
        <Label for="txtFirstName" text="First Name" /> 
        <Textbox id="txtFirstName" datafield="FirstName" datatype="string" />
      </td>
    </tr>
    <tr>
      <td>
        <Label for="txtLastName" text="Last Name" />
        <Textbox id="txtLastName" datafield="LastName" datatype="string" />
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <UpdateButton text="Update"/> <CancelButton text="Cancel"/>
      </td>
    </tr>
  </table>
  <Textbox id="txtUserId" datafield="UserId" datatype="int32" visible="false" />
</EditForm>
```
