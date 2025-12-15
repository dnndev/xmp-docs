---
id: tokens-field
title: Field Tokens
category: Field Tokens
context: all
summary: >-
  Field Tokens are the mechanism used to display values from your datasource in
  your templates. If you've used XMod, then you can think of field tokens as the
  replacement for the old `<xmod:Field>` tag. The token syntax is much simpler.
  Simply start with two open brackets (`[[`) followed by the exact name of the
  field you want to display (this is case-sensitive) and then follow that with
  two closing brackets (`]]`). At run-time, XMod Pro will replace that token
  with the value from that field for each record. There are some usage rules
  you'll need follow. They are described in the Remarks section.
keywords:
  - field
  - tokens
---
# Field Tokens

**For Templates**

Field Tokens are the mechanism used to display values from your datasource in your templates. If you've used XMod, then you can think of field tokens as the replacement for the old `<xmod:Field>` tag. The token syntax is much simpler. Simply start with two open brackets (`[[`) followed by the exact name of the field you want to display (this is case-sensitive) and then follow that with two closing brackets (`]]`). At run-time, XMod Pro will replace that token with the value from that field for each record. There are some usage rules you'll need follow. They are described in the Remarks section.

**For Forms**

Beginning in version 1.3, you can also use Field Tokens in the attributes of your form's controls to provide a more dynamic form experience. In this context, Field Tokens retrieve data from the `<SelectCommand>`.

There are some usage rules you'll need to adhere to. They are described in the Remarks section.

## Syntax

`[[fieldName]]`


## Remarks

*   **Valid in Templates and Form Controls**. Beginning with version 1.3, Field tokens can be used in forms as well as templates. Within form controls, they render values returned in the `<SelectCommand>` in much the same way the field tokens in templates retrieve values from the `<ListDataSource>` or `<DetailDataSource>` commands.  

*   **Usage In Forms**: Form Field Tokens will retrieve different data depending on the context in which they are used.  

    **Initializing the Form**: When a form first loads, it will execute the `<SelectCommand>`. Normally this data is bound to your form controls (the `Text` property of a `<TextBox>`, for instance) using the `DataField` attribute. All of the other attributes of the control are hard-coded. Beginning in version 1.3, if you want to use that data to set control properties, you can use the `[[Field]]` token syntax.  

    **Form Results**: When a user submits a form, the data they enter is sent to your `<SubmitCommand>` so that it can be saved to the database. You can use `[[Field]]` token syntax to use that data to 1) Customize emails that are sent; 2) Display a custom form-submission acknowledgement (via the `<AddSuccessTemplate>` and `<EditSuccessTemplate>` tags); or 3) Dynamically redirect the user to a custom URL (via the command button tags like `<AddButton>`, `<CancelLink>`, `<UpdateImage>`, `<UpdateButton>`, etc.).  

    So, while the two token types share the same syntax, they operate on different data depending on the context in which they are used.  

    Additionally, **some control properties may not be set with field tokens**. Some properties, particularly color-and some font-related properties, perform internal conversions when they are set. This conversion happens before the controls are bound to the `SelectCommand` data. In most of these cases, you can still achieve the desired result by using the `CssClass` property and setting the visual aspects of the control there - or by using the Style property. For example:  

    ```html
    <SelectCommand CommandText="SELECT 'White' AS FColor, 'Blue' AS BColor" />
    <TextBox id="MyText" ForeColor='[[FColor]]' BackColor='[[BColor]]' />
    ```

    The above example will throw an error. You can change this to use the Style property and Join() function, though, and achieve the same results:  

    ```html
    <TextBox id="MyText" Style='[[Join("color:{0};background-color:{1}", [[FColor]], [[BColor]])]]' />
    ```

    All we're doing in the above example is creating using the `Join()` function and form field tokens to do a basic substituation. At run-time, the `{0}` will be replaced with the value of `[[FColor]]` and `{1}` will be replaced with `[[BColor]]`. The result is this: `Style="color:White;background-color:Red;"`  

*   **Usage In Templates**: For templates, since field tokens retrieve data from each record, they cannot be used in areas of your template that aren't associated with a record. For instance, you cannot use field tokens in the `<HeaderTemplate>`, `<FooterTemplate>`, or `<NoItemsTemplate>` sections. You can use them in `<ItemTemplate>` and `<AlternatingItemTemplate>` sections though.  

*   **Standard Token Usage Rules**:
    *   Tokens must begin with double-brackets (`[[`) and end with double- brackets (`]]`)
    *   Tokens can be used as the value of an HTML attribute or in standard text. For example:  
        `<img src="[[PictureUrl]]" align="left" /> <strong>[[UserFullName]]</strong>`
    *   In many cases, tokens can also be used as the attribute value for an XMod Pro tag. However, when using them in this manner, you MUST delimit the attribute value with single quotes, not double quotes. For example:  
        **CORRECT**: 
        ```html
        <xmod:DetailButton Text='[[Employees_list@UserFullName]]' />
        ```
        **INCORRECT**: 
        ```html
        <xmod:DetailButton Text="[[Employees_list@UserFullName]]" />
        ```


## Example

**Using Field Tokens in a Template**  

```html
<xmod:Template>  
  ...  
  <HeaderTemplate>  
    <h1>Users</h1>  
  </HeaderTemplate>  
  <ItemTemplate>  
    <strong>Full Name: [[DisplayName]]<br />  
    <strong>Address: [[Address1]]<br />  
                     [[Address2]]<br />  
                     [[City]], [[State]] [[Zip]]<br />  
  </ItemTemplate>  
  ...  
</xmod:Template>  
```

**Using Field Tokens in a Form Control**  
This example gets the amount of inventory (StockOnHand) left for the given product and uses that to limit the maximum quantity that can be ordered using the range validator.  

```html
<AddForm>  
  <SelectCommand CommandText="SELECT StockOnHand FROM Inventory WHERE ProductId = @ProductId">  
    <Parameter name="ProductId" value='[[Url:ProductId]]' />  
  </SelectCommand>  
  ...  
  <Label For="txtQuantity" Text="Quantity to Order:" />  
  <TextBox Id="txtQuantity" DataField="Quantity" DdataType="int32" />  
  <Validate Type="range" Target="txtQuantity" MinimumValue="1" MaximumValue='[[StockOnHand]]'  
Message='[[Join("You must enter a value between 1 and {0}",[[StockOnHand]]'/>  
  ...  
</AddForm>
```
