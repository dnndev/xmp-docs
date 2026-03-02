---
id: form-continue-image
title: 'xmod:ContinueImage'
category: Buttons
context: form
summary: >-
  The ContinueImage tag renders as a clickable image at run-time. It is only
  valid within an `<AddSuccessTemplate>` or `<EditSuccessTemplate>` tag. When
  clicked, the user is returned either to the page that would have been
  displayed after successfully submitting the form or to the URL specified in
  the Redirect attribute.
keywords:
  - continue
  - image
  - form
---
# `<xmod:ContinueImage>`

The ContinueImage tag renders as a clickable image at run-time. It is only valid within an `<AddSuccessTemplate>` or `<EditSuccessTemplate>` tag. When clicked, the user is returned either to the page that would have been displayed after successfully submitting the form or to the URL specified in the Redirect attribute.

## Syntax
```html
<xmod:ContinueImage
    AccessKey="string"
    AlternateText="string"
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
    ImageAlign="NotSet|Left|Right|Baseline|Top|Middle|Bottom|AbsBottom|AbsMiddle|TextTop"
    ImageUrl="url"
    OnClientClick="string"
    Redirect="url"
    RedirectMethod="Get|Post"
    Style="string"
    TabIndex="integer"
    ToolTip="string"
    Visible="True|False"
    Width="size"  
 />  
```

## Remarks

*   The ContinueImage tag should only be used in `<AddSuccessTemplate>` and `<EditSuccessTemplate>` tags. It's purpose is to return the user to the page he/she would have seen if no success template was displayed or to send the user to the URL of your choice via the Redirect attribute.  

*   Unlike other form controls, the ContinueImage control is really a template tag and, thus, begins with the "xmod:" prefix like so: `<xmod:ContinueImage>` rather than `<ContinueImage>`.  

*   **AccessKey**: In browsers that support it, this property can be set to a character on the keyboard that can be used to set focus to the control. For instance, setting the value to F allows the user to access the control by pressing Alt+F on their keyboard (for Windows machines).  

*   **AlternateText**: Use this attribute's value will be used as the image's `alt` text. The `alt` text is generally used by screen reader software used by visually impaired users to identify the content of an image. It may also be used by search engines.  


*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **ImageAlign**: This attribute determines how the image will be aligned with respect to the other elements in its context.  

*   **ImageUrl**: Specify a URL to the image. You may use the tilde (`~`) character to represent the application's root directory. For instance: ImageUrl="~/images/myimage.gif" might map to "/dnntestsite/images/myimage.gif" on your localhost development machine and "/images/myimage.gif" on your production server.  

*   **OnClientClick**: Should you wish to perform some action on the client when the control is clicked, add your Javascript function call or script in this attribute. If your script returns _false_ the control will not perform its normal processing. If you return true then the control will perform its normal processing.  

*   **Redirect**: Enables you to redirect the user to an alternative URL after the button is clicked. The redirection occurs after any form processes initiated by the button click completes.  

*   **RedirectMethod**: Determines the HTTP method by which the user is redirected: "Get" or "Post".  

*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. `color: red; border: solid 1px black;`).  

*   **TabIndex**: Sets the tab index for the control.  

*   **ToolTip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control.  

*   **Visible**: Determines if the control is visible (true) or hidden (false).  

*   **Width**: Width of the control in [units](../unit-types.md).



## Example
```html {9-12}
<AddForm>
  ...
</AddForm>

<AddSuccessTemplate
  <ItemTemplate>
    <h1>Thanks for Signing Up</h1>
    <p>Click the button below to go to your profile page</p>
    <xmod:ContinueImage AlternateText="View Your Profile" 
                        Redirect="http://mysite.com/profile" 
                        RedirectMethod="Get" 
                        ImageUrl="~/images/profile.gif"/>
  </ItemTemplate>
</AddSuccessTemplate>
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
