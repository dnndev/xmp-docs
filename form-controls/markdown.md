---
id: form-markdown
title: Markdown
category: Input Controls
context: form
summary: The Markdown control renders a syntax-highlighted multi-line editor for entering markdown text.
keywords:
  - markdown
  - form
since: '4.9'
---
# `<Markdown>`

The Markdown control renders a syntax-highlighted, multi-line editor for entering markdown text. Markdown is plain text, so a `<Textarea>` would also work — but this control uses [CodeMirror](https://codemirror.net/) to make the experience more pleasant, with optional line numbers and a choice of color themes.

The control does not enforce markdown syntax or transform the text — it just helps you type it. To render the saved markdown back as HTML, pair it with [`<xmod:Markdown>`](../template-controls/markdown.md) in your views.

::: danger WARNING
Markdown is **not** a means for protecting against Cross Site Scripting attacks (XSS). It does not make HTML "safe". Take the same care with markdown content as you would with any other content that may contain HTML or JavaScript.
:::

## Example
```html {7-9}
<AddForm>
  ...
  <table>
    <tr>
      <td>
        <Label For="mdArticle" Text="Article (Markdown Syntax)" />
        <Markdown Id="mdArticle" DataField="Article"
          Width="100%" Height="600"
          Theme="mdn-like" LineNumbers="True" />
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <AddButton Text="Add"/>&nbsp;<CancelButton Text="Cancel"/>
      </td>
    </tr>
  </table>
</AddForm>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [ID](#prop-id) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Unique identifier for the control within the form |
| [DataField](#prop-datafield) | string | | Parameter name for data binding to your form's data commands |
| DataType | `String` | `String` | Database type — always `String` for this control |
| Height | [size](../unit-types.md) | | Height of the editor |
| [LineNumbers](#prop-linenumbers) | `True` `False` | `False` | Display line numbers in the editor's left gutter |
| [Nullable](#prop-nullable) | `True` `False` | `False` | Returns DBNull when the control is blank or whitespace |
| Placeholder | string | | Hint text displayed when the control is empty |
| [Theme](#prop-theme) | theme name | `eclipse` | Color theme for the editor (see Property Details for the list) |
| Visible | `True` `False` | `True` | Shows or hides the control |
| Width | [size](../unit-types.md) | | Width of the editor |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

::: info Limited inherited properties
Because the control replaces its underlying textarea with the CodeMirror editor at runtime, most ASP.NET inherited properties (`CssClass`, `Style`, `Enabled`, `ReadOnly`, `TabIndex`, `ToolTip`) don't reach the rendered editor. Only `Width`, `Height`, and `Visible` are meaningful for layout — `Width` and `Height` are passed through to CodeMirror's `setSize()`. Style the editor via CodeMirror's CSS classes instead.
:::

## Property Details

*   <span id="prop-id">**ID**</span>: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form.

*   <span id="prop-datafield">**DataField**</span>: Name of the parameter in the `<SubmitCommand>` which will be filled with this control's data when the form is submitted and/or the parameter in the `<SelectCommand>` which will supply this control's data when the form is loaded. This attribute is required if the control will participate in operations with your form's data commands.

*   <span id="prop-linenumbers">**LineNumbers**</span>: When `True`, line numbers are displayed in the editor's left gutter — useful for longer documents where you want to reference specific lines.

*   <span id="prop-nullable">**Nullable**</span>: If True, the control will return a DBNull value if the control is blank or contains just whitespace. If a DBNull value is passed to the control, the control will be set to an empty string.

*   <span id="prop-theme">**Theme**</span>: Color theme for the editor. If omitted or invalid, the control falls back to `eclipse`. Valid themes:

    `abcdef` &nbsp; `duotone-light` &nbsp; `eclipse` &nbsp; `elegant` &nbsp; `idea` &nbsp; `lucario` &nbsp; `material` &nbsp; `mbo` &nbsp; `mdn-like` &nbsp; `neat` &nbsp; `neo` &nbsp; `seti` &nbsp; `xq-light` &nbsp; `zenburn`

    `mdn-like` is a good general-purpose choice; `material` and `zenburn` are popular dark themes.
