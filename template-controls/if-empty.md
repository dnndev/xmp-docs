---
id: template-if-empty
title: 'xmod:IfEmpty'
category: Conditional
context: template
summary: Renders its inner content only when `Value` is empty (an empty string or `null`). Pair with `<xmod:IfNotEmpty>` for if/else logic.
keywords:
  - if
  - empty
  - conditional
  - template
since: '4.2'
related:
  - template-if-not-empty
  - template-select
---

# `<xmod:IfEmpty>`

`<xmod:IfEmpty>` renders the content between its opening and closing tags only when `Value` is empty — an empty string `""` or `null`. Use it to show a placeholder when a field has no data.

For if/else patterns, place an `<xmod:IfEmpty>` and an `<xmod:IfNotEmpty>` back to back with the same `Value`.

## Example

Show a placeholder image when the record's `imageUrl` is blank, and the actual image when it isn't:

```html {3-5,6-8}
<xmod:Template Id="Employees">
  <DetailTemplate>
    <h3>[[FirstName]] [[LastName]]</h3>
    <xmod:IfEmpty Value="[[imageUrl]]">
      <img src="/images/NoImage.png" alt="No photo on file" />
    </xmod:IfEmpty>
    <xmod:IfNotEmpty Value="[[imageUrl]]">
      <img src="[[imageUrl]]" alt="[[FirstName]] [[LastName]]" />
    </xmod:IfNotEmpty>
    <h4>Biography</h4>
    <div>[[Bio]]</div>
  </DetailTemplate>
</xmod:Template>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [Value](#prop-value) | string \| token | | The value tested for emptiness |

## Property Details

*   <span id="prop-value">**Value**</span>: The value to test. Most commonly a `[[FieldName]]` token bound to a database column. The content renders only when the resolved value is an empty string or `null`. Whitespace-only values (e.g. `"  "`) count as non-empty.

    When the attribute uses a field token, single-quote the value: `Value='[[FieldName]]'` — `[[FieldName]]` contains brackets that conflict with double quotes inside the XML attribute parser.
