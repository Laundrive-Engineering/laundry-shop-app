const config = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended', 'prettier'],
  overrides: [
    {
      files: ['**/*.js'], // Target JavaScript files
      parser: 'babel-eslint', // Use the Babel parser for JavaScript
      rules: {
        // You can add JavaScript-specific ESLint rules here
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx'], // Target TypeScript files
      parser: '@typescript-eslint/parser', // Use the TypeScript parser for TypeScript
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        // Prettier and TypeScript-specific rules here
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            parser: 'flow',
          },
        ],
        // ... other TypeScript rules
      },
    },
  ],
};

module.exports = config;
