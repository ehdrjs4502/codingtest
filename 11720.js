const fs = require('fs');
const input = fs.readFileSync("./input/11720.txt").toString().trim().split("\n");

console.log(input[1].split('').reduce((a, b) => {
    return Number(a) + Number(b);
}));