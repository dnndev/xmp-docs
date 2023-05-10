# `<Action>`

**New to Version 4.0!** The Action tag allows you to execute custom server-side functionality after the form has been successfully submitted.

## Syntax

```html
<Action
  Assembly="Name of DLL containing action - do not include the .dll extension"
  Namespace="Namespace pointing to the action class"
>
      <Property Name="_string_" Value="_string_" />
  ...Additional Property Tags as needed...
</Action>
```

## Remarks

- The Action tag is only executed if the form has been successfully submitted. If there is a validation error or an error is thrown from the database, the action will not be performed. Note that the Action is executed after the SubmitCommand is executed, so it cannot impact the database call itself.

- **Order Is Important**: Action tags are executed sequentially, so the order they appear within the form can be important. As an example, if one action fails with an error, all actions prior to the failed action will have executed. Those that occur after the failed action will not be executed. Additionally, some actions may have the ability to modify form values (this modification occurs after any form data has been sent to the database) - i.e. process form values, do calculations on them, transform them, even add and remove values from the list. Those changes will affect any Action tags that are executed downstream that use Field tokens.

- **Using Tokens**: Unlike most form tags, which evaluate their tokens when the form is loaded, Action tags evaluate their tokens when they're executed (after successful form submission). This means that values passed into the form such as URL parameters will need to be stored in a hidden form control (typically a TextBox with its Visibility property set to False). On the other hand, this enables Action tags to use Field tokens as their property values so these tags can use values input by the user in the form.

- **Assembly**: Required. The file name of the DLL in your /bin directory that contains the action class.

- **Namespace**: Required. The full namespace that points to the action class in your DLL. Because Namespaces are handled differently in Visual Studio between VB.NET and C#, please read the NOTE below for your chosen language.

  #### NOTE for VB.NET Projects

  When you create a VB.NET class library project in Visual Studio, the name of your Assembly is also the name of your `Root Namespace`. So a project called "CustomXMPCode", in its Project Settings, would automatically have `Assembly` set to "CustomXMPCode" and `Root Namespace` set to "CustomXMPCode".

  1. We recommend removing the Root Namespace value, so it is empty. XMod Pro will automatically prepend the Assembly name to the Namespace when it attempts to load your Action.
  2. This allows you to optionally use a `Namespace` statement in your action's file.

  ```vbnet
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

  In the example above, since it includes a Namespace statement, you would specify your XMod Pro `<Action>` like so:

  ```html
  <Action Assembly="CustomXMPCode" Namespace="MyActions.SendNotification" />
  ```

  If you choose _not_ to include a Namespace statement in your class file, then the `<Action>` would be defined like so:

  ```html
  <Action Assembly="CustomXMPCode" Namespace="SendNotification" />
  ```

  #### NOTE for C# Projects

  When you create a C# class library project in Visual Studio, the name of your Assembly is also the name of your `Default Namespace`. So a project called "CustomXMPCode", in its Project Settings, would automatically have `Assembly` set to "CustomXMPCode" and `Default Namespace` set to "CustomXMPCode".

  1. Ensure your `Default Namespace` set in your project's settings is set to the same value as your project's `Assembly`.
  2. When setting the `Namespace` attribute on the XMod Pro `<Action>` tag, omit your default namespace from it.

  For Example:
  In your C# project, `Assembly`="CustomXMPCode", `Default Namespace`="CustomXMPCode". In the code for your action's class you might have something like:

  ```csharp
  namespace CustomXMPCode.MyActions
  {
    using DotNetNuke.Entities.Modules;
    using KnowBetter.XModPro.Common;
    using KnowBetter.XModPro.Controls.Form.Action;

    public class SendNotification : ActionBase
    {
      public override void Execute(PortalModuleBase pmb, ref XItem xi)
      {
        // code to send notification here
      }
    }
  }
  ```

  In the above example, your XMod Pro action tag would look like this:

  ```html
  <Action Namespace="CustomXMPCode" Namespace="MyActions.SendNotification" />
  ```

- **Creating a Custom Action**: If you are a .NET programmer, you can create your custom action by performing the following steps:

  1.  Create a Class Library project in Visual Studio. Set the `Root Namespace` or `Default Namespace` settings on the project depending on whether you're using VB.NET or C# as your language (see Notes on the Namespace property above).

  2.  Reference the DotNetNuke.dll, KnowBetter.XModPro.Common.dll files in your project

  3.  Create the class that will contain your custom action

  4.  The class _must_ inherit from `KnowBetter.XModPro.Web.Controls.Form.Action.ActionBase`

  5.  Add a method called "Execute" and set it to accept a DNN `PortalModuleBase` object and, by reference, a `KnowBetter.XModPro.Common.XItem` object like so:

      #### VB.NET Example

      ```vbnet
      Imports DotNetNuke.Entities.Modules
      Imports KnowBetter.XModPro.Common
      Imports KnowBetter.XModPro.Web.Controls.Form.Action

      Namespace MyActions
        Public Class MyAction
          Inherits ActionBase

          Public Sub Execute(pmb As DotNetNuke.Entities.Modules.PortalModuleBase,
                             ByRef xi As KnowBetter.XModPro.Common.XItem)
            ' Do something very cool and interesting here.
            ' * pmb will contain useful environmental data like the current
            '   PortalId and current UserId.
            ' * xi will contain a list of values from the form just submitted.
            '   Note: They are passed by reference so you can modify the values
            '   and add values to the list. At this point, the data will have
            '   been saved to the database already. However, your modified values
            '   can be used by subsequent <Action> tags as well as <Email>
            '   tags and user redirection.
          End Sub
        End Class
      End Namespace
      ```

      #### C# Example

      ```csharp
      namespace CustomXMPCode.MyActions
      {
        using DotNetNuke.Entities.Modules;
        using KnowBetter.XModPro.Common;
        using KnowBetter.XModPro.Controls.Form.Action;

        public class SendNotification : ActionBase
        {
          public override void Execute(PortalModuleBase pmb, ref XItem xi)
          {
            /*
            Do something very cool and interesting here.
            * pmb will contain useful environmental data like the current
              PortalId and current UserId.
            * xi will contain a list of values from the form just submitted.
              Note: They are passed by reference so you can modify the values
              and add values to the list.

            At this point, the data will have been saved to the database
            already. However, your modified values can be used by subsequent
            <Action> tags as well as <Email> tags and user redirection.
            */
          }
        }
      }
      public override void Execute(PortalModuleBase pmb, ref XItem xi)
      {
        /* Do something very cool and interesting here.
           pmb will contain useful environmental data like the current PortalId and current UserId.
           xi will contain a list of values from the form just submitted. Note: They are passed by reference so you can modify the values
           and add values to the list. At this point, the data will have been saved to the database already. However, your modified values
           can be used by subsequent <Action> tags as well as <Email> tags and user redirection.
        */
      }
      ```

  6.  Compile and place the DLL in your site's /bin directory.

  7.  Remember to

- **Property Tags**: These are optional child tags that allow you to specify one or more attributes that will be set when the action is executed.

## Example

```html
<AddForm>
    <SubmitCommand
    CommandText="INSERT INTO Users(FirstName, LastName) VALUES(@FirstName, @LastName)"
  />
    <Action
    Assembly="MyCompany.XMPActions"
    Namespace="MyCompany.XModPro.Actions.MyCustomAction"
  />
    <table>
        <tr>
            <td>
                 <label for="txtFirstName" Text="First Name" />
                 <TextBox
          Id="txtFirstName"
          DataField="FirstName"
          DataType="string"
        />
               </td
      >
          </tr
    >
        <tr>
            <td>
                <label for="txtLastName" Text="Last Name" />         <TextBox
          Id="txtLastName"
          DataField="LastName"
          DataType="string"
        />
              </td
      >
          </tr
    >
        <tr>
            <td colspan="2">
                <AddButton Text="Add" />
        <CancelButton Text="Cancel" />       </td
      >
          </tr
    >
      </table
  >
</AddForm>
```
