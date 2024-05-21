const fs = require("fs");
const input = fs.readFileSync("./input/11055.txt").toString().trim().split("\n");

const n = +input.shift();
const arr = input.shift().split(" ").map(Number);
const dp = Array.from({ length: n }).fill(0);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    dp[i] = arr[i];
    if (arr[i] > arr[j]) {
      dp[i] = Math.max(dp[i], dp[j] + arr[i]);
    }
  }
}

console.log(Math.max(...dp));
