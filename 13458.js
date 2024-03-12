const fs = require("fs");
const input = fs
  .readFileSync("./input/13458.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
const arr = input.shift().split(" ").map(Number);
const [b, c] = input.shift().split(" ").map(Number);

let result = 0;

for (let i = 0; i < n; i++) {
  let count = arr[i] - b;
  result++;
  if (count > 0) {
    result += Math.floor(count / c);
    count % c > 0 && result++;
  }
}

console.log(result);
