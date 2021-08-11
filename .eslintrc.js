module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      }
  },
  "env": {
      "react-native/react-native": true,
      "jest": true
  },
  "plugins": [
      "react",
      "react-native",
      "react-hooks"
  ],
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
  ],
  "rules":
  {
      "react-native/no-unused-styles": 2,
      "react-native/split-platform-components": 2,
      "react-native/no-inline-styles": 2,
      "react-native/no-color-literals": 2,
      "react-native/no-raw-text": 2,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
  }
};
