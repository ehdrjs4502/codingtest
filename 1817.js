const fs = require("fs");
const input = fs
  .readFileSync("./input/1817.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, m] = input.shift().split(" ").map(Number);
if (n === 0) return console.log(0);
let kg = 0;
let result = 0;

const arr = input[0].split(" ").map(Number);

for (let i = 0; i < n; i++) {
  kg += arr[i];
  if (kg > m) {
    result++;
    kg = 0;
    i--;
  }
}

console.log(result + 1);
