# <UpdateImage>

<a name="top"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

The UpdateImage tag renders as a clickable image at run-time. When clicked, the form executes the `<SubmitCommand>` associated with the `<EditForm>`.

<a name="syntax"></a>

## Syntax

    <UpdateImage

 <a name="remarks"></a>

## Remarks

*   The UpdateImage tag should only be used in `<EditForm>` tags. It's purpose is to initiate the `<SubmitCommand>` associated with the `<EditForm>`.  

*   **AccessKey**: In browsers that support it, this property can be set to a character on the keyboard that can be used to set focus to the control. For instance, setting the value to F allows the user to access the control by pressing Alt+F on their keyboard (for Windows machines)  

*   **AlternateText**: Use this attribute's value will be used as the image's "alt" text. The "alt" text is generally used by screen reader software used by visually impaired users to identify the content of an image. It may also be used by search engines  

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control, specified in [units  
     ](units.html)
*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control
*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More  
     ](fontproperties.html)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](units.html).  

*   **ImageAlign**: This attribute determines how the image will be aligned with respect to the other elements in its context.  

*   **ImageUrl**: Specify a URL to the image. You may use the tilde (~) character to represent the application's root directory. For instance: ImageUrl="~/images/myimage.gif" might map to "/dnntestsite/images/myimage.gif" on your localhost development machine and "/images/myimage.gif" on your production server.  

*   **OnClientClick**: Should you wish to perform some action on the client when the control is clicked, add your Javascript function call or script in this attribute. If your script returns _false_ the control will not perform its normal processing. If you return true then the control will perform its normal processing..  

*   **Redirect**: Enables you to redirect the user to an alternative URL after the button is clicked. The redirection occurs after any form processes initiated by the button click completes. Field tokens may be used in the redirect attribute. However, function tokens such as [[Portal:ID]], [[Join()]], [[User:ID]], etc. cannot be used. When field tokens are used, they are URL Encoded. New to version 4.0: You can use a period (.) for the Redirect property's value. The period acts as shortcut to redirect to the current page.  

*   **RedirectMethod**: Determines the HTTP method by which the user is redirected: "Get" or "Post"  
    IMPORTANT: When using "Post", the ID that you supply for your form controls determine the name of the field that is posted to the target URL, not the DataField.  

*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. "color: red; border: solid 1px black;")  

*   **Visible**: Determines if the control is visible (true) or hidden (false)  

*   **Width**: Width of the control in [units](units.html).  

[Back to top](#top)<a name="example"></a>

## Example

<div>`<EditForm>`  
`  <SelectCommand CommandText="SELECT * FROM Users WHERE UserId = @UserId" />`  
`  <SubmitCcommand CommandText="UPDATE Users SET FirstName=@FirstName, LastName=@LastName WHERE UserId=@UserId" />`  
`  <table>`  
`    <tr>`  
`      <td>`  
`        <Label For="txtFirstName" Text="FirstName" />`  
`        <TextBox id="txtFirstName" DataField="FirstName" DataType="string" />`  
`      </td>`  
`    </tr>`  
`    <tr>`  
`      <td>`  
`        <Label For="txtLastName" Text="First Name" />  
``<TextBox Id="txtLastName" DataField="LastName" DataType="string" />`  
`      </td>`  
`    </tr>`  
`    <tr>`  
`      <td colspan="2">`  
`<span style="color: #ff0000;"><UpdateImage AlternateText="Update" ImageUrl="~/images/update.gif" /></span>  
        <CancelImage AlternateText="Cancel" ImageUrl="~/images/cancel.gif" />`  
`      </td>`  
`    </tr>`  
`  </table>`  
`  <Textbox Id="txtUserId" DataField="UserId" DataType="int32" Visible="false" />`  
`</EditForm>`</div>

[Back to top](#top)