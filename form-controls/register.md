# `<Register>`

The Register tag enables you to use third-party controls in your XMod Pro forms. Note that only controls created specifically for XMod Pro can be used.

## Syntax
```html
<Register 
    TagPrefix="string"
    Namespace="string"
    Assembly="string" 
/> 
```
 

## Remarks

*   Should you choose to use third-party controls, you'll need to add a Register tag to your form definition for each collection. Register tags tell XMod Pro where to find the controls you use. You only use the tag once per library. The register tag is declared outside the `<AddForm>` and `<EditForm>` tags. This allows you to use the library in both forms without having to duplicate the register tag.  

*   **TagPrefix**: A short series of letter and numbers that you use as part of the control's tag. It helps XMod Pro determine what library the control belongs to.  

*   **Namespace**: The namespace in which custom control resides. This information should be supplied by the control developer.  

*   **Assembly**: This is the name of the assembly (DLL) in which the controls reside. Note, you do not specify the path to the DLL or the ".dll" extension. This information should be supplied by the control developer.



## Example
```html {1-3,11-12}
<Register TagPrefix="ctb" 
          Namespace="Acme.CoolTools.TextTools"
          Assembly="Acme.CoolTools" />
<AddForm>
  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName) 
                              VALUES(@FirstName, @LastName)" />
  <table>
    <tr>
      <td>
        <Label For="txtFirstName" Text="First Name" /> 
        <ctb:CoolTextBox id="txtFirstName" makeitcool="true" 
                         datafield="FirstName" datatype="string" />
       </td>
    </tr>
    <tr>
      <td>
        <Label For="txtLastName" Text="Last Name" />
        <TextBox Id="txtLastName" DataField="LastName" DataType="string" />
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <AddButton Yext="Add"/> <CancelButton Text="Cancel"/>
      </td>
    </tr>
  </table>
</AddForm>
```
