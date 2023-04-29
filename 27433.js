// 1. 입력값이 한 개일 때(한 줄)
const fs = require('fs');
const input = fs.readFileSync("./input/27433.txt").toString().trim();


function solution(input) {
    if(input <= 1) {
        return 1;
    }

    return input * solution(input - 1);
}


console.log(solution(input));