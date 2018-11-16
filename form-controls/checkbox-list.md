# `<CheckBoxList>`

The CheckboxList tag renders as a series of checkboxes at run-time.

## Syntax
```html
<CheckBoxList 
    AccessKey="string" 
    AppendDataBoundItems="True|False" 
    BackColor="color name|#dddddd" 
    BorderColor="color name|#dddddd" 
    BorderStyle="NotSet|None|Dotted|Dashed|Solid|Double|Groove|Ridge| Inset|Outset" 
    BorderWidth="size" 
    CellPadding="integer" 
    CellSpacing="integer" 
    CssClass="string" 
    DataField="string" 
    DataSourceID="string" 
    DataTextField="string" 
    DataTextFormatString="string" 
    DataType="string|int32|...." 
    DataValueField="string" 
    Font-Bold="True|False" 
    Font-Italic="True|False" 
    Font-Names="string" 
    Font-Overline="True|False" 
    Font-Size="string|Smaller|Larger|XX-Small|X-Small|Small|Medium| Large|X-Large|XX-Large" 
    Font-Strikeout="True|False" 
    Font-Underline="True|False" 
    ForeColor="color name|#dddddd" 
    Height="size" 
    ID="string" 
    Nullable="True|False" 
    RepeatColumns="integer" 
    RepeatDirection="Horizontal|Vertical" 
    RepeatLayout="Table|Flow"
    SelectedItemsSeparator="string||"
    Style="string" 
    TabIndex="integer" 
    TextAlign="Left|Right" 
    ToolTip="string" 
    Visible="True|False" 
    Width="size">

    <ListItem Value="string" Selected="True|False">Item1</ListItem> 
    <ListItem Value="string">Item2</ListItem> 
    ... 
</CheckBoxList>
```

## Remarks

*   **AccessKey**: In browsers that support it, this property can be set to a character on the keyboard that can be used to set focus to the control. For instance, setting the value to F allows the user to access the control by pressing Alt+F on their keyboard (for Windows machines).  

*   **AppendDataBoundItems**: If True, items retrieved from a `<ControlDataSource>` tag will be appended to the list of items already defined in the control. This only applies if the control is bound to such a tag. The default value is False.  

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control, specified in [units](../unit-types.md)
*   **CellPadding**: For table layouts, sets the distance (in pixels) between the border and the content of the cells.  

*   **CellSpacing**: For table layouts, sets the distance (in pixels) between cells.  

*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **DataField**: Name of the parameter in the `<SubmitCommand>` which will be filled with this control's data on when the form is submitted and/or the parameter in the `<SelectCommand>` which will supply this control's data when the form is loaded. This attribute is required if the control will participate in operations with your form's data commands.  

*   **DataSourceId**: If this control's data is supplied by a `<ControlDataSource>` tag, specify that tag's ID in this attribute. This attribute is required only if the control's data is supplied via a `<ControlDataSource>` tag.  

*   **DataTextField**: When using a `<ControlDataSource>` this attribute specifies the column name in that datasource that supplies each list item's display text. This attribute is required if the control's data is supplied via a `<ControlDatasource>` tag.  

*   **DataTextFormatString**: Gets or sets the formatting string used to control how data bound to the list control is displayed.  

*   **DataType**: The type of data this control is supplying to the data commands. This is a [Database type](../data-types.md). Valid values are: string (default), int32, int64, boolean, . This attribute is required if the control will participate in operations with your form's data commands.  

*   **DataValueField**: When using a `<ControlDataSource>` this attribute specifies the column name in that datasource that supplies each list item's hidden value. This attribute is required only if the control's data is supplied via a `<ControlDataSource>` tag.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More](../font-properties.md)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **ID**: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form.  

*   **Nullable**: If this is set to True, the control will return a DBNull value if no items have been checked. If a DBNull value is passed to this control, regardless of the Nullable setting, all items in the control will be un-checked.  

*   **RepeatColumns**: Defines the number of columns to use when laying out the checkboxes.  

*   **RepeatDirection**: Determines if the control displays vertically or horizontally.  

*   **RepeatLayout**: Use this attribute to specify whether the items in the control are displayed in a table. If this attribute is set to Table the items in the list are displayed in a table. If this attribute is set to Flow, the items in the list are displayed without a table structure.  

*   **SelectedItemsSeparator**: If the control enables the selection of multiple items, the control will merge the selected values together using a pipe (`|`) as a separator. You can change the character used to separate the selected values using this property. If, for instance, you wanted to separate them with a comma, you would set `SelectedItemsSeparator=","` The separator is only used on controls capable of multiple selection and ONLY when more than one item has been selected.  

    So, for example, if your control had the following values selected: 32, 578, and 38, then the value returned to the database would be: 32|578|38\. If only the number 32 was selected, the value would be: 32.  

    NOTE that if you are using this control to supply email addresses to the `<Email>` tag, it assumes values are delimited with a pipe. However, since email addresses are comma-delimited, you could set SelectedItemsSeparator to a comma and it should still function.  

*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. `color: red; border: solid 1px black;`).  

*   **TabIndex**: Sets the tab index for the control.  

*   **TextAlign**: The alignment of the text label with respect to its associated check box. Valid values are Left and Right. Default value is Right.  

*   **ToolTip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control.  

*   **Visible**: Determines if the control is visible (true) or hidden (false).  

*   **Width**: Width of the control in [units](../unit-types.md).  

*   **Usage**: <span style="font-weight: normal;" xmlns="http://www.w3.org/1999/xhtml">The control allows `<ListItem>` child tags which define the items that will appear in the list. The control can also be bound to a `<ControlDataSource>` tag. To do so, specify the ID of the `<ControlDataSource>` tag in the DataSourceId attribute, the name of the column in the data source that should supply the display text for each list item in the DataTextField attribute, and the column in the data source that should supply the hidden value of each list item in the DataValueField attribute.</span>  



## Example

```html {13-17}
<AddForm> 
  ... 
  <table> 
    <tr> 
       <td> 
        <Label Target="txtFirstName" Text="First Name" /> 
        <TextBox Id="txtFirstName" DataField="FirstName" DataType="string" /> 
      </td> 
    </tr> 
    <tr> 
      <td> 
        <Label Target="lstColors" Text="Favorite Color" />
        <CheckBoxList Id="cblColors" DataField="FavoriteColors" DataType="string" >
           <ListItem Value="#00FF00">Green</ListItem >
           <ListItem Value="#FF0000" Selected="true">Red</ListItem >
           <ListItem Value="#0000FF">Blue</ListItem >
         </CheckBoxList> 
      </td> 
    </tr> 
    <tr> 
      <td colspan="2"> 
        <AddButton Text="Add"/> <CancelButton Text="Cancel" /> 
      </td> 
    </tr> 
  </table> 
</AddForm>
```
