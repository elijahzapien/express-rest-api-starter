var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// ROUTES
// ------
var router = express.Router();

// (GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ version: '0.0.1' });
});

app.use('/api', router);

// START SERVER
// ------------
app.listen(port);
console.log('API listening on port ' + port);

