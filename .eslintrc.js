const config = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // Prettier rule
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'flow',
      },
    ],
    // Other ESLint rules
    'no-multi-str': 'error',
    'default-case': 'error',
    'no-unused-vars': 'warn',
    // ... continue with the other rules
  },
};

module.exports = config;
