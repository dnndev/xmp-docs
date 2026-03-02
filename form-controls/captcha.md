---
id: form-captcha
title: Captcha
category: Input Controls
context: form
summary: The Captcha tag renders as a CAPTCHA control at run time.
keywords:
  - captcha
  - form
---
# `<Captcha>`

The Captcha tag renders as a CAPTCHA control at run time.

::: warning NOTE
Due to a limitation in the underlying DNN CAPTCHA control, this tag can only be used in the FormView module.
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

*   **BackgroundColor**: Gets and sets the background color.  

*   **BackgroundImage**: A URL to an image file to use as the background on which the characters will be placed. (optional).  

*   **CaptchaChars**: If you wish to specify your own characters that will be used to make up the code the user must type, you can specify them in this property.  

*   **CaptchaHeight**: The height of the area in which the characters will be displayed.  

*   **CaptchaLength**: The number of characters to use for the code.  

*   **CaptchaWidth**: The width of the area in which the characters will be displayed.  

*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **ErrorMessage**: The message to display to the user if Captcha validation failed.  

*   **ErrorStyle**: The style to use for displaying the error message. ErrorStyle is specified using the following syntax: `ErrorStyle-styleAttributeName` where _styleAttributeName_ is the name of the style attribute such as `ForeColor` or `Font-Bold`. See the syntax section above for more.  

*   **Expiration**: Gets and sets the Expiration time in seconds.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **ID** <span style="color:red; font-weight:bold; font-size:1.2em;">*</span>: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form.  

*   **Text**: The caption to display.  

*   **Width**: Width of the control in [units](../unit-types.md).  


<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

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

<details>
<summary>Deprecated Properties</summary>

These properties use ASP.NET inline styling and are no longer recommended. Use `CssClass` for CSS classes or `Style` for inline CSS instead.

| Property | Values | Description |
|----------|--------|-------------|
| BackColor | color name \| #dddddd | Background color of the control |
| BorderColor | color name \| #dddddd | Border color of the control |
| BorderStyle | `NotSet` `None` `Dotted` `Dashed` `Solid` `Double` `Groove` `Ridge` `Inset` `Outset` | Border style of the control |
| BorderWidth | [size](../unit-types.md) | Border width of the control |
| Font-Bold | `True` `False` | Bold text |
| Font-Italic | `True` `False` | Italic text |
| Font-Names | string | Font family name |
| Font-Overline | `True` `False` | Overline text decoration |
| Font-Size | `XX-Small` `X-Small` `Small` `Medium` `Large` `X-Large` `XX-Large` or size | Font size |
| Font-Strikeout | `True` `False` | Strikethrough text decoration |
| Font-Underline | `True` `False` | Underline text decoration |
| ForeColor | color name \| #dddddd | Text color of the control |

</details>
