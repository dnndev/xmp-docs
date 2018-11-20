# <xmod:ReturnImage>

<a name="top"></a>


The ReturnImage tag renders as a clickable image at run-time. It is used to return the user from a detail view to the previously viewed list view.

<a name="syntax" xmlns=""></a>

## Syntax

<div xmlns="">`<xmod:ReturnImage  
    AlternateText="_string_"  
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
    ImageAlign="NotSet|Left|Right|Baseline|Top|Middle|Bottom|AbsBottom|AbsMiddle|TextTop"  
    ImageUrl="_url_"`</div>

<div xmlns="">`    OnClientClick="_javascript_"  
    Style="_string_"  
    ToolTip="_string_"  
    Visible="**True**|False"  
    Width="_size_" />` </div>

<a name="remarks" xmlns=""></a>

## Remarks

*   **Usage**: The XMod Pro Return controls are used in detail templates. There, they serve to return the user to the list view he/she was previously viewing.  

*   **AlternateText**: Use this attribute's value will be used as the image's "alt" text. The "alt" text is generally used by screen reader software used by visually impaired users to identify the content of an image. It may also be used by search engines.  

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control, specified in [units](../unit-types.md)
*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More](../font-properties.md)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **ImageAlign**: This attribute determines how the image will be aligned with respect to the other elements in its context.  

*   **ImageUrl**: Specify a URL to the image. You may use the tilde (~) character to represent the application's root directory. For instance: ImageUrl="~/images/myimage.gif" might map to "/dnntestsite/images/myimage.gif" on your localhost development machine and "/images/myimage.gif" on your production server.  

*   **OnClientClick**: Should you wish to perform some action on the client when the control is clicked, add your Javascript function call or script in this attribute. If your script returns _false_ the control will not perform its normal processing. If you return true then the control will perform its normal processing.  

**Style**

*   **ToolTip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control.  

*   **Visible**: Determines if the control is visible (true) or hidden (false).  

*   **Width**: Width of the control in [units](../unit-types.md).  

<a name="example" xmlns=""></a>

## Example

<div xmlns="">``<div>  
  <table width="100%">  
    <tr>  
      <td width="250" valign="top">  

        <!-- EMPLOYEES TEMPLATE -->  

        <xmod:Template Id="Employees">  
          <ListDataSource CommandText="SELECT EmployeeId, FirstName, LastName FROM XMPDemo_Employees WHERE DepartmentId = @DepartmentId">  
           <Parameter Name="DepartmentId" Alias="DepartmentId"/>  
          </ListDataSource>  
          <DetailDataSource CommandText="SELECT * FROM XMPDemo_Employees WHERE EmployeeId = @EmpID">  
            <Parameter Name="EmployeeId" Alias="EmpID" />  
          </DetailDataSource>  
`` <HeaderTemplate>  
            <p>Employees</p>  
          </HeaderTemplate>  
          <ItemTemplate>  
            <div style="text-align: middle;">  
              <strong>[[FirstName]] [[LastName]]</strong>  
              <xmod:DetailButton Text="View Profile">  
                <Parameter Name="EmployeeId" Value='[[EmployeeId]]' />  
              </xmod:DetailButton>  
            </div>  
          </ItemTemplate>  
          <DetailTemplate>  
            <h1>Employee Profile</h1>  
            <h3>[[FirstName]] [[LastName]]</h3>  
            <h4>Biography:</h4>  
            <div>[[Bio]]</div>  
<span style="color: #ff0000;"><xmod:ReturnImage Text="Go Back" ImageUrl="~/images/leftarrow.gif" AlternateText="Return"/></span>  
          </DetailTemplate>  
        </xmod:Template>  
      </td>  
    </tr>  
  </table>  
</div>`` </div>

