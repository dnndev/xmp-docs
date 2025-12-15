---
id: tokens-dateadd
title: DateAdd Token
category: Function Tokens
context: all
summary: >-
  The DateAdd token provides you with the ability to generate a date, relative
  to the current date. This allows you to create a date that is, say, use
  information about the current module instance at ru...
keywords:
  - date
  - add
  - token
---
# DateAdd Token

The DateAdd token provides you with the ability to generate a date, relative to the current date. This allows you to create a date that is, say, use information about the current module instance at run-time such as the module's ID. Additional Module Tokens will be added to this topic as they become available.

## Syntax

`[[DateAdd:number,interval,format]]`

## Remarks

*   These tokens can be used in templates and forms. Standard token rules apply. See discussion of Field Tokens.  

*   **number**: Required if any arguments are specified. This is an integer that specifies how many of _interval_ to add to the current date. The number may be positive (greater than 0) to get to a date in the future. A negative number (a number less than zero) can be used to get a date in the past.  

*   **interval**: Required if number is specified. One of the following characters to identify which interval to add to the current date:
    *   d: Day
    *   w: Week
    *   m: Month
    *   y: Year
*   **format**: Optional. If you would like to determine exactly how the calculated date is returned, you can use standard date formatting expressions here. One example would be yyyy-MM-dd to display August 1st, 2012 would display 2012-08-01\. Whereas MM/dd/yyyy will display 08/01/2012 and dd.MM.yy would display 01.08.12.

*   In order for this to work for the Current Date, you have to include an argument, such as: `[[DateAdd:0]]` 
    Do the following if you want formatting for the current date: `[[DateAdd:0,d,MM/dd/yyyy]]`

*   **Standard Token Usage Rules**:
    *   Tokens must begin with double-brackets (`[[`) and end with double-brackets (`]]`)
    *   Tokens can be used as the value of an HTML attribute or in standard text. For example:  
        `<img src="[[Employees_list@PictureUrl]]" align="left" /> <strong>[[Employees_list@UserFullName]]</strong>`
    *   In many cases, tokens can also be used as the attribute value for an XMod Pro tag. However, when using them in this manner, you MUST delimit the attribute value with single quotes (`'`), **not** double quotes (`"`). For example:  
        **CORRECT**: 
        ```xml
        <xmod:DetailButton Text='[[Employees_list@UserFullName]]' />
        ```
        **INCORRECT**: 
        ```xml
        <xmod:DetailButton Text="[[Employees_list@UserFullName]]" />
        ```

## Example

```html
<xmod:Template>  
  ...
  <HeaderTemplate>  
    <h1>This current date is: [[DateAdd:0]]</h1>  
    <h1>Next week the date will be: [[DateAdd:1,w]]</h1>  
    <h1>Last month the date was: [[DateAdd:-1,m]]</h1>  
    <h1>In five years the date will be: [[DateAdd:5,y,yyyy-MM-dd]]</h1>  
  </HeaderTemplate>  
  ...  
</xmod:Template>  

<AddForm ClientName='[[Join("MyForm", [[DateAdd:0,d,yyyyMMdd]])]]'>  
  
</AddForm>
```
