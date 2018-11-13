# FAQ

## General

*   **Can users other than Hosts or SuperUser accounts add, edit, and delete forms and templates?**  
    No. XMod Pro enables you full access to your database. This provides you with enormous power. However, it also means it's possible to do quite a bit of damage to your data. It is possible to not only wipe out the data in your portal's database, but the data in every other portal. Because of this, we decided to only allow access to Hosts. However, Administrators of individual portals can configure their modules, selecting forms and templates you've created. As a Host, once you create a form/template while logged into a given portal, that form/template then becomes available to the Admin of that portal for use.

## Forms

*   **How do I link controls in my form with fields in my data?**  
    All controls designed to work with XMod Pro supply you with two attributes: DataField and DataType. Put the name of the field you want to link to the control in the DataField attribute. Next, specify what the data type of that field is. If it is text, use "string" at the datatype. If it is true/false, use "boolean", if it is a number, use "int32" or "int64", etc.
*   **Can I use space and/or punctuation marks when naming my forms?**  
    Only letters, numbers, hyphens (`-`), and underscores (`_`)are allowed. To help distinguish different words in the name, you can separate them with hyphens and/or underscores or you can use "camel case" where you capitalize the first letter in each word.

## Templates

*   **How Do I Tell XMod Pro Where to Display My Data?**  
    Within your templates, use [Field Tokens](./tokens/field.md) to identify where to place your data.
*   **Can I use space and/or punctuation marks when naming my templates?**  
    Only letters, numbers, hyphens (`-`), and underscores (`_`) are allowed. To help distinguish different words in the name, you can separate them with hyphens and/or underscores or you can use "camel case" where you capitalize the first letter in each word. For example: MyForm

