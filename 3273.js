const fs = require("fs");
const input = fs
  .readFileSync("./input/3273.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
const arr = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const x = +input.shift();

let p1 = 0;
let p2 = n - 1;
let result = 0;

while (p1 < p2) {
  let sum = arr[p1] + arr[p2];
  if (sum === x) {
    result++;
  }

  if (sum <= x) {
    p1++;
  } else {
    p2--;
  }
}

console.log(result);
