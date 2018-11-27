# Revision History

## 4.8.0

*   ADDED: Robots property added to `<MetaTags>` control.

*   ADDED: You can now specify external database connections for the DNN search configuration, whereas previously the default DNN database connection was used.

*   ADDED: `<Email>` form action now allows multiple file attachments (i.e. /path/to/file.ext|/path/to/file2.ext) by passing in a pipe delimited string. In addition, you can now use a relative path by prefixing with a tilde (i.e. `~/path/to/file.ext`).

*   FIXED: Issue where CancelButton in edit form still processed the `<Redirect>` control.

*   UPDATED: Better error handling when a referenced `<ControlDataSource>` in a form did not exist or contained incorrect syntax (i.e. additional quotes) that invalidated the control.

*   UPDATED: Better error handling for a `<ListBox>` control when referencing a `<ControlDataSource>`.

## 4.7.6  

*   FIXED: Issue when using the HeadScript BlockType of the ScriptBlock tag to load jQuery-dependent code. Versions prior to 4.7.5 would load your script after DNN injected jQuery. Version 4.7.5 loaded your script _before_ jQuery was loaded, causing 'jQuery undefined' errors.

## 4.7.5  

*   FIXED: Issue where `[[User:xxx]]` token for Country and Region would return a number instead of the text.  

*   FIXED: Added Byte Order Mark (BOM) to feeds because Excel has some difficulty opening files if it is not included.  

*   FIXED: `<xmod:Redirect>` with a `DisplayType` of `Button` or `ImageButton` did not render the `CssClass` attribute.  

*   FIXED: Issue where you could not assign a Field Token to the `Approved` property of the `<UpdateUser>` form tag.  

*   FIXED: Issue where `<xmod:ScriptBlock>` tag's `RegisterOnce` property did not function correctly in some DNN versions. Thanks Patrick Ryan.  

*   UPDATED: Small UX tweak - When creating a new template with the New Template wizard, unchecking the 'Include Details View' checkbox will automatically uncheck the 'Include Details Button' checkbox on the Buttons tab.

## 4.7.4

*   FIXED: Issue where failed form actions would prevent re-submission of the form.

## 4.7.3

*   ADDED: XMod Pro can now be used on "dnndev.me" (in addition to "localhost") without activation.  

*   FIXED: Issue where stricter data type checking caused `<Variable>` tag to throw an error of cannot convert string to int32.  

*   FIXED: XMod Pro Exchange would not load on localhost if site was not setup as a website.  

*   FIXED: Setting Encoding property on xmod:Feed causes error. Valid values now are: `utf7`, `utf8`, `utf16`, `utf32`, `ascii`.  

*   FIXED: Removed Debug Messages from EmailHelper.  

*   FIXED: `<xmod:EditImage>` `Width` and `Height` not rendering.  

*   FIXED: `<xmod:Redirect>` button style attribute values not set on rendered control.  

*   DOCUMENTATION: Fixed confusing use of `Text` property for image based controls. The proper property is `AlternateText`.

## 4.7.2

*   FIXED: Forms loaded via the new dynamic form load feature of Add and Edit buttons would not show the template view after clicking the Cancel button or after submitting the form.

## 4.7.1

*   FIXED: Unable to update forms, templates, feeds as the result of overwrite checking introduced in 4.7.0.

## 4.7.0

*   ADDED: XMod Pro Exchange integration. Now you can browse the free community exchange of solutions, forms, templates, and feeds and install many of them directly from within XMod Pro's Control Panel.

*   ADDED: `ShowIf` property on the form Panel tag to allow hide/show functionality based on basic value expressions.

*   ADDED: Enable ControlDataSource to use stored procedures. Specify `CommandType="StoredProcedure"`.

*   ADDED: Chrome/FF/Opera users can resize the form builder editing area; Sorry IE and Edge Users.

*   ADDED: Multi-form: Dynamically load form from Add/Edit buttons/links/images. These controls now have a `Form` property which takes the name of the form to load.

*   ADDED: FormBuilder: New controls are now inserted above the validation summary if one exists.

*   ADDED: `[[Module:Title]]` token to list of tokens available in the form/template editor toolbars.

*   FIXED: `<xmod:ScriptBlock>` tag designer (template) does not render the BlockType property.

*   FIXED: Typo in template editor designer for DataCommand. ConnectionSring should be ConnectionString.

*   FIXED: Send Email Action in Form Builder does not save BCC, CC, and ReplyTo attributes.

*   FIXED: Global Forms will not save in global folder when created without using Formbuilder.

*   FIXED: `<xmod:LoadFeedLink>` and `<xmod:LoadFeedImage>` do not render.

*   FIXED: `<xmod:LoadFeedImag>e` Throws Error if No Image URL.

*   FIXED: InlineEditor: ControlDataSource, SelectCommand, SubmitCommand designers do not load DNN database tables.

*   FIXED: InlineEditor: Label and ControlDataSource do not show their tag designers.

*   FIXED: Editor: Re-instate JS syntax highlighting for jQueryReady blocks.

*   FIXED: FormBuilder: DataSource defaults to DNN DB tables when in edit mode even when it wasn't previously selected.

*   FIXED: FormBuilder: Datafield dropdowns retained values from previous form in some cases.

*   FIXED: AddButton, UpdateButton, CancelButton: Error when using Ampersand in Text within the form builder.

*   FIXED: FormBuilder: Not saving the DataType of the validator for <Validate Type="Range" />

*   FIXED: User is signed out on multi-portal sites when feed is called without passing `portalid=#`. (LoadFeed, FeedButton|Link\Image)

*   FIXED: FormBuilder: Theme selection does not stay after initial form save

*   FIXED: Feed ViewRoles should allow commas in addition to semi-colon separators.

*   FIXED: Custom Form Action errors not being processed from external DLLs.

*   FIXED: TabStrip did not honor Font-Underline, Font-Overline, Font-Italic.

*   FIXED: AddToRoles form tag does not respect the IF property when UserId or RoleNames are not valid.

*   FIXED: RemoveFromRoles form tag did not respect the IF property.

*   FIXED: `[[DateAdd:...]]` token did not render current time when retrieving current date/time. `[[DateAdd:0,d,MM/dd/yyyy hh:mm:ss]]`

*   FIXED: Tooltip Property on Redirect button broken.

*   FIXED: Integer Output parameters being treated as Strings (requiring a Size be set) not Integers.

*   FIXED: EditButton and EditImage caused validation error when using Ajax and SearchSort.

*   FIXED: CheckBox Validator displayed as static when it should have been dynamic by default.

*   FIXED: Duplicate "OnClientClick" attributes displaying in form and template editor dialogs.

*   FIXED: Checkbox did not show as checked when form attribute is set to true.

*   FIXED: Output parameters from stored procedures cannot be POST'ed as part of a `<Redirect>` tag.

## 4.6.5

*   ADDED: Custom Commands now accept Stored Procedures.  

*   FIXED: Issue where search controls would appear even though no FilterExpression or Search had been specified. I.e. if just Sort properties were specified, the Search box would still appear.  

*   FIXED: Inability to turn off Prev/Next Links.  

*   FIXED: Typo in 4.6.0 install manifest where it reported a version of 4.5.99.

## 4.6.0

*   ADDED: `<xmod:Each>` tag. This enables you to split a delimited string and iterate through each one, rendering out HTML for each on. You can use the following child template tags to achieve the layout you want: `<FirstItemTemplate>`, `<LastItemTemplate>`, `<ItemTemplate>`, `<AlternatingItemTemplate>`, `<SeparatorTemplate>`. Additionally, in each template, you can use the following placeholders: `{index}` (1-based number of the item); `{count}` (the total number of items); and `{value}` (the text of the item).  

*   ADDED: `<xmod:NavigateUrl>` tag. This allows you to call the DNN API function NavigateUrl to produce URLs based on the site's configured URL provider. You can specify the following properties: TabId and ControlKey. The tag also allows child `<Parameter Name="..." Value="..." />` tags to pass URL Parameters to the NavigateUrl function.  

*   ADDED: Code Folding! The code editors now support collapsible code blocks making it easier to navigate longer forms, templates, and feeds. Click the arrows in the gutter or hit CTRL+Q.  

*   ADDED: Custom module settings (`[[Module:settingName]]`) can now contain tokens. This allows you another layer of abstraction to achieve a more dynamic template. For instance, you could create a module setting named "ItemKey" with a value of `[[Url:prodId]]`. In your `<ListDataSource>`, you could have a `<Parameter Name="id" Value='[[Module:ItemKey]]' />` tag. At run-time, this would evaluate to: `<Parameter Name="id" Value='[[Url:prodId]]' />` allowing you to specify different URL parameters on different module instances, but still using the same Template.  

*   ADDED: AddUser Action: System-defined Verification Email now automatically sent for Verified registration types. SendVerificationEmail is now ignored.  

*   ADDED: AddUser Action: System-defined Public registration Email is now automatically sent for Public registration types.  

*   ADDED: AddUser Action: System-defined Private registration Email is now automatically sent for Private registration types.  

*   ADDED: AddUser Action: If Send User Registration Notifications is enabled for the site, the Administrator will get the System-defined Admin registration Email.  

*   FIXED: In some cases, registration verfication emails aren't sent.  

*   FIXED: Control Panel toolbar buttons wrapping in some versions of DNN. FIXED: Issue where the Form Preview in Manage Forms would not work until after a form had been edited first.

## 4.5.4

*   ADDED: `[[Page:FullUrl]]` token

*   FIXED: FirstLastCssClass, PrevNextCssClass properties of template's `<Pager>` tag not being set.

*   FIXED: Link Pager did not correctly set default page info parameters.

*   FIXED: Delete Confirmation incorrectly added to Add, Edit, and Detail buttons when generating templates.

*   FIXED: Multiple Return Buttons added to Detail View template.

*   FIXED: Removed DEBUG logging to Exceptions log (v 04.05.04)

*   FIXED: JOIN() token throws Conversion from type 'DBNull' to type 'String' exception when one of the fields being used had a NULL value.

*   FIXED: Control Panel toolbar layout issue in DNN 7.2.

*   FIXED: Fixed links that display when module is not configured. Links to support and other areas now reflect the current URLs.

*   FIXED: Date format type does not show up in list of available formats in Format tag's designer.

*   FIXED: Removed unnecessary span tag from <xmod:Redirect> rendering.

## 4.5.3

*   FIXED: Invalid Object 'ModuleDefinitions' in some DNN installs.

## 4.5.2

*   FIXED: Manage Forms/Manage Templates pages wouldn't load in DNN 6.x

## 4.5.1

*   FIXED: New Template Button non-responsive on Manage Templates Page.

## 4.5.0

*   ADDED: SEO-Friendly Pager called "HyperlinkPager". Set the `<Pager Type="Hyperlink" />` and it will use it, passing the page, search, and sort information via the URL. Note that each click on the pager is a brand new request of the server just like any HTML hyperlink. So other modules on the page may lose their state. This pager should be used if your priority is crawlable results.  

*   ADDED: Manage Forms and Manage Templates grids now have a new column that shows whether a form/template is in-use on the site. This feature is not available for global forms/templates or for feeds.  

*   ADDED: You can now have server-side-only comments. The syntax is: [-- your comment here --] Comments can span multiple lines and can comment-out server-side code.  

*   ADDED: Overridable `<AddUser>` error messages for: `ErrMsgDuplicateEmail`, `ErrMsgDuplicateUser`, `ErrMsgDuplicateUsername`, `ErrMsgInvalidEmail`, `ErrMsgInvalidPassword`, `ErrMsgInvalidUsername`.  

*   ADDED: Overridable `<UpdateUser>` error messages for: `ErrMsgUserNotFound`, `ErrMsgInvalidPassword`, `ErrMsgOther`.  

*   ADDED: Granular CSS classes to `<Pager>`: `FirstPageCssClass`, `NextPageCssClass`, `LastPageCssClass`, `PrevPageCssClass`, `CurrentPageCssClass`.  

*   ADDED: Encoding property to Feeds. It Defaults to UTF-8.  

*   ADDED: Auto-generation of an `OnClientClick` delete confirmation dialog when generating a template.  

*   ADDED: Auto-generation of an `<xmod:ReturnLink>` tag in DetailTemplates created by template generator.  

*   FIXED: `<SilentPost>` tag only worked for logged-in users.  

*   FIXED: `<UpdateUser>` tag had no `<Property>` child tag.  

*   FIXED: `<NoItemsTemplate>` now respects permissions set in the `<xmod:Template>` tag.  

*   FIXED: "Item has already been added" exception when copying a page with XMod Pro on it.  

*   FIXED: Exception thrown when editing a record using a FormView if the value of a field was NULL.

## 4.4.0

*   ADDED: SQL Azure Compatibility  

*   ADDED: New `<Include>` and `<xmod:Include>` tags that allow you to inject raw text into the page. Very handy for inserting often used HTML snippets or shared blocks of text/html/script. (Idea Credit: Patrick Ryan)  

*   ADDED: Enabled `[[ConnectionString:connStrName]]` tokens in FormBuilder, TemplateBuilder, and FeedBuilder.  

*   ADDED: Database Tools page will now automatically create a Clustered Primary Key Index on the first Identity field it finds. This is good in general for performance of the table, but it's also required for SQL Azure compatibility.  

*   ADDED: You can now use pipe (`|`) characters in your module settings by escaping them as double pipes (`||`) (Idea Credit: Ryan Moore)  

*   ADDED: Properties for Error Message Overrides in AddUser form Action. Messages for:  
    `ErrMsgLoginFailed`, `ErrMsgNotApproved`, `ErrMsgLockout` (Idea Credit: Gijs Versteeg)  

*   FIXED: FormBuilder validator doesn't handle AddUser tag that doesn't have ID or Label.  

*   FIXED: Form's EditSuccessTemplate did not render stored procedure output parameters. (Bug Credit: Ken Lundy)  

*   FIXED: Converting from Auto-Layout Form introduces an errant comma in the CSS.  

*   FIXED: Converting from Auto-Layout Form introduces a redundant line of CSS.  

*   UPDATED: Colorbox to 1.4.26 (drops support for IE6) fixes many issues with jQuery 1.9+ changes.

## 4.3.0

*   ADDED: JSON output in XMod Pro Feeds via the new `<xmod:JsonFeed>` tag.
*   ADDED: Snippets. Text Editors now have access to a user-definable set of code snippets which you can create and insert into your forms, templates, and feeds.
*   ADDED: new MetaTags child tag - `<Redirect Delay="integer" Url="string" />`. This allows you to insert a 'refresh' meta tag that redirects to another URL. This can also be placed inside an `<xmod:Select>` tag so the redirect can be conditional based on data.
*   ADDED: FormBuilder now allows you to select which Database columns you want to include in the form.
*   ADDED: FormBuilder will now optionally attempt to add validation to the controls it creates based on the columns in your selected table. It will add Required Field validators to columns that do not allow nulls and will add data type check validators for certain data types. As with any automated process, you should double-check to ensure the added validators meet your data input needs.
*   ADDED: ControlDataSource to text editor of forms. This allows you to choose the table and columns as well as sorting.
*   ADDED: SendVerificationEmail property to `<AddUser>` tag in forms. When True, this will trigger DNN to send a verification email to the user.
*   ADDED: SelectCommand to form text editor which allows selection of DNN or External DB tables.
*   ADDED: SubmitCommand to form text editor which allows selection of DNN or External DB tables as well as choosing a key field. Users can select to generate an INSERT or UPDATE command.
*   ADDED: Ability to use "." as the target in `<xmod:Redirect>` tags which can be used as a shortcut for the current page. This makes it easy to postback to the same page without having to specify a URL.
*   ADDED: form, template, and feed editors in the control panel will auto-expand to accommodate longer files.
*   ADDED: Text editors auto-close tags.
*   ADDED: Mixed syntax highlighting for html, Javascript, and CSS in text editors.
*   ADDED: Better mouse handling when hovering over form builder canvas.
*   ADDED: `[[User:LastLoginDate]]`, `[[User:CreatedDate]]`, `[[User:Website]]` tokens.
*   ADDED: Form FileUpload control, when using the FileUploadAndSelect DisplayMode, will display the File browser control instead of the user having to click a button to show it.
*   ADDED: Form FileUpload control, when using FilePicker mode, the initial "Upload" link that is clicked to display the file browser control, no longer posts back. Requires jQuery on the page.
*   ADDED: More tags and tokens to editor drop-downs.
*   ADDED: `[[Page:Name]]`, `[[Page:Title]]`, `[[Page:Id]]` tokens (idea credit: Kenneth Blue).
*   ADDED: User tokens and Portal Tokens to Feeds. These are available ONLY IF the feed is being called within a current DNN session.
*   FIXED: When using the DateInput form control, setting the DataType to Date (and the corresponding DataField to a column with a Date data type) would not allow dates earlier than 1/1/1753.
*   FIXED: When creating a new non-FormBuilder form, if you enter an invalid form name, you are unable to change the name.
*   FIXED: Template text editor: Closing tag not rendered correctly for xmod:LoadFeedLink/Button/Image
*   FIXED: Dependent Dropdown list controls throw error when placed inside a `<Tabstrip>` (Thanks to Richard Evans)
*   FIXED: IfEmpty and IfNotEmpty tags do not play well with tokens.
*   FIXED: SubmitCommands and SelectCommands not rendered in EditForm when using External source with manually created form.
*   FIXED: SubmitCommands and SelectCommands not rendered with ConnectionString when using External source with manually created form.
*   MINOR CHANGE: Increased FormBuilder control designer width to 480px from 400px.
*   MINOR CHANGE: Set TabSize in text editors to 2. It was 4.
*   MINOR CHANGE: Save and Cancel button on ModuleSettings and FormView ModuleSettings now use dnnPrimaryAction and dnnSecondaryAction CSS class names.

## 4.2.0

*   ADDED: CommandButton now works in NoItemsTemplate. You can use non-Field Tokens. (change made in Template.vb)
*   ADDED: Add Redirect Property to Command buttons (`<xmod:CommandButton/Image/Link>`). No POST values can be passed, but you can use `.` as the Redirect url and can do the redirect via GET or POST.
*   ADDED: `[[DateAdd]]` token now allows output of time component (`HH:mm:ss`).
*   ADDED: `<xmod:IfEmpty>` and `<xmod:IfNotEmpty>` template tags which will render their contents if the Value property is empty/not there or not empty/exists, respectively.
*   ADDED: Ability to override the default FormView mode (i.e. show AddForm or EditForm) via a URL parameter: "xmfvo". When this is set to "1", the module will display the AddForm. When it is "2" the EditForm will be displayed.
*   ADDED: Added DateAdd token and more User tokens to text editor toolbars.
*   ADDED: Tooltip property to `<xmod:ToggleLink>`
*   ADDED: Placeholder property to `<TextBox>` and `<TextArea>` This allows you to provide the user with informational text inside the control when it is empty. When the control receives focus, the placeholder text will disappear. When the control loses focus, if the control's value is still empty, the placeholder text will re-appear. The placeholder text is a usability component that exists on the user interface only. It does not get sent to the database if the control is empty when the form is submitted. NOTE: This will only work on HTML5-capable browsers that support this feature. All other browsers will simply ignore it.

## 4.1.2

*   FIXED: `<DualList>` form control - when removing items from the 2nd list during record edit, an EventValidation error would be thrown in DNN 5.6x and up.
*   FIXED: Checkbox list tag designer doesn't populate list items correctly.
*   FIXED: Manage Feeds - feed builder doesn't generate code.
*   FIXED: Unable to delete a feed in Manage Feeds page.
*   FIXED: Template Editor - `<SearchSort>` tag designer does not include DisplayTemplate if one has been defined.
*   FIXED: Additional form themes were not installed.
*   FIXED: Template Editor - `<xmod:jQueryReady>` tag designer didn't function correctly.
*   FIXED: Manage Templates - Unable to set name for new template after editing a template.
*   FIXED: Inline Editor - the "format all" button didn't work. It did work in the Control Panel editors.

## 4.1.1

*   FIXED: `[[DateAdd]]` token threw an exception when used in templates.
*   FIXED: Depended List with 2 or more dependent lists would throw an exception.
*   FIXED: FormBuilder's RadioButtonList throws 'object undefined' error when adding it to the form.

## 4.1.0

*   ADDED: "If" property to `<AddToRoles>` tag. This allows for conditionally adding roles to users.  

*   ADDED: `<AddUser>` tag now passes the newly created user downstream as `__UserId`. So, you can reference the new ID in `<AddToRoles>`, for instance and add roles (conditionally if needed) to the newly created user.  

*   ADDED: `<AddToRoles>` has 3 new properties: `StartDate`, `EndDate`, and `Culture` which allow you to specify a time frame the user should be in a certain role. Culture is used to specify that the dates are in a format other than the current system's culture.  

*   ADDED: Inline editor now displays the name of the form/template you're editing.  

*   ADDED: FormBuilder's ControlDataSource designer now allows you to choose a column to sort on and specify the sort order.  

*   ADDED: New DateAdd token. The token allows you to return a date relative to the current date. You can specify an interval such as day, week, month, or year and the number of that interval to add to the current date. A positive number will net you a date in the future. If you use a negative number, you'll get a date in the past. You can also specify a format that will be used when generating the date.  

*   ADDED: Forms can now specify a ScrollToTop property. When this is true, when the user clicks the Add or Update button, the browser will scroll to the top of the page on page load rather than trying to scroll to the bottom of the form. This is handy if you have a long form or a lot of content that you replace with a SuccessTemplate. It can help prevent the view from being less jarring to users.  

*   FIXED: `<AddToRoles>` did not properly recognize the UserId property.  

*   FIXED: Issue where users could not convert forms from Auto-Layout to Custom HTML when working with Global forms.  

*   FIXED: Issue where `<Login>` tag's RememberMe property would not accept a field token as its value.  

*   FIXED: Issue where `<AddUser>` tag's Approved property wouldn't accept a field token as its value.  

*   FIXED: Issue where `<AddUser>` tag's UpdatePasswordOnNextLogin property wouldn't accept a field token as its value.  

*   FIXED: Issue where a `<DateInput>` tag that was set to DateOnly=True or had its DataType set to Date and did not specify a Format would display the time component if it was bound to a data value.  

*   FIXED: The `<Validate>` tag designer in the text editor generated validate tags with a missing "=" for the Message property.  

## 4.0.3

*   FIXED: Issue where `<AddUser>` didn't save some properties on a new user when used on non-root portals.

## 4.0.2

*   ADDED: New CheckboxList validator (`<Validate Type="CheckboxList" />`) which will validate that a checkbox list control has at least one checkbox ticked.  

*   ADDED: Handling for Global forms in FormView module.  

*   FIXED: `<UpdateUser>` tag wouldn't update Password.  

*   MODIFIED: `<UpdateUser>` tag to remove the "Password" property. It has been replaced by the "NewPassword" property. Additionally, an "OldPassword" property has been added.  

*   FIXED: Improved end-user error reporting from the `<UpdateUser>` tag for bad passwords.  

*   FIXED: FormBuilder UI issues preventing tag designers for `<AddUser>`, `<Login>`, and `<RemoveFromRoles>` tags from appearing.  

*   FIXED: `<UpdateUser>` tag's designer output javascript when generating the tag.  

*   FIXED: `<AddUser>` tag's designer generated improperly closed tag.  

*   FIXED: Issue where the "." shortcut for redirects only worked in `<Redirect>` tags and not in Add/Update/Cancel buttons in form.  

## 4.0.1

*   FIXED: Installation issue with some missing files on DNN 5.4 and earlier.  

*   FIXED: Paging issue where if a record was deleted on the last page an empty resultset would be displayed rather than the previous page.  

*   FIXED: issue where Select tag designer would put Else child tag as a property of the `<xmod:Select>` tag rather than as a child tag.  

*   FIXED: Pager Tag Designer generates "on" instead of "true/false"  

*   FIXED: Email designer putting "SendRule" property in `<Email>` tag for form text editor  

*   FIXED: Compare Validator's DataTypeCheck operator doesn't function correctly.  

*   FIXED: Issue with `<UpdateUser>` tag's UserId property would not accept field tokens. It would throw a compilation error.  

## 4.0.0

*   ADDED: `<AddToRoles>` Action to forms. You can now add a user to one or more DNN security roles on successful form submission.  

*   ADDED: `<RemoveFromRoles>` Action to forms. You can now remove a user from one or more DNN security roles on form submission.  

*   ADDED: `<AddUser>` Action to forms. This action enables you to register a new user in the DNN site upon form submission and assign some roles to that user. It provides a basic set of properties such as FirstName and Address but also allows you to specify custom profile properties too.  

*   ADDED: `<UpdateUser>` Action to forms. This action enables you to provide users with the ability to edit their user information.  

*   ADDED: `<Action>` Custom Action tag to forms. Now you or a developer can build custom actions that get executed when a form is successfully submitted and any data saved to the database. The custom action is even able to modify or add form values that can be used by other Actions that execute later in the sequence, including `<Email>` and redirection. So, you can dynamically modify the content of an email and or change the destination for a redirection.  

*   ADDED: DNN Search Integration. Now you can specify a SQL command that gets executed when DNN indexes your XMod Pro module instance. You're able to integrate field tokens with plain text to populate the Author, Title, Synopsis, etc. that DNN indexes and displays to end users during a site search.  

*   ADDED: The `<xmod:Redirect>` tag can now be used in AddSuccessTemplate and EditSuccessTemplate tags. This allows you to use formvalues and values returned from stored procedures to create a link/button/clickable image that can be POST'ed to other pages.  

*   ADDED: Edit forms no longer require a SubmitCommand. This allows you to more easily create forms that can display, say, the details of a record and then send that record via Email or Redirect the user and data to a different target without having to put a 'dummy' SubmitCommand in the form.  

*   ADDED: Ability to use Stored Procedure Return values in Add/EditSuccessTemplate tags.  

*   ADDED: Ability to use stored procedure OUTPUT parameter values in Add/EditSuccessTemplate tags as well as in redirects.  

*   ADDED: New `<Validate Type="Database" />` tag to forms. Only one is recognized per form. Use it to display error messages returned from the database. These can be actual errors raised from the database or friendly error messages passed back from a stored procedure.  

*   ADDED: New `<Validate Type="Action" />` tag to forms. Only one is recognized per form. Use it to display error messages returned from special action tags like `<AddUser>`. This validator allows you to display more mundane errors like a "username already exists" error to the user so he/she can correct it.  

*   ADDED: In forms, if are using a stored procedure in your SubmitCommand and you set an OUTPUT parameter to have a name of ERROR and it is not null or empty, XMod Pro will treat it as if an error were thrown. It will display the error to the end user using the `<Validate Type="Database" />` tag if available and will not continue processing. One use case: if you have a form that allows the user to create a new profile and profile name. You can do a check in your stored procedure to see if that profile name already exists and, if so, return a message to the user to pick another profile name. Even though no error was technically thrown, XMod Pro will treat it as such.  

*   ADDED: `[[Request:PageName]]` token which returns the name of the current page without the file extension.  

*   ADDED: Ability to specify a comma-delimted list of Target Control ID's to `<DropdownList>` form control. This allows one list to dynamically populate multiple list controls. Previously it could only control one other list control.  

*   ADDED: `<SilentPost>` action to form. This has one property: Url and optional `<Field>` child tags. Each field tag has a Name and Value property. SilentPost will send an HTTP POST to the Url and send the specified field names and values without redirecting the user.  

*   ADDED: `<Redirect>` Conditional Redirects to form. Using the one or more of the new `<Redirect>` tags and their If property, you can set up a list of possible targets to redirect the user to and based on values from form, determine where to direct the user after form submission.  

*   ADDED: `<AddToRoles>`, `<Redirect>`, `<Text>`, and `<Label>` tags to the Formbuilder UI.  

*   ADDED: Ability to choose which columns to include in a template when generating the template using the Template builder.  

*   ADDED: Form Builder UI: RadioButtonList and CheckboxList can now have their RepeatColumns, RepeatDirection, RepeatLayout, and SelectedItemsSeparator set in their respective tag designers.  

*   ADDED: ReplyTo property to `<Email>` tag.  

*   ADDED: ReplyTo, CC, and BCC properties to the FormBuilder UI for the `<Email>` tag  

*   ADDED: Ability for `<ControlDataSource>` to easily retrieve a list of users, pages, roles, or countries using the DNN API rather than from direct database calls. To use this, set the Source property of the tag to `DNN` and set the CommandText to: Users for a list of users in current portal, Roles for a list of roles in current portal, Pages for a list of pages in the current portal, and ListCountries for al list of countries contained in DNN's Lists table.  

*   ADDED: New `<xmod:AjaxButton>`, `<xmod:AjaxLink>`, and `<xmod:AjaxImage>` tags for templates. These will render as a button, hyperlink, or image respectively. When clicked, it will execute a jQuery.ajax call to the URL specified in the Url property and insert the HTML results into the DOM element specified in the Target property. Use any jQuery selector for the Target property. The tags also provide the ability to specify an image to display while waiting for a response (LoadingImageUrl) and that image can be styled using the LoadingImageCssClass property.  

*   ADDED: New `<AjaxButton>`, `<AjaxLink>`, and `<AjaxImage>` tags for forms. These will render as a button, hyperlink, or image respectively. When clicked, it will execute a jQuery.ajax call to the URL specified in the Url property and insert the HTML results into the DOM element specified in the Target property. Use any jQuery selector for the Target property. The tags also provide the ability to specify an image to display while waiting for a response (LoadingImageUrl) and that image can be styled using the LoadingImageCssClass property.  

*   ADDED: New `<xmod:jQueryReady>` tag. This tag provides a convenient way to place your code inside a jQuery(document).ready() function and embed it in the page. Importantly, the script will be placed near the bottom of the page for better perceived load time and will also be placed inside a closure so that your script's scope is protected and so that you can use the shorthand "$" instead of jQuery. By using this tag, you also do not have to add `<script>` tag or register your script in the page via a ScriptBlock tag - as that is handled for you behind the scenes.  

*   ADDED: New `<jQueryReady>` tag for forms. This tag provides a convenient way to place your code inside a jQuery(document).ready() function and embed it in the page. Importantly, the script will be placed near the bottom of the page for better perceived load time and will also be placed inside a closure so that your script's scope is protected and so that you can use the shorthand "$" instead of jQuery. By using this tag, you also do not have to add `<script>` tag or register your script in the page via a ScriptBlock tag - as that is handled for you behind the scenes.  

*   ADDED: New `<xmod:LoadFeed>` tag. This makes it a cinch to pull an XMod Pro feed directly into your page. Simply specify the feed's name and the HTML element you want to fill with the results. Everything else is taken care of. Should you desire, you can specify a progress or "loading" image as well as send additional data to the feed.  

*   ADDED: New `<xmod:LoadFeedButton>`, `<xmod:LoadFeedImage>`, and `<xmod:LoadFeedLink>` template tags. These buttons simplify including the results of an XMod Pro feed directly into your page using AJAX. The feed is loaded when the user clicks the button/image/link. Additionally, these tags provide an ability to implement "Infinite Paging" in which clicking the button will return, say 10 results and add them to the existing list of results. If the button is clicked again, another set of 10 results will be added to the existing list. Like the `<xmod:LoadFeed>` tag, you have the option of specifying a "loading" image.  

*   ADDED: Inline Editor now expands to cover more screen when viewed on larger monitors.  

*   ADDED: Property to `<Pager>` in Templates called ScrollToTop. When True (the default setting), the page will scroll to the top when changing pages rather than the default DNN behavior of maintaining scroll position. This will provide users with a more natural interaction when viewing long lists. NOTE: This only occurs if the user clicked on the bottom pager since, presumably, clicking there means the user is at the bottom of a long list. If the top pager is clicked, the scroll position is maintained because the user would expect to maintain his/her position.  

*   ADDED: New ViewRoles property to `<xmod:Feed>` tag. This allows you to specify one or more comma-delimited DNN security roles. When specified, XMod Pro will check to see if the user is in one of the roles before rendering the feed. If the request is coming from outside a DNN session, the feed won't be rendered. Feeds will be rendered if the request is coming from a Host/SuperUser or the Administrator account.  

*   ADDED: `<DropdownList>` control's TargetControlID and TargetDataControlID properties can now accept more than one value, separated by commas, enabling a drop-down list to update the data and values of multiple list controls.  

*   ADDED: Inline Editor now saves your results via AJAX without dismissing the dialog. This gives you the opportunity to save your work and continue editing. An example workflow is to have the editor displayed in one browser tab with the page also open in another tab. Then, you can save your work, switch tabs, preview your changes, switch back to the editor tab and continue editing as needed.  

*   ADDED: Email can now be sent if SSL is set in your DNN site settings.  

*   ADDED: You can make forms and templates accessible to all portals on your website with Global forms and templates.  

*   ADDED: New form Action tag called `<Login>`. This tag enables you to create custom login forms for your DNN website.  

*   ADDED: Redirection in forms now accept "." a shortcut to the current page. You can specify this as the Target property (or the Redirect property on buttons).  

*   MODIFIED: For better consistency with other areas of XMod Pro, the AddRoles, EditRoles, DeleteRoles, and DetailRoles properties of the `<xmod:Template>` and `<xmod:DataList>` tags now accept comma-delimited roles. For backward-compatibility, semi-colon-delimited roles are still accepted but are officially deprecated.

## 3.1.2

*   FIXED: Issue where error would be thrown in a DataList when clicking to view the detail of a record. This occurred only when UsePaging on the DataList was set to False. Thanks to Jack Dunn for finding this.

## 3.1.1

*   FIXED: In Template tag and DataList tag, when Ajax was set to true, a parsing error would be thrown when trying to click a Redirect button in the NoItemsTemplate.  

*   FIXED: `<TextArea>` HtmlEncode property did not work correctly.

## 3.1.0

*   ADDED: `[[User:Photo]]` token support for DNN 6. It returns the URL to the user's profile picture.  

*   ADDED: Date SQL Server date data type for those versions of SQL Server that support it  

*   ADDED: Support for TinyInt SQL data type (values of 0-128). When linking to a TinyInt column, use "Byte" as the DataType in your form's control.  

*   ADDED: Support for SmallInt SQL data type  

*   ADDED: Support for XML SQL data type for those versions of SQL Server that support it. Use the String XMod Pro control data type and consider adding the new XML Validate tag.  

*   ADDED: Support for UniqueIdentifier SQL data type. NOTE: You must validate your input is in the proper GUID format or you'll get a database error.  

*   ADDED: Support for DateTime2 SQL data type for those versions of SQL Server that support it. This is a larger data type that holds a greater range of dates. Use DateTime as the XMod Pro control DataType.  

*   ADDED: XML Validate Tag for use in validating basic well-formed XML.  

*   ADDED: "DateOnly" property to DateInput control. When True, the control will only process the date component of the entered value. If the data type in the database is DateTime, the time component will be 12:00:00 AM.  

*   ADDED: Ability to set a form control as Nullable in the FormBuilder. This allows you to specify that an empty value in the control will be passed to the database as a NULL and NULL values coming from the database will result in the control being empty.  

*   ADDED: DateInput form control now will be empty when first loading if no value is supplied.  

*   ADDED: FileUpload control now displays 'new file' button after an upload - per customer request.  

*   FIXED: Database Tools issue - when creating a new table, specifying a default value for a column wouldn't work.  

*   FIXED: Some issues when using the Redirect property on form buttons as well as an issue where a record could only be added once per user session.  

*   FIXED: Event Validation error when using DualList form control, spawned by change in DNN 5.6.3 and later which enabled event validation.  

*   FIXED: Event Validation error when using Custom Module Settings feature available on the module configuration page, spawned by change in DNN 5.6.3 and later which enabled event validation.  

*   FIXED: `<Variable>` tag values now work with `<SelectCommand>`'s in forms.

## 3.0.7

*   FIXED: Implement a fix for when a record is added via the New Record button in a template and the user then reloads the page. The result is that the form is submitted again, resulting in a duplicate record.  

*   FIXED: When external table is selected in wizards and builders, columns do not show up for selection in some cases.  

*   FIXED: Email form tag. If a FileUpload control is used for the Email's Attachment property but no file has been uploaded, an exception is thrown.  

*   FIXED: Cookie Token - If the cookie name contained periods or dashes, the cookie token would not function.

## 3.0.6

*   FIXED: Issue in DualList form control where SelectedItemsSeparator property did not work  

*   FIXED: Issue in DualList which prevented values from being saved correctly to the database.  

*   FIXED: Issue in DualList where if the control was inside a tab, bound to a ControlDataSource and being used on the FormView when in EditMode, the control would not pre-select the record's values.  

*   FIXED: Issue in DualList where AppendDataBoundItems was not being respected.  

*   FIXED: Issue in DualList: Data returned in right-hand list (list 2) comes back in descending order, not the order in which the values appeared originally in the list box.  

*   FIXED: Issue in DualList: When editing a record, if the user does not interact with the control (i.e. select a new item), then the values are not saved.  

## 3.0.5

*   FIXED: Extra properties on RegEx, Compare, and Range Validators not persisted by FormBuilder.  

*   FIXED: Minor display issue in Validate tags designer tab. Saved validators now have proper captions.  

*   FIXED: Adjusted width of validator list to accommodate width of "Regular Expression".  

*   FIXED: Issue where Tokens in Add/Update/Cancel button/image/link tag properties like Text wouldn't get processed.  

*   FIXED: Issue where a TRIAL license, after expiration, could not be activated as a normal license because the fields to enter account and invoice were hidden.  

## 3.0.4

*   FIXED: Issue where changes made to a copied form were reflected in the original form instead.

## 3.0.3

*   FIXED: Unable to rename forms in Manage Forms page.  

*   FIXED: Renaming an Auto-Layout form may make it un-editable.  

## 3.0.2

*   FIXED: IE8-only issue where form builder control designers wouldn't appear.
*   FIXED: IE8-only layout issue in form builder control designers.
*   FIXED: Issue in License/Activation page which may prevent activation on some systems.

## 3.0.1

*   FIXED: Auto-Layout conversion link would not appear in the Form Manager Grid on some systems.
*   FIXED: Issue where Control Panel toolbar would appear very narrow in some skins.

## 3.0.0

*   ADDED: New Form Builder as part of the Manage Forms page. The Form Builder allows you to easily design and edit attractive data entry forms (called Auto Layout forms within XMod Pro). The new form builder can also work with external SQL server tables outside the DNN database.  

*   ADDED: Ability to generate feeds and other types of templated export of your data. Now you can generate XML, comma-delimited, or other types of output in the same way you create list views (i.e. templates).  

*   ADDED: Custom Data Commands to templates. Now you can trigger other types of data commands in your templates like approving a record, triggered from a button, link, or clickable image.  

*   ADDED: Ability to convert Auto-Layout forms (form builder forms) to custom HTML forms with a single click, while preserving the original form.  

*   ADDED: Date Modified and Date Created columns to the Manage Forms, Manage Templates, and Manage Feeds grids.  

*   ADDED: Ability to sort grids in the Manage Forms, Manage Templates, and Manage Feeds grids by clicking column headers.  

*   ADDED: Ability to use external SQL Server tables and views in the form, template, and feed editors.  

*   ADDED: AppendDataBoundItems property to the DualList form control.  

*   ADDED: New Cookie token to use the value of cookies in your forms and templates.  

*   ADDED: Theme CSS stylesheets no longer have to be named with the 1.7.2 jQuery UI version number. Instead, just ensure there is only one CSS sheet in the theme's directory.  

*   ADDED: In-app video tutorials (requires internet access).  

*   REMOVED: Final vestige of DevExpress controls within the application. XMod Pro should no longer present DevExpress versioning issues. Old DevExpress DLL's that were only used by XMod Pro may be removed. Of course, if other modules rely on them, they shouldn't be removed.  

*   FIXED: Issue where Inline Editor window would pop-up but the animated "loading" graphic would never be replaced by the actual editor. This issue only appeared when both a standard XMod Pro module and an XMod Pro FormView module were on the same page.

## 2.7.7

*   FIXED: Validation wouldn't work in `<Panel>`
*   FIXED: `<xmod:Redirect>` wouldn't work when template/datalist was set to use Ajax.

## 2.7.6

*   FIXED: `<xmod:Redirect>` tag's POST method wasn't functioning correctly after 2.7.3 changes.

## 2.7.5

*   FIXED: `<Variable>` values set by tokens didn't work.
*   FIXED: `<xmod:Format>` tag's MaxLength property didn't function correctly.

## 2.7.4

*   FIXED: `<AddButton>` in `<AddForm>` of main XMP module would not POST form values. An `<AddButton>` in a FormView module would.
*   FIXED: `<UpdateButton>` in `<EditForm>` of main XMP module would not POST form values. An `<UpdateButton>` in a FormView module would.
*   FIXED: `<CancelButton>` in `<AddForm>` of main XMP module would not POST form values. A `<CancelButton>` in a FormView module would.

## 2.7.3

*   FIXED: Enabled redirecting to work for CheckBoxList - so that it passes its item values instead of it previously sending a series of "on" values. This required a significant change to the way redirects are handled on the backend and may impact existing users.
*   FIXED: Pager did not respect setting for ShowFirstLast and ShowPrevNext.
*   FIXED: FormView does not process user-defined Module Settings.
*   FIXED: Issue where DetailDataSource was using the same CommandType as the ListDataSource. This may have manifested as an error: "Could not find stored procedure ''." if your ListDataSource was a stored procedure but your DetailDataSource was not.
*   FIXED: Added fix for ToggleLink/Button/Image - When Target is calculated (i.e. it uses tokens), the value is lost when the page is posted back from a different module (i.e. paging through a second XMP module on the page).

## 2.7.2

*   FIXED: FileUpload form control - 'object reference not set' error when DisplayMode was set to FilePicker and a file was uploaded
*   FIXED: FileUpload form control - Drop-down file picker list did not refresh to add the newly uploaded file to the list.
*   FIXED: DNN manifest should now correctly show a version of 02.07.02 for this version.
*   FIXED: Form Editor - AddImage/CancelImage/UpdateImage helpers misspelled "AlternateText" property name.
*   FIXED: Template Editor - ListDataSource/DetailDataSource/DeleteCommand helpers misspelled "Parameter"
*   FIXED: Template Editor - AddImage/ReturnImage/ToggleImage helpers misspelled "AlternateText" property name.

## 2.7.1

*   FIXED: [[Localize]] tag not functioning
*   FIXED: Compare validator not recognizing the CompareValue property.
*   FIXED: Unable to preview a template in the Manage Templates page in some cases. User receives an 'object reference not set' error.
*   FIXED: No visual feedback in template that a record has been deleted.

## 2.7.0

*   ADDED: New `<Variable>` tag to forms. This allows you to specify a value to be used elsewhere in your form for configuration purposes or as additional data. The value can be bound to controls on your form and used in your data commands. Values of variables can be hard-coded or XMod Pro tokens like `[[Portal:ID]]`. See the AddForm/EditForm topic for details.  

*   ADDED: Module-level, user-defined settings. These are editable by Host users on the Configure screen. They are used like other tokens - `[[Module:settingName]]` where settingName is the name you give the setting. See the "Configuring Your XMod Pro Module" topic for details.  

*   ADDED: FileUpload form control now has an option to be a FilePicker with optional upload or a FilePicker with no upload option - in addition to the already implemented functionality.  

*   ADDED: Templates can now be auto-generated from Views in addition standard tables.
*   ADDED: Improved error reporting when trying to retrieve a record.
*   ADDED: Improved form editing on the Manage Forms screen as well as the Inline Editor for forms. When editing a form, the AddForm and EditForm appear in their own editors on their own tabs. This makes it much easier to identify and work with them.  

*   ADDED: Improved clarity of Host "Edit" panel. The configured form and template are now labeled as such and their order of appearance now matches the Manage Forms, Manage Templates order of appearance on the Control Panel screen's toolbar.  

*   ADDED: Slideshow and DataList to Quick Template Creator on Manage Templates screen. The Creator now pops-up in a dialog box.
*   FIXED: Unused Field Tokens in `<Email>` tags as well as in button redirects are now removed.
*   FIXED: Host "Edit" panel is now hidden when you set your DNN page to "View" mode.
*   FIXED: Issue where tabs on Configure page wouldn't render on some DNN 4.3+ installations.
*   FIXED: Localized Host "Edit" panel labels.

## 2.6.1

*   FIXED: "Object reference not set" error that occurred in forms with `<Email>` tags that didn't contain the SendIf attribute.

## 2.6.0

*   ADDED: AJAX to `<xmod:Template>` and `<xmod:DataList>` tags. By setting ' `Ajax="True"` ' on your tag, your view will have AJAX-enabled paging, search, sort, detail views, deletions, as well as commands (i.e. click a command button in one template and the content of another template will update without a page postback.). Important: All add, edit, delete, detail, and command buttons/images/links MUST have their ID specified in order to function correctly when AJAX is enabled.  

*   ADDED: Inline Editor now automatically resizes to fill available space. So, if you are working with a larger monitor you automatically get a larger editor in which to work without having to manually resize the editor.  

*   ADDED: Checkbox validator `<Validate Type="Checkbox" .../>`. Set the MustBeChecked property to True or False depending on whether checked or un-checked makes the control valid. The default value is True.  

*   ADDED: Basic conditional email sending by using the new SendIf attribute of the `<Email>` tag. This attribute does basic equality checking - text-only, ignoring case. It also evaluates field tokens [[FieldName]]. Just use `=` or `<>`. Example: `SendIf='[[Department]] = Sales'`  

*   FIXED: When deleting the last record on the last page, the entire template disappears. 
*   FIXED: Pager - First/Last links would not display if ShowFirstLast was set to true but no Pager Template was specified.
*   FIXED: Pager - Prev/Next would display even if ShowPrevNext was False if no Pager template was specified.
*   FIXED: `[[Module:TabId]]` token now works in templates. Previously it only worked in forms.

## 2.5.1

*   FIXED: Issue with Live Preview in Form Builder where theme previewing would not work due to Javascript error.

## 2.5.0

*   ADDED: New DataList View control. This control is used in the same manner as the standard Template control. It enables you to layout your records in a grid-like pattern. So, using the RepeatColumns property, you can specify that the control display three records in each row. Further, you can have the control display the records in a left-to-right, then top-to-bottom order or a top-to-bottom, then left-to-right.  

*   ADDED: New Slideshow View control. This control is used in the same manner as the standard Template control, except it is geared specifically to display a fading slideshow of images. All you have to do is supply it with a list of image URL's from your database.  

*   ADDED: `[[Request:Locale]]` token. This returns the current culture in the form of en-US, en-GB, es-MX, fr-FR, etc.
*   ADDED: Form/Template static text localization via the use of resource (.resx) files and the `[[Localize:keyName]]` token.
*   ADDED: Content localization and dynamic loading of forms/templates based on current culture. This allows forms and templates to be defined for each culture. XMod Pro will automatically select the appropriate form/template based on the currently selected culture.  

*   ADDED: CC property to form `<email>` tag to allow carbon copy recipients of emails.
*   ADDED: BCC property to form `<email>` tag to allow blind carbon copying emails to a list of recipients.
*   ADDED: CharacterCount attribute (and supporting `CharacterCountLabel`, `CharacterCountClass`, and `MaxLength` attributes) to `<TextArea>` form control. This optional attribute can be set to `CountUp` or `CountDown`. When set to `CountUp`, the number of characters the user has typed into the control will be displayed just after the control. If the value is set to `CountDown`, the number of characters remaining will be displayed. Remaining characters are calculated based on the `MaxLength` property. Additional text can be displayed with `CharacterCountLabel`. The number and label can be styled with a CSS class name via the `CharacterCountClass`.  

*   FIXED: `<xmod:MetaTags>` tag values don't persist after changing pages via the pager.
*   FIXED: `<xmod:MetaTags>` tag data-bound values don't persist when postback occurs outside the template in which the MetaTags tag resides.
*   FIXED: Install problem on DNN 4.3.x.
*   FIXED: Added localization text for Control Panel (ControlPanel.ascx.resx)

## 2.1.0

*   An interim release never released publicly.

## 2.0.3

*   FIXED: File not found error when attempting to preview a form with a very large number of controls.
*   FIXED: Editor for forms and templates inserts "ClientScript" as the BlockType when inserting a "StartupScript" ScriptBlock tag.
*   FIXED: Form Builder - Issue on some installations where Theme list and Form Preview did not appear.

## 2.0.2

*   FIXED: "Table Not Found" issue when generating forms/templates from tables on sites whose tables use a prefix.
*   FIXED: Minor issue where Unique ID drop-down list would not re-appear on Form Builder after user had selected the blank item in the table list and then selected a table.

## 2.0.1

*   FIXED: "Object Reference Not Set" error being returned when trying to load list of tables in Manage Forms and Manage Templates
*   FIXED: When creating a table, JSON, rather than HTML was returned for success message, resulting in a cryptic message.

## 2.0.0

*   ADDED: Ability to use `<ListItem>` child tags in DualList form control
*   ADDED: New AJAX-based Control Panel for administration of XMP.
*   ADDED: New Manage Forms page as part of Control Panel. This includes the ability to preview, edit, rename, copy, and delete items. It also includes an enhanced editor and the ability to automatically generate forms from tables in the DNN database.  

*   ADDED: New Manage Templates page as part of Control Panel. This includes the ability to preview, edit, rename, copy, and delete items. It also includes an enhanced editor and the ability to automatically generate templates from tables in the DNN database.  

*   ADDED: New Database Tools page that allows you to create basic tables in the DNN database quickly.
*   ADDED: New Form Builder page in Control Panel that makes it a cinch to quickly create forms tied to database tables in the DNN database. The form builder includes options for layout and themes/styling of the form along a live preview.  

*   FIXED: Issue with FileUpload control where using JOIN or other tokens in Path attribute resulted in the control ignoring the Path.
*   FIXED: Template & Form Editor - ScriptBlock, missing closing `"` around `type="text/javascript"`. Also tweaked spacing a bit.
*   FIXED: Issue where dependent lists threw Object Reference Not Set Error when lists in a Tabstrip

## 1.5.0

*   **ADDED**: Dual-List form control. This control displays two list boxes and provides buttons to move items from one list box to the other and vice versa. The control is a handy alternative to a CheckBoxList as it provides more efficient use of space when many options are available.  

*   **ADDED**: Dependent Lists. The DropDownList control now has the capability to cause a second DropDownList control to reload its values based on the selected value in the first control. A good example of this would be selecting a country in control one and having a list of cities from that country be loaded into the second control.  

*   **FIXED**: Issue where form controls in TabStrip would not have their ID's populated in the Javascript Helper.
*   **FIXED**: Issue with FormView's inline editor not showing in child portals.

## 1.4.2

*   FIXED: Issue where Inline Editor wouldn't pull up the form or template in a child portal.

## 1.4.1

*   ADDED: Inline Editor for configured templates and forms. You now have one-click access to quickly edit and save changes to your templates and forms. Plus, the new inline editor has a load of helpful shortcuts to quickly add tags, controls, and tokens to your forms/templates.  

*   ADDED: POSTed value persistence. For instance, if a value is POSTed to an XMP instance and used as a `<ListDataSource> <parameter>` value to filter that data, doing a search now searches in the filtered result set.  

*   ADDED: `<SeparatorTemplate>` to `<xmod:Template>` tag. This enables code to be inserted between records and not have any extra code at the end, as would happen if it were included in the `<ItemTemplate>` and/or `<AlternatingItemTemplate>` (e.g. Before: 1,2,3, Now: 1,2,3)  

*   ADDED: New Portal Tokens: `Alias` (gets domain); `TimeZoneOffset` (minutes from GMT); `Description`; `Expiry`; `LoginTabId`
*   ADDED: New Module Token: `TabId`
*   ADDED: Further enhanced error reporting to better report errors which occur during data-binding of controls.
*   ADDED: Ability for `<parameter>` in `<DeleteCommand>` to use `Alias` property. To use it, the DeleteButton/Image/Link must use the name specified in `Alias` of the `<DeleteCommand>`'s `<parameter>` tag - just as they already had to specify the same name as the `Name` property of the `<DeleteCommand>`'s `<parameter>` tag when using that.  

*   ADDED: Help File - Added note to `<xmod:redirect>` topic that tilde (`~`) can be used to represent the site root in the Target attribute.
*   FIXED: Issue with parser - `[[Join()]]`, `[[SelectDataTokens]]`, etc. weren't parsed correctly in Add/Update/Cancel button/image/link if the the tag was not named with all lower-case letters (`<addbutton>`, `<updatelink>`, etc.) This has been fixed.  

*   FIXED: Issue in `<xmod:CommandLink>` - `OnClientClick` didn't work.
*   FIXED: When `ShowTopPager` in `<Pager>` was set to `False`, an "Object reference not set" exception would be thrown after deleting a record.
*   FIXED: GET method on `<xmod:redirect>` wouldn't recognize tilde (`~`).
*   FIXED: `<Add/Update/CancelButton/Image/Link>` did not process `JOIN` token when redirect method was POST data - only when doing a GET.

## 1.4.0

*   Beta release only.

## 1.3.3

*   Beta release only.

## 1.3.2

*   FIXED: CommandImage (and CommandButton) only executes one command.

## 1.3.1

*   FIXED: If a parameter in a template did not have a value, a Conversion of DBNull to String error was thrown. This has been corrected.

## 1.3.0

*   ADDED: Ability to use SQL OUTPUT parameter values in templates.
*   ADDED: Ability to use values from `<SelectCommand>` in form control attribute values. Simply use the `[[FieldName]]` syntax as with Field Tokens in templates.
*   ADDED: Added function to `<xmod:format>` tag to HTMLEncode/HTMLDecode text.
*   ADDED: Added function to `<xmod:format>` tag to URLEncode/URLDecode text.
*   ADDED: Add property to TextBox and TextArea to encode as HTML.
*   ADDED: Ability for function tokens `[[Portal]]` `[[Join()]]` etc. to be processed in emails in addition to `[[Field]]` tokens.
*   ADDED: Enhanced trapping of errors. More errors should now be displayed on-screen rather than just logged to the event viewer.
*   ADDED: User-selectable page size for Manage Forms and Manage Templates. Selection is persisted via cookies.
*   FIXED: DeleteCommand ConnectionString issue. DeleteCommand was not recognizing a ConnectionString when specified, regardless of whether it was hard-coded or a `[[ConnectionString:connName]]` token. It has been fixed and tested.  

*   FIXED: Fix Bug in Parser where `[[Form:...]]` token wasn't being properly parsed in `<NoItemsTemplate>` tag.
*   FIXED: Cancel button won't cancel if CAPTCHA is invalid.
*   FIXED: Help File: `<xmod:EditLink>` topic's example used `<editlink>` instead of `<xmod:editlink>` tag.
*   FIXED: Issue when exporting module settings. Part of the resulting XML was malformed.
*   FIXED: Help file `<xmod:template>` topic showed "UpdateRoles" as a property. This was changed to show the correct property name "EditRoles".
*   FIXED: When paging is enabled and only one page is returned, "1" appeared in the pager. Instead the label for that page should be hidden when only one page.

## 1.2.1

*   FIXED: Issue where License and Activation page was still looking for DevExpress v.7.3 files, not 9.1 files.

## 1.2.0

*   ADDED: `<xmod:ToggleLink>`, `<xmod:ToggleButton>`, and `<xmod:ToggleImage>` template tags. These leverage jQuery in DNN 5+ and make it easy to hide and show elements anywhere on your page. No need to write your own Javascript.  

*   ADDED: `<Text>` form control. This control enables you to render retrieved values (from a `<SelectCommand>`) out to the form. It performs one-way binding. It does not send its value to the `<SubmitCommand>`.  

*   ADDED: `ShowTopPager` and `ShowBottomPager` to `<pager>` template tag. Both attributes are True by default, meaning both the top and bottom paging controls will be displayed when paging is enabled. Setting either to False will hide the corresponding paging control.  

*   ADDED: `<ControlDataSource>` tag in forms now can be used with `<parameter>` tags to filter the results returned based on dynamic data such as the Portal ID or User ID or a parameter sent via the URL.  

*   ADDED: Ability for tilde (`~`) character to be used in the Url attribute of `<xmod:ScriptBlock>` and `<ScriptBlock>`. At runtime, the tilde character will be replaced with the path to the root of the web application.  

*   FIXED: Help File, Function Tokens topic. Incorrect syntax in example for Join()
*   FIXED: Fix Help File for `<ContinueButton>` `<ContinueImage>` and `<ContinueLink>` plus the example(s) in `<AddForm>`,`<EditForm>` topic. They should be: `<xmod:ContinueButton>`, `<xmod:ContinueImage>`, `<xmod:ContinueLink>` 

*   FIXED: Form's `<AddSuccessTemplate>` syntax is incorrect in the help file. It is listed as `<AddSuccess>` and should be `<AddSuccessTemplate>`
*   FIXED: Editor - incorrect parsing of `[[Form:paramName]]` in a `<parameter>` tag.
*   FIXED: Editor - incorrect parsing of `[[Join()]]` function token when used in `<addbutton>`, `<updatebutton>`, and `<cancelbutton>`.
*   FIXED: Editor - incorrect parsing parsing of `<xmod:register>` tags
*   FIXED: BUG - When UsePager is set to False on `<xmod:template>`, if you delete a record, an Object Reference Not Set error is thrown.
*   FIXED: Help File: `<xmod:AddButton/Image/Link>` doesn't specify you can use `<parameter>` tags.
*   CHANGED: XMP now uses DevExpress v9.1 under the hood for administration pages. Previous users MUST delete DevExpress v7.3 files from their bin directory or they will get "ambiguous" errors.

## 1.1.0

*   ADDED: 'function' and `[[Field]]` tokens to form redirect buttons. They are processed in Add, Update, and Cancel buttons in FormView and Main
*   ADDED: Can use `~` in POST redirect to represent the root of the site.
*   ADDED: If one and only one field token is used in a redirect, it is assumed to be a URL and is not encoded.
*   FIXED: BUG - Tabstrip causing 2 copies of list items when using `AppendDataBoundItems`
*   FIXED: Duplicate list control items when using `AppendDataBoundItems`
*   FIXED: Help File - Add `UsePaging` attribute to `<xmod:template>` topic.
*   FIXED: `[[Form:...]]` token not working.
*   FIXED: No DefaultValue attribute for List/Detail DataSource tags in Templates.
*   FIXED: Extra space in `<AddForm >` and `<EditForm >` when editing.
*   FIXED: `<email>` tags throw error when using tokens.
*   FIXED: Field tokens don't work in form button redirects
*   FIXED: Help File: `<AddForm><EditForm>` topic, `<email>` tag in example incorrectly used the "target" attribute. It should be "to".

## 1.0.0

*   Initial Release