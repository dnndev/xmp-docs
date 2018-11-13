# <RadioButtonList>

<a name="top"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

The RadioButtonList tag renders as a series of mutually-exclusive option button at run-time.

<a name="syntax"></a>

## Syntax

<div>`<RadioButtonList`  
``    AccessKey="_string_"  
    AppendDataBoundItems="True|**False**"  
    BackColor="_color name_|#dddddd"  
    BorderColor="color name|#dddddd"  
    BorderStyle="**NotSet**|None|Dotted|Dashed|Solid|Double|Groove|Ridge| Inset|Outset"  
    BorderWidth="_size_"  
    CellPadding="_integer_"  
    CellSpacing="_integer_"  
    CssClass="_string_"  
    DataSourceID="_string_"  
    DataTextField="_string_"  
    DataTextFormatString="_string_"  
    DataValueField="_string_"  
    Enabled="**True**|False"  
    Font-Bold="True|**False**"  
    Font-Italic="True|**False**"  
    Font-Names="_string_"  
    Font-Overline="True|**False**"  
    Font-Size="_string_|Smaller|Larger|XX-Small|X-Small|Small|Medium| Large|X-Large|XX-Large"  
    Font-Strikeout="True|**False**"  
    Font-Underline="True|**False**"  
    ForeColor="_color name_|#dddddd"  
    Height="_size_"  
    ID="_string_"  
    Nullable="True|**False**"  
    RepeatColumns="_integer_"  
    RepeatDirection="Horizontal|**Vertical**"  
    RepeatLayout="**Table**|Flow"  
    Style="_string_"  
    TabIndex="_integer_"  
    TextAlign="Left|**Right**"  
    ToolTip="_string_"  
    Visible="**True**|False"  
    Width="_size_"``>``  

`    <ListItem value="_string_" selected="True|**False**">Item1</ListItem >`  
`    <ListItem value="_string_">Item2</ListItem >`  
`    ...`  
`</RadioButtonList>`</div>

<a name="remarks"></a>

## Remarks

*   **AccessKey**: In browsers that support it, this property can be set to a character on the keyboard that can be used to set focus to the control. For instance, setting the value to F allows the user to access the control by pressing Alt+F on their keyboard (for Windows machines).  

*   **AppendDataBoundItems**: If True, items retrieved from a `<ControlDataSource>` tag will be appended to the list of items already defined in the control. This only applies if the control is bound to such a tag. The default value is False.  

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control, specified in [units.  

    ](units.html)
*   **CellPadding**: For table layouts, sets the distance (in pixels) between the border and the content of the cells.  

*   **CellSpacing**: For table layouts, sets the distance (in pixels) between cells.  

*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **DataField**: Name of the parameter in the `<SubmitCommand>` which will be filled with this control's data on when the form is submitted and/or the parameter in the `<SelectCommand>` which will supply this control's data when the form is loaded. This attribute is required if the control will participate in operations with your form's data commands.  

*   **DataSourceId**: If this control's data is supplied by a `<ControlDataSource>` tag, specify that tag's ID in this attribute. This attribute is required only if the control's data is supplied via a `<ControlDataSource>` tag.  

*   **DataTextField**: When using a `<ControlDataSource>` this attribute specifies the column name in that datasource that supplies each list item's display text. This attribute is required if the control's data is supplied via a `<ControlDataSource>` tag.  

*   **DataTextFormatString**: Gets or sets the formatting string used to control how data bound to the list control is displayed.  

*   **DataType**: The type of data this control is supplying to the data commands. This is a [Database type](datatypes.html). Valid values are: string (default), int32, int64, boolean, . This attribute is required if the control will participate in operations with your form's data commands.  

*   **DataValueField**: When using a `<ControlDataSource>` this attribute specifies the column name in that datasource that supplies each list item's hidden value. This attribute is required only if the control's data is supplied via a `<ControlDataSource>` tag.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More  

    ](fontproperties.html)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](units.html).  

*   **ID**: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form.  

*   **Nullable**: If True (the default is False), this control returns a DBNull value if no item has been selected. If a DBNull value is passed to the control, regardless of the Nullable setting, all items will be de-selected.  

*   **RepeatColumns**: Defines the number of columns to use when laying out the checkboxes.  

*   **RepeatDirection**: Determines if the control displays vertically or horizontally.  

*   **RepeatLayout**: Use this attribute to specify whether the items in the control are displayed in a table. If this attribute is set to Table the items in the list are displayed in a table. If this attribute is set to Flow, the items in the list are displayed without a table structure.  

*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. "color: red; border: solid 1px black;").  

*   **TabIndex**: Sets the tab index for the control.  

*   **TextAlign**: The alignment of the text label with respect to its associated radio button. Valid values are Left and Right. Default value is Right.  

*   **ToolTip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control.  

*   **Visible**: Determines if the control is visible (true) or hidden (false).  

*   **Width**: Width of the control in [units](units.html).  

*   **Usage**: <span style="font-weight: normal;" xmlns="http://www.w3.org/1999/xhtml">The control allows `<ListItem>` child tags which define the items that will appear in the list. The control can also be bound to a `<ControlDataSource>` tag. To do so, specify the ID of the `<ControlDataSource>` tag in the DataSourceId attribute, the name of the column in the data source that should supply the display text for each list item in the DataTextField attribute, and the column in the data source that should supply the hidden value of each list item in the DataValueField attribute.</span>

[Back to top](#top)<a name="example"></a>

## Example

<div>`<AddForm>`  
`  ...`  
`  <table>`  
`    <tr>`  
`      <td>`  
`        <Label For="txtFirstName" Text="First Name" />`  
`        <TextBox Id="txtFirstName" DataField="FirstName" DataType="string" />`  
`      </td>`  
`    </tr>`  
`    <tr>`  
`       <td>`  
`         <Label For="rblColors" Text="Favorite Color" />  
`<span class="CodeHighlight" xmlns="http://www.w3.org/1999/xhtml">`<RadioButtonList Id="rblColors" DataField="FavoriteColors" DataType="string">`  
`           <ListItem Value="#00FF00">Green</ListItem >`  
`           <ListItem Value="#FF0000" selected="true">Red</ListItem >`  
`           <ListItem Value="#0000FF">Blue</ListItem >`  
`         </RadioButtonList >`</span>  
`        </td>`  
`     </tr>`  
`     <tr>`  
`       <td colspan="2">`  
`         <AddButton Text="Add"/> <CancelButton Text="Cancel"/>`  
`       </td>`  
`     </tr>`  
`   </table>`  
`</AddForm>`</div>

[Back to top](#top)