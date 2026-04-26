---
id: form-text
title: Text
category: Input Controls
context: form
summary: The Text tag renders an un-decorated value from a SelectCommand directly into your form's HTML.
keywords:
  - text
  - form
since: '1.0'
---
# `<Text>`

The Text tag renders the value of a column from a `<SelectCommand>` as plain, unwrapped text — there's no surrounding `<span>` or other element. Use it to display read-only data inside your form's HTML or to inject a value into JavaScript.

::: info One-way binding
The Text tag is **one-way bound**. It receives data from a `<SelectCommand>` but does not participate in `<SubmitCommand>` — its value is never saved back to the database.
:::

## Example

Display a value inline with your HTML:

```html
<strong>Last Login Date: <Text DataField="LastLogin" /></strong>
```

Inject a value into JavaScript:

```html {2}
<AddForm>
  <a href="#" onclick="alert('<Text DataField='LastLogin'/>')">Click for Last Login Date</a>
  <table>
    <tr>
      <td>
        <Label For="txtFirstName" Text="First Name" />
        <Textbox Id="txtFirstName" DataField="FirstName" DataType="string" />
      </td>
    </tr>
    ...
    <tr>
      <td colspan="2">
        <AddButton Text="Add"/>&nbsp;<CancelButton Text="Cancel"/>
      </td>
    </tr>
  </table>
</AddForm>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [DataField](#prop-datafield) | string | | Name of the column from the form's `<SelectCommand>` whose value should be rendered |
| [Nullable](#prop-nullable) | `True` `False` | `False` | When the bound value is DBNull, render as an empty string |

::: info No styling properties
Because the Text tag renders only the value — with no surrounding HTML element — properties like `CssClass`, `Style`, `Width`, `Height`, and the deprecated ASP.NET style properties have no effect. To style the text, wrap the tag in your own HTML element.
:::

## Property Details

*   <span id="prop-datafield">**DataField**</span>: Name of the column from the form's `<SelectCommand>` whose value should be rendered. Unlike most form controls, the Text tag is one-way bound and does not need a corresponding parameter in `<SubmitCommand>` — it never sends data back to the database.

*   <span id="prop-nullable">**Nullable**</span>: When the bound value from the database is DBNull, the rendered output will be an empty string rather than the literal text "DBNull".
