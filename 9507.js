const fs = require("fs");
const input = fs
  .readFileSync("./input/9507.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
const reuslt = [];
const dp = [];

dp[0] = BigInt(1);
dp[1] = BigInt(1);
dp[2] = BigInt(2);
dp[3] = BigInt(4);

for (let i = 0; i < n; i++) {
  const n = input[i];
  if (n > 3) {
    for (let j = 4; j <= n; j++) {
      dp[j] = BigInt(dp[j - 1] + dp[j - 2] + dp[j - 3] + dp[j - 4]);
    }
  }
  reuslt.push(dp[n]);
}

console.log(reuslt.join("\n"));
