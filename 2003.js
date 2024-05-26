const fs = require("fs");
const input = fs.readFileSync("./input/2003.txt").toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);

let start = 0;
let end = 0;
let sum = 0;
let result = 0;

while (end <= n) {
  if (sum == m) {
    result++;
  }

  if (sum >= m) {
    sum -= arr[start++];
  } else {
    sum += arr[end++];
  }
}

console.log(result);
