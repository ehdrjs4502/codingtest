const fs = require("fs");
const input = fs
  .readFileSync("./input/16208.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
const arr = input.shift().split(" ").map(Number);
let len = arr.reduce((pre, cur) => pre + cur);
let result = 0;

for (let i = 0; i < n; i++) {
  len -= arr[i];
  result += arr[i] * len;
}

console.log(result);
