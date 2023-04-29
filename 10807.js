let fs = require('fs');
let input = fs.readFileSync('./input/10807.txt').toString().trim().split('\n');

function solution(input) {
    return input[1].split(' ').filter((x) => x == input[2]).length;
}

console.log(solution(input)); 