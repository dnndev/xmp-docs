---
id: template-select
title: 'xmod:Select'
category: Display Controls
context: template
summary: A multiple-choice dispatcher — like a Visual Basic Select/Case or a JavaScript switch. Renders the first `<Case>` that matches, or `<Else>` if none match.
keywords:
  - select
  - case
  - else
  - template
since: '1.0'
related:
  - format
  - each
---

# `<xmod:Select>`

`<xmod:Select>` evaluates each child `<Case>` in order, renders the first one that matches, then stops. If none match and an `<Else>` is supplied, the `<Else>` is rendered.

The control is general-purpose — comparisons can be on numbers, dates, text, regex matches, booleans, or DNN role membership. Use it inside an `<ItemTemplate>` to choose per-record output, or outside any template to choose between blocks of HTML based on URL parameters or user roles.

## Example

Show a colored badge based on the `FavColor` field:

```html
<xmod:Template ...>
  <ItemTemplate>
    Your favorite color is:
    <xmod:Select>
      <Case CompareType="Text" Value="[[FavColor]]" Expression="blue">
        <span style="color:#0000FF">BLUE</span>
      </Case>
      <Case CompareType="Text" Value="[[FavColor]]" Expression="red">
        <span style="color:#FF0000">RED</span>
      </Case>
      <Case CompareType="Text" Value="[[FavColor]]" Expression="green">
        <span style="color:#00FF00">GREEN</span>
      </Case>
      <Else>
        We don't know your favorite color
      </Else>
    </xmod:Select>
  </ItemTemplate>
</xmod:Template>
```

Show a section only to administrators:

```html
<xmod:Select>
  <Case CompareType="Role" Expression="Administrators">
    (This area is reserved for Admins)
  </Case>
</xmod:Select>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [Mode](#prop-mode) | `Standard` `Inclusive` | `Standard` | Whether to render only the first matching `<Case>` or all matching `<Case>` tags |

## Child Tags

| Tag | Required | Description |
|-----|----------|-------------|
| [`<Case>`](#child-case) | one or more | A single test. Render its content if the test matches |
| [`<Else>`](#child-else) | optional | Rendered if no `<Case>` matched (or always, in Inclusive mode) |

## Property Details

*   <span id="prop-mode">**Mode**</span>: How matches are dispatched.

    | Value | Behavior |
    |-------|----------|
    | `Standard` _(default)_ | Walk `<Case>` tags top-to-bottom. Render the first match and stop. If none match and `<Else>` is set, render it |
    | `Inclusive` | Render every `<Case>` that matches. Always render `<Else>` if it exists |

### <span id="child-case">`<Case>`</span>

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| CompareType <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | `Numeric` `Float` `Date` `Text` `RegEx` `Boolean` `Role` | | Determines how `Value` and `Expression` are compared |
| Value | string \| token | | Left-hand side of the comparison. Required for every type except `Role` |
| Expression | string | | Right-hand side of the comparison. Required |
| Operator | `=` `<>` `<` `>` `<=` `>=` | `=` | Comparison operator. Not all operators apply to every `CompareType` |
| IgnoreCase | `True` `False` | `True` | For `Text` and `RegEx` comparisons, whether to ignore case |
| Culture | locale id \| `invariant` | (current culture) | Culture used to parse `Value` and `Expression` for `Numeric`, `Float`, `Date`, and `Text` types |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required attribute

#### CompareType — what each one means

| CompareType | Value / Expression treated as | Valid operators |
|-------------|-------------------------------|-----------------|
| `Numeric` | Whole numbers | All six |
| `Float` | Floating-point numbers | All six |
| `Date` | Dates / date-times | All six |
| `Text` | Text strings | All six (lexicographic) |
| `RegEx` | `Value` is the subject; `Expression` is the regex pattern | `=` (matches), `<>` (does not match) |
| `Boolean` | Boolean. Numeric `0` is `False`, anything else is `True` | `=`, `<>` |
| `Role` | `Expression` is a comma-delimited list of DNN role names. `Value` is ignored | `=` (user is in any of the roles), `<>` (user is not in any) |

::: warning Role testing as host
When logged in as Host (SuperUser), `Role` comparisons evaluate to `True` regardless of the actual role list. Test as a non-host account to see real behavior.
:::

### <span id="child-else">`<Else>`</span>

`<Else>` has the same surface as `<Case>` but ignores `CompareType`, `Value`, `Expression`, and `Operator` — its content always renders when the `<Else>` fires.

```html
<Else>
  We don't know your favorite color
</Else>
```

In `Standard` mode `<Else>` fires only if no `<Case>` matched. In `Inclusive` mode it always fires.
