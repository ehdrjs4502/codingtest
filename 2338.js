const fs = require("fs");
const input = fs
  .readFileSync("./input/2338.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

let n1 = BigInt(input.shift());
let n2 = BigInt(input.shift());

console.log(`${n1 + n2}`);
console.log(`${n1 - n2}`);
console.log(`${n1 * n2}`);
