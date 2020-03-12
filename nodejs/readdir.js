const testFolder = '../data';
const fs = require('fs');

fs.readdir(testFolder, function (err, filelist) {
    console.log(filelist);
});

// 파일의 목록을 배열로 만들어서 전달한다.