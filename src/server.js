import express from 'express';
import bodyParser from 'body-parser';
import db from './db';

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const port = process.env.PORT || 8080;

// ROUTES
// ------
const router = express.Router();

// (GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ version: '0.0.1' });
});

server.use('/api', router);

// START SERVER
// ------------
server.listen(port);
console.log('API listening on port ' + port);

