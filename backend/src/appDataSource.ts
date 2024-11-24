import { DataSource } from 'typeorm';
import { Comment } from './entity/Comment';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'densityLabs',
  database: 'densitytest',
  entities: [Comment], // List of entities to be loaded
  synchronize: true,
});


export { AppDataSource };