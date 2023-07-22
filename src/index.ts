import { defineComponent, h, ref } from 'vue-demi'

export default defineComponent({
  name: 'lib-name',

  setup() {
    const msg = ref('halo')
    return () => h('div', msg.value)
  },
})
