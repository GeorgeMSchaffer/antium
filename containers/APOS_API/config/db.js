require('dotenv').config();
const db = {
  user: process.env.SQL_DB_USER,
  password: process.env.SQL_DB_PASSWORD,
  server: process.env.SQL_DB_SERVER,
  database: process.env.SQL_SERVER_DB,
};
console.debug('DB Server and Database',db.server,db.database)
module.exports = db;