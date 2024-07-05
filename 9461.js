const fs = require("fs");
const input = fs
  .readFileSync("./input/9461.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = input.shift();
const result = [];
const dp = [];

dp[1] = 1;
dp[2] = 1;
dp[3] = 1;
dp[4] = 2;
dp[5] = 2;
dp[6] = 3;

for (let i = 0; i < t; i++) {
  const n = input[i];
  for (let i = 7; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 5];
  }

  result.push(dp[n]);
}

console.log(result.join("\n"));
