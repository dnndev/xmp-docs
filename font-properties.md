---
id: font-properties
title: Font Properties
category: Reference
context: all
summary: >-
  Most standard controls accept attributes that affect how text is displayed in
  a control. Generally, it's best to set font styling via CSS classes or via the
  "style" attribute available in most control...
keywords:
  - font
  - properties
---
# Font Properties

Most standard controls accept attributes that affect how text is displayed in a control. Generally, it's best to set font styling via CSS classes or via the "style" attribute available in most controls. However, the font properties provide a direct means of setting specific styles that affect the display of the control's text.

::: warning NOTE
Not all properties will function in all controls and browsers.
:::

Font properties must start with `font-` and be followed by the name of the property you want to set. The following properties are available:

*   **font-bold**:  Whether the font is bold. Value can be true or false. Default is false.
*   **font-italic**: Whether is italic. Value can be `true` or `false`. Default is false.
*   **font-names**:  Sequence of fonts that can be used to render the control. Ex: `Arial, Helvetica, sans-serif`
*   **font-overline**: Whether the font contains an overline. Value can be `true` or `false`. Default is false.
*   **font-size**: The size of the font. Ex: `12px` or `12pt`  
*   **font-strikeout**: Whether the font has a strike through it (~~strikethrough~~). Value can be `true` or `false`. Default is false.
*   **font-underline**: Whether the font is underlined. Value can be `true` or `false`. Default is false.
