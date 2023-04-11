import { Response } from 'express';
import { SamplePresenterInterface } from './sample-presenter-interface';
import {
  SampleItemResponse,
  SampleItemsResponse,
} from '../../application/usecases/type';

export class SamplePresenter implements SamplePresenterInterface {
  public constructor(private readonly res: Response) {}

  public json(response: SampleItemResponse | SampleItemsResponse): void {
    this.res.json(response);
  }
}
