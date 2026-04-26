---
id: form-jquery-ready
title: jQueryReady
category: Scripting
context: form
summary: Registers a jQuery `$(document).ready(...)` block at the bottom of the page, with an automatic closure so `$` is available even if jQuery isn't aliased.
keywords:
  - jquery
  - ready
  - form
since: '1.0'
related:
  - script-block
---

# `<jQueryReady>`

`<jQueryReady>` is a shorthand for the jQuery `$(document).ready()` boilerplate. Place your script between the opening and closing tags — XMP wraps it in a closure (so `$` is the jQuery alias even if another library has claimed `$`) and registers it as a startup script near the bottom of the page.

::: warning Requires jQuery
The hosting DNN page must include jQuery for this tag to work. DNN's default skins include jQuery, but a custom skin may not — verify before depending on this tag.
:::

## Example

The example below adds a help icon next to a list control. The help text is initially hidden via `style="display:none"`, and `<jQueryReady>` wires up a click handler to reveal it.

```html {28-32}
<AddForm>
  ...
  <table>
    <tr>
      <td>
        <Label For="txtFirstName" Text="First Name" />
        <TextBox Id="txtFirstName" DataField="FirstName" DataType="String" />
      </td>
    </tr>
    <tr>
      <td>
        <Label For="lstColors" Text="Favorite Color" />
        <ListBox Id="lstColors" DataField="FavoriteColors" DataType="String" SelectionMode="Single">
          <ListItem Value="#00FF00">Green</ListItem>
          <ListItem Value="#FF0000" Selected="True">Red</ListItem>
          <ListItem Value="#0000FF">Blue</ListItem>
        </ListBox>
        <img src="/images/help_icon.gif" class="help-icon" />
        <span class="help-text" style="display:none;">Choose your absolute favorite color</span>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <AddButton Text="Add" /> <CancelButton Text="Cancel" />
      </td>
    </tr>
  </table>
  <jQueryReady>
    $("img.help-icon").click(function () {
      $(this).next().show();
    });
  </jQueryReady>
</AddForm>
```

XMP wraps the inner script in:

```javascript
(function ($) {
  $(document).ready(function () {
    // your script here
  });
})(jQuery);
```

So `$` is always the jQuery object inside the block.

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [ScriptId](#prop-scriptid) | string | | When set, the script is registered only once per page using this ID — useful when the same script might be rendered multiple times |

## Property Details

*   <span id="prop-scriptid">**ScriptId**</span>: A page-wide unique identifier. When set and a script with this ID is already on the page, this block is skipped. When omitted, every render produces a fresh registration (so the script may be duplicated if the form renders more than once on a single page).
