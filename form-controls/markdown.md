# `<Markdown>`

The Markdown control, first introduced with version 4.9, renders as a multi-line, syntax-highlighted editor for entering markdown text. Markdown is, ultimately, just plain text so a Textarea control would work just as well. However, this control is designed to make markdown editing more pleasant. You can optionally decorate it with line numbers and assign a theme. The control does not attempt to enforce markdown syntax or other rules on the supplied text. This control pairs well with the [`<xmod:Markdown>`](../template-controls/markdown.md).

:::danger WARNING
Markdown is not a means for protecting against Cross Site Scripting attacks (XSS). It does not make HTML "safe". You should take the same care with your source content as you would any other content that can contain HTML, Javascript, etc. 
:::

## Syntax
```html
<Markdown 
    DataField="string" 
    DataType="String"
    Height="size" 
    ID="string" 
    LineNumbers="True|False" 
    Nullable="True|False"
    Theme="abcdef|duotone-light|eclipse|elegant|idea|lucario|material|mbo|mdn-like|neat|neo|seti|xq-light|zenburn"
    Width="size"
/> 
```
 

## Remarks

When you need to enter markdown content in your forms, the `<Markdown>` tag will help. It allows you to provide your users with a syntax-highlighted editor that makes entering markdown a more pleasant experience.  The control is not required to use the [`<xmod:Markdown>`](../template-controls/markdown.md) tag in your templates to render markdown to HTML. Since markdown is just plain text, you can also use a `<Textarea>` control. 

*   **DataField**: Name of the parameter in the `<submitcommand>` which will be filled with this control's data on when the form is submitted and/or the parameter in the `<selectcommand>` which will supply this control's data when the form is loaded. This attribute is required if the control will participate in operations with your form's data commands.
*   **DataType**: The type of data this control is supplying to the data commands. This is a [Database type](../data-types.md). . This attribute is required if the control will participate in operations with your form's data commands. The Markdown control uses String only. This value cannot be set to another data type.
*   **Height**: Height of the control, specified in [units](../unit-types.md).
*   **ID**: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form.
*   **LineNumbers**: Setting this property to `True` will instruct the control to display line numbers in the left gutter of the editor. This property is `False` by default.
*   **Nullable**: If True (the default is False), the control will return a `DBNull` value if the control is blank or contains just whitespace. If a `DBNull` value is passed to the control, the control will be set to an empty string.
*   **Theme**: If you'd like to give your control some pizazz, try assigning one of the available themes. `mdn-like` is a good one to try out.
*   **Width**: Width of the control in [units](../unit-types.md).



## Example
```html {7-9}
<AddForm>
  ...
  <table>
    <tr>
      <td>
        <label for="mdArticle" text="Article (Markdown Syntax)" /> 
        <Markdown id="mdArticle" datafield="article" 
          Width="100%" Height="600" 
          Theme="mdn-like" LineNumbers="True" />
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <AddButton text="Add"/>&nbsp;<CancelButton text="Cancel"/>
      </td>
    </tr>
  </table>
</AddForm>
```
