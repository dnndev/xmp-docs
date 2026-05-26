---
id: form-validate-database
title: Validate Type="Database"
category: Validation
context: form
summary: The Validate tag with Type="Database" displays errors thrown by the database (or returned via a special ERROR output parameter) when the form's SubmitCommand runs.
keywords:
  - validate
  - database
  - form
since: '4.0'
related:
  - form-validate-action
  - form-validation-summary
  - form-add-edit-form
---
# `<Validate Type="Database">`

The Database validator surfaces errors thrown by the database when the form's `<SubmitCommand>` runs — either actual SQL errors or friendly error messages your stored procedure returns through a specially-named `ERROR` output parameter. Unlike other validators, it isn't tied to a specific control, and you only need one per form.

If the form has a `<ValidationSummary>`, the database error appears there. If you don't include this validator, the error still surfaces — through XMod Pro's default error display.

## Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| [Type](#prop-type) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | `Database` | | Identifies this as a Database validator |
| CssClass | string | | CSS class name(s) for styling the validator's error display |
| [Text](#prop-text) | string | | Text shown inline at the validator's location when an error occurs |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

::: info Differs from other validators
Database doesn't take a `Target`, `Message`, `Display`, or `EnableClientScript` — it isn't tied to a specific control and never runs client-side. Only one Database validator per form.
:::

## Returning a Friendly Error from a Stored Procedure

Sometimes your stored procedure needs to tell the user "that team name is already taken" or "that date is in the past." You can do this without raising a SQL error:

1. Set the `<SubmitCommand>` tag's `CommandType` property to `StoredProcedure`.
2. Add an output parameter to the `<SubmitCommand>` named exactly **`ERROR`**, with `Direction="Output"`:

   ```html
   <Parameter Name="ERROR" DataType="String" Size="250" Direction="Output" />
   ```

3. Add `<Validate Type="Database" />` to your form (and ideally a `<ValidationSummary>`).
4. In your stored procedure, set the `@ERROR` parameter to whatever message you want to surface.

XMod Pro reads that output parameter after the procedure runs. If it's not empty, the form treats the submit as a validation failure and surfaces the message — even though no exception was raised.

## Example
```html {16,17}
<AddForm>
  <SubmitCommand CommandText="XMP_RegisterTeam" CommandType="StoredProcedure">
    <Parameter Name="TeamName" DataType="String" Size="50" />
    <Parameter Name="ERROR" DataType="String" Size="250" Direction="Output" />
  </SubmitCommand>

  <div class="xmp-form">
    <div class="xmp-form-row">
      <Label For="txtTeamName" Text="Team Name" />
      <TextBox Id="txtTeamName" DataField="TeamName" DataType="string" MaxLength="50" />
      <Validate Type="Required" Target="txtTeamName" Message="Team name is required" />
    </div>
    <div class="xmp-form-row">
      <AddButton Text="Register" /> <CancelButton Text="Cancel" />
    </div>
    <Validate Type="Database" />
    <ValidationSummary DisplayMode="BulletList" CssClass="NormalRed xmp-validation-summary" />
  </div>
</AddForm>
```

A stored procedure that uses the `@ERROR` pattern:

```sql
CREATE PROCEDURE [dbo].[XMP_RegisterTeam]
  @TeamName nvarchar(50),
  @ERROR    nvarchar(250) OUTPUT
AS
BEGIN
  SET @ERROR = ''
  IF EXISTS(SELECT 1 FROM Teams WHERE TeamName = @TeamName)
  BEGIN
    SET @ERROR = 'A team with that name already exists. Please choose another.'
    RETURN
  END

  INSERT INTO Teams (TeamName) VALUES (@TeamName)
END
```

A stored procedure that just throws an error (also surfaced by the validator):

```sql
CREATE PROCEDURE [dbo].[XMP_DBThrownError_Tester]
  @FirstName nvarchar(255),
  @LastName  nvarchar(255)
AS
BEGIN
  RAISERROR('Example Error Thrown', 18, 1)
END
```

## Property Details

*   <span id="prop-type">**Type**</span>: Set to `Database` to identify this as a Database validator.

*   <span id="prop-text">**Text**</span>: The text shown inline at the validator's location when a database error occurs. The full error message goes into the `<ValidationSummary>` (if present); `Text` is for an inline marker. If you omit `Text`, nothing renders inline — handy when you only want the summary.
