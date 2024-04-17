/* eslint-disable linebreak-style */
import { Sequelize } from 'sequelize';
import 'dotenv/config';

if (!process.env.DB_SERVER || !process.env.DB_NAME || !process.env.DB_USER) throw new Error('Missing .env key');

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: true,
        port: Number(process.env.DB_PORT),
        requestTimeout: 60000,
        trustServerCertificate: true,
      },
    },
    host: process.env.DB_SERVER,
  },
);
