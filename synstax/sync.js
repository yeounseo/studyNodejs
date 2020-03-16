var fs = require('fs');

/*
// readFileSync : 순차적으로(동기적) 실행된다.

console.log('A');
var result = fs.readFileSync('sample.txt', 'utf8');
console.log(result);
console.log('C');
 */

// readFile : 비동기적으로 실행된다.
console.log('A');
fs.readFile('sample.txt', 'utf8', function (err, result) {
    if (err) {
        return err;
    }
    console.log(result);
});
console.log('C');

// node js 의 성능을 높이기 위해서는 비동기적으로 처리를 해야한다.

// callback : 나중에 함수를 호출한다.
//  다른 코드의 인수로서 넘겨주는 실행 가능한 코드