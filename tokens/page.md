---
id: tokens-page
title: Page Tokens
category: Module Tokens
context: all
summary: >-
  Page Tokens provide you with the ability to use information about the current
  page on which the XMod Pro module instance is sitting such as the page's ID.
  Additional Module Tokens will be added to this topic as they become available.
keywords:
  - page
  - tokens
---
# Page Tokens

Page Tokens provide you with the ability to use information about the current page on which the XMod Pro module instance is sitting such as the page's ID. Additional Module Tokens will be added to this topic as they become available.

## Syntax

`[[Page:pageSettingsName]]`


## Remarks

*   These tokens can be used in templates and forms. Standard token rules apply. See discussion of Field Tokens.  

*   **`[[Page:ID]]`**: Returns the numeric ID that uniquely identifies the current page. The DotNetNuke API refers to this as the TabID. This ID is assigned by DotNetNuke when the page is first created. This is the same value that is retrieved by `[[Module:TabId]]`. (new in version 4.3).  

*   **`[[Page:Name]]`**: Returns the name of the page, as stored within DotNetNuke. (new in version 4.3).  

*   **`[[Page:Title]]`**: Returns the Page Title that has been defined in DotNetNuke for the page. (new in version 4.3).  

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
    <h1>This page's ID is: [[Page:ID]]</h1>  
  </HeaderTemplate>  
  ...  
</xmod:Template>  

<AddForm ClientName='[[Join("MyForm", [[Page:ID]])]]'>  

</AddForm>
```
