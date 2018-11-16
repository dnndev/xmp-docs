# `<Text>`





The Text tag renders as un-decorated text at run-time.



## Syntax

<div>`<Text`  
``    DataField="_string_"`  
    Nullable="True|**False**"  
``/> `</div>

 

## Remarks

The main purpose of the Text tag is to render the value of a column from the form's SelectCommand in the form. For instance, you may be retrieving the user's last login date and want display that to the user on the form. So, you use the Text tag along with some HTML and text to your form like:

`<strong>Last Login Date: <Text datafield="LastLogin" /></strong>`.

You may also find the Text tag useful when combined with Javascript. The Text tag utilizes one-way binding. It can receive data from a SelectCommand, but it does not participate in the SubmitCommand. In other words, data in a Text tag is not saved to the database.

## Attributes  

*   **DataField**: Name of the parameter in the `<submitcommand>` which will be filled with this control's data on when the form is submitted and/or the parameter in the `<selectcommand>` which will supply this control's data when the form is loaded. This attribute is required if the control will participate in operations with your form's data commands.
*   **Nullable**: If True (the default is False), the control will return a DBNull value if the control is blank or contains just whitespace. If a DBNull value is passed to the control, the control will be set to an empty string.



## Example

<div>`<addform>`  
`  <a href="#" onclick="alert('<Text datafield="LastLogin"/>')">Click for Last Login Date</a>`  
`  <table>`  
`    <tr>`  
`      <td>`  
`        <label for="txtFirstName" text="First Name" />`  
`        <Textbox id="txtFirstName" datafield="FirstName" datatype="string" />`  
`      </td>`  
`    </tr>`  
`    ...`  
`    <tr>`  
`      <td colspan="2">`  
`        <addbutton text="Add"/>&nbsp;<cancelbutton text="Cancel"/>`  
`      </td>`  
`    </tr>`  
`  </table>`  
`</addform>`</div>

