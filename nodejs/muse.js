// 객체가 많아진다면 ? 
// 정리정돈이 필요해진다 ! 
// 객체를 정리하기 위해서는 모듈로 정리한다.

// var M = {
//     v: 'v',
//     f: function () {
//         console.log(this.v);
//     }
// }

var part = require('./mpart.js');
console.log(part);

// M.f();
part.f();