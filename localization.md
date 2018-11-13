# Localization

XMod Pro provides a number of unique ways to localize not only the static text in your forms and views, but also your content.

## Getting the Current Locale ID

(New to version 2.1) To render the locale ID of the currently selected culture out to your form or view (template), use the `[[Request:Locale]]` token. If the user has selected Spanish from Mexico, the token will render `es-MX`; For English in Great Britain, it will be `en-GB`; for French spoken in France, it will be `fr-FR`.

## Formatting Display Values

Use the [`<xmod:format>`](./template-controls/format.md) tag's InputCulture and OutputCulture attributes for handling currency and dates. See the linked topic for more details.

## Date Input in Forms

Use the [`<DateInput>`](./form-controls/date-input.md) control's _Culture_ attribute. See the linked topic for more details.

## Localizing Static Text

(New to version 2.1) If you just need to change the text that is displayed on your forms and views such as form labels or other text, you can use the `[[Localize:keyName]]` token in combination with resource files (.resx). The Localize token functions like the other XMod Pro tokens. At run-time, it will be replaced with the translated text for the currently selected culture.

### How it Works

First, you need to create a Resource File for each culture for which you have translations. Resource files follow the standard format for localization resource files in DotNetNuke. Files should be named using the following form:

*   `FormName.ascx.localeID.resx` for forms or
*   `TemplateName.ascx.localeID.resx` for templates

Some examples:

*   `ContactUs.ascx.es-MX.resx` (Spanish-Mexico resource file)
*   `EmployeeList.ascx.fr-FR.resx` (French-France resource file)

The resource file's base name must match the name of the form/templat to with which it is associated followed by `.ascx`. This is then followed by `.` plus the locale ID and `.resx`.

## Resource File Example

The format of the resource file should follow that outlined for standard localization resource files in DotNetNuke. A sample file is provided below. The first section and the closing `</root>` tag at the end, in gray, are boilerplate code and can be copied and pasted directly into your file. The section in red is the area you customize with your own text.

```xml
<?xml version="1.0" encoding="utf-8"?>
<root>
  <xsd:schema id="root" xmlns="" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:msdata="urn:schemas-microsoft-com:xml-msdata">
    <xsd:import namespace="http://www.w3.org/XML/1998/namespace" />
    <xsd:element name="root" msdata:IsDataSet="true">
      <xsd:complexType>
        <xsd:choice maxOccurs="unbounded">
          <xsd:element name="metadata">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="value" type="xsd:string" minOccurs="0" />
              </xsd:sequence>
              <xsd:attribute name="name" use="required" type="xsd:string" />
              <xsd:attribute name="type" type="xsd:string" />
              <xsd:attribute name="mimetype" type="xsd:string" />
              <xsd:attribute ref="xml:space" />
            </xsd:complexType>
          </xsd:element>
          <xsd:element name="assembly">
            <xsd:complexType>
              <xsd:attribute name="alias" type="xsd:string" />
              <xsd:attribute name="name" type="xsd:string" />
            </xsd:complexType>
          </xsd:element>
          <xsd:element name="data">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="value" type="xsd:string" minOccurs="0" msdata:Ordinal="1" />
                <xsd:element name="comment" type="xsd:string" minOccurs="0" msdata:Ordinal="2" />
              </xsd:sequence>
              <xsd:attribute name="name" type="xsd:string" use="required" msdata:Ordinal="1" />
              <xsd:attribute name="type" type="xsd:string" msdata:Ordinal="3" />
              <xsd:attribute name="mimetype" type="xsd:string" msdata:Ordinal="4" />
              <xsd:attribute ref="xml:space" />
            </xsd:complexType>
          </xsd:element>
          <xsd:element name="resheader">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="value" type="xsd:string" minOccurs="0" msdata:Ordinal="1" />
              </xsd:sequence>
              <xsd:attribute name="name" type="xsd:string" use="required" />
            </xsd:complexType>
          </xsd:element>
        </xsd:choice>
      </xsd:complexType>
    </xsd:element>
  </xsd:schema>
  <resheader name="resmimetype">
    <value>text/microsoft-resx</value>
  </resheader>
  <resheader name="version">
    <value>2.0</value>
  </resheader>
  <resheader name="reader">
    <value>System.Resources.ResXResourceReader, System.Windows.Forms, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089</value>
  </resheader>
  <resheader name="writer">
    <value>System.Resources.ResXResourceWriter, System.Windows.Forms, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089</value>
  </resheader></span> <span style="color: #ff0000;"><data name="Name.Text" xml:space="preserve">
    <value>Nombre</value>
  </data>
  <data name="Address.Text" xml:space="preserve">
    <value>Dirección</value>
  </data>
  <data name="City.Text" xml:space="preserve">
    <value>Ciudad</value>
  </data></span>
<span style="color: #808080;"></root>
```

In the example above, we've created a small translation file for Spanish/Mexico. You can create one or more resource files for each language you need to provide translations for. Note that you should also provide a default resource file for your fallback language. Additionally, for the default/fallback language to be loaded properly, you should define a fallback language for each language you install in your DNN website.

Within each file, for each block of text you want to translate, you must specify a `<data>` tag. This tag has a name property which contains the key name that XMod Pro will use to look up the translation. This name should be in the form "keyName.Text". The .Text portion is required for each of your names. The `<data>` tag also contains a `<value>` tag that contains the text you want to inject into the form or template.

### Where to Place the Resource File

Once you've created your resource file, save it in the same directory in which your form/template is stored. For forms, this is: `/Portals/_default/XModPro/Forms/XX` where _XX_ is the Portal ID. For templates, the folder is: `/Portals/_default/XModPro/Templates/XX` where _XX_ is the portal's ID.

### Linking Your Form/Template to the Resource File

In your form/template, you would simply add a localization token wherever it was needed - like so:

```xml
<AddForm>
...
   <Label for="NameTextBox" text='[[Localize:Name]]'/>
   <TextBox id="NameTextBox" DataField="Name" DataType="String" /><br />
   <Label for="AddressTextBox" text='[[Localize:Address]]'/>
   <TextBox id="AddressTextBox" DataField="Address" DataType="String" /><br />
   <Label for="CityTextBox" text='[[Localize:City]]'/>
   <TextBox id="CityTextBox" DataField="City" DataType="String" /><br />
...
</AddForm>
```

At run-time, if the user has selected es-MX as his/her culture, then those tokens will be replaced by: Nombre, Dirección, Ciudad.

## Content Localization

Content localization is a tricky issue. It is potentially more complicated when an application like XMod Pro does not have control over the data. To keep things as simple and flexible as possible, we have implemented the ability to use multiple forms and/or templates for this purpose. At run-time, XMod Pro will look to see if a form/template has been defined for the currently selected culture. If found, that file will be loaded. If not, XMod Pro will load the 'default' file.

This method has many benefits:

1.  You can avoid having to create Resource Files and use `[[Localize:keyName]]` tokens.
2.  You can create the forms/templates just as you do standard forms and templates
3.  You have the opportunity to define distinct data commands for each culture. You could even write/read from distinct culture-specific database tables.
4.  You can have a completely different layout and even completely different controls for each culture.
5.  You can send notification emails to different addresses based on the culture.

### How It Works

First, define the form/template that will be your 'default' or 'fallback' file using the tools within XMod Pro.

Second, either create another form/template from scratch or simply copy your form/template to act as a starting point. This second file must follow the following naming convention:

```
BaseName.localeID
```

Where _BaseName_ is the name of your 'default' form/template and _localeID_ is the ID of the culture (es-MX, fr-FR, en-GB, etc.)

So, for a form called "ContactUs", you might create the following forms:

*   ContactUs   (the default form)
*   ContactUs.es-MX   (Spanish in Mexico)
*   ContactUs.fr-FR     (French in France)
*   ContactUs.en-GB   (English in Great Britain)

The default file is always required. You can create as many or as few localized files as you need. Simply define your localized forms/templates as you would any other form/template, making changes as needed to accommodate the language

### Configuring Your Module to Use Localized Forms/Templates

There is nothing special that you need to do when configuring your XMod Pro modules to use the localized forms and templates. Simply select the BASE form/template. If a localized version of the form/template exists and it matches the user's currently selected culture, that form/template will be loaded automatically. You can also force a certain localized file to be loaded by selecting it specifically on the configuration page.

That's all there is to it.