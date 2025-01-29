import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import api from './routes/api';

const app: Application = express();
const DEFAULT_PORT: number = 3000;
const port: number | string = process.env.PORT || DEFAULT_PORT;

app.use(cors());
app.use(express.json());
app.use('/api', api);

// Add this route to handle the root path
app.get('/', (req: Request, res: Response): void => {
  res.send('Welcome to the API');
});

if (process.env.url && process.argv[1] === new URL(process.env.url).pathname) {
  app.listen(port, (): void => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${port}`);
  });
}

export default app;
