const fs = require("fs");
const input = fs.readFileSync("./input/12847.txt").toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);
let sum = 0;
let max = 0;
for (let i = 0; i < m; i++) {
  sum += arr[i];
}

max = sum;

for (let i = 1; i < n - m + 1; i++) {
  sum = sum - arr[i - 1] + arr[i + m - 1];
  max = Math.max(max, sum);
}

console.log(max);
