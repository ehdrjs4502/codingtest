const fs = require("fs");
const input = fs.readFileSync("./input/2559.txt").toString().trim().split("\n");

const [n, k] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);

let sum = 0;

for (let i = 0; i < k; i++) {
  sum += arr[i];
}

let result = sum;

for (let i = 1; i < n - k + 1; i++) {
  sum = sum - arr[i - 1] + arr[i + k - 1];
  result = Math.max(result, sum);
}

console.log(result);
