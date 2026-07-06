---
id: form-action
title: Action
category: Actions
context: form
summary: After a form submits successfully, executes a custom .NET action class from your /bin folder. Use when none of the built-in action tags do what you need.
keywords:
  - action
  - custom
  - form
since: '4.0'
related:
  - form-email
  - form-silent-post
  - form-redirect
---

# `<Action>`

After a form submits successfully, the `<Action>` tag loads a .NET assembly from your site's `/bin` folder and runs its custom code. Use it as an escape hatch when none of the built-in action tags ([`<Email>`](email.md), [`<SilentPost>`](silent-post.md), [`<AddUser>`](add-user.md), etc.) cover your need.

Custom actions can read and modify the in-memory form values, so an `<Action>` early in the form's action list can transform data that later actions consume.

::: info Action timing
Action tags only run when the form submits successfully — they run *after* the `<SubmitCommand>` writes to the database, so they cannot prevent the database write or alter what was written. They evaluate their tokens at that point, so `[[FieldName]]` tokens read the values the user submitted.
:::

## Example

```html {4}
<AddForm>
  <SubmitCommand
    CommandText="INSERT INTO Users(FirstName, LastName) VALUES(@FirstName, @LastName)" />
  <Action Assembly="MyCompany.XMPActions" Namespace="MyCompany.XModPro.Actions.MyCustomAction" />

  <table>
    <tr>
      <td><Label For="txtFirstName" Text="First Name" /></td>
      <td><TextBox Id="txtFirstName" DataField="FirstName" DataType="String" /></td>
    </tr>
    <tr>
      <td><Label For="txtLastName" Text="Last Name" /></td>
      <td><TextBox Id="txtLastName" DataField="LastName" DataType="String" /></td>
    </tr>
    <tr>
      <td colspan="2"><AddButton Text="Add" /> <CancelButton Text="Cancel" /></td>
    </tr>
  </table>
</AddForm>
```

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [Assembly](#prop-assembly) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Name of the DLL in `/bin` (without the `.dll` extension) |
| [Namespace](#prop-namespace) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Namespace + class name pointing to the action class within the DLL |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Child Tags

| Tag | Required | Description |
|-----|----------|-------------|
| [`<Property>`](#child-property) | optional | Passes a name/value pair to the custom action's `Properties` collection |

### <span id="child-property">`<Property>`</span>

Adds a single name/value pair to the action's `Properties` list. The custom action class must expose a public `Properties` property (`List(Of ActionProperty)`) for these to be applied.

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| Name <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | Property name |
| Value | string \| token | | Property value. Field tokens are evaluated when the action runs |

## Property Details

*   <span id="prop-assembly">**Assembly**</span>: The file name of your compiled DLL in the site's `/bin` directory, without the `.dll` extension. For example, if `bin\MyCompany.XMPActions.dll` is your DLL, set `Assembly="MyCompany.XMPActions"`.

*   <span id="prop-namespace">**Namespace**</span>: The full namespace plus class name pointing to your action class — XMP loads the type `{Assembly}.{Namespace}` from the assembly. The way you set this depends on whether your project is VB.NET or C#:

    #### VB.NET

    Visual Studio's VB.NET projects automatically set the project's `Root Namespace` to the same value as the `Assembly` name. We recommend clearing the `Root Namespace` (set it to empty), so XMP can prepend the assembly name itself.

    With a class file like this:

    ```vb
    Imports DotNetNuke.Entities.Modules
    Imports KnowBetter.XModPro.Common
    Imports KnowBetter.XModPro.Web.Controls.Form.Action

    Namespace MyActions
      Public Class SendNotification
        Inherits ActionBase

        Public Overrides Sub Execute(pmb As PortalModuleBase, ByRef xi As XItem)
          ' Code to send notification here
        End Sub
      End Class
    End Namespace
    ```

    The matching tag is:

    ```html
    <Action Assembly="CustomXMPCode" Namespace="MyActions.SendNotification" />
    ```

    If you don't include a `Namespace` block in the class file, drop the namespace from the tag:

    ```html
    <Action Assembly="CustomXMPCode" Namespace="SendNotification" />
    ```

    #### C#

    Visual Studio's C# projects set the `Default Namespace` to the assembly name. Keep that default and omit it from the tag's `Namespace`. With a class file like this:

    ```csharp
    namespace CustomXMPCode.MyActions
    {
      using DotNetNuke.Entities.Modules;
      using KnowBetter.XModPro.Common;
      using KnowBetter.XModPro.Web.Controls.Form.Action;

      public class SendNotification : ActionBase
      {
        public override void Execute(PortalModuleBase pmb, ref XItem xi)
        {
          // code to send notification here
        }
      }
    }
    ```

    The matching tag is:

    ```html
    <Action Assembly="CustomXMPCode" Namespace="MyActions.SendNotification" />
    ```

## Building a custom action

1.  Create a class library in Visual Studio.
2.  Add references to `DotNetNuke.dll` and `KnowBetter.XModPro.Common.dll` (and `KnowBetter.XModPro.Web.Controls.dll` if you inherit from `ActionBase`).
3.  Create a class that inherits from `KnowBetter.XModPro.Web.Controls.Form.Action.ActionBase`.
4.  Override the `Execute` method:

    ```vb
    Imports DotNetNuke.Entities.Modules
    Imports KnowBetter.XModPro.Common
    Imports KnowBetter.XModPro.Web.Controls.Form.Action

    Namespace MyActions
      Public Class MyAction
        Inherits ActionBase

        Public Overrides Sub Execute(pmb As PortalModuleBase,
                                     ByRef xi As XItem)
          ' pmb provides environmental data (PortalId, UserId, etc.).
          ' xi contains the form values that were just submitted.
          ' xi is passed by reference, so any values you change or add
          ' are visible to <Action>, <Email>, and <Redirect> tags
          ' that run after this one.
        End Sub
      End Class
    End Namespace
    ```

5.  Compile and copy the DLL to your site's `/bin` folder.
6.  Reference the action from your form using `<Action>`.
