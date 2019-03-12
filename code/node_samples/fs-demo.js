var fs = require('fs');
fs.readFile("mytextfile.txt", 'utf8', function (err, txt) {
    if (err) throw err;
    console.log("File content is: "+txt);
    fs.writeFile("outputfile.txt", txt, { encoding: 'utf8' }, (err) => {
    if (err) throw err;
    });
});