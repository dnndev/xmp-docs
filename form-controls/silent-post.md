---
id: form-silent-post
title: SilentPost
category: Actions
context: form
summary: >-
  New to Version 4.0! The SilentPost action tag will create an HTTP POST request
  and send it to the specified URL (Target) at run-time. This happens behind the
  scenes (i.e.
keywords:
  - silent
  - post
  - form
---
# `<SilentPost>`

New to Version 4.0! The SilentPost action tag will create an HTTP POST request and send it to the specified URL (Target) at run-time. This happens behind the scenes (i.e. silently) without user interaction.

## Syntax
```html
<SilentPost 
    If="expression"
    Url="URL that should receive the POST request">

  Optional: 1 or more Field child tags that contain data to pass to the URL
  <Field Name="string" Value="string" />

</SilentPost>
```
 

## Remarks

*   The SilentPost action is only executed if the form has been successfully submitted. If there is a validation error or an error is thrown from the database, the action will not be performed.  

*   **Order Is Important**: Action tags are executed sequentially, so the order they appear within the form can be important. As an example, if one action fails with an error, all actions prior to the failed action will have executed. Those that occur after the failed action will not be executed. Additionally, some actions may have the ability to modify form values (this modification occurs after any form data has been sent to the database) - i.e. process form values, do calculations on them, transform them, even add and remove values from the list. Those changes will affect any action tags that are executed downstream that use Field tokens.  

*   **If**: OPTIONAL: An expression that, when it evaluates to True, indicates the SilentPost should be executed. The If property allows you to perform conditional SilentPosts. All SilentPost tags will be evaluated in the order they appear on the form. If the first tag's If evaluates to False, XMod Pro will move on to the 2nd SilentPost tag. It will continue to iterate through the SilentPost tags until one evaluates to True or doesn't specify an If property.  

    _Example:_ `<SilentPost If='[[SubscribeMe]] = True' Url="/mailchimp.com" />`  

    In this example we are taking the value of the "SubscribeMe" column and comparing it to "True. If they are equal, the user will be sent to the mailchimp.com page. If they are not, XMod Pro will look for the next SilentPost tag and evaluate it.  

    ::: tip 
    Comparisons are text-only and are not case-sensitive. You can test for equality using the `=` operator or inequality using the `<>` operator.
    :::

*   **Using Tokens**: Unlike most form tags, which evaluate their tokens when the form is loaded, Action tags evaluate their tokens when they're executed (after successful form submission). This means that values passed into the form such as URL parameters will need to be stored in a hidden form control (typically a TextBox with its Visibility property set to False). On the other hand, this enables Action tags to use Field tokens as their property values so these tags can use values input by the user in the form.  

*   **Url**: The URL that will receive the POST request and data.  

*   **Fields**: You can optionally add one or more `<Field>` child tags to the SilentPost. These enable you to send data to the URL, specifying a Name and Value for each.  



## Example
```html {2-5}
<AddForm>
  <SilentPost Url="http://mysite.com/PostTest.aspx" If='[[P2=5]]'>
    <Field Name="param1" Value="1" />
    <Field Name="param2" Value='[[P2]]' />
  </SilentPost>

  <TextBox Id="txtParam2" DataField="P2" DataType="String"></TextBox><br />

  <AddButton Text="Add" /> &nbsp;<CancelButton Text="Cancel" />
</AddForm>
```
In the example above, we've setup a SilentPost that will send a `POST` request to `http://mysite.com/PostTest.aspx`. The request will incluce field called `param1` with a value of **1** and a field with a name of `param2` and a value that is pulled from the `txtParam2` TextBox.

