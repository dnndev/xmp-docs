import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import BetaBanner from './BetaBanner.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  // Inject the beta notice into the `layout-top` slot so it renders above the
  // navbar on every page. Wrapping DefaultTheme.Layout keeps all default behavior.
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(BetaBanner)
    })
  }
}
