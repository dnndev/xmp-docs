---
id: form-captcha
title: Captcha
category: Input Controls
context: form
summary: >-
  The Captcha tag renders as a CAPTCHA control at run time. ::: warning NOTE Due
  to a limitation in the underlying DNN CAPTCHA control, this tag can only be
  used in the FormView module. :::
keywords:
  - captcha
  - form
---
# `<Captcha>`

The Captcha tag renders as a CAPTCHA control at run time.

::: warning NOTE
Due to a limitation in the underlying DNN CAPTCHA control, this tag can only be used in the FormView module.
:::

## Syntax
```html
<Captcha 
    BackColor="color name|#dddddd" 
    BackgroundColor="color name|#dddddd" 
    BackgroundImage="url" 
    BorderColor="color name|#dddddd" 
    BorderStyle="NotSet|None|Dotted|Dashed|Solid|Double|Groove|Ridge| Inset|Outset" 
    BorderWidth="size" 
    CaptchaChars="string"
    CaptchaHeight="size"
    CaptchaLength="integer"
    CaptchaWidth="size"
    CssClass="string" 
    ErrorMessage="string" 
    ErrorStyle-BackColor="color name|#dddddd"
    ErrorStyle-BorderColor="color name|#dddddd"
    ErrorStyle-BorderStyle="NotSet|None|Dotted|Dashed|Solid|Double|Groove|Ridge|Inset|OutSet"
    ErrorStyle-BorderWidth="size"
    ErrorStyle-Font-Bold="True|False"
    ErrorStyle-Font-Italic="True|False" 
    ErrorStyle-Font-Names="string" 
    ErrorStyle-Font-Overline="True|False" 
    ErrorStyle-Font-Size="string|Smaller|Larger|XX-Small|X-Small|Small|Medium| Large|X-Large|XX-Large" 
    ErrorStyle-Font-Strikeout="True|False" 
    ErrorStyle-Font-Underline="True|False" 
    ErrorStyle-ForeColor="color name|#dddddd" 
    Expiration="integer"
    Font-Bold="True|False" 
    Font-Italic="True|False" 
    Font-Names="string" 
    Font-Overline="True|False" 
    Font-Size="string|Smaller|Larger|XX-Small|X-Small|Small|Medium| Large|X-Large|XX-Large" 
    Font-Strikeout="True|False" 
    Font-Underline="True|False" 
    ForeColor="color name|#dddddd" 
    Height="size" 
    ID="string" 
    Text="string"
    Width="size"
/> 
```
 
## Remarks

If your forms are available to the public, chances are you'll get web 'bots filling in those forms with bogus information. To help protect against this, you can add a CAPTCHA control to your form. The control attempts to prove the user is an actual human by asking them to view a series of characters and typing those characters into a box for verification. The characters are rendered as an image and are skewed and obfuscated so that (hopefully) only a human could read them. While it is no guarantee your forms won't get spammed, the control typically reduces the frequency of those attacks.

*   **BackColor**: Color of the background of the control.  

*   **BackgroundColor**: Gets and sets the background color.  

*   **BackgroundImage**: A URL to an image file to use as the background on which the characters will be placed. (optional).  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control, specified in [units.](../unit-types.md)
*   **CaptchaChars**: If you wish to specify your own characters that will be used to make up the code the user must type, you can specify them in this property.  

*   **CaptchaHeight**: The height of the area in which the characters will be displayed.  

*   **CaptchaLength**: The number of characters to use for the code.  

*   **CaptchaWidth**: The width of the area in which the characters will be displayed.  

*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **ErrorMessage**: The message to display to the user if Captcha validation failed.  

*   **ErrorStyle**: The style to use for displaying the error message. ErrorStyle is specified using the following syntax: `ErrorStyle-styleAttributeName` where _styleAttributeName_ is the name of the style attribute such as `ForeColor` or `Font-Bold`. See the syntax section above for more.  

*   **Expiration**: Gets and sets the Expiration time in seconds.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More](../font-properties.md)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **ID**: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form.  

*   **Text**: The caption to display.  

*   **Width**: Width of the control in [units](../unit-types.md).  



## Example
```html {18}
<AddForm>
  ...
  <table>
    <tr>
      <td>
        <Label For="txtFirstName" Text="First Name" /> 
        <Textbox id="txtFirstName" DataField="FirstName" DataType="string" />
      </td>
    </tr>
    <tr>
      <td>
        <Label For="txtLastName" Text="First Name" /> 
        <Textbox Id="txtLastName" DataField="LastName" DataType="string" />
       </td>
    </tr>
    <tr>
      <td>
        <Captcha CaptchaLength="5" />
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <AddbButton Text="Add"/>&nbsp; <CancelButton Text="Cancel"/>
      </td>
    </tr>
  </table>
</AddForm>
```

