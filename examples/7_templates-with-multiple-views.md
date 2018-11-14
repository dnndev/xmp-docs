# Walkthrough: Multi-View Templates

_Creating Templates With Multiple Views_

In most cases, all you'll need to do in XMod Pro is setup solutions that add, edit, delete, and display data, but XMod Pro is much more powerful than that. In this walkthrough, we'll discuss how to create multiple views within the same template. By leveraging this capability, you can create very powerful self-contained solutions.

In this walkthrough we won't be creating all the components of a sample application. In this example, we want to focus on the mechanisms for creating multi-view templates without bogging down in the details of creating templates and forms as well as adding/editing/deleting the data. Those concepts have been covered elsewhere and we assume you're comfortable with them.

Previously, you've created a template using a single `<xmod:template>` tag. This creates a single view that can comprise a list view of your data and a detail view that displays the information contained within a single record. When the detail view is displayed, it replaces the list view. That's all well and good for most situations but what if you want to display a list of news headlines on the left side of your module and, when you click a headline, the full article is displayed on the right side of your module? With most modules, you're out of luck, but not with XMod Pro. All it takes is a second `<xmod:template>` tag and a new button type.

**Master View**

"Wait, " you may be saying, "How can a template contain more than one template?" To keep things straight, let's introduce the concept of a "master view". When you create a template via the Manage Templates page, you're actually creating a master view. This master view typically contains only one template tag, but it _can_ hold multiple template tags - enabling it to present the user with multiple views.

Each template tag is self-contained. It knows only how to deal with its own data. However, XMod Pro is designed so that one template can communicate with other templates in the same master view. Template A can tell Template B to display its list of records and Template C to display its detail view. More importantly, Template A can pass parameters to Template B and Template C that determines what data they're going to display.

So, for our news article example, we'd have two templates: Template A would display a list of headlines and Template B would display the full article. We'd create a simple two-column table to establish the layout - the Headline template goes in the left column and the Article template goes in the right column. The basic idea of how this would look is laid out below:


<table>
  <tr>
    <td style="vertical-align: top;width:50%">
      Headlines (Template A)<br />
      <a>Article One</a> by John Smith <br />
      <a>Article Two</a> by Adam Smith  <br />
      <a>Article Three</a> by Joanna Smith  
    </td>
    <td style="vertical-align: top; width: 50%">
      Article (Template B) <br />
      <strong>Article One</strong><br />
      by John Smith  <br />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non sem. 
      Suspendisse adipiscing iaculis massa. Proin sodales. Maecenas ac risus non 
      eros feugiat venenatis. Suspendisse odio magna, aliquam ut, tempus eget, 
      varius ut, sapien. Quisque orci eros, venenatis et, gravida at, 
      sagittis non, lacus.</p>
    </td>
  </tr>
</table>

This is just a simple HTML table in our master view - one row with two columns. How you choose to lay things out is completely up to you. Put an `<xmod:template>` tag in the left column and another `<xmod:template>` tag in the right column. The Headlines template would only contain the information necessary to display a list of news headlines, while the Article template would only contain the information needed to display the full article.

Beyond that, all we need is a way for the Headlines template to tell the Article template which article to display. This is handled by a new button type - called a command. As with most buttons in XMod Pro, the command button can be a push-button (`<xmod:commandbutton>`), a hyperlink (`<xmod:commandlink>`), or a clickable image (`<xmod:commandimage>`). In the mock-up above, the article titles are `<xmod:commandlink>` tags.

Here's what the command link code looks like:

```html
<xmod:CommandLink text='[[Headline]]'>
  <Command target="Article" type="Detail">
    <Parameter name="ArticleId" value='[[ArticleId]]'/>
  </Command>  
</xmod:CommandLink>
```

The Command Link control uses the article's Headline column for its display text. More importantly, it contains a Command tag. In this tag we've specified the target - i.e. the ID of the template we want to command. In this case, it's the Article template. Next, the "type" attribute allows us to specify which command we want to execute in that target template - the Detail data source in this case. Finally, we need to pass the identifier for the article to the detail template so it can retrieve the correct record. This is done with the `<Parameter>` tag. The parameter has a name of "ArticleId" and the parameter's value is supplied by the current record's ArticleId column. Important, the name of the parameter must match the parameter name in the `<DetailDataSource>` tag in the Article template.

The important components of the template are listed below. The HTML used for layout has been removed to simplify the code.

```html
<xmod:template id="Headlines">  
  <ListDataSource CommandText="SELECT ArticleId,Headline FROM Articles" />

  <ItemTemplate>
    <xmod:CommandLink text='[[Headline]]'>
      <Command target="Article" type="Detail">
        <Parameter name="ArticleId" value='[[ArticleId]]' />
      </Command>
    </xmod:CommandLink>
    by [[Author]]<br />
  </ItemTemplate>
  ...
</xmod:template>

<xmod:template id="Article">
  <DetailDataSource CommandText="SELECT * FROM Articles WHERE Id=@ArticleId">
    <Parameter name="ArticleId" value="-1" />
  </DetailDataSource>
  ...
  <DetailTemplate>
    <strong>[[Headline]]</strong><br />
    by [[Author]]<br />
    <div>[[Article]]</div>
  </DetailTemplate>
</xmod:template>
```

**Notes**:

*   The Command Link tag contains a Command tag that specifies "Article" as its target. The value of the target attribute must be the ID of the template you want to control.
*   The Command tag must specify if it wants to execute the Detail data source or List data source in that target template. In our case, we want to execute the Detail data source, so we supply "Detail" to the 'type' attribute.
*   The Command tag's Parameter child tag, if supplied must have its name match the name of the parameter in the target template's data source (the Detail data source in our example)
*   When the Command Link is clicked, XMod Pro will look for a template with the ID of "Article". If found, it will then search for the "Detail" data source, passing the value of ArticleId to it. The target template then takes over and retrieves its data and displays the detail template.
*   Notice the Parameter tag on the DetailDataSource. It's value is set to -1\. This is a dummy value. In our table all Article ID's are positive numbers, so -1 will ensure that no records are returned when the page is first loaded.

**The full template is below:**

```html
<table>
  <tr>
    <td>
      <xmod:template id="Headlines">  
        <ListDataSource CommandText="SELECT ArticleId,Headline FROM Articles"/>
        <ItemTemplate>
          <xmod:CommandLink text='[[Headline]]'>
            <Command target="Article" type="Detail">
              <Parameter name="ArticleId" value='[[ArticleId]]' />
            </Command>
            </xmod:CommandLink>
            by [[Author]]<br />
        </ItemTemplate>
      </xmod:template>
    </td>
  </tr>
  <tr>
    <td>
      <xmod:template id="Article">
        <DetailDataSource CommandText="SELECT * FROM Articles WHERE Id=@ArticleId">
          <Parameter name="ArticleId" value="-1" />
        </DetailDataSource>
        <DetailTemplate>
          <strong>[[Headline]]</strong><br />
          by [[Author]]<br />
          <div>[[Article]]</div>
        </DetailTemplate>
      </xmod:template>
    </td>
  </tr>
</table>
```