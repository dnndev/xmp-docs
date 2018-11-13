# <xmod:NavigateUrl>

<a name="top"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

The NavigateUrl tag (new to version 4.6) allows you to call the DNN API function NavigateUrl(). This allows you to generate URLs that utilize the site's configured URL Provider and makes it easier to generate Friendly links.

<a name="syntax"></a>

## Syntax

<div xmlns="">`<xmod:NavigateUrl  
    TabId="integer"  
    ControlKey="string" >  
``  
    <Parameter Name="string" Value="string" />  
    ...`</div>

<div xmlns="">`  
</xmod:NavigateUrl>`</div>

<a name="remarks"></a>

## Remarks

*   **ControlKey**:Optional. Specify this if you want to load a particular control on a page. Must supply the TabId if using this property. This property is not frequently used.  

*   **TabId**: Optional. The unique numeric value that represents the page. "Tab" is used for historical reasons. Pages in DNN used to be called Tabs. If no TabId is provided, NavigateUrl will return the current page's URL.  

*   **Parameter**: Optional. You can specify multiple Parameter tags. These child tags are used to pass parameters via the rendered URL. The tag will URLEncode the value prior to passing it to DNN. The URL parameter name is the value of the Name property. The parameter's value is defined in the Value property. All values are passed as text so no data type can be specified.

[Back to top](#top)  
<a name="example"></a>

## Example

<div xmlns="">`<div>  
  <table width="100%">  
    <tr>  
      <td width="250" valign="top">  

        <!-- EMPLOYEES TEMPLATE -->  

        <xmod:Template Id="Employees">  
          <ListDatasource commandtext="SELECT * FROM XMPDemo_Employees" />  
``  
          <ItemTemplate>  
            [[FirstName]] [[LastName]]<br />  
            <a href="<span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml"><xmod:NavigateUrl TabId="237"><Parameter Name="eid" Value='[[Id]]' /></xmod:NavigateUrl></span>">View Work History</a>  
          </ItemTemplate>  
``  
        </xmod:Template>  
      </td>  
    </tr>  
  </table>  
</div>`</div>

[Back to top](#top)