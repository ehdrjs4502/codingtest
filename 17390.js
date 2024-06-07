const fs = require("fs");
const input = fs
  .readFileSync("./input/17390.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, m] = input.shift().split(" ").map(Number);
const arr = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const sumArr = Array.from({ length: n + 1 }).fill(0);
const result = [];

for (let i = 0; i < n; i++) {
  sumArr[i + 1] = sumArr[i] + arr[i];
}

for (let i = 0; i < m; i++) {
  const [l, r] = input[i].split(" ").map(Number);
  result.push(sumArr[r] - sumArr[l - 1]);
}

console.log(result.join("\n"));
