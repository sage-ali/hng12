/* global describe, it, expect */

const getCurrentDateTime = require('../../src/utils/datetime').default;

describe('getCurrentDateTime', () => {
  it('should return a valid ISO date string', () => {
    const dateTime = getCurrentDateTime();
    expect(new Date(dateTime).toISOString()).toBe(dateTime);
  });
});
