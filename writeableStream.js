var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname+'/input.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname+'/output.txt', 'utf8');

/**** Here the file is read into the chunk rather than the whole block. It does not load the whole data into the memory and then
 * transfer it rather it only transfers a chunk of data and transfers it ****/

myReadStream.on('data', function(chunk) {
    console.log('New Chunk Received:');
    myWriteStream.write(chunk);
});
