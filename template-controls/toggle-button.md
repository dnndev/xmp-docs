# <xmod:ToggleButton>

<a name="top"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

The ToggleButton tag renders as a push-button at run-time. It provides you with a simple interface for leveraging jQuery functionality. Simply set a few attributes and you're done - no scripting necessary.

Note: This tag leverages and assumes the jQuery library is included in the page.

<a name="syntax"></a>

## Syntax

<div xmlns="">`<xmod:ToggleButton  
    AccessKey="_string_"`</div>

<div xmlns="">`   BackColor="_color name_|#dddddd"  
    BorderColor="_color name_|#dddddd"  
    BorderStyle="**NotSet**|None|Dotted|Dashed|Solid|Double|Groove|Ridge| Inset|Outset"  
    BorderWidth_="size_"  
    CssClass="_string_"  
    Font-Bold="True|**False**"  
    Font-Italic="True|**False**"  
    Font-Names="_string_"  
    Font-Overline="True|**False**"  
    Font-Size="_string_|Smaller|Larger|XX-Small|X-Small|Small|Medium|Large|X-Large|XX-Large"  
    Font-Strikeout="True|**False**"  
    Font-Underline="True|**False**"  
    ForeColor="_color name_|#dddddd"  
    Height="_size_"  
    Speed="Slow|Normal|Fast|_integer_"  
    Style="_string_"  
    Target="_string_"  
    Text="_string_"  
    ToolTip="_string_"  
    Visible="**True**|False"  
    Width="_size_"`</div>

<div xmlns="">`/>  
`</div>


## Remarks

*   **Usage**: The XMod Pro Toggle controls work in conjunction with jQuery. They enable you to leverage jQuery without having to write any Javascript. Because of this, you must ensure that jQuery has been included in the page. If you are using DNN 5 or later, the library is usually included in the page without any effort on your part. If not, use the `<xmod:ScriptBlock>` tag to include the library. The Target attribute identifies the element in the page whose visibility you'd like to toggle. The optional Speed attribute can be used to achieve a fading effect.  

*   **AccessKey**: In browsers that support it, this property can be set to a character on the keyboard that can be used to set focus to the control. For instance, setting the value to F allows the user to access the control by pressing Alt+F on their keyboard (for Windows machines).  

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control, specified in [units](../unit-types.md)
*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More](../font-properties.md)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **Speed**: The rate at which the element becomes visible or is hidden. When specified, you can cause the element to fade in or out when it is toggled. HOWEVER, if speed is defined, the target must either be a block element or have its CSS style "display" set to "inline" explicitly. jQuery 1.2.6 (and maybe later versions) sets "display" to "block" to make the object visible, regardless of whether it is an inline element - unless it has been set to inline beforehand. It's possible this behavior may change in later versions of jQuery.  

    Valid values are:
    *   **Slow**: the element fades in/out at a slow rate of speed - approximately .6 seconds.
    *   **Normal**: the element fades in/out at a normal (medium) rate of speed - approximately .4 seconds.
    *   **Fast**: the element fades in/out at a fast rate of speed - approximately .2 seconds.
    *   _Numeric Value_: You can control the rate of speed more exactly by specifying a number. The number represents the number of milliseconds the transition should take. So, specifying 100 would cause the transition to occur in 1 tenth of a second. 500 would be half a second, and 1000 would be one full second.  

*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. `"color: red; border: solid 1px black;"`).  

*   **Target**: A jQuery "selector" that identifies the element(s) you would like to toggle. To select an element by its ID, use the # selector. So, to select an element with the client ID of "divMyResults" (without the quotes), the Target attribute would be "#divMyResults" (again, without the quotes). To select all DIV elements with the class name of "MyResults", you would use the period selector (.) - "div.MyResults".  

*   **Text**: The caption that will be displayed on the control.  

*   **ToolTip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control.  

*   **Visible**: Determines if the control is visible (true) or hidden (false). Default set to "true".  

*   **Width**: Width of the control in [units](../unit-types.md).

## Example

<div xmlns="">``<div>  
  <table width="100%">  
    <tr>  
      <td width="250" valign="top">  

        <!-- EMPLOYEES TEMPLATE -->  

        <xmod:Template Id="Employees">  
          <ListDataSource CommandText="SELECT EmployeeId, FirstName, LastName, Evaluation FROM XMPDemo_Employees WHERE DepartmentId = @DepartmentId">  
           <parameter name="DepartmentId" alias="DepartmentId" />  
          </ListDataSource>  

`` <HeaderTemplate>  
            <p>Employees</p>  
          </HeaderTemplate>``</div>

<div xmlns="">``  
          <ItemTemplate>  
            <div style="text-align: middle;">  
              <strong>[[FirstName]] [[LastName]]</strong>  
<span class="CodeHighlight">              <xmod:ToggleButton Text="View Employee Evaluation"  
                  Target='[[Join("#divEvaluation_{0}",[[EmployeeId]])]]'  
                  Speed="Fast" /></span>  

            </div>  
<span style="color: #ff0000;"><div id="divEvaluation_[[EmployeeId]]"></span>  
<span style="color: #ff0000;">              <p>[[Evaluation]]</p></span>  
<span style="color: #ff0000;">            </div></span>  
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

