var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, '/src')));

app.get('/', function(req, res){
    res.sendFile('sandbox.html', {root:__dirname + '/src'});
});

app.listen(port, function(err){
    console.log('server running on port: ' + port);
});