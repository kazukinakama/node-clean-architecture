export interface SamplePresenterInterface {
  success<T>(response: T): void;
  error<T>(message: T, status: number): void;
}
