const fs = require("fs");
const input = fs.readFileSync("./input/11053.txt").toString().trim().split("\n");

const n = +input.shift();
const arr = input.shift().split(" ").map(Number);
const dp = Array.from({ length: n }).fill(1);

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(Math.max(...dp));
