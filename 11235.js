const fs = require("fs");
const input = fs
  .readFileSync("./input/11235.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();

const map = new Map();
let max = 0;
const result = [];

input.map((value) => {
  map.set(value, (map.get(value) || 0) + 1);
  if (max < map.get(value)) max = map.get(value);
});

[...map].map((value) => {
  value[1] === max && result.push(value[0]);
});

console.log(
  result
    .sort((a, b) => {
      return a.localeCompare(b);
    })
    .join("\n")
);
