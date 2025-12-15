---
id: form-dual-list
title: DualList
category: List Controls
context: form
summary: >-
  New to version 1.5. The DualList tag renders as two listboxes at run-time.
  Each box is separated by a series of buttons that enable moving items from the
  first listbox to the second listbox and vice versa. NOTE: The DualList
  requires Javascript to function correctly.
keywords:
  - dual
  - list
  - form
---
# `<DualList>`

New to version 1.5. The DualList tag renders as two listboxes at run-time. Each box is separated by a series of buttons that enable moving items from the first listbox to the second listbox and vice versa. NOTE: The DualList requires Javascript to function correctly.

## Syntax
```html
<DualList 
    AppendDataBoundItems="True|False" 
    BackColor="color name|#dddddd" 
    BorderColor="color name|#dddddd" 
    BorderStyle="NotSet|None|Dotted|Dashed|Solid|Double|Groove|Ridge| Inset|Outset" 
    BorderWidth="size"
    ButtonStyle-BackColor="color name|#dddddd"
    ButtonStyle-BorderColor="color name|#dddddd"
    ButtonStyle-BorderStyle="NotSet|None|Dotted|Dashed|Solid|Double|Groove|Ridge|Inset|OutSet"
    ButtonStyle-BorderWidth="size"
    ButtonStyle-Font-Bold="True|False"
    ButtonStyle-Font-Italic="True|False" 
    ButtonStyle-Font-Names="string" 
    ButtonStyle-Font-Overline="True|False" 
    ButtonStyle-Font-Size="string|Smaller|Larger|XX-Small|X-Small|Small|Medium| Large|X-Large|XX-Large" 
    ButtonStyle-Font-Strikeout="True|False" 
    ButtonStyle-Font-Underline="True|False" 
    ButtonStyle-ForeColor="color name|#dddddd"
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
    ListStyle-BackColor="color name|#dddddd"
    ListStyle-BorderColor="color name|#dddddd"
    ListStyle-BorderStyle="NotSet|None|Dotted|Dashed|Solid|Double|Groove|Ridge|Inset|OutSet"
    ListStyle-BorderWidth="size"
    ListStyle-CssClass="string" 
    ListStyle-Font-Bold="True|False"
    ListStyle-Font-Italic="True|False" 
    ListStyle-Font-Names="string" 
    ListStyle-Font-Overline="True|False" 
    ListStyle-Font-Size="string|Smaller|Larger|XX-Small|X-Small|Small|Medium| Large|X-Large|XX-Large" 
    ListStyle-Font-Strikeout="True|False" 
    ListStyle-Font-Underline="True|False" 
    ListStyle-ForeColor="color name|#dddddd"
    ListSTyle-Width="size" 
    SelectedItemsSeparator="string||" 
    Style="string" 
    TabIndex="integer" 
    ToolTip="string" 
    Visible="True|False" 
    Width="size"
/> 
```

## Remarks

*   **AppendDataBoundItems**: If True, items retrieved from a `<ControlDataSource>` tag will be appended to the list of items already defined in the control. This only applies if the control is bound to such a tag. The default value is False. (new in version 3.0).  

*   **BackColor**: Color of the background of the control.  

*   **ButtonStyle**: The style to use for displaying the 'movement' buttons. ButtonStyle is specified using the following syntax: `ButtonStyle-styleAttributeName` where _styleAttributeName_ is the name of the style attribute such as `ForeColor` or `Font-Bold` or `CssClass`. See the syntax section above for more.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control, specified in [units](../unit-types.md)

*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **DataField**: Name of the parameter in the `<SubmitCommand>` which will be filled with this control's data on when the form is submitted and/or the parameter in the `<SelectCommand>` which will supply this control's data when the form is loaded. This attribute is required if the control will participate in operations with your form's data commands.  

*   **DataSourceId**: If this control's data is supplied by a `<ControlDataSource>` tag, specify that tag's ID in this attribute. This attribute is required only if the control's data is supplied via a `<ControlDataSource>` tag.  

*   **DataTextField**: When using a `<ControlDataSource>` this attribute specifies the column name in that datasource that supplies each list item's display text. This attribute is required if the control's data is supplied via a `<ControlDataSource>` tag.  

*   **DataTextFormatString**: Gets or sets the formatting string used to control how data bound to the list control is displayed.  

*   **DataType**: The type of data this control is supplying to the data commands. This is a [Database type](../data-types.md). Valid values are: string (default), int32, int64, boolean, . This attribute is required if the control will participate in operations with your form's data commands. NOTE: If this is a multi-select listbox, you MUST set the DataType to "string" because the value returned from the control will be a string.  

*   **DataValueField**: When using a `<ControlDataSource>` this attribute specifies the column name in that datasource that supplies each list item's hidden value. This attribute is required only if the control's data is supplied via a `<ControlDataSource>` tag.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More](../font-properties.md)

*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).  

*   **ListStyle**: The style to use for displaying the both of the list controls. ListStyle is specified using the following syntax: ListStyle-styleAttributeName where 'styleAttributeName' is the name of the style attribute such as ForeColor or Font-Bold or CssClass. See the syntax section above for more.  

*   **ID**: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form.  

*   **Nullable**: If Nullable is set to True (the default value is False), the control will return a DBNull value if no item has been selected. If a DBNull value is passed to this control, regardless of the Nullable setting, the control will de-select all items in the control.  

*   **SelectedItemsSeparator**: If the control enables the selection of multiple items, the control will merge the selected values together using a pipe (`|`) as a separator. You can change the character used to separate the selected values using this property. If, for instance, you wanted to separate them with a comma, you would set `SelectedItemsSeparator=","` The separator is only used on controls capable of multiple selection and ONLY when more than one item has been selected.  

  So, for example, if your control had the following values selected: 32, 578, and 38, then the value returned to the database would be: `32|578|38`. If only the number 32 was selected, the value would be: `32`. When dealing with multiple selections, remember to set the DataType to "string" because while `32|578|38` is a series of numbers, for the database, it is first and foremost a string containing a numeric text and the pipe character.  

  :::tip NOTE
  If you are using this control to supply email addresses to the `<Email>` tag, it assumes values are delimited with a pipe. However, since email addresses are comma-delimited, you could set SelectedItemsSeparator to a comma and it should still function. 
  :::

*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. `color: red; border: solid 1px black;`).  

*   **TabIndex**: Sets the tab index for the control.  

*   **ToolTip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control.  

*   **Visible**: Determines if the control is visible (true) or hidden (false).  

*   **Width**: Width of the control in [units](../unit-types.md).  

*   **Usage**: The Listbox can operate in one of two modes: **single selection**, where only one item is allowed to be selected at a time, and **multiple selection**, which allows more than one item to be selected. The Listbox allows `<ListItem>` child tags which define the items that will appear in the list. The control can also be bound to a `<ControlDataSource>` tag. To do so, specify the ID of the `<ControlDataSource>` tag in the Listbox's `DatasourceId` attribute, the name of the column in the data source that should supply the display text for each list item, and the column in the data source that should supply the hidden value of each list item.



## Example
```html {13-17}
<AddForm> 
  ... 
  <table> 
    <tr> 
       <td> 
        <Label For="txtFirstName" Text="First Name" /> 
        <TextBox Id="txtFirstName" DataField="FirstName" DataType="string" /> 
      </td> 
    </tr> 
    <tr> 
      <td> 
        <Label For="lstColors" Text="Favorite Color" /> 
        <DualList Id="lstColors" DtaField="FavoriteColors" DataType="string">
          <ListItem Value="#00FF00">Green</ListItem >
          <ListItem value="#FF0000" Selected="true">Red</ListItem >
          <ListItem value="#0000FF">Blue</ListItem >
        </<DualList> 
      </td> 
    </tr> 
    <tr> 
      <td colspan="2"> 
        <AddButton Text="Add"/> <CancelButton Text="Cancel"/> 
      </td> 
    </tr> 
  </table> 
</AddForm>
```
