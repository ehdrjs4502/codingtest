const fs = require("fs");
const input = fs
  .readFileSync("./input/1013.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.shift();
const reg = /^(100+1+|01)+$/;

input.forEach((value) => {
  console.log(reg.test(value) ? "YES" : "NO");
});
