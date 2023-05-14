const fs = require('fs');
const input = fs.readFileSync("./input/11718.txt").toString().trim().split("\n");

let answer = ""

for(let i = 0; i < input.length; i++) {
    answer += input[i] + "\n"
}

console.log(answer)