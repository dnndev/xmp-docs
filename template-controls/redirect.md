---
id: template-redirect
title: 'xmod:Redirect'
category: Action Links
context: template
summary: Renders a button, image, or link that — when clicked — sends data to another URL via HTTP GET or POST. Useful for sending record fields to external services.
keywords:
  - redirect
  - button
  - post
  - template
since: '1.0'
related:
  - navigate-url
  - command-button
---

# `<xmod:Redirect>`

`<xmod:Redirect>` renders a clickable button (push-button, link, or image) that, on click, posts or gets data to the URL in `Target`. Use `<Field>` child tags to specify which name/value pairs to send.

It's useful for handing record-specific data off to another page or third-party service — e.g. sending a product ID to a checkout URL.

## Example

```html {3-5}
<xmod:Template Id="Products">
  <ListDataSource CommandText="SELECT ProductId, ProductName FROM Products ORDER BY ProductName" />
  <ItemTemplate>
    [[ProductName]]
    <xmod:Redirect Text="Purchase" Target="https://shop.example.com/buy.aspx">
      <Field Name="pid" Value="[[ProductId]]" />
    </xmod:Redirect>
  </ItemTemplate>
</xmod:Template>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [Target](#prop-target) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | URL | | The destination URL |
| [Display](#prop-display) | `Button` `LinkButton` `ImageButton` | `LinkButton` | How the control is rendered |
| [Method](#prop-method) | `Get` `Post` | `Post` | HTTP method used for the request |
| [Text](#prop-text) | string | | Caption for `Button` / `LinkButton`. Alt text for `ImageButton` |
| [ImageUrl](#prop-imageurl) | URL | | Used only when `Display="ImageButton"` |
| [ImageAlign](#prop-imagealign) | `AbsBottom` `AbsMiddle` `Baseline` `Bottom` `Left` `Middle` `Right` `TextTop` `Top` `NotSet` | `NotSet` | Image alignment relative to surrounding content. Used only when `Display="ImageButton"` |
| OnClientClick | JavaScript | | JavaScript to run on click. Returning `false` cancels the redirect |
| ToolTip | string | | Hover tooltip |
| Visible | `True` `False` | `True` | Shows or hides the control |
| Width | [size](../unit-types.md) | | Width of the control |
| Height | [size](../unit-types.md) | | Height of the control |
| CssClass | string | | CSS class name(s) |
| Style | string | | Inline CSS |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Child Tags

| Tag | Required | Description |
|-----|----------|-------------|
| [`<Field>`](#child-field) | optional | One name/value pair to include in the request. Add as many as needed |

### <span id="child-field">`<Field>`</span>

Adds a single name/value pair to the outgoing request — query-string parameter for `Method="Get"`, form post body for `Method="Post"`.

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| Name <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Field name |
| Value | string \| token | | Field value. Field tokens are evaluated against the current row |

## Property Details

*   <span id="prop-target">**Target**</span>: The destination URL. Absolute (`https://example.com/page`), site-relative (`~/page.aspx`), or root-relative (`/page.aspx`).

*   <span id="prop-display">**Display**</span>: How the button is rendered.

    | Value | Renders as |
    |-------|------------|
    | `Button` | A push button (`<input type="submit">`) |
    | `LinkButton` _(default)_ | An anchor styled as a button (`<a>`) |
    | `ImageButton` | A clickable image (`<input type="image">`) |

*   <span id="prop-method">**Method**</span>: HTTP method.

    | Value | Behavior |
    |-------|----------|
    | `Get` | Fields are appended to `Target` as query-string parameters |
    | `Post` _(default)_ | Fields are sent as form-encoded POST body. The browser navigates to a small redirect helper that issues the POST |

*   <span id="prop-text">**Text**</span>: For `Button` and `LinkButton`, the caption. For `ImageButton`, the alt text on the image.

*   <span id="prop-imageurl">**ImageUrl**</span>: Path to the image file. Only used when `Display="ImageButton"`. Tilde-prefixed paths are supported.

*   <span id="prop-imagealign">**ImageAlign**</span>: How the image aligns relative to surrounding text. Only used when `Display="ImageButton"`.
