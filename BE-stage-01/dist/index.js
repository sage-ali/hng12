'use strict';
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const httpStatusCodes = require('http-status-codes');
const isPrime = function isPrime2(num) {
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
const isArmstrong = function isArmstrong2(num) {
  if (num < 0) {
    return false;
  }
  const digits = num.toString().split('');
  const length = digits.length;
  digits.forEach((digit, index, arr) => {
    arr[index] = Math.pow(parseInt(digit, 10), length).toString();
  });
  return num === digits.reduce((acc, cur) => acc + parseInt(cur, 10), 0);
};
const getDigitSum = function getDigitSum2(num) {
  if (num < 0) {
    return false;
  }
  return num
    .toString()
    .split('')
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
};
const isPerfect = function isPerfect2(num) {
  const firstPerfect = 6;
  if (num < firstPerfect) {
    return false;
  }
  const divisors = Array.from({ length: num - 1 }, (__, i) => i + 1).filter(
    (x) => num % x === 0
  );
  return divisors.reduce((acc, cur) => acc + cur, 0) === num;
};
const getParity = function getParity2(num) {
  if (num !== Math.floor(num)) {
    return false;
  }
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
      throw new Error(error);
    });
};
const router = express.Router();
router.get('/classify-number', async (req, res) => {
  const num = parseInt(req.query.number, 10);
  if (req.query.number === void 0 || req.query.number === null) {
    res.status(httpStatusCodes.StatusCodes.BAD_REQUEST).json({
      message: 'Missing number parameter',
      error: true,
    });
    return;
  }
  if (isNaN(num)) {
    res.status(httpStatusCodes.StatusCodes.BAD_REQUEST).json({
      number: 'alphabet',
      error: true,
    });
    return;
  }
  const digitSum = getDigitSum(num);
  const parity = getParity(num);
  if (digitSum === false || parity === false) {
    res.status(httpStatusCodes.StatusCodes.BAD_REQUEST).json({
      message: 'Invalid number',
      error: true,
    });
    return;
  }
  const properties = isArmstrong(num) ? ['armstrong', parity] : [parity];
  const response = {
    number: num,
    is_prime: isPrime(num),
    is_perfect: isPerfect(num),
    properties,
    digit_sum: digitSum,
    fun_fact: await getFunFact(num),
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
