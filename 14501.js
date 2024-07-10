const fs = require("fs");
const input = fs.readFileSync("./input/14501.txt").toString().trim().split("\n");

const n = +input.shift();
const arr = [];
const dp = Array({ length: n + 1 }).fill(0);

input.forEach((value) => {
  arr.push(value.split(" ").map(Number));
});

arr.reverse();
arr.unshift(0);

for (let i = 1; i <= n; i++) {
  if (i < arr[i][0]) {
    dp[i] = dp[i - 1];
  } else {
    dp[i] = Math.max(dp[i - 1], arr[i][1] + dp[i - arr[i][0]]);
  }
}

console.log(dp[n]);
