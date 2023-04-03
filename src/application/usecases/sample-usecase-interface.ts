import {
  SampleCreateRequest,
  SampleGetRequest,
  SampleUpdateRequest,
} from './type';

export interface SampleUsecaseInterface {
  list(request: SampleGetRequest): Promise<void>;
  create(request: SampleCreateRequest): Promise<void>;
  find(id: number): Promise<void>;
  update(id: number, request: SampleUpdateRequest): Promise<void>;
  delete(id: number): Promise<void>;
}
