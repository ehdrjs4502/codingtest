const fs = require('fs');
const input = fs.readFileSync("./input/11654.txt").toString().trim().split("\n");

console.log(input[0].charCodeAt(0))