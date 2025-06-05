// https://docs.expo.dev/guides/using-eslint/
import eslintConfigPrettier from "eslint-config-prettier/flat";
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
  eslintConfigPrettier
]);
