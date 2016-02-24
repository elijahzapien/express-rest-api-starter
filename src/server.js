import express from 'express';
import bodyParser from 'body-parser';

import db from 'db';
import middleware from 'middleware';
import routes from 'routes'

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const port = process.env.PORT || 8080;
const router = express.Router();

// MIDDLEWARE
// ----------
middleware(router);

// ROUTES
// ------
routes(router);

server.use('/api', router);

// (GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ version: '0.0.1' });
});

// START SERVER
// ------------
server.listen(port);
console.log('API listening on port ' + port);

