---
id: form-file-upload
title: FileUpload
category: Input Controls
context: form
summary: >-
  The FileUpload tag allows your users to upload a file to your web server. If a
  file has been upoaded, its filename is displayed.
keywords:
  - file
  - upload
  - form
---
# `<FileUpload>`

The FileUpload tag allows your users to upload a file to your web server. If a file has been upoaded, its filename is displayed.

## Syntax
```html
<FileUpload 
    ID="string" 
    DataField="string" 
    DataType="string"
    DisplayMode="FilePicker|FilePickerNoUpload|UploadAndSelect" 
    Extensions="comma-delimited list of extensions" 
    FileNameLabelCssClass="string|Normal"
    MessageLabelCssClass="string|Normal"
    NewFileButtonCssClass="string|CommandButton"
    NewFileButtonText="string|Upload File"
    Nullable="True|False"
    Path="string"
    UploadButtonCssClass="string|CommandButton"
    UploadButtonText="string|Upload"
    UseUniqueFileName="True|False"
    Visible="True|False" 
/> 
```

## Remarks

If your users need to upload files like images or documents to your web server, you can use the `<FileUpload>` tag. If a file has been previously uploaded, the control displays the file's name. The user can click the "New File" button to show the HTML file upload control that allows them to browse to their file on their local machine. Once they've selected the file, they click the "Upload" button to begin the upload process. If the file's extension does not match those that have been specified in the "extensions" attribute or if there is some other error, it is displayed for the user. The `DataType` attribute is always **string**.

**Validating the FileUpload Control**: The nature of the FileUpload control does not allow it to be validated on the client. If you use a validator with this control, set the `EnableClientScript` attribute to `false`.

The FileUpload control has the following attributes:

*   **DisplayMode**: (New to v.2.7) This allows you to determine how the control behaves. You can configure it to be a file picker, where the files in the specified directory are displayed in a drop-down list; a file picker with the ability to upload a new file; or, the default, provide the user with the ability to upload a file and have that file be the "selected" file for the control. The UploadAndSelect method is the same method that earlier versions of this control used.
*   **Extensions**: A comma-delimited list of file extensions that define the file types that are allowed to be uploaded. File extensions should not include the period. For instance: `gif,jpg,tiff` is a valid value for Extensions. This attribute is required.
*   **FileNameLabelCssClass**: The Cascading Style Sheets (CSS) class name to associate with the label that displays the selected/uploaded file name. The default value is `Normal`
*   **MessageLabelCssClass**:The Cascading Style Sheets (CSS) class name to associate with the label that displays any error messages that result from operation of the control. The default value is `Normal`
*   **NewFileButtonCssClass**: The Cascading Style Sheets (CSS) class name to associate with the link button the user clicks to show the file upload control. The default value is `CommandButton`
*   **NewFileButtonText**: The text to use for the link button the user clicks to show the file upload control. The default value is "Upload File"
*   **Nullable**: If True (the default is False), the control will return a DBNull value when no file has been uploaded. If a DBNull value is passed to the control, regardless of the Nullable setting, no value will be set for the uploaded file.
*   **Path**: The path to the file on the web server where the file should be saved. This path must be accessible to the web application and permissions must be set to allow file operations. The path should be written relative to the web application root and may use the tilde (`~`) character to represent the root. Examples: "/Portals/0/images/" or "~/Portals/0/images/"
*   **UploadButtonCssClass**: The Cascading Style Sheets (CSS) class name to associate with the link button the user clicks to initiate the file upload process. The default value is `CommandButton`
*   **UploadButtonText**: The text to use for the link button the user clicks to initiate the file upload process. The default value is "Upload"
*   **UseUniqueFileName**: False by default, when this attribute is set to True, the control will generate a unique GUID-based name for the uploaded file. If the attribute is False, the original file name will be used.

:::warning NOTE
Because of Javascript's security mechanisms, the FileUpload control will NOT function if Partial Page Rendering has been enabled for the XMod Pro control. This is true of the ASP.NET FileUpload control and is not specific to XMod Pro's FileUpload control.
:::



## Example
```html {19-20}
<AddForm>
  ...
  <table>
    <tr>
      <td>
        <label for="txtFirstName" text="First Name" /> 
        <Textbox id="txtFirstName" datafield="FirstName" datatype="string" />
      </td>
    </tr>
    <tr>
      <td>
        <label for="txtLastName" text="Last Name" /> 
        <Textbox id="txtLastName" datafield="LastName" datatype="string" />
       </td>
    </tr>
    <tr>
      <td>
        <label for="uplMugShot" text="Mug Shot" /> 
        <FileUpload id="uplMugShot" path="~/images/" extensions="gif,jpg" 
          datafield="UserImage" datatype="string" />
       </td>
    </tr>
    <tr>
      <td colspan="2">
        <AddButton text="Add"/>&nbsp;<CancelButton text="Cancel"/>
      </td>
    </tr>
  </table>
</AddForm>
```
