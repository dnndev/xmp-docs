---
id: form-continue-button
title: 'xmod:ContinueButton'
category: Buttons
context: form
summary: >-
  The ContinueButton tag renders as a push-button at run-time. It is only valid
  within an `<AddSuccessTemplate>` or `<EditSuccessTemplate>`. When clicked, the
  user is returned either to the page that would have been displayed after
  successfully submitting the form or to the URL specified in the Redirect
  attribute.
keywords:
  - continue
  - button
  - form
---
# `<xmod:ContinueButton>`

The ContinueButton tag renders as a push-button at run-time. It is only valid within an `<AddSuccessTemplate>` or `<EditSuccessTemplate>`. When clicked, the user is returned either to the page that would have been displayed after successfully submitting the form or to the URL specified in the Redirect attribute.

## Syntax
```html
<xmod:ContinueButton  
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

*   The ContinueButton should only be used in `<AddSuccessTemplate>` and `<EditSuccessTemplate>` tags. It's purpose is to return the user to the page he/she would have seen if no success template was displayed or to send the user to the URL of your choice via the Redirect attribute.  

*   Unlike other form controls, the ContinueButton control is really a template tag and, thus, begin with the "xmod:" prefix like so: `<xmod:ContinueButton>` rather than `<ContinueButton>`.   

*   **AccessKey**: In browsers that support it, this property can be set to a character on the keyboard that can be used to set focus to the control. For instance, setting the value to F allows the user to access the control by pressing Alt+F on their keyboard (for Windows machines).  

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control, specified in [units](../unit-types.md)
*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More](../font-properties.md)

*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **OnClientClick**: Should you wish to perform some action on the client when the control is clicked, add your Javascript function call or script in this attribute. If your script returns _false_ the control will not perform its normal processing. If you return true then the control will perform its normal processing.  

*   **Redirect**: Enables you to redirect the user to an alternative URL after the button is clicked. The redirection occurs after any form processes initiated by the button click completes.  

*   **RedirectMethod**: Determines the HTTP method by which the user is redirected: "Get" or "Post".  

*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. `color: red; border: solid 1px black;`).  

*   **TabIndex**: Sets the tab index for the control.  

*   **Text**: The caption that will be displayed on the button.  

*   **ToolTip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control.  

*   **Visible**: Determines if the control is visible (true) or hidden (false).  

*   **Width**: Width of the control in [units](../unit-types.md).



## Example
```html {9-10}
<AddForm>
  ...
</AddForm>

<AddSuccessTemplate>
<ItemTemplate>
    <h1>Thanks for Signing Up</h1>
      <p>Click the button below to go to your profile page</p>
      <xmod:ContinueButton Text="View Your Profile" 
        Redirect="http://mysite.com/profile" RedirectMethod="Get" />
</ItemTemplate>
</AddSuccessTemplate>
```
