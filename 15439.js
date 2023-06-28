const fs = require('fs');
const input = fs.readFileSync("./input/15439.txt").toString().trim()

console.log(input * (input - 1));