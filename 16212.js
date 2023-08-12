const fs = require('fs');
const input = fs.readFileSync("./input/16212.txt").toString().trim().split("\n");

input.shift()

console.log(input[0].split(' ').sort((a, b) => {
    return a - b
}).join(' '))