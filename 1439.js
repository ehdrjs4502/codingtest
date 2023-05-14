const fs = require('fs');
const input = fs.readFileSync("./input/1439.txt").toString().trim();

let zeroCnt = 0
let oneCnt = 0

input[0] == '0' ? zeroCnt++ : oneCnt++

for(let i = 1; i < input.length; i++) {
    if(input[i-1] != input[i]) {
        input[i] == '0' ? zeroCnt++ : oneCnt++
    }
}

console.log(Math.min(zeroCnt, oneCnt))