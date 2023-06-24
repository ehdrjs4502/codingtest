const fs = require('fs');
const input = fs.readFileSync("./input/2587.txt").toString().trim().split("\n");

const avg = input.reduce((a, b) => Number(a) + Number(b)) / input.length;

input.sort((a, b) => {
    return a - b;
})

console.log(avg + '\n' + input[2]);