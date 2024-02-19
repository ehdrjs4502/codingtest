const fs = require("fs");
const input = fs
  .readFileSync("./input/1449.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, l] = input.shift().split(" ").map(Number);
const arr = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let result = 0;
let length = 0;

for (let i = 0; i < n; i++) {
  if (arr[i] > length) {
    length = arr[i] + l - 0.5;
    result++;
  }
}
console.log(result);
