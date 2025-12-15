---
id: tokens-user
title: User Tokens
category: User Tokens
context: all
summary: >-
  User Tokens provide you with the ability to use information about the current
  user at run-time such as the user's ID, name, email, etc.
keywords:
  - user
  - tokens
---
# User Tokens

User Tokens provide you with the ability to use information about the current user at run-time such as the user's ID, name, email, etc.

## Syntax

`[[User:userSettingName]]`


## Remarks

*   **Usage**: These tokens can be used in templates and forms. Standard token rules apply. See discussion of Field Tokens.  

*   **`[[User:ID]]`**: Returns the numeric ID that uniquely identifies the current user. This ID is assigned by DotNetNuke when the user is created.  

*   **`[[User:FirstName]]`**: The user's first name.  

*   **`[[User:LastName]]`**: The user's last name.  

*   **`[[User:DisplayName]]`**: The user's display name.  

*   **`[[User:Username]]`**: The username associated with the user's account.  

*   **`[[User:Email]]`**: The user's email address.  

*   **`[[User:_profileItemName_]]`**: An item from the user's profile. Replace profileItemName with the name of the item. For example: `[[User:Telephone]]`, `[[User:Street]]`, `[[User:Cell]]`, `[[User:Fax]]`, `[[User:Region]]`, etc.  
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
    <h1>[[User:DisplayName]] ([[User:ID]])</h1>  
    <a href="mailto:[[User:Email]]">Send An Email</a>  
    <xmod:AddButton text='[[User:Username]]' />  
  </HeaderTemplate>  
  ...  
</xmod:Template>
