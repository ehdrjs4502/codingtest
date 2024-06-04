const fs = require("fs");
const input = fs
  .readFileSync("./input/15719.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = parseInt(input[0]);
let sum = (n * (n - 1)) / 2;
let temp = "";

for (let i = 0; i < input[1].length; i++) {
  const num = parseInt(input[1][i]);
  if (!isNaN(num)) {
    temp += num;
  } else {
    sum -= parseInt(temp);
    temp = "";
  }
}

if (!isNaN(parseInt(temp))) sum -= parseInt(temp);

console.log(Math.abs(sum));
