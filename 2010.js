const fs = require("fs");
const input = fs
  .readFileSync("./input/2010.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = Number(input.shift());
let result = 0;

for (let i = 0; i < n; i++) {
  result += Number(input[i]);
}

console.log(result - (n - 1));
