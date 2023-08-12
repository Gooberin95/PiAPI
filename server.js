var http = require('http');

//create a server object:
http.createServer(function  (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(req.url); //writes a response to client
	res.end(); //ends response
}).listen(8080);

