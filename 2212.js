const fs = require("fs");
const input = fs
  .readFileSync("./input/2212.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, k] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);
const gap = [];
let result = 0;

for (let i = 0; i < n - 1; i++) {
  gap.push(arr[i + 1] - arr[i]);
}

gap.sort((a, b) => a - b);

for (let i = 0; i < gap.length - (k - 1); i++) {
  result += gap[i];
}
console.log(result);
