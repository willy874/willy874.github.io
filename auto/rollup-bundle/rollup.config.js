import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import cleaner from 'rollup-plugin-cleaner'
import loaderJson from '@rollup/plugin-json'

export default {
  input: 'function/index.js',
  output: {
    file: 'rollup-bundle/dist/index.js',
    format: 'esm',
  },
  plugins: [
    cleaner({
      targets: ['./src/plugins/bundle/'],
    }),
    loaderJson(),
    resolve(),
    postcss({
      minimize: true,
      modules: {
        generateScopedName: '[hash:base64:5]',
      },
      // extract: 'dist/styles.css',
    }),
    commonjs(),
  ],
  external: ['vue', 'classnames', 'dayjs', 'uuid/v4', 'validate.js', 'lodash'],
}
