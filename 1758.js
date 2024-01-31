const fs = require("fs");
const input = fs
  .readFileSync("./input/1758.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();

input.sort((a, b) => b - a);
let result = 0;

for (let i = 0; i < n; i++) {
  const tip = input[i] - (i + 1 - 1);
  if (tip >= 0) {
    result += tip;
  }
}

console.log(result);
