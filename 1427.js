const fs = require('fs');
const input = fs.readFileSync("./input/1427.txt").toString().trim();

console.log(input.split('').sort((a, b) => {
    return b - a
}).join(''))