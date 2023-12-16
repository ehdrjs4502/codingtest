const fs = require("fs");
const input = fs
  .readFileSync("./input/3135.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [a, b] = input.shift().split(" ");
let result = Math.abs(a - b);
const n = input.shift();

if (input.includes(b)) {
  return console.log(1);
}

for (let i = 0; i < n; i++) {
  result = Math.min(Math.abs(b - input[i]) + 1, result);
}

console.log(result);
