const fs = require('fs');
const input = fs.readFileSync("./input/2751.txt").toString().trim().split("\n");

input.shift()

console.log(input.sort((a,b) => {
    return a- b
}).join('\n'))