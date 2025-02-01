/* global describe, it, expect */

const getCurrentDateTime = require('../../src/utils/datetime').default;

describe('getCurrentDateTime', () => {
  it('should return a valid ISO date string', () => {
    const dateTime = getCurrentDateTime();
    const isoString = new Date(dateTime).toISOString();
    expect(isoString.slice(0, -2)).toBe(dateTime.slice(0, -1));
  });

  it('should return a string in the format YYYY-MM-DDTHH:mm:ss.ssZ', () => {
    const dateTime = getCurrentDateTime();
    const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{2}Z$/;
    expect(regex.test(dateTime)).toBe(true);
  });
});
