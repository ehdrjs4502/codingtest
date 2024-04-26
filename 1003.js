const fs = require("fs");
const input = fs
  .readFileSync("./input/1003.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = input.shift();

for (let i = 0; i < t; i++) {
  const n = input[i];
  const dp = [];
  dp[0] = [1, 0];
  dp[1] = [0, 1];
  dp[2] = [1, 1];
  for (let j = 3; j <= n; j++) {
    dp[j] = [dp[j - 1][0] + dp[j - 2][0], dp[j - 1][1] + dp[j - 2][1]];
  }
  console.log(dp[n].join(" "));
}
