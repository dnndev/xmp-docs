# <xmod:DetailButton>

<a name="top"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

The DetailButton tag renders as a push-button at run-time. It is used to retrieve the `<DetailDataSource>` of its parent `<xmod:Template>` and displays that data in the `<DetailTemplate>` defined in the parent `<xmod:Template>` tag.

<a name="syntax"></a>

## Syntax

<div xmlns="">`<xmod:DetailButton  
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
    Height="_size_"  
    OnClientClick="_javascript_"  
    Style="_string_"  
    Text="_string_"  
    ToolTip="_string_"  
    Visible="**True**|False"  
    Width="_size_" >  

      <Parameter Name="_string_" Value="_string_" Datatype="_boolean_|_string_|_int32_" />  
      <Parameter Name="_string_" Value="_string_" Datatype="_boolean_|_string_|_int32_" />  
      ..._additional parameters as needed ...  
_  
</xmod:DetailButton>` </div>


## Remarks

*   **Usage**: The XMod Pro Detail controls work in conjunction with the `<DetailDataSource>` tag of the `<xmod:Template>` tag. Typically, the detail command will include one or more `<parameter>` tags that identify which record should be retrieved. The detail control should use the same parameter names and fill them with valid values, typically from the current record. That's why detail controls are typically found in `<ItemTemplate>` and `<AlternatingItemTemplate>` tags.  

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control, specified in [units](../unit-types.md)
*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More](../font-properties.md)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **OnClientClick**: Should you wish to perform some action on the client when the control is clicked, add your Javascript function call or script in this attribute. If your script returns _false_ the control will not perform its normal processing. If you return true then the control will perform its normal processing.  

*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. `"color: red; border: solid 1px black;"`).  

*   **Text**: The caption that will be displayed on the control.  

*   **ToolTip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control.  

*   **Visible**: Determines if the control is visible (true) or hidden (false).  

*   **Width**: Width of the control in [units](../unit-types.md).  

## Example

<div xmlns="">``<div>  
  <table width="100%">  
    <tr>  
      <td width="250" valign="top">  

        <!-- EMPLOYEES TEMPLATE -->  

        <xmod:Template id="Employees">  
          <ListDataSource CommandText="SELECT EmployeeId, FirstName, LastName FROM XMPDemo_Employees WHERE DepartmentId = @DepartmentId">  
           <Parameter Name="DepartmentId" Alias="DepartmentId"/>  
          </ListDataSource >  

          <DetailDataSource CommandText="SELECT * FROM XMPDemo_Employees WHERE EmployeeId = @EmployeeId">  
            <Parameter Name="EmployeeId" />  
          </DetailDataSource>  

``<HeaderTemplate>  
            <p>Employees</p>  
          </HeaderTemplate>  

          <ItemTemplate>  
            <div style="text-align: middle;">  
              <strong>[[FirstName]] [[LastName]]</strong>  
<span class="CodeHighlight">              <xmod:DetailButton Text="View Profile"></span>  
<span class="CodeHighlight">                <Parameter Name="EmployeeId" Value='[[EmployeeId]]' Datatype="int32" /></span>  
<span class="CodeHighlight">              </xmod:DetailButton></span>  
            </div>  
          </ItemTemplate>``</div>

<div xmlns="">``  
          <DetailTemplate>  
            <h1>Employee Profile</h1>  
            <h3>[[FirstName]] [[LastName]]</h3>  
            <h4>Biography:</h4>  
            <div>[[Bio]]</div>  
          </DetailTemplate>  
        </xmod:Template>  
      </td>  
    </tr>  
  </table>  
</div>`` </div>

