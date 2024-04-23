/* eslint-disable @typescript-eslint/no-explicit-any */
import { sequelize } from '../init';

export default async function globalTeardown() {
  await sequelize.close();
}
