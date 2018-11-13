# <Textarea>

<a name="top"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

The Textarea tag renders as a multi-line text input box at run time.

<a name="syntax"></a>

## Syntax

<pre xmlns="" xml:space="preserve"><Textarea    
    AccessKey="_string_"   
    BackColor="_color name_|#dddddd"   
    BorderColor="_color name_|#dddddd"   
    BorderStyle="**NotSet**|None|Dotted|Dashed|Solid|Double|Groove|Ridge|Inset|Outset"   
    BorderWidth="_size_"   
    CharacterCount="**None**|CountDown|CountUp"   
    CharacterCountClass="_CSS Class Name_"
    CharacterCountLabel="_string_"  
    Columns="_integer_"  
    CssClass="_string_"   
    DataField="_string_"
    DataType="**string**|int32|int64|boolean|...."  
    Font-Bold="True|**False**"   
    Font-Italic="True|**False**"   
    Font-Names="_string_"   
    Font-Overline="True|**False**"   
    Font-Size="_string_|Smaller|Larger|XX-Small|X-Small|Small|Medium|Large|X-Large|XX-Large"   
    Font-Strikeout="True|**False**"   
    Font-Underline="True|**False**"   
    ForeColor="_color name_|#dddddd"   
    Height="_size_"   
    HtmlEncode="True|**False**"  
    ID="_string_"   
    MaxLength="_integer_"  
    Nullable="True|**False**"  
    ReadOnly="True|**False**"   
    Rows="integer"  
    Style="_string_"   
    TabIndex="_integer_"   
    ToolTip="_string_"   
    Visible="**True**|False"   
    Width="_size_"   
    Wrap="**True**|False"  
</pre>

<div xmlns="">/> </div>

 <a name="remarks"></a>

## Remarks

If no "datatype" is supplied, the Textarea control defaults to **string**.

*   **AccessKey**: In browsers that support it, this property can be set to a character on the keyboard that can be used to set focus to the control. For instance, setting the value to F allows the user to access the control by pressing Alt+F on their keyboard (for Windows machines).  

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control, specified in [units.  

    ](units.html)
*   **CharacterCount**: Defaults to None. When set to CountUp, the number of characters the user has typed into the control will be displayed just after the control. If the value is set to CountDown, the number of characters remaining will be displayed. Remaining characters are calculated based on the MaxLength property. _This feature requires Javascript and jQuery_. (New to version 2.1)  

*   **CharacterCountLabel**: Text to be displayed next to the number displayed in CharacterCount. This label is only displayed when CharacterCount is set to CountUp or CountDown. NOTE: You should precede your label text with a space. Otherwise the text will butt up against the character count number. (New to version 2.1)  

*   **CharacterCountClass**: When CharacterCount is CountUp or CountDown, you can style the the displayed number and the CharacterCountLabel (if specified) by specifying a CSS class name for this property. (New to version 2.1)  

*   **Columns**: The display width, in characters, of the control.  

*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **DataField**: Name of the parameter in the `<submitcommand>` which will be filled with this control's data on when the form is submitted and/or the parameter in the `<selectcommand>` which will supply this control's data when the form is loaded. This attribute is required if the control will participate in operations with your form's data commands.  

*   **DataType**: The type of data this control is supplying to the data commands. This is a [Database type](datatypes.html). Valid values are: string (default), int32, int64, boolean, . This attribute is required if the control will participate in operations with your form's data commands.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More  

    ](fontproperties.html)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](units.html).  

*   **HtmlEncode**: When set to true, the content of the control will have any HTML encoded before sending it to the SubmitCommand for processing. Note that setting this to true can help protect against scripting attacks but it will also enlarge the size of the text that is saved (<) becomes (&lt;), for instance.  

*   **ID**: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form.  

*   **MaxLength**: For Use ONLY With CharacterCount attribute. Specifies the maximum number of characters the CharacterCount feature should allow. If not specified, the user's input will not be limited. IMPORTANT: Unlike the TextBox's MaxLength attribute, this does not ensure that no more than the specified number of characters will be entered. You should still use normal validation methods for that. (New to version 2.1)  

*   **Placeholder**: New to version 4.2\. If this property is set, the value will be displayed in the textbox when it is empty. It is an HTML5 feature that will only function on capable browsers (all other browsers will ignore it). The purpose is to provide the user with some explanatory text in the control itself prior to the user entering any text. For instance, a contact form's About Me textarea might have "Tell us about yourself" as the Placeholder. When the user tabs into the control, the text will disappear. If the user tabs out without entering anything, the "Tell us about yourself" text will re-appear. The Placeholder value is not a default value for the control and will not be sent to the database.  

*   **Nullable**: If True (the default is False), the control will return a DBNull value if the control is blank or contains just whitespace. If a DBNull value is passed to the control, the control will be set to an empty string.  

*   **ReadOnly**: If True, the contents of the control cannot be changed. The default value is False.  

*   **Rows**: The number of rows displayed in the Textarea control.  

*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. "color: red; border: solid 1px black;").  

*   **Tabindex**: Sets the tab index for the control.  

*   **Tooltip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control.  

*   **Visible**: Determines if the control is visible (true) or hidden (false).  

*   **Width**: Width of the control in [units](units.html).  

*   **Wrap**: If True, text in the textarea wraps. If False, text does not wrap. The default is True.  

[Back to top](#top)<a name="example"></a>

## Example

<div>`<AddForm>`  
`  ...`  
`  <table>`  
`    <tr>`  
`      <td>`  
`        <Label for="txtFirstName" text="First Name" />`  
`        <Textbox id="txtFirstName" datafield="FirstName" datatype="string" />`  
`      </td>`  
`    </tr>`  
`    <tr>`  
`       <td>`  
`         <Label for="txtBio" text="Bio" />`  
`         <Textarea id="txtBio" datafield="Bio" datatype="string" />`  
`       </td>`  
`    </tr>`  
`    <tr>`  
`       <td colspan="2">`  
`         <AddButton text="Add"/> <CancelButton text="Cancel"/>`  
`      </td>`  
`    </tr>`  
`  </table>`  
`</AddForm>`</div>

[Back to top](#top)