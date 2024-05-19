const fs = require("fs");
const input = fs.readFileSync("./input/9465.txt").toString().trim().split("\n");

const t = +input.shift();
const result = [];

for (let i = 0; i < t; i++) {
  const n = +input.shift();
  const arr = [input.shift().split(" ").map(Number)];
  arr.push(input.shift().split(" ").map(Number));
  const dp = Array.from({ length: 2 }, () => Array.from({ length: n }, () => 0));

  dp[0][0] = arr[0][0];
  dp[1][0] = arr[1][0];
  dp[0][1] = arr[1][0] + arr[0][1];
  dp[1][1] = arr[0][0] + arr[1][1];

  for (let j = 2; j < n; j++) {
    dp[0][j] = Math.max(dp[1][j - 2], dp[1][j - 1]) + arr[0][j];
    dp[1][j] = Math.max(dp[0][j - 2], dp[0][j - 1]) + arr[1][j];
  }

  result.push(Math.max(dp[0][n - 1], dp[1][n - 1]));
}

console.log(result.join("\n"));
