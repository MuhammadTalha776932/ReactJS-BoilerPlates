module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
      'react-hooks',
    ],
    extends: [
      'airbnb-typescript',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
    ],
    parserOptions: {
      project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint', 'react', 'import', 'jsx-a11y', 'react-hooks'],
    rules: {
          // Enforce consistent brace style for blocks
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // Require or disallow trailing comma
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    // Enforce consistent indentation
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    // Require or disallow initialization in variable declarations
    '@typescript-eslint/init-declarations': ['off'],
    // Enforce consistent spacing before and after keywords
    '@typescript-eslint/keyword-spacing': ['error'],
    // Disallow generic Array constructors
    '@typescript-eslint/no-array-constructor': ['error'],
    // Disallow duplicate class members
    '@typescript-eslint/no-dupe-class-members': ['error'],
    // Disallow empty functions
    '@typescript-eslint/no-empty-function': ['error'],
    // Disallow unnecessary parentheses
    '@typescript-eslint/no-extra-parens': ['error', 'all', { ignoreJSX: 'multi-line' }],
    // Disallow unnecessary semicolons
    '@typescript-eslint/no-extra-semi': ['error'],
    // Disallow the use of eval()-like methods
    '@typescript-eslint/no-implied-eval': ['error'],
    // Disallow this keywords outside of classes or class-like objects
    '@typescript-eslint/no-invalid-this': ['error'],
    // Disallow the use of magic numbers
    '@typescript-eslint/no-magic-numbers': ['off'],
    // Disallow multiple empty lines
    '@typescript-eslint/no-multiple-empty-lines': ['error', { max: 1 }],
    // Disallow the use of the `new` keyword outside of assignments or comparisons
    '@typescript-eslint/no-new': ['error'],
    // Disallow parameter properties in class constructors
    '@typescript-eslint/no-parameter-properties': ['off'],
    // Disallow require() calls with expressions
    '@typescript-eslint/no-require-imports': ['error'],
    // Disallow unnecessary constructors
    '@typescript-eslint/no-useless-constructor': ['error'],
    // Require using Error objects as Promise rejection reasons
    '@typescript-eslint/no-floating-promises': ['error'],
    // Enforce consistent spacing inside parentheses
    '@typescript-eslint/space-in-parens': ['error', 'never'],
    // Enforce consistent spacing before function parenthesis
    '@typescript-eslint/space-before-function-paren': ['error', 'never'],
    '@typescript-eslint/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    '@typescript-eslint/no-new': 'error',
    '@typescript-eslint/space-in-parens': ['error', 'never'],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'import/extensions': ['error', 'never'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false,
        },
      },
    ],
    '@typescript-eslint/indent': ['error', 2],
    },
  };
  