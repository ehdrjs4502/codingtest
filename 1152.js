// 1. 입력값이 한 개일 때(한 줄)
const fs = require('fs');
const input = fs.readFileSync("./input/1152.txt").toString().trim();

function solution(input) {
    console.log(input.split(' ') == '' ? 0 : input.split(' ').length)
}

solution(input)