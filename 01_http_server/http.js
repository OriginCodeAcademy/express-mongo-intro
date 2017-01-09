const http = require('http');

const server = http.createServer(function (req, res) {
  // log a msg when request is received
  console.log('Received ' + req.method + ' request for: ' + req.url);
  
  // send headers
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // send body response
  res.end("Hello World");
});

// listen for incoming connections
server.listen(3000, 'localhost', null, function () {
	// log a msg that the server is listening and port
	console.log('Sever is listening on localhost:3000');
});