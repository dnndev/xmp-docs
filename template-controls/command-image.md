---
id: template-command-image
title: 'xmod:CommandImage'
category: Action Links
context: template
summary: >-
  The CommandImage tag renders as a clickable image at run-time. It is used to
  execute data commands in another template within the module instance.
keywords:
  - command
  - image
  - template
---
# `<xmod:CommandImage>`

The CommandImage tag renders as a clickable image at run-time. It is used to execute data commands in another template within the module instance. For instance, if you had two templates, you might put a CommandImage in template #1 to pass a parameter to the `<ListDataSource>` of template #2, causing that template to re-load with the new result set.

## Syntax
```html
<xmod:CommandImage
    AlternateText="string"
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
    ImageAlign="NotSet|Left|Right|Baseline|Top|Middle|Bottom|AbsBottom|AbsMiddle|TextTop"
    ImageUrl="url"
  OnClientClick="javascript" 
    Redirect="url"
    RedirectMethod="Get|Post"
    Style="string"
    ToolTip="string"
    Visible="True|False"
    Width="size">
 
    <Command Target="string" Type="List|Detail">
      <Parameter Name="string" Value="string" />
      <Parameter Name="string" Value="string" />
      additional parameters as needed ...
    </Command>
    additional commands as needed ...
</xmod:CommandImage>
```

## Remarks

*   **Usage:** Command controls are used to execute a pre-defined data command in another template. You can execute multiple commands within a single control. Commands are defined in the `<Command>` child tags. Each command will be executed in sequence, but please note that _there is no transaction assumed_. If a command fails, all those that went before it will NOT be rolled back.  

    For each command, you identify the template whose datasource you want to execute by specifying the template's ID in the "target" attribute. If you set the "type" attribute to List, the `<ListDataSource>` will be executed and passed any parameters you specify via `<Parameter>` child tags.  

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

*   **Redirect**: Enables you to redirect the user to an alternative URL after the button is clicked. The redirection occurs after any form processes initiated by the button click completes.  

*   **RedirectMethod**: Determines the HTTP method by which the user is redirected: "Get" or "Post".  

*   **Style**: Same as the HTML style attribute. It allows you to apply CSS styling to the control (e.g. `color: red; border: solid 1px black;`).  

*   **ToolTip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control.  

*   **Visible**: Determines if the control is visible (true) or hidden (false).  

*   **Width**: Width of the control in [units](../unit-types.md).  

## Example
```html {34-38}
<div>
  <table width="100%">
    <tr>
      <td colspan="2">

        <!-- DEPARTMENTS TEMPLATE -->
        <xmod:Template Id="Departments">
          <ListDataSource CommandText="SELECT DepartmentId, DepartmentName FROM XMPDemo_Departments ORDER BY DepartmentName" />
          <ItemTemplate>
            <xmod:CommandButton Text='[[DepartmentName]]'>
              <Command Target="Employees" Type="list">
                <Parameter Name="DepartmentId" Value='[[DepartmentId]]' />
              </Command >
              <Command Target="EmployeeProfile" Type="detail">
                <Parameter Name="EmployeeId" Value="-1" />
              </Command>
            </xmod:CommandButton>&nbsp;
          </ItemTemplate>
        </xmod:Template>
      </td>
    <tr>
      <td width="250" valign="top">

        <!-- EMPLOYEES TEMPLATE -->
        <xmod:Template Id="Employees">
          <ListDataSource CommandText="SELECT * FROM XMPDemo_Employees WHERE DepartmentId = @DepartmentId"> 
            <Parameter Name="DepartmentId" Alias="DepartmentId" />
          </ListDataSource>
          <HeaderTemplate>
            <p>Employees</p>
          </HeaderTemplate>
          <ItemTemplate>
            <div style="text-align: middle;">
              <xmod:CommandImage Text="Profile" ImageUrl="~/images/icon_hostusers_32px.gif" ImageAlign="absmiddle">
                <Command Type="detail" Target="EmployeeProfile">
                  <Parameter Name="EmployeeId" Value='[[EmployeeId]]' />
                </Command>
              </xmod:CommandImage> &nbsp;<strong>[[FirstName]] [[LastName]]</strong>
            </div>
          </ItemTemplate>
        </xmod:Template>
      </td>
      <td width="500" valign="top">

        <!-- EMPLOYEE PROFILE TEMPLATE -->
        <xmod:Template Id="EmployeeProfile">
          <DetailDataSource CommandText="SELECT * FROM XMPDemo_Employees WHERE EmployeeId = @EmployeeId">
            <Parameter Name="EmployeeId" Alias="EmployeeId" Value="-1" />
          </DetailDataSource>
          <DetailTemplate>
            <h1>Employee Profile</h2>
            <p style="font-size: 14px; font-weight: bold;">[[FirstName]] [[LastName]]</p>
            <p style="font-size: 12px; font-weight: bold;"><em>[[JobTitle]]</em></p>
            <p>[[Resume]]</p>
          </DetailTemplate>
        </xmod:Template>
      </td>
    </tr>
  </table>
</div>  
```
