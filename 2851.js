const fs = require("fs");
const input = fs
  .readFileSync("./input/2851.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const sum = Array.from({ length: input.length + 1 }).fill(0);
let min = 99999;
let result = 0;
for (let i = 0; i < input.length; i++) {
  sum[i + 1] = sum[i] + +input[i];

  if (Math.abs(100 - sum[i + 1]) <= min) {
    min = Math.abs(100 - sum[i + 1]);
    result = Math.max(result, sum[i + 1]);
  }
}

console.log(result);
