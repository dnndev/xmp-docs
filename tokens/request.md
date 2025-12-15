---
id: tokens-request
title: Request Tokens
category: Request Tokens
context: all
summary: >-
  Tokens provide you with the ability to use information about the current HTTP
  Request at run-time such as the current URL, the referring URL, etc.
keywords:
  - request
  - tokens
---
# Request Tokens

Tokens provide you with the ability to use information about the current HTTP Request at run-time such as the current URL, the referring URL, etc. Note that some or none of these settings may be available. If they are, the information may not be useful. Internet security/privacy software can block many of these settings and other settings can be forged for benign or malicious reasons. This information is passed through the DotNetNuke filters to remove markup, scripting, and SQL.

## Syntax

`[[Request:requestSettingName]]`

`[[Form:parameterName]]`

`[[Url:parameterName]]`


## Remarks

*   **Usage**: These tokens can be used in templates and forms. Standard token rules apply. See discussion of Field Tokens.  

*   **`[[Request:Referrer]]`**: Returns the URL that sent the user to the current page.  

*   **`[[Request:URL]]`**: The URL of the current page.  

*   **`[[Request:PageName]]`**: (New to version 4.0) The name of the current page, without the file extension.  

*   **`[[Request:HostName]]`**: The domain name of the user.  

*   **`[[Request:HostAddress]]`**: The IP address of the user.  

*   **`[[Request:Agent]]`**: The value of the "user-agent" HTTP header.  

*   **`[[Request:Browser]]`**: The text transmitted in the HTTP header to identify the user's browser.  

*   **`[[Request:Locale]]`**: The locale ID (i.e. en-US, en-GB, es-MX, es-ES, fr-FR, etc.) for the currently active culture. (added in version 2.1).  

*   **`[[Form:**_parameterName_**]]`**: If you need to use a Form parameter (also called a POST string parameter), you can use this token. Simply replace parameterName with the name of the parameter passed via the HTTP POST method to the page. Please note that "Form" in this context refers to the name typically given these parameters within HTML and does not refer to XMod Pro forms.  

*   **`[[Url:**_parameterName_**]]`**: If you need to use a URL parameter (also called a query string parameter), you can use this token. Simply replace _parameterName_ with the name of the parameter in the URL.  

*   **`[[Cookie:_cookieName_]]`**: (new to version 3.0) This token will retrieve the value of a cookie with the name specified after the colon (_cookieName_ in the example). If the cookie does not exist, a empty string is returned.  

*   **Standard Token Usage Rules**:
    *   Tokens must begin with double-brackets (`[[`) and end with double-brackets (`]]`)
    *   Tokens can be used as the value of an HTML attribute or in standard text. For example:  
        ```html
        <img src="[[Employees_list@PictureUrl]]" align="left" />
        <strong>[[Employees_list@UserFullName]]</strong>
        ```
    *   In many cases, tokens can also be used as the attribute value for an XMod Pro tag. However, when using them in this manner, you MUST delimit the attribute value with single quotes, **not** double quotes. For example:  
        **CORRECT**: 
        ```html
        <xmod:DetailButton Text='[[Employees_list@UserFullName]]' />
        ```
        **INCORRECT**: 
        ```html
        <xmod:DetailButton Text="[[Employees_list@UserFullName]]" />
        ```

## Example

```html
<xmod:Template>  
  ...  
  <HeaderTemplate>  
    <h1>HTTP Request Information</h1>  
    <p>  
      Referrer: [[Request:Referrer]]<br />  
      Current URL: [[Request:URL]]<br />  
      User's IP Address: [[Request:HostAddress]]<br />  
      Value of URL Parameter 'param1' is '[[Url:param1]]'<br />  
      Value of POST Parameter 'FormParam1' is '[[Form:FormParam1]]'<br />  
    </p>  
  </HeaderTemplate>  
  ...  
</xmod:Template>
