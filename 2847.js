const fs = require("fs");
const input = fs
  .readFileSync("./input/2847.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
let arr = input.map(Number);
let result = 0;
for (let i = n - 1; i > 0; i--) {
  if (arr[i - 1] >= arr[i]) {
    result += arr[i - 1] - (arr[i] - 1);
    arr[i - 1] = arr[i] - 1;
  }
}

console.log(result);
