const { logger } = require('../config/logger');

module.exports = async (err, req, res, next) => {
    const message = err?.message || 'Something went wrong!';
    const status = err?.status || 500;
    const level = err?.additionalInfo?.level || 'info';

    // write logs to a file and respond
    logger[level](err);
    res.status(status).json({ error: message });
}
