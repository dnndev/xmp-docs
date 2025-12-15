---
id: template-slideshow
title: 'xmod:Slideshow'
category: Display Controls
context: template
summary: >-
  The Slideshow tag, like the Template tag, is a View control that is used for
  displaying records from your datasource. Unlike the Template tag, the
  Slideshow is a view with a single purpose - to display images in an
  eye-pleasing presentation with very little work on your part. All you have to
  do is supply it with a list of URL's to your images and set a Width and Height
  for the viewer. It is used in essentially the same manner as the Template tag
  and can be used together with the Template tag within your templates. Unlike
  the Template or DataList tags, the Slideshow doesn't allow any data commands
  or paging. Additionally, since this is a presentation control, it is assumed
  that those who can see the module can view the slideshow, so there are no
  permissions. As a result, the syntax is very simple.
keywords:
  - slideshow
  - template
---
# `<xmod:Slideshow>`

The Slideshow tag, like the Template tag, is a View control that is used for displaying records from your datasource. Unlike the Template tag, the Slideshow is a view with a single purpose - to display images in an eye-pleasing presentation with very little work on your part. All you have to do is supply it with a list of URL's to your images and set a Width and Height for the viewer. It is used in essentially the same manner as the Template tag and can be used together with the Template tag within your templates.

Unlike the Template or DataList tags, the Slideshow doesn't allow any data commands or paging. Additionally, since this is a presentation control, it is assumed that those who can see the module can view the slideshow, so there are no permissions. As a result, the syntax is very simple.

::: warning REQUIREMENT
Use of this control REQUIRES jQuery 1.3 or later be available on the page.
:::

## Syntax
```html
<xmod:Slideshow 

    BasePath="string"
    ConnectionString="string" 
    Height="pixels" 
    ID="string" 
    ImageField="string" 
    ResizeImages="True|False" 
    Timeout="milliseconds|4000"
    Width="pixels"> 

    <ListDataSource CommandText="string" 
        ConnectionString="string"/> 
  
</xmod:Slideshow>
```

## Remarks

*   **BasePath:** Provides the option of pre-pending a common path for your image URL's. So, if your image URL's are stored in the data source with their filename only, you can set BasePath to point to the actual directory where the image files reside. You can optionally use the tilde (~) character to represent the application root.
*   **ConnectionString**: If you need to specify a SQL Server database other than the current DotNetNuke database, you can supply a connection string here. When specified, it serves as the default connection string for the ListDataSource and DetailDataSource. You can also use a connection string defined in the web.config file. To do so, use the ConnectionString token like so:

    ```html
    <xmod:DataList... ConnectionString='[[ConnectionString:_connectionName_]]' ...>
    ```

*   **Height**: Height of the slideshow view port, specified as a number pixels. Do not add `px` to the value. This should be the height of the largest image, generally. For best results all images should be same size. If not, try shrinking the dimensions of the viewport and setting ResizeImages to true.  

*   **ID**: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the template file.  

*   **ImageField**: **Required**. Specify the name of the column in your data source that contains the URL of the images.  

*   **ResizeImages**: If set to true, all images will be set to the same size as the slideshow viewport (Height and Width properties). If false, the default, images larger than the viewport size will be partially visible. Setting this to true can be helpful if your images are not the same size. In that case, set the Height and Width to the size of the smallest image and set ResizeImages to true. This will cause your larger images to display in a smaller size (the image is not affected). For best results, all images should be the same size.  

*   **Timeout**: The time, in milliseconds (1 second = 1000 milliseconds), that an image should be displayed. The default value is 4000 or 4 seconds.  

*   **Width**: Width of the slideshow view port, specified as a number pixels. Do not add "px" to the value. This should be the width of the largest image, generally. For best results all images should be same size. If not, try shrinking the dimensions of the viewport and setting ResizeImages to true.  

*   **ListDataSource**: Provides the data for the DataList when it is displaying in list view. It accepts `<Parameter>` tags to pass parameters as part of the command. The "alias" attribute is optional and is used to avoid conflicts or to accept a parameter with a specific name (the "name" attribute) but use a different parameter name in the command (the "alias" attribute). If no "alias" is specified, the "name" will be used.

## Example
```html
<xmod:Slideshow ImageField="EmployeePicUrl" Height="250" width="200" Timeout="6000" BasePath="/images/employees/"> 
    <ListDataSource CommandText="SELECT EmployeePicUrl FROM Employees" /> 

</xmod:Slideshow>
```
