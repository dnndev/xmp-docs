---
id: template-navigate-url
title: 'xmod:NavigateUrl'
category: SEO
context: template
summary: >-
  The NavigateUrl tag (new to version 4.6) allows you to call the DNN API
  function NavigateUrl(). This allows you to generate URLs that utilize the
  site's configured URL Provider and makes it easier to...
keywords:
  - navigate
  - url
  - template
---
# `<xmod:NavigateUrl>`

The NavigateUrl tag (new to version 4.6) allows you to call the DNN API function NavigateUrl(). This allows you to generate URLs that utilize the site's configured URL Provider and makes it easier to generate Friendly links.

## Syntax
```html
<xmod:NavigateUrl
    TabId="integer"
    ControlKey="string">

    Optionally, add one or more Parameter tags
    <Parameter Name="string" Value="string" />
    ...

</xmod:NavigateUrl>
```

## Remarks

*   **ControlKey**:Optional. Specify this if you want to load a particular control on a page. Must supply the TabId if using this property. This property is not frequently used.  

*   **TabId**: Optional. The unique numeric value that represents the page. "Tab" is used for historical reasons. Pages in DNN used to be called Tabs. If no TabId is provided, NavigateUrl will return the current page's URL.  

*   **Parameter**: Optional. You can specify multiple Parameter tags. These child tags are used to pass parameters via the rendered URL. The tag will URLEncode the value prior to passing it to DNN. The URL parameter name is the value of the Name property. The parameter's value is defined in the Value property. All values are passed as text so no data type can be specified.

## Example
```html {13}
<div>
  <table width="100%">
    <tr>
      <td width="250" valign="top">

        <!-- EMPLOYEES TEMPLATE -->

        <xmod:Template Id="Employees">
          <ListDatasource commandtext="SELECT * FROM XMPDemo_Employees" />

          <ItemTemplate>
            [[FirstName]] [[LastName]]<br />
            <a href="<xmod:NavigateUrl TabId="237"><Parameter Name="eid" Value='[[Id]]' /></xmod:NavigateUrl>">View Work History</a>
          </ItemTemplate>

        </xmod:Template>
      </td>
    </tr>
  </table>
</div>
```
