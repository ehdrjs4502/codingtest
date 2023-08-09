const fs = require('fs');
const input = fs.readFileSync("./input/11931.txt").toString().trim().split("\n");
input.shift()

// 정렬 후 출력
console.log(input.sort((a,b) => {
    return a - b
}).join('\n'))