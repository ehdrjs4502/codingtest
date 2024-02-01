const fs = require("fs");
let input = fs
  .readFileSync("./input/12788.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
let count = input
  .shift()
  .split(" ")
  .reduce((pre, cur) => pre * cur);
const arr = input
  .shift()
  .split(" ")
  .sort((a, b) => b - a);

for (let i = 0; i < n; i++) {
  count -= arr[i];

  if (count <= 0) {
    return console.log(i + 1);
  }
}

console.log("STRESS");
