/* eslint-disable no-console */
import bodyParser from 'body-parser';
import express from 'express';
import { sequelize } from 'init';
import User from 'models/User';
import serverRoutes from 'routes';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

if (!process.env.DB_SERVER || !process.env.DB_NAME || !process.env.DB_USER) throw new Error('Missing .env key');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', serverRoutes);

sequelize.authenticate()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }).catch((err) => {
    console.log('Unable to connect to the database !', err);
  });

User.sync();

export default app;
