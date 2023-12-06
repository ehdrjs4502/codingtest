const fs = require("fs");
const input = fs.readFileSync("./input/9237.txt").toString().trim().split("\n");

const n = input.shift();
let result = 0;

const arr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => {
    return b - a;
  });

for (let i = 0; i < n; i++) {
  result = Math.max(result, arr[i] + i + 1);
}

console.log(result + 1);
