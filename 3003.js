const fs = require('fs');
const input = fs.readFileSync("./input/3003.txt").toString().trim().split("\n");

let arr = input[0].split(" ");

console.log(1 - arr[0], 1 - arr[1], 2 - arr[2], 2 - arr[3], 2 - arr[4], 8 - arr[5])