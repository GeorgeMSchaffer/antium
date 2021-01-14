/**
 * Bootstrap your app
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import Promise from 'bluebird';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import config from './config';
import Express from './config/express';
dotenv.config();

// require('dotenv').config();

/**
 * Promisify All The Mongoose
 * @param mongoose
 */
Promise.promisifyAll(mongoose);

/**
 * Connecting Mongoose
 * @param uris
 * @param options
 */
mongoose.connect(config.db, {
  bufferMaxEntries: 0,
  keepAlive: true,
  reconnectInterval: 500,
  reconnectTries: 30,
  socketTimeoutMS: 0,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// POSTGRES
const dbConfig = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DB,
  host: process.env.SQL_HOST,
  port: process.env.SQL_PORT
//  max: config.db.max,
//  idleTimeoutMillis: config.db.idleTimeoutMillis
};
console.debug(`\r \n ------ dbConfig -------- \r\n`, dbConfig);

/**
 * Throw error when not able to connect to database
 */
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.db}`);
});

/**
 * Initialize Express
 */
const ExpressServer = new Express();
ExpressServer.init();

/**
 * Listen to port
 */
ExpressServer.httpServer.listen(process.env.PORT || config.port, () => {
  console.log(`🚀  Server ready at ${config.port}`);
  console.log(
    `🚀 Server ready at http://localhost:${config.port}${ExpressServer.server.graphqlPath}`
  );
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${config.port}${ExpressServer.server.subscriptionsPath}`
  );
});
