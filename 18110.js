const fs = require("fs");
const input = fs
  .readFileSync("./input/18110.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = Number(input.shift());

if (n == 0) return console.log(0);

const avg = Math.round(n * (15 / 100));
const arr = input.map(Number).sort((a, b) => a - b);
let sum = 0;
let count = 0;

for (let i = avg; i < n - avg; i++) {
  sum += arr[i];
  count++;
}

console.log(Math.round(sum / count));
