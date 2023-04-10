import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { CustomError } from '../custom-error';

export const logErrors: ErrorRequestHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  next(err);
};
