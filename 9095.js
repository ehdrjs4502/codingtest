const fs = require("fs");
const input = fs.readFileSync("./input/9095.txt").toString().trim().split("\n");

const t = input.shift();

const dp = [];
const result = [];

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
dp[4] = 7;

for (let i = 0; i < t; i++) {
  const n = +input[i];

  for (let j = 4; j <= n; j++) {
    dp[j] = dp[j - 3] + dp[j - 2] + dp[j - 1];
  }

  result.push(dp[n]);
}

console.log(result.join("\n"));
