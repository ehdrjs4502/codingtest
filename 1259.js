const fs = require('fs');
const input = fs.readFileSync("./input/1259.txt").toString().trim().split("\n");
input.pop();

let answer = "";

for(let i = 0; i < input.length; i++) {
    let count = 0;
    const dup = Math.floor((input[i].length) / 2);
    for(let j = 0; j < dup;  j++) {
        if(input[i][j] == input[i][input[i].length - 1 - j]) {
            count++;
        }
    }

    if(count == dup) {
        answer += "yes\n";
    } else {
        answer += "no\n";
    }
}

console.log(answer);