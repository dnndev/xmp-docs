# <ListBox>

<a name="top"></a>



The ListBox tag renders as a single or multi-select listbox at run-time.

## <a name="syntax"></a>Syntax

<div>`<ListBox`  
`    AccessKey="_string_"  
    AppendDataBoundItems="True|**False**"  
    BackColor="_color name_|#dddddd"  
    BorderColor="_color name_|#dddddd"  
    BorderStyle="**NotSet**|None|Dotted|Dashed|Solid|Double|Groove|Ridge| Inset|Outset"  
    BorderWidth="_size_"  
    CssClass="_string_"  
`    DataField="_string_"  
`    DataSourceID="_string_"  
    DataTextField="_string_"  
    DataTextFormatString="_string_"  
    DataType="**string**|int32|...."  
    DataValueField="_string_"  
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
    Rows="_integer_"  
    SelectedItemsSeparator="_string_|**|**"  
    SelectionMode="**Single**|Multiple"  
    Style="_string_"  
    TabIndex="_integer_"  
    ToolTip="_string_"  
    Visible="**True**|False"  
    Width="_size_">`  

`    <ListItem Value="_string_" Selected="True|False">Item1</ListItem>`  
`    <ListItem Value="_string_">Item2</ListItem>`  
`    ...`  
`</ListBox>`  
</div>

## Remarks

<a name="remarks"></a>

*   **AccessKey**: In browsers that support it, this property can be set to a character on the keyboard that can be used to set focus to the control. For instance, setting the value to F allows the user to access the control by pressing Alt+F on their keyboard (for Windows machines).  

*   **AppendDataBoundItems**: If True, items retrieved from a `<ControlDataSource>` tag will be appended to the list of items already defined in the control. This only applies if the control is bound to such a tag. The default value is False.  

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control, specified in [units.  

    ](../unit-types.md)
*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **DataField**: Name of the parameter in the `<SubmitCommand>` which will be filled with this control's data on when the form is submitted and/or the parameter in the `<SelectCommand>` which will supply this control's data when the form is loaded. This attribute is required if the control will participate in operations with your form's data commands.  

*   **DataSourceId**: If this control's data is supplied by a `<ControlDataSource>` tag, specify that tag's ID in this attribute. This attribute is required only if the control's data is supplied via a `<ControlDataSource>` tag.  

*   **DataTextField**: When using a `<ControlDataSource>` this attribute specifies the column name in that datasource that supplies each list item's display text. This attribute is required if the control's data is supplied via a `ControlDataSource>` tag.  

*   **DataTextFormatString**: Gets or sets the formatting string used to control how data bound to the list control is displayed.  

*   **DataType**: The type of data this control is supplying to the data commands. This is a [Database type](datatypes.html). Valid values are: string (default), int32, int64, boolean, . This attribute is required if the control will participate in operations with your form's data commands. NOTE: If this is a multi-select listbox, you MUST set the DataType to "string" because the value returned from the control will be a string.  

*   **DataValueField**: When using a `<ControlDataSource>` this attribute specifies the column name in that datasource that supplies each list item's hidden value. This attribute is required only if the control's data is supplied via a `<ControlDataSource>` tag.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More  

    ](../font-properties.md)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **ID**: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form.  

*   **Nullable**: If Nullable is set to True (the default value is False), the control will return a DBNull value if no item has been selected. If a DBNull value is passed to this control, regardless of the Nullable setting, the control will de-select all items in the control.  

*   **Rows**: A numeric value greater than or equal to 1 that determines the number of rows to display in a list box.  

*   **SelectionMode**: Determines whether the listbox allows a maximum of one selection or more than one selection. Valid values are: single and multiple. This attribute is optional. The default value is single.  

*   **SelectedItemsSeparator**: If the control enables the selection of multiple items, the control will merge the selected values together using a pipe (`|`) as a separator. You can change the character used to separate the selected values using this property. If, for instance, you wanted to separate them with a comma, you would set `SelectedItemsSeparator=","` The separator is only used on controls capable of multiple selection and ONLY when more than one item has been selected.  

    So, for example, if your control had the following values selected: 32, 578, and 38, then the value returned to the database would be: 32|578|38\. If only the number 32 was selected, the value would be: 32\. When dealing with multiple selections, remember to set the DataType to "string" because while "32|578|38" is a series of numbers, for the database, it is first and foremost a string containing a numeric text and the pipe character.  

    NOTE that if you are using this control to supply email addresses to the `<Email>` tag, it assumes values are delimited with a pipe. However, since email addresses are comma-delimited, you could set SelectedItemsSeparator to a comma and it should still function.  

*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. "color: red; border: solid 1px black;").  

*   **TabIndex**: Sets the tab index for the control.  

*   **ToolTip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control.  

*   **Visible**: Determines if the control is visible (true) or hidden (false).  

*   **Width**: Width of the control in [units](../unit-types.md).  

*   **Usage**<span style="font-weight: normal;" xmlns="http://www.w3.org/1999/xhtml"> The Listbox can operate in one of two modes: single selection, where only one item is allowed to be selected at a time, and multiple selection, which allows more than one item to be selected. The Listbox allows `<ListItem>` child tags which define the items that will appear in the list. The control can also be bound to a `<ControlDataSource>` tag. To do so, specify the ID of the `<ControlDataSource>` tag in the ListBox's "DataSourceId" attribute, the name of the column in the data source that should supply the display text for each list item, and the column in the data source that should supply the hidden value of each list item.</span>  



## <a name="example"></a>Example

<div xmlns="">`<AddForm>`  
`  ...`  
`  <table>`  
`    <tr>`  
`       <td>`  
`        <Label For="txtFirstName" Text="First Name" />`  
`        <TextBox Id="txtFirstName" DataField="FirstName" DataType="string" />`  
`      </td>`  
`    </tr>`  
`    <tr>`  
`      <td>`  
`        <Label For="lstColors" Text="Favorite Color" />`  
<span class="CodeHighlight" xmlns="http://www.w3.org/1999/xhtml">`<ListBox Id="lstColors" DataField="FavoriteColors" DataType="string" SelectionMode="single">`  
`          <ListItem Value="#00FF00">Green</ListItem>`  
`          <ListItem value="#FF0000" selected="true">Red</ListItem>`  
`          <ListItem value="#0000FF">Blue</ListItem>`  
`         </ListBox>`</span>  
`      </td>`  
`    </tr>`  
`    <tr>`  
`      <td colspan="2">`  
`        <AddButton Text="Add"/> <CancelButton Text="Cancel"/>`  
`      </td>`  
`    </tr>`  
`  </table>`  
`</AddForm>`</div>

## Example 2 - Binding to a Data Source

<pre xml:space="preserve" xmlns=""><AddForm></pre>

<pre xml:space="preserve" xmlns="">  ...
  <ControlDataSource Id="dsColors" CommandText="SELECT ColorId, ColorName FROM MyColorsTable" />
  ...
  <ListBox Id="lstColors" DataSourceId="dsColors" DataTextField="ColorName" DataValueField="ColorId"
     DataField="FavoriteColor" DataType="Int32" /></pre>

<pre xml:space="preserve" xmlns=""></AddForm></pre>

## Example 3 - Adding Items to a Data-Bound List

This example shows how to use the AppendDataBoundItems property to add a "None Selected" item to a list that is being populated from a table.

<pre xml:space="preserve" xmlns=""><AddForm></pre>

<pre xml:space="preserve" xmlns="">  ...
  <ControlDataSource Id="dsColors" CommandText="SELECT ColorId, ColorName FROM MyColorsTable" />
  ...
  <ListBox Id="lstColors" DataSourceId="dsColors" DataTextField="ColorName" DataValueField="ColorId"
     DataField="FavoriteColor" DataType="Int32" AppendDataBoundItems="True">
    <ListItem Value="-1">(None Selected)</ListItem>
  </ListBox></pre>

<pre xml:space="preserve" xmlns=""></AddForm></pre>

