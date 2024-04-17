/* eslint-disable no-console */
import bodyParser from 'body-parser';
import express from 'express';
import { sequelize } from 'models/sequelize';
import User from 'models/User';
import 'dotenv/config';

import userRoutes from './routes/userRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

if (!process.env.DB_SERVER || !process.env.DB_NAME || !process.env.DB_USER) throw new Error('Missing .env key');

const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);
app.use('/api/auth', userRoutes);

router.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

sequelize.authenticate()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }).catch((err) => {
    console.log('Unable to connect to the database !', err);
  });

User.sync();
