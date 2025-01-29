/* global jest, afterAll */

// setupEnv.js
const dotenv = require('dotenv');

// Save original environment variables
const originalNodeEnv = process.env.NODE_ENV;
const originalBabelEnv = process.env.BABEL_ENV;

// Load environment variables from .env file for the test environment
dotenv.config();

process.env.NODE_ENV = 'test';
process.env.BABEL_ENV = 'test';

// After all tests have run, restore the original environment variables
afterAll(() => {
  process.env.NODE_ENV = originalNodeEnv;
  process.env.BABEL_ENV = originalBabelEnv;
});

/*
 * Importing a module using require
 * Example: Polyfill fetch for Node.js (useful for tests that rely on fetch)
 */
globalThis.fetch = require('whatwg-fetch');

// Importing a module using require
const jestDom = require('@testing-library/jest-dom');

// You can now use this module to set up global variables or perform other setup tasks
globalThis['@testing-library/jest-dom'] = jestDom;

// setupEnv.js

// Example: Set a global variable that can be accessed in all tests
globalThis.apiUrl = 'https://api.example.com';

// Example: Polyfill fetch for Node.js (useful for tests that rely on fetch)
globalThis.fetch = require('node-fetch');

// Mock implementations
const mockFn = () => jest.fn();

// Storage mocks
globalThis.localStorage = {
  getItem: mockFn(),
  setItem: mockFn(),
  removeItem: mockFn(),
};

globalThis.sessionStorage = {
  getItem: mockFn(),
  setItem: mockFn(),
  removeItem: mockFn(),
};

// Logger mocks
globalThis.logger = {
  log: mockFn(),
  error: mockFn(),
  warn: mockFn(),
};

// Console mocks
globalThis.console = {
  log: mockFn(),
  error: mockFn(),
  warn: mockFn(),
  info: mockFn(),
};

// Date mock
const RealDate = Date;
const mockDate = '2020-01-01T00:00:00Z';
globalThis.Date = jest.fn(() => new RealDate(mockDate));
globalThis.Date.now = jest.fn(() => new RealDate(mockDate).getTime());

/*
 * import 'whatwg-fetch';
 * import dotenv from 'dotenv';
 * import('@testing-library/jest-dom');
 */

// dotenv.config();

/*
 * if (process.env.TEST_ENV === 'jsdom') {
 *   import('@testing-library/jest-dom');
 * }
 */
