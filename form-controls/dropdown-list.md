# <DropDownList>

<a name="top"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

The DropdownList tag renders as a drop-down list control at run-time.

<a name="syntax"></a>

## Syntax

<div xmlns="">`<DropDownList`  
`   AccessKey="_string_"  
    AppendDataBoundItems="True|**False**"  
    BackColor="_color name_|#dddddd"  
    BorderColor="_color name_|#dddddd"  
    BorderStyle="**NotSet**|None|Dotted|Dashed|Solid|Double|Groove|Ridge| Inset|Outset"  
    BorderWidth="_size_"  
    CssClass="_string_"  
`   DataField="_string_"  
`  DataSourceID="_string_"  
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
    Nullable="True|**False**"  
    ParameterName="_string_"  
    Style="_string_"  
    TabIndex="_integer_"  
    TargetControlId="_string_"  
    TargetDataSourceId="_string_"  
    ToolTip="_string_"  
    Visible="**True**|False"  
    Width="_size_" >`  

`    <ListItem Value="_string_" >Item1</ListItem>`  
`    <ListItem Value="_string_" >Item2</ListItem>`  
`    ...`  
`</DropDownList>`  
</div>

<a name="remarks"></a>

## Remarks

*   **AccessKey**: In browsers that support it, this property can be set to a character on the keyboard that can be used to set focus to the control. For instance, setting the value to F allows the user to access the control by pressing Alt+F on their keyboard (for Windows machines)  

*   **AppendDataBoundItems**: If True, items retrieved from a `<ControlDataSource>` tag will be appended to the list of items already defined in the control. This only applies if the control is bound to such a tag. The default value is False.  

*   **BackColor**: Color of the background of the control.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control, specified in [units.  
     ](units.html)
*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **DataField**: Name of the parameter in the `<SubmitCommand>` which will be filled with this control's data on when the form is submitted and/or the parameter in the `<SelectCommand>` which will supply this control's data when the form is loaded. This attribute is required if the control will participate in operations with your form's data commands.  

*   **DataSourceId**: If this control's data is supplied by a `<ControlDataSource>` tag, specify that tag's ID in this attribute. This attribute is required only if the control's data is supplied via a `<ControlDataSource>` tag.  

*   **DataTextField**: When using a `<ControlDataSource>` this attribute specifies the column name in that datasource that supplies each list item's display text. This attribute is required if the control's data is supplied via a `<ControlDataSource>` tag.  

*   **DataTextFormatString**: Gets or sets the formatting string used to control how data bound to the list control is displayed.  

*   **DataType**: The type of data this control is supplying to the data commands. This is a [Database type](datatypes.html). Valid values are: string (default), int32, int64, boolean . This attribute is required if the control will participate in operations with your form's data commands.  

*   **DataValueField**: When using a `<ControlDataSource>` this attribute specifies the column name in that datasource that supplies each list item's hidden value. This attribute is required only if the control's data is supplied via a `<ControlDataSource>` tag.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More  
     ](fontproperties.html)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](units.html).  

*   **ID**: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form.  

*   **Nullable**: Since an item is always selected in a drop-down list, if Nullable is set to True (the default value is False), the control will return a DBNull value if the selected item has a hidden value of an empty string. If a DBNull value is passed to this control, regardless of the Nullable setting, XMod Pro will attempt to select the first item that has an empty string as its hidden value. If no item is found, it will attempt to select the first item in the list.  

*   **ParameterName**: The name of the parameter the target ControlDataSource is expecting in order to retrieve its data.  

*   **Style**: Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. "color: red; border: solid 1px black;").  

*   **TabIndex**: Sets the tab index for the control.  

*   **TargetControlId**: One or more control ID's (separated by commas - new to v.4.0). This property is used when creating dependent list controls and reflects the control(s) which should be updated when this control's value has changed.  

*   **TargetDataSourceId**: One or more ControlDataSource control ID's (separated by commas - new to v.4.0). This property is used when creating dependent list controls and reflects the data sources that should be updated with this control's newly selected value.  

*   **ToolTip**: In browsers that support it, sets the text to display when the mouse pointer hovers over the control.  

*   **Visible**: Determines if the control is visible (true) or hidden (false).  

*   **Width**: Width of the control in [units](units.html).  

*   **Usage**<span style="font-weight: normal;" xmlns="http://www.w3.org/1999/xhtml">  The drop-down list allows `<ListItem>` child tags which define the items that will appear in the list. The control can also be bound to a `<ControlDataSource>` tag. To do so, specify the ID of the `<ControlDataSource>` tag in the control's "DataSourceId" attribute, the name of the column in the data source that should supply the display text for each list item, and the column in the data source that should supply the hidden value of each list item.</span>

## Creating Dependent Lists/Cascading Lists

New In Version 1.5: Two drop-down list controls can be bound together so that the selected value in the first control determines the available values in the second control. To do this, you'll need to set a few properties on the 1st control and bind the 2nd control to a `<ControlDataSource>`.

**Example**

For this example, we'll be using the DNN Lists table. This table contains numerous values - among them are a list of Countries and, for some of those Countries, a list of Regions. We will set up two drop-down list controls. The 1st control will load a list of Countries from the Lists table. The 2nd control will be dynamically loaded with a list of Regions (if any) for the selected country. Thus, linking together two cascading dropdownlists (ddls). Not all countries will have regions.

<pre xml:space="preserve" xmlns=""><AddForm>
  <SubmitCommand CommandText="INSERT INTO Contacts(ContactName,Country,Region) 
                              VALUES(@ContactName,@Country,@Region)" /></pre>

<pre xml:space="preserve" xmlns="">  <ControlDataSource Id="dsCountries" 
    CommandText="SELECT Text, EntryID FROM Lists WHERE ListName='Country' ORDER BY Text" /></pre>

<pre xml:space="preserve" xmlns="">  <ControlDataSource id="dsRegions" 
    CommandText="SELECT Text, Value FROM Lists WHERE ParentID=@ParentID">
    <Parameter Name="ParentID" />
  </ControlDataSource>
  ...
  <Label For="ddlCountries" Text="Country" />
  <DropdownList Id="ddlCountries" DataField="Country" DataType="string" 
    DataTextField="Text" DataValueField="EntryID" DataSourceId="dsCountries" 
    TargetDataSourceId="dsRegions" ParameterName="ParentID" TargetControlId="ddlRegions" />

  <Label For="ddlRegions" Text="Region" /></pre>

<pre xml:space="preserve" xmlns="">  <DropdownList Id="ddlRegions" DataField="Region" DataType="string" 
    DataTextField="Text" DataValueField="Value" DataSourceId="dsRegions" />

  <AddButton Text="Add" /> &nbsp; <CancelButton Text="Cancel" />

</AddForm></pre>

In the example above, there are two <ControlDataSource> tags. The first loads the list of Countries from the DNN Lists table and is linked to the "ddlCountries" drop-down list. The second one will be used to lookup the list of Regions in the selected country.

The DNN Lists table is setup so that each record can be the "parent" of one or more other records. If a record has a parent, its "ParentID" column will contain the EntryID of its parent. So, for our example, to get a list of regions in a given country, we look for all records that have a ParentID that matches the EntryID of our country. So, we've setup the ControlDataSource to accept a "ParentID" parameter.

Next, we need to setup the Country drop-down list to send its value to the Regions ControlDataSource. It is set to load its data from the "dsCountries" ControlDataSource using the DataSourceId, DataTextField, and DataValueField attributes. To enable the control to cause the Regions drop-down list to reload its data, we:

1.  Specify the TargetControlId. This is the control we want to be dependent on this control's value. For the example, that is "ddlRegions".
2.  Specify the TargetDataSourceId. This is the ID of the ControlDataSource used to fill the target control. In this example, it is "dsRegions".
3.  Specify the ParameterName. This is the name of the parameter the target ControlDataSource is expecting in order to retrieve its data. In the example, this is "ParentID".

So, when a country is selected, a parameter will be created with the name "ParentID". It's value will be set to the **value** (not the display text) of the currently selected country. That parameter will then be passed to the target ControlDataSource (dsRegions) and the target control (ddlRegions) will be re-bound to the data.

[Back to top](#top)<a name="example"></a>

## Example 1 - General Usage

<div style="font-family: Courier New, Monospace;" xmlns="">`<AddForm>`  
`  ...`  
`  <table>`  
`    <tr>`  
`      <td>`  
`        <Label For="txtFirstName" Text="First Name" />`  
`        <TextBox Id="txtFirstName" DataField="FirstName" DataType="string" />`  
`       </td>`  
`     </tr>`  
`     <tr>`  
`       <td>`  
`         <Label For="ddlColors" Text="Favorite Color" />`  
<span class="CodeHighlight" xmlns="http://www.w3.org/1999/xhtml">`<DropDownList Id="ddlColors" Datafield="FavoriteColor" DataType="string">`  
`           <ListItem Value="#00FF00">Green</ListItem>`  
`           <ListItem Value="#FF0000" Selected="true">Red</ListItem>`  
`           <ListItem Value="#0000FF">Blue</ListItem>`  
`         </DropDownList>`</span>  
`       </td>`  
`     </tr>`  
`     <tr>`  
`       <td colspan="2">`  
`         <AddButton Text="Add" /> <CancelButton Text="Cancel" />`  
`       </td>`  
`     </tr>`  
`   </table>`  
`</AddForm>`</div>

## Example 2 - Binding to a Data Source

<pre xml:space="preserve" xmlns=""><AddForm></pre>

<pre xml:space="preserve" xmlns="">  ...
  <ControlDataSource Id="dsColors" CommandText="SELECT ColorId, ColorName FROM MyColorsTable" />
  ...
  <DropDownList Id="ddlColors" DataSourceId="dsColors" DataTextField="ColorName" DataValueField="ColorId"
     DataField="FavoriteColor" DataType="Int32" /></pre>

<pre xml:space="preserve" xmlns=""></AddForm></pre>

## Example 3 - Adding Items to a Data-Bound List

This example shows how to use the AppendDataBoundItems property to add a "None Selected" item to a list that is being populated from a table.

<pre xml:space="preserve" xmlns=""><AddForm></pre>

<pre xml:space="preserve" xmlns="">  ...
  <ControlDataSource Id="dsColors" CommandText="SELECT ColorId, ColorName FROM MyColorsTable"/>
  ...
  <DropDownList Id="ddlColors" DataSourceId="dsColors" DataTextField="ColorName" DataValueField="ColorId"
     DataField="FavoriteColor" DataType="Int32" AppendDataBoundItems="True">
    <ListItem Value="-1">(None Selected)</ListItem>
  </DropDownList></pre>

<pre xml:space="preserve" xmlns=""></AddForm></pre>

## Example 4 - How to Require an Item Be Selected

This example shows how you can require that the user choose an item from your data-bound list. Notice the Value for the "None Selected" item is set to an empty string. This will be interpreted by the Required Field Validator as not having a value. Presumably the colors you're retrieving from the MyColorsTable table will have values. This type of approach will work for hard-coded lists as well.

<pre xml:space="preserve" xmlns=""><AddForm></pre>

<pre xml:space="preserve" xmlns="">  ...
  <ControlDataSource Id="dsColors" CommandText="SELECT ColorId, ColorName FROM MyColorsTable" />
  ...
  <DropDownList Id="ddlColors" DataSourceId="dsColors" DataTextField="ColorName" DataValueField="ColorId"
     DataField="FavoriteColor" DataType="Int32" AppendDataBoundItems="True">
    <ListItem Value="">(None Selected)</ListItem>
  </DropDownList>
  <Validate Type="Required" Target="ddlColors" Text="**" Message="Please select a color" />
  ...
  <ValidationSummary Id="vsSummary" DisplayMode="BulletList" />
  ...</pre>

<pre xml:space="preserve" xmlns=""></AddForm></pre>

[Back to top](#top)