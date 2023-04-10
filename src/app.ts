import express, {
  Application,
  json,
  NextFunction,
  Request,
  Response,
} from 'express';
import { apiRouter } from './infrastructure/routers';
import { CustomError } from './infrastructure/custom-error';
import { errorHandler } from './infrastructure/middlewares/error-handler';
import { logErrors } from './infrastructure/middlewares/log-errors';

export const app: Application = express();

app.use(json());

app.use('/api', apiRouter());

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new CustomError('Not Found', 404));
});

app.use(logErrors);
app.use(errorHandler);
