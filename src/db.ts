/* eslint-disable no-console */
import sql, { config } from 'mssql';

export async function connectToDatabase(databaseConfig: config) {
  try {
    await sql.connect(databaseConfig);
    console.log('Connected to Azure SQL database');
  } catch (err) {
    console.error('Error connecting to Azure SQL database:', err);
  }
}
