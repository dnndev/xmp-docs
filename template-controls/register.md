# <xmod:Register>

<a name="top"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

The Register tag enables you to use third-party controls in your XMod Pro templates.

<a name="syntax"></a>

## Syntax

<div xmlns="">`<xmod:Register`  
`    TagPrefix="_string_"`</div>

<div xmlns="">`    Namespace="_string_"`</div>

<div xmlns="">`    Assembly="_string_"`  
`/> `</div>

 
## Remarks

*   Usage: Should you choose to use third-party controls, you'll need to add a Register tag to your template definition for each collection. Register tags tell XMod Pro where to find the controls you use. You only use the tag once per library. The register tag is declared outside all the <span style="font-family: Verdana;" xmlns="http://www.w3.org/1999/xhtml"><xmod:Template></span> tags in your template. This allows you to use the library in all your template tags.  

*   **TagPrefix**: A short series of letters and numbers that you use as part of the control's tag. It helps XMod Pro determine what library the control belongs to.  

*   **Namespace**: The namespace in which custom control resides. This information should be supplied by the control developer.  

*   **Assembly**: This is the name of the assembly (DLL) in which the controls reside. Note, you do not specify the path to the DLL or the ".dll" extension. This information should be supplied by the control developer.  

## Example

<div xmlns="">`<span style="color: #ff0000;"><xmod:Register TagPrefix="ctb" Namespace="Acme.CoolTools.XMPTools" Assembly="Acme.CoolTools" /></span>  
<xmod:Template>  
  ...  
  <HeaderTemplate>`  
`    <table>  
  </HeaderTemplate>  
  <ItemTemplate>`  
`      <tr>`  
`        <td>`  
`           <span style="color: #ff0000;"><ctb:CoolFader makeitcool="true" fadeduration="5">  
             [[Headline]]  
           </ctb:CoolFader></span>`  
`        </td>`  
`      </tr>  
  </ItemTemplate>  
  <FooterTemplate>`  
`    </table>  
  </FooterTemplate>  
``</xmod:Template>`</div>

