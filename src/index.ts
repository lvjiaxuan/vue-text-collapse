// @unocss-include
import { computed, defineComponent, h, ref, watchEffect } from 'vue-demi'

export default defineComponent({
  name: 'vue-text-collapse',

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

  setup(props) {

    const uniqueKey = (() => {
      if (!props.uniqueKey) {
        return generateRandomString()
      }
      return props.uniqueKey
    })()

    const holderRef = ref<HTMLDivElement>()
    const lineHeight = computed(() => {
      if (!holderRef.value) {
        return 0
      }
      return holderRef.value.clientHeight
    })

    return () => h('div', { class: 'inline-flex' }, [
      h('input', {
        class: 'display-none next-[div]-checked:line-clamp-999! next-[div::after]-checked:invisible next-[div>label:after]-checked:content-["collapse"]',
        id: uniqueKey.toString(),
        type: 'checkbox',
      }, ''),
      h('div', {
        class: 'line-clamp-0 break-all break-words relative'
          + ' before:(content-[""] float-right hfull mb-[calc(var(--line-height)*-1px)])'
          + ' after:(content-[""] wfull hfull absolute bg-red visible top-[calc(100%-var(--line-height)*1px)])',
        style: {
          width: props.width,
          WebkitLineClamp: +props.collapseLines,
          lineClamp: +props.collapseLines,
          '--line-height': lineHeight.value,
        },
      }, [
        h('label', { class: 'float-right clear-both c-blue cursor-pointer after:content-["expand"]', for: uniqueKey.toString() }, ''),
        h('span', props.text),
        h('span', {
          ref: holderRef,
          class: 'absolute top--1000 left--1000 invisible',
        }, '_'),
      ]),
    ])
  },
})


function generateRandomString(length = 10) {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    result += characters.charAt(randomIndex)
  }

  return result
}
