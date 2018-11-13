# Data Parameter Tokens

Tokens are the mechanism used to display OUTPUT and standard parameter values from your datasource in your templates. At run-time, XMod Pro will replace that token with the value stored in that parameter.  

There are some additional usage rules you'll need to adhere to. They are described in the Remarks section.

## Syntax

`[[TemplateID_list@ParameterName]]`
`[[TemplateID_detail@ParameterName]]`  

## Remarks

*   **Forming Your Parameter Token**: The token is formed by combining the ID of your `<xmod:Template>` tag, some text that identifies if the parameter is from the ListDataSource (`_list`) or DetailDataSource (`_detail`), the @ symbol and finally the name of the parameter.  

    So, if your `<xmod:Template>` has an ID of "MyTemplate" and you want to use the value of the parameter "MyParam" in the `<ListDataSource>` tag, your token would look like this:  

    `[[MyTemplate_list@MyParam]]`  

    **All components of the token are required**: The template's ID, the "_list" or "_detail", the "@" symbol, and the parameter's name.  

*   **Tokens Are Not Case-Sensitive**:  
    `[[MyTemplate_list@MyParam]]`  
    `[[mytemplate_list@MyParam]]`  
    `[[mytemplate_List@myparam]]`  
    All of the above are equivalent.  

* **Valid in Templates Only**: Currently, use of parameters is limited to the `<ListDataSource>` and `<DetailDataSource>` tags in templates. Within `<xmod:Template>` tags, you can use these Data Parameter tokens inside the following tags:

  *   `<HeaderTemplate>`
  *   `<ItemTemplate>`
  *   `<AlternatingItemTemplate>`
  *   `<FooterTemplate>`
  *   `<DetailTemplate>`
  *   `<NoItemsTemplate>`  

* **Only Available Within Current Template**: You cannot use parameter tokens to display data from other templates. Likewise you cannot use parameter tokens for the ListDataSource in the DetailTemplate and DetailDataSource parameters cannot be used in the components the list view (Header/Item/AlternatingItem/Footer templates). While no error will be thrown, no data will be returned.  

  There is one exception: You can use parameter values from the `<ListDataSource>` and `<DetailDataSource>` in the `<NoItemsTemplate>` tag. The value returned will depend on which data source has no items. So, if you click a button to show the details of the record and the record is not found, `<DetailDataSource>` parameters will be accessible and `<ListDataSource>` parameters will not. The reverse holds true if no records are returned for the `<ListDataSource>`.  

* **Standard Token Usage Rules**:
    *   Tokens must begin with double-brackets (`[[`) and end with double-brackets (`]]`)
    *   Tokens can be used as the value of an HTML attribute or in standard text. For example:  
        `<img src="[[Employees_list@PictureUrl]]" align="left" /> <strong>[[Employees_list@UserFullName]]</strong>`
    *   In many cases, tokens can also be used as the attribute value for an XMod Pro tag. However, when using them in this manner, you MUST delimit the attribute value with single quotes, **not** double quotes. For example:  
        **CORRECT**: `<xmod:DetailButton Text=``'``[[Employees_list@UserFullName]]``'` `/>`  
        INCORRECT: `<xmod:DetailButton Text=``"``[[Employees_list@UserFullName]]``"` `/>`

## Example

**Stored Procedure in the Database:**  
```sql
01: CREATE PROCEDURE GetEmployeesByDepartment  
02:  @DepartmentId int,  
03:  @DepartmentName nvarchar(100) OUTPUT
04: AS  
05: BEGIN  
06:  SELECT @DepartmentName = Name FROM Departments WHERE ID = @DepartmentId 
07:  SELECT DisplayName, Address1, Address2, City, State, Zip  
08:    FROM Employees  
09:    WHERE DepartmentId = @DepartmentId  
10: END  
```

**Template Definition:**  
```html
01:<xmod:Template Id="Employees">  
02:  <ListDataSource CommandText="GetEmployeesByDepartment"  
       CommandType="StoredProcedure">  
03:    <parameter name="DepartmentId" value="32" />  
04:    <parameter name="DepartmentName" direction="Output" datatype="string" size="100" />
05:  </ListDataSource>  
06:  <HeaderTemplate>  
07:    <h1>Employees in [[Employees_list@DepartmentName]] Department</h1>  
08:  </HeaderTemplate>  
09:  <ItemTemplate>  
10:    <strong>Full Name: [[DisplayName]]<br />  
11:    <strong>Address: [[Address1]]<br />  
12:                     [[Address2]]<br />  
13:                     [[City]], [[State]] [[Zip]]<br />  
14:  </ItemTemplate>  
15:  ...  
16:  <NoItemsTemplate>  
17:    No employees listed in the [[Employees_list@DepartmentName]] department  
18:  </NoItemsTemplate>  
19:</xmod:Template>
```

In the example above, we've created a stored procedure in the database. This stored procedure's main purpose is to return all the employees in a particular department of the company. Additionally, it declares (line #3) and fills an OUTPUT parameter with the name of the department for use by our template (line #6).

In the template definition, we use the name as the stored procedure as the CommandText, and specify "StoredProcedure" as the CommandType. This is a critical step if you are going to use OUTPUT parameters. (Line #2)

Next, in addition to the DepartmentId parameter (line 3), we've defined a second parameter for the OUTPUT parameter (line 4). This must be the same name as that identified in the stored procedure (DepartmentName in our example). You must also define the Direction attribute with a value of Output. It is good practice to also define the DataType attribute with the appropriate datatype that will be returned (String in this case, which handles all textual values - for an "int" database data type, you might use Int32 or Int64 as the DataType). Finally, since this is textual data, it is required that we specify the Size of the parameter. If not Size is specified, an error will be thrown. It is good practice to match the Size specified in our stored procedure (100), but it is legal to specify a larger or smaller number. If you specify a smaller number and the returned value exceeds that length, the value will be truncated.

Finally, we can use the parameter in our template. In this example, we've placed it in the Header (line 7), to display the department's name above the list of employees. We've also placed it in the `<NoItemsTemplate>` to provide a more user-friendly message if no records are found (line 17). It would also be legal to place the parameter token in the `<ItemTemplate>` and `<AlternatingItemTemplate>` to display with each record. as well as the `<FooterTemplate>`.
