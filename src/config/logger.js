const pino = require('pino');

const transport = pino.transport({
    targets: [
        { target: 'pino-pretty' }, // write to console
        {
            target: 'pino/file',
            options: { destination: './app.log', append: true } // save to a file
        }
    ]
});

const logger = pino(transport);

module.exports = { logger };
