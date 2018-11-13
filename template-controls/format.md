# <xmod:Format>

<a name="top"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

The Format tag allows you to present your data in a more user-friendly format. With it, you can format currency, numbers, dates. You can perform text substitutions and regular expression substitutions. It also provides you with the ability to cloak text - i.e. obfuscate it so that web 'bots have more difficulty scraping your web pages for data like email addresses.

<a name="syntax" xmlns=""></a>

## Syntax

<div xmlns="">`<xmod:Format`  
`    Type="Numeric|Float|Date|Text|RegEx|Cloak|HtmlEncode|HtmlDecode|UrlEncode|UrlDecode"  
    Value="_string_"  
    Pattern="_string_"  
    Replacement="_string_"  
    MaxLength="_integer_"  
    InputCulture="_locale ID_"  
    OutputCulture="_locale ID_"``/>`</div>

## Remarks

The Format tag is used to operate on data - usually from form fields, but it can also operate on hard-coded values. It gives you the ability to take a value and adjust its appearance. For instance the value "1" could be formatted as "01", "1", or "1.00". The value "2005-05-21" could be formatted like "05/21/2005", "Sat May 21 2005", etc.

The Format tag will format values as numbers (no floating point), floating-point numbers, and dates. It will also allow you to perform text substitutions as well as regular expression substitutions. Format tags are empty tags, meaning that they do not contain any inner text. Please follow the XHTML syntax for empty tags which is to write them as a single tag. (i.e. <xmod:format ... /> See example)

*   **Type:** This determines how it should treat the value it will be formatting. For numbers and dates, the input value must be convertible to the type you specify. Valid values are below:

*   **Numeric**: the input value will be treated as a whole number (1, 100, -1, 1000, etc.).
*   **Float**: the input value will be treated as a floating point number (1.01, -0.315, etc.)
*   **Date**: the input will be treated as a date/time value (5/21/05, 2005-05-21 1:00 pm, etc.)
*   **Text**: the input is treated as text. This mode allows you to perform replacements in that text by using placeholders ({0}, {1}, etc.) and a list of replacement values. The first item in the list would replace {0}, the second would replace {1}, and so on. (see examples for more info)
*   **RegEx**: the input is treated as text. This mode allows you to put your regular expression skills to work to perform magical feats of text manipulation. In the pattern attribute, you would place the regular expression pattern for matching. In the replacement attribute, you would place your regular expression replacement pattern (see examples for more info)
*   **Cloak**: This type of formatting can be used for potentially sensitive information that you want to hide from robots and spiders which crawl the web looking to harvest information. The primary use for this is to obfuscate email addresses but other data can be used as well. When using the cloak format type, you only need to supply a value. All other attributes are ignored.  

    NOTE: Cloaking uses Javascript to obscure the data within the HTML source code. If Javascript is enabled in the browser, the text will display. If Javascript is disabled, the text will not display. While this is effective at hiding data like email addresses from spam bots, no solution is foolproof. Additionally, this method cannot be used to supply data to a "mailto" hyperlink because of the Javascript involved.
*   **HtmlEncode/Decode**: the input value will have its HTML encoded (or decoded) before rendering out to the page.
*   **UrlEncode/Decode**: the input value will be encoded for URL's (or decoded from a URL-encoded value).  

*   **Value:** This is the input value that you intend to format. It can be hard-coded - i.e. a value you type in, or it can be a field token representing the value of a field. NOTE: Sometimes the value you're dealing with may contain double and/or single quotes. In many cases this may prevent the parser from correctly recognizing the correct value of the "value" attribute. In these cases, you can place the value inside the opening and closing tags. See the examples section for details.  

*   **Pattern:** This is the pattern XMod will use to perform the formatting. What you place here will depend on what type you have specified. Some examples are listed below.
    *   **Numeric**: "0" , "#0", "00", "0.00", "c" (currency), "g" (general number format). On a US system, the results for the input value "1" would be: "1", "1", "01", "1.00", "$1.00", "1"
    *   **Date**: "MM/dd/yyyy" (01/31/2005), "ddd MMM dd yyyy" (Wed Apr 13 2005)
    *   **Text**: For text replacements the "pattern" ({0}, {1}, etc.) is embedded in the input value, so no pattern is specified.
    *   **RegEx**: The input value may be: "Hello NAME, How's the CONDITION" In this case your pattern may be: "(.*)(NAME)(.*)(CONDITION)" and your replacement value might be "$1John$3weather" with the result being: "Hello John, How's the weather".
    *   **Cloak**: This attribute is not used.  

*   **Replacement:** The replacement is used for text and regex formatting types. What you place in this attribute depends on which formatting type you're using:
    *   **Text**: For text replacements, you would supply a comma-delimited list of values to use for the replacements. Their order will determine which placeholder (i.e. {0}, {1}, etc.) they replace. For example, if the input value is "Hello {0}, How's the {1}?" your replacement might be "John,weather" with the result being "Hello John, How's the weather?"
    *   **RegEx**: For regular expression-based formatting, you would specify a pattern to match in the pattern attribute and use the captured items in your replacement. For example: The input value may be: "Hello NAME, How's the CONDITION" In this case your pattern may be: "(.*)(NAME)(.*)(CONDITION)" and your replacement value might be "$1John$3weather" with the result being: "Hello John, How's the weather". Notice there are 4 captures in the pattern. the first and third match any characters. The second and fourth match "NAME" and "CONDITION" respectively. In your replacement, the $1 stands for the first capture, $3 stands for the 3rd capture.  

*   **MaxLength:** If this value is 1 or greater, the format tag will truncate the resulting text and add an ellipsis (...). The total number of characters (including the ellipsis) will not exceed the number of characters specified. This attribute is ignored if the Format Type is Cloak because truncating the results could prevent the cloaked text from displaying correctly.  

*   **InputCulture/OutputCulture:**If the input value is in a culture-specific format, you can specify what culture should be used when trying to convert that value. Dates, for instance, vary widely based on culture. There are many pre-defined culture names (known as LCID's or locale ID's) which are valid values such as: en-US (English - United States), en-GB (English - United Kingdom), fr-FR (French - France), de-DE (German - Germany), es-ES (Spanish - Spain), es-MX (Spanish - Mexico, etc.
    *   **InputCulture** is used to tell the tag what culture to assume when processing the incoming value (the value attribute).
    *   **OutputCulture** is used to tell the tag what culture to assume when performing the formatting.  

    *   For example, the input value may be a US date, but you want to format it for display to a French audience. In that case, you would specify "en-US" as the InputCulture and "fr-FR" as the OutputCulture. When used this way, you can avoid using the pattern attribute altogether and rely on the default formatting for the respective cultures. See the "date" examples below for an example of this.

[Back to top](#top)  
<a name="example" xmlns=""></a>

## Example

<div xmlns="">`<xmod:Template ...>`  
`    ...`  
`    <ItemTemplate>  

<span style="font-size: 10pt;">EXAMPLE #1</span>  
      If Quantity=5 Output Value Will Be: 05.00`</div>

<div xmlns="">`  
      <xmod:Format Type="Float" Value='[[Price]]' Pattern="0#.00" />  

<span style="font-size: 10pt;">EXAMPLE #2</span>  
      If Quantity=5 Output Value Will Be: 05`</div>

<div xmlns="">`  
      <xmod:Format Type="Numeric" Value='[[Quantity]]' Pattern="d2" />`</div>

<div xmlns="">`  
      NOTES: The "d" pattern is a pre-defined pattern for working  
      with numeric values. It works only with whole numbers. It  
      instructs the tag to display the value as a decimal (base 10).  
      The "2" instructs the tag to display the number as a 2 digit  
      number.  

<span style="font-size: 10pt;">EXAMPLE #3</span>  
      If Quantity=5  
        Output On US Systems:$5.00  
        Output On United Kingdom Systems:£5.00`</div>

<div xmlns="">`  
      <xmod:Format Type="Float" Value='[[Price]]' Pattern="c" />`</div>

<div xmlns="">`  
      NOTES: No output culture is specified so the output defaults  
      to the web server's culture. The "c" pattern stands for  
      formatting the value as currency.  
`</div>

<div xmlns="">  
`<span style="font-size: 10pt;">EXAMPLE #4</span>  
      If Quantity=5  
        Output On US Systems:£5.00  
        Output On United Kingdom Systems:£5.00`</div>

<div xmlns="">`  
      <xmod:Format Type="Numeric" Value='[[Price]]' Pattern="c"  
        OutputCulture="en-GB" />`</div>

<div xmlns="">`  
      NOTES: United Kingdom English is specified as the output  
      culture, effectively forcing the value to be formatted  
      with the £ symbol, even on US systems.`</div>

<div xmlns="">`<span style="font-size: 10pt;">EXAMPLE #5</span>  
      If theDateColumn=04/25/2013  
        Output Value Will Be:04/25/2013`</div>

<div xmlns="">`  
      <xmod:Format Type="Date" Value='[[theDateColumn]]' Pattern="MM/dd/yyyy" />  
``  

    </ItemTemplate>`  
`    ...`  
`</xmod:Template>`</div>

[Back to top](#top)