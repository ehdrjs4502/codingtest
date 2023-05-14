const fs = require('fs');
const input = fs.readFileSync("./input/1568.txt").toString().trim().split("\n");

let count = 0;
let birds = 0;
let answer = 0;

while(true) {
    if(birds == input[0]) break;
    if(birds > input[0]) {
        birds -= count;
        count = 0;
        answer--;
    } else {
        count++;
        answer++;
        birds += count;
    }
    
}

console.log(answer);