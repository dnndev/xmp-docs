---
id: template-each
title: 'xmod:Each'
category: Display Controls
context: template
summary: Splits a delimited string into items and renders templated HTML for each one. Useful for unpacking comma- or pipe-delimited columns.
keywords:
  - each
  - template
since: '4.6'
related:
  - format
  - select
---

# `<xmod:Each>`

`<xmod:Each>` splits the value at `Delimiter` and renders one of the inner templates for each piece. It's the typical way to unpack a multi-value column — for example, an `Images` column containing `pic1.jpg|pic2.jpg|pic3.jpg`, or a `Tags` column containing comma-separated tags.

::: warning HTML and text only
The inner templates render plain HTML, text, and the `{value}` / `{index}` / `{count}` placeholders. Other XMod Pro tags (`<xmod:Format>`, `<xmod:Select>`, `[[FieldName]]` tokens, etc.) inside an `<ItemTemplate>` are **not** processed.
:::

## Example

Render an unordered list of `<img>` tags from a pipe-delimited `Images` column:

```html {2-4}
<ul>
  <xmod:Each Delimiter="|" Value="[[Images]]">
    <ItemTemplate><li><img src="/img/{value}" alt="Photo {index} of {count}" /></li></ItemTemplate>
  </xmod:Each>
</ul>
```

Build a comma-separated list with a final "and":

```html
<xmod:Each Delimiter="," Value="[[Authors]]">
  <ItemTemplate>{value}</ItemTemplate>
  <LastItemTemplate>and {value}</LastItemTemplate>
  <SeparatorTemplate>, </SeparatorTemplate>
</xmod:Each>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [Value](#prop-value) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string \| token | | The delimited string to split |
| Delimiter | string | `\|` | The character (or string) that separates items in `Value` |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Child Tags

| Tag | Description |
|-----|-------------|
| [`<ItemTemplate>`](#child-itemtemplate) | Rendered for each item that doesn't match a more specific template below. Required for any output |
| `<FirstItemTemplate>` | Rendered instead of `<ItemTemplate>` for the first item, when set |
| `<LastItemTemplate>` | Rendered instead of `<ItemTemplate>` for the last item, when set |
| `<AlternatingItemTemplate>` | Rendered instead of `<ItemTemplate>` for items at even positions (0-based), when set |
| `<SeparatorTemplate>` | Rendered between items (not after the last) |

### <span id="child-itemtemplate">Placeholders inside templates</span>

Inside any of the templates, three placeholders are replaced at render time:

| Placeholder | Replaced with |
|-------------|---------------|
| `{value}` | The current item's value |
| `{index}` | The current item's 1-based position in the list |
| `{count}` | The total number of items in the list |

## Property Details

*   <span id="prop-value">**Value**</span>: The delimited string to split. Typically a `[[FieldName]]` token bound to a multi-value column. If the value is empty, nothing renders (no templates fire).

## Template selection rules

When choosing which template to render for a given item, `<xmod:Each>` walks this priority:

1. **First item** → `<FirstItemTemplate>` if set, otherwise `<ItemTemplate>`
2. **Last item** → `<LastItemTemplate>` if set; otherwise `<AlternatingItemTemplate>` if the position is even, otherwise `<ItemTemplate>`
3. **Even-positioned item** → `<AlternatingItemTemplate>` if set, otherwise `<ItemTemplate>`
4. **All other items** → `<ItemTemplate>`

`<SeparatorTemplate>` renders after every item except the last.
