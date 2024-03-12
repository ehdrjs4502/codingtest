const fs = require("fs");
const input = fs
  .readFileSync("./input/1159.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();

const map = new Map();
const result = [];

input.forEach((value) => {
  map.set(value[0], map.get(value[0]) + 1 || 1);
});

[...map].forEach((value) => {
  value[1] >= 5 && result.push(value[0]);
});

console.log(result.length ? result.sort().join("") : "PREDAJA");
