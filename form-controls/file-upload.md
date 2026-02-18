---
id: form-file-upload
title: FileUpload
category: Input Controls
context: form
summary: >-
  The FileUpload tag allows your users to upload a file to your web server. If a
  file has been uploaded, its filename is displayed.
keywords:
  - file
  - upload
  - form
since: '1.0'
---
# `<FileUpload>`

The FileUpload tag allows your users to upload a file to your web server. It supports three [display modes](#prop-displaymode): upload a file directly, pick from existing files in a directory, or pick from existing files with the option to upload new ones.

## Example
```html {19-20}
<AddForm>
  ...
  <table>
    <tr>
      <td>
        <Label For="txtFirstName" Text="First Name" />
        <Textbox Id="txtFirstName" DataField="FirstName" DataType="String" />
      </td>
    </tr>
    <tr>
      <td>
        <Label For="txtLastName" Text="Last Name" />
        <Textbox Id="txtLastName" DataField="LastName" DataType="String" />
       </td>
    </tr>
    <tr>
      <td>
        <Label For="uplMugShot" Text="Mug Shot" />
        <FileUpload Id="uplMugShot" Path="~/images/" Extensions="gif,jpg"
          DataField="UserImage" DataType="String" />
       </td>
    </tr>
    <tr>
      <td colspan="2">
        <AddButton Text="Add"/>&nbsp;<CancelButton Text="Cancel"/>
      </td>
    </tr>
  </table>
</AddForm>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [ID](#prop-id) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Unique identifier for the control within the form |
| [DataField](#prop-datafield) | string | | Parameter name for data binding to your form's data commands |
| DataType | `String` | `String` | Database type — always `String` for this control |
| [DisplayMode](#prop-displaymode) | `UploadAndSelect` `FilePicker` `FilePickerNoUpload` | `UploadAndSelect` | How the control presents file selection to the user |
| [Extensions](#prop-extensions) | string | | Comma-separated list of allowed file extensions, without the period (e.g. `gif,jpg,png`) |
| FileNameLabelCssClass | string | `Normal` | CSS class for the uploaded file name label |
| FilePickerCssClass | string | `NormalTextBox` | CSS class for the file picker dropdown |
| MessageLabelCssClass | string | `Normal` | CSS class for error/status messages |
| NewFileButtonCssClass | string | `CommandButton` | CSS class for the "new file" link button |
| NewFileButtonText | string | `Upload File` | Text for the "new file" link button |
| [Nullable](#prop-nullable) | `True` `False` | `False` | Returns DBNull when no file has been uploaded |
| [Path](#prop-path) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Server directory where uploaded files are saved |
| UploadButtonCssClass | string | `CommandButton` | CSS class for the upload button |
| UploadButtonText | string | `Upload` | Text for the upload button |
| [UseUniqueFileName](#prop-useuniquefilename) | `True` `False` | `False` | Generates a unique GUID-based filename for uploads |
| Visible | `True` `False` | `True` | Shows or hides the control |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

::: warning NOTE
Because of JavaScript's security mechanisms, the FileUpload control will NOT function if Partial Page Rendering has been enabled for the XMod Pro module. This is true of the ASP.NET FileUpload control and is not specific to XMod Pro's FileUpload control.
:::

**Validating the FileUpload Control**: The nature of the FileUpload control does not allow it to be validated on the client. If you use a validator with this control, set the `EnableClientScript` attribute to `false`.

## Property Details

*   <span id="prop-id">**ID**</span>: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form.

*   <span id="prop-datafield">**DataField**</span>: Name of the parameter in the `<SubmitCommand>` which will be filled with this control's data when the form is submitted and/or the parameter in the `<SelectCommand>` which will supply this control's data when the form is loaded. This attribute is required if the control will participate in operations with your form's data commands.

*   <span id="prop-displaymode">**DisplayMode**</span>: Determines how the control presents file selection to the user:
    *   **UploadAndSelect** (default): The user uploads a file and that file becomes the selected value. This is the classic behavior from earlier versions of the control.
    *   **FilePicker**: Files in the specified directory are displayed in a drop-down list for the user to choose from. No upload capability is provided.
    *   **FilePickerNoUpload**: Same as FilePicker — files are displayed in a drop-down list — but the user also has the ability to upload a new file.

*   <span id="prop-extensions">**Extensions**</span>: A comma-delimited list of file extensions that define the file types allowed to be uploaded. File extensions should not include the period. For instance: `gif,jpg,tiff` is a valid value.

    ::: warning
    If Extensions is not set, all file types will be accepted with no restrictions. Always specify allowed extensions to prevent unwanted file uploads.
    :::

*   <span id="prop-nullable">**Nullable**</span>: If True, the control will return a DBNull value when no file has been uploaded. If a DBNull value is passed to the control, regardless of the Nullable setting, no value will be set for the uploaded file.

*   <span id="prop-path">**Path**</span>: The path on the web server where the file should be saved. This path must be accessible to the web application and permissions must be set to allow file operations. The path should be written relative to the web application root and may use the tilde (`~`) character to represent the root. Examples: `/Portals/0/images/` or `~/Portals/0/images/`

*   <span id="prop-useuniquefilename">**UseUniqueFileName**</span>: When set to True, the control will generate a unique GUID-based name for the uploaded file. If False, the original file name will be used.
