const fs = require("fs");
const input = fs
  .readFileSync("./input/5522.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

let result = 0;

input.map((value) => {
  result += +value;
});

console.log(result);
