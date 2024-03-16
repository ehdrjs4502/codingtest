const fs = require("fs");
const input = fs
  .readFileSync("./input/12780.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

let H = input.shift();
const N = input.shift();
let result = 0;
while (H.includes(N)) {
  H = H.replace(N, "");
  result++;
}
console.log(result);
