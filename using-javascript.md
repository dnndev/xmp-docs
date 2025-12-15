---
id: using-javascript
title: Using Javascript
category: Advanced
context: all
summary: >-
  This topic won't teach you how to use Javascript. Instead, it provides
  techniques for incorporating your scripts into your XMod Pro solutions.
keywords:
  - using
  - javascript
---
# Using Javascript

This topic won't teach you how to use Javascript. Instead, it provides techniques for incorporating your scripts into your XMod Pro solutions.  

## Injecting Script Into the Page

For plain Javascript, you can simply type it into your form or template and it will be rendered out to the page at run-time. If you need to register a Javascript libraries in other files or inject a function or several functions, use a Script Block tag. Use the `<xmod:ScriptBlock>` tag in templates and the `<ScriptBlock>` tag in forms.

## Using Script Inside XMod Pro Tag Attributes

Often, you'll need to react to an event initiated by an XMod Pro control. The most obvious example is the Click event of buttons, links, and clickable images. For this, you should put your Javascript in the OnClientClick attribute of the control. Here's an example. Note that this is not a complete example of the tag since we're only focusing on the use of Javascript

```xml
<xmod:DeleteButton ...OnClientClick="return confirm('Delete This Record?');" ...
```

When the button is clicked, the built-in Javascript function "confirm" is called. The confirmation function pops up a dialog which displays a message ("Delete This Record"), and prompts the user to click "OK" or "Cancel". If the user clicks "OK", the function returns "true". If the "Cancel" button is pressed, a value of "false" is returned.

It's important to return a value of true or false in cases like this. If false is returned, the button will stop its processing. In other words, it won't post back to the server and won't delete the record. If true is returned, then processing continues normally.

## Doing More with [[Join()]]

Let's say you want to pass one of your field values to a Javascript function. How would you do it? For this, you'll need to use XMod Pro's [Join function](./tokens/functions.md). The Join function allows you to merge text with field values and other token values. It can be used in plain text, but it's primary purpose is for use within tag attributes. See the Function Tokens help topic for the Join function's syntax:

```xml
<xmod:DeleteButton ... OnClientClick='[[Join("myFunction(""{0}"");", [[CompanyName]])]]' ...
```

There are a number of things happening in the above snippet:

1.  Since we're using a token, we have to delimit the OnClientClick attribute with **single quotes** (') instead of double-quotes (").
2.  Javascript is just text until it's interpreted by the browser, so we pass the Javascript call in as the Input to the Join function (the first parameter). Within the Javascript text, we use numbered placeholders (starting with zero) which correspond with the additional parameters we pass to the function. In this case, we just have one parameter, but we could have two or three or more. At run-time, the {0} will be replaced by the value of the CompanyName column.
3.  For the sake of this example, let's say the _myFunction_ function expects a text value, so we have to delimit it with quotes. However, since we're delimiting the OnClientClick attribute with single quotes, we have to use double quotes. The problem, though, is that we're _also_ using the double quotes to delimit the Join function. What to do? We have to escape the double quotes by typing two consecutive double quote characters for each individual double quote character we need.  

## Getting Form Control Client ID's

If you're using Javascript in your forms, you'll more than likely need to access the controls on the form from within your script. You'll quickly discover, though, that the ID value you use for your control in XMod Pro, doesn't match the ID that is rendered in the final HTML source code. ASP.NET works to ensure that ID's in the final page are unique within the page. So, it takes your ID and generates a long, but unique ID to use in the browser.

While it's nice ASP.NET helps keep your code HTML compliant, all that re-naming ends up making it very difficult to write client-side script that uses those ID's. Well, XMod Pro has your back. The AddForm and EditForm tags each have an attribute called **ClientName**. Create a unique value and place it in this attribute. Then you can access your form controls with simple dot-notation:

```xml
<AddForm ClientName="MyUniqueId">
  ...
  <TextBox ID="txtFirstName" .../>
  ...
  <a href="#" onclick="alert(document.getElementById(MyUniqueId.txtFirstName);return false;">Click Me</a>
  ...
</AddForm>
```

Ah, but wait... What if you are using a couple of FormView modules, each of which uses the SAME form. Your ClientName will no longer be unique in the page. It's not a likely scenario, but you can still pull it off. Use the [[Module:ID]] token and the [[Join()]] function to ensure uniqueness in the page:

```xml
<AddForm ClientName='[[Join("MyUniqueId{0}", [[Module:ID]])'>
  ...
</AddForm>
```

[ ](#top)
