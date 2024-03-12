const fs = require("fs");
const input = fs
  .readFileSync("./input/1453.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();

const arr = input[0].split(" ");

console.log(arr.length - new Set(arr).size);
