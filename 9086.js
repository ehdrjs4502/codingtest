const fs = require('fs');
const input = fs.readFileSync("./input/9086.txt").toString().trim().split("\n");

function solution(input) {
    for(let i = 1; i < input.length; i++) {
        if(input[i].length == 1) {
            console.log(input[i] + input[i]);
        } else {
            console.log(input[i][0] + input[i][input[i].length - 1]);
        }
        
    }

}

solution(input);