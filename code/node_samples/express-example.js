var express = require('express');
var app = express(); // yes, it's a function

//#region 
//register a function that will be called on each http request
/*app.get('/',function(req, res) {
    
    res.end("Hello! You accessed ");
    
});
app.listen(8080);*/


//#region GET example
app.get('/', function(req, res) {
    var id = req.query.id;
    if (id == 1) {
        res.end('poem1');
    }
    if (id == 2) {
        res.end('poem2');
    }
    res.send('Response to GET request!');
  });
  
  app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
  });

  //#region Express handlers
  app.get('/', function(req, res) {
    res.contentType('text/html');
    res.end("Go <a href='/path2'>here</a> for fun.");
});
app.get('/path2', function(req, res) {
    res.contentType('text/html');
    res.end("Hello! Click my button! "
+ "<form method=post><input type=submit></form>");
}); 
app.post('/path2', function(req, res) {
	res.contentType('text/html');
	res.end("Thanks for posting to me!");
});
app.listen(8080);