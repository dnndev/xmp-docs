---
id: template-register
title: 'xmod:Register'
category: Display Controls
context: template
summary: Registers a third-party ASP.NET control library with the view, so its tags can be used inside XMP templates.
keywords:
  - register
  - third-party
  - controls
  - template
since: '1.0'
related:
  - template-include
  - template-script-block
---

# `<xmod:Register>`

`<xmod:Register>` lets you use a third-party ASP.NET control library inside an XMod Pro view. Each library you want to use needs one `<xmod:Register>` tag — XMP uses it to look up where the controls live (which assembly, which namespace) and which tag prefix you want to use to reference them.

Place `<xmod:Register>` *outside* any `<xmod:Template>`, typically at the top of the view file. One register tag covers every template in the file.

## Example

```html {1,8-10}
<xmod:Register TagPrefix="ctb" Namespace="Acme.CoolTools.XMPTools" Assembly="Acme.CoolTools" />

<xmod:Template>
  <HeaderTemplate><table></HeaderTemplate>
  <ItemTemplate>
    <tr>
      <td>
        <ctb:CoolFader MakeItCool="True" FadeDuration="5">
          [[Headline]]
        </ctb:CoolFader>
      </td>
    </tr>
  </ItemTemplate>
  <FooterTemplate></table></FooterTemplate>
</xmod:Template>
```

The `TagPrefix` ("ctb") plus the control's class name ("CoolFader") makes the markup name `<ctb:CoolFader>`. XMP loads the matching control type from the named `Assembly` and `Namespace`.

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [TagPrefix](#prop-tagprefix) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | The short prefix used in the tag name — e.g. `ctb` produces `<ctb:ControlName>` |
| [Namespace](#prop-namespace) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | The .NET namespace where the controls live |
| [Assembly](#prop-assembly) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | The DLL filename (without the `.dll` extension) — e.g. `Acme.CoolTools` for `bin/Acme.CoolTools.dll` |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Property Details

*   <span id="prop-tagprefix">**TagPrefix**</span>: A short identifier (letters and numbers) that XMP uses to recognize tags from this library. Pick a prefix that won't collide with `xmod:`, `asp:`, or any other libraries you've registered.

*   <span id="prop-namespace">**Namespace**</span>: The .NET namespace containing the control classes you want to use. Supplied by the third-party library's documentation.

*   <span id="prop-assembly">**Assembly**</span>: The filename of the assembly DLL (in the site's `/bin` folder), without the `.dll` extension. Supplied by the third-party library's documentation. Don't include a path or extension — XMP looks under `/bin` automatically.
