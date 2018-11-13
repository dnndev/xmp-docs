# <xmod:AddLink>

<a name="top"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

The AddLink tag renders as a clickable image at run-time. It is used to show the form defined by the `<AddForm>` tag in the module instance's selected form.

<a name="syntax"></a>

## Syntax

<div xmlns="">`<xmod:AddLink  
    BackColor="_color name_|#dddddd"  
    BorderColor="_color name_|#dddddd"  
    BorderStyle="**NotSet**|None|Dotted|Dashed|Solid|Double|Groove|Ridge| Inset|Outset"  
    BorderWidth_="size_"  
    CssClass="_string_"  
    Font-Bold="True|**False**"  
    Font-Italic="True|**False**"  
    Font-Names="_string_"  
    Font-Overline="True|**False**"  
    Font-Size="_string_|Smaller|Larger|XX-Small|X-Small|Small|Medium| Large|X-Large|XX-Large"  
    Font-Strikeout="True|**False**"  
    Font-Underline="True|**False**"  
    ForeColor="_color name_|#dddddd"  
    Form="_form name_"  
    Height="_size_"  
    OnClientClick="_javascript_"  
    Style="_string_"  
    Text="_string_"  
    ToolTip="_string_"  
    Visible="**True**|False"  
    Width="_size_" `>  

      <Parameter Name="_string_" Value="_string_" />  
      <Parameter Name="_string_" Value="_string_" />  
      ..._additional parameters as needed ...  
_  
</xmod:AddLink>`` </div>

<a name="remarks"></a>

## Remarks

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control, specified in [units.  
     ](units.html)
*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More  
     ](fontproperties.html)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](units.html).  

*   **Form**: (New to version 4.7) This property allows you to specify an alternate form to display. It overrides the form specified in the module's configuration for the button. Use this property to be able to use additional forms. It is helpful if you are using multiple template tags with different content and want to allow the user to manage data directly from that template's tag without having to go to a different page.  

*   **OnClientClick**: Should you wish to perform some action on the client when the control is clicked, add your Javascript function call or script in this attribute. If your script returns _false_ the control will not perform its normal processing. If you return true then the control will perform its normal processing.  

*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. "color: red; border: solid 1px black;").  

*   **Text**: The caption that will be displayed on the control.  

*   **ToolTip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control.  

*   **Visible**: Determines if the control is visible (true) or hidden (false).  

*   **Width**: Width of the control in [units](units.html).  

*   **Parameter Tags**: Use of the `<Parameter>` tags is optional. Use them if you want to pass values to the `<AddForm>`.  

[Back to top](#top)  
<a name="example"></a>

## Example

<div xmlns="">``<div>  
  <table width="100%">  
    <tr>  
      <td width="250" valign="top">  

        <!-- EMPLOYEES TEMPLATE -->  

        <xmod:Template Id="Employees">  
          <ListDataSource commandtext="SELECT * FROM XMPDemo_Employees WHERE DepartmentId = @DepartmentId">  
           <Parameter Name="DepartmentId" Alias="DepartmentId"/>  
         </ListDataSource>  
``<HeaderTemplate>  
            <p>Employees</p>  
          </HeaderTemplate>  
          <ItemTemplate>  
            <div style="text-align: middle;">  
              <strong>[[FirstName]] [[LastName]]</strong>  
            </div>  
          </ItemTemplate>  
          <FooterTemplate>  
<span class="CodeHighlight">            <xmod:AddLink Text="New Employee" /></span>  
          </FooterTemplate>  
        </xmod:Template>  
      </td>  
    </tr>  
  </table>  
</div>` `</div>

[Back to top](#top)