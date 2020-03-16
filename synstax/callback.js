/*
function a() {
    console.log('a');
}
 */

// 위 와 아래 함수는 똑같이 a라는 이름을 가진다.

var a = function () {
    console.log('A');
}
// 바로 위의 코드를 통해 javascript에서는 함수가 값이다 라고 할 수 있다.
// a();

function slowfunc(callback) {
    console.log('b');
    callback();
}

slowfunc(a);