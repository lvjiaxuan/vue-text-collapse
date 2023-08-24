<script lang="ts" setup>
import { ref, version } from 'vue'
import TextCollapse from 'vue-text-collapse'

const onelineRef = ref<InstanceType<typeof TextCollapse>>()
const fourlineRef = ref<InstanceType<typeof TextCollapse>>()
</script>

<template>
  <main>
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
