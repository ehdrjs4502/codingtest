const fs = require("fs");
const input = fs
  .readFileSync("./input/20300.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input[0];
const arr = input[1]
  .split(" ")
  .map(BigInt)
  .sort((a, b) => (a < b ? -1 : 1));
let max = 0;

if (n % 2 === 1) {
  max = arr.pop();
}
for (let i = 0; i < n / 2; i++) {
  let sum = arr[i] + arr[arr.length - 1 - i];
  if (sum > max) max = sum;
}

console.log(String(max));
