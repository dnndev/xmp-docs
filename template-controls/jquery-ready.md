# <xmod:jQueryReady>

<a name="top" xmlns="http://www.w3.org/1999/xhtml"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

The jQueryReady tag is a quick and easy way to embed a jQuery "ready" event in the page. This tag requires jQuery be included in the page.

<a name="syntax" xmlns="http://www.w3.org/1999/xhtml"></a>

## Syntax

<div xmlns="">`<xmod:jQueryReady>``  
_[jQuery and/or Javascript script]_  
</xmod:jQueryReady>`</div>

<a name="remarks" xmlns="http://www.w3.org/1999/xhtml"></a>

## Remarks

*   **Usage**: Use this tag to quickly insert Javascript and/or jQuery code that should only be run after the document's DOM has been loaded. The jQuery(document).ready() function is standard fare when working with jQuery. This tag allows you to forget about the boilerplate script and focus on your script. The tag will place your script near the bottom of the page - standard practice for improving page load times. Importantly, the tag automatically creates a "closure" for your script allowing you to use the "$" shortcut instead of "jQuery" in your code. Use of the closure also helps ensure your script operates in its own scope and will be not be impacted by other Javascript on the page. This tag requires jQuery be included in the page.

[Back to top](#top)  
<a name="example" xmlns="http://www.w3.org/1999/xhtml"></a>

## Example

In the example below, we've set the DIV tag containing the Employee's biography to initially be hidden (style="display:none;"). Then, we used the jQueryReady tag to attach some code to the H4 tag's ("Biography" header) click event. It simply makes the biography DIV tag visible.

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
<span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml"><h4 class="bio">Biography:</h4></span>  
<span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml">            <div style="display:none;">[[Bio]]</div></span>  
          </DetailTemplate>  
        </xmod:Template>  
      </td>  
    </tr>  
  </table>`</div>

<div xmlns="">`<span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml"><xmod:jQueryReady></span>  
<span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml">    $("h4.bio").click(function(){</span>  
<span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml">      $(this).next().show();</span>  
<span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml">    });</span>  
<span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml">  </xmod:jQueryReady></span>  
</div>`</div>

[Back to top](#top)