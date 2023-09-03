// .eslintrc.cjs

module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-v-html": "off",
    "vue/no-multiple-template-root": "off",
  },
};
