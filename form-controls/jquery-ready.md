# <jQueryReady>

<a name="top" xmlns="http://www.w3.org/1999/xhtml"></a>



The jQueryReady tag is a quick and easy way to embed a jQuery "ready" event in the page. This tag requires jQuery be included in the page.

<a name="syntax" xmlns="http://www.w3.org/1999/xhtml"></a>

## Syntax

<div xmlns="">`<jQueryReady>` `    
  _[jQuery and/or Javascript script]_  
</jQueryReady>`</div>



## Remarks

*   **Usage**: Use this tag to quickly insert Javascript and/or jQuery code that should only be run after the document's DOM has been loaded. The jQuery(document).ready() function is standard fare when working with jQuery. This tag allows you to forget about the boilerplate script and focus on your script. The tag will place your script near the bottom of the page - standard practice for improving page load times. Importantly, the tag automatically creates a "closure" for your script allowing you to use the "$" shortcut instead of "jQuery" in your code. Use of the closure also helps ensure your script operates in its own scope and will be not be impacted by other Javascript on the page. This tag requires jQuery be included in the page.

  


## Example

In the example below, added a "help" image and some help text just after the ListBox. We've set the help SPAN tag containing the help text to initially be hidden (style="display:none;"). Then, we used the jQueryReady tag to attach some code to the image tag's click event. It simply makes the help SPAN tag visible.

<div xmlns="">``<AddForm>`  
`  ...`  
`  <table>`  
`    <tr>`  
`       <td>`  
`        <label for="txtFirstName" text="First Name" />`  
`        <textbox id="txtFirstName" datafield="FirstName" datatype="string" />`  
`      </td>`  
`    </tr>`  
`    <tr>`  
`      <td>`  
`        <label for="lstColors" text="Favorite Color" />`  
`<listbox id="lstColors" datafield="FavoriteColors" datatype="string" selectionmode="single">`  
`          <listitem value="#00FF00">Green</listitem>`  
`          <listitem value="#FF0000" selected="true">Red</listitem>`  
`          <listitem value="#0000FF">Blue</listitem>`  
`         </listbox>`  
         <img src="/images/help_icon.gif" class="help-icon" />  
         <span class="help-text" style="display:none;">Choose your absolute favorite color</span>  
`      </td>`  
`    </tr>`  
`    <tr>`  
`      <td colspan="2">`  
`        <addbutton text="Add"/> <cancelbutton text="Cancel"/>`  
`      </td>`  
`    </tr>`  
`  </table>`<span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml">  
  <jQueryReady></span>  
<span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml">    $("img.help-icon").click(function(){</span>  
<span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml">      $(this).next().show();</span>  
<span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml">    });</span>  
<span style="color: #ff0000;" xmlns="http://www.w3.org/1999/xhtml">  </jQueryReady></span>  
`</AddForm>``</div>

