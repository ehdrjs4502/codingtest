const fs = require("fs");
const input = fs.readFileSync("./input/2294.txt").toString().trim().split("\n");

const [n, k] = input.shift().split(" ").map(Number);
const coins = input.map(Number).sort((a, b) => a - b);
const dp = Array.from({ length: k + 1 }).fill(1000000000);
dp[0] = 0;

for (let i = 0; i < n; i++) {
  for (let j = coins[i]; j <= k; j++) {
    dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
  }
}

console.log(dp[k] === 1000000000 ? -1 : dp[k]);
