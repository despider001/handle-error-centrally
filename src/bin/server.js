const { CustomError } = require('../lib/CustomError');
const app = require('../app');
const port = 3001;

init();

async function init() {
  try {
    app.listen(port, () => {
      console.log('Express App Listening on Port ', port);
    });
  } catch (error) {
    console.error(`An error occurred: ${JSON.stringify(error)}`);
    new CustomError(`An error occurred: ${JSON.stringify(error)}`, 500, { level: 'error', filename: path.basename(__filename) })
    process.exit(1);
  }
}
