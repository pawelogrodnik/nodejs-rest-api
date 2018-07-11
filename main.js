var http = require('http');
http.createServer(function (req, res) {
  var response = {hello: 'world', another: 1, also: true, test: true};
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(response));
}).listen(8080, 'localhost');
console.log('Server running at http://localhost:8080/');
