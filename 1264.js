const fs = require('fs');
const input = fs.readFileSync("./input/1264.txt").toString().trim().split("\n");

const reg = /[aeiou]/g;
let answer = "";

for(let i = 0; i < input.length - 1; i++) {
    input[i] = input[i].toLowerCase();
    let count = input[i].match(reg).length;
    answer += count + "\n";
}

console.log(answer);