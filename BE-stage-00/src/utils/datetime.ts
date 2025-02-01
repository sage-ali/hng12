/**
 * Returns the current date and time in the specified format.
 *
 * @returns {string} The current date and time as a string in the format YYYY-MM-DDTHH:mm:ss.ssZ.
 */
const getCurrentDateTime = (): string => {
  const date = new Date();
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(date.getUTCMilliseconds())
    .padStart(3, '0')
    .slice(0, 2);

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
};

export default getCurrentDateTime;
