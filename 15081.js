const fs = require("fs");
const input = fs
  .readFileSync("./input/15081.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();

const set = new Set();

for (let i = 0; i < n; i++) {
  const arr = input[i].split(" ");
  const m = arr.shift();
  for (let j = 0; j < m; j++) {
    if (!set.has(arr[j])) {
      set.add(arr[j]);
      break;
    }
  }
}

console.log([...set].join(" "));
