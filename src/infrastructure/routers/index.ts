import { Router } from 'express';
import { sampleRouter } from './sample-router';

export const apiRouter = (): Router => {
  const router = Router();
  router.use('/samples', sampleRouter());
  return router;
};
