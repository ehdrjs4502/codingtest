const fs = require('fs');
const input = fs.readFileSync("./input/2675.txt").toString().trim().split("\n");

function solution(input) {
    for(let i = 1; i < input.length; i++) {
        let answer = '';
        let arr = input[i].split(' ');
        let str = arr[1];
        let count = arr[0];
        for(let j = 0; j < str.length; j++) {
            answer += str[j].repeat(count);
        }
        console.log(answer);
    }

}

solution(input);