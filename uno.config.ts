import { defineConfig, presetUno } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  cli: {
    entry: {
      patterns: 'src/index.ts',
      outFile: 'dist/index.css',
    },
  },
  transformers: [ transformerVariantGroup() ],
  presets: [ presetUno({ }) ],
})
