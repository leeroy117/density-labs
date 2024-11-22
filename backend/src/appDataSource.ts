import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'densityLabs',
  database: 'densitytest',
  entities: ['src/entity/*.ts'], // List of entities to be loaded
  synchronize: true,
});


export { AppDataSource };