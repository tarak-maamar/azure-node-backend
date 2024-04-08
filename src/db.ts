/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import sql from 'mssql';

const config = {
  user: 'sa',
  password: 'Ttaarreekk/93',
  server: 'localhost',
  database: 'master',
  requestTimeout: 15000,
  options: {
    keepAlive: true,
    encrypt: true,
    trustServerCertificate: true,
  },
};

export async function connectToDatabase() {
  try {
    await sql.connect(config);
    console.log('Connected to Azure SQL database');
  } catch (err) {
    console.error('Error connecting to Azure SQL database:', err);
  }
}
