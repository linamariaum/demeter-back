import { Sequelize } from 'sequelize';
import { BD_HOST, BD_NAME, BD_PASSWORD, BD_PORT, BD_USER } from '../config.js';


const dbConfig = {
  host: BD_HOST,
  port: BD_PORT,
  username: BD_USER,
  password: BD_PASSWORD,
  database: BD_NAME,
  dialect: 'mysql'
}

export const sequelize = new Sequelize(
  
  dbConfig,
);