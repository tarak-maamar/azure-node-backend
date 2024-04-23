/* eslint-disable @typescript-eslint/no-explicit-any */

import { sequelize } from '../../../init';

export const clearMockDB = async () => {
  //const instance: Sequelize = (global as any).__SQLDBINSTANCE;

  await sequelize.sync();

  //prettier-ignore

  // await Promise.all(
  //   Object.values(instance.models)
  //     .map((model) => model.destroy({ truncate: true, cascade: false })),
  // );
  await sequelize.truncate();
};

export const connectToMockDB = async () => {
  // const instance: Sequelize = (global as any).__SQLDBINSTANCE;

  await sequelize.sync();
};

export const closeMockDB = async () => {
  // const instance: Sequelize = (global as any).__SQLDBINSTANCE;

  await sequelize.close();
};
