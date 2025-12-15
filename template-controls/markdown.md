---
id: template-markdown
title: 'xmod:Markdown'
category: Display Controls
context: template
summary: >-
  The Markdown tag, first introduced in version 4.9, is used to convert
  markdown-formatted content for display using HTML. The content can be created
  using the [`<Markdown>`](../form-controls/markdown.
keywords:
  - markdown
  - template
---
# `<xmod:Markdown>`

The Markdown tag, first introduced in version 4.9, is used to convert markdown-formatted content for display using HTML. The content can be created using the [`<Markdown>`](../form-controls/markdown.md) form input tag (which provides a markdown editor), though since markdown is plain text, it could come from a `<Textarea>` or any other text editor.

:::danger WARNING
Markdown is not a means for protecting against Cross Site Scripting attacks (XSS). It does not make HTML "safe". You should take the same care with your source content as you would any other content that can contain HTML, Javascript, etc. 
:::

## Syntax
```html
<xmod:Markdown 
  Bootstrap="true|false">
...Markdown Content...
</xmod:Markdown>
```

## Remarks

*   **Content**: The markdown content should be supplied between the opening `<xmod:Markdown>` and closing `</xmod:Markdown>` tags. This can be in the form of hard-coded markdown text or a field retrieved from the database using a `[[field]]` token. The tag will trim spacing from the beginning and end of the content so it is possible to put content on new lines, but since spacing and indentation is important in markdown, you should make sure the content starts at the beginning of each line and not indented.

    Data-Bound tag example:
    ```html
    <xmod:Markdown>[[YourMarkdownContentField]]</xmod:Markdown>
    ```
    Inline markdown example. Note that content starts at the _beginning_ of each line, not indented. If you indent the lines they will not render as markdown because indentation is significant in markdown.
    ```html
      <xmod:Markdown>
    # Your Markdown Content
    ## An H2 Heading
    * Item One
    * Item Two
      * Item Two A
      * Item Two B
      </xmod:Markdown>
    ```

*   **Code Blocks**: If the markdown contains fenced code blocks, the rendered HTML will be a `<pre><code>...</code></pre>` block of code. If the fenced block specifies a language like ` ```html ` or ` ```javascript ` then the `<code>` tag will contain a class indicating the language like: `<code class="language-html">` or `<code class="language-javascript">`. It is up to your stylesheet to style the code and provide any syntax highlighting.

* **Bootstrap**: (optional) False, by default, if Bootstrap is set to `true`, certain tags will be rendered with basic Bootstrap classes: 

  * HTML is displayed as text (not encoded) inside `<p>` tags.
    ```html
    <h1>This should render as plain text</h1>
    <a href="https://dnndev.com">Go to DNNDev.com</a>
    --- Renders As ---
    <p>
      "<h1>This should render as plain text</h1>
       <a href="https://dnndev.com">Go to DNNDev.com</a>"
    </p>
  * Adds `.table` to `<table>`
  * Adds `.blockquote` to `<blockquote>`
  * Adds `.figure` to `<figure>`
  * Adds `.figure-caption` to `<figcaption>`
  * Adds `.img-fluid` to all images
    ```markdown
    ![Image Text](/url)
    --- Renders As... ---
    <img src="/url" class="img-fluid" alt="Image Text">
    ```

## Example
```html
<xmod:Template>
  <DetailDataSource 
    CommandText="SELECT Author, Title, Article 
                 FROM Articles WHERE ArticleId = @id">
    <Parameter Name="id" Value='[[Url:id]]' DataType="Int32" />
  </DetailDataSource>

  <DetailTemplate>
    <h1>[[Title]]</h1>
    <h4>by [[Author]]</h4>
    <xmod:Markdown>[[Article]]</xmod:Markdown>
  </DetailTemplate>
```



