const fs = require("fs");
const input = fs
  .readFileSync("./input/2870.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
const result = [];

for (let i = 0; i < n; i++) {
  let num = "";
  for (let j of input[i]) {
    if (!isNaN(j)) {
      num += j;
    } else if (isNaN(j)) {
      if (num.length > 0) {
        result.push(BigInt(num));
      }
      num = "";
    }
  }
  if (num.length > 0) {
    result.push(BigInt(num));
  }
}

console.log(result.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0)).join("\n"));
