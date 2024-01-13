const fs = require("fs");
const input = fs
  .readFileSync("./input/11034.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const result = [];

input.forEach((value) => {
  const [a, b, c] = value.split(" ").map(Number);
  result.push(c - b > b - a ? c - b - 1 : b - a - 1);
});

console.log(result.join("\n"));
