# <xmod:Each>

<a name="top"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

The Each tag (new to version 4.6) is used to split a delimited value - such as a comma-separated or pipe-separated value in your database. You can then iterate through each of these values, rendering out HTML. In other words, if you have a list of images stored in an Images column in your table, you can build a bullet list from that.

**NOTE**: The Each tag is designed to render Text and HTML. It will not render other XMod Pro tags.

<a name="syntax"></a>

## Syntax

<div xmlns="">`<xmod:Each  
    Delimiter="string - defaults to pipe ( | ) character"  
    Value="_string_">  
``  
    <FirstItemTemplate>...Text, HTML, **{index}**, **{count}**, **{value}**...</FirstItemTemplate>  
    <ItemTemplate>...Text, HTML, **{index}**, **{count}**, **{value}**...</ItemTemplate>  
    <AlternatingItemTemplate>...Text, HTML, **{index}**, **{count}**, **{value}**...</AlternatingItemTemplate>  
    <LastItemTemplate>...Text, HTML, **{index}**, **{count}**, **{value}**...</LastItemTemplate>  
    <SeparatorTemplate>...Text, HTML**{index}**, **{count}**, **{value}**...</SeparatorTemplate>  
</xmod:Each>`</div>


## Remarks

*   **Delimiter**: Optional. Defaults to the pipe character "|" which is the default for most XMod Pro Form controls that allow multiple selections like the CheckboxList and multi-select list boxes. This is the text that separates each value.  

*   **FirstItemTemplate**: This renders only when the tag is processing the first item in the list.  

*   **LastItemTemplate**: This renders only when the tag is processing the last item in the list.  

*   **ItemTemplate**: This renders for each item in the list. However, it will not render if this is the first item and a FirstItemTemplate has been defined. Likewise, it will not render if processing the last item in the list and a LastItemTemplate has been defined. Additionally, if an AlternatingItemTemplate has been defined and the current item is an even number, the ItemTemplate will not be rendered.  

*   **AlternatingItemTemplate**: This renders if the current item being processed is an even number. It will not render if a LastItemTemplate has been defined and the last item is an even number.  

*   **SeparatorTemplate**: This will render its content after each item in the list. It will not render after the last item in the list.  

*   **Value**: This is the delimited string that will be processed by the tag.  

*   **{index} Placeholder**: This will be replaced at run-time by the item number of the item currently being processed. This value is 1-based. So, in a 10-item list, the first item will be 1 and the last item will be 10.  

*   **{count} Placeholder**: This will be replaced at run-time by the total count of items in the list. So, in a 10-item list, this will be 10.  

*   **{value} Placeholder**: This will be replaced at run-time by the value of the current item. So, if the original value being processed was: Red|Green|Blue and the tag is processing the 2nd item in the list, {value} will be replaced by Green.

## Example

<div xmlns="">`<div>  
  <table width="100%">  
    <tr>  
      <td width="250" valign="top">  

        <!-- EMPLOYEES TEMPLATE -->  

        <xmod:Template Id="Employees">  
          <DetailDataSource CommandText="SELECT * FROM XMPDemo_Employees WHERE EmployeeId = @EmpID">  
            <Parameter Name="EmployeeId" Value='[[Url:eid]]' DataType="Int32" />  
          </DetailDataSource>  
``  
          <DetailTemplate>  
            <h1>Employee Profile</h1>  
            <h3>[[FirstName]] [[LastName]]</h3>  
            <h4>Biography:</h4>  
            <h6>Images</h6  
           <ul>  
<span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml">              <xmod:Each Delimiter="|" Value='[[Images]]'></span>  
<span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml">                <ItemTemplate><img src="/img/{value}" /></ItemTemplate></span>  
<span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml">              </xmod:Each></span>  
            </ul>  
          </DetailTemplate>  
        </xmod:Template>  
      </td>  
    </tr>  
  </table>  
</div>`</div>

