import { Response } from 'express';
import { SamplePresenterInterface } from './sample-presenter-interface';
import {
  SampleItemResponse,
  SampleItemsResponse,
} from '../../application/usecases/type';

export class SamplePresenter implements SamplePresenterInterface {
  public constructor(private readonly res: Response) {}

  public success(response: SampleItemResponse | SampleItemsResponse): void {
    this.res.json(response);
  }

  public error(status: number, message: string): void {
    this.res.status(status).json({ message: message });
  }
}
