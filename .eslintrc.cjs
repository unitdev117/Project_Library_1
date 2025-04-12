module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: [
    'prettier',
    'simple-import-sort',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, semi: true }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};