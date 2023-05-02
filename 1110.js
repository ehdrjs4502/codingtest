const fs = require('fs');
const input = fs.readFileSync("./input/1110.txt").toString().trim();

function solution(input) {
    const firstNum = input;
    let cycle = 0;
    let num = input;
    let rightNum = input[1];
    while(true) {
        num = Number(num[0]) + Number(num[1]);
        rightNum = num[1];
        num = rightNum + num;
        if(firstNum == num) {
            break;
        }
        console.log(num);
    }
}

console.log(solution(input));