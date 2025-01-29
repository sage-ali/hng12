import { Request, Response, Router } from 'express';
import getCurrentDateTime from '../utils/datetime';
import { StatusCodes } from 'http-status-codes';

const router = Router();

interface ApiResponse {
  email: string;
  currentDatetime: string;
  githubUrl: string;
}

router.get('/', (req: Request, res: Response) => {
  const response: ApiResponse = {
    email: 'aliagboola1@gmail.com',
    currentDatetime: getCurrentDateTime(),
    githubUrl: 'https://github.com/sage-ali/hng12/BE-stage-00',
  };
  res.status(StatusCodes.OK).json(response);
});

export default router;
