/**
 * File: config/database.js
 * Description: file responsible for the application's connectionStrings: PostgreSQL.
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexion to db:
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on('connect', () => {
  console.log('Conexion a la base de datos exitosa!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
