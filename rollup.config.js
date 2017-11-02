import buble from 'rollup-plugin-buble';

export default {
  entry: 'index.js',
  dest: 'bundle.js',
  format: 'iife',
  globals: ['inferno-component'],
  external: ['inferno-component'],
  plugins: [buble({ jsx: 'createElement' })]
}
