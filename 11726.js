const fs = require("fs");
const input = fs.readFileSync("./input/11726.txt").toString().trim().split("\n");

const n = input.shift();
const dp = [];

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 2] + dp[i - 1]) % 10007;
}

console.log(dp[n]);
