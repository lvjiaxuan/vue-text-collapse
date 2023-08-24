<script lang="ts" setup>
// import TextCollapse from 'vue-text-collapse'
import { ref, version } from 'vue'
import TextCollapse from './../../../src'

const onelineRef = ref<InstanceType<typeof TextCollapse>>()
const fourlineRef = ref<InstanceType<typeof TextCollapse>>()
</script>

<template>
  <p>isOverClampedText: {{ onelineRef?.isOverClampedText }}</p>

  <text-collapse
    ref="onelineRef"
    text="oneline-oneline"
  />

  <hr>

  <text-collapse text="twolines-twolines-twolines-twolines" />

  <hr>

  <text-collapse text="threelines-threelines-threelines-threelines-threelines-threelines" />

  <hr>

  <p>isOverClampedText: {{ fourlineRef?.isOverClampedText }}</p>

  <text-collapse
    ref="fourlineRef"
    text="fourlines-fourlines-fourlines-fourlines-fourlines-fourlines-fourlines-fourlines"
  />

  <p text-center>
    Vue version: {{ version }}
  </p>

  <p text-center>
    <a
      href="https://lvjiaxuan.github.io/vue-text-collapse/vue2"
      target="_blank"
      rel="noopener noreferrer"
      decoration-none
      italic
    >
      vue2 version
    </a>
  </p>
</template>
