import {
  FieldPacket,
  PoolConnection,
  ResultSetHeader,
  RowDataPacket,
} from 'mysql2/promise';
import { SampleGetRequest } from '../../application/usecases/type';
import { SampleEntity } from '../../domain/entities/sample-entity';
import { SampleRepositoryInterface } from './sample-repository-interface';

export class SampleRepository implements SampleRepositoryInterface {
  public constructor(private readonly connection: PoolConnection) {}

  public async list(request: SampleGetRequest): Promise<SampleEntity[]> {
    let sql = 'SELECT * FROM samples WHERE 0 = 0';
    const values = [];
    if (request.data) {
      sql += ' AND data LIKE ?';
      values.push(`%${request.data}%`);
    }
    const [result] = await this.connection.execute<RowDataPacket[]>(
      sql,
      values
    );
    return result.map(
      (item: RowDataPacket) => new SampleEntity(item.id, item.data)
    );
  }

  public async create(sample: SampleEntity): Promise<SampleEntity | undefined> {
    const [insertResult]: [ResultSetHeader, FieldPacket[]] =
      await this.connection.execute<ResultSetHeader>(
        'INSERT INTO samples (data) VALUES (?)',
        [sample.data]
      );
    const [result] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM samples WHERE id = ?',
      [insertResult.insertId]
    );
    if (result.length === 0) {
      return;
    }
    return new SampleEntity(result[0].id, result[0].data);
  }

  public async find(id: number): Promise<SampleEntity | undefined> {
    const [result] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM samples WHERE id = ?',
      [id]
    );
    if (result.length === 0) {
      return;
    }
    return new SampleEntity(result[0].id, result[0].data);
  }

  public async update(
    id: number,
    sample: SampleEntity
  ): Promise<SampleEntity | undefined> {
    await this.connection.execute<ResultSetHeader>(
      'UPDATE samples SET data = ? WHERE id = ?',
      [sample.data, id]
    );
    const [result] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM samples WHERE id = ?',
      [id]
    );
    if (result.length === 0) {
      return;
    }
    return new SampleEntity(result[0].id, result[0].data);
  }

  public async delete(id: number): Promise<void> {
    await this.connection.execute('DELETE FROM samples WHERE id = ?', [id]);
  }
}
