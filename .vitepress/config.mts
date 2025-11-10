import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "XMod Pro Documentation",
  description: "XMod Pro Documentation for DNN",
  base: "/help/xmodpro/",
  
  head: [
    // Google Analytics
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=UA-1237368-1' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-1237368-1');`
    ]
  ],

  markdown: {
    lineNumbers: true
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    search: {
      provider: 'algolia',
      options: {
        appId: 'YOUR_APP_ID', // You'll need to update this
        apiKey: 'e151b39c75271f8362bee7f5caad0a7d',
        indexName: 'xmodpro'
      }
    },

    editLink: {
      pattern: 'https://github.com/dnndev/xmp-docs/edit/v.5.x/:path',
      text: 'Help us improve this page!'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dnndev/xmp-docs' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Activating', link: '/activating' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: 'Core Features',
        items: [
          { text: 'Control Panel', link: '/control-panel' },
          { text: 'Manage Forms', link: '/manage-forms' },
          { text: 'Form Builder', link: '/form-builder' },
          { text: 'Manage Templates', link: '/manage-templates' },
          { text: 'Manage Feeds', link: '/manage-feeds' },
          { text: 'Database Tools', link: '/database-tools' },
          { text: 'Inline Editor', link: '/inline-editor' },
          { text: 'Snippets', link: '/snippets' },
          { text: 'Using JavaScript', link: '/using-javascript' },
          { text: 'Configuring XMod Pro', link: '/configuring-xmod-pro' },
          { text: 'Localization', link: '/localization' },
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'FAQ', link: '/faq' },
          { text: 'Revision History', link: '/revision-history' },
          { text: 'EULA', link: '/eula' },
          { text: 'Data Types', link: '/data-types' },
          { text: 'Unit Types', link: '/unit-types' },
        ]
      },
      {
        text: 'Tutorials',
        collapsed: true,
        items: [
          { text: '1. Listing Users', link: '/tutorials/1_listing-users' },
          { text: '2. User Detail View', link: '/tutorials/2_user-detail-view' },
          { text: '3. Feedback Form', link: '/tutorials/3_feedback-form' },
          { text: '4. Saving Feedback Form Data', link: '/tutorials/4_saving-feedback-form-data' },
          { text: '5. Displaying Feedback Form Data', link: '/tutorials/5_displaying-feedback-form-data' },
          { text: '6. Editing/Deleting Feedback Form Data', link: '/tutorials/6_editing-deleting-feedback-form-data' },
          { text: '7. Templates with Multiple Views', link: '/tutorials/7_templates-with-multiple-views' },
        ]
      },
      {
        text: 'Form Controls',
        collapsed: true,
        items: [
          { text: 'Action', link: '/form-controls/action' },
          { text: 'Add Button', link: '/form-controls/add-button' },
          { text: 'Add/Edit Form', link: '/form-controls/add-edit-form' },
          { text: 'Add Image', link: '/form-controls/add-image' },
          { text: 'Add Link', link: '/form-controls/add-link' },
          { text: 'Add To Roles', link: '/form-controls/add-to-roles' },
          { text: 'Add User', link: '/form-controls/add-user' },
          { text: 'AJAX Button', link: '/form-controls/ajax-button' },
          { text: 'AJAX Image', link: '/form-controls/ajax-image' },
          { text: 'AJAX Link', link: '/form-controls/ajax-link' },
          { text: 'Calendar Button', link: '/form-controls/calendar-button' },
          { text: 'Calendar Image', link: '/form-controls/calendar-image' },
          { text: 'Calendar Link', link: '/form-controls/calendar-link' },
          { text: 'Cancel Button', link: '/form-controls/cancel-button' },
          { text: 'Cancel Image', link: '/form-controls/cancel-image' },
          { text: 'Cancel Link', link: '/form-controls/cancel-link' },
          { text: 'Captcha', link: '/form-controls/captcha' },
          { text: 'Checkbox', link: '/form-controls/checkbox' },
          { text: 'Checkbox List', link: '/form-controls/checkbox-list' },
          { text: 'Continue Button', link: '/form-controls/continue-button' },
          { text: 'Continue Image', link: '/form-controls/continue-image' },
          { text: 'Continue Link', link: '/form-controls/continue-link' },
          { text: 'Control DataSource', link: '/form-controls/control-datasource' },
          { text: 'Date Input', link: '/form-controls/date-input' },
          { text: 'Dropdown List', link: '/form-controls/dropdown-list' },
          { text: 'Dual List', link: '/form-controls/dual-list' },
          { text: 'Email', link: '/form-controls/email' },
          { text: 'File Upload', link: '/form-controls/file-upload' },
          { text: 'HTML Input', link: '/form-controls/html-input' },
          { text: 'Include', link: '/form-controls/include' },
          { text: 'jQuery Ready', link: '/form-controls/jquery-ready' },
          { text: 'Label', link: '/form-controls/label' },
          { text: 'Listbox', link: '/form-controls/listbox' },
          { text: 'Login', link: '/form-controls/login' },
          { text: 'Markdown', link: '/form-controls/markdown' },
          { text: 'Panel', link: '/form-controls/panel' },
          { text: 'Password', link: '/form-controls/password' },
          { text: 'Radio Button', link: '/form-controls/radio-button' },
          { text: 'Radio Button List', link: '/form-controls/radio-button-list' },
          { text: 'Redirect', link: '/form-controls/redirect' },
          { text: 'Register', link: '/form-controls/register' },
          { text: 'Remove From Roles', link: '/form-controls/remove-from-roles' },
          { text: 'Script Block', link: '/form-controls/script-block' },
          { text: 'Silent Post', link: '/form-controls/silent-post' },
          { text: 'Tabstrip', link: '/form-controls/tabstrip' },
          { text: 'Text', link: '/form-controls/text' },
          { text: 'Textarea', link: '/form-controls/textarea' },
          { text: 'Textbox', link: '/form-controls/textbox' },
          { text: 'Update Button', link: '/form-controls/update-button' },
          { text: 'Update Image', link: '/form-controls/update-image' },
          { text: 'Update Link', link: '/form-controls/update-link' },
          { text: 'Update User', link: '/form-controls/update-user' },
          { text: 'Validate Action', link: '/form-controls/validate-action' },
          { text: 'Validate Checkbox', link: '/form-controls/validate-checkbox' },
          { text: 'Validate Checkbox List', link: '/form-controls/validate-checkbox-list' },
          { text: 'Validate Database', link: '/form-controls/validate-database' },
          { text: 'Validate Compare', link: '/form-controls/validate-compare' },
          { text: 'Validate Email', link: '/form-controls/validate-email' },
          { text: 'Validate Range', link: '/form-controls/validate-range' },
          { text: 'Validate Regular Expression', link: '/form-controls/validate-regular-expression' },
          { text: 'Validate Required', link: '/form-controls/validate-required' },
          { text: 'Validate XML', link: '/form-controls/validate-xml' },
          { text: 'Validation Summary', link: '/form-controls/validation-summary' },
        ]
      },
      {
        text: 'Template Controls',
        collapsed: true,
        items: [
          { text: 'Add Button', link: '/template-controls/add-button' },
          { text: 'Add Image', link: '/template-controls/add-image' },
          { text: 'Add Link', link: '/template-controls/add-link' },
          { text: 'AJAX Button', link: '/template-controls/ajax-button' },
          { text: 'AJAX Image', link: '/template-controls/ajax-image' },
          { text: 'AJAX Link', link: '/template-controls/ajax-link' },
          { text: 'Command Button', link: '/template-controls/command-button' },
          { text: 'Command Image', link: '/template-controls/command-image' },
          { text: 'Command Link', link: '/template-controls/command-link' },
          { text: 'Data List', link: '/template-controls/data-list' },
          { text: 'Delete Button', link: '/template-controls/delete-button' },
          { text: 'Delete Image', link: '/template-controls/delete-image' },
          { text: 'Delete Link', link: '/template-controls/delete-link' },
          { text: 'Detail Button', link: '/template-controls/detail-button' },
          { text: 'Detail Image', link: '/template-controls/detail-image' },
          { text: 'Detail Link', link: '/template-controls/detail-link' },
          { text: 'Each', link: '/template-controls/each' },
          { text: 'Edit Button', link: '/template-controls/edit-button' },
          { text: 'Edit Image', link: '/template-controls/edit-image' },
          { text: 'Edit Link', link: '/template-controls/edit-link' },
          { text: 'Feed', link: '/template-controls/feed' },
          { text: 'Format', link: '/template-controls/format' },
          { text: 'If Empty', link: '/template-controls/if-empty' },
          { text: 'If Not Empty', link: '/template-controls/if-not-empty' },
          { text: 'Include', link: '/template-controls/include' },
          { text: 'jQuery Ready', link: '/template-controls/jquery-ready' },
          { text: 'JSON Feed', link: '/template-controls/json-feed' },
          { text: 'Load Feed Button', link: '/template-controls/load-feed-button' },
          { text: 'Load Feed Image', link: '/template-controls/load-feed-image' },
          { text: 'Load Feed Link', link: '/template-controls/load-feed-link' },
          { text: 'Load Feed', link: '/template-controls/load-feed' },
          { text: 'Markdown', link: '/template-controls/markdown' },
          { text: 'Meta Tags', link: '/template-controls/meta-tags' },
          { text: 'Navigate URL', link: '/template-controls/navigate-url' },
          { text: 'Pager', link: '/template-controls/pager' },
          { text: 'Redirect', link: '/template-controls/redirect' },
          { text: 'Register', link: '/template-controls/register' },
          { text: 'Return Button', link: '/template-controls/return-button' },
          { text: 'Return Image', link: '/template-controls/return-image' },
          { text: 'Return Link', link: '/template-controls/return-link' },
          { text: 'Script Block', link: '/template-controls/script-block' },
          { text: 'Search/Sort', link: '/template-controls/search-sort' },
          { text: 'Select', link: '/template-controls/select' },
          { text: 'Slideshow', link: '/template-controls/slideshow' },
          { text: 'Template', link: '/template-controls/template' },
          { text: 'Toggle Button', link: '/template-controls/toggle-button' },
          { text: 'Toggle Image', link: '/template-controls/toggle-image' },
          { text: 'Toggle Link', link: '/template-controls/toggle-link' },
        ]
      },
      {
        text: 'Tokens',
        collapsed: true,
        items: [
          { text: 'Data', link: '/tokens/data' },
          { text: 'DateAdd', link: '/tokens/dateadd' },
          { text: 'Field', link: '/tokens/field' },
          { text: 'Functions', link: '/tokens/functions' },
          { text: 'Module', link: '/tokens/module' },
          { text: 'Page', link: '/tokens/page' },
          { text: 'Portal', link: '/tokens/portal' },
          { text: 'Request', link: '/tokens/request' },
          { text: 'User', link: '/tokens/user' },
        ]
      },
    ]
  }
})
