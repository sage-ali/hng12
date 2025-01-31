/**
 * Returns the current date and time in ISO 8601 format.
 *
 * @returns {string} The current date and time as a string in ISO 8601 format.
 */
const getCurrentDateTime = (): string => new Date().toISOString();
export default getCurrentDateTime;
