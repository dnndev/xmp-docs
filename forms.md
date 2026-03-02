---
id: forms
title: Forms
category: Core Concepts
context: all
summary: >-
  What forms are, the difference between Add and Edit forms, and how to create
  them using the Form Builder or Code Editor.
keywords:
  - forms
  - add form
  - edit form
  - form builder
  - data entry
---
# Forms

A **form** collects data from your visitors and saves it to the database. You define the input fields, validation rules, and the data command that stores the values. XMod Pro handles rendering the form, validating input, and executing the save — you focus on what data to collect and how the form looks.

If you haven't read [How XMP Works](how-xmp-works.md), start there — it explains the form cycle and how forms relate to views and data commands.

## Add and Edit Forms

XMod Pro uses two form types that work together:

- **`<AddForm>`** — displayed when a visitor creates a new record. When submitted, XMod Pro runs the form's `<SubmitCommand>` to insert a new row in the database.
- **`<EditForm>`** — displayed when a visitor edits an existing record. XMod Pro runs the form's `<SelectCommand>` to load the current values into the fields. When submitted, the `<SubmitCommand>` updates the existing row.

A form file can contain an `<AddForm>`, an `<EditForm>`, or both — depending on what you need. Most forms include both, defined in the same file with a shared layout and fields. Both can use a `<SelectCommand>` to pre-populate fields (the edit form loads the record being edited; the add form can use it to set default values).

## Form Controls

Form controls are the building blocks of your forms — the text boxes, dropdowns, checkboxes, and other input elements your visitors interact with. Each control is linked (or "bound") to a database field using the `DataField` attribute, so XMod Pro knows where to save the value.

Some commonly used controls:

| Control | What it does |
|---------|-------------|
| `<TextBox>` | Single-line text input |
| `<TextArea>` | Multi-line text input |
| `<DropDownList>` | Dropdown selection list |
| `<CheckBox>` | Single checkbox (yes/no) |
| `<CheckBoxList>` | Multiple checkboxes |
| `<RadioButtonList>` | Radio button group |
| `<DateInput>` | Date picker |
| `<FileUpload>` | File upload |

See the [Form Controls Reference](reference.md) for the full list of controls.

## Validation

XMod Pro includes built-in validation controls that check visitor input before saving. You place validators alongside your form controls — if validation fails, XMod Pro displays error messages and prevents the form from submitting.

Available validators include:

- **Required** — field must have a value
- **Email** — must be a valid email address. Note this does not verify if an email address actually exists—just that input has the form of an email address.
- **Compare** — two fields must match (e.g., password confirmation)
- **Range** — value must fall within a range
- **Regular Expression** — value must match a pattern
- **Database** — checks a value against the database (e.g., username already taken)
- **Checkbox** / **Checkbox List** — ensures a checkbox is checked or a minimum number of options are selected
- **Action** — displays errors thrown by action tags like `<AddUser>` or `<UpdateUser>` (e.g., a duplicate username during registration)

You can also add a `<ValidationSummary>` control to display all error messages in one place.

## The Form Builder

You don't have to write forms by hand. The **Form Builder** is a visual tool in the control panel that lets you build forms by selecting controls from a menu and configuring their properties. You can:

- **Start from scratch** — pick controls one by one using the `/` menu or the add button
- **Generate from a table** — select a database table and XMod Pro creates a form with fields for each column, complete with data commands

The Form Builder generates the same code you'd write manually, so you can always switch to the Code Editor to fine-tune the result. It's a great way to get started quickly and learn the syntax as you go.

## Basic Syntax

Here's a minimal add form that collects a staff member's name and email:

```html
<AddForm>
  <SubmitCommand CommandText="INSERT INTO Staff (FirstName, LastName, Email)
                              VALUES (@FirstName, @LastName, @Email)" />

  <div class="form-group">
    <Label For="txtFirst" Text="First Name" />
    <TextBox ID="txtFirst" DataField="FirstName" DataType="String" />
    <Validate Type="Required" Target="txtFirst" Text="First Name is Required" />
  </div>

  <div class="form-group">
    <Label For="txtLast" Text="Last Name" />
    <TextBox ID="txtLast" DataField="LastName" DataType="String" />
    <Validate Type="Required" Target="txtLast" Text="Last Name is Required" />
  </div>

  <div class="form-group">
    <Label For="txtEmail" Text="Email" />
    <TextBox ID="txtEmail" DataField="Email" DataType="String" />
    <Validate Type="Email" Target="txtEmail" Text="Enter a valid email" />
  </div>

  <AddButton Text="Save" />
  <Validate Type="Summary" HeaderText="Please fix the following:" />
</AddForm>
```

The `<SubmitCommand>` defines the SQL that runs when the form is submitted — notice the `@FirstName` parameters match each control's `DataField`. Each control has an `ID` (for targeting by validators and labels) and a `DataField` (the database column it maps to). The `<AddButton>` triggers submission.

## Next Steps

- **[Form Controls Reference](reference.md)** — Full reference for all 60+ form controls
- **[Form Builder](form-builder.md)** — Visual form building tool
- **[Tutorial 3: Feedback Form](tutorials/3_feedback-form.md)** — Build a form step by step
- **[Views](views.md)** — Learn how to display the data your forms collect
- **[Tokens Reference](tokens/field.md)** — All available token types
