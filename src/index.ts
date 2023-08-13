// @unocss-include
import { defineComponent, h } from 'vue-demi'

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
      default: 3,
    },

    width: {
      type: String,
      default: '200px',
    },

    uniqueKey: {
      // Used for the `id` attribute when it is rendered by `v-for`.
      type: [ String, Number ],
      default: '_uniqueKey',
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
    return () => h('div', { class: 'inline-flex' }, [
      h('input', {
        class: 'display-none next-[div]-checked:line-clamp-999! next-[div::after]-checked:invisible next-[div>label:after]-checked:content-["collapse"]',
        id: props.uniqueKey.toString(),
        type: 'checkbox',
      }, ''),
      h('div', {
        class: 'line-clamp-0 break-all break-words relative before:(content-[""] float-right hfull mb--21px) after:(content-[""] wfull hfull absolute bg-red visible top-[calc(100%-21px)])',
        style: { width: props.width, WebkitLineClamp: +props.collapseLines, lineClamp: +props.collapseLines },
      }, [
        h('label', { class: 'float-right clear-both c-blue cursor-pointer after:content-["expand"]', for: props.uniqueKey.toString() }, ''),
        h('span', props.text),
      ]),
    ])
  },
})
