const fs = require("fs");
const input = +fs.readFileSync("./input/9625.txt").toString().trim();

const dp = [];

dp[1] = [0, 1];
dp[2] = [1, 1];
dp[3] = [1, 2];

for (let i = 3; i <= input; i++) {
  dp[i] = [dp[i - 1][1], dp[i - 1][0] + dp[i - 1][1]];
}

console.log(dp[input].join(" "));
