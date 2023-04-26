import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

export const logErrors: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  next(err);
};
