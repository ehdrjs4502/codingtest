const fs = require("fs");
const input = fs
  .readFileSync("./input/10824.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const arr = input[0].split(" ");
const ab = arr[0] + arr[1];
const cb = arr[2] + arr[3];

console.log(+ab + +cb);
