import { Request, Response, Router } from 'express';
import getCurrentDateTime from '../utils/datetime';
import { StatusCodes } from 'http-status-codes';

const router = Router();

interface ApiResponse {
  email: string;
  current_datetime: string;
  github_url: string;
}

router.get('/', (req: Request, res: Response) => {
  /**
   * Represents the response object for the API.
   *
   * @typedef {Object} ApiResponse
   * @property {string} email - The email address of the user.
   * @property {string} currentDatetime - The current date and time.
   * @property {string} githubUrl - The URL to the user's GitHub repository.
   */
  const response: ApiResponse = {
    email: 'aliagboola1@gmail.com',
    current_datetime: getCurrentDateTime(),
    github_url: 'https://github.com/sage-ali/hng12/BE-stage-00',
  };
  res.status(StatusCodes.OK).json(response);
});

export default router;
