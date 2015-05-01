var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());
app.use(express.static("."));

app.listen(process.env.PORT || 3000);

// var server = http.createServer(function(req, res) {
//   res.end('Hello from NodeJS!\n');
//   console.log('Someone visited our web server!');
// })

// server.listen(3000, '0.0.0.0');
console.log("NodeJS web server running on 0.0.0.0:3000");
