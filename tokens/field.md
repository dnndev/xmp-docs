---
id: tokens-field
title: Field Tokens
category: Field Tokens
context: all
summary: Field tokens (`[[fieldName]]`) insert values from the current row of a view's data source or the values posted to a form's `<SelectCommand>`. They are the most common type of token in XMP.
keywords:
  - field
  - tokens
since: '1.0'
related:
  - data
  - functions
  - expressions
---

# Field Tokens

A field token is the simplest, most common token: `[[fieldName]]` is replaced at render time with the value of the column named `fieldName` from the current row.

The same syntax behaves slightly differently in views and forms — in a view, it pulls from the current row of the `<ListDataSource>` or `<DetailDataSource>`. In a form, it pulls from the values returned by `<SelectCommand>` (when the form loads) or the values the user typed (in success templates, action attributes, and email bodies after submit).

## Syntax

```
[[fieldName]]
```

`fieldName` must match the data column or form parameter name **exactly** — case-sensitive.

## Where field tokens come from

| Context | Field token reads from |
|---------|------------------------|
| `<xmod:Template>` `<ItemTemplate>` / `<AlternatingItemTemplate>` | The current row of the `<ListDataSource>` |
| `<xmod:Template>` `<DetailTemplate>` | The single row returned by the `<DetailDataSource>` |
| `<xmod:Template>` `<HeaderTemplate>` / `<FooterTemplate>` / `<NoItemsTemplate>` | _Not available_ — there's no current row in these areas |
| Form control attributes (`Text`, `Default`, `Visible`, etc.) | The values returned by `<SelectCommand>` when the form loads |
| Form action attributes (`Redirect`, email body, etc.) | The values the user submitted, evaluated after `<SubmitCommand>` runs |
| `<AddSuccessTemplate>` / `<EditSuccessTemplate>` | The submitted form values |

## Example — view

```html {6-7}
<xmod:Template>
  <ListDataSource CommandText="SELECT FirstName, LastName, City, State, Zip FROM Users" />
  <HeaderTemplate><h1>Users</h1></HeaderTemplate>
  <ItemTemplate>
    <p>
      <strong>[[FirstName]] [[LastName]]</strong><br />
      [[City]], [[State]] [[Zip]]
    </p>
  </ItemTemplate>
</xmod:Template>
```

## Example — form

This form prefills a `<SelectCommand>`, then uses field tokens to drive a `<Validate Type="Range">` based on inventory:

```html {8-10}
<AddForm>
  <SelectCommand CommandText="SELECT StockOnHand FROM Inventory WHERE ProductId = @ProductId">
    <Parameter Name="ProductId" Value="[[Url:ProductId]]" />
  </SelectCommand>

  <Label For="txtQuantity" Text="Quantity to order:" />
  <TextBox Id="txtQuantity" DataField="Quantity" DataType="Int32" />
  <Validate Type="Range" Target="txtQuantity"
      MinimumValue="1" MaximumValue='[[StockOnHand]]'
      Message='[[Join("You must enter a value between 1 and {0}", [[StockOnHand]])]]' />
</AddForm>
```

::: info Single quotes inside XMP attributes
Note that the `MaximumValue` and `Message` attributes use single quotes — that's required when an attribute value contains a `[[token]]`. See the rules in [Tokens Overview](README.md#standard-token-rules).
:::

## Properties that don't accept field tokens

A handful of form-control properties — color and some font properties — perform internal conversions before XMP binds field tokens. The token doesn't get evaluated, so the conversion fails. Use `CssClass` or `Style` instead, often with [`Join()`](functions.md):

```html
<!-- Throws an error -->
<TextBox Id="MyText" ForeColor='[[FColor]]' BackColor='[[BColor]]' />

<!-- Same result via inline style -->
<TextBox Id="MyText"
    Style='[[Join("color:{0};background-color:{1}", [[FColor]], [[BColor]])]]' />
```
