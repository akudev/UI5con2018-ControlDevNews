var express = require('express');
var path = require('path');
var http = require('http');
var app = express();
var server = http.createServer(app);

"use strict";

var iPort = 2018;

// default: serve all unspecified URLs as static resources from below the "www" folder ("/" is mapped to "index.html")
app.use(express.static(path.join(__dirname, 'www')));

server.listen(iPort, () => console.log('UI5con 2018 ControlDevNews listening on localhost port ' + iPort));