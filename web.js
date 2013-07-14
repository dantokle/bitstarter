var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var fs = require ('fs');
var bufferz = new Buffer(fs.readFileSync('index.html'), 'utf-8');
response.send(bufferz.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
