import {
  SampleItemResponse,
  SampleItemsResponse,
} from '../../application/usecases/type';

export interface SamplePresenterInterface {
  json(response: SampleItemResponse | SampleItemsResponse): void;
}
