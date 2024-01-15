const fs = require("fs");
const input = fs
  .readFileSync("./input/1235.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();

let k = -1;
let len = input[0].length;
const set = new Set();

for (let i = 0; i < len; i++) {
  for (let j = 0; j < n; j++) {
    set.add(input[j].slice(k));
  }
  if (set.size == n) {
    return console.log(i + 1);
  }
  set.clear();
  k--;
}
