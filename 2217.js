const fs = require("fs");
const input = fs
  .readFileSync("./input/2217.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();

const rope = input.map(Number).sort((a, b) => b - a);

const result = [];

for (let i = 0; i < n; i++) {
  result.push(rope[i] * (i + 1));
}

console.log(result);

console.log(Math.max(...result));
