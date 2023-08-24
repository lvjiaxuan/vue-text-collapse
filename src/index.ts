// @unocss-include
import { computed, defineComponent, h, ref } from 'vue-demi'

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

  computed: {
    isOverClampedText(): boolean {
      // Fake, a holder. For the component exposed type intellisense.
      return true
    },
  },

  setup(props, { expose }) {

    const uniqueKey = (() => {
      if (!props.uniqueKey) {
        return generateRandomString()
      }
      return props.uniqueKey
    })()

    const oneLineRef = ref<HTMLDivElement>()
    const lineHeight = computed(() => {
      if (!oneLineRef.value) {
        return 0
      }
      return oneLineRef.value.clientHeight
    })

    const textRef = ref<HTMLSpanElement>()
    const containerRef = ref<HTMLLabelElement>()
    const isOverClampedText = computed(() => {
      if (!textRef.value || !containerRef.value) {
        return false
      }
      return textRef.value.offsetHeight > containerRef.value.offsetHeight
    })

    expose({ isOverClampedText })

    return () => h('div', { class: 'inline-flex' }, [
      h('input', {
        class: 'display-none next-[div]-checked:line-clamp-999! next-[div::after]-checked:invisible next-[div>label:after]-checked:content-[attr(data-collapse-text)]',
        id: uniqueKey.toString(),
        type: 'checkbox',
      }, ''),
      h('div', {
        ref: containerRef,
        class: 'line-clamp-0 break-all break-words relative'
        + ' before:(content-[""] float-right hfull mb-[calc(var(--line-height)*-1px)])',
        style: {
          width: props.width,
          WebkitLineClamp: +props.collapseLines,
          lineClamp: +props.collapseLines,
          '--line-height': lineHeight.value - 0.2,
        },
      }, [
        isOverClampedText.value ? h('label', {
          class: 'float-right clear-both c-blue cursor-pointer after:content-[attr(data-expand-text)]',
          for: uniqueKey.toString(),
          'data-expand-text': props.expandText,
          'data-collapse-text': props.collapseText,
        }, '') : null,
        h('span', { ref: textRef }, props.text),
        h('span', {
          ref: oneLineRef,
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
