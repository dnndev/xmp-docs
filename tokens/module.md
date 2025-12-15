---
id: tokens-module
title: Module Tokens
category: Module Tokens
context: all
summary: >-
  Module Tokens provide you with the ability to use information about the
  current module instance at run-time such as the module's ID.
keywords:
  - module
  - tokens
---
# Module Tokens

Module Tokens provide you with the ability to use information about the current module instance at run-time such as the module's ID. Additional Module Tokens will be added to this topic as they become available.

## Syntax

`[[Module:ModuleSettingName]]`


## Remarks

*   These tokens can be used in templates and forms. Standard token rules apply. See discussion of Field Tokens.  

*   **`[[Module:ID]]`**: Returns the numeric ID that uniquely identifies the current module's instance. This ID is assigned by DotNetNuke when the module instance is first added to a page. It is useful when appended to a hard-coded value to help produce a value that is unique to the page.  

*   **`[[Module:TabId]]`**: Returns the numeric ID that uniquely identifies the tab (or page) on which the module instance resides. (New in version 1.4).  

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
    <h1>This module's ID is: [[Module:ID]]</h1>  
  </HeaderTemplate>  
  ...  
</xmod:Template>  

<AddForm ClientName='[[Join("MyForm", [[Module:ID]])]]'>  

</AddForm>
```
