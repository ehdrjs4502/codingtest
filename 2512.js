const fs = require("fs");
const input = fs
  .readFileSync("./input/2512.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
const arr = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const budget = input.shift();
let start = 0;
let end = arr[n - 1];
let result = 0;

while (start <= end) {
  let sum = 0;
  let mid = Math.floor((start + end) / 2);
  for (let i = 0; i < n; i++) {
    sum += Math.min(arr[i], mid);
  }

  if (sum <= budget) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
