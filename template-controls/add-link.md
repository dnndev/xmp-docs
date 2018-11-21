# `<xmod:AddLink>`

The AddLink tag renders as a clickable image at run-time. It is used to show the form defined by the `<AddForm>` tag in the module instance's selected form.

## Syntax
```html
<xmod:AddLink
    BackColor="color name|#dddddd"
    BorderColor="color name|#dddddd"
    BorderStyle="NotSet|None|Dotted|Dashed|Solid|Double|Groove|Ridge| Inset|Outset"
    BorderWidth="size"
    CssClass="string"
    Font-Bold="True|False"
    Font-Italic="True|False"
    Font-Names="string"
    Font-Overline="True|False"
    Font-Size="string|Smaller|Larger|XX-Small|X-Small|Small|Medium| Large|X-Large|XX-Large"
    Font-Strikeout="True|False"
    Font-Underline="True|False"
    ForeColor="color name|#dddddd"
    Form="form name"
    Height="size"
    OnClientClick="javascript"
    Style="string"
    Text="string"
    ToolTip="string"
    Visible="True|False"
    Width="size" >

      <Parameter Name="string" Value="string" />
      <Parameter Name="string" Value="string" />
      ...additional parameters as needed ...

</xmod:AddLink>  
```

## Remarks

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control, specified in [units](../unit-types.md)
*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More](../font-properties.md)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **Form**: (New to version 4.7) This property allows you to specify an alternate form to display. It overrides the form specified in the module's configuration for the button. Use this property to be able to use additional forms. It is helpful if you are using multiple template tags with different content and want to allow the user to manage data directly from that template's tag without having to go to a different page.  

*   **OnClientClick**: Should you wish to perform some action on the client when the control is clicked, add your Javascript function call or script in this attribute. If your script returns _false_ the control will not perform its normal processing. If you return true then the control will perform its normal processing.  

*   **Style**: Same as the HTML style attribute. It allows you to apply CSS styling to the control (e.g. `color: red; border: solid 1px black;`).  

*   **Text**: The caption that will be displayed on the control.  

*   **ToolTip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control.  

*   **Visible**: Determines if the control is visible (true) or hidden (false).  

*   **Width**: Width of the control in [units](../unit-types.md).  

*   **Parameter Tags**: Use of the `<Parameter>` tags is optional. Use them if you want to pass values to the `<AddForm>`.  

## Example
```html {21}
<div>
  <table width="100%">
    <tr>
      <td width="250" valign="top">

        <!-- EMPLOYEES TEMPLATE -->

        <xmod:Template Id="Employees">
          <ListDataSource commandtext="SELECT * FROM XMPDemo_Employees WHERE DepartmentId = @DepartmentId"> 
            <Parameter Name="DepartmentId" Alias="DepartmentId"/>
          </ListDataSource>
          <HeaderTemplate>
            <p>Employees</p>
          </HeaderTemplate>
          <ItemTemplate>
            <div style="text-align: middle;">
              <strong>[[FirstName]] [[LastName]]</strong>
            </div>
          </ItemTemplate>
          <FooterTemplate>
            <xmod:AddLink Text="New Employee" />
          </FooterTemplate>
        </xmod:Template>
      </td>
    </tr>
  </table>
</div> 
```
