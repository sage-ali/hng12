import globals from 'globals';
import pluginJs from '@eslint/js';
import * as tseslint from '@typescript-eslint/eslint-plugin';
import * as tsParser from '@typescript-eslint/parser';
import airbnbBase from 'eslint-config-airbnb-base';
import airbnbBaseRules from 'eslint-config-airbnb-base/rules/style';
import eslintConfigPrettier from 'eslint-config-prettier';

const INDENTATION_SPACES = 2;
const MAX_DEPTH = 3;

/** @type {import('eslint').Linter.Config[]} */
export default [
  // ESLint recommended rules
  pluginJs.configs.recommended,

  // Prettier rules
  eslintConfigPrettier,

  // Main configuration for TypeScript files
  {
    files: ['src/**/*.ts', 'test/**/*.ts'],
    ignores: [
      '**/node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '*.config.*',
      'commitlint.config.js',
    ],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // Existing rules...
      ...airbnbBase.rules,
      ...airbnbBaseRules.rules,

      // Include TypeScript recommended rules directly
      ...tseslint.configs.recommended.rules,

      // Your custom rules...
      curly: ['error', 'all'],
      // Require semicolons
      semi: ['error', 'always'],
      // Single quotes, allow escaping
      quotes: ['error', 'single', { avoidEscape: true }],
      // 2 spaces for indentation
      indent: ['error', INDENTATION_SPACES],
      // Limit line length
      'max-len': ['error', { code: 80, ignoreComments: true }],
      // Warn on console.log
      'no-console': 'warn',
      // Discourage alert usage
      'no-alert': 'warn',
      // Prefer const for variables that don't change
      'prefer-const': 'error',
      // Enforce strict equality
      eqeqeq: ['error', 'always'],
      // Disallow var
      'no-var': 'error',
      // Avoid magic numbers
      'no-magic-numbers': ['warn', { ignore: [0, 1], enforceConst: true }],

      // Enforce camelCase
      camelcase: ['error', { properties: 'always' }],
      // Short names exception
      'id-length': ['warn', { min: 2, exceptions: ['i', 'j', 'x', 'y'] }],

      // Ensure functions return consistently
      'consistent-return': 'error',
      // Prefer function expressions
      'func-style': ['error', 'expression'],
      // Simplify arrow functions
      'arrow-body-style': ['error', 'as-needed'],
      // Ignore unused variables starting with _
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      // Discourage nested ternary operators
      'no-nested-ternary': 'error',
      // Limit function complexity
      complexity: ['warn', { max: 10 }],

      // Space after comments
      'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],
      // Discourage inline comments
      'no-inline-comments': 'warn',
      // Consistent block comment style
      'multiline-comment-style': ['error', 'starred-block'],

      // Avoid unnecessary else blocks
      'no-lonely-if': 'error',
      // Enforce spacing inside object braces
      'object-curly-spacing': ['error', 'always'],
      // No spacing in arrays
      'array-bracket-spacing': ['error', 'never'],
      // Consistent key spacing
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      // Enforce Unix line endings
      'linebreak-style': ['error', 'unix'],
      // Disallow trailing spaces
      'no-trailing-spaces': 'error',
      // Ensure a newline at the end of files
      'eol-last': ['error', 'always'],

      // Enforce methods to use `this` (polymorphism)
      'class-methods-use-this': 'warn',
      // Promote single responsibility
      'max-classes-per-file': ['error', 1],
      // Limit inheritance levels
      'max-depth': ['warn', MAX_DEPTH],
      // Encourage composition
      'prefer-object-spread': 'warn',

      // TypeScript specific rules
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
    },
  },

  // Configuration for JavaScript files
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    ignores: [
      '**/node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '*.config.*',
      'commitlint.config.js',
    ],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      // Existing rules...
      ...airbnbBase.rules,
      ...airbnbBaseRules.rules,

      // Your custom rules...
      curly: ['error', 'all'],
      // Require semicolons
      semi: ['error', 'always'],
      // Single quotes, allow escaping
      quotes: ['error', 'single', { avoidEscape: true }],
      // 2 spaces for indentation
      indent: ['error', INDENTATION_SPACES],
      // Limit line length
      'max-len': ['error', { code: 80, ignoreComments: true }],
      // Warn on console.log
      'no-console': 'warn',
      // Discourage alert usage
      'no-alert': 'warn',
      // Prefer const for variables that don't change
      'prefer-const': 'error',
      // Enforce strict equality
      eqeqeq: ['error', 'always'],
      // Disallow var
      'no-var': 'error',
      // Avoid magic numbers
      'no-magic-numbers': ['warn', { ignore: [0, 1], enforceConst: true }],

      // Enforce camelCase
      camelcase: ['error', { properties: 'always' }],
      // Short names exception
      'id-length': ['warn', { min: 2, exceptions: ['i', 'j', 'x', 'y'] }],

      // Ensure functions return consistently
      'consistent-return': 'error',
      // Prefer function expressions
      'func-style': ['error', 'expression'],
      // Simplify arrow functions
      'arrow-body-style': ['error', 'as-needed'],
      // Ignore unused variables starting with _
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      // Discourage nested ternary operators
      'no-nested-ternary': 'error',
      // Limit function complexity
      complexity: ['warn', { max: 10 }],

      // Space after comments
      'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],
      // Discourage inline comments
      'no-inline-comments': 'warn',
      // Consistent block comment style
      'multiline-comment-style': ['error', 'starred-block'],

      // Avoid unnecessary else blocks
      'no-lonely-if': 'error',
      // Enforce spacing inside object braces
      'object-curly-spacing': ['error', 'always'],
      // No spacing in arrays
      'array-bracket-spacing': ['error', 'never'],
      // Consistent key spacing
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      // Enforce Unix line endings
      'linebreak-style': ['error', 'unix'],
      // Disallow trailing spaces
      'no-trailing-spaces': 'error',
      // Ensure a newline at the end of files
      'eol-last': ['error', 'always'],

      // Enforce methods to use `this` (polymorphism)
      'class-methods-use-this': 'warn',
      // Promote single responsibility
      'max-classes-per-file': ['error', 1],
      // Limit inheritance levels
      'max-depth': ['warn', MAX_DEPTH],
      // Encourage composition
      'prefer-object-spread': 'warn',
    },
  },

  // Override for test files
  {
    files: ['test/**/*.ts'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
];
