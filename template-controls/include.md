---
id: template-include
title: 'xmod:Include'
category: Display Controls
context: template
summary: >-
  The Include tag injects the raw contents of the specified file into the
  template at the position of the tag.
keywords:
  - include
  - template
---
# `<xmod:Include>`

The Include tag injects the raw contents of the specified file into the template at the position of the tag. It is a good way to share HTML, script, text or other blocks across multiple forms and templates - allowing you to make changes in one file and have it propagate across all forms and templates where the file is included.

## Syntax
```html
<xmod:Include`  
    FileName="string"
/> 
```
 
## Remarks

The main purpose of the Include tag is to render the content of a file directly into the output stream. It is most beneficial if there is common HTML or text that you want to share among forms and templates. The content of the file is read-from and written to the stream in place of the Include tag. No formatting, processing, or checking occurs on the contents. The file must reside on your web server.

Please note that every time XMP renders an Include tag, it attempts to read the file and then write its contents to the response stream. Take care to make sure not only include safe content, but also to not over-use the tag because it does involve a separate file operation each time the tag is rendered. In the vast majority of cases, there is no practical limit on the number of tags you can use. But like all programming, it's best to try and minimize your use of system resources as much as possible.

## Attributes  

*   **FileName**: The full path and filename of the file to include. You may use the tilde (`~`) character to denote the root of the website or use a relative path: "/Portals/0/myfile.txt" and "~/Portals/0/myfile.txt" would be examples of what you could use.

## Example

In this example, you may have a file called CompanyHeader.html located in the "includes" directory of your website. This could be something simple like 

```html
<h1>DNNDev.com</h1>
<p><em>Makers of Cool DNN Tools since 2004</em></p>
```

By using the `<Include>` tag before the table, we're able to inject that HTML right into the form. Later, if we decide to change our name to **EvoqDev.com** then we just need to change the _CompanyHeader.html_ file and it will automatically change in every form and template in which it's used. Notice also that this tag is being used _outside_ the template tag. It is not data-bound and, so, is not reliant on being inside an ItemTemplate or AlternatingItemTemplate tag.

```html {2}
<div>
<xmod:Include FileName="~/includes/CompanyHeader.html" />
  <table width="100%">
    <tr>
      <td width="250" valign="top">

        <!-- EMPLOYEES TEMPLATE -->

        <xmod:Template Id="Employees">
          <DetailDataSource CommandText="SELECT * FROM XMPDemo_Employees WHERE EmployeeId = @EmpID">
            <Parameter Name="EmployeeId" Alias="EmpID" />
          </DetailDataSource>

          <DetailTemplate>
            <h1>Employee Profile</h1>
            <h3>[[FirstName]] [[LastName]]</h3>
            <xmod:IfEmpty Value='[[imageUrl]]'>
              <img src="/images/NoImage.png" />
            </xmod:IfEmpty>
            <xmod:IfNotEmpty Value='[[imageUrl]]'>
              <img src="[[imageUrl]]" />
            </xmod:IfNotEmpty>
            <h4>Biography:</h4>
            <div>[[Bio]]</div>
            <xmod:MetaTags>
              <Title>Employee Profile for [[FirstName]] [[LastName]]</Title>
              <Keywords append="true">[[FirstName]],[[LastName]]</Keywords>
            </xmod:MetaTags>
          </DetailTemplate>
        </xmod:Template>
      </td>
    </tr>
  </table>
</div>
```
