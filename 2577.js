const fs = require('fs');
const input = fs.readFileSync("./input/2577.txt").toString().trim().split("\n")

const dupNum = (input[0] * input[1] * input[2]).toString()
let answer = ""

let obj = {
    0 : 0,
    1 : 0,
    2 : 0,
    3 : 0,
    4 : 0,
    5 : 0,
    6 : 0,
    7 : 0,
    8 : 0,
    9 : 0,
}

for(let i = 0; i < dupNum.length; i++) {
    obj[dupNum[i]] += 1
}

for(let j = 0; j < 10; j++) {
    answer += obj[j] + "\n"
}

console.log(answer)