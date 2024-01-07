const fs = require("fs");
const input = fs
  .readFileSync("./input/2810.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();

console.log(Math.min(n, input[0].split(/S|LL/g).length));
