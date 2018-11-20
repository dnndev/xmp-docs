# <xmod:ReturnButton>

<a name="top"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

The ReturnButton tag renders as a push-button at run-time. It is used to return to the list view from a detail view.

<a name="syntax"></a>

## Syntax

<div xmlns="">`<xmod:ReturnButton  
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
    Width="_size_" />` </div>


## Remarks

*   **Usage**: The XMod Pro Return controls are used in detail templates. There, they serve to return the user to the list view he/she was previously viewing.  

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

        <xmod:Template Id="Employees">  
          <ListDataSource CommandText="SELECT EmployeeId, FirstName, LastName FROM XMPDemo_Employees WHERE DepartmentId = @DepartmentId">  
           <parameter name="DepartmentId" alias="DepartmentId"/>  
          </ListDataSource>  
          <DetailDataSource CommandText="SELECT * FROM XMPDemo_Employees WHERE EmployeeId = @EmpID">  
            <parameter name="EmployeeId" alias="EmpID" />  
          </DetailDataSource>  
`` <HeaderTemplate>  
            <p>Employees</p>  
          </HeaderTemplate>  
          <ItemTemplate>  
            <div style="text-align: middle;">  
              <strong>[[FirstName]] [[LastName]]</strong>  
              <xmod:DetailButton Text="View Profile">  
                <parameter name="EmployeeId" value='[[EmployeeId]]' />  
              </xmod:DetailButton>  
            </div>  
          </ItemTemplate>  
          <DetailTemplate>  
            <h1>Employee Profile</h1>  
            <h3>[[FirstName]] [[LastName]]</h3>  
            <h4>Biography:</h4>  
            <div>[[Bio]]</div>  
<span style="color: #ff0000;"><xmod:ReturnButton Text="Go Back" /></span>  
          </DetailTemplate>  
        </xmod:Template>  
      </td>  
    </tr>  
  </table>  
</div>`` </div>

