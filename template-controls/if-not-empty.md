---
id: template-if-not-empty
title: 'xmod:IfNotEmpty'
category: Conditional
context: template
summary: Renders its inner content only when `Value` is not empty (not an empty string or `null`). Pair with `<xmod:IfEmpty>` for if/else logic.
keywords:
  - if
  - not
  - empty
  - conditional
  - template
since: '4.2'
related:
  - template-if-empty
  - template-select
---

# `<xmod:IfNotEmpty>`

`<xmod:IfNotEmpty>` renders the content between its opening and closing tags only when `Value` is **not** empty — i.e. has at least one character that isn't part of an empty string `""` or `null`. Use it to show data only when it's available.

For if/else patterns, place an `<xmod:IfEmpty>` and an `<xmod:IfNotEmpty>` back to back with the same `Value`.

## Example

Render an `<img>` only when `imageUrl` has a value:

```html {3-5}
<xmod:Template Id="Employees">
  <DetailTemplate>
    <h3>[[FirstName]] [[LastName]]</h3>
    <xmod:IfNotEmpty Value="[[imageUrl]]">
      <img src="[[imageUrl]]" alt="[[FirstName]] [[LastName]]" />
    </xmod:IfNotEmpty>
    <xmod:IfEmpty Value="[[imageUrl]]">
      <img src="/images/NoImage.png" alt="No photo on file" />
    </xmod:IfEmpty>
  </DetailTemplate>
</xmod:Template>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [Value](#prop-value) | string \| token | | The value tested for non-emptiness |

## Property Details

*   <span id="prop-value">**Value**</span>: The value to test. Most commonly a `[[FieldName]]` token bound to a database column. The content renders only when the resolved value is **not** an empty string and **not** `null`. Whitespace-only values (e.g. `"  "`) count as non-empty.

    When the attribute uses a field token, single-quote the value: `Value='[[FieldName]]'` — `[[FieldName]]` contains brackets that conflict with double quotes inside the XML attribute parser.
