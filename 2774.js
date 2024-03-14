const fs = require("fs");
const input = fs
  .readFileSync("./input/2774.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();
const result = [];

input.map((value) => {
  const set = new Set();
  value.split("").map((num) => set.add(num));
  result.push(set.size);
});

console.log(result.join("\n"));
