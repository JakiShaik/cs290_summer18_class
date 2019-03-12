var http = require('http');
var fs = require('fs');

//create a server object:
/*http.createServer(function (req, res) {
  //res.write('Hello World!'); //write a response to the client
  fs.readFile('sample.html',function (err, data){
    res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
    res.write(data);
  res.end(); //end the response
  })
  //res.end();
}).listen(8080); //the server object listens on port 8080*/


http.createServer(function (req, res) {
  //res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Helloooooo World');
  res.end();
}).listen(8081);