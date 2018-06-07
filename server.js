var express = require('express');
var path = require('path');
var http = require('http');
var app = express();
var server = http.createServer(app);

var iPort = 2018;

// all resources
app.get('/\*', function (req, res) {
	res.sendFile(path.join(__dirname, 'www/', req.path));
});

server.listen(iPort, function () {
	console.log('UI5con 2018 ControlDevNews listening on localhost port ' + iPort);
});
