// 1. 입력값이 한 개일 때(한 줄)
const fs = require('fs');
const input = fs.readFileSync("./input/2747.txt").toString().trim();


function solution(input) {
    let arr = [0,1];

    for(let i = 2; i <= input; i++) {
        arr[i] = (arr[i-1] + arr[i-2])
    }

    return arr[arr.length - 1];
}


console.log(solution(input));