const fs = require("fs");
const input = fs
  .readFileSync("./input/1535.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = +input.shift();
const L = input.shift().split(" ").map(Number);
const J = input.shift().split(" ").map(Number);
const dp = Array.from({ length: 101 }).fill(0);

L.unshift(0);
J.unshift(0);

for (let i = 1; i <= n; i++) {
  for (let j = 100; j > L[i]; j--) {
    dp[j] = Math.max(dp[j], dp[j - L[i]] + J[i]);
  }
}

console.log(dp[100]);
