---
id: template-meta-tags
title: 'xmod:MetaTags'
category: SEO
context: template
summary: >-
  The MetaTags tag is used to alter the host page's Title, Description, and
  Keywords. This is useful for Search Engine Optimization (SEO) as well as being
  an aid for your users.
keywords:
  - meta
  - tags
  - template
---
# `<xmod:MetaTags>`

The MetaTags tag is used to alter the host page's Title, Description, and Keywords. This is useful for Search Engine Optimization (SEO) as well as being an aid for your users.

## Syntax
```html
<xmod:MetaTags>
    <Title Append="True|False">...Title Text...</Title>
    <Keywords Append="True|False">...Keywords...</Keywords>
    <Description Append="True|False">...Description...</Description>
    <Robots Append="True|False">...Robots...</Robots>
    <Redirect Delay="integer" Url="string" />
</xmod:MetaTags>
```

## Remarks

*   **Title**: The page's Title will be replaced with the tag's inner content. If append is specified and is True, then the content will be appended to the page's Title.  

*   **Keywords**: The page's Keywords will be replaced with the tag's inner content. If append is specified and is True, then the content will be appended to the page's Keywords. Note: for this tag to function correctly, you should set the default Keywords in the DNN Site Settings page for your website.  

*   **Description**: The page's Description will be replaced with the tag's inner content. If append is specified and is True, then the content will be appended to the page's Description. Note: for this tag to function correctly, you should set the default Description in the DNN Site Settings page for your website.  

*   **Robots**: (New to v4.8) The page's Robots will be replaced with the tag's inner content. If append is specified and is True, then the content will be appended to the page's Robots.

*   **Redirect**: This will insert a 'refresh' meta tag into the page that will redirect the browser to another URL. The Delay value indicates the number of seconds before the redirect takes place. If you set delay to 0 the redirect will take place immediately. (new to version 4.3)  

## Example
```html {18-21}
<div>
  <table width="100%">
    <tr>
      <td width="250" valign="top">

        <!-- EMPLOYEES TEMPLATE -->

        <xmod:Template Id="Employees">
          <DetailDataSource CommandText="SELECT * FROM XMPDemo_Employees WHERE EmployeeId = @EmpID">
            <parameter name="EmployeeId" alias="EmpID" />
          </DetailDataSource>

          <DetailTemplate>
            <h1>Employee Profile</h1>
            <h3>[[FirstName]] [[LastName]]</h3>
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
