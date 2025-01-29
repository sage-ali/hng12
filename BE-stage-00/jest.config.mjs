import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

process.env.NODE_ENV = 'test';
process.env.BABEL_ENV = 'test';

export default {
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
    '**/?(*.)+(spec|test).mjs',
    // Add this line to include .mjs files
  ],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!esm-package|another-esm-package|another-esm-package)/',
    // Include ESM packages in node_modules
  ],
  // Add './test.js' to exclude
  testPathIgnorePatterns: ['/node_modules/', './test.ts'],

  moduleNameMapper: {},

  moduleDirectories: ['node_modules', 'src'],
  // Ensure modules are resolved correctly
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  // If you are using TypeScript with ES Modules
  globals: {
    Uint8Array: Uint8Array,
    // Add this line to avoid "Uint8Array is not defined" error
    'ts-jest': {
      isolatedModules: true,
      // Use when working with TypeScript to avoid global type checks
    },
  },
  setupFiles: [
    'whatwg-fetch',
    // './jest-setup.js',
  ],
  testEnvironment: process.env.TEST_ENV || 'node',
};
