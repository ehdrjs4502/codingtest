const fs = require("fs");
const input = fs
  .readFileSync("./input/11645.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = input.shift();
const result = [];

for (let i = 0; i < t; i++) {
  const set = new Set();
  const n = input.shift();

  for (let j = 0; j < n; j++) {
    set.add(input.shift());
  }

  result.push(set.size);
}

console.log(result.join("\n"));
