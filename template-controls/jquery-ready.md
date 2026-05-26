---
id: template-jquery-ready
title: 'xmod:jQueryReady'
category: Display Controls
context: template
summary: Registers a jQuery `$(document).ready(...)` block at the bottom of the page, with an automatic closure so `$` is the jQuery alias.
keywords:
  - jquery
  - ready
  - template
since: '1.0'
related:
  - template-script-block
---

# `<xmod:jQueryReady>`

`<xmod:jQueryReady>` is a shorthand for the jQuery `$(document).ready()` boilerplate. Place your script between the opening and closing tags — XMP wraps it in a closure (so `$` is the jQuery alias even if another library has claimed `$`) and registers it as a startup script near the bottom of the page.

::: warning Requires jQuery
The hosting DNN page must include jQuery for this tag to work. Default DNN skins include jQuery; verify a custom skin does too.
:::

## Example

The example below adds a click handler to an `<h4>` so clicking it reveals a hidden biography `<div>`.

```html {19-23}
<div>
  <xmod:Template Id="Employees">
    <DetailDataSource CommandText="SELECT * FROM Employees WHERE EmployeeId = @EmpID">
      <Parameter Name="EmployeeId" Value="[[Url:eid]]" DataType="Int32" />
    </DetailDataSource>
    <DetailTemplate>
      <h1>Employee Profile</h1>
      <h3>[[FirstName]] [[LastName]]</h3>
      <h4 class="bio">Biography</h4>
      <div style="display:none;">[[Bio]]</div>
    </DetailTemplate>
  </xmod:Template>

  <xmod:jQueryReady>
    $("h4.bio").click(function () {
      $(this).next().show();
    });
  </xmod:jQueryReady>
</div>
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
| [ScriptId](#prop-scriptid) | string | | When set, the script is registered only once per page using this ID — useful when the same view might render multiple times |

## Property Details

*   <span id="prop-scriptid">**ScriptId**</span>: A page-wide unique identifier. When set and a script with this ID is already on the page, this block is skipped. When omitted, every render produces a fresh registration (so the script may be duplicated if the view renders more than once on a single page).
