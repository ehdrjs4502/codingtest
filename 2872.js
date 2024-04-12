const fs = require("fs");
let input = fs
  .readFileSync("./input/2872.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const n = +input.shift();
const maxNum = Math.max(...input);
const maxIdx = input.indexOf(maxNum);
let target = maxNum - 1;
let cnt = 0;

for (let i = maxIdx; i >= 0; i--) {
  if (input[i] === target) {
    cnt++;
    target--;
  }
}

console.log(n - 1 - cnt);
