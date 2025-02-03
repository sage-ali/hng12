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
  async (req: Request, res: Response): Promise<Response> => {
    const num = parseInt(req.query.number as string, 10);

    if (req.query.number === undefined || req.query.number === null) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'Missing number parameter',
        error: true,
      });
    }

    if (isNaN(num)) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        number: 'alphabet',
        error: true,
      });
    }

    const digitSum = getDigitSum(num);
    const parity = getParity(num);

    if (digitSum === false || parity === false) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'Invalid number',
        error: true,
      });
    }

    const properties = isArmstrong(num) ? ['armstrong', parity] : [parity];

    const response: ApiResponse = {
      number: num,
      is_prime: isPrime(num),
      is_perfect: isPerfect(num),
      properties: properties,
      digit_sum: digitSum,
      fun_fact: await getFunFact(num),
    };
    return res.status(StatusCodes.OK).json(response);
  }
);

router.get(/^.*/i, (req: Request, res: Response) => {
  const response: ApiResponse = {
    message: 'Not implemented',
    error: true,
  };
  res.status(StatusCodes.NOT_IMPLEMENTED).json(response);
});

export default router;
