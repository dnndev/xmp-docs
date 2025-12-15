---
id: template-register
title: 'xmod:Register'
category: Actions
context: template
summary: >-
  The Register tag enables you to use third-party controls in your XMod Pro
  templates.
keywords:
  - register
  - template
---
# `<xmod:Register>`

The Register tag enables you to use third-party controls in your XMod Pro templates.

## Syntax
```html
<xmod:Register 
    TagPrefix="string"
    Namespace="string"
    Assembly="string" 
/> 
```
 
## Remarks

*   Usage: Should you choose to use third-party controls, you'll need to add a Register tag to your template definition for each collection. Register tags tell XMod Pro where to find the controls you use. You only use the tag once per library. The register tag is declared outside all the `<xmod:Template>` tags in your template. This allows you to use the library in all your template tags.  

*   **TagPrefix**: A short series of letters and numbers that you use as part of the control's tag. It helps XMod Pro determine what library the control belongs to.  

*   **Namespace**: The namespace in which custom control resides. This information should be supplied by the control developer.  

*   **Assembly**: This is the name of the assembly (DLL) in which the controls reside. Note, you do not specify the path to the DLL or the ".dll" extension. This information should be supplied by the control developer.  

## Example
```html {1,10-12}
<xmod:Register TagPrefix="ctb" Namespace="Acme.CoolTools.XMPTools" Assembly="Acme.CoolTools" />
<xmod:Template>
  ...
  <HeaderTemplate>
    <table>
  </HeaderTemplate>
  <ItemTemplate>
      <tr>
        <td>
           <ctb:CoolFader makeitcool="true" fadeduration="5">
             [[Headline]]
           </ctb:CoolFader>
        </td>
      </tr>
  </ItemTemplate>
  <FooterTemplate>
    </table>
  </FooterTemplate>
</xmod:Template>
```

