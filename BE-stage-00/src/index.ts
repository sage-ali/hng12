import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import api from './routes/api';

const app: Application = express();
const DEFAULT_PORT: number = 3000;
/**
 * The port number or string on which the server will listen.
 *
 * This value is determined by the following:
 * - If the `PORT` environment variable is set, its value will be used.
 * - Otherwise, the `DEFAULT_PORT` constant will be used.
 *
 * @type {number | string}
 */
const port: number | string = process.env.PORT || DEFAULT_PORT;

app.use(cors());
app.use(express.json());
app.use('/api', api);

// Add this route to handle the root path
app.get('/', (req: Request, res: Response): void => {
  res.send('Welcome to the API');
});

// conditional so server does not run during tests
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, (): void => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${port}`);
  });
}

export default app;
