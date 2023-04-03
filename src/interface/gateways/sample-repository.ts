import { SampleGetRequest } from '../../application/usecases/type';
import { SampleEntity } from '../../domain/entities/sample-entity';
import { SampleRepositoryInterface } from './sample-repository-interface';

export class SampleRepository implements SampleRepositoryInterface {
  public async list(request: SampleGetRequest): Promise<SampleEntity[]> {
    // TODO: DBからデータ取得
    return [new SampleEntity(1, request.data ?? '')];
  }

  public async create(sample: SampleEntity): Promise<SampleEntity> {
    // TODO: DBでデータ登録
    return new SampleEntity(1, sample.data);
  }

  public async find(id: number): Promise<SampleEntity> {
    // TODO: DBからデータ取得
    return new SampleEntity(id, 'data');
  }

  public async update(id: number, sample: SampleEntity): Promise<SampleEntity> {
    // TODO: DBでデータ更新
    return new SampleEntity(id, sample.data);
  }

  public async delete(id: number): Promise<SampleEntity> {
    // TODO: DBでデータ削除
    return new SampleEntity(id, 'data');
  }
}
