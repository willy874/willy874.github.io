module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  plugins: ['prettier'],
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/standard', 'plugin:prettier/recommended', 'prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
