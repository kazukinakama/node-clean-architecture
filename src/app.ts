import express, { Application, json, Request, Response } from 'express';

export const app: Application = express();

app.use(json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' });
});
