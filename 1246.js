const fs = require("fs");
const input = fs
  .readFileSync("./input/1246.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, m] = input.shift().split(" ").map(Number);
const arr = input.map(Number).sort((a, b) => a - b);
let maxSum = 0;
let maxPrice = 0;
for (let i = 0; i < m; i++) {
  let price = arr[i];
  let sum = 0;

  if (m - i < n) {
    sum = price * (m - i);
  } else {
    sum = price * n;
  }

  if (sum > maxSum) {
    maxSum = sum;
    maxPrice = price;
  }
}

console.log(maxPrice, maxSum);
