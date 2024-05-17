const fs = require("fs");
const input = +fs.readFileSync("./input/11727.txt").toString().trim();

const dp = [];
dp[1] = 1;
dp[2] = 3;

if (input <= 2) return console.log(dp[input]);

for (let i = 3; i <= input; i++) {
  dp[i] = (dp[i - 2] * 2 + dp[i - 1]) % 10007;
}
console.log(dp[input]);
