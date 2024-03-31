const fs = require("fs");
const input = fs
  .readFileSync("./input/30457.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const left = new Set();
const right = new Set();
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

arr.forEach((value) => {
  if (left.has(value) && !right.has(value)) {
    right.add(value);
  } else {
    left.add(value);
  }
});

console.log(left.size + right.size);
