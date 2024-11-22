import logger from 'jet-logger';

import EnvVars from '@src/common/EnvVars';
import server from './server';
import { AppDataSource } from './appDataSource';
import 'reflect-metadata';

AppDataSource.initialize()
    .then(() => {
        // console.info('Data Source has been initialized!');
        process.stdout.write('Data Source has been initialized!'); 
        
    })
    .catch((err: unknown) => {
        if (err instanceof Error) {
            process.stdout.write('Data Source has been initialized! ' + err.message);
        } else if (typeof err === 'string') {
            process.stdout.write('Data Source has been initialized! ' + err);
        } else {
            process.stdout.write('An unknown error has been ocurred ');
        }
    });

// **** Run **** //

const SERVER_START_MSG = ('Express server started on http://localhost:' + 
  EnvVars.Port.toString());

server.listen(EnvVars.Port, () => logger.info(SERVER_START_MSG));

