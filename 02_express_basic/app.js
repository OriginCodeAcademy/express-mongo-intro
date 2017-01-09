const express = require('express');

// create an express instance
const app = express();

// route handler for requests to /
app.get('/', function(req, res) {
	res.status(200).send('Hello world');
});

// listen for incoming connections
app.listen(3000, function () {
	console.log('Server is listening on localhost:3000');
});