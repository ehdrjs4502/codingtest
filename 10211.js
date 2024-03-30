const fs = require("fs");
const input = fs
  .readFileSync("./input/10211.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = input.shift();

for (let i = 0; i < t; i++) {
  const len = input.shift();
  const arr = input.shift().split(" ").map(Number);
  let maxSum = arr[0];
  let currentSum = 0;

  for (let i = 0; i < len; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(currentSum, maxSum);
  }
  console.log(maxSum);
}
