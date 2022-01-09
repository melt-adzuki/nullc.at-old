module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:vue/essential",
    "@vue/airbnb",
  ],
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@", "."],
          ["~", "."],
        ],
        extensions: [".vue", ".ts", ".js"],
      },
    },
  },
  plugins: [
  ],
  // add your custom rules here
  rules: {
    quotes: [
      "error",
      "double",
    ],
    semi: [
      "error",
      "never",
    ],
    "brace-style": [
      "error",
      "allman",
    ],
    "max-len": 0,
  },
}
