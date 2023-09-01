import { type SourceCodeTransformer, type UserConfig, defineConfig, transformerVariantGroup } from 'unocss'

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
export default defineConfig({
  cli: {
    entry: {
      patterns: [ 'src/index.ts' ],
      outFile: 'dist/index.css',
    },
  },
  transformers: [ transformerVariantGroup() ],
}) as UserConfig
