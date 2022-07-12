module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-param-reassign': ['error', { 'props': false }],
    'react/function-component-definition': [2, { 'namedComponents': 'arrow-function' }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.tsx', '.ts'] }],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  }
};
