const express = require('express');
const morgan = require('morgan');

// create a counter for middleware
var requestCount = 0;

// create an express instance
const app = express();

// apply middleware
app.use(morgan('dev'));

// custom middleware, counts requests
app.use(function(req, res, next) {
	requestCount++
	console.log('request number: ' + requestCount);
	next();
})

// custom middleware, very generic way to auth requests
// app.use(function(req, res, next) {
// 	if(req.get('auth') === 'openseseame') {
// 		next();
// 	} else {
// 		res.status(403).send();	
// 	}
	
// })

// route handler for requests to /
app.get('/', function(req, res) {
	res.status(200).send('Hello world');
});

// listen for incoming connections
app.listen(3000, function () {
	console.log('Server is listening on localhost:3000');
});