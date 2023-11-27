/* eslint-env node */
module.exports = {
  root: true,
  plugins: ['html', 'vuejs-accessibility'],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
    'plugin:vuejs-accessibility/recommended'
  ],
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
