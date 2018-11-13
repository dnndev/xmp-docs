# <CalendarImage>

<a name="top"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

The CalendarImage tag renders as a push-button at run-time. When clicked, a calendar date-picker pops up to enable the user to select a date.

<a name="syntax"></a>

## Syntax

    <CalendarImage

## Remarks

<a name="remarks"></a>

*   **AccessKey**: In browsers that support it, this property can be set to a character on the keyboard that can be used to set focus to the control. For instance, setting the value to F allows the user to access the control by pressing Alt+F on their keyboard (for Windows machines).  

*   **AlternateText**: Use this attribute's value will be used as the image's "alt" text. The "alt" text is generally used by screen reader software used by visually impaired users to identify the content of an image. It may also be used by search engines.  

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control, specified in [units.  

    ](units.html)
*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More  

    ](fontproperties.html)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Format**: If specified, this overrides the default date format used by the pop-up calendar. If left blank, the web server's default short date format will be used. An example format would be: format="yyyy-MM-dd" where "yyyy" returns the four digit year, "MM" returns a two-digit month, and "dd" returns a two-digit day. If you need the value to stay in that format, consider also using the <validate type="regex"> tag to validate the target control.  

*   **Height**: Height of the control, specified in [units](units.html).  

*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. "color: red; border: solid 1px black;").  

*   **TabIndex**: Sets the tab index for the control.  

*   **Target**: This is the ID of the control where the calendar's selected date will be sent. This should be a text box.  

*   **ToolTip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control.  

*   **Visible**: Determines if the control is visible (true) or hidden (false).  

*   **Width**: Width of the control in [units](units.html).

[Back to top](#top)<a name="example"></a>

## Example

<div>`<AddForm>`  
`  <SubmitCommand CommandText="INSERT INTO Users(FirstName, LastName) VALUES(@FirstName, @LastName)" />`  
`  <table>`  
`    <tr>`  
`      <td>`  
`         <Label For="txtEventDate" Text="Event Date" />`  
`         <TextBox Id="txtEventDate" DataField="EvtDate" DataType="datetime" />  
<span style="color: #ff0000;"><CalendarImage Text="Select Date" Target="txtEventDate" Format="yyyy-MM-dd" /></span>`  
`       </td>`  
`    </tr>`  
`    ...`  
`    <tr>`  
`      <td colspan="2">`  
`        <AddButton Text="Add" /> <CancelButton Text="Cancel" />`  
`      </td>`  
`    </tr>`  
`  </table>  
``</AddForm>`</div>

[Back to top](#top)