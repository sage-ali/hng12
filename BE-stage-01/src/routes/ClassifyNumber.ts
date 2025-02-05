/* eslint-disable camelcase */
import {
  isPrime,
  isArmstrong,
  getDigitSum,
  isPerfect,
  getParity,
} from '../utils/MathUtils';
import { getFunFact } from '../utils/NumbersApi';

import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

interface ApiResponse {
  number?: number | string;
  is_prime?: boolean;
  is_perfect?: boolean;
  properties?: Array<string>;
  digit_sum?: number;
  fun_fact?: string;
  error?: string | boolean;
  message?: string;
}

router.get(
  '/classify-number',
  async (req: Request, res: Response): Promise<void> => {
    const numStr = req.query.number as string;
    if (numStr === undefined || numStr === null || numStr.trim() === '') {
      res.status(StatusCodes.BAD_REQUEST).json({
        number: '',
        error: true,
      });
      return;
    }

    if (!/^-?\d+$/.test(numStr)) {
      res.status(StatusCodes.BAD_REQUEST).json({
        number: numStr,
        error: true,
      });
      return;
    }

    const num = parseInt(numStr, 10);
    if (isNaN(num)) {
      res.status(StatusCodes.BAD_REQUEST).json({
        number: numStr,
        error: true,
      });
      return;
    }

    if (!Number.isInteger(parseFloat(numStr))) {
      res.status(StatusCodes.BAD_REQUEST).json({
        number: numStr,
        error: true,
      });
      return;
    }

    if (num > Number.MAX_SAFE_INTEGER) {
      res.status(StatusCodes.BAD_REQUEST).json({
        number: numStr,
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
      console.log(error);
      funFact = 'Could not retrieve fun fact';
    }

    const response: ApiResponse = {
      number: num,
      is_prime: isPrime(numStr),
      is_perfect: isPerfect(numStr),
      properties: properties,
      digit_sum: digitSum,
      fun_fact: funFact,
    };
    res.status(StatusCodes.OK).json(response);
    return;
  }
);

router.get(/^.*/i, (req: Request, res: Response) => {
  const response: ApiResponse = {
    number: '',
    error: true,
  };
  res.status(StatusCodes.BAD_REQUEST).json(response);
});

export default router;
