---
id: tokens-functions
title: Function Tokens
category: Function Tokens
context: all
summary: Function tokens run a built-in function — `[[Join("...", values)]]` for string formatting and `[[Localize:key]]` for localized text.
keywords:
  - function
  - join
  - localize
  - tokens
since: '1.0'
related:
  - tokens-field
  - tokens-expressions
  - tokens-dateadd
---

# Function Tokens

Function tokens invoke a small set of built-in XMP functions. Two functions are documented here:

| Function | Use |
|----------|-----|
| [`[[Join(...)]]`](#join) | Combine literal text with field values inside an XMP tag attribute |
| [`[[Localize:key]]`](#localize) | Look up localized text from DNN's localization resource files |

For richer expressions — math, comparisons, conditionals, and string functions — see [Expression Tokens](expressions.md), introduced in v5.0.

## <span id="join">`[[Join("template", value1, value2, ...)]]`</span>

`Join` substitutes values into a template string the same way that .NET's `String.Format` does. Use it to combine literal text with field tokens or other dynamic values, especially when building an attribute value that needs both.

### Syntax

```
[[Join("template", value1, value2, ...)]]
```

| Argument | Description |
|----------|-------------|
| `template` | A double-quoted string containing zero or more `{0}`, `{1}`, `{2}`, ... placeholders |
| `value1, value2, ...` | Replacement values, one per placeholder. The first replaces `{0}`, the second replaces `{1}`, and so on |

The number of values must match the number of placeholders. Placeholder numbers must start at 0 and not skip values.

### Examples

| Token | Result |
|-------|--------|
| `[[Join("Hello, {0}!", "World")]]` | `Hello, World!` |
| `[[Join("Hello, {0}", [[FirstName]])]]` | `Hello, John` _(when `FirstName` is `John`)_ |
| `[[Join("{0} plus {1} equals {2}", "1", "2", "3")]]` | `1 plus 2 equals 3` |
| `[[Join("{1} plus {0} equals {2}", "1", "2", "3")]]` | `2 plus 1 equals 3` |

When the template needs literal double quotes (e.g. inside JavaScript), escape them by doubling them up:

```html
<xmod:DeleteButton Text="Delete"
    OnClientClick='[[Join("return confirm(""Delete {0}?"")", [[CompanyName]])]]' />
```

### Why use Join?

XMP tag attributes are XML, so a single attribute value can't easily mix a literal string with a field token. `Join` is the workaround — it builds the full string in one expression that fits in one attribute. For plain HTML and HTML attributes, just put the tokens directly in the markup.

## <span id="localize">`[[Localize:key]]`</span>

`Localize` looks up text from DNN's localization resource files (the same `.resx` files DNN uses for its own UI translation).

### Syntax

```
[[Localize:keyName]]
```

`keyName` is the resource key in the localization file. At render time, XMP replaces the token with the value from the localization file matching the user's culture, falling back to English if no localized version exists.

For details on creating and using XMP-compatible resource files, see [Localizing Text and Content](../localization.md).

## Example combining both

```html
<xmod:Template>
  <ItemTemplate>
    [[Localize:Company]]: [[CompanyName]]<br />
    [[Localize:Address]]: [[Address]]<br />
    <xmod:DeleteButton Text='[[Join("Delete {0}", [[CompanyName]])]]'
        OnClientClick='[[Join("return confirm(""Really delete {0}?"")", [[CompanyName]])]]'>
      <Parameter Name="CompanyId" Value="[[CompanyId]]" DataType="Int32" />
    </xmod:DeleteButton>
  </ItemTemplate>
</xmod:Template>
```

See the [Tokens Overview](README.md#standard-token-rules) for the standard rules that apply to all tokens.
