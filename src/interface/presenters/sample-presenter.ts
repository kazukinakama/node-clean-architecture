import { Response } from 'express';
import { SamplePresenterInterface } from './sample-presenter-interface';

export class SamplePresenter implements SamplePresenterInterface {
  public constructor(private readonly res: Response) {}
  public success<T>(response: T): void {
    this.res.json(response);
  }

  public error<T>(response: T, status: number): void {
    this.res.status(status).json(response);
  }
}
