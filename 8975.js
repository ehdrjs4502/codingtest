const fs = require("fs");
const input = fs
  .readFileSync("./input/8975.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
const title = [];
const set = new Set();
let cnt = 0;
let result = 0;

for (let i = 0; i < n; i++) {
  title.push(input.shift());
}

const m = input.shift();

for (let j = 0; j < m; j++) {
  if (title.includes(input[j])) {
    set.add(input[j]);
  }
  if (set.size >= Math.round(title.length / 2)) {
    result = j + 1;
    break;
  }
}

console.log(result);
