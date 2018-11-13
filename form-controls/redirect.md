# <Redirect>

<a name="top" xmlns="http://www.w3.org/1999/xhtml"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

New to Version 4.0! The Redirect action tag will send the user to the specified URL (Target) at run-time. In previous versions you could set a redirect target on the Add and Update button tags and you still can. However, the Redirect tag allows you to perform conditional redirects based on form data.

<a name="syntax" xmlns="http://www.w3.org/1999/xhtml"></a>

## Syntax

<div xmlns="http://www.w3.org/1999/xhtml">`<Redirect`  
`    If="_expression_"`</div>

<div xmlns="">`    Target="_Redirect address_"  
    Method="_string_" />  
`</div>

 <a name="remarks" xmlns="http://www.w3.org/1999/xhtml"></a>

## Remarks

*   The Redirect action is only executed if the form has been successfully submitted. If there is a validation error or an error is thrown from the database, the action will not be performed.  

*   **Order Is Important**: Action tags are executed sequentially, so the order they appear within the form can be important. As an example, if one action fails with an error, all actions prior to the failed action will have executed. Those that occur after the failed action will not be executed. Additionally, some actions may have the ability to modify form values (this modification occurs after any form data has been sent to the database) - i.e. process form values, do calculations on them, transform them, even add and remove values from the list. Those changes will affect any action tags that are executed downstream that use Field tokens.
*   **Using Tokens**: Unlike most form tags, which evaluate their tokens when the form is loaded, Action tags evaluate their tokens when they're executed (after successful form submission). This means that values passed into the form such as URL parameters will need to be stored in a hidden form control (typically a TextBox with its Visibility property set to False). On the other hand, this enables Action tags to use Field tokens as their property values so these tags can use values input by the user in the form.  

*   **If**: An expression that, when it evaluates to True, indicates the Redirect should be executed. No other redirects will be processed because a user can only be sent to one destination at a time. The If property allows you to perform conditional redirection. All redirect tags will be evaluated in the order they appear on the form. If the first tag's If evaluates to False, XMod Pro will move on to the 2nd Redirect tag. It will continue to iterate through the Redirect tags until one evaluates to True or doesn't specify an If property. If no Redirects evaluate to True, normal processing takes place. This could mean the redirect on the clicked button is executed or, if there is not, normal redirection back to the calling page.  

    Typically you'll use this attribute if you want to only send an Redirect if a user selects a certain value in your form.  

    _Example:_ `<Redirect If='[[Department]] = Sales' Target="/mysite.com/sales.apx" />`  

    In this example we are taking the value of the "Department" column and comparing it to "Sales". If they are equal, the user will be sent to the sales.aspx page. If they are not, XMod Pro will look for the next Redirect tag and evaluate it.  

    NOTE: Comparisons are text-only and are not case-sensitive. You can test for equality using the "=" operator or inequality using the "<>" operator.  

*   **Method**: Determines how the redirection will be sent. The default value is Get. Valid values are:  

    *   **Get**: The user is redirected via the HTTP GET method (i.e. the normal method when navigating between web pages)
    *   **Post**: The user is redirected via the HTTP POST method.  

*   **Target**: This is the URL to which the user will be sent if the IF property evaluates to True or there is no IF property specified. You can use a period (.) for the Target property's value. The period acts as shortcut to redirect to the current page.  

[Back to top](#top)<a name="example" xmlns="http://www.w3.org/1999/xhtml"></a>

## Example

<div xmlns="http://www.w3.org/1999/xhtml">`<AddForm>`  
`  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName) VALUES(@FirstName, @LastName)" />`  
`  <table>`  
`    <tr>`  
`      <td>`  
`         <Label For="txtFirstName" Text="First Name" />`  
`         <TextBox Id="txtFirstName" DataField="FirstName" DataType="string" />`  
`       </td>`  
`    </tr>`  
`    <tr>`  
`      <td>`  
`        <Label For="txtLastName" Text="Last Name" />  
        <``TextBox Id="txtLastName" DataField="LastName" DataType="string" />`  
`      </td>`  
`    </tr>`  
`    <tr>`  
`      <td colspan="2">`  
`        <AddButton Text="Add" <span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml">Redirect="/Find.aspx"</span> /> <CancelButton Text="Cancel"/>`  
`      </td>`  
`    </tr>`  
`  </table>  
<span style="color: #ff0000;"><Redirect Target="/Find.aspx?ln=Smith" Method="Get" If="[[LastName]] = Smith" /></span>  
<span style="color: #ff0000;">  <Redirect Target="/Find.aspx?ln=Jones" Method="Get" If="[[LastName]] = Jones" /></span>  
</AddForm>`</div>

In the example above, there are 3 possible redirections that can occur based on user input. If the user enters a last name of "Smith" or "smith" she will be redirected to the URL: /Find.aspx?ln=Smith. If the user enters "Jones" or "jones" then they will be redirected to the URL: /Find.aspx?ln=Jones. If the user doesn't enter anything or enters some other name or value, they will be sent to the default URL specified on the AddButton tag: /Find.aspx where, presumably, all records - regardless of last name - would be listed.

[Back to top](#top)