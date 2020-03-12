// 배열 Array data type

/*

let fruits = ['사과', '바나나'];

let first = fruits[0];

let last = fruits[fruits.length - 1];

fruits.forEach(function (item, index, array) {
    console.log(item, index)
})

 */

//  arr 이라는 변수를 통해 배열을 다룰 수 있게 된다.
// 배열의 생성
let arr = ['A', 'B', 'C', 'D'];
// 배열을 읽기 , 배열은 0부터 자릿수가 카운트 된다.
console.log(arr[1]);
console.log(arr[3]);
// 배열의 수정
arr[2] = '3';
console.log(arr[2]);
console.log(arr);

// 배열내부의 값이 몇개 있는지 알고 싶다면 ? 
console.log(arr.length);
arr.push('E');
console.log(arr);
arr.pop();  // E를 뺀다.
console.log(arr); 