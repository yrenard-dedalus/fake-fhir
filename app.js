var express = require('express');
var app = express();

// setup ports
var server_port = process.env.SERVER_PORT || 8080;
var server_ip = process.env.SERVER_IP || '127.0.0.1';

app.get('/', function(req, res) {
    res.end('Hello Youtube!');
});

app.listen(server_port, server_ip, function() {
    console.log("Listening on " + server_ip + ", on port " + server_port);
});