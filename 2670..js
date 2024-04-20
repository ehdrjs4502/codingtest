const fs = require("fs");
const input = fs
  .readFileSync("./input/2670.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
let arr = input.map(Number);
let max = 0;

for (let i = 1; i < n; i++) {
  arr[i] = Math.max(arr[i], arr[i] * arr[i - 1]);
}

console.log(Math.max(...arr).toFixed(3));
