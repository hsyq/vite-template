module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },

  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "prettier",
    "@vue/eslint-config-prettier"
  ],

  parserOptions: {
    ecmaVersion: 2021
  },

  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        tabWidth: 2,
        indent: 2,
        semi: false,
        trailingComma: "none",
        endOfLine: "auto"
      }
    ],
    "no-unused-vars": "off",
    "vue/no-unused-vars": "off"
  },
  globals: {
    defineProps: "readonly"
  }
}
