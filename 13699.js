const fs = require("fs");
const input = +fs.readFileSync("./input/13699.txt").toString().trim();

const dp = [];

dp[1] = BigInt(1);
dp[2] = BigInt(1);
dp[3] = BigInt(1);
dp[4] = BigInt(1);

for (let i = 4; i <= input; i++) {
  dp[i] = dp[i - 1] + dp[i - 3];
}

console.log(String(dp[input]));
