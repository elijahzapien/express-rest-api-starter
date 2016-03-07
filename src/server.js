import express from 'express';
import bodyParser from 'body-parser';
import settings from '../settings';
import { debugServer } from './debug';

import db from 'db';
import { UnprotectedRouter, ProtectedRouter }from 'controllers';

const server = express();

// SETUP
// -----
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(express.static(__dirname + '/dist'));
server.set('tokenSecret', settings.db.secret);

// ADD CONTROLLERS
// ---------------
server.use('/api', UnprotectedRouter);
server.use('/api', ProtectedRouter);

// START SERVER
// ------------
const port = process.env.PORT || 8080;
const instance = server.listen(port, () => {
    debugServer(`API listening on port ${port}`);
});

