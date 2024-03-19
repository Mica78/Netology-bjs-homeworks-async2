module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      files: ['**/*/*.test.js'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: {
        'jest/prefer-expect-assertions': 'off',
        // 'jest/valid-expect': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
};
