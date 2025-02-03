/**
 * ESLint configuration file.
 *
 * This configuration file sets up ESLint for a JavaScript/TypeScript project
 * with specific rules and plugins to enforce code quality and style.
 *
 * Plugins and Configurations:
 * - `globals`: Provides predefined global variables for browser and Node.js environments.
 * - `@eslint/js`: ESLint's core JavaScript rules.
 * - `eslint-config-airbnb-base`: Airbnb's base JavaScript style guide.
 * - `eslint-config-prettier`: Disables ESLint rules that conflict with Prettier.
 *
 * Constants:
 * - `INDENTATION_SPACES`: Number of spaces for indentation (2).
 * - `MAX_DEPTH`: Maximum allowed depth for nested blocks (3).
 *
 * ESLint Configuration:
 * - `files`: Specifies the file patterns to apply the configuration to.
 * - `languageOptions`: Sets the ECMAScript version, source type, and global variables.
 * - `rules`: Defines custom rules for code quality and style.
 *
 * Custom Rules:
 * - Core Best Practices:
 *   - `curly`: Enforce braces for all control statements.
 *   - `semi`: Require semicolons.
 *   - `quotes`: Enforce single quotes, allowing escaping.
 *   - `indent`: Enforce 2 spaces for indentation.
 *   - `max-len`: Limit line length to 80 characters, ignoring comments.
 *   - `no-console`: Warn on console.log usage.
 *   - `no-alert`: Warn on alert usage.
 *   - `prefer-const`: Prefer const for variables that don't change.
 *   - `eqeqeq`: Enforce strict equality.
 *   - `no-var`: Disallow var declarations.
 *   - `no-magic-numbers`: Warn on magic numbers, ignoring 0 and 1.
 *
 * - Naming Conventions:
 *   - `camelcase`: Enforce camelCase naming convention.
 *   - `id-length`: Warn on short variable names, with exceptions.
 *
 * - Code Structure and Functions:
 *   - `consistent-return`: Ensure functions return consistently.
 *   - `func-style`: Prefer function expressions.
 *   - `arrow-body-style`: Simplify arrow functions.
 *   - `no-unused-vars`: Ignore unused variables starting with _.
 *   - `no-nested-ternary`: Disallow nested ternary operators.
 *   - `complexity`: Warn on high function complexity.
 *
 * - Comments and Documentation:
 *   - `spaced-comment`: Enforce space after comments.
 *   - `no-inline-comments`: Warn on inline comments.
 *   - `multiline-comment-style`: Enforce consistent block comment style.
 *
 * - Miscellaneous:
 *   - `no-lonely-if`: Avoid unnecessary else blocks.
 *   - `object-curly-spacing`: Enforce spacing inside object braces.
 *   - `array-bracket-spacing`: Disallow spacing in arrays.
 *   - `key-spacing`: Enforce consistent key spacing.
 *   - `linebreak-style`: Enforce Unix line endings.
 *   - `no-trailing-spaces`: Disallow trailing spaces.
 *   - `eol-last`: Ensure a newline at the end of files.
 *   - `class-methods-use-this`: Warn if class methods do not use `this`.
 *   - `max-classes-per-file`: Enforce single responsibility by limiting classes per file.
 *   - `max-depth`: Warn on excessive nesting.
 *   - `prefer-object-spread`: Encourage object spread over Object.assign.
 *
 * - TypeScript Rules (commented out):
 *   - `@typescript-eslint/no-explicit-any`: Disallow the use of `any` type.
 *   - `@typescript-eslint/explicit-module-boundary-types`: Warn on missing return types in module boundaries.
 *
 * Additional Configurations:
 * - `pluginJs.configs.recommended`: ESLint recommended rules.
 * - `eslintConfigPrettier`: Prettier rules to disable conflicting ESLint rules.
 */
import globals from 'globals';
// import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import airbnbBase from 'eslint-config-airbnb-base';
import airbnbBaseRules from 'eslint-config-airbnb-base/rules/style';
import eslintConfigPrettier from 'eslint-config-prettier';

const INDENTATION_SPACES = 2;
const MAX_DEPTH = 3;

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // Main configuration for TypeScript files
  {
    files: ['src/*.ts'],
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '*.config.*',
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
      camelcase: ['warn', { properties: 'always' }],
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
  // Configuration for test files
  {
    files: ['test/*.ts'],
    ignores: [
      'node_modules/*',
      'dist/*',
      'build/*',
      'coverage/*',
      '*.config.*',
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
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      // JavaScript rules without TypeScript-specific rules
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
  // Configuration for JavaScript files
  {
    files: ['*.js', '*.mjs', '*.cjs'],
    ignores: [
      'node_modules/*',
      'dist/*',
      'build/*',
      'coverage/*',
      '*.config.*',
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
  // ESLint recommended rules
  // pluginJs.configs.recommended,
  // Prettier rules
  eslintConfigPrettier,
];
