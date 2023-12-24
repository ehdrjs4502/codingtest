const fs = require("fs");
const input = fs
  .readFileSync("./input/4358.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const woodMap = new Map();
const result = [];
const len = input.length;

input.map((value) => {
  woodMap.set(value, (woodMap.get(value) || 0) + 1);
});

woodMap.forEach((count, woodType) => {
  const percentage = (count / len) * 100;
  result.push(`${woodType} ${percentage.toFixed(4)}`);
});

console.log(result.sort().join("\n"));
