const fs = require("fs");
const input = fs.readFileSync("./input/1806.txt").toString().trim().split("\n");

const [n, s] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);

let start = 0;
let end = 0;
let sum = 0;
let result = Infinity;

while (end <= n) {
  if (sum >= s) {
    result = Math.min(result, end - start);
    sum -= arr[start++];
  } else {
    sum += arr[end++];
  }
}

console.log(result === Infinity ? 0 : result);
