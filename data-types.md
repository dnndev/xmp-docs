# Data Types

XMod Pro data-bound controls enable you to specify the type of data the control will accept. Some controls may limit you to a specific type of data (for instance, a checkbox control might only allow boolean values). The list of valid data types is below:

*   Boolean
*   DateTime
*   Decimal
*   Double
*   Byte
*   Int16
*   Int32
*   Int64
*   Single
*   String

### SQL Server Data Type to XMod Pro Data Type Conversion

To make the process of linking your fields up with XMod Pro, we've created a table listing the SQL Server data type and its XMod Pro equivalent, if available. While currently, XMod Pro is designed for SQL Server, it does not support every field type. The goal is to keep XMod Pro loosely coupled so that other databases and data sources can be added in the future. Also, keep in mind that while a certain data type may have an XMod Pro equivalent, you should ensure that the values accepted from your users do not exceed the limitations of the data type. For instance, if you choose the NChar datatype in SQL Server, you should use the String XMod Pro data type. However, you need to ensure the text entered falls within the limits of the NChar field (4,000 characters for SQL Server 2005). We have noted limitations for some data types.

| SQL Server Data Type | XMod Pro Data Type |
| -------------------- | ------------------ |
| BigInt | Int64 | 
| Binary | Not Supported | 
| Bit | Boolean | 
| Char | String (subject to Char size limits) | 
| Date | Date (supported as of XMod Pro 3.1) | 
| DateTime | DateTime | 
| DateTime2 | DateTime (supported as of XMod Pro 3.1) | 
| DateTimeOffset | Not Supported | 
| Decimal | Decimal | 
| Float | Double 
| Image | Not Supported | 
| Int | Int32 | 
| Money | Decimal. Do not include currency symbols (i.e $) in value. | 
| NChar | String (subject to NChar size limits) | 
| NText | String | 
| NVarChar | String (subject to NVarChar size limits) | 
| Real | Single | 
| SmallDateTime | DateTime (subject to SmallDateTime size limits) | 
| SmallInt | Int16 | 
| SmallMoney | Decimal (subject to SmallMoney size limits). Do not include currency symbols (i.e $) in value. | 
| Structured | Not Supported | 
| Text | String | 
| Time | Use SQL DateTime data type instead) | 
| Timestamp | Not Supported | 
| TinyInt | Byte (supported as of XMod Pro 3.1) | 
| Udt | Not Supported | 
| UniqueIdentifier | String (supported as of XMod Pro 3.1) Ensure your data is formatted accordingly | 
| VarBinary | Not Supported | 
| VarChar | String (subject to VarChar size limits) | 
| Variant | Not Supported | 
| Xml | String (supported as of XMod Pro 3.1) | 


