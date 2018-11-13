# <xmod:MetaTags>

<a name="top"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

The MetaTags tag is used to alter the host page's Title, Description, and Keywords. This is useful for Search Engine Optimization (SEO) as well as being an aid for your users.

<a name="syntax"></a>

## Syntax

<div xmlns="">`<xmod:MetaTags>  
``  
    <Title Append="True|**False**">...Title Text...</Title>  
    <Keywords Append="True|**False**">...Keywords...</Keywords>  
    <Description Append="True|**False**">...Description...</Description>  
    <Redirect Delay="integer" Url="_string_" />  

</xmod:MetaTags>`</div>

<a name="remarks"></a>

## Remarks

*   **Title**: The page's Title will be replaced with the tag's inner content. If append is specified and is True, then the content will be appended to the page's Title.  

*   **Keywords**: The page's Keywords will be replaced with the tag's inner content. If append is specified and is True, then the content will be appended to the page's Keywords. Note: for this tag to function correctly, you should set the default Keywords in the DNN Site Settings page for your website.  

*   **Description**: The page's Description will be replaced with the tag's inner content. If append is specified and is True, then the content will be appended to the page's Description. Note: for this tag to function correctly, you should set the default Description in the DNN Site Settings page for your website.  

*   **Redirect**: This will insert a 'refresh' meta tag into the page that will redirect the browser to another URL. The Delay value indicates the number of seconds before the redirect takes place. If you set delay to 0 the redirect will take place immediately. (new to version 4.3)  

[Back to top](#top)  
<a name="example"></a>

## Example

<div xmlns="">`<div>  
  <table width="100%">  
    <tr>  
      <td width="250" valign="top">  

        <!-- EMPLOYEES TEMPLATE -->  

        <xmod:Template Id="Employees">  
          <DetailDataSource CommandText="SELECT * FROM XMPDemo_Employees WHERE EmployeeId = @EmpID">  
            <parameter name="EmployeeId" alias="EmpID" />  
          </DetailDataSource>  
``  
          <DetailTemplate>  
            <h1>Employee Profile</h1>  
            <h3>[[FirstName]] [[LastName]]</h3>  
            <h4>Biography:</h4>  
            <div>[[Bio]]</div>  
<span class="CodeHighlight">            <xmod:MetaTags></span>  
<span class="CodeHighlight">              <Title>Employee Profile for [[FirstName]] [[LastName]]</Title></span>  
<span class="CodeHighlight">              <Keywords append="true">[[FirstName]],[[LastName]]</Keywords></span>  
<span class="CodeHighlight">            </xmod:MetaTags></span>  
          </DetailTemplate>  
        </xmod:Template>  
      </td>  
    </tr>  
  </table>  
</div>`</div>

[Back to top](#top)