/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import 'dotenv/config';

import { sequelize } from '../init';

export default async function globalSetup() {
  (global as any).__SQLDBINSTANCE = sequelize;

  await sequelize.authenticate()
    .then(() => {
      console.log('Test DB connection established successfully');
    })
    .catch((err) => {
      console.log('Unable to connect to Test DB', err);
    });
}
