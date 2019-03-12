var express = require('express');


var user = express.Router();
user.get('/friends', (req, res) => {res.end("output friends");});
user.get('/profile', (req, res) => {res.end("output profile");});



var poems = express.Router();
poems.get('/1',(req,res) => {res.end('This is poem 1');});
poems.get('/2',(req,res)=>{res.end('This is poem2');});


var app = express();
app.use('/user', user);
app.use('/poems',poems);

app.listen(8080);