# <xmod:ContinueButton>

<a name="top"></a>



The ContinueButton tag renders as a push-button at run-time. It is only valid within an `<AddSuccessTemplate>` or `<EditSuccessTemplate>`. When clicked, the user is returned either to the page that would have been displayed after successfully submitting the form or to the URL specified in the Redirect attribute.

<a name="syntax"></a>

## Syntax

    <xmod:ContinueButton

<div>

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

*   The ContinueButton should only be used in `<AddSuccessTemplate>` and `<EditSuccessTemplate>` tags. It's purpose is to return the user to the page he/she would have seen if no success template was displayed or to send the user to the URL of your choice via the Redirect attribute.  

*   Unlike other form controls, the ContinueButton control is really a template tag and, thus, begin with the "xmod:" prefix like so: `<xmod:ContinueButton>` rather than `<ContinueButton>`.   

*   **AccessKey**: In browsers that support it, this property can be set to a character on the keyboard that can be used to set focus to the control. For instance, setting the value to F allows the user to access the control by pressing Alt+F on their keyboard (for Windows machines).  

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control, specified in [units.  

    ](../unit-types.md)
*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More  

    ](../font-properties.md)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **OnClientClick**: Should you wish to perform some action on the client when the control is clicked, add your Javascript function call or script in this attribute. If your script returns _false_ the control will not perform its normal processing. If you return true then the control will perform its normal processing.  

*   **Redirect**: Enables you to redirect the user to an alternative URL after the button is clicked. The redirection occurs after any form processes initiated by the button click completes.  

*   **RedirectMethod**: Determines the HTTP method by which the user is redirected: "Get" or "Post".  

*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. "color: red; border: solid 1px black;").  

*   **TabIndex**: Sets the tab index for the control.  

*   **Text**: The caption that will be displayed on the button.  

*   **ToolTip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control.  

*   **Visible**: Determines if the control is visible (true) or hidden (false).  

*   **Width**: Width of the control in [units](../unit-types.md).

<a name="example"></a>

## Example

<div>`<AddForm>`  
`  ...``</AddForm>  

<AddSuccessTemplate>`</div>

<div>`<ItemTemplate>  
    <h1>Thanks for Signing Up</h1>  
      <p>Click the button below to go to your profile page</p>  
 <span style="color: #ff0000;">     <xmod:ContinueButton Text="View Your Profile" Redirect="http://mysite.com/profile" RedirectMethod="Get" /></span>`</div>

<div>`</ItemTemplate>  
</AddSuccessTemplate>`</div>

