import express, { Application, json } from 'express';
import { apiRouter } from './infrastructure/routers';

export const app: Application = express();

app.use(json());

app.use('/api', apiRouter());
