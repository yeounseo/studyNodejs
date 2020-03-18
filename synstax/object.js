// array, object

// function 
function f1(a, b) {
    return console.log(a + b);
}
// f1(1, 1);
// f1(1, 2);

var f1 = function (a, b) {
    return console.log(a + b);
}

var a = [f1];
a[0](1, 1);

var o = {
    func: function (a, b) {
        return console.log(a - b);
    }
}

o.func(2, 1);

// 배열과 객체는 모두 서로 연관된 데이터를 담는 그릇인데, javascript에서는 처리 방법을 그룹핑하는 함수 조차도, 데이터 이기도 하기 때문에 ! 배열과 객체에 담을 수 있다.