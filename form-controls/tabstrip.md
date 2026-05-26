---
id: form-tabstrip
title: Tabstrip
category: Layout
context: form
summary: Renders a tabbed UI with each `<Tab>` showing different content. Useful for breaking a long form into manageable sections.
keywords:
  - tabstrip
  - form
since: '1.0'
related:
  - form-panel
---

# `<Tabstrip>`

`<Tabstrip>` renders a row of tabs along the top of a region, each with its own panel of content below. Clicking a tab swaps the visible panel. Add `<Tab>` child tags — one per tab — and place the form's content inside each.

The control is helpful for breaking long forms into shorter, focused sections (e.g. *Contact Info*, *Notes*, *Preferences*). Tab switching is handled in JavaScript with no postback.

::: warning JavaScript required
`<Tabstrip>` relies on inline JavaScript for tab switching. If JavaScript is disabled in the browser, the user only sees the first tab's content.
:::

## Example

```html {3-4,7,28}
<AddForm>
  ...
  <Tabstrip Font-Bold="True" Font-Names="Arial,Helvetica,sans-serif"
            HoverBackColor="Black" HoverForeColor="White">
    <Tab Text="Customer Info">
      <table>
        <tr>
          <td><Label For="txtFirstName" Text="First Name" /></td>
          <td><TextBox Id="txtFirstName" DataField="FirstName" DataType="String" /></td>
        </tr>
        <tr>
          <td><Label For="txtLastName" Text="Last Name" /></td>
          <td><TextBox Id="txtLastName" DataField="LastName" DataType="String" /></td>
        </tr>
      </table>
    </Tab>
    <Tab Text="Notes">
      <table>
        <tr>
          <td colspan="2">
            <TextArea Id="taNotes" DataField="Notes" DataType="String" />
          </td>
        </tr>
      </table>
    </Tab>
  </Tabstrip>
  <AddButton Text="Add" /> <CancelButton Text="Cancel" />
</AddForm>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| ShowPanelBorders | `True` `False` | `True` | When `True`, draws borders around each tab's content panel |
| Width | [size](../unit-types.md) | `100%` | Width of the tabstrip |
| Height | [size](../unit-types.md) | | Height of the tabstrip |
| Align | `left` `center` `right` | `left` | Horizontal alignment of the tabs row |
| Visible | `True` `False` | `True` | Shows or hides the tabstrip |

<details>
<summary>Deprecated Properties (styling)</summary>

The tabstrip exposes several legacy color and font properties that produce inline styles. Modern stylesheets should override the rendered tabstrip's CSS instead.

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| BackColor | color name \| #dddddd | `#CCCCCC` | Tab background color |
| BorderColor | color name \| #dddddd | `#000000` | Tab border color |
| ForeColor | color name \| #dddddd | `#000000` | Tab text color |
| SelectedBackColor | color name \| #dddddd | `#FFFFFF` | Background of the active tab |
| SelectedForeColor | color name \| #dddddd | `#000000` | Text color of the active tab |
| HoverBackColor | color name \| #dddddd | `#000000` | Background when hovering a tab |
| HoverForeColor | color name \| #dddddd | `#FFFFFF` | Text color when hovering a tab |
| Font-Bold | `True` `False` | `False` | Bold tab labels |
| Font-Italic | `True` `False` | | Italic tab labels |
| Font-Names | string | Verdana, Tahoma, Arial, Helvetica, sans-serif | Font family for tab labels |
| Font-Overline | `True` `False` | | Overline text decoration |
| Font-Size | size | `11pt` | Font size of the tab labels |
| Font-Strikeout | `True` `False` | | Strikethrough |
| Font-Underline | `True` `False` | | Underline |

</details>

## Child Tags

| Tag | Required | Description |
|-----|----------|-------------|
| [`<Tab>`](#child-tab) | required | One per tab. Place each tab's HTML and form controls between `<Tab>` and `</Tab>` |

### <span id="child-tab">`<Tab>`</span>

Each `<Tab>` declares one tab in the tabstrip. The first tab is selected by default.

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| Text <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | The label shown on the tab |

The content between `<Tab>` and `</Tab>` is what appears in the tab's panel — any HTML, form controls, or nested layout tags are allowed.

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required attribute
