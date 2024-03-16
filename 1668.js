const fs = require("fs");
const input = fs
  .readFileSync("./input/1668.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v.trim()));

const n = Number(input.shift());
let left = 1;
let right = 1;
let lMax = 0;
let rMax = 0;

for (let i = 0; i < n - 1; i++) {
  if (lMax < input[i]) lMax = input[i];

  if (lMax < input[i + 1]) {
    left++;
    lMax = input[i + 1];
  }
}

for (let i = n - 1; i >= 0; i--) {
  if (rMax < input[i]) rMax = input[i];

  if (rMax < input[i - 1]) {
    right++;
    rMax = input[i - 1];
  }
}

console.log(left);
console.log(right);
