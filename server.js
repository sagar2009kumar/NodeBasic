var http = require('http');

var server = http.createServer(function(req, res) {

    res.writeHeader(200, {'Content-Type' : 'text/plain'});
    res.end('Hi Sagar ! You are working good.');

});

server.listen(3000, '127.0.0.1');
console.log('Hi I am listening to the port 3000');
