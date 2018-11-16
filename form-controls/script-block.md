# `<ScriptBlock>`





The ScriptBlock tag is used to inject HTML<script> tags into one of several different locations in the page. Typically this is used to insert Javascript functions and/or libraries into the page. You can also insert <style> tags into the page using this tag.



## Syntax

<div>`<ScriptBlock  
    ScriptId="_string_"  
    BlockType="HeadScript|**ClientScript**|StartupScript|ClientScriptInclude"  
    RegisterOnce="True|**False**"  
    Url="_url_" >  
``  
    <script type="text/javascript" ...>  
      ..._Javascript_...  
    </script>  

</ScriptBlock>`</div>



## Remarks

*   **ScriptId**: This is an identifier for your block that uniquely identifies it within the hosting page - across modules. It is used when registering your script block and is required in order to prevent the block from being inserted more than once in the page.  

*   **BlockType**: This attribute allows you to specify which where in the page the scrip should be rendered. The default value is ClientScript
    *   **HeadScript**: The script block will be inserted between the `<head>` and `</head>` section of the page.
    *   **ClientScript**: The script block will be inserted near the top of the page. This is the default.
    *   **ClientScriptInclude**: Use this block type to insert a `<script>` tag that links to an external file. This is useful for including Javascript libraries.
    *   **StartupScript**: The script block will be inserted near the bottom of the page.  

*   **RegisterOnce**: If this value is set to True, the tag will first check to see if a code block with ScriptId has been registered in the page. If not, it will register your block. If it has been registered already, then no action is taken. If this value is False, the default value, then your script block will be inserted, regardless of any previously registered block. The RegisterOnce is only available for ClientScript, ClientScriptInclude, and StartupScript block types.  

*   **Url**: If the BlockType is set to ClientScriptInclude, this is the path to the Javascript file you wish to include. It is ignored if BlockType is set to a different value. You may optionally use the tilde (~) character in the URL to represent the path to the root of the web application.

  


## Example

<div>``````````<AddForm>  
<ScriptBlock ScriptId="AlertScripts" RegisterOnce="true">  
  <script type="text/javascript">  
    function helloWorld(){  
      alert('Hello World');  
    }  
    function goodbyeWorld(){  
      alert('Goodbye Cruel World');  
    }  
    function showMessage(sMessage){  
      alert(sMessage);  
    }  
  </script>  
</ScriptBlock>  
  <table width="100%">  
    <tr>  
      <td width="250" valign="top">  

        <!-- SCRIPT BLOCK EXAMPLE -->  
        <a href="#" onclick="helloWorld();">Hello World</a><br />  
        <a href="#" onclick="goodbyeWorld();">Goodbye</a><br />  
        <a href="#" onclick="showMessage('Hello and Goodbye')">Show Message</a>  
      ``  
      </td>  
    </tr>  
  </table>  
</AddForm>`` ```` ````</div>

