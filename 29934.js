const fs = require("fs");
const input = fs
  .readFileSync("./input/29934.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const map = new Map();
let result = 0;
let n = input.shift();

for (let i = 0; i < n; i++) {
  map.set(input.shift(), 1);
}

let m = input.shift();

for (let i = 0; i < m; i++) {
  map.has(input.shift()) && result++;
}

console.log(result);
