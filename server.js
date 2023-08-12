var http = require('http');
var dt = require('./myfile');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Here is an example of inserting date and time..." + dt.myDateTime());
  res.end('Well Hello World!');
}).listen(8080);
