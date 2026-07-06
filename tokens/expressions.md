---
id: tokens-expressions
title: Expression Tokens
category: Expression Tokens
context: all
since: '5.0'
summary: >-
  Expression tokens let you format, calculate, and conditionally display data
  right inside your views, forms, and feeds using the [[=...]] syntax — no SQL
  changes or JavaScript needed.
keywords:
  - expression
  - tokens
  - format
  - calculate
  - conditional
  - math
  - string functions
  - if
  - coalesce
  - filelink
  - file url
  - secure files
  - download
---
# Expression Tokens <Badge type="info" text="v5.0" />

Expression tokens let you format, calculate, and conditionally display data right inside your views, forms, and feeds — no SQL changes or JavaScript needed. Use them to display prices as currency, format dates, calculate totals with tax, show "In Stock" or "Out of Stock" based on your data, apply CSS classes conditionally, combine fields inside tag properties, provide fallback values for missing data, and more.

## Introduction

Standard [field tokens](field.md) like `[[ProductName]]` insert raw values. Expression tokens wrap those values in logic:

```
[[=Upper(ProductName)]]
[[=Round(Price * 1.0825, 2)]]
[[=If(QtyInStock > 0, 'In Stock', 'Out of Stock')]]
```

Notice that inside an expression, you use the field name by itself — `ProductName` instead of `[[ProductName]]`. The expression already lives inside `[[=...]]`, so the extra brackets aren't needed.

Previously, this kind of formatting and logic required changes to your SQL queries, custom JavaScript, or other workarounds. Expression tokens let you do it all directly in your view, form, or feed markup.

### When to Use Expression Tokens

Much of what you do in XMP views, forms, and feeds involves placing field tokens directly in your HTML markup. That approach is simple and works great — you don't need expression tokens for everything. This section helps you understand when plain tokens are enough and when expression tokens are the better tool.

#### Plain HTML: Just Use Tokens

Inside your `<ItemTemplate>`, `<DetailTemplate>`, or anywhere you're writing regular HTML, you can place field tokens side by side and they simply output their values into the markup:

```html
<!-- Combining fields — just place them next to each other -->
<span>[[FirstName]] [[LastName]]</span>

<!-- Building URLs and paths -->
<img src="/Portals/0/Images/[[PhotoFile]]" />
<a href="/products?id=[[ProductID]]">[[ProductName]]</a>

<!-- Mixing tokens with HTML structure -->
<div class="card">
  <h3>[[Title]]</h3>
  <p>[[Description]]</p>
  <span>[[City]], [[State]] [[Zip]]</span>
</div>
```

This works because the HTML is plain text as far as XMP is concerned — it replaces each `[[...]]` token with its value and sends the result to the browser. No expression token needed.

#### Tag Properties: Where Plain Tokens Fall Short

The situation changes when you need to place a combined value inside a **property of an XMP tag or ASP.NET server control**. These properties expect a single evaluated value, so you can't just drop multiple tokens side by side:

```html
<!-- ✗ This WON'T work — you can't put two tokens in a single tag property -->
<xmod:DetailButton Text="View [[FirstName]] [[LastName]]" />

<!-- ✓ Use the & operator to concatenate -->
<xmod:DetailButton Text="[[='View ' & FirstName & ' ' & LastName]]" />

<!-- ✓ Or use the Concat function -->
<xmod:DetailButton Text="[[=Concat('View ', FirstName, ' ', LastName)]]" />
```

Both approaches produce a single `[[=...]]` value that the tag property can evaluate. The `&` operator is concise and natural for simple cases; `Concat` is handy when you have many values to join. This is one of the most common reasons to reach for expression tokens.

#### Formatting and Logic: Where Expression Tokens Shine

Even in plain HTML, expression tokens become the right choice when you need to do more than just insert a raw value:

**Formatting**
```html
<!-- Plain token gives you the raw value: 19.99 -->
<span>[[Price]]</span>

<!-- Expression token lets you format it: $19.99 -->
<span>[[=Format(Price, 'C2')]]</span>

<!-- Format a date: Jan 15, 2026 instead of 1/15/2026 12:00:00 AM -->
<span>[[=Format(EventDate, 'MMM d, yyyy')]]</span>
```

**Calculations**
```html
<!-- Tax-inclusive price -->
<span>[[=Format(Round(Price * 1.0825, 2), 'C2')]]</span>

<!-- Discount percentage -->
<span>[[=Round((1 - SalePrice / RegularPrice) * 100, 0)]]% off</span>
```

**Conditional output**
```html
<!-- Show different text based on data -->
<span>[[=If(QtyInStock > 0, 'In Stock', 'Out of Stock')]]</span>

<!-- Apply a CSS class based on data -->
<tr class="[[=If(IsActive, 'active', 'inactive')]]">
```

**Handling missing data**
```html
<!-- Fall back to a default when a field is empty -->
<span>[[=Coalesce(Nickname, FirstName, 'Anonymous')]]</span>
```

Previously, these kinds of operations required changes to your SQL queries, custom JavaScript, or other workarounds. Expression tokens let you handle them right in your markup.

#### The `<xmod:Format>` Control

XMP also has the [`<xmod:Format>`](../template-controls/format.md) control, which has been available since early versions. For simple date and number formatting, either tool works well — use whichever feels more natural. But `<xmod:Format>` has capabilities that expression tokens don't:

**Culture-aware formatting** — format values for a specific locale, regardless of the server's default culture:

```html
<!-- Force British currency formatting, even on a US server -->
<xmod:Format Type="Float" Value='[[Price]]' Pattern="c" OutputCulture="en-GB" />
<!-- Output: £5.00 -->

<!-- Parse a US date and display it for a French audience -->
<xmod:Format Type="Date" Value='[[EventDate]]' InputCulture="en-US" OutputCulture="fr-FR" />
<!-- Output: 25/04/2013 -->
```

Expression tokens use the server's default culture for formatting. If you need to target a specific locale, `<xmod:Format>` is the right tool.

**Regex substitutions** — transform text using regular expression patterns:

```html
<xmod:Format Type="RegEx" Value='[[PhoneNumber]]'
    Pattern="(\d{3})(\d{3})(\d{4})"
    Replacement="($1) $2-$3" />
<!-- Input: 5035551234 → Output: (503) 555-1234 -->
```

**Email cloaking** — obfuscate email addresses so web scrapers can't harvest them:

```html
<xmod:Format Type="Cloak" Value='[[Email]]' />
```

**Truncation with ellipsis** — trim long text to a maximum length:

```html
<xmod:Format Type="Text" Value='[[Description]]' MaxLength="100" />
```

::: tip When to choose which?
For most formatting tasks — dates, currency, numbers — expression tokens and `<xmod:Format>` overlap. Expression tokens are more concise (`[[=Format(Price, 'C2')]]` vs. an entire `<xmod:Format>` tag) and can be placed anywhere, including inside HTML attributes. Choose `<xmod:Format>` when you need culture control, regex, or cloaking.
:::

#### Quick Reference

| Scenario | Approach |
|----------|----------|
| Displaying a field value in HTML | Plain token: `[[FieldName]]` |
| Combining fields in HTML | Plain tokens side by side: `[[First]] [[Last]]` |
| Combining fields in a tag property | Expression: `[[=First & ' ' & Last]]` |
| Formatting dates or numbers | Expression: `[[=Format(Price, 'C2')]]` |
| Math and calculations | Expression: `[[=Round(Price * 1.08, 2)]]` |
| Conditional text or CSS classes | Expression: `[[=If(Qty > 0, 'In Stock', 'Out')]]` |
| Fallback for missing values | Expression: `[[=Coalesce(Phone, 'N/A')]]` |
| Culture-specific formatting | [`<xmod:Format>`](../template-controls/format.md) with `OutputCulture` |
| Regex text substitutions | [`<xmod:Format>`](../template-controls/format.md) with `Type="RegEx"` |
| Email cloaking | [`<xmod:Format>`](../template-controls/format.md) with `Type="Cloak"` |

## Syntax

Expression tokens use the `[[=...]]` format. The `=` prefix distinguishes them from standard field tokens. An easy way to remember the syntax is to think of it like entering a formula into your spreadsheet. You normally type `=` and your function. Here, you simply add that `=` to your token to use a function:

```
[[=expression]]
```

The expression inside can contain field names, literals, operators, and function calls. Whitespace is ignored.

## Quick Examples

```html
<!-- Price with tax -->
<span>[[=Format(Round(Price * 1.0825, 2), 'C2')]]</span>

<!-- Uppercase product name -->
<h3>[[=Upper(ProductName)]]</h3>

<!-- Stock status badge -->
<span class="badge [[=If(QtyInStock > 0, 'badge-success', 'badge-danger')]]">
  [[=If(QtyInStock > 10, 'In Stock', If(QtyInStock > 0, 'Low Stock', 'Out of Stock'))]]
</span>

<!-- User initials avatar -->
<div class="avatar">[[=Concat(Upper(Left(FirstName, 1)), Upper(Left(LastName, 1)))]]</div>

<!-- Discount percentage -->
<span>[[=Round((1 - SalePrice / RegularPrice) * 100, 0)]]% off</span>

<!-- Fallback chain for display name -->
<span>[[=Coalesce(Nickname, FirstName, Email)]]</span>

<!-- Personalized greeting using system token -->
<p>[[=Concat('Welcome, ', ${User:DisplayName}, '!')]]</p>
```

## Field References

Inside an expression, field names are written **without** the double-bracket syntax. The expression evaluator looks up field values from the current data row automatically.

| Syntax | Description | Example |
|--------|-------------|---------|
| `FieldName` | Bare field name | `[[=Upper(ProductName)]]` |
| `$FieldName` | Dollar-prefixed, when the name matches a function | `[[=$Round + 1]]` |
| `${Field Name}` | Braced, for names with spaces | `[[=${First Name}]]` |

### When to Use `$` Prefix

In rare circumstances, your field name may match the name of a built-in function like a column called `Round` or `Max`. In those cases, XMod Pro would interpret it as a function call. 

To work around this, you can change your field name in SQL using the `AS` clause. If that's not possible or desirable, use the `$` prefix to tell XMod Pro you mean the field, not the function:

```
[[=Round($Round, 2)]]
```

Here, `Round(...)` is the function call and `$Round` is the field named "Round".

### Fields with Spaces

Wrap field names that contain spaces in `${...}`:

```
[[=Upper(${First Name})]]
```

### Missing Fields

If a field doesn't exist in the current data row, it returns an empty string — the same behavior as standard `[[NonExistentField]]` tokens.

## System Tokens in Expressions

You can use DNN system tokens inside expressions using the `${Type:Key}` syntax:

```
[[=${User:DisplayName}]]
[[=${Portal:Name}]]
[[=${Page:Title}]]
```

These tokens pull values from the DNN context — the logged-in user, the current portal, the page, etc. They work anywhere inside an expression, including as function arguments and in conditionals:

```html
<!-- Personalized greeting -->
<p>[[=If(${User:DisplayName} = '', 'Welcome, Guest!', Concat('Hello, ', ${User:DisplayName}, '!'))]]</p>

<!-- Conditional content for logged-in users -->
<span>[[=If(${User:ID} > 0, 'Member', 'Visitor')]]</span>
```

### Available System Tokens

| Token | Description | Example |
|-------|-------------|---------|
| `${User:ID}` | User ID (0 for anonymous) | `1` |
| `${User:DisplayName}` | Display name | `Kelly Ford` |
| `${User:Email}` | Email address | `kelly@example.com` |
| `${User:Username}` | Login username | `host` |
| `${User:FirstName}` | First name | `Kelly` |
| `${User:LastName}` | Last name | `Ford` |
| `${Portal:ID}` | Portal ID | `0` |
| `${Portal:Name}` | Portal name | `My Website` |
| `${Portal:HomeDirectory}` | Portal home directory path | `Portals/0/` |
| `${Module:ModuleID}` | Current module ID | `386` |
| `${Module:TabID}` | Current page/tab ID | `42` |
| `${Module:PortalID}` | Module's portal ID | `0` |
| `${Page:ID}` | Current page ID | `42` |
| `${Page:Name}` | Page name | `Products` |
| `${Page:Title}` | Page title | `Our Products` |
| `${Page:FullUrl}` | Full page URL | `https://example.com/products` |

> **Note:** The `${...}` syntax is used for system tokens and for field names with spaces. XMod Pro tells them apart by the colon — `${User:DisplayName}` is a system token, while `${First Name}` is a field reference.

## Operators

### Arithmetic Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `+` | Addition (or string concatenation) | `Price + Tax` |
| `-` | Subtraction | `Total - Discount` |
| `*` | Multiplication | `Price * Quantity` |
| `/` | Division | `Total / Count` |
| `%` | Modulo (remainder) | `Index % 2` |

### String Operator

| Operator | Description | Example |
|----------|-------------|---------|
| `&` | String concatenation | `FirstName & ' ' & LastName` |
| `+` | String concatenation | `FirstName + ' ' + LastName` |

The `&` operator always concatenates as strings. The `+` operator adds numbers but concatenates if both values are non-numeric strings.

### Comparison Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `=` | Equal | `Status = 'Active'` |
| `!=` | Not equal | `Category != 'Hidden'` |
| `<>` | Not equal (VB style) | `Category <> 'Hidden'` |
| `>` | Greater than | `Price > 100` |
| `<` | Less than | `Qty < 5` |
| `>=` | Greater than or equal | `Score >= 90` |
| `<=` | Less than or equal | `Age <= 18` |

String comparisons are **case-insensitive**: `'Hello' = 'hello'` is `True`.

### Logical Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `And` | Both must be true | `Price > 10 And Qty > 0` |
| `Or` | Either must be true | `Role = 'Admin' Or Role = 'Editor'` |
| `Not` | Inverts a condition | `Not IsHidden` |

## Operator Precedence

When an expression has more than one operator, XMod Pro needs to decide which operation to perform first. This is called **operator precedence** — it works the same way as the order of operations you learned in math class (multiplication before addition, etc.).

For example, consider this expression:

```
[[=Price + Tax * Quantity]]
```

You might expect this to add Price and Tax first, then multiply. But because multiplication has higher precedence than addition, XMod Pro actually calculates `Tax * Quantity` first, then adds `Price`. If Tax is 5, Quantity is 3, and Price is 100, you'd get `100 + (5 * 3) = 115`, not `(100 + 5) * 3 = 315`.

**Use parentheses** to control the order explicitly:

```
[[=(Price + Tax) * Quantity]]
```

When in doubt, add parentheses — they make your intent clear and prevent surprises.

### Precedence Table

From highest (evaluated first) to lowest (evaluated last):

| Precedence | Operators | Description |
|------------|-----------|-------------|
| 1 (highest) | `-` (negative sign) | Negation |
| 2 | `*` `/` `%` | Multiplication, division, modulo |
| 3 | `+` `-` `&` | Addition, subtraction, concatenation |
| 4 | `=` `!=` `<>` `>` `<` `>=` `<=` | Comparisons |
| 5 | `Not` | Logical NOT |
| 6 (lowest) | `And` `Or` | Logical AND / OR |

## Functions Reference

### String Functions

| Function | Syntax | Description |
|----------|--------|-------------|
| `Upper` | `Upper(value)` | Converts to UPPERCASE |
| `Lower` | `Lower(value)` | Converts to lowercase |
| `Trim` | `Trim(value)` | Removes leading/trailing whitespace |
| `Left` | `Left(value, n)` | Returns the first *n* characters |
| `Right` | `Right(value, n)` | Returns the last *n* characters |
| `Len` | `Len(value)` | Returns the string length |
| `Replace` | `Replace(value, old, new)` | Replaces all occurrences of *old* with *new* |
| `Truncate` | `Truncate(value, n, suffix)` | Truncates to *n* characters and appends *suffix* |
| `UrlEncode` | `UrlEncode(value)` | URL-encodes for use in query strings |
| `HtmlEncode` | `HtmlEncode(value)` | HTML-encodes special characters |
| `Coalesce` | `Coalesce(v1, v2, ...)` | Returns the first non-null, non-empty value |
| `Concat` | `Concat(v1, v2, ...)` | Joins all values into one string |
| `Format` | See below | .NET format strings |

#### Format Function

`Format` has two modes:

**Value formatting** — format a single value with a .NET format specifier:

```
[[=Format(Price, 'C2')]]       → $19.99
[[=Format(Percent, 'P0')]]     → 85%
[[=Format(EventDate, 'MMM d, yyyy')]]  → Jan 15, 2026
```

Uses .NET format strings. Common format specifiers:
- `C2` — Currency with 2 decimal places
- `N0` — Number with commas, no decimals
- `P1` — Percentage with 1 decimal
- `d` — Short date
- `MMM d, yyyy` — Custom date format

**Positional placeholders** — build a string with `{0}`, `{1}`, etc.:

```
[[=Format('Hello {0}!', Name)]]           → Hello Kelly!
[[=Format('{0} of {1}', City, State)]]    → Portland of Oregon
[[=Format('{0}: {1} units', Product, Qty)]]  → Widget: 42 units
```

Uses `{0}`, `{1}`, etc. as placeholders for the remaining arguments. This is useful when you need to combine fields with specific formatting in a single token.

> **How does XMod Pro choose?** If the first argument contains `{0}`, it uses positional placeholders. Otherwise, it uses value formatting. This means `Format(Price, 'C2')` works as expected (the format specifier `C2` doesn't contain `{0}`), and `Format('Total: {0}', Price)` also works as expected.

### Math Functions

| Function | Syntax | Description |
|----------|--------|-------------|
| `Round` | `Round(value, decimals)` | Rounds to *decimals* places |
| `Floor` | `Floor(value)` | Rounds down to nearest integer |
| `Ceiling` | `Ceiling(value)` | Rounds up to nearest integer |
| `Abs` | `Abs(value)` | Returns absolute (positive) value |
| `Min` | `Min(a, b)` | Returns the smaller value |
| `Max` | `Max(a, b)` | Returns the larger value |

### Conditional Function

| Function | Syntax | Description |
|----------|--------|-------------|
| `If` | `If(condition, trueVal, falseVal)` | Returns *trueVal* when condition is true, *falseVal* otherwise |
| `If` | `If(condition, trueVal)` | Returns *trueVal* when true, empty string when false |

Nest `If` calls for multiple conditions:

```
[[=If(Score >= 90, 'A', If(Score >= 80, 'B', If(Score >= 70, 'C', 'F')))]]
```

### System Functions

| Function | Syntax | Description |
|----------|--------|-------------|
| `Now` | `Now()` | Current date and time |
| `Today` | `Today()` | Current date (midnight) |

```
[[=Format(Now(), 'MMMM d, yyyy')]]  → January 15, 2026
```

### File Functions <Badge type="info" text="v5.0" />

| Function | Syntax | Description |
|----------|--------|-------------|
| `FileLink` | `FileLink(fileId)` | Returns a working URL for a DNN file, given its File ID |
| `FileLink` | `FileLink(fileId, true)` | Same, but forces the browser to download the file instead of displaying it |

#### FileLink Function

`FileLink` turns a DNN **File ID** — the number stored in your table when a user uploads through a [FileUpload](../form-controls/file-upload.md) control — into a URL you can drop straight into an `<img>`, `<a>`, or `<iframe>`:

```html
<!-- Display an uploaded image -->
<img src="[[=FileLink(ImageFileId)]]" alt="[[Caption]]" />

<!-- Link to a document -->
<a href="[[=FileLink(BrochureFileId)]]">View Brochure</a>
```

**Why not just build the path yourself?** For files in a standard folder you *could* — `FileLink` returns the same direct URL you'd write by hand. The reason it exists is **secure and database folders**. DNN stores those files on disk with a `.resources` extension so they can't be reached directly, and serves them through `LinkClick.aspx` with an encrypted, permission-checked ticket instead. `FileLink` detects the folder type and returns the correct URL either way, so the *same* markup works no matter where the file lives — and secure files stay secure.

**Forcing a download** — pass `true` as the second argument to make the browser download the file (with a Save dialog) rather than trying to display it inline. Use this for PDFs, spreadsheets, and other documents; leave it off for images and anything you want shown on the page:

```html
<!-- Download instead of opening in the browser -->
<a href="[[=FileLink(InvoiceFileId, true)]]">Download Invoice (PDF)</a>
```

**Null-safe by design** — if the File ID is empty, not a number, zero or negative, or points to a file that no longer exists, `FileLink` returns an empty string rather than a broken link. This makes it safe to use on optional (nullable) columns. Combine it with `If` to skip the markup entirely when there's no file:

```html
<!-- Only render the link when there's actually a file -->
[[=If(InvoiceFileId, Concat('<a href="', FileLink(InvoiceFileId, true), '">Download Invoice</a>'), '')]]
```

::: tip Where does the File ID come from?
When a visitor uploads a file with the [`<FileUpload>`](../form-controls/file-upload.md) form control, XMP saves the DNN File ID into your table column. Store that column and pass it to `FileLink` in your view or feed to link back to the file later.
:::

## String Literals

String literals use **single quotes only**:

```
[[=If(Status = 'Active', 'Yes', 'No')]]
```

Double quotes are not supported inside expressions because XMP templates live inside HTML attributes that already use double quotes. Single quotes avoid this conflict.

## Working with Null Values

When a field is null or `DBNull`:

- **String operations** treat it as an empty string `""`
- **Arithmetic operations** treat it as `0`
- **Conditional checks** treat it as false

Use `Coalesce` to provide fallback values:

```
[[=Coalesce(Phone, 'Not provided')]]
```

Use `If` to check before using a value:

```
[[=If(ImageUrl, Concat('<img src="', ImageUrl, '">'), '')]]
```

### What Counts as True or False?

| Value | True or False? | Notes |
|-------|---------|-------|
| `True` | True | A boolean true is always true |
| `False` | False | A boolean false is always false |
| "True" | True | A non-empty string that is not "False" or "0" |
| "False" | False | Special handling for the text "false" (case-insensitive) |
| Non-zero number (1, 42, -3) | True | Includes negative numbers |
| Non-empty string ("hello") | True | Any text but `"0"` or `"false"` |
| Zero (0) | False | Numeric value 0 is false |
| "0" | False | Special handling for string representation of zero |
| Empty string ("") | False | Same as a field with no value |
| Null / DBNull | False | Missing or undefined fields |

## Common Patterns

### Price Calculations

```html
<!-- Price with tax -->
<td>[[=Format(Round(Price * 1.0825, 2), 'C2')]]</td>

<!-- Discount badge -->
<span class="discount">[[=Round((1 - SalePrice / RegularPrice) * 100, 0)]]% off</span>

<!-- Line total -->
<td>[[=Format(UnitPrice * Quantity, 'C2')]]</td>
```

### Conditional Styling

```html
<!-- CSS class based on data -->
<tr class="[[=If(IsActive, 'active', 'inactive')]]">

<!-- Show/hide elements -->
<span class="badge [[=If(QtyInStock > 10, 'bg-success', If(QtyInStock > 0, 'bg-warning', 'bg-danger'))]]">
  [[=If(QtyInStock > 10, 'In Stock', If(QtyInStock > 0, 'Low Stock', 'Out of Stock'))]]
</span>
```

### String Formatting

```html
<!-- Full name from parts -->
<span>[[=Concat(FirstName, ' ', LastName)]]</span>

<!-- Initials -->
<div class="avatar">[[=Concat(Upper(Left(FirstName, 1)), Upper(Left(LastName, 1)))]]</div>

<!-- Truncated description -->
<p>[[=Truncate(Description, 150, '...')]]</p>

<!-- Name formatting: "Smith, John" -->
<td>[[=Concat(LastName, ', ', FirstName)]]</td>
```

### Fallback Values

```html
<!-- First non-empty value -->
<span>[[=Coalesce(Nickname, FirstName, 'Anonymous')]]</span>

<!-- Default image -->
<img src="[[=Coalesce(PhotoUrl, '/images/no-photo.png')]]" />
```

### File Links

```html
<!-- Show an uploaded image (works for secure folders too) -->
<img src="[[=FileLink(PhotoFileId)]]" alt="[[Title]]" />

<!-- Download link for an uploaded document -->
<a href="[[=FileLink(ContractFileId, true)]]">Download Contract</a>

<!-- Only render the link when a file is present -->
[[=If(ResumeFileId, Concat('<a href="', FileLink(ResumeFileId, true), '">Resume</a>'), 'No resume on file')]]
```

## Do's and Don'ts

### Do

```html
<!-- Use single quotes for strings -->
[[=If(Status = 'Active', 'Yes', 'No')]]

<!-- Use & for explicit string concatenation -->
[[=FirstName & ' ' & LastName]]

<!-- Use Coalesce for null-safe defaults -->
[[=Coalesce(Email, 'none')]]

<!-- Nest functions freely -->
[[=Upper(Trim(Left(Name, 20)))]]
```

### Don't

```html
<!-- DON'T use double quotes (won't work) -->
[[=If(Status = "Active", "Yes", "No")]]

<!-- DON'T nest expression tokens -->
[[=Upper([[=Lower(Name)]])]]

<!-- DON'T use in data commands or data sources -->
<xmod:SqlCommand CommandText="SELECT [[=Upper(Name)]]" />
<ListDataSource CommandText="SELECT [[=Upper(Name)]] FROM ..." />

<!-- DON'T use assignment -->
[[=Price = 19.99]]
```

## Limitations

1. **No nesting of `[[=...]]` tokens.** Use function nesting instead: `[[=Upper(Trim(Name))]]`
2. **Not available in data commands.** Expression tokens are not processed inside `CommandText` attributes on data commands (`<xmod:SqlCommand>`) or data sources (`<ListDataSource>`, `<DetailDataSource>`, `<xmod:SqlDataSource>`, etc.). Use SQL functions in your queries instead.
3. **No assignment.** Expression tokens are read-only — `=` is the equality operator, not assignment.
4. **Single quotes only.** Double quotes are not supported inside expressions.
5. **No access to other server controls.** Expression tokens evaluate against the current data row only.

## Expression Tokens vs. Function Tokens

XMod Pro also has [Function Tokens](functions.md) (like `[[Join(...)]]`) which have been available since earlier versions. Expression tokens are more powerful and flexible — they support math, conditionals, and a much larger set of functions. However, function tokens like `[[Join(...)]]` and `[[Localize:keyName]]` still work. `[[Join()]]` may be deprecated in the future as we think `[[=Format()]]`, `[[=Concat()]]` and `[[=Coalesce()]]` provide much more flexibility and readability. We encourage you to try them instead of Join. `[[Localize]]` is not deprecated.
