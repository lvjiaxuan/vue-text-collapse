<script lang="ts" setup>
import textCollapse from 'vue-text-collapse'
import { version } from 'vue'
// import Seamless from './../../../src'
// import './../../../dist/index.css'
</script>

<template>
  <main>
    <text-collapse text="oneline-oneline" />

    <hr>

    <text-collapse text="twolines-twolines-twolines-twolines" />

    <hr>

    <text-collapse text="threelines-threelines-threelines-threelines-threelines-threelines" />

    <hr>

    <text-collapse text="fourlines-fourlines-fourlines-fourlines-fourlines-fourlines-fourlines-fourlines" />

    <p text-center>
      Vue version: {{ version }}
    </p>

    <p text-center>
      <a
        href="https://lvjiaxuan.github.io/vue-text-collapse"
        target="_blank"
        rel="noopener noreferrer"
        decoration-none
        italic
      >
        vue3 version
      </a>
    </p>
  </main>
</template>
