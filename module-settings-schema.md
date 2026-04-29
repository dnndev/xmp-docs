---
id: module-settings-schema
title: Module Settings Schema
category: Reference
context: all
since: '5.0'
summary: >-
  The #settings directive lets view and form authors declare the custom
  module settings their file expects, so the Configure page can present
  them with the right labels, types, and input controls.
keywords:
  - module settings
  - settings schema
  - "#settings"
  - directive
  - custom settings
  - schema
related:
  - configuring-xmod-pro
---

# Module Settings Schema <Badge type="info" text="v5.0" />

XMod Pro's **Custom Module Settings** are per-instance values referenced from your view or form via [`[[Module:settingName]]`](tokens/module.md) tokens — handy for letting an admin adjust things like page size, headings, or feature toggles without editing the file itself.

In v4, those settings were untyped name/value pairs that the admin had to know about and enter manually. In v5 you can **declare** them with a `#settings` directive at the top of your view or form. The [Configure page](configuring-xmod-pro.md#custom-settings) reads that declaration and presents one row per setting — with a label, optional help text, a toggle, and an input control matched to the data type.

## Where the directive goes

Place the directive once near the top of the view or form file, inside an XMP comment block. In the editor, use the user-code comment syntax `[-- #settings ... --]`. When the file is written to disk as ASCX, the same content is wrapped in an ASP.NET comment `<%-- #settings ... --%>`. Both formats are recognized.

The directive content is a JSON object with two top-level keys: an optional `description` and a required `settings` array.

```html
[-- #settings
{
  "description": "Settings for the Article List view",
  "settings": [
    { "Name": "PageSize", "DefaultValue": 10, "Max": 100 },
    { "Name": "Layout", "Items": ["list", "card", "table"] },
    { "Name": "Heading", "HelpText": "Optional heading shown above the list" },
    { "Name": "ShowAddButton", "DefaultValue": true }
  ]
}
--]
```

If a file has more than one `#settings` block, only the first is used and a warning is recorded.

## Setting Properties

| Property | Required | Default | Description |
|----------|----------|---------|-------------|
| [Name](#prop-name) <span style="color:red; font-weight:bold; font-size:1.2em;">*</span> | string | | The setting's identifier. Used in `[[Module:Name]]` tokens and as the `UDS_Name` storage key. Word characters only (`A-Z`, `a-z`, `0-9`, `_`). |
| [Label](#prop-label) | string | inferred from `Name` | Human-readable label shown in the Configure UI. |
| [DataType](#prop-datatype) | string | inferred | One of `text`, `integer`, `boolean`, `choice`. |
| [DefaultValue](#prop-defaultvalue) | matches `DataType` | none | Informational default shown when the toggle is off; pre-populates the input the first time it's toggled on. |
| [HelpText](#prop-helptext) | string | none | Description shown below the input control. |
| [Required](#prop-required) | boolean | `false` | When `true`, the toggle is forced on and a value must be supplied before saving. |
| [Min / Max](#prop-minmax) | integer | none | Range constraints for `integer` settings. |
| [Items](#prop-items) | array | none | Options for `choice` settings. String array (value = label) or `{Text, Value}` objects. |
| [Group](#prop-group) | string | none | Reserved for future use — settings sections. Not rendered in v5.0. |
| [Access](#prop-access) | string | `"host"` | Reserved for future use — Admin-vs-Host visibility. Not honored in v5.0; all settings still require Host access. |

<span style="color:red; font-weight:bold; font-size:1.2em;">*</span> Required property

## Property Details

### Convention over configuration

`{ "Name": "Heading" }` is a complete, valid setting. Everything else is inferred from `Name` and any other properties you supply, using rules designed to do the right thing without explicit configuration.

---

*   <span id="prop-name">**Name**</span>: The setting's identifier. It's the key used by `[[Module:Name]]` tokens at runtime, and it's the suffix on the `UDS_Name` storage key in DNN's ModuleSettings table. Only word characters are allowed (letters, digits, underscores) — no spaces, hyphens, or punctuation. Duplicate `Name` values across settings are a parse error.

*   <span id="prop-label">**Label**</span>: The text shown in the Configure UI for this setting. When omitted, XMod Pro generates one by splitting `Name` at PascalCase boundaries. Acronyms are kept intact:

    | Name | Generated Label |
    |------|-----------------|
    | `PageSize` | Page Size |
    | `ShowAddButton` | Show Add Button |
    | `HTMLOutput` | HTML Output |
    | `ID` | ID |
    | `showURLField` | Show URL Field |

    Set `Label` explicitly when the auto-generated form doesn't read well or when you want a different display name (for example, "Items per page" instead of "Page Size").

*   <span id="prop-datatype">**DataType**</span>: One of `text`, `integer`, `boolean`, or `choice`. When omitted, XMod Pro infers the type from the other properties using these rules, in order:

    1. `Items` is present → `choice`
    2. `DefaultValue` is `true` or `false` → `boolean`
    3. `DefaultValue` is a number, or `Min`/`Max` is set → `integer`
    4. Otherwise → `text`

    Setting `DataType` explicitly overrides inference. The most common reason to do that: you want a `text` input even though you've supplied an `Items` array (which would otherwise infer `choice`).

    Each data type maps to a specific input control in the Configure UI:

    | DataType | Input control |
    |----------|---------------|
    | `text` | Text input |
    | `integer` | Number input. `Min`/`Max` are applied as both HTML attributes and JS validation. |
    | `boolean` | Checkbox. |
    | `choice` | Select dropdown populated from `Items`. If the setting is not `Required`, the dropdown also includes a "(Use Default)" option that means *no value saved*. |

*   <span id="prop-defaultvalue">**DefaultValue**</span>: A *suggested* value, not a fallback that gets stored automatically. It serves three purposes:

    - Shown as informational text on the row when the toggle is off ("Default: 10")
    - Pre-fills the input the first time the toggle is flipped on
    - For `choice`, must match one of the `Items` values (validated at parse time)

    The literal type matters — use a JSON number for `integer` settings and a JSON boolean (`true` / `false`) for `boolean` settings. Decimal numbers are not supported in v5.0; use `DataType: "text"` if you need to store a decimal.

    Omitting `DefaultValue` means the `[[Module:Name]]` token resolves to an empty string when no value has been saved — the same behavior as v4.x for unset settings.

*   <span id="prop-helptext">**HelpText**</span>: A short description rendered below the input control. Useful for explaining what the setting does, what units to use, or what valid values look like. Plain text — no markdown.

*   <span id="prop-required">**Required**</span>: When `true`, the row's toggle is forced on and can't be turned off. If the user clears the value before saving, the save is blocked with an inline validation message. Use this for settings the view or form genuinely won't work without (an API key, a folder path, etc.).

*   <span id="prop-minmax">**Min / Max**</span>: Range constraints for `integer` settings. Both are optional and can be set independently. They're enforced two ways: as HTML `min`/`max` attributes on the number input (browser-side spin buttons), and as JavaScript validation on save (catches users who type an out-of-range value directly). Setting either property when no `DataType` is given is enough to infer `integer`.

*   <span id="prop-items">**Items**</span>: The options for a `choice` setting. Two formats are accepted, and you can mix them in the same array:

    **String array** — when the displayed text and the stored value are identical:

    ```json
    "Items": ["list", "card", "table"]
    ```

    **`{Text, Value}` objects** — when the displayed text should differ from the stored value:

    ```json
    "Items": [
      { "Text": "Card Grid",  "Value": "card" },
      { "Text": "Data Table", "Value": "table" },
      { "Text": "Plain List", "Value": "list" }
    ]
    ```

    The dropdown shows `Text`; the saved value is `Value`. If you set a `DefaultValue` on a `choice` setting, it must match one of the `Value` strings (string array entries count as both Text and Value).

*   <span id="prop-group">**Group**</span> <Badge type="warning" text="reserved" />: Reserved for a future feature where settings can be organized into named sections in the Configure UI. The property is parsed and preserved on the server side, but it's not rendered in v5.0 — every setting appears in a single flat list.

*   <span id="prop-access">**Access**</span> <Badge type="warning" text="reserved" />: Reserved for a future feature where some settings can be made visible to Administrators (in addition to Hosts). The property is parsed and preserved, but in v5.0 all custom settings still require Host access regardless of this value.

## Examples

### Minimal — one setting, no inference

```json
{ "settings": [ { "Name": "Heading" } ] }
```

`Heading` becomes a `text` setting with the label "Heading", no help text, no default, and a plain text input in the Configure UI.

### Range-bounded number with help text

```json
{
  "settings": [
    {
      "Name": "PageSize",
      "DefaultValue": 10,
      "Min": 1,
      "Max": 100,
      "HelpText": "How many records to show per page (1–100)."
    }
  ]
}
```

`integer` is inferred from `DefaultValue` being numeric. The label is auto-generated as "Page Size". The input is an HTML number control bounded to 1–100.

### Choice with friendly labels

```json
{
  "settings": [
    {
      "Name": "Layout",
      "DefaultValue": "card",
      "Items": [
        { "Text": "Plain List", "Value": "list" },
        { "Text": "Card Grid",  "Value": "card" },
        { "Text": "Data Table", "Value": "table" }
      ]
    }
  ]
}
```

`choice` is inferred from `Items`. The dropdown shows the friendly text but stores the short value, which is what `[[Module:Layout]]` returns at runtime.

### Required text with explicit label

```json
{
  "settings": [
    {
      "Name": "GoogleApiKey",
      "Label": "Google Maps API Key",
      "Required": true,
      "HelpText": "Get one at console.cloud.google.com."
    }
  ]
}
```

The toggle is forced on. The save is blocked until a value is entered.

## Merge Behavior

When a module instance has both a view and a form assigned, the Configure page reads the `#settings` block from each file and merges them by `Name` into a single list. If both files declare a setting with the same `Name`, the **view's definition wins** and a warning is shown to the admin ("Setting 'X' is defined in both the template and form. Using the template definition.").

When the assigned view or form changes, the page re-reads the schema and updates the list. Saved values for settings that no longer appear in the new schema move to the **Other Settings** section, where they can be kept or removed individually.

## Validation Errors

Schema errors are reported on the Configure page above the settings list, but they don't block parsing — whatever could be parsed is still shown. This way a single typo doesn't hide all the settings.

Common errors:

| Error | Cause |
|-------|-------|
| Setting at index N has no Name or Name is empty | Missing or blank `Name` property |
| Setting 'X' has invalid characters in Name | `Name` contains characters other than letters, digits, underscores |
| Duplicate setting name: 'X' | Two entries share the same `Name` |
| Setting 'X' Items array is empty | `Items` was supplied but contained no entries |
| Setting 'X' DefaultValue (...) does not match any Items value | `DefaultValue` for a `choice` setting doesn't match any of the values |
| Setting 'X' has decimal DefaultValue (3.5) | Decimals are not supported for `integer` settings — use `DataType: "text"` instead |
| Setting 'X' DefaultValue (200) exceeds Max (100) | `DefaultValue` is outside the declared range |
| Multiple #settings blocks found. Only the first block is used | More than one directive in the file (warning, not error) |

## Backward Compatibility

The `[-- ... --]` comment syntax is silently ignored by XMod Pro v4.x. A view or form with a `[-- #settings --]` block runs unchanged on older XMP installations — the directive is invisible there. The schema-driven UI is the only thing that's new in v5.0; the underlying `UDS_*` storage and the `[[Module:settingName]]` token continue to work exactly as before.
