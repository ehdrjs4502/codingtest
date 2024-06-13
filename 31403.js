const fs = require("fs");
const input = fs
  .readFileSync("./input/31403.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [a, b, c] = input.map(Number);

console.log(a + b - c);
console.log(a.toString() + b.toString() - c.toString());
