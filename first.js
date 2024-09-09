var http = require('http');
var dt = require("./ownModule")

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Cureent Date -> "+dt.myDateTime())
  res.end('Hello World!');
}).listen(9090);

