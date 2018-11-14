---
title: "3: Create a Feedback Form"
---
# Tutorial Three:  Create a Feedback Form

In the first two tutorials, you created a list-based view of your data and then added the ability to view the details of each record. In this tutorial, we're going to switch gears from displaying data, to enabling the input of data via XMod Pro's custom forms. We'll be creating a simple Feedback form that will allow site visitors to enter their Name, Email Address, and Question. The form will then send that information, via email to our site administrator. To keep things simple, no data will be saved to the database.

1.  If you haven't done so already, install the FormView module that came with XMod Pro. You'll find it in the Installation folder alongside the XMod Pro installation file.
2.  Next, open a page in your site and add an XMod Pro FormView instance to the page.
3.  Ensure you're logged-in as Host or SuperUser.
4.  We're going to create a form. So, from the Actions menu, select **Manage Forms**:  
    ![](ActionMenu_ManageForms.png)
5.  The **Manage Forms** page is where you add, edit, copy, and delete your data input forms. For the mechanics of how to use the Manage Forms page, refer to [this topic](ManageForms.html).
6.  Click the **New Form** button. The new form dialog appears in-line, within the grid.
7.  In the Form Name field type "FeedbackForm" (without quotes). Form names can consist of only letters, numbers, hyphens (-) and underscores (_).
8.  In the Content editing area, you'll see some boilerplate code that can help you get a jump-start on creating your forms. It's not necessary for our purposes, so delete all the text.
9.  As with our other tutorials, we'll present and explain the individual parts of our form first and then present you with the full form definition at the end.
    1.  `<AddForm>`

        The AddForm is the form that is displayed when creating a record. We won't actually be creating a database record in this example, but we'll still use the `<AddForm>` tag. The reason for this is that we will be displaying this form in "form view" mode. This means that when the page is loaded, the form will be displayed. The user won't have to click an "Add" button or other button to display the form. XMod Pro uses the AddForm for this form.

    2.  ``` html
        <table style="border: 1px solid black;">  
          <tr>  
            <td>  
              <label for="txtName" cssclass="NormalBold">Name: </label>  
            </td>  
            <td>  
              <textbox id="txtName" datafield="CustName" width="200"/>  
            </td>  
          </tr>  
          <tr>  
            <td>  
              <label for="txtEmail" cssclass="NormalBold">Email: </label>  
            </td>  
            <td>  
              <textbox id="txtEmail" datafield="CustEmail" width="200"/>  
              <validate type="email" target="txtEmail" message="Enter a valid email address" />  
            </td>  
          </tr>
        ```

        We'll be using a standard HTML table to arrange our controls. You can see the tags for that in the example above. You can choose HTML that suits your needs, but for our purpose, the important bits are the `<label>`, `<textbox>`, and `<validate>` tags. While they may look like HTML tags, they're actually specific to XMod Pro.

        The `<label>` tag has the same purpose as an HTML `<label>`. It displays static text. The for attribute is used to make your form more accessible to those with disabilities. Fill this attribute with the ID of the control for which it provides the caption. This will link it with that control and, at run-time, screen readers will be able to interpret the form for those users who have difficulty seeing the screen.

        The `<textbox>` tag renders as a single-line text input box at run-time. The "id" attribute should consist of letters and numbers and begin with a letter. This value should be unique within the form. Notice that even though we aren't saving these values in the database, we still need to provide a value for the "datafield" attribute. This value will be used later when we discuss the `<email>` tag. Finally, we want the textbox to have a width of 200 pixels so we set width="200".

        The `<validate>` tag is one of the various controls you can use to validate your user's input. In this case, we are using the "email" validation type (via the "type" attribute) to ensure a properly formatted email address is entered. Notice that the "target" attribute contains the ID of the control we want to validate - txtEmail in this case. This is required. If you don't specify a target, you'll end up with a nasty error message. Finally, we provide some helpful text in the "message" attribute that will be displayed to the user when the email address doesn't validate.

    1.  ```html
        <tr>  
          <td>  
            <label for="txtQuestion" cssclass="NormalBold">Your Question</label>  
          </td>  
          <td>  
            <textarea id="txtQuestion" rows="7" columns="60" datafield="CustQuestion" />  
          </td>  
        </tr>
        ```

        In this snippet, notice the `<textarea>` tag. At run-time, this tag renders as multi-line text input box. This provides the user with the ability to enter extended text. You can set the dimensions using "height" and "width" attributes or you can use the "rows" and "columns" attributes.

    2.  ``` html
          <tr>  
            <td>  
              <addbutton text="Send Your Question" />  
            </td>  
          </tr>  
        </table>
        ```

        This tag renders as a push-button at run-time. It is used to submit an AddForm. The value of the "text" attribute is the text that will be displayed on the push button. Also in this snippet, we close out the table with the closing `</table>` tag.

    3.  ```html
          <email to="you@yoursite.com" from="[[CustEmail]]"   
           subject="A Question Has Been Submitted" format="html">  
           <strong>[[CustName]]</strong> has submitted a question:<br />  
           Question:<br />  
           [[CustQuestion]]  
          </email>  
        </AddForm>
        ```

        This tag defines the email that should be sent when the form has been submitted. If we were adding a record, the email wouldn't be sent until the record was successfully save to the database. The tag can be placed anywhere between the `<AddForm>` and `</AddForm>` tags. It doesn't display at run-time.  

        The attributes of the tag should be pretty familiar: `to` is the email address to which the email should be sent; `from` is the email from which the email is sent; `subject` is the text to use as the subject of the email; format determines if the email should be formatted as HTML (`format="html"`) or as plain text (`format="text"`). Finally, the text between the `<email>` and `</email>` tags make up the body of the email.  

        You probably have noticed the use of field token tags: `[[CustEmail]]`, `[[CustName]]`, and `[[CustQuestion]]`. If you look at the `<textbox>` and `<textarea>` tags, you'll notice we specified a "datafield" attribute for each one. This allows us to use those control values in the `<email>` tag. We're using the customer entered email in the "from" attribute and the customer-entered name and question in the body of the email.  

        Finally, the `</AddForm>` tag closes the AddForm definition.  

    4.  The full form definition looks like this:

        ```html
        <AddForm>  
          <table style="border: 1px solid black; padding: 5px;">  
            <tr>  
              <td>  
                <label for="txtName" cssclass="NormalBold">Name: </label>  
              </td>  
              <td>  
                <textbox id="txtName" datafield="Name" width="200"/>  
              </td>  
            </tr>  
            <tr>  
              <td>  
                <label for="txtEmail" cssclass="NormalBold">Email: </label>  
              </td>  
              <td>  
                <textbox id="txtEmail" datafield="Email" width="200"/>  
                <validate type="email" target="txtEmail" message="Enter a valid email address" />
              </td>  
            </tr>  
            <tr>  
              <td>  
                <label for="txtQuestion" cssclass="NormalBold">Your Question</label>  
              </td>  
              <td>  
                <textarea id="txtQuestion" rows="7" columns="60" datafield="Question" />  
              </td>  
            </tr>  
            <tr>  
              <td colspan="2">  
                <addbutton text="Send Your Question" />  
              </td>  
            </tr>  
          </table>  

          <email to="you@yoursite.com" from="[[Email]]"   
             subject="A Question Has Been Submitted" format="html">  
             <strong>[[Name]]</strong> has submitted a question:<br />  
             Question:<br />  
             [[Question]]  
          </email>  

        </AddForm>

        ```

10.  Type or copy and paste the code above into the Content editing area and click the "Update" link.
11.  Click the "Close" button at the bottom of the grid to return to the previous page.
12.  Select "Configure" from the module's Actions menu:  
    ![](../img/ActionMenu_Configure.png)
13.  Select "FeedbackForm" from the Form drop-down list.
14.  Ensure that the Form Mode is set to Add. This tells the module to load the form defined in the `<AddForm>` tag.
15.  Click the "Close" button to save your changes and return to the previous page.
16.  You should now see the form displayed for you:  
    ![](./Walkthrough3_FormView.png)
17.  Now, if you fill in the form with an invalidly formatted email address, you'll see something like this:  
    ![](./Walkthrough3_FormView_Error.png)
18.  When the user clicks the "Send Your Question" button, assuming the email address is correct, an email will be sent to "you@yoursite.com" - or whatever address you specified in the `<email>` tag.