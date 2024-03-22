const fs = require("fs");
const input = fs
  .readFileSync("./input/1940.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();
const m = +input.shift();
const arr = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let p1 = 0;
let p2 = arr.length - 1;
let result = 0;

while (p1 < p2) {
  let sum = arr[p1] + arr[p2];
  if (sum === m) {
    result++;
  }

  if (sum >= m) {
    p2--;
  } else {
    p1++;
  }
}

console.log(result);
