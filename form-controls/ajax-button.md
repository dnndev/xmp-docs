---
id: form-ajax-button
title: AjaxButton
category: Buttons
context: form
summary: >-
  The AjaxButton tag renders as a push-button at run-time that, when clicked,
  will dynamically insert HTML returned from a URL into an element on the page -
  without a postback.
keywords:
  - ajax
  - button
  - form
---
# `<AjaxButton>`

The AjaxButton tag renders as a push-button at run-time that, when clicked, will dynamically insert HTML returned from a URL into an element on the page - without a postback. This is a jQuery based control. It required jQuery be included in the page and that Javascript be enabled in the end-user's browser.

## Syntax
```html
<AjaxButton  
    BackColor="_color name_|#dddddd"  
    BorderColor="_color name_|#dddddd"  
    BorderStyle="**NotSet**|None|Dotted|Dashed|Solid|Double|Groove|Ridge| Inset|Outset"  
    BorderWidth_="size_"  
    CssClass="_string_"  
    Font-Bold="True|**False**"  
    Font-Italic="True|**False**"  
    Font-Names="_string_"  
    Font-Overline="True|**False**"  
    Font-Size="_string_|Smaller|Larger|XX-Small|X-Small|Small|Medium| Large|X-Large|XX-Large"  
    Font-Strikeout="True|**False**"  
    Font-Underline="True|**False**"  
    ForeColor="_color name_|#dddddd"  
    Height="_size_"  
    LoadingCssClass="_CSS class name_"  
    LoadingImageUrl="_string_"  
    OnError="string - JS function to call on error"  
    OnSuccess="string - JS function to call on success"  
    Style="_string_"  
    Target="_jQuery element selector_"  
    Text="string"  
    ToolTip="_string_"  
    Url="_url_"  
    Visible="**True**|False"  
    Width="_size_"
/>  
```

## Remarks

*   **Usage**: The XMod Pro Ajax button controls work in conjunction with jQuery. They enable you to leverage jQuery without having to write any Javascript. Because of this, you must ensure that jQuery has been included in the page. If you are using DNN 5 or later, the library is usually included in the page without any effort on your part. If not, use the `<ScriptBlock>` tag to include the library. You must specify the Url property and Target property. Optionally, you can specify the LoadingImageUrl and LoadingCssClass.  

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control, specified in [units](../unit-types.md)
*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More  
     ](../font-properties.md)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **LoadingCssClass**: A CSS class name to assign to the image which appears after the button has been clicked - to indicate content is being loaded. This property is ignored if no LoadingImageUrl is specified.  

*   **LoadingImageUrl**: A URL to the image file that will be displayed after the button is clicked - to indicate content is being loaded. You can use the tilde (`~`) character as a placeholder for the website root directory. The image will be displayed immediately after the button when the button is clicked. It will be removed from the page after successful completion of the AJAX call. If no image url is specified, no image will be displayed.  

*   **OnError**: You can optionally specify a Javascript function to call if there is an error in the AJAX call. Your function should accept the following parameters: `jqXHR`, `textStatus`, `errorThrown`. This should only contain a function name. An example would be:  
    `OnError="myErrHandler"`  
    Elsewhere, you would define your Javascript function like:  
    ```js
    function myErrHandler(jqXHR, textStatus, errorThrown) {  
      alert("The following error occurred: " + textStatus);  
    }  
    ```

*   **OnSuccess**: You can optionally specify a Javascript function to call when data is returned from the AJAX call. This overrides standard default processing of the AJAX call - which normally sets the HTML of the Target element. Instead, your function will be called and the returned data from the AJAX call will be passed to your function. This property should only contain a function name. An example might be:  
    `OnSuccess="doSomethingCool"`  
    Elsewhere you would define your Javascript function like:  
    ```js
    function doSomethingCool(data){
      alert("The following data was returned:" + data);
    }
    ```

*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. `color: red; border: solid 1px black;`).  

*   **Target**: A jQuery "selector" that identifies the element(s) that will contain the HTML returned from the Url. Note that content of the element will be replaced by the HTML. To select an element by its ID, use the `#` selector. So, to select an element with the client ID of _divMyResults_, the `Target` attribute would be `#divMyResults`. To select all DIV elements with the class name of _MyResults_, you would use the period selector (`.`) like so: `div.MyResults`.  

*   **Text**: The caption that will be displayed on the control.  

*   **ToolTip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control.  

*   **Url**: The Url that gets called by the Ajax function. This is Required.  

*   **Visible**: Determines if the control is visible (true) or hidden (false).  

*   **Width**: Width of the control in [units](../unit-types.md).


## Example

```html {12-13}
<AddForm>  
  <SubmitCommand CommandText="Update EmployeeReview SET Rating=@Rating" />  

  <Label>Submit Rating for Employee</Label>  
  <DropdownList Id="Rating" DataField="Rating" DataType="Int32">  
    <ListItem Value="1">Poor</ListItem>  
    <ListItem Value="2">Sub-Par</ListItem>  
    <ListItem Value="3">Average</ListItem>  
    <ListItem Value="4">Above Average</ListItem>  
    <ListItem Value="5">Excellent</ListItem>  
  </DropdownList>  
  <AjaxButton Text="View Employee History" Url="mysite.com/history.aspx?eid=100"
        Target="#divHistory" />
  <div id="divHistory"></div>  
  <AddButton Text="Add Rating" /> <CancelButton Text="Nevermind" />  
</AddForm>  
 ```
