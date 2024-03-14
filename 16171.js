const fs = require("fs");
const input = fs
  .readFileSync("./input/16171.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const str = input[0]
  .split("")
  .filter((value) => isNaN(value))
  .join("");

console.log(str.includes(input[1]) ? 1 : 0);
