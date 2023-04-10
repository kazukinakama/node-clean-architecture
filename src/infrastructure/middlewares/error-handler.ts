import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { CustomError } from '../custom-error';

export const errorHandler: ErrorRequestHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message || 'Internal Server Error' });
};
