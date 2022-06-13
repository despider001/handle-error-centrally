const { CustomError } = require('../lib/CustomError');
const sayHi = require('../middlewares/sayHi');
const express = require('express');
const route = express.Router();
const path = require('path');


route.get('/', sayHi, (req, res) => {
    return res.status(200).json({ result: res.locals.greeting });
});

// catch 404 and forward to error handler
route.all('*', (req, res, next) => {
    next(new CustomError('Not found', 404, { level: 'error', filename: path.basename(__filename) }));
});

module.exports = route;
