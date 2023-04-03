import { NextFunction, Router, Request, Response } from 'express';
import { SampleController } from '../../interface/controllers/sample-controller';
import { SampleRepository } from '../../interface/gateways/sample-repository';
import { SampleRepositoryInterface } from '../../interface/gateways/sample-repository-interface';
import { SamplePresenterInterface } from '../../interface/presenters/sample-presenter-interface';
import { SamplePresenter } from '../../interface/presenters/sample-presenter';
import { SampleInteractor } from '../../application/usecases/sample-interactor';
import { SampleUsecaseInterface } from '../../application/usecases/sample-usecase-interface';

export const sampleRouter = (): Router => {
  const router = Router();
  let samplePresenter: SamplePresenterInterface;
  let sampleInteractor: SampleUsecaseInterface;
  let sampleController: SampleController;

  router.use((req: Request, res: Response, next: NextFunction) => {
    const sampleRepository: SampleRepositoryInterface = new SampleRepository();
    samplePresenter = new SamplePresenter(res);
    sampleInteractor = new SampleInteractor(sampleRepository, samplePresenter);
    sampleController = new SampleController(sampleInteractor);
    next();
  });

  router
    .route('/')
    .get((req: Request, res: Response, next: NextFunction) =>
      sampleController.list(req, res, next)
    )
    .post((req: Request, res: Response, next: NextFunction) =>
      sampleController.create(req, res, next)
    );

  router
    .route('/:id')
    .get((req: Request, res: Response, next: NextFunction) =>
      sampleController.find(req, res, next)
    )
    .put((req: Request, res: Response, next: NextFunction) =>
      sampleController.update(req, res, next)
    )
    .delete((req: Request, res: Response, next: NextFunction) =>
      sampleController.delete(req, res, next)
    );

  return router;
};
