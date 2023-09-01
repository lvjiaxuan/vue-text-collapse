# vue-text-collapse

[![](https://img.shields.io/npm/v/vue-text-collapse?color=a1b858&label=npm)](https://www.npmjs.com/package/vue-text-collapse)
![](https://img.shields.io/badge/supports-vue%202%2F3-brightgreen)
[![](https://img.shields.io/npm/dependency-version/vue-text-collapse/vue-demi)](https://github.com/vueuse/vue-demi)

[Vue3 Demo](https://lvjiaxuan.github.io/vue-text-collapse)

[Vue2 Demo](https://lvjiaxuan.github.io/vue-text-collapse/vue2)

## Install

```sh
pnpm i vue-text-collapse
```

## Props

<!-- eslint-skip -->
```ts
props: {
  text: {
    // The shown content.
    type: String,
    required: true,
  },

  collapseLines: {
    // The lines shown when it is collapsed.
    type: [ String, Number ],
    default: 2,
  },

  width: {
    type: String,
    default: '200px',
  },

  uniqueKey: {
    // Used for the `id` attribute when it is rendered by `v-for`.
    type: [ String, Number ],
    require: false,
  },

  expandText: {
    type: String,
    default: 'Expand',
  },

  collapseText: {
    type: String,
    default: 'Collapse',
  },
},
```

## Development

1. Install
```sh
pnpm i
```

2. Confirm `playgrounds/vue3/src/App.vue`
```xml
<script setup lang="ts">
// For build
// import textCollapse from 'vue-text-collapse'
import textCollapse from './../../../src'
// ...
```

3. Run the dev script
```sh
pnpm dev
```

## Preview vue 2/3

- `pnpm preview:3`
- `pnpm preview:2`