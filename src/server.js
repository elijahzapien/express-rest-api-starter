import d from 'debug';
import express from 'express';
import bodyParser from 'body-parser';

import db from 'db';
import middleware from 'middleware';
import routes from 'routes'

const server = express();

// DEBUGGING
// ---------
const debugServer = d('Server');
const debugDB = d('Server:db');
const debugMiddleware = d('Server:middleware');
const debugRoute = d('Server:route');

// CONFIG
// ------
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(express.static(__dirname + '/dist'));

// ROUTER
// ------
const router = express.Router();

// middleware
middleware(router, debugMiddleware);

// routes
routes(router, debugRoute);

server.use('/api', router);

// http://localhost:8080/api
router.get('/', function(req, res) {
    res.json({ version: '0.0.1' });
});

// START SERVER
// ------------
const port = process.env.PORT || 8080;
const instance = server.listen(port, () => {
    debugServer(`API listening on port ${port}`);
});

