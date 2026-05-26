---
id: template-format
title: 'xmod:Format'
category: Display Controls
context: template
summary: Formats a value — number, currency, date, regex match — for display. Also handles HTML/URL encoding/decoding and email cloaking.
keywords:
  - format
  - template
since: '1.0'
related:
  - template-markdown
  - template-each
  - template-select
---

# `<xmod:Format>`

`<xmod:Format>` takes a value (typically a `[[FieldName]]` token) and reformats it for display: numbers and dates get formatted to a culture-aware pattern, text gets `String.Format`-style placeholder substitution, regular expressions get replaced, and HTML or URL content gets encoded or decoded.

It's a self-closing tag — supply the value via the `Value` attribute, or place it between the opening and closing tags when the value contains characters that confuse attribute delimiters (single or double quotes).

## Example

```html {3,8,13,17,22}
<xmod:Template ...>
  <ItemTemplate>
    <!-- Floating-point with leading zero, two decimals: 5 → 05.00 -->
    Price (2dp): <xmod:Format Type="Float" Value="[[Price]]" Pattern="0#.00" />

    <!-- Whole number, two digits: 5 → 05 -->
    Quantity: <xmod:Format Type="Numeric" Value="[[Quantity]]" Pattern="d2" />

    <!-- Currency formatted in the server's culture: 5 → $5.00 (US) or £5.00 (UK) -->
    Price: <xmod:Format Type="Float" Value="[[Price]]" Pattern="c" />

    <!-- Currency forced to UK formatting on every server -->
    Price (UK): <xmod:Format Type="Float" Value="[[Price]]" Pattern="c" OutputCulture="en-GB" />

    <!-- Date: 04/25/2013 → 04/25/2013 -->
    Date: <xmod:Format Type="Date" Value="[[ReleaseDate]]" Pattern="MM/dd/yyyy" />

    <!-- Email cloaked from spam bots -->
    Contact: <xmod:Format Type="Cloak" Value="[[Email]]" />
  </ItemTemplate>
</xmod:Template>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [Type](#prop-type) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | `Numeric` `Float` `Date` `Text` `RegEx` `Cloak` `HtmlEncode` `HtmlDecode` `UrlEncode` `UrlDecode` | | What kind of formatting to perform |
| [Value](#prop-value) | string \| token | | The value to format. Alternatively, place between the opening and closing tags |
| [Pattern](#prop-pattern) | format string | | Pattern used for `Numeric`, `Float`, `Date`, and `RegEx` types |
| [Replacement](#prop-replacement) | string | | Replacement values used for `Text` and `RegEx` types |
| [MaxLength](#prop-maxlength) | integer | `0` (no limit) | Truncate the formatted output to N characters and append an ellipsis. Ignored when `Type="Cloak"` |
| [InputCulture](#prop-cultures) | locale id | (current culture) | Culture used to parse `Value` (e.g. for non-US date formats) |
| [OutputCulture](#prop-cultures) | locale id | (current culture) | Culture used to format the output |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Property Details

*   <span id="prop-type">**Type**</span>: How the value is interpreted and formatted.

    | Type | Value treated as | Pattern + Replacement |
    |------|------------------|-----------------------|
    | `Numeric` | Whole number | .NET integer format string (`d`, `d2`, `n`, `c`, custom) |
    | `Float` | Floating-point number | .NET numeric format string (`0.00`, `c`, `g`, custom) |
    | `Date` | Date/time | .NET date format string (`MM/dd/yyyy`, `ddd MMM dd yyyy`, custom) |
    | `Text` | Composite format string with `{0}`, `{1}`, … placeholders | `Replacement` is a comma-delimited list of values to fill the placeholders |
    | `RegEx` | Subject string for a regex replace | `Pattern` is the match regex; `Replacement` is the replacement (with `$1`, `$2`, … back-references) |
    | `Cloak` | Email or other string to obfuscate from spam bots | (no pattern — uses DNN's `CloakText` JavaScript obfuscator) |
    | `HtmlEncode` / `HtmlDecode` | Text to HTML-encode or decode | (no pattern) |
    | `UrlEncode` / `UrlDecode` | Text to URL-encode or decode | (no pattern) |

    ::: tip Cloak caveat
    `Cloak` uses inline JavaScript to assemble the value at render time. If JavaScript is disabled, the cloaked text doesn't appear at all. It also can't be used inside a `mailto:` link, since the `href` is parsed before the script runs.
    :::

*   <span id="prop-value">**Value**</span>: The value to format. Either as the `Value` attribute or as the inner content of the tag — useful when the value contains both single and double quotes that would conflict with attribute delimiters.

    ```html
    <xmod:Format Type="Text">[[QuotedField]]</xmod:Format>
    ```

*   <span id="prop-pattern">**Pattern**</span>: The format pattern. Meaning depends on `Type`:

    | Type | Pattern is |
    |------|------------|
    | `Numeric` / `Float` | A .NET [numeric format string](https://learn.microsoft.com/dotnet/standard/base-types/standard-numeric-format-strings) — e.g. `0`, `00`, `0.00`, `c` (currency), `n` (number with separators), `g` (general) |
    | `Date` | A .NET [date format string](https://learn.microsoft.com/dotnet/standard/base-types/custom-date-and-time-format-strings) — e.g. `MM/dd/yyyy`, `dddd MMMM d, yyyy` |
    | `Text` | _Not used_ — the placeholders are inside `Value` itself |
    | `RegEx` | The regular expression to match in `Value` |

*   <span id="prop-replacement">**Replacement**</span>: Replacement payload. Meaning depends on `Type`:

    | Type | Replacement is |
    |------|----------------|
    | `Text` | Comma-delimited list of values that fill `{0}`, `{1}`, … inside `Value` |
    | `RegEx` | The replacement string for the regex, with `$1`, `$2`, … back-references |
    | _other_ | _Ignored_ |

    Text example — `Value="Hello {0}, How's the {1}?"`, `Replacement="John,weather"` → `"Hello John, How's the weather?"`

*   <span id="prop-maxlength">**MaxLength**</span>: When greater than `0`, truncates the formatted output to that many characters and appends `...`. The ellipsis is included in the count, so `MaxLength="10"` produces at most 10 characters total. Ignored for `Cloak` because truncating obfuscated text can break the unscrambling.

*   <span id="prop-cultures">**InputCulture / OutputCulture**</span>: Locale identifiers (e.g. `en-US`, `fr-FR`, `de-DE`) used when parsing or formatting culture-sensitive values like dates and numbers.

    | Use | Example |
    |-----|---------|
    | Parse a French-formatted date as input | `InputCulture="fr-FR"` |
    | Render currency in UK pounds regardless of server | `OutputCulture="en-GB"` Pattern="c"` |
    | Both | Take a US date and display it French-style — `InputCulture="en-US" OutputCulture="fr-FR"` |

    Use `invariant` for culture-neutral formatting.
