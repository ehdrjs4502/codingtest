const fs = require("fs");
const input = fs
  .readFileSync("./input/20044.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

let min = 100001;
const n = input[0];
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let start = 0;
let end = arr.length - 1;

for (let i = 0; i < n; i++) {
  min = Math.min(min, arr[start] + arr[end]);
  start++;
  end--;
}

console.log(min);
