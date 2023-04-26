import { SampleGetRequest } from '../../application/usecases/type';
import { SampleEntity } from '../../domain/entities/sample-entity';

export interface SampleRepositoryInterface {
  list(request: SampleGetRequest): Promise<SampleEntity[]>;
  create(sample: SampleEntity): Promise<SampleEntity | undefined>;
  find(id: number): Promise<SampleEntity | undefined>;
  update(id: number, sample: SampleEntity): Promise<SampleEntity | undefined>;
  delete(id: number): Promise<void>;
}
