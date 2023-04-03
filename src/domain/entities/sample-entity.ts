export class SampleEntity {
  private _id: number;
  private _data: string;

  public constructor(id: number, data: string) {
    this._id = id;
    this._data = data;
  }

  public get id(): number {
    return this._id;
  }

  public get data(): string {
    return this._data;
  }
}
