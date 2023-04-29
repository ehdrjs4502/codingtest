const fs = require('fs');
const input = fs.readFileSync("./input/27886.txt").toString().trim().split("\n");
//"/dev/stdin"

function solution(input) {
    let str = input[0];
    const num = Number(input[1]);

    console.log(str[num - 1]);
}


solution(input);
