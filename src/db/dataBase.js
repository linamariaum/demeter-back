import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'pruebita',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);