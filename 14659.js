const fs = require("fs");
const input = fs
  .readFileSync("./input/14659.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
const arr = input[0].split(" ").map(Number);
let result = 0;
let count = 0;
let top = 0;

for (let i = 0; i < n; i++) {
  if (top < arr[i]) {
    top = arr[i];
    count = 0;
  } else {
    count++;
    if (result < count) {
      result = count;
    }
  }
}

console.log(result);
