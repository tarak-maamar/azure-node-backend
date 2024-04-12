/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import bodyParser from 'body-parser';
import express from 'express';
import { config } from 'mssql';
import 'dotenv/config';

import { connectToDatabase } from './db';

const app = express();
const PORT = process.env.PORT || 3000;

if (!process.env.DB_SERVER || !process.env.DB_NAME) throw new Error('Missing .env key');

const databaseConfig: config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  requestTimeout: 15000,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

connectToDatabase(databaseConfig)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('Something went Wrong !', err);
  });
