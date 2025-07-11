const path = require('path');
const fs = require('fs');
const alias = require('@rollup/plugin-alias');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const resolve = require('@rollup/plugin-node-resolve');
const esbuild = require('rollup-plugin-esbuild');
const dts = require('rollup-plugin-dts');
const postcss = require('rollup-plugin-postcss');
const svgr = require('rollup-plugin-svgr');

const NODEJS_EXTERNALS = [
  'default',
  'assert',
  'async_hooks',
  'async_hooks',
  'buffer',
  'child_process',
  'cluster',
  'console',
  'crypto',
  'diagnostics_channel',
  'dns',
  'domain',
  'fs',
  'fs/promises',
  'http',
  'http2',
  'https',
  'inspector',
  'module',
  'net',
  'os',
  'path',
  'perf_hooks',
  'process',
  'punycode',
  'querystring',
  'readline',
  'repl',
  'stream',
  'string_decoder',
  'sys',
  'timers',
  'tls',
  'trace_events',
  'tty',
  'url',
  'util',
  'v8',
  'vm',
  'worker_threads',
  'zlib',
];

const rootPath = process.cwd();

const pkgPath = path.resolve(rootPath, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

function createAlias(options) {
  return options.map((data) => {
    return {
      find: data.find,
      replacement: data.replacement,
      customResolver: (target) => {
        if (/\.svg(\?react)?/.test(target)) return target
        return data.resolve.map((p) => `${target}${p}`).find((p) => fs.existsSync(p) && fs.statSync(p).isFile());
      },
    };
  });
}
const external = [
  ...NODEJS_EXTERNALS,
  /^node:/,
  ...Object.keys(pkg?.dependencies || {}),
  ...Object.keys(pkg?.peerDependencies || {}),
  'react/jsx-runtime',
];

const aliasPlugin = () => {
  return alias.default({
    entries: createAlias([
      {
        find: /^@\/(.*)/,
        replacement: path.resolve(rootPath, 'src', '$1'),
        resolve: ['.js', '/index.js', '.mjs', '/index.mjs', '.json', '/index.json', '.jsx', '/index.jsx', '.ts', '/index.ts', '.tsx', '/index.tsx'],
      },
    ]),
  });
};

const plugins = [
  aliasPlugin(),
  resolve.default(),
  commonjs.default(),
  json.default(),
  esbuild.default({
    sourceMap: true,
    target: 'es2015',
    tsconfig: path.resolve(rootPath, 'tsconfig.json'),
    jsx: 'automatic',
  }),
  postcss({
    extract: path.resolve('dist/main.css'),
    minimize: true,
    modules: false,
    use: ['sass']
  }),
  svgr.default({
    esbuildOptions: {
      jsx: 'automatic',
    }
  })
].filter(Boolean)

/**
 * @type {import('rollup').RollupOptions[]}
 */
module.exports = [
  {
    input: path.resolve(rootPath, 'src/main.ts'),
    output: {
      file: path.resolve(rootPath, 'dist/main.common.js'),
      format: 'cjs',
      interop: 'auto',
      exports: 'named',
      footer: 'module.exports = Object.assign(exports.default || {}, exports);',
      sourcemap: true,
    },
    plugins,
    external,
  },
  {
    input: path.resolve(rootPath, 'src/main.ts'),
    output: {
      file: path.resolve(rootPath, 'dist/main.esm.js'),
      format: 'esm',
      exports: 'named',
      sourcemap: true,
    },
    plugins,
    external,
  },
  {
    input: 'src/main.ts',
    output: {
      file: 'dist/main.d.ts',
      format: 'esm',
    },
    plugins: [aliasPlugin(), dts.default()],
    external: [
      /\.s?css$/,
      ...external
    ],
  },
];
