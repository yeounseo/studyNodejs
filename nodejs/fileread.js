var fs = require('fs');

// fs.readFile('sample.txt', 'utf8', function (err, data) {
//     if (err) return err;
//     console.log(data);
// });

fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) return err;
    console.log(data);
})