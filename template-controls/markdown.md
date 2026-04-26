---
id: template-markdown
title: 'xmod:Markdown'
category: Display Controls
context: template
summary: Renders Markdown-formatted content as HTML. Supply the markdown as the tag's inner content (often via a `[[FieldName]]` token).
keywords:
  - markdown
  - template
since: '4.9'
related:
  - format
  - script-block
---

# `<xmod:Markdown>`

`<xmod:Markdown>` (introduced in v4.9) converts Markdown content to HTML at render time. The Markdown source goes between the opening and closing tags — typically a `[[FieldName]]` token bound to a Markdown column populated by the [`<Markdown>`](../form-controls/markdown.md) form control, but plain hardcoded Markdown works too.

XMP uses the [Markdig](https://github.com/xoofx/markdig) library with the *Advanced Extensions* and *EmojiAndSmiley* profiles enabled.

::: danger Markdown is not a sanitizer
Markdown does not make raw HTML safe. By default, raw HTML inside Markdown passes through to the rendered page — if user-supplied content can contain HTML, you must sanitize it before storing it (or use `Bootstrap="true"`, which disables raw HTML).
:::

## Example

```html {7}
<xmod:Template>
  <DetailDataSource CommandText="SELECT Author, Title, Article FROM Articles WHERE ArticleId = @id">
    <Parameter Name="id" Value="[[Url:id]]" DataType="Int32" />
  </DetailDataSource>
  <DetailTemplate>
    <h1>[[Title]]</h1>
    <h4>by [[Author]]</h4>
    <xmod:Markdown>[[Article]]</xmod:Markdown>
  </DetailTemplate>
</xmod:Template>
```

Inline Markdown content works too, but indentation matters in Markdown — start every content line at column 0:

```html
<xmod:Markdown>
# Section heading
## Subheading
* Item one
* Item two
  * Nested item
</xmod:Markdown>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [Bootstrap](#prop-bootstrap) | `True` `False` | `False` | When `True`, adds Bootstrap utility classes to common rendered elements and disables raw HTML pass-through |

## Property Details

*   <span id="prop-bootstrap">**Bootstrap**</span>: When `True`, the Markdig pipeline runs with the Bootstrap profile and `DisableHtml`. The differences:

    | Element | `Bootstrap="False"` (default) | `Bootstrap="True"` |
    |---------|-------------------------------|--------------------|
    | Raw HTML in source | Passes through to output | Rendered as plain text inside `<p>` |
    | `<table>` | No class | Adds `.table` |
    | `<blockquote>` | No class | Adds `.blockquote` |
    | `<figure>` | No class | Adds `.figure` |
    | `<figcaption>` | No class | Adds `.figure-caption` |
    | Images | `<img src="...">` | `<img src="..." class="img-fluid">` |

    For sites built on Bootstrap, this is the easier path — Markdown renders into already-styled markup with no extra CSS.

## Code blocks

Fenced code blocks render as `<pre><code>...</code></pre>`. When the fence specifies a language (e.g. ` ```javascript`), the `<code>` tag picks up a class:

````markdown
```javascript
console.log('hello');
```
````

renders as:

```html
<pre><code class="language-javascript">console.log('hello');</code></pre>
```

XMP doesn't bundle a syntax highlighter — your stylesheet (or a JS library like Prism or highlight.js) handles the visual highlighting.
