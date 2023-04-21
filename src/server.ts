import { app } from './app';
import { pool } from './infrastructure/database/connection';

const port = 3000;

pool.getConnection((error, connection) => {
  if (error) {
    console.error('error connecting: ' + error.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
