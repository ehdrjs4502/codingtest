const fs = require('fs');
const input = fs.readFileSync("./input/2908.txt").toString().trim().split(" ");

let A = input[0].split('').reverse().join('')
let B = input[1].split('').reverse().join('')

console.log(A > B ? A : B)