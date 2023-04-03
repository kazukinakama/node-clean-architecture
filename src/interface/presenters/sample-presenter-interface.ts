import {
  SampleItemResponse,
  SampleItemsResponse,
} from '../../application/usecases/type';

export interface SamplePresenterInterface {
  success(response: SampleItemResponse | SampleItemsResponse): void;
  error(status: number, response: string): void;
}
