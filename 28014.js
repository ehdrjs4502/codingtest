const fs = require("fs");
const input = fs
  .readFileSync("./input/28014.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
const topArr = input[0].split(" ").map(Number);
let push = 1;

for (let i = 0; i < n - 1; i++) {
  if (topArr[i] > topArr[i + 1]) {
    continue;
  } else {
    push++;
  }
}

console.log(push);
