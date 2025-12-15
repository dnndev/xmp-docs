---
id: getting-started
title: Getting Started
category: Getting Started
context: all
summary: >-
  XMod Pro solutions consist of two fundamental components: forms and templates.
  Forms are used to add and edit data while templates are used to display data.
  While forms and templates generally work with the same data, there are no
  rules in XMod Pro that require that be the case. It's possible to use a form
  and template in the same module instance that operate on distinct data though
  most of the time they'll usually be linked.
keywords:
  - getting
  - started
---
# Getting Started

XMod Pro solutions consist of two fundamental components: forms and templates. Forms are used to add and edit data while templates are used to display data. While forms and templates generally work with the same data, there are no rules in XMod Pro that require that be the case. It's possible to use a form and template in the same module instance that operate on distinct data though most of the time they'll usually be linked.

## Multiple Views - One Module Instance

Even though each module instance can have only one form, it may contain multiple templates. This is really the heart of what makes XMod Pro so powerful and flexible. It allows you to have multiple views of data within the same module instance space on your page. Each template functions independently but can interact with the others.

For instance, clicking the Headline link in a list of headlines in one template can call up the full article in a second template. Taking it a step further, clicking that Headline can not only call up the full article, but it can also spawn a list of related articles the user may be interested in. All this happens with a single click.

Here's another, less interactive, but no less powerful example. Take the humble customer invoice. In one area, you display the customer's name and address (from the Customers table). Below that you can display the customer's list of orders (from the Orders table, filtered by the Customer's ID). Below that, you can display a list of payments the customer has made (from the Payments table, filtered by the Customer's ID). This can all be displayed within a single module instance.

What's even better is you don't have to do any programming to pull this off. All you supply is a few SQL commands (SELECT statements or stored procedure calls) and combine that with your own HTML and XMod Pro's simple field tokens. At run-time, those tokens are replaced with the values from your query. You can use as much or as little HTML, CSS, Javascript as you need to create the look you desire.

XMod Pro also provides a number of HTML-like tags that provide additional functionality. For instance, if your data contains a currency value, you can use the Format tag to format it with a dollar sign and two decimal places. That same Format tag can also format dates, numbers, and text. Do you need to conditionally display some text based on the user's security role or based on some other condition? Then use the Select tag.

The upshot of all of this is you can have a complete database solution using *your* data and presented according to *your* needs, with no programming, and remarkably little work. We don't ask you to learn a complicated new programming language or script.

If you've used XMod, you'll feel right at home in XMod Pro. Though XMod Pro was written from scratch, it still adheres to the spirit of XMod and shares a number of its conventions. If you haven't used XMod, don't worry. If you know basic HTML and can write basic SQL statements to retrieve, insert, and update data you will have no problems getting started with XMod Pro.

::: warning
As its name implies, XMod Pro is designed for professionals. It gives you a lot of power and with that power, **it is your responsibility to ensure the integrity of your data by validating user input (we provide tools to help you do this) and maintaining recent backups of your data**. This is true for any data-based application and isn't unique to XMod Pro. For instance, a poorly written DELETE command could delete all the records in your table. **The developers and owners of XMod Pro are not responsible for any data loss or data corruption or any related costs or damages caused as a result of using XMod Pro.**
:::
