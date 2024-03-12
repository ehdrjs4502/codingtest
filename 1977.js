const fs = require("fs");
const input = fs
  .readFileSync("./input/1977.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

let num = Math.floor(Math.sqrt(input[0]));
let result = [];

while (num ** 2 <= Number(input[1])) {
  if (num ** 2 >= Number(input[0])) {
    result.push(num ** 2);
  }
  num++;
}

if (!result.length) return console.log(-1);

console.log(
  result.reduce((a, b) => a + b),
  Math.min(...result)
);
