# <CancelButton>

<a name="top"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

The CancelButton tag renders as a button at run-time. When clicked, the form closes without performing any actions and returns to the previous view if possible.

<a name="syntax"></a>

## Syntax

<div>`<cancelbutton`  

<div>`    AccessKey="_string_"`</div>

<div>`    BackColor="_color name_|#dddddd"`</div>

<div>`    BorderColor="_color name_|#dddddd"  
    BorderStyle="**NotSet**|None|Dotted|Dashed|Solid|Double|Groove|Ridge|Inset|Outset"  
    BorderWidth="_size_"  
    CssClass="_string_"  
    Font-Bold="True|**False**"  
    Font-Italic="True|**False**"  
    Font-Names="_string_"  
    Font-Overline="True|**False**"  
    Font-Size="_string_|Smaller|Larger|XX-Small|X-Small|Small|Medium|Large|X-Large|XX-Large"  
    Font-Strikeout="True|**False**"  
    Font-Underline="True|**False**"  
    ForeColor="_color name_|#dddddd"  
    Height="_size_"  
    OnClientClick="_string_"  
    Redirect="_url_"  
    RedirectMethod="**Get**|Post"  
    Style="_string_"  
    TabIndex="_integer_"  
    Text="_string_"  
    ToolTip="_string_"  
    Visible="**True**|False"  
    Width="_size_"`</div>

`/> `</div>

 <a name="remarks"></a>

## Remarks

*   The cancel button can be used in `<AddForm>` and `<EditForm>` tags. It's purpose is to cancel form processing and hide the form.  

*   **AccessKey**: In browsers that support it, this property can be set to a character on the keyboard that can be used to set focus to the control. For instance, setting the value to F allows the user to access the control by pressing Alt+F on their keyboard (for Windows machines)  

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control, specified in [units  
     ](units.html)
*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More  
     ](fontproperties.html)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](units.html).  

*   **OnClientClick**: Should you wish to perform some action on the client when the control is clicked, add your Javascript function call or script in this attribute. If your script returns _false_ the control will not perform its normal processing. If you return true then the control will perform its normal processing.  

*   **Redirect**: Enables you to redirect the user to an alternative URL after the button is clicked. The redirection occurs after any form processes initiated by the button click completes. Field tokens may be used in the redirect attribute. However, function tokens such as [[Portal:ID]], [[Join()]], [[User:ID]], etc. cannot be used. When field tokens are used, they are URL Encoded.  

*   **RedirectMethod**: Determines the HTTP method by which the user is redirected: "Get" or "Post"  
    IMPORTANT: When using "Post", the ID that you supply for your form controls determine the name of the field that is posted to the target URL, not the DataField. New to version 4.0: You can use a period (.) for the Redirect property's value. The period acts as shortcut to redirect to the current page.  

*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. "color: red; border: solid 1px black;").  

*   **TabIndex**: Sets the tab index for the control.  

*   **Text**: The caption that will be displayed on the button.  

*   **ToolTip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control.  

*   **Visible**: Determines if the control is visible (true) or hidden (false).  

*   **Width**: Width of the control in [units](units.html).  

[Back to top](#top)<a name="example"></a>

## Example

<div>`<AddForm>`  
`  ...`  
`  <table>`  
`    <tr>`  
`      <td>`  
`        <Label Target="txtFirstName" Text="First Name" />`  
`        <TextBox Id="txtFirstName" DataField="FirstName" DataType="string" />`  
`      </td>`  
`    </tr>`  
`    <tr>`  
`       <td>`  
`         <Label Target="txtLastName" Text="Last Name" />  
``<TextBox Id="txtLastName" DataField="LastName" DataType="string" />`  
`       </td>`  
`     </tr>`  
`     <tr>`  
`       <td colspan="2">`  
`         <AddButton Text="Add"/> <span class="CodeHighlight"><CancelButton Text="Cancel"/></span>`  
`       </td>`  
`     </tr>`  
`   </table>`  
`</AddForm>`</div>

[Back to top](#top)