const errorHandler  = require('./middlewares/errorHandler');
const { CustomError } = require('./lib/CustomError');
const { logger } = require('./config/logger');
const bodyParser = require('body-parser');
const router = require('./routes');
const express = require('express');
const path = require('path');
const app = express();

app.use(bodyParser.json());

app.use(router);

// error handler
app.use(errorHandler);

// handle uncaught exception
process.on('uncaughtException', err => {
  logger.error(new CustomError(`Something went wrong`, 500, { level: 'error', filename: path.basename(__filename), error: err }));
  process.exit(1);
});

// handle unhandledRejection
process.on('unhandledRejection', err => {
  logger.error(new CustomError(`Something went wrong`, 500, { level: 'error', filename: path.basename(__filename), error: err }));
  process.exit(1);
});

module.exports = app;
