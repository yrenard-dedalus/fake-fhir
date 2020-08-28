var express = require('express');
var app = express();

// setup ports
var server_port = process.env.SERVER_PORT || 8080;
var server_ip = process.env.SERVER_IP || '0.0.0.0';

app.get('/jwks.json', function(req, res){
    res.sendFile('./resources/jwks.json', {root: __dirname});
});

app.listen(server_port, server_ip, function() {
    console.log("Listening on " + server_ip + ", on port " + server_port);
});
