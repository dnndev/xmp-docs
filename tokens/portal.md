# Portal Tokens

Portal Tokens provide you with the ability to use information about the current portal at run-time such as the portal's ID, it's name, email, etc.

`[[Portal:portalSettingName]]`

## Remarks

*   These tokens can be used in templates and forms. Standard token rules apply. See discussion of Field Tokens.  

*   **`[[Portal:Alias]]`**: Returns the domain for the current portal as defined in the DNN Portal Aliases table. (New in version 1.4).  

*   **`[[Portal:Description]]`**: The description assigned to the current portal, as defined in the Portal Settings page. (New in version 1.4).  

*   **`[[Portal:Email]]`**: The contact email for this portal.  

*   **`[[Portal:Expiry]]`**: The expiration date of the current portal. Returns 12:00:00 AM if no expiration date has been set. (New in version 1.4).  

*   **`[[Portal:HomeDirectory]]`**: Path to the portal's home directory.  

*   **`[[Portal:HomeDirectoryMapped]]`**: Mapped (file system) path to the portal's home directory.  

*   **`[[Portal:HomeTabId]]`**: The tab ID for the home page of the portal.  

*   **`[[Portal:ID]]`**: Returns the numeric ID that uniquely identifies the current portal's instance. This ID is assigned by DotNetNuke when the portal is created.  

*   **`[[Portal:LoginTabId]]`**: The tab in the portal that contains the login form. (New in version 1.4).  

*   **`[[Portal:LogoFile]]`**: The name of the image file used for the portal's logo.  

*   **`[[Portal:Name]]`**: The name of the portal.  

*   **`[[Portal:TimeZoneOffset]]`**: The offset, in minutes, from GMT for the current portal. This may be a positive or negative number. (New in version 1.4).  

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
    <h1>[[Portal:Name]] ([[Portal:ID]]</h1>  
    <a href="mailto:[[Portal:Email]]">Send An Email</a>  
  </HeaderTemplate>  
  ...  
</xmod:Template>
