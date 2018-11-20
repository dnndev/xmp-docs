# <xmod:CommandLink>

<a name="top"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

The CommandLink tag renders as a hyperlink at run-time. It is used to execute data commands in another template within the module instance. For instance, if you had two templates, you might put a CommandLink in template #1 to pass a parameter to the `<listdatasource>` of template #2, causing that template to re-load with the new result set.

<a name="syntax"></a>

## Syntax

<div xmlns="">`<xmod:CommandLink  
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
    Redirect="_url_"  
    RedirectMethod="**Get**|Post"  
    Style="_string_"  
    Text="string"  
    ToolTip="_string_"  
    Visible="**True**|False"  
    Width="_size_">` `   

    <Command Target="_string_" Type="List|Detail">  
        <Parameter Name="_string_" Value="_string_" />  
        <Parameter Name="_string_" Value="_string_" />  
_additional parameters as needed ..._  
    </Command>  
_additional commands as needed ..._  
</xmod:CommandLink>`</div>


## Remarks

*   **Usage:** Command controls are used to execute a pre-defined data command in another template. You can execute multiple commands within a single control. Commands are defined in the `<Command>` child tags. Each command will be executed in sequence, but please note that _there is no transaction assumed_. If a command fails, all those that went before it will NOT be rolled back.  

    For each command, you identify the template whose datasource you want to execute by specifying the template's ID in the "target" attribute. If you set the "type" attribute to List, the `<ListDataSource>` will be executed and passed any parameters you specify via `<Parameter>` child tags.  

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control, specified in [units](../unit-types.md)
*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More](../font-properties.md)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **OnClientClick**: Should you wish to perform some action on the client when the control is clicked, add your Javascript function call or script in this attribute. If your script returns _false_ the control will not perform its normal processing. If you return true then the control will perform its normal processing.  

*   **Redirect**: Enables you to redirect the user to an alternative URL after the button is clicked. The redirection occurs after any form processes initiated by the button click completes.  

*   **RedirectMethod**: Determines the HTTP method by which the user is redirected: "Get" or "Post".  

*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. `"color: red; border: solid 1px black;"`).  

*   **Text**: The caption that will be displayed on the control.  

*   **ToolTip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control.  

*   **Visible**: Determines if the control is visible (true) or hidden (false).  

*   **Width**: Width of the control in [units](../unit-types.md).  

## Example

<div xmlns="">`<div>  
  <table width="100%">  
    <tr>  
      <td colspan="2">  
        <!-- DEPARTMENTS TEMPLATE -->  
        <xmod:Template Id="Departments">  
          <ListDataSource CommandText="SELECT DepartmentId, DepartmentName FROM XMPDemo_Departments ORDER BY DepartmentName" />  
          <ItemTemplate>  
<span class="CodeHighlight"><xmod:CommandLink Text='[[DepartmentName]]'></span>  
<span class="CodeHighlight">              <Command Target="Employees" Type="list"></span>  
<span class="CodeHighlight">                <Parameter Name="DepartmentId" Value='[[DepartmentId]]' /></span>  
<span class="CodeHighlight">              </Command></span>  
<span class="CodeHighlight">              <Command target="EmployeeProfile" type="detail"></span>  
<span class="CodeHighlight">                <Parameter Name="EmployeeId" Value="-1" /></span>  
<span class="CodeHighlight">              </Command></span>  
<span class="CodeHighlight">            </xmod:CommandLink></span>&nbsp;  
          </ItemTemplate>  
        </xmod:Template>  
      </td>  
    <tr>  
      <td width="250" valign="top">  
        <!-- EMPLOYEES TEMPLATE -->  
        <xmod:Template Id="Employees">  
`          <ListDataSource CommandText="SELECT * FROM XMPDemo_Employees WHERE DepartmentId = @DepartmentId">  
           <Parameter Name="DepartmentId" Alias="DepartmentId" />  
         </ListDataSource>  
``<HeaderTemplate>  
            <p>Employees</p>  
          </HeaderTemplate>  
          <ItemTemplate>  
            <div style="text-align: middle;">  
<span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml"><span style="color: #000000;">              <xmod:CommandImage Text="Profile" ImageUrl="~/images/icon_hostusers_32px.gif" ImageAlign="absmiddle"></span></span>  
<span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml"><span style="color: #000000;">                <Command Type="detail" Target="EmployeeProfile"></span></span>  
<span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml"><span style="color: #000000;">                  <Parameter Name="EmployeeId" Value='[[EmployeeId]]' /></span></span>  
<span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml"><span style="color: #000000;">                </Command></span></span>  
<span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml"><span style="color: #000000;">              </xmod:CommandImage> &nbsp;<strong>[[FirstName]] [[LastName]]</strong></span></span>```  
            </div>  
          </ItemTemplate>  
        </xmod:Template>  
      </td>  
      <td width="500" valign="top">  
        <!-- EMPLOYEE PROFILE TEMPLATE -->  
        <xmod:Template Id="EmployeeProfile">  
          <DetailDataSource CommandText="SELECT * FROM XMPDemo_Employees WHERE EmployeeId = @EmployeeId">  
            <Parameter Name="EmployeeId" Alias="EmployeeId" value="-1" />  
          </DetailDataSource>  
          <DetailTemplate>  
            <h1>Employee Profile</h2>  
            <p style="font-size: 14px; font-weight: bold;">[[FirstName]] [[LastName]]</p>  
            <p style="font-size: 12px; font-weight: bold;"><em>[[JobTitle]]</em></p>  
            <p>[[Resume]]</p>  
          </DetailTemplate>  
        </xmod:Template >  
      </td>  
    </tr>  
  </table>  
</div>` </div>

