let score = ["70", "80", "95"];
let sum = 0;
let i = 0;

while (i < score.length) {
    sum = sum + parseInt(score[i], 10);
    i++;
}

console.log(Math.floor(sum / score.length));

