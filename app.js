var express = require('express');
var app = express();

// setup ports
var server_port = process.env.SERVER_PORT || 8080;
var server_ip = process.env.SERVER_IP || '127.0.0.1';

app.get('/Organization', function(req, res) {
    res.sendFile('./resources/organization.json', {root: __dirname});
});

app.get('/jwks.json', function(req, res){
    res.sendFile('./resources/jwks.json', {root: __dirname});
});

app.listen(server_port, server_ip, function() {
    console.log("Listening on " + server_ip + ", on port " + server_port);
});