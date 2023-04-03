import { SampleEntity } from '../../domain/entities/sample-entity';
import { SamplePresenterInterface } from '../../interface/presenters/sample-presenter-interface';
import { SampleRepositoryInterface } from '../../interface/gateways/sample-repository-interface';
import { SampleUsecaseInterface } from './sample-usecase-interface';
import {
  SampleCreateRequest,
  SampleGetRequest,
  SampleItemResponse,
  SampleItemsResponse,
  SampleUpdateRequest,
} from './type';

export class SampleInteractor implements SampleUsecaseInterface {
  public constructor(
    private readonly sampleRepository: SampleRepositoryInterface,
    private readonly samplePresenter: SamplePresenterInterface
  ) {}

  public async list(request: SampleGetRequest): Promise<void> {
    const result = await this.sampleRepository.list(request);

    const response: SampleItemsResponse = result.map((item) => ({
      id: item.id,
      data: item.data,
    }));

    return this.samplePresenter.success(response);
  }

  public async create(request: SampleCreateRequest): Promise<void> {
    const createdSample = new SampleEntity(0, request.data);

    const result = await this.sampleRepository.create(createdSample);

    const response: SampleItemResponse = {
      id: result.id,
      data: result.data,
    };

    return this.samplePresenter.success(response);
  }

  public async find(id: number): Promise<void> {
    const result = await this.sampleRepository.find(id);

    const response: SampleItemResponse = {
      id: result.id,
      data: result.data,
    };

    return this.samplePresenter.success(response);
  }

  public async update(id: number, request: SampleUpdateRequest): Promise<void> {
    const updatedSample = new SampleEntity(id, request.data);

    const result = await this.sampleRepository.update(id, updatedSample);

    const response: SampleItemResponse = {
      id: result.id,
      data: result.data,
    };

    return this.samplePresenter.success(response);
  }

  public async delete(id: number): Promise<void> {
    const result = await this.sampleRepository.delete(id);

    const response: SampleItemResponse = {
      id: result.id,
      data: result.data,
    };

    return this.samplePresenter.success(response);
  }
}
