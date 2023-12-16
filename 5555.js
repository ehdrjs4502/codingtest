const fs = require("fs");
const input = fs
  .readFileSync("./input/5555.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const searchString = input.shift();
const n = Number(input.shift());
let result = 0;

for (let i = 0; i < n; i++) {
  string = input[i] + input[i];
  if (string.includes(searchString)) {
    result++;
  }
}

console.log(result);
