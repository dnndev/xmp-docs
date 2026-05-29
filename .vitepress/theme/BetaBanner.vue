<script setup lang="ts">
// Persistent, site-wide notice that the v5 docs describe beta software.
// Rendered into the default theme's `layout-top` slot, so it sits above the navbar
// on every page. The v4 link is absolute because the stable docs are a sibling site.
</script>

<template>
  <div class="beta-banner" role="alert">
    <span class="beta-banner__icon" aria-hidden="true">⚠</span>
    <span class="beta-banner__text">
      You're reading the docs for <strong>XMod Pro 5.0</strong>, which is in
      <strong>beta</strong> and under active development. For the current stable
      release, see the
      <a href="https://dnndev.com/help/xmodpro/v4/">v4.x documentation</a>.
    </span>
  </div>
</template>
