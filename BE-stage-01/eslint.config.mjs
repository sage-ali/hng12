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
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import airbnbBase from 'eslint-config-airbnb-base';

const MAX_DEPTH = 3;

export default [
  {
    name: 'Base Config',
    files: ['**/**/*.{js,mjs,cjs,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // Shared rules
      ...airbnbBase.rules,
      curly: ['error', 'all'],
      semi: ['error', 'always'],
      'no-console': 'warn',
      'no-alert': 'warn',
      'prefer-const': 'error',
      eqeqeq: ['error', 'always'],
      'no-var': 'error',
      'no-magic-numbers': ['warn', { ignore: [0, 1], enforceConst: true }],
      camelcase: ['warn', { properties: 'always' }],
      'id-length': ['warn', { min: 2, exceptions: ['i', 'j', 'x', 'y'] }],
      'consistent-return': 'error',
      'func-style': ['error', 'expression'],
      'arrow-body-style': ['error', 'as-needed'],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-nested-ternary': 'error',
      complexity: ['warn', { max: 10 }],
      'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],
      'no-inline-comments': 'warn',
      'multiline-comment-style': ['error', 'starred-block'],
      'no-lonely-if': 'error',
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'linebreak-style': ['error', 'unix'],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'class-methods-use-this': 'warn',
      'max-classes-per-file': ['error', 1],
      'max-depth': ['warn', MAX_DEPTH],
      'prefer-object-spread': 'warn',
    },
  },
  {
    name: 'TypeScript Config',
    files: ['**/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
    },
  },
  {
    name: 'Test Config',
    files: ['test/**/*.{js,ts}', 'tests/**/*.{js,ts}'],
    rules: {
      'no-console': 'off',
      'no-magic-numbers': 'off',
    },
  },
];
