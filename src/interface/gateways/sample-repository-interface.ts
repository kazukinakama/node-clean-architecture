import { SampleGetRequest } from '../../application/usecases/type';
import { SampleEntity } from '../../domain/entities/sample-entity';

export interface SampleRepositoryInterface {
  list(request: SampleGetRequest): Promise<SampleEntity[]>;
  create(sample: SampleEntity): Promise<SampleEntity>;
  find(id: number): Promise<SampleEntity>;
  update(id: number, sample: SampleEntity): Promise<SampleEntity>;
  delete(id: number): Promise<SampleEntity>;
}
