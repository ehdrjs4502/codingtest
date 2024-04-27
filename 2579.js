const fs = require("fs");
const input = fs
  .readFileSync("./input/2579.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
const arr = input.map((v) => Number(v));
arr.unshift(0);
const dp = [];
dp[1] = arr[1];
dp[2] = arr[1] + arr[2];
dp[3] = Math.max(arr[1], arr[2]) + arr[3];

for (let i = 4; i <= n; i++) {
  dp[i] = Math.max(dp[i - 3] + arr[i - 1] + arr[i], dp[i - 2] + arr[i]);
}

console.log(dp[n]);
