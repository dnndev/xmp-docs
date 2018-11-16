# `<Register>`





The Register tag enables you to use third-party controls in your XMod Pro forms. Note that only controls created specifically for XMod Pro can be used.



## Syntax

<div style="font-size: 9pt;">`<Register`  
`    TagPrefix="_string_"`</div>

<div style="font-size: 9pt;">`    Namespace="_string_"`</div>

<div style="font-size: 9pt;">`    Assembly="_string_"`  
`/> `</div>

 

## Remarks

*   Should you choose to use third-party controls, you'll need to add a Register tag to your form definition for each collection. Register tags tell XMod Pro where to find the controls you use. You only use the tag once per library. The register tag is declared outside the <span style="font-family: monospace;"><AddForm></span> and <span style="font-family: monospace;"><EditForm></span> tags. This allows you to use the library in both forms without having to duplicate the register tag.  

*   **TagPrefix**: A short series of letter and numbers that you use as part of the control's tag. It helps XMod Pro determine what library the control belongs to.  

*   **Namespace**: The namespace in which custom control resides. This information should be supplied by the control developer.  

*   **Assembly**: This is the name of the assembly (DLL) in which the controls reside. Note, you do not specify the path to the DLL or the ".dll" extension. This information should be supplied by the control developer.



## Example

<div>`<span style="color: #ff0000;"><Register TagPrefix="ctb" Namespace="Acme.CoolTools.TextTools" Assembly="Acme.CoolTools" /></span>  
<AddForm>`  
`  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName) VALUES(@FirstName, @LastName)" />`  
`  <table>`  
`    <tr>`  
`      <td>`  
`         <Label For="txtFirstName" Text="First Name" />`  
`<span style="color: #ff0000;"><ctb:CoolTextBox id="txtFirstName" makeitcool="true" datafield="FirstName" datatype="string" /></span>`  
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
`        <AddButton Yext="Add"/> <CancelButton Text="Cancel"/>`  
`      </td>`  
`    </tr>`  
`  </table>  
``</AddForm>`</div>

