const { CustomError } = require('../lib/CustomError');
const path = require('path');

module.exports = (req, res, next) => {
    try {
        // code goes here
        res.locals.greeting = "hi"

        // make something go wrong
        // throw new Error("fooo!")
    } catch (error) {
        return next(new CustomError(`Something went wrong`, 400, { level: 'error', filename: path.basename(__filename) }));
    }

    next();
}
