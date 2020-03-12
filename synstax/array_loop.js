let number = [1, 2, 400, 12, 5];

let i = 0;
let total = 0;
while (i < number.length) {
    total = total + number[i];
    console.log(number[i], i);
    i = i + 1;
}

console.log(`total : ${total}`);

console.log(` sort array number : ${number.sort()}`);