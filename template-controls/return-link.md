---
id: template-return-link
title: 'xmod:ReturnLink'
category: Action Links
context: template
summary: >-
  The ReturnLink tag renders as a clickable image at run-time. It is used to
  return the user from a detail view to the previously viewed list view. .
keywords:
  - return
  - link
  - template
---
# `<xmod:ReturnLink>`

The ReturnLink tag renders as a clickable image at run-time. It is used to return the user from a detail view to the previously viewed list view. .

## Syntax
```html
<xmod:ReturnLink
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
    Height="size"
    OnClientClick="javascript"
    Style="string"
    Text="string"
    ToolTip="string"
    Visible="True|False"
    Width="size" 
/>
```

## Remarks

*   **Usage**:The XMod Pro Return controls are used in detail templates. There, they serve to return the user to the list view he/she was previously viewing.  

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control, specified in [units](../unit-types.md)

*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More](../font-properties.md)

*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **OnClientClick**: Should you wish to perform some action on the client when the control is clicked, add your Javascript function call or script in this attribute. If your script returns _false_ the control will not perform its normal processing. If you return true then the control will perform its normal processing.  

*   **Style**: Same as the HTML style attribute. It allows you to apply CSS styling to the control (e.g. `color: red; border: solid 1px black;`).  

*   **Text**: The caption that will be displayed on the control.  

*   **ToolTip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control.  

*   **Visible**: Determines if the control is visible (true) or hidden (false).  

*   **Width**: Width of the control in [units](../unit-types.md).  

## Example
```html {34}
<div>
  <table width="100%">
    <tr>
      <td width="250" valign="top">

        <!-- EMPLOYEES TEMPLATE -->

        <xmod:Template Id="Employees">
          <ListDataSource CommandText="SELECT EmployeeId, FirstName, LastName FROM XMPDemo_Employees WHERE DepartmentId = @DepartmentId"> 
           <parameter name="DepartmentId" alias="DepartmentId"/>
          </ListDataSource>
          <DetailDataSource CommandText="SELECT * FROM XMPDemo_Employees WHERE EmployeeId = @EmpID">
            <parameter name="EmployeeId" alias="EmpID" />
          </DetailDataSource>
          
          <HeaderTemplate>
            <p>Employees</p>
          </HeaderTemplate>
          
          <ItemTemplate>
            <div style="text-align: middle;">
              <strong>[[FirstName]] [[LastName]]</strong>
              <xmod:detailbutton text="View Profile">
                <parameter name="EmployeeId" value='[[EmployeeId]]' />
              </xmod:detailbutton>
            </div>
          </ItemTemplate>
          
          <DetailTemplate>
            <h1>Employee Profile</h1>
            <h3>[[FirstName]] [[LastName]]</h3>
            <h4>Biography:</h4>
            <div>[[Bio]]</div>
            <xmod:ReturnLink Text="Go Back" />
          </DetailTemplate>
        
        </xmod:Template>
      </td>
    </tr>
  </table>
</div>  
```
