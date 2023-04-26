import { NextFunction, Request, Response } from 'express';
import { SampleUsecaseInterface } from '../../application/usecases/sample-usecase-interface';
import {
  SampleCreateRequest,
  SampleGetRequest,
  SampleUpdateRequest,
} from '../../application/usecases/type';

export class SampleController {
  public constructor(
    private readonly sampleInteractor: SampleUsecaseInterface
  ) {}

  public async list(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const requestParams: SampleGetRequest = req.query;
      this.sampleInteractor.list(requestParams);
    } catch (err) {
      next(err);
    }
  }

  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const requestBody: SampleCreateRequest = req.body;
      this.sampleInteractor.create(requestBody);
    } catch (err) {
      next(err);
    }
  }

  public async find(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id: number = +req.params.id;
      this.sampleInteractor.find(id);
    } catch (err) {
      next(err);
    }
  }

  public async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id: number = +req.params.id;
      const requestBody: SampleUpdateRequest = req.body;
      this.sampleInteractor.update(id, requestBody);
    } catch (err) {
      next(err);
    }
  }

  public async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id: number = +req.params.id;
      this.sampleInteractor.delete(id);
    } catch (err) {
      next(err);
    }
  }
}
