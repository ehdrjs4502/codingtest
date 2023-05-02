const fs = require('fs');
const input = fs.readFileSync("./input/1337.txt").toString().trim().split("\n");

function solution(input) {
    input.shift();
    let arr = input.map((x) => Number(x));
    let count = 0;

    arr.sort((a, b) => {
        return a - b;
    });

    for(let i = 0; i < arr.length; i++) {
        for(let j = 1; j <= 5; j++) {
            
        }
    }

    return count;
}

console.log(solution(input));