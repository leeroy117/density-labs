import logger from 'jet-logger';

import EnvVars from '@src/common/EnvVars';
import server from './server';
import { AppDataSource } from './appDataSource';
import "reflect-metadata"

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

// **** Run **** //

const SERVER_START_MSG = ('Express server started on http://localhost:' + 
  EnvVars.Port.toString());

server.listen(EnvVars.Port, () => logger.info(SERVER_START_MSG));

