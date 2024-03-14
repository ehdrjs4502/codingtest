const fs = require("fs");
const input = fs
  .readFileSync("./input/15969.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const max = Math.max(...input[1].split(" ").map(Number));
const min = Math.min(...input[1].split(" ").map(Number));

console.log(max - min);
