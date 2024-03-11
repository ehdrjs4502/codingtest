const fs = require("fs");
const input = fs
  .readFileSync("./input/25496.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

let [p, n] = input.shift().split(" ").map(Number);
const arr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let result = 0;

for (let i = 0; i < n; i++) {
  if (p < 200) {
    result++;
    p += arr[i];
  } else {
    break;
  }
}

console.log(result);
