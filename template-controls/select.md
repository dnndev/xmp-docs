---
id: template-select
title: 'xmod:Select'
category: Conditional
context: template
summary: >-
  The `<xmod:Select>` gives you a lot of flexibility in creating your display
  template. It's similar in function to Visual Basic's Select/Case statement and
  Javascript's switch/case statement.
keywords:
  - select
  - template
---
# `<xmod:Select>`

The `<xmod:Select>` gives you a lot of flexibility in creating your display template. It's similar in function to Visual Basic's Select/Case statement and Javascript's switch/case statement. For non-programmer's you can think of it as a multiple choice tag. The tag can be used both within a template and outside of a template. In fact, it can be used to hide or show templates as well as other text and HTML.

## Syntax
```html
<xmod:Select 
  Mode="Standard|Inclusive"> 
    <Case CompareType="Numeric|Float|Date|Text|Regex|Boolean|Role" 
          Value="string" 
          Expression="string" 
          Operator="<|>|<>|=|<=|>=" 
          IgnoreCase="true|false"
          Culture="LocaleID" >
    </Case>
    Additional Case tags as needed
    <Case>...</Case> 
    ... 
    Optional Else tag
    <Else>...</Else>
</xmod:Select>
```

## Remarks

*   The `<xmod:Select>` tag contains one or more `<Case>` tags and one optional `<Else>` tag. At run-time, XMod Pro will evaluate each `<Case>` tag beginning with the first one in the list. If the tag doesn't evaluate to True, XMod Pro moves to the next `<Case>` tag and evaluates it. It continues this way until it reaches a true `<Case>`. If none is found, then nothing will be displayed unless an `<Else>` tag has been included. If so, it's contents will be displayed.  

*   **Comparison Data Types:** Note that when XMod Pro tests to see if the text `1` is the same as the text `1`. XMod isn't comparing the values as numbers. It's comparing the values as text. However, that can easily be changed by using the `<Case>` tag's CompareType attribute. Using this, you can tell XMod to compare the values as numeric values, floating point numbers, dates, boolean, text, or to see if the value matches a regular expression pattern. You can also compare whether the current user is/isn't in one or more security roles.  

*   **Operators:** You're not limited to just testing for equality. Using the operator attribute of the `<Case>` tag, you can test for equality `=`, inequality `<>`, less-than `<`, greater-than `>`, less-than-or-equal `<=`, and greater-than-or-equal `>=`. Of course, these operators don't make sense for all types of comparisons. For instance, if you are doing a regular expression comparison, the value can either match or not-match the regular expression pattern. So, the only valid operators in that case are "=" and `<>`.  

*   **Case-Sensitive Comparisons:** If you're doing text comparisons, you can set the `<Case>` tag's IgnoreCase attribute to "true" or "false" to tell the tag to perform a case-insensitive comparison (true) or a case-sensitive comparison (false).  

*   **Culturally-Sensitive Comparisons:** The `<Case>` tag includes a culture attribute. This can be set to an LCID (a culture ID) that will instruct the tag that comparisons should be made using the settings of that culture. If no culture attribute is set, the tag will attempt to use the current culture. NOTE: Boolean comparisons do not use a culture setting. Additionally, regular expressions use the system's culture by default. You cannot specify a culture for them. However, as with all comparisons, you can specify "invariant" as the culture to perform a culturally neutral comparison.  

*   **Evaluation Modes:** The `<xmod:Select>` tag provides one attribute: Mode. Valid values for this attribute are "standard" and "inclusive". By default, Mode is set to "standard".
    *   **Standard:** the tag will evaluate all `<Case>` tags until it finds one that evaluates to true. It will display that tag's content and stop evaluating. If no true `<Case>` tag is found and an `<Else>` tag has been supplied, the `<Else>` tag's content will be displayed.
    *   **Inclusive:** ALL `<Case>` tags will be evaluated. Any tags that evaluate to true will have their content displayed. If an `<Else>` tag has been supplied, its content will also be displayed.  

*   **Case Attributes:**
    *   **CompareType**: This allows you to tell the tag what type of data is being compared. This attribute is REQUIRED. Valid values are:
    *   *   `Numeric`: Value and expression are treated as numbers.
        *   `Float`: Value and expression are treated as floating-point numbers.
        *   `Date`: Value and expression are treated as date/time values.
        *   `Text`: Value and expression are treated as text.
        *   `Regex`: Value is compared against the regular expression pattern in expression. Valid operators are "=" and "<>".
        *   `Boolean`: Value and expression are treated as True/False values. When comparing numbers as booleans, 0 is False and all other numbers are True. Valid operators are "=" and "<>".
        *   `Role`: The expression is treated as a comma-delimited list of security role names. value is ignored. Valid operators are "=" and "<>". Note that if you are logged-in as host, the case statement will evaluate to True, even though the account may not be a member of one of the specified roles. To accurately test the functionality, you should login as a Non-host/superuser account.  

    *   **Value:** This is the value the tag will test. This attribute is REQUIRED unless CompareType is set to "Role".  

    *   **Expression**: This is the expression used to test the value. This can be a hard-coded value or field token. When CompareType is set to "Regex", expression should be a regular expression pattern. When CompareType is set to "Role", expression should be set to a comma-delimited list of security role names.  This attribute is REQUIRED.  

    *   **Operator**: Determines what kind of evaluation will be made. Valid values are:
        *   `=` (equality)
        *   `<` (less-than)
        *   `>` (greater-than)
        *   `<>` (not equal)
        *   `<=` (less-than or equal-to)
        *   `>=` (greater-than or equal-to)Example: `value="1"` and `expression="2"` and `operator="<"`. This would translate to: `1 < 2`. The value property is always on the left side of the operator while expression is always on the right. Not all operators function for all types of comparisons. With regular expression comparisons, you can specify "=" for "Is A Match" and "<>" for "Is NOT A Match", but the other operators have no relevance. If "<>" is not specified, then "=" is assumed.  

    *   **IgnoreCase**: If you're doing text comparisons, you can set to "true" or "false" to tell the tag to perform a case-insensitive comparison (true) or a case-sensitive comparison (false). Default is set to "true".  

    *   **Culture**: This can be set to a LocaleID (a culture ID) that will instruct the tag that comparisons should be made using the settings of that culture. If no culture attribute is set, the tag will attempt to use the current culture. NOTE: Boolean comparisons do not use a culture setting. Additionally, regular expressions use the system's culture by default. You cannot specify a culture for them. However, as with all comparisons, you can specify "invariant" as the culture to perform a culturally neutral comparison.  

## Example
```html {5-21,23-27}
<xmod:Template ...> 
    ... 
    <ItemTemplate>
      Your favorite color is: 
      <xmod:Select>
        <Case CompareType="text" Operator="=" Value='[[FavColor]]'
              Expression="blue" IgnoreCase="true">
          <span color="#0000FF">BLUE</span>
        </Case>
        <Case CompareType="text" Operator="=" Value='[[FavColor]]'
              Expression="red" IgnoreCase="true">
          <span color="#FF0000">RED</span>
        </Case>
        <Case CompareType="text" Operator="=" Value='[[FavColor]]'
              Expression="green" IgnoreCase="true">
          <span color="#00FF00">GREEN</span>
        </Case>
        <Else>
          We don't know your favorite color
        </Else>
      </xmod:Select><br />

      <xmod:Select>
        <Case CompareType="role" Operator="=" Expression="Administrators">
          (This area reserved for Admins only)
        </Case>
      </xmod:Select> 
    </ItemTemplate> 
    ... 
</xmod:Template>
```

