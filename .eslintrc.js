module.exports = {
  root: true,

  env: {
    node: true
  },

  plugins: [
    'vuetify'
  ],

  extends: [
    "plugin:vue/strongly-recommended",
    "eslint:recommended"
  ],

  rules: {
    'vuetify/no-deprecated-classes': 'error',
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/attributes-order': 'error',
    'vue/order-in-components': 'error',
    'vue/v-on-function-call': [
      'error',
      'always'
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 6,
        multiline: 6
      }
    ],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    'vue/component-name-in-template-casing': 'error',
    'vue/require-direct-export': 'warn'
  },

  parserOptions: {
    parser: '@babel/eslint-parser'
  },
}
