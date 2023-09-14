import './pre-start'; // Must be the first import
import logger from 'jet-logger';

import EnvVars from '@src/constants/EnvVars';
import server from './server';

//import database connection
import { database_client } from './database/connetion';

// **** Connection with database on run **** //
async function run() {
  try {
    await database_client.connect();
    await database_client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await database_client.close();
  }
}
run().catch(console.dir);

const SERVER_START_MSG = ('Express server started on port: ' + 
  EnvVars.Port.toString());

server.listen(EnvVars.Port, () => logger.info(SERVER_START_MSG));
