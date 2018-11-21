# `<xmod:jQueryReady>`

The jQueryReady tag is a quick and easy way to embed a jQuery "ready" event in the page. This tag requires jQuery be included in the page.

## Syntax
```html
<xmod:jQueryReady>  
  jQuery and/or Javascript script goes here. No need for a <script></script> tag
</xmod:jQueryReady>
```

## Remarks

*   **Usage**: Use this tag to quickly insert Javascript and/or jQuery code that should only be run after the document's DOM has been loaded. The `jQuery(document).ready()` function is standard fare when working with jQuery. This tag allows you to forget about the boilerplate script and focus on your script. The tag will place your script near the bottom of the page - standard practice for improving page load times. Importantly, the tag automatically creates a "closure" for your script allowing you to use the "$" shortcut instead of "jQuery" in your code. Use of the closure also helps ensure your script operates in its own scope and will be not be impacted by other Javascript on the page. This tag requires jQuery be included in the page.

## Example

In the example below, we've set the DIV tag containing the Employee's biography to initially be hidden (`style="display:none;"`). Then, we used the jQueryReady tag to attach some code to the H4 tag's ("Biography" header) click event. It simply makes the biography DIV tag visible.

```html {23-27}
<div>
  <table width="100%">
    <tr>
      <td width="250" valign="top">

        <!-- EMPLOYEES TEMPLATE -->

        <xmod:Template Id="Employees">
          <DetailDataSource CommandText="SELECT * FROM XMPDemo_Employees WHERE EmployeeId = @EmpID">
            <Parameter name="EmployeeId" alias="EmpID" />
          </DetailDataSource>

          <DetailTemplate>
            <h1>Employee Profile</h1>
            <h3>[[FirstName]] [[LastName]]</h3>
            <h4 class="bio">Biography:</h4>
            <div style="display:none;">[[Bio]]</div>
          </DetailTemplate>
        </xmod:Template>
      </td>
    </tr>
  </table>
  <xmod:jQueryReady>
    $("h4.bio").click(function(){
      $(this).next().show();
    });
  </xmod:jQueryReady>
</div>
```