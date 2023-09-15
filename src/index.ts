import './pre-start'; // Must be the first import
import logger from 'jet-logger';

import EnvVars from '@src/constants/EnvVars';
import server from './server';

//import database connection
import { databaseConnect } from './database/connection';
// **** Connection with database on run **** //

const startServer = async () => {
  await databaseConnect();

  const SERVER_START_MSG = ('Express server started on port: ' + 
    EnvVars.Port.toString());

  server.listen(EnvVars.Port, () => logger.info(SERVER_START_MSG));
}
startServer();