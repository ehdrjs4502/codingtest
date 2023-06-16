const fs = require('fs');
const input = fs.readFileSync("./input/1264.txt").toString().trim().split("\n");

const reg = /[aeiou]/g;
let answer = "";

for(let i = 0; i < input.length - 1; i++) {
    input[i] = input[i].toLowerCase();
    if(input[i].match(reg) != null) {
        answer += input[i].match(reg).length + "\n";
    } else {
        answer += 0 + "\n";
    }
}

console.log(answer);