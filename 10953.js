const fs = require("fs");
let input = fs
  .readFileSync("./input/10953.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();
let result = [];

input.forEach((value) => {
  const [a, b] = value.split(",").map(Number);
  result.push(a + b);
});

console.log(result.join("\n"));
