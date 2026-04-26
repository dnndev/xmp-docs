---
id: tokens-dateadd
title: DateAdd Token
category: Function Tokens
context: all
summary: The DateAdd token (`[[DateAdd:n,unit,format]]`) returns a date relative to today, optionally formatted with a .NET date pattern.
keywords:
  - date
  - dateadd
  - tokens
since: '1.0'
related:
  - functions
  - expressions
---

# DateAdd Token

`[[DateAdd:n,unit,format]]` returns a date relative to today. Use it for "today plus 7 days" cutoffs, "first of next month" filters, or just to render today's date in a specific format.

## Syntax

```
[[DateAdd:number,interval,format]]
```

To get today's date, supply zero as the number — `[[DateAdd:0]]`. The token only fires when at least one argument is present.

## Arguments

| Position | Required | Values | Meaning |
|----------|----------|--------|---------|
| number | required | integer (positive, negative, or zero) | How many `interval`s to add. Negative goes into the past |
| interval | required if `number` is set | `d` `w` `m` `y` | Day, week, month, year |
| format | optional | .NET date format pattern | How to render the result. If omitted, the system default format is used |

## Examples

| Token | Result (assuming today is 2026-08-01) |
|-------|---------------------------------------|
| `[[DateAdd:0]]` | Today's date in the system default format |
| `[[DateAdd:0,d,MM/dd/yyyy]]` | `08/01/2026` |
| `[[DateAdd:1,w]]` | `2026-08-08` (next week, default format) |
| `[[DateAdd:-1,m,yyyy-MM]]` | `2026-07` (last month) |
| `[[DateAdd:5,y,yyyy-MM-dd]]` | `2031-08-01` (five years from now) |
| `[[DateAdd:7,d,dddd]]` | `Saturday` (day name 7 days from now) |

For the full list of date format specifiers, see Microsoft's [custom date and time format strings](https://learn.microsoft.com/dotnet/standard/base-types/custom-date-and-time-format-strings) docs.

## Example

```html
<xmod:Template>
  <ListDataSource CommandText="SELECT * FROM Articles WHERE PublishDate >= @cutoff">
    <Parameter Name="cutoff" Value="[[DateAdd:-7,d,yyyy-MM-dd]]" DataType="DateTime" />
  </ListDataSource>
  <HeaderTemplate>
    <h1>Articles from the past 7 days</h1>
    <p>As of [[DateAdd:0,d,MMMM d, yyyy]]</p>
  </HeaderTemplate>
  <ItemTemplate>
    <p><strong>[[Title]]</strong> — [[PublishDate]]</p>
  </ItemTemplate>
</xmod:Template>
```

See the [Tokens Overview](README.md#standard-token-rules) for the standard rules that apply to all tokens.
