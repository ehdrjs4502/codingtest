const fs = require("fs");
const input = fs.readFileSync("./input/12865.txt").toString().trim().split("\n");

const [n, k] = input.shift().split(" ").map(Number);
const w = [];
const v = [];
const dp = Array.from({ length: k + 1 }).fill(0);

for (let i = 1; i <= n; i++) {
  const [curW, curV] = input.shift().split(" ").map(Number);
  w[i] = curW;
  v[i] = curV;
}

for (let i = 1; i <= n; i++) {
  for (let j = k; j - w[i] >= 0; j--) {
    dp[j] = Math.max(dp[j], dp[j - w[i]] + v[i]);
  }
}
console.log(dp[k]);
