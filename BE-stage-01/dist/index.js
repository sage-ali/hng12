'use strict';
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const httpStatusCodes = require('http-status-codes');
const isPrime = function isPrime2(numStr) {
  if (numStr.startsWith('-')) {
    return false;
  }
  const num = parseInt(numStr, 10);
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const isArmstrong = function isArmstrong2(numStr) {
  if (numStr.startsWith('-')) {
    return false;
  }
  const num = parseInt(numStr, 10);
  if (num <= 0) {
    return false;
  }
  const digits = numStr.split('');
  const length = digits.length;
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(parseInt(digit, 10), length),
    0
  );
  return num === sum;
};
const getDigitSum = function getDigitSum2(numStr) {
  const digits = numStr.startsWith('-')
    ? numStr
        .slice(1)
        .split('')
        .map((digit) => parseInt(digit, 10))
    : numStr.split('').map((digit) => parseInt(digit, 10));
  const sum = digits.reduce((acc, digit) => acc + digit, 0);
  return numStr.startsWith('-') ? -sum : sum;
};
const isPerfect = function isPerfect2(numStr) {
  if (numStr.startsWith('-')) {
    return false;
  }
  const num = parseInt(numStr, 10);
  if (num < 6) {
    return false;
  }
  const divisors = Array.from({ length: num - 1 }, (__, i) => i + 1).filter(
    (x) => num % x === 0
  );
  return divisors.reduce((acc, cur) => acc + cur, 0) === num;
};
const getParity = function getParity2(numStr) {
  const num = parseInt(numStr, 10);
  return num % 2 === 0 ? 'even' : 'odd';
};
const getFunFact = async (num) => {
  const BASE_URL = 'http://numbersapi.com';
  const request = axios.create({
    baseURL: BASE_URL,
    timeout: 5e3,
  });
  return request
    .get(`/${num}`)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(`Failed to fetch fun fact: ${error.message}`);
    });
};
const router = express.Router();
router.get('/classify-number', async (req, res) => {
  const numStr = req.query.number;
  if (numStr === void 0 || numStr === null || numStr === '') {
    res.status(httpStatusCodes.StatusCodes.BAD_REQUEST).json({
      message: 'Missing number parameter',
      error: true,
    });
    return;
  }
  const num = parseInt(numStr, 10);
  if (isNaN(num)) {
    res.status(httpStatusCodes.StatusCodes.BAD_REQUEST).json({
      number: 'alphabet',
      error: true,
    });
    return;
  }
  if (!Number.isInteger(parseFloat(numStr))) {
    res.status(httpStatusCodes.StatusCodes.BAD_REQUEST).json({
      number: numStr,
      error: true,
    });
    return;
  }
  if (num > Number.MAX_SAFE_INTEGER) {
    res.status(httpStatusCodes.StatusCodes.BAD_REQUEST).json({
      message: 'Number too large',
      error: true,
    });
    return;
  }
  const digitSum = getDigitSum(numStr);
  const parity = getParity(numStr);
  const properties = isArmstrong(numStr) ? ['armstrong', parity] : [parity];
  let funFact;
  try {
    funFact = await getFunFact(num);
  } catch (error) {
    funFact = 'Could not retrieve fun fact';
  }
  const response = {
    number: num,
    is_prime: isPrime(numStr),
    is_perfect: isPerfect(numStr),
    properties,
    digit_sum: digitSum,
    fun_fact: funFact,
  };
  res.status(httpStatusCodes.StatusCodes.OK).json(response);
  return;
});
router.get(/^.*/i, (req, res) => {
  const response = {
    message: 'Not implemented',
    error: true,
  };
  res.status(httpStatusCodes.StatusCodes.NOT_IMPLEMENTED).json(response);
});
const app = express();
const DEFAULT_PORT = 3e3;
const port = process.env.PORT || DEFAULT_PORT;
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});
app.use((req, res) => {
  res
    .status(httpStatusCodes.StatusCodes.NOT_IMPLEMENTED)
    .send('Not Implemented');
});
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}
module.exports = app;
