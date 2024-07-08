const fs = require("fs");
const input = +fs.readFileSync("./input/17626.txt").toString().trim();

const dp = [0, 1];

for (let i = 2; i <= input; i++) {
  let min = 4;
  for (let j = 1; j * j <= i; j++) {
    min = Math.min(min, dp[i - j * j]);
  }
  dp[i] = min + 1;
}

console.log(dp[input]);
