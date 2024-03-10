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
  const numbers = input[i].match(/\d+/g);
  if (numbers) {
    numbers.forEach((num) => result.push(num));
  }
}
result.sort((a, b) => a - b);

console.log(result.map(BigInt).join("\n"));
