/* eslint-disable */
import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

interface ApiResponse {}

router.get('/', (req: Request, res: Response) => {
  /**
   * Represents the response object for the API.
   *
   * @typedef {Object} ApiResponse
   *
   */
  const response: ApiResponse = {
    // Todo
  };
  res.status(StatusCodes.OK).json(response);
});

export default router;
