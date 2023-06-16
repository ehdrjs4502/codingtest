const fs = require('fs');
const input = fs.readFileSync("./input/11399.txt").toString().trim().split("\n");

const count = input[1].split(" ").map((x) => Number(x));

count.sort((a, b) => {
    return a - b;
})

let answer = 0;
let sum = 0;

for(let i = 0; i < count.length; i++) {
    for(let j = i; j < i + 1; j++) {
        sum += count[j];

        answer += sum;
    }
}

console.log(answer);