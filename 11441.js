const fs = require("fs");
const input = fs
  .readFileSync("./input/11441.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();
const arr = input.shift().split(" ").map(Number);
const n = input.shift();
const sumArr = [arr[0]];
const result = [];

for (let i = 1; i < arr.length; i++) {
  sumArr.push(sumArr[i - 1] + arr[i]);
}

for (let i = 0; i < n; i++) {
  const [n, m] = input[i].split(" ").map(Number);
  result.push(sumArr[m - 1] - (sumArr[n - 2] || 0));
}

console.log(result.join("\n"));
