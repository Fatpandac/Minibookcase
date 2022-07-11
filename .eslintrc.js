// .eslintrc.js 文件内容， 此处是eslint的规则定义， 可自行修改，可参考eslint官网修改
module.exports = {
  parser: "@babel/eslint-parser",
  extends: ['airbnb-base', 'plugin:promise/recommended'],
  parserOptions: {
    ecmaVersion: 9,
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: false,
    },
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  plugins: ['import', 'node', 'promise'],
  rules: {
    'no-return-assign': 0,
    'arrow-parens': 'off',
    "no-empty": 'off',
    'comma-dangle': ['error', 'only-multiline'],
    complexity: ['error', 10],
    'func-names': 'off',
    'global-require': 'off',
    'handle-callback-err': ['error', '^(err|error)$'],
    'import/no-unresolved': [
      'error',
      {
        caseSensitive: true,
        commonjs: true,
        ignore: ['^[^.]'],
      },
    ],
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'no-catch-shadow': 'error',
    'no-continue': 'off',
    'no-div-regex': 'warn',
    'no-else-return': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    // enable console for this project
    'no-console': ["error", {"allow": ["warn", "error", "info"]}],
    'no-multi-assign': 'off',
    'no-underscore-dangle': 'off',
    'node/no-deprecated-api': 'error',
    'node/process-exit-as-throw': 'error',
    'object-curly-spacing': ['error', 'never'],
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          ':': 'before',
          '?': 'before',
        },
      },
    ],
    'prefer-arrow-callback': 'off',
    'prefer-destructuring': 'off',
    'prefer-template': 'off',
    'quote-props': [
      1,
      'as-needed',
      {
        unnecessary: true,
      },
    ],
    semi: ['error', 'never'],
  },
  globals: {
    window: true,
    document: true,
    App: true,
    Page: true,
    Component: true,
    Behavior: true,
    wx: true,
    worker: true,
    getApp: true,
    allowEmptyReject: true,
  },
};