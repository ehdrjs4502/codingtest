let fs = require('fs');
let input = fs.readFileSync('./input/10871.txt').toString().trim().split('\n');


function solution(input) {
    const num = Number(input[0].split(' ')[1]);
    return input[1].split(' ').filter((x) => x < num).join(' ');
}

console.log(solution(input));