const fs = require("fs");
const input = fs
  .readFileSync("./input/19951.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, m] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);
const order = Array.from({ length: n + 1 }).fill(0);
const result = [];
let sum = 0;

for (let i = 0; i < m; i++) {
  const [a, b, k] = input[i].split(" ").map(Number);
  order[a - 1] += k;
  order[b] -= k;
}

for (let i = 0; i < n; i++) {
  sum += order[i];
  result.push(arr[i] + sum);
}

console.log(result.join(" "));
