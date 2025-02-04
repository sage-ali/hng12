// Numbers API integration
import axios from 'axios';

export const getFunFact = async (num: number): Promise<string> => {
  const BASE_URL = 'http://numbersapi.com';

  const request = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
  });

  return request
    .get(`/${num}`)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(`Failed to fetch fun fact: ${error.message}`);
    });
};
