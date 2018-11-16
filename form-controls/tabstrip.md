# `<Tabstrip>`





The Tabstrip tag renders as a series of tabs that, when clicked, shows the corresponding content within that tab. This control requires that Javascript be enabled in the browser to function correctly.



## Syntax

    <Tabstrip

       Font-Bold="True|False"     Font-Italic="True|False"     Font-Names="string"     Font-Overline="True|False"     Font-Size="string|Smaller|Larger|XX-Small|X-Small|Small|Medium|Large|X-Large|XX-Large"     Font-Strikeout="True|False"     Font-Underline="True|False"     ForeColor="color name|#dddddd"     Height="size" 
        HoverBackColor="color name|#dddddd"
        HoverForeColor="color name|#dddddd"    SelectedBackColor="color name|#dddddd"
        SelectedForeColor="color name|#dddddd"
        ShowPanelBorders="True|False"
        Visible="True|False"     Width="size"

 

## Remarks

This tag allows you to create a tabbed user interface for your form much like a Rolodex or set of manila folders. When a tab is clicked, it becomes the selected tab and its associated content is shown, while any previously visible tab content is hidden. The tabstrip relies on and requires that Javascript be enabled in your users' browsers. Using the <Tabstrip> control you can quickly create an attractive interface to turn larger forms into paged forms, presenting data to the user in smaller, more manageable chunks.

*   **BackColor**: Color of the background of the control.
*   **BorderColor**: Color of the border around the control.
*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More](../font-properties.md)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](../unit-types.md).
*   **HoverBackColor**: Color of the background of each tab when the mouse hovers over it.
*   **HoverForeColor**: Color of the text in the tab when the mouse hovers over it.
*   **SelectedBackColor**: Color of the background of the currently selected tab.
*   **SelectedForeColor**: Color of the text of the currently selected tab.
*   **Visible**: Determines if the control is visible (true) or hidden (false).
*   **Width**: Width of the control in [units](../unit-types.md).



## Example

    <AddForm>

