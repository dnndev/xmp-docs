# Function Tokens

Function Tokens provide you the ability to execute certain XMod Pro-supplied functions. These tokens can be used in templates and forms. Standard token rules apply. See discussion of Field Tokens.

## `[[Join()]]`

The Join function allows you to merge text with field values and other token values. It can be used in plain text, but it's primary purpose is for use within tag attributes.

### Syntax
The Join function's syntax looks like

`[[Join(Input, Value1, Value2, ...)]]`

As with all tokens, it starts with two open brackets `[[`. These are followed by the function name (Join) and an opening parenthesis `(`. Next comes a list of parameters to the function, separated by commas, and a closing parenthesis `)`. Finally the function and ends with two closing brackets `]]`. The parameters are listed below:

*   **Input**: This is a text value. This must be wrapped in double-quotes. It can be standard text or it can include placeholders. **Placeholders** are defined by using a pair of curly braces with a number between them like: {0} {1} {2} and so on. Placeholders must start at 0 and increment by 1\. At run-time, the placeholders will be replaced with the values that follow (see below)
*   **Value1, Value2, ...**: This is a series of 1 or more text values, each separated by commas. At run-time, these values will be used to replace the placeholders found in the **Input** parameter. The first value will replace {0}, the second value - if any - will replace {1}, the third value will replace {2}, and so on. The number of values MUST match the number of placeholders.  

### Examples

*   `[[Join("Hello {0}", "World!")]]`  
    **Result**: Hello World
*   `[[Join("Hello, {0}", [[FirstName]])]]`  
    Result: Hello, John (presuming the value in the FirstName field is "John"
*   `[[Join("{0} plus {1} equals {2}", "1", "2", "3")]]`  
    **Result**: 1 plus 2 equals 3
*   `[[Join("{1} plus {0} equals {2}}, "1", "2", "3")]]`  
    **Result**: 2 plus 1 equals 3
*   `[[Join("alert(""Hello {0}"");return false;", [[FirstName]])]]`  
    **Result**: A Javascript alert dialog saying Hello John, presuming the value of in the FirstName field is "John". NOTE: When you need to use double quotes within your Javascript call, escape them by using two double quotes in a row as in this example.
*   `[[Join("alert(""The Module ID is: {0}"");return false;", [[Module:ID]])]]`  
    **Result**:  A Javascript alert with the text: The Module ID is 257 (the actual module ID will be different based on the actual module ID at run time).  

## `[[Localize:keyName]]`
The Localize token is used to localize static text within your forms and templates. It is used in conjunction with localization resource files - the same types of files used by DNN for localization. 

### Syntax
`[[Localize:keyName]]`

The "keyName" refers to an item within the localization file. At run time, the token will be replaced with the value of the item in the localization file. 

For more information, refer to the [Localizing Text and Content](../localization.md) topic.

## Standard Token Usage Rules

*   Tokens must begin with double-brackets (`[[`) and end with double-brackets (`]]`)
*   Tokens can be used as the value of an HTML attribute or in standard text. For example:  
    ```html
    <img src="[[Employees_list@PictureUrl]]" align="left" />
    <strong>[[Employees_list@UserFullName]]</strong>
    ```
*   In many cases, tokens can also be used as the attribute value for an XMod Pro tag. However, when using them in this manner, you MUST delimit the attribute value with single quotes, **not** double quotes. For example:  
    **CORRECT**: 
    ```xml
    <xmod:DetailButton Text='[[Employees_list@UserFullName]]' />
    ```
    INCORRECT: 
    ```xml
    <xmod:DetailButton Text="[[Employees_list@UserFullName]]" />
    ```


## Example

```xml
<xmod:Template>  
  ...  
  <ItemTemplate>  
    [[Localize:Company]] [[CompanyName]] <br />  
    [[Localize:Address]] [[Address]]  
    <xmod:DeleteButton Text='[[Join("Delete {0}", [[CompanyName]])]]'  
      OnClientClick='[[Join("return confirm(""Really Delete {0}?"")", [[CompanyName]])]]'>  
      ...  
    </xmod:DeeleteButton>  
  </ItemTemplate>  
  ...  
</xmod:Template>
```
