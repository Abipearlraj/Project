var fs = require('fs');

 var data=fs.readFile('file.txt', 'utf8', function(err, data) {
     // called at a later time when the results are in
     console.log(data)
 });
