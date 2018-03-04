const mongoose = require('mongoose');

require('./models/project')

require('dotenv').config();

const app = require('./app');

async function run() {
  
  mongoose.Promise = global.Promise;
  const conn = await mongoose.connect(process.env.DATABASE);

  app.set('port', process.env.PORT || 8888);
  const server = app.listen(app.get('port'), () => {
    console.log(`Express is running on port ${server.address().port}`)
  });
}

run().catch(error => console.error(error.stack));