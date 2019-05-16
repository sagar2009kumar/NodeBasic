var fs = require('fs');

/**** it will do the things asynchronously ****/

fs.mkdir('stuff', function() {

    fs.readFile('readMe.txt', 'utf8', function(err, data) {

        fs.writeFile('./stuff/writeMe.txt', data);

    });
});
