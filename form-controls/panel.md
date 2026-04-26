---
id: form-panel
title: Panel
category: Layout
context: form
summary: A container tag for grouping form content. Use it as a layout wrapper or to conditionally show/hide content based on the user's roles or a runtime expression.
keywords:
  - panel
  - form
since: '1.0'
related:
  - tabstrip
  - label
---

# `<Panel>`

`<Panel>` is a container tag — like an HTML `<div>` — that groups related form content. Beyond layout, its main use is conditional rendering: show some controls only to administrators, or only when a particular field has a particular value.

Use `ShowRoles` to gate the panel by DNN security role, `ShowIf` to gate it by a runtime expression, or both — the panel renders only when both conditions pass.

::: tip Testing role-gated panels
When testing `ShowRoles`, log out of the host/superuser account first. Host accounts see all panels regardless of `ShowRoles`, so a panel can look correct in your testing and still be hidden from your real users.
:::

## Example — Show by role

```html {3-5}
<AddForm>
  ...
  <Panel ShowRoles="Editor">
    <Checkbox Id="chkApproved" DataField="Approved" DataType="Boolean" Text="Approved?" />
  </Panel>
  <table>
    <tr>
      <td>
        <Label For="txtFirstName" Text="First Name" />
        <TextBox Id="txtFirstName" DataField="FirstName" DataType="String" />
      </td>
    </tr>
    <tr>
      <td>
        <Label For="txtLastName" Text="Last Name" />
        <TextBox Id="txtLastName" DataField="LastName" DataType="String" />
      </td>
    </tr>
    <tr>
      <td colspan="2"><AddButton Text="Add" /> <CancelButton Text="Cancel" /></td>
    </tr>
  </table>
</AddForm>
```

## Example — Show by URL parameter

```html {3-5}
<AddForm>
  ...
  <Panel ShowIf='[[Join("{0}=Kelly",[[Url:name]])]]'>
    <p>Welcome, Kelly!</p>
  </Panel>

  <AddButton Text="Add" /> <CancelButton Text="Cancel" />
</AddForm>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| ID | string | | Unique identifier for the panel |
| [ShowRoles](#prop-showroles) | comma-list | | Comma-delimited list of DNN role names. Panel renders only if the current user is in one of these roles |
| [ShowIf](#prop-showif) | expression | | Expression evaluated at render time. Panel renders only when the expression is true _(since v4.7)_ |
| [DefaultButton](#prop-defaultbutton) | control id | | ID of an `<AddButton>`, `<UpdateButton>`, or `<CancelButton>` "clicked" when the user presses Enter inside the panel |
| HorizontalAlign | `NotSet` `Left` `Center` `Right` `Justify` | `NotSet` | Horizontal alignment of content inside the panel |
| ScrollBars | `None` `Horizontal` `Vertical` `Both` `Auto` | `None` | Show scrollbars when the panel's content overflows |
| Wrap | `True` `False` | `True` | When `False`, content does not wrap |
| BackImageUrl | URL | | Background image for the panel |
| AccessKey | string | | Keyboard shortcut character |
| CssClass | string | | CSS class name(s) for styling |
| Style | string | | Inline CSS |
| Height | [size](../unit-types.md) | | Height of the panel |
| Width | [size](../unit-types.md) | | Width of the panel |
| Visible | `True` `False` | `True` | Shows or hides the panel |

<details>
<summary>Deprecated Properties</summary>

These properties use ASP.NET inline styling and are no longer recommended for modern web development. Use the `CssClass` property to apply CSS classes or the `Style` property for inline CSS instead.

| Property | Values | Description |
|----------|--------|-------------|
| BackColor | color name \| #dddddd | Background color |
| BorderColor | color name \| #dddddd | Border color |
| BorderStyle | `NotSet` `None` `Dotted` `Dashed` `Solid` `Double` `Groove` `Ridge` `Inset` `Outset` | Border style |
| BorderWidth | [size](../unit-types.md) | Border width |
| Font-Bold | `True` `False` | Bold text |
| Font-Italic | `True` `False` | Italic text |
| Font-Names | string | Font family name |
| Font-Overline | `True` `False` | Overline text decoration |
| Font-Size | `XX-Small` `X-Small` `Small` `Medium` `Large` `X-Large` `XX-Large` or size | Font size |
| Font-Strikeout | `True` `False` | Strikethrough text decoration |
| Font-Underline | `True` `False` | Underline text decoration |
| ForeColor | color name \| #dddddd | Text color |

</details>

## Property Details

*   <span id="prop-showroles">**ShowRoles**</span>: A comma-delimited list of DNN role names. The panel renders only when the current user belongs to at least one of the listed roles. The host/superuser account sees the panel regardless — log in as a regular user to test the gate.

*   <span id="prop-showif">**ShowIf**</span>: A simple equality expression evaluated each time the panel renders. When the result is true, the panel renders; when false, it doesn't. Comparisons are text-only and case-insensitive. Use `=` for equality and `<>` for inequality.

    `ShowIf` and `ShowRoles` combine with AND semantics — when both are set, both must pass for the panel to render.

    ```html
    <Panel ShowIf="[[Country]] = US">
      <Label For="txtState" Text="State" />
      <TextBox Id="txtState" DataField="State" DataType="String" />
    </Panel>
    ```

*   <span id="prop-defaultbutton">**DefaultButton**</span>: The `Id` of a button that should be clicked when the user presses Enter while focused inside the panel. Push-buttons (`<AddButton>`, `<UpdateButton>`, `<CancelButton>`) work reliably across browsers; link and image buttons may not.
