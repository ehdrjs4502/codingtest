const fs = require("fs");
let input = fs
  .readFileSync("./input/13305.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = input.shift();
const km = input
  .shift()
  .split(" ")
  .map((value) => BigInt(value));
const price = input
  .shift()
  .split(" ")
  .map((value) => BigInt(value));
let minPrice = price[0];
let result = 0n;

for (let i = 0; i < n - 1; i++) {
  result += minPrice * km[i];

  if (minPrice > price[i + 1]) {
    minPrice = price[i + 1];
  }
}

console.log(String(result));
