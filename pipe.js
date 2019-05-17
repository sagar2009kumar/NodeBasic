var http = require('http');
var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname+'/input.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname+'/output.txt', 'utf8');
//
// /**** Here the file is read into the chunk rather than the whole block. It does not load the whole data into the memory and then
//  * transfer it rather it only transfers a chunk of data and transfers it ****/
//
// myReadStream.pipe(myWriteStream);

var server = http.createServer(function(req, res) {

    console.log('Request was made: '+ req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});

    var myReadStream = fs.createReadStream(__dirname+'/input.txt', 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Listening to the port 3000');
