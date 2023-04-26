import express, { Application, json, Request, Response } from 'express';
import { apiRouter } from './infrastructure/routers';
import { errorHandler } from './infrastructure/middlewares/error-handler';
import { logErrors } from './infrastructure/middlewares/log-errors';

export const app: Application = express();

app.use(json());

app.use('/api', apiRouter());

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Not Found' });
});

app.use(logErrors);
app.use(errorHandler);
