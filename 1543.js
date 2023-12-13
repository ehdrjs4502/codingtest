const fs = require("fs");
const input = fs
  .readFileSync("./input/1543.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

let str = input[0];
let word = input[1];
let result = 0;
let idx = 0;

while (idx >= 0) {
  idx = str.indexOf(word);
  if (idx >= 0) {
    str = str.slice(idx + word.length, str.length);
    result++;
  }
}

console.log(result);
