---
id: tokens-data
title: Data Parameter Tokens
category: Field Tokens
context: template
summary: Data parameter tokens (`[[TemplateID_list@param]]`) read SQL parameter values — typically OUTPUT parameters from stored procedures — into a view's layout templates.
keywords:
  - data
  - parameter
  - output
  - tokens
since: '1.3'
related:
  - tokens-field
  - template-template
---

# Data Parameter Tokens

Data parameter tokens read the value of a `<Parameter>` on a `<ListDataSource>` or `<DetailDataSource>` — most usefully, the OUTPUT parameter of a stored procedure. Where regular [field tokens](field.md) read row values, data parameter tokens read the values that the data source passes back as its parameters.

The classic use case: a stored procedure returns a list of employees and also fills an `OUTPUT` parameter with the department's name, so the header above the list can show the department.

## Syntax

```
[[TemplateID_list@parameterName]]      # from <ListDataSource>
[[TemplateID_detail@parameterName]]    # from <DetailDataSource>
```

Every part is required:

| Part | Meaning |
|------|---------|
| `TemplateID` | The `Id` of the `<xmod:Template>` (or `<xmod:DataList>`) that owns the data source |
| `_list` / `_detail` | Which data source — `<ListDataSource>` or `<DetailDataSource>` |
| `@` | Literal `@` separator |
| `parameterName` | The `Name` of the matching `<Parameter>` tag |

The token is **not** case-sensitive — `[[MyTemplate_list@MyParam]]` and `[[mytemplate_list@myparam]]` are equivalent.

## Where it works

Data parameter tokens work inside layout templates of the *same* `<xmod:Template>` that owns the data source:

| Layout template | List parameters | Detail parameters |
|-----------------|----------------|-------------------|
| `<HeaderTemplate>` | ✓ | ✗ |
| `<ItemTemplate>` / `<AlternatingItemTemplate>` | ✓ | ✗ |
| `<FooterTemplate>` | ✓ | ✗ |
| `<DetailTemplate>` | ✗ | ✓ |
| `<NoItemsTemplate>` | ✓ when list returned no rows | ✓ when detail returned no row |

Data parameter tokens are not available in forms or in other views on the same page.

## Example

A stored procedure that returns employees and writes the department name to an OUTPUT parameter:

```sql
CREATE PROCEDURE GetEmployeesByDepartment
  @DepartmentId   int,
  @DepartmentName nvarchar(100) OUTPUT
AS
BEGIN
  SELECT @DepartmentName = Name FROM Departments WHERE ID = @DepartmentId;
  SELECT DisplayName, Address1, Address2, City, State, Zip
    FROM Employees
   WHERE DepartmentId = @DepartmentId;
END
```

The view declares the OUTPUT parameter and uses it in the header:

```html {2-5,8,13}
<xmod:Template Id="Employees">
  <ListDataSource CommandText="GetEmployeesByDepartment" CommandType="StoredProcedure">
    <Parameter Name="DepartmentId" Value="32" />
    <Parameter Name="DepartmentName" Direction="Output" DataType="String" Size="100" />
  </ListDataSource>
  <HeaderTemplate>
    <h1>Employees in [[Employees_list@DepartmentName]]</h1>
  </HeaderTemplate>
  <ItemTemplate>
    <strong>[[DisplayName]]</strong><br />
    [[Address1]], [[City]], [[State]] [[Zip]]
  </ItemTemplate>
  <NoItemsTemplate>
    No employees in [[Employees_list@DepartmentName]].
  </NoItemsTemplate>
</xmod:Template>
```

::: tip OUTPUT parameter requirements
For OUTPUT parameters:
- Set `CommandType="StoredProcedure"` on the data source.
- Add a `<Parameter>` with `Direction="Output"` and a `DataType`.
- For string output parameters, **`Size` is required** — match the size declared in the procedure when possible.
:::

See the [Tokens Overview](README.md#standard-token-rules) for the standard rules that apply to all tokens.
