const fs = require('fs');
const input = fs.readFileSync("./input/1110.txt").toString().trim();

function solution(input) {
    let firstNum = 0;
    let cycle = 0;
    let num = 0;
    let lastNum = input[1];
        num = input[0]+input[num.length-1]
        firstNum = input[num.length-1]
        lastNum = num[num.length-1]
    
    console.log(num,firstNum,lastNum)
}

console.log(solution(input));