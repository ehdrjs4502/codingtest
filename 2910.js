const fs = require("fs");
const input = fs
  .readFileSync("./input/2910.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();

const map = new Map();
const result = [];

input[0].split(" ").map((value) => {
  if (map.has(value)) {
    map.set(value, map.get(value) + 1);
  } else {
    map.set(value, 1);
  }
});

const mapToArray = Array(...map).sort((a, b) => {
  return b[1] - a[1];
});

mapToArray.map((value) => {
  result.push((value[0] + " ").repeat(value[1]));
});

console.log(result.join("").trim());
