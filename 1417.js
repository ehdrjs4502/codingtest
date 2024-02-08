const fs = require("fs");
let input = fs
  .readFileSync("./input/1417.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();
let dasom = input.shift();
let arr = input.map(Number);
let count = 0;

while (dasom <= Math.max(...arr)) {
  dasom++;
  count++;
  arr[arr.indexOf(Math.max(...arr))]--;
}

console.log(count);
