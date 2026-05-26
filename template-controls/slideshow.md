---
id: template-slideshow
title: 'xmod:Slideshow'
category: Display Controls
context: template
summary: A view tag that displays a list of images as a fading slideshow. Like `<xmod:Template>` but specialized for image rotation, with no detail view, paging, or permissions.
keywords:
  - slideshow
  - images
  - template
since: '1.0'
related:
  - template-template
  - template-data-list
---

# `<xmod:Slideshow>`

`<xmod:Slideshow>` is a view tag that displays a sequence of images, fading between them on a timer. Unlike [`<xmod:Template>`](template.md) and [`<xmod:DataList>`](data-list.md), it has a single purpose: rotate through a list of image URLs returned by a SQL query. There is no detail view, no paging, no role-based gating — anyone who can see the module can see the slideshow.

::: warning Requires jQuery
The slideshow uses XMP's bundled jQuery plugin (`~/DesktopModules/XModPro/scripts/jquery.xmp-slideshow.js`), which requires jQuery 1.3 or later on the page. Default DNN skins include jQuery; verify a custom skin does too.
:::

## Example

```html
<xmod:Slideshow ImageField="EmployeePicUrl"
                Height="250" Width="200"
                Timeout="6000"
                BasePath="/images/employees/">
  <ListDataSource CommandText="SELECT EmployeePicUrl FROM Employees" />
</xmod:Slideshow>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [ImageField](#prop-imagefield) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | column name | | Column in the data source that holds each image's URL |
| ID | string | | Unique identifier within the view |
| [BasePath](#prop-basepath) | path | | Prepended to each image URL — useful when the data source stores filenames only |
| Width | pixels | | Width of the slideshow viewport (just the number, no `px`) |
| Height | pixels | | Height of the slideshow viewport (just the number, no `px`) |
| [Timeout](#prop-timeout) | milliseconds | `4000` | How long each image is shown before transitioning |
| [ResizeImages](#prop-resizeimages) | `True` `False` | `False` | When `True`, every image is sized to fit the viewport |
| [ConnectionString](#prop-connectionstring) | string \| `[[ConnectionString:name]]` | DNN database | Connection string used by `<ListDataSource>` if it doesn't specify its own |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Child Tags

| Tag | Required | Description |
|-----|----------|-------------|
| [`<ListDataSource>`](#child-listdatasource) | required | SQL or stored procedure returning the image rows. Same surface as on [`<xmod:Template>`](template.md#child-listdatasource) |

## Property Details

*   <span id="prop-imagefield">**ImageField**</span>: The name of the column in the data source whose value is the image URL (or filename, when used with `BasePath`).

*   <span id="prop-basepath">**BasePath**</span>: A folder path prepended to every `ImageField` value. Useful when the data source stores just filenames (e.g. `pic1.jpg`) and you want to keep the gallery's folder out of the database. The tilde (`~`) is supported for paths relative to the application root.

*   <span id="prop-timeout">**Timeout**</span>: The dwell time, in milliseconds. `1000` = 1 second; the default `4000` = 4 seconds.

*   <span id="prop-resizeimages">**ResizeImages**</span>: When `True`, the slideshow's JavaScript sets each image to the slideshow's `Width` and `Height`. Useful when the source images aren't all the same size — set the viewport to the smallest image's dimensions and let the larger images scale down. The source image files are not modified.

    For best results, prepare images at a consistent size before uploading.

*   <span id="prop-connectionstring">**ConnectionString**</span>: Default connection string for `<ListDataSource>` if that child doesn't set its own. Defaults to the DNN site database. Use `[[ConnectionString:name]]` to reference a `web.config` connection string.

*   <span id="child-listdatasource">**`<ListDataSource>`**</span>: The data command. Same syntax as on [`<xmod:Template>`](template.md#child-listdatasource) — SQL or stored procedure, with optional `<Parameter>` children. The query just needs to return the column you named in `ImageField`.
