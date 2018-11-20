# <SearchSort>

<a name="top"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

The SearchSort tag can only be used within a Template tag or DataList tag. The tag defines how the search and sort panel in the view will look and function. The SearchSort tag attributes provide the information necessary to define how the components of the search and sort panel will look and function, while the tag's inner content, if specified, allow you to use HTML and SearchSort tokens to determine how the components of the search and sort panel are arranged.

<a name="syntax"></a>

## Syntax

<div xmlns="">`<xmod:Template|DataList ...>`  
`    ...`  
`    <SearchSort`  
`        BackColor="_color name_|#dddddd"  
        BorderColor="_color name_|#dddddd"  
        BorderStyle="**NotSet**|None|Dotted|Dashed|Solid|Double|Groove|Ridge|Inset|Outset"  
        BorderWidth="_size_"  
        FilterExpression="_string_"  
        Font-Bold="True|**False**"  
        Font-Italic="True|**False**"  
        Font-Names="_string_"  
        Font-Overline="True|**False**"  
        Font-Size="_string_|Smaller|Larger|XX-Small|X-Small|Small|Medium| Large|X-Large|XX-Large"  
        Font-Strikeout="True|**False**"  
        Font-Underline="True|**False**"  
        ForeColor="_color name_|#dddddd"  
        Height="_size_"  
        ReverseSortCssClass="_string_|**Normal**"  
        ReverseSortText="_string_|**Reverse**"  
        SearchBoxCssClass="_string_|**NormalTextBox**"  
        SearchButtonCssClass="_string_|**CommandButton**"  
        SearchButtonText="_string_|**Search**"  
        SearchLabelCssClass="_string_|**Normal**"  
        SearchLabelText="_string_|**Search**"  
        SortButtonCssClass="_string_|**CommandButton**"  
        SortButtonText="_string_|**Sort**"  
        SortFieldLabels="_comma-delimited list of sort field labels_"  
        SortFieldListCssClass="_string_|**NormalTextBox**"  
        SortFieldNames="_comma-delimited list of field names_"  
        SortLabelCssClass="_string_|**Normal**"  
        SortLabelText="_string_|**Sort**"  
        Width="_size_"` `>  
`  
`        ..._Display Template (see Remarks)_...  
`  
`</xmod:Template|DataList>`</div>


## Remarks

*   **FilterExpression**: Essentially the "WHERE" clause of a SELECT query without the WHERE. It is executed when the user clicks the Search button. You use the placeholder {0} to represent the value entered by the user. For example: FilterExpression="FirstName LIKE '%{0}%'". In this example, the {0} will be replaced by the value entered by the user in the Search Box. If the user enters "John" then the resulting expression will be: "FirstName LIKE '%John%'".  

*   **ReverseSortCssClass**: The Cascading Style Sheet (CSS) class name to associate with the Reverse Sort checkbox. The default value is "Normal".  

*   **ReverseSortText**: The text to use for the Reverse Sort checkbox caption. The default value is "Reverse".  

*   **SearchBoxCssClass:** The Cascading Style Sheet (CSS) class name to associate with the search phrase input box. The default value is "NormalTextBox".  

*   **SearchButtonCssClass**: The Cascading Style Sheet (CSS) class name to associate with the button that initiates the Search. The default value is "CommandButton".  

*   **SearchButtonText**: The caption to use for the Search Buttton.  

*   **SearchLabelCssClass**: The Cascading Style Sheet (CSS) class name to associate with the Search Label. In most cases, the Search Label precedes the Search Box to identify the purpose of the box. The default value is "Normal".  

*   **SearchLabelText**: The text to use in the Search Label. In most cases, the Search Label precedes the Search Box to identify the purpose of the control. The default value is "Search".  

*   **SortButtonCssClass**: The Cascading Style Sheet (CSS) class name to associate with the button that, when pressed, executes the sort. The default value is "CommandButton".  

*   **SortButtonText**: The text to use for the button that, when pressed, executes the sort.The default value is "Sort".  

*   **SortFieldLabels**: Many times, the names you use for fields in your data source aren't user-friendly. Supply a comma-delimited list of captions to use in the sort field list control.  

*   **SortFieldListCssClass**: The Cascading Style Sheet (CSS) class name to associate with the list control containing the list of fields the user can sort on. The default value is "NormalTextBox".  

*   **SortFieldNames**: The names of the fields in your data source that can be sorted on. This is a comma-delimited list of names.  

*   **SortLabelCssClass**: The Cascading Style Sheet (CSS) class name to associate with the Sort Label. In most cases, the Sort Label precedes the sort list control to identify the purpose of the control.  

*   **SortLabelText**: The text to use in the Sort Label. In most cases, the Sort Label precedes the sort list control to identify the purpose of the control.  

*   **Display Template**: Within the `<SearchSort> </SearchSort>` tags, you can use HTML and special tokens to arrange and style the components of the search/sort panel. See the Example for one possibility. Below are the tokens you can use:
    *   **{SearchButton}**: Will be replaced with the button used to initiate the search.
    *   **{SearchBox}**: Will be replaced with the input box used to enter the search phrase.
    *   **{SearchLabel}**: Will be replaced by the label used to identify the purpose of the search box and search button.
    *   **{SortLabel}**: Will be replaced by the label used to identify the purpose of the sort list control and button.
    *   **{SortFieldList}**: Will be replaced by the list control containing the list of fields the user can sort on.
    *   **{ReverseSort}**: Will be replaced by the checkbox that, when ticked, will cause the results to be sorted in reverse, order.
    *   **{SortButton}**: Will be replaced by the button used to initiate the sort.

## Example

<div xmlns="">`<xmod:Template ...>`  
`    ...`  
`    <SearchSort FilterExpression="FirstName LIKE '%{0}%'"  
      SearchLabelText="Search For:" SearchButtonText="GO"  
      SortFieldNames="FirstName,LastName,Zip"  
      SortFieldLabels="First Name,Last Name,Zip Code">  
      <table>  
        <tr>  
          <td><strong>{SearchLabel}</strong> {SearchBox} {SearchButton}</td>  
          <td align="right">  
            <strong>{SortLabel}</strong> {SortFieldList} {SortButton} Reverse {ReverseSort}  
``</td>  
        </tr>  
      </table>  
    </SearchSort>  
    ...`  
`</xmod:Template>`</div>

